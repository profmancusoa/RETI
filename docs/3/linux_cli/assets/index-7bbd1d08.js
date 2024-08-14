(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=o(i);fetch(i.href,l)}})();function Wt(n,s){const o=Object.create(null),a=n.split(",");for(let i=0;i<a.length;i++)o[a[i]]=!0;return s?i=>!!o[i.toLowerCase()]:i=>!!o[i]}const je=Object.freeze({}),Ts=Object.freeze([]),xn=()=>{},_p=()=>!1,Uf=/^on[^a-z]/,Ko=n=>Uf.test(n),$a=n=>n.startsWith("onUpdate:"),Ke=Object.assign,Jl=(n,s)=>{const o=n.indexOf(s);o>-1&&n.splice(o,1)},Gf=Object.prototype.hasOwnProperty,Ce=(n,s)=>Gf.call(n,s),ue=Array.isArray,cs=n=>Ho(n)==="[object Map]",gp=n=>Ho(n)==="[object Set]",Yf=n=>Ho(n)==="[object RegExp]",fe=n=>typeof n=="function",We=n=>typeof n=="string",Xl=n=>typeof n=="symbol",ze=n=>n!==null&&typeof n=="object",er=n=>ze(n)&&fe(n.then)&&fe(n.catch),vp=Object.prototype.toString,Ho=n=>vp.call(n),nr=n=>Ho(n).slice(8,-1),bp=n=>Ho(n)==="[object Object]",tr=n=>We(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,_a=Wt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qf=Wt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Qa=n=>{const s=Object.create(null);return o=>s[o]||(s[o]=n(o))},Zf=/-(\w)/g,ot=Qa(n=>n.replace(Zf,(s,o)=>o?o.toUpperCase():"")),Jf=/\B([A-Z])/g,vt=Qa(n=>n.replace(Jf,"-$1").toLowerCase()),gs=Qa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Zt=Qa(n=>n?`on${gs(n)}`:""),Io=(n,s)=>!Object.is(n,s),Xt=(n,s)=>{for(let o=0;o<n.length;o++)n[o](s)},La=(n,s,o)=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,value:o})},Xf=n=>{const s=parseFloat(n);return isNaN(s)?n:s},e1=n=>{const s=We(n)?Number(n):NaN;return isNaN(s)?n:s};let Jr;const Ca=()=>Jr||(Jr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tn(n){if(ue(n)){const s={};for(let o=0;o<n.length;o++){const a=n[o],i=We(a)?o1(a):tn(a);if(i)for(const l in i)s[l]=i[l]}return s}else{if(We(n))return n;if(ze(n))return n}}const n1=/;(?![^(]*\))/g,t1=/:([^]+)/,s1=/\/\*[^]*?\*\//g;function o1(n){const s={};return n.replace(s1,"").split(n1).forEach(o=>{if(o){const a=o.split(t1);a.length>1&&(s[a[0].trim()]=a[1].trim())}}),s}function qe(n){let s="";if(We(n))s=n;else if(ue(n))for(let o=0;o<n.length;o++){const a=qe(n[o]);a&&(s+=a+" ")}else if(ze(n))for(const o in n)n[o]&&(s+=o+" ");return s.trim()}function P(n){if(!n)return null;let{class:s,style:o}=n;return s&&!We(s)&&(n.class=qe(s)),o&&(n.style=tn(o)),n}const a1="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",i1="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",kp=Wt(a1),l1=Wt(i1),r1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",c1=Wt(r1);function xp(n){return!!n||n===""}const kn=n=>We(n)?n:n==null?"":ue(n)||ze(n)&&(n.toString===vp||!fe(n.toString))?JSON.stringify(n,wp,2):String(n),wp=(n,s)=>s&&s.__v_isRef?wp(n,s.value):cs(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((o,[a,i])=>(o[`${a} =>`]=i,o),{})}:gp(s)?{[`Set(${s.size})`]:[...s.values()]}:ze(s)&&!ue(s)&&!bp(s)?String(s):s;function Ea(n,...s){console.warn(`[Vue warn] ${n}`,...s)}let Cn;class yp{constructor(s=!1){this.detached=s,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Cn,!s&&Cn&&(this.index=(Cn.scopes||(Cn.scopes=[])).push(this)-1)}get active(){return this._active}run(s){if(this._active){const o=Cn;try{return Cn=this,s()}finally{Cn=o}}else Ea("cannot run an inactive effect scope.")}on(){Cn=this}off(){Cn=this.parent}stop(s){if(this._active){let o,a;for(o=0,a=this.effects.length;o<a;o++)this.effects[o].stop();for(o=0,a=this.cleanups.length;o<a;o++)this.cleanups[o]();if(this.scopes)for(o=0,a=this.scopes.length;o<a;o++)this.scopes[o].stop(!0);if(!this.detached&&this.parent&&!s){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function u1(n){return new yp(n)}function p1(n,s=Cn){s&&s.active&&s.effects.push(n)}function sr(){return Cn}function Ip(n){Cn?Cn.cleanups.push(n):Ea("onScopeDispose() is called when there is no active effect scope to be associated with.")}const or=n=>{const s=new Set(n);return s.w=0,s.n=0,s},$p=n=>(n.w&Ft)>0,Lp=n=>(n.n&Ft)>0,d1=({deps:n})=>{if(n.length)for(let s=0;s<n.length;s++)n[s].w|=Ft},m1=n=>{const{deps:s}=n;if(s.length){let o=0;for(let a=0;a<s.length;a++){const i=s[a];$p(i)&&!Lp(i)?i.delete(n):s[o++]=i,i.w&=~Ft,i.n&=~Ft}s.length=o}},Sa=new WeakMap;let so=0,Ft=1;const Yi=30;let fn;const us=Symbol("iterate"),Qi=Symbol("Map key iterate");class ar{constructor(s,o=null,a){this.fn=s,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,p1(this,a)}run(){if(!this.active)return this.fn();let s=fn,o=Tt;for(;s;){if(s===this)return;s=s.parent}try{return this.parent=fn,fn=this,Tt=!0,Ft=1<<++so,so<=Yi?d1(this):Xr(this),this.fn()}finally{so<=Yi&&m1(this),Ft=1<<--so,fn=this.parent,Tt=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){fn===this?this.deferStop=!0:this.active&&(Xr(this),this.onStop&&this.onStop(),this.active=!1)}}function Xr(n){const{deps:s}=n;if(s.length){for(let o=0;o<s.length;o++)s[o].delete(n);s.length=0}}let Tt=!0;const Cp=[];function bs(){Cp.push(Tt),Tt=!1}function ks(){const n=Cp.pop();Tt=n===void 0?!0:n}function cn(n,s,o){if(Tt&&fn){let a=Sa.get(n);a||Sa.set(n,a=new Map);let i=a.get(o);i||a.set(o,i=or()),Ep(i,{effect:fn,target:n,type:s,key:o})}}function Ep(n,s){let o=!1;so<=Yi?Lp(n)||(n.n|=Ft,o=!$p(n)):o=!n.has(fn),o&&(n.add(fn),fn.deps.push(n),fn.onTrack&&fn.onTrack(Ke({effect:fn},s)))}function at(n,s,o,a,i,l){const r=Sa.get(n);if(!r)return;let c=[];if(s==="clear")c=[...r.values()];else if(o==="length"&&ue(n)){const p=Number(a);r.forEach((d,m)=>{(m==="length"||m>=p)&&c.push(d)})}else switch(o!==void 0&&c.push(r.get(o)),s){case"add":ue(n)?tr(o)&&c.push(r.get("length")):(c.push(r.get(us)),cs(n)&&c.push(r.get(Qi)));break;case"delete":ue(n)||(c.push(r.get(us)),cs(n)&&c.push(r.get(Qi)));break;case"set":cs(n)&&c.push(r.get(us));break}const u={target:n,type:s,key:o,newValue:a,oldValue:i,oldTarget:l};if(c.length===1)c[0]&&Zi(c[0],u);else{const p=[];for(const d of c)d&&p.push(...d);Zi(or(p),u)}}function Zi(n,s){const o=ue(n)?n:[...n];for(const a of o)a.computed&&ec(a,s);for(const a of o)a.computed||ec(a,s)}function ec(n,s){(n!==fn||n.allowRecurse)&&(n.onTrigger&&n.onTrigger(Ke({effect:n},s)),n.scheduler?n.scheduler():n.run())}function f1(n,s){var o;return(o=Sa.get(n))==null?void 0:o.get(s)}const h1=Wt("__proto__,__v_isRef,__isVue"),Sp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Xl)),_1=Za(),g1=Za(!1,!0),v1=Za(!0),b1=Za(!0,!0),nc=k1();function k1(){const n={};return["includes","indexOf","lastIndexOf"].forEach(s=>{n[s]=function(...o){const a=ge(this);for(let l=0,r=this.length;l<r;l++)cn(a,"get",l+"");const i=a[s](...o);return i===-1||i===!1?a[s](...o.map(ge)):i}}),["push","pop","shift","unshift","splice"].forEach(s=>{n[s]=function(...o){bs();const a=ge(this)[s].apply(this,o);return ks(),a}}),n}function x1(n){const s=ge(this);return cn(s,"has",n),s.hasOwnProperty(n)}function Za(n=!1,s=!1){return function(a,i,l){if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return s;if(i==="__v_raw"&&l===(n?s?Dp:Pp:s?Op:zp).get(a))return a;const r=ue(a);if(!n){if(r&&Ce(nc,i))return Reflect.get(nc,i,l);if(i==="hasOwnProperty")return x1}const c=Reflect.get(a,i,l);return(Xl(i)?Sp.has(i):h1(i))||(n||cn(a,"get",i),s)?c:Ae(c)?r&&tr(i)?c:c.value:ze(c)?n?Un(c):Be(c):c}}const w1=Rp(),y1=Rp(!0);function Rp(n=!1){return function(o,a,i,l){let r=o[a];if(jt(r)&&Ae(r)&&!Ae(i))return!1;if(!n&&(!Ra(i)&&!jt(i)&&(r=ge(r),i=ge(i)),!ue(o)&&Ae(r)&&!Ae(i)))return r.value=i,!0;const c=ue(o)&&tr(a)?Number(a)<o.length:Ce(o,a),u=Reflect.set(o,a,i,l);return o===ge(l)&&(c?Io(i,r)&&at(o,"set",a,i,r):at(o,"add",a,i)),u}}function I1(n,s){const o=Ce(n,s),a=n[s],i=Reflect.deleteProperty(n,s);return i&&o&&at(n,"delete",s,void 0,a),i}function $1(n,s){const o=Reflect.has(n,s);return(!Xl(s)||!Sp.has(s))&&cn(n,"has",s),o}function L1(n){return cn(n,"iterate",ue(n)?"length":us),Reflect.ownKeys(n)}const Tp={get:_1,set:w1,deleteProperty:I1,has:$1,ownKeys:L1},Ap={get:v1,set(n,s){return Ea(`Set operation on key "${String(s)}" failed: target is readonly.`,n),!0},deleteProperty(n,s){return Ea(`Delete operation on key "${String(s)}" failed: target is readonly.`,n),!0}},C1=Ke({},Tp,{get:g1,set:y1}),E1=Ke({},Ap,{get:b1}),ir=n=>n,Ja=n=>Reflect.getPrototypeOf(n);function Jo(n,s,o=!1,a=!1){n=n.__v_raw;const i=ge(n),l=ge(s);o||(s!==l&&cn(i,"get",s),cn(i,"get",l));const{has:r}=Ja(i),c=a?ir:o?lr:$o;if(r.call(i,s))return c(n.get(s));if(r.call(i,l))return c(n.get(l));n!==i&&n.get(s)}function Xo(n,s=!1){const o=this.__v_raw,a=ge(o),i=ge(n);return s||(n!==i&&cn(a,"has",n),cn(a,"has",i)),n===i?o.has(n):o.has(n)||o.has(i)}function ea(n,s=!1){return n=n.__v_raw,!s&&cn(ge(n),"iterate",us),Reflect.get(n,"size",n)}function tc(n){n=ge(n);const s=ge(this);return Ja(s).has.call(s,n)||(s.add(n),at(s,"add",n,n)),this}function sc(n,s){s=ge(s);const o=ge(this),{has:a,get:i}=Ja(o);let l=a.call(o,n);l?Mp(o,a,n):(n=ge(n),l=a.call(o,n));const r=i.call(o,n);return o.set(n,s),l?Io(s,r)&&at(o,"set",n,s,r):at(o,"add",n,s),this}function oc(n){const s=ge(this),{has:o,get:a}=Ja(s);let i=o.call(s,n);i?Mp(s,o,n):(n=ge(n),i=o.call(s,n));const l=a?a.call(s,n):void 0,r=s.delete(n);return i&&at(s,"delete",n,void 0,l),r}function ac(){const n=ge(this),s=n.size!==0,o=cs(n)?new Map(n):new Set(n),a=n.clear();return s&&at(n,"clear",void 0,void 0,o),a}function na(n,s){return function(a,i){const l=this,r=l.__v_raw,c=ge(r),u=s?ir:n?lr:$o;return!n&&cn(c,"iterate",us),r.forEach((p,d)=>a.call(i,u(p),u(d),l))}}function ta(n,s,o){return function(...a){const i=this.__v_raw,l=ge(i),r=cs(l),c=n==="entries"||n===Symbol.iterator&&r,u=n==="keys"&&r,p=i[n](...a),d=o?ir:s?lr:$o;return!s&&cn(l,"iterate",u?Qi:us),{next(){const{value:m,done:f}=p.next();return f?{value:m,done:f}:{value:c?[d(m[0]),d(m[1])]:d(m),done:f}},[Symbol.iterator](){return this}}}}function wt(n){return function(...s){{const o=s[0]?`on key "${s[0]}" `:"";console.warn(`${gs(n)} operation ${o}failed: target is readonly.`,ge(this))}return n==="delete"?!1:this}}function S1(){const n={get(l){return Jo(this,l)},get size(){return ea(this)},has:Xo,add:tc,set:sc,delete:oc,clear:ac,forEach:na(!1,!1)},s={get(l){return Jo(this,l,!1,!0)},get size(){return ea(this)},has:Xo,add:tc,set:sc,delete:oc,clear:ac,forEach:na(!1,!0)},o={get(l){return Jo(this,l,!0)},get size(){return ea(this,!0)},has(l){return Xo.call(this,l,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:na(!0,!1)},a={get(l){return Jo(this,l,!0,!0)},get size(){return ea(this,!0)},has(l){return Xo.call(this,l,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:na(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{n[l]=ta(l,!1,!1),o[l]=ta(l,!0,!1),s[l]=ta(l,!1,!0),a[l]=ta(l,!0,!0)}),[n,o,s,a]}const[R1,T1,A1,M1]=S1();function Xa(n,s){const o=s?n?M1:A1:n?T1:R1;return(a,i,l)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?a:Reflect.get(Ce(o,i)&&i in a?o:a,i,l)}const z1={get:Xa(!1,!1)},O1={get:Xa(!1,!0)},P1={get:Xa(!0,!1)},D1={get:Xa(!0,!0)};function Mp(n,s,o){const a=ge(o);if(a!==o&&s.call(n,a)){const i=nr(n);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const zp=new WeakMap,Op=new WeakMap,Pp=new WeakMap,Dp=new WeakMap;function N1(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function F1(n){return n.__v_skip||!Object.isExtensible(n)?0:N1(nr(n))}function Be(n){return jt(n)?n:ei(n,!1,Tp,z1,zp)}function j1(n){return ei(n,!1,C1,O1,Op)}function Un(n){return ei(n,!0,Ap,P1,Pp)}function oo(n){return ei(n,!0,E1,D1,Dp)}function ei(n,s,o,a,i){if(!ze(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(s&&n.__v_isReactive))return n;const l=i.get(n);if(l)return l;const r=F1(n);if(r===0)return n;const c=new Proxy(n,r===2?a:o);return i.set(n,c),c}function ps(n){return jt(n)?ps(n.__v_raw):!!(n&&n.__v_isReactive)}function jt(n){return!!(n&&n.__v_isReadonly)}function Ra(n){return!!(n&&n.__v_isShallow)}function Ta(n){return ps(n)||jt(n)}function ge(n){const s=n&&n.__v_raw;return s?ge(s):n}function ni(n){return La(n,"__v_skip",!0),n}const $o=n=>ze(n)?Be(n):n,lr=n=>ze(n)?Un(n):n;function rr(n){Tt&&fn&&(n=ge(n),Ep(n.dep||(n.dep=or()),{target:n,type:"get",key:"value"}))}function cr(n,s){n=ge(n);const o=n.dep;o&&Zi(o,{target:n,type:"set",key:"value",newValue:s})}function Ae(n){return!!(n&&n.__v_isRef===!0)}function J(n){return Np(n,!1)}function it(n){return Np(n,!0)}function Np(n,s){return Ae(n)?n:new K1(n,s)}class K1{constructor(s,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?s:ge(s),this._value=o?s:$o(s)}get value(){return rr(this),this._value}set value(s){const o=this.__v_isShallow||Ra(s)||jt(s);s=o?s:ge(s),Io(s,this._rawValue)&&(this._rawValue=s,this._value=o?s:$o(s),cr(this,s))}}function z(n){return Ae(n)?n.value:n}const H1={get:(n,s,o)=>z(Reflect.get(n,s,o)),set:(n,s,o,a)=>{const i=n[s];return Ae(i)&&!Ae(o)?(i.value=o,!0):Reflect.set(n,s,o,a)}};function Fp(n){return ps(n)?n:new Proxy(n,H1)}class W1{constructor(s){this.dep=void 0,this.__v_isRef=!0;const{get:o,set:a}=s(()=>rr(this),()=>cr(this));this._get=o,this._set=a}get value(){return this._get()}set value(s){this._set(s)}}function ur(n){return new W1(n)}function B1(n){Ta(n)||console.warn("toRefs() expects a reactive object but received a plain one.");const s=ue(n)?new Array(n.length):{};for(const o in n)s[o]=jp(n,o);return s}class q1{constructor(s,o,a){this._object=s,this._key=o,this._defaultValue=a,this.__v_isRef=!0}get value(){const s=this._object[this._key];return s===void 0?this._defaultValue:s}set value(s){this._object[this._key]=s}get dep(){return f1(ge(this._object),this._key)}}class V1{constructor(s){this._getter=s,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function U1(n,s,o){return Ae(n)?n:fe(n)?new V1(n):ze(n)&&arguments.length>1?jp(n,s,o):J(n)}function jp(n,s,o){const a=n[s];return Ae(a)?a:new q1(n,s,o)}class G1{constructor(s,o,a,i){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ar(s,()=>{this._dirty||(this._dirty=!0,cr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=a}get value(){const s=ge(this);return rr(s),(s._dirty||!s._cacheable)&&(s._dirty=!1,s._value=s.effect.run()),s._value}set value(s){this._setter(s)}}function Y1(n,s,o=!1){let a,i;const l=fe(n);l?(a=n,i=()=>{console.warn("Write operation failed: computed value is readonly")}):(a=n.get,i=n.set);const r=new G1(a,i,l||!i,o);return s&&!o&&(r.effect.onTrack=s.onTrack,r.effect.onTrigger=s.onTrigger),r}const ds=[];function ga(n){ds.push(n)}function va(){ds.pop()}function q(n,...s){bs();const o=ds.length?ds[ds.length-1].component:null,a=o&&o.appContext.config.warnHandler,i=Q1();if(a)gt(a,o,11,[n+s.join(""),o&&o.proxy,i.map(({vnode:l})=>`at <${pi(o,l.type)}>`).join(`
`),i]);else{const l=[`[Vue warn]: ${n}`,...s];i.length&&l.push(`
`,...Z1(i)),console.warn(...l)}ks()}function Q1(){let n=ds[ds.length-1];if(!n)return[];const s=[];for(;n;){const o=s[0];o&&o.vnode===n?o.recurseCount++:s.push({vnode:n,recurseCount:0});const a=n.component&&n.component.parent;n=a&&a.vnode}return s}function Z1(n){const s=[];return n.forEach((o,a)=>{s.push(...a===0?[]:[`
`],...J1(o))}),s}function J1({vnode:n,recurseCount:s}){const o=s>0?`... (${s} recursive calls)`:"",a=n.component?n.component.parent==null:!1,i=` at <${pi(n.component,n.type,a)}`,l=">"+o;return n.props?[i,...X1(n.props),l]:[i+l]}function X1(n){const s=[],o=Object.keys(n);return o.slice(0,3).forEach(a=>{s.push(...Kp(a,n[a]))}),o.length>3&&s.push(" ..."),s}function Kp(n,s,o){return We(s)?(s=JSON.stringify(s),o?s:[`${n}=${s}`]):typeof s=="number"||typeof s=="boolean"||s==null?o?s:[`${n}=${s}`]:Ae(s)?(s=Kp(n,ge(s.value),!0),o?s:[`${n}=Ref<`,s,">"]):fe(s)?[`${n}=fn${s.name?`<${s.name}>`:""}`]:(s=ge(s),o?s:[`${n}=`,s])}function eh(n,s){n!==void 0&&(typeof n!="number"?q(`${s} is not a valid number - got ${JSON.stringify(n)}.`):isNaN(n)&&q(`${s} is NaN - the duration expression might be incorrect.`))}const pr={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function gt(n,s,o,a){let i;try{i=a?n(...a):n()}catch(l){ti(l,s,o)}return i}function Fn(n,s,o,a){if(fe(n)){const l=gt(n,s,o,a);return l&&er(l)&&l.catch(r=>{ti(r,s,o)}),l}const i=[];for(let l=0;l<n.length;l++)i.push(Fn(n[l],s,o,a));return i}function ti(n,s,o,a=!0){const i=s?s.vnode:null;if(s){let l=s.parent;const r=s.proxy,c=pr[o];for(;l;){const p=l.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](n,r,c)===!1)return}l=l.parent}const u=s.appContext.config.errorHandler;if(u){gt(u,null,10,[n,r,c]);return}}nh(n,o,i,a)}function nh(n,s,o,a=!0){{const i=pr[s];if(o&&ga(o),q(`Unhandled error${i?` during execution of ${i}`:""}`),o&&va(),a)throw n;console.error(n)}}let Lo=!1,Ji=!1;const on=[];let et=0;const As=[];let Xn=null,Lt=0;const Hp=Promise.resolve();let dr=null;const th=100;function an(n){const s=dr||Hp;return n?s.then(this?n.bind(this):n):s}function sh(n){let s=et+1,o=on.length;for(;s<o;){const a=s+o>>>1;Co(on[a])<n?s=a+1:o=a}return s}function si(n){(!on.length||!on.includes(n,Lo&&n.allowRecurse?et+1:et))&&(n.id==null?on.push(n):on.splice(sh(n.id),0,n),Wp())}function Wp(){!Lo&&!Ji&&(Ji=!0,dr=Hp.then(Vp))}function oh(n){const s=on.indexOf(n);s>et&&on.splice(s,1)}function Bp(n){ue(n)?As.push(...n):(!Xn||!Xn.includes(n,n.allowRecurse?Lt+1:Lt))&&As.push(n),Wp()}function ic(n,s=Lo?et+1:0){for(n=n||new Map;s<on.length;s++){const o=on[s];if(o&&o.pre){if(mr(n,o))continue;on.splice(s,1),s--,o()}}}function qp(n){if(As.length){const s=[...new Set(As)];if(As.length=0,Xn){Xn.push(...s);return}for(Xn=s,n=n||new Map,Xn.sort((o,a)=>Co(o)-Co(a)),Lt=0;Lt<Xn.length;Lt++)mr(n,Xn[Lt])||Xn[Lt]();Xn=null,Lt=0}}const Co=n=>n.id==null?1/0:n.id,ah=(n,s)=>{const o=Co(n)-Co(s);if(o===0){if(n.pre&&!s.pre)return-1;if(s.pre&&!n.pre)return 1}return o};function Vp(n){Ji=!1,Lo=!0,n=n||new Map,on.sort(ah);const s=o=>mr(n,o);try{for(et=0;et<on.length;et++){const o=on[et];if(o&&o.active!==!1){if(s(o))continue;gt(o,null,14)}}}finally{et=0,on.length=0,qp(n),Lo=!1,dr=null,(on.length||As.length)&&Vp(n)}}function mr(n,s){if(!n.has(s))n.set(s,1);else{const o=n.get(s);if(o>th){const a=s.ownerInstance,i=a&&Ro(a.type);return q(`Maximum recursive updates exceeded${i?` in component <${i}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else n.set(s,o+1)}}let At=!1;const Ss=new Set;Ca().__VUE_HMR_RUNTIME__={createRecord:gi(Up),rerender:gi(rh),reload:gi(ch)};const vs=new Map;function ih(n){const s=n.type.__hmrId;let o=vs.get(s);o||(Up(s,n.type),o=vs.get(s)),o.instances.add(n)}function lh(n){vs.get(n.type.__hmrId).instances.delete(n)}function Up(n,s){return vs.has(n)?!1:(vs.set(n,{initialDef:uo(s),instances:new Set}),!0)}function uo(n){return $d(n)?n.__vccOpts:n}function rh(n,s){const o=vs.get(n);o&&(o.initialDef.render=s,[...o.instances].forEach(a=>{s&&(a.render=s,uo(a.type).render=s),a.renderCache=[],At=!0,a.update(),At=!1}))}function ch(n,s){const o=vs.get(n);if(!o)return;s=uo(s),lc(o.initialDef,s);const a=[...o.instances];for(const i of a){const l=uo(i.type);Ss.has(l)||(l!==o.initialDef&&lc(l,s),Ss.add(l)),i.appContext.propsCache.delete(i.type),i.appContext.emitsCache.delete(i.type),i.appContext.optionsCache.delete(i.type),i.ceReload?(Ss.add(l),i.ceReload(s.styles),Ss.delete(l)):i.parent?si(i.parent.update):i.appContext.reload?i.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Bp(()=>{for(const i of a)Ss.delete(uo(i.type))})}function lc(n,s){Ke(n,s);for(const o in n)o!=="__file"&&!(o in s)&&delete n[o]}function gi(n){return(s,o)=>{try{return n(s,o)}catch(a){console.error(a),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let nt,ao=[],Xi=!1;function Wo(n,...s){nt?nt.emit(n,...s):Xi||ao.push({event:n,args:s})}function Gp(n,s){var o,a;nt=n,nt?(nt.enabled=!0,ao.forEach(({event:i,args:l})=>nt.emit(i,...l)),ao=[]):typeof window<"u"&&window.HTMLElement&&!((a=(o=window.navigator)==null?void 0:o.userAgent)!=null&&a.includes("jsdom"))?((s.__VUE_DEVTOOLS_HOOK_REPLAY__=s.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{Gp(l,s)}),setTimeout(()=>{nt||(s.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Xi=!0,ao=[])},3e3)):(Xi=!0,ao=[])}function uh(n,s){Wo("app:init",n,s,{Fragment:Te,Text:Vo,Comment:hn,Static:po})}function ph(n){Wo("app:unmount",n)}const el=fr("component:added"),Yp=fr("component:updated"),dh=fr("component:removed"),mh=n=>{nt&&typeof nt.cleanupBuffer=="function"&&!nt.cleanupBuffer(n)&&dh(n)};function fr(n){return s=>{Wo(n,s.appContext.app,s.uid,s.parent?s.parent.uid:void 0,s)}}const fh=Qp("perf:start"),hh=Qp("perf:end");function Qp(n){return(s,o,a)=>{Wo(n,s.appContext.app,s.uid,s,o,a)}}function _h(n,s,o){Wo("component:emit",n.appContext.app,n,s,o)}function gh(n,s,...o){if(n.isUnmounted)return;const a=n.vnode.props||je;{const{emitsOptions:d,propsOptions:[m]}=n;if(d)if(!(s in d))(!m||!(Zt(s)in m))&&q(`Component emitted event "${s}" but it is neither declared in the emits option nor as an "${Zt(s)}" prop.`);else{const f=d[s];fe(f)&&(f(...o)||q(`Invalid event arguments: event validation failed for event "${s}".`))}}let i=o;const l=s.startsWith("update:"),r=l&&s.slice(7);if(r&&r in a){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:m,trim:f}=a[d]||je;f&&(i=o.map(h=>We(h)?h.trim():h)),m&&(i=o.map(Xf))}_h(n,s,i);{const d=s.toLowerCase();d!==s&&a[Zt(d)]&&q(`Event "${d}" is emitted in component ${pi(n,n.type)} but the handler is registered for "${s}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${vt(s)}" instead of "${s}".`)}let c,u=a[c=Zt(s)]||a[c=Zt(ot(s))];!u&&l&&(u=a[c=Zt(vt(s))]),u&&Fn(u,n,6,i);const p=a[c+"Once"];if(p){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Fn(p,n,6,i)}}function Zp(n,s,o=!1){const a=s.emitsCache,i=a.get(n);if(i!==void 0)return i;const l=n.emits;let r={},c=!1;if(!fe(n)){const u=p=>{const d=Zp(p,s,!0);d&&(c=!0,Ke(r,d))};!o&&s.mixins.length&&s.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!l&&!c?(ze(n)&&a.set(n,null),null):(ue(l)?l.forEach(u=>r[u]=null):Ke(r,l),ze(n)&&a.set(n,r),r)}function oi(n,s){return!n||!Ko(s)?!1:(s=s.slice(2).replace(/Once$/,""),Ce(n,s[0].toLowerCase()+s.slice(1))||Ce(n,vt(s))||Ce(n,s))}let Xe=null,ai=null;function Aa(n){const s=Xe;return Xe=n,ai=n&&n.type.__scopeId||null,s}function RN(n){ai=n}function TN(){ai=null}function v(n,s=Xe,o){if(!s||n._n)return n;const a=(...i)=>{a._d&&xc(-1);const l=Aa(s);let r;try{r=n(...i)}finally{Aa(l),a._d&&xc(1)}return Yp(s),r};return a._n=!0,a._c=!0,a._d=!0,a}let nl=!1;function Ma(){nl=!0}function vi(n){const{type:s,vnode:o,proxy:a,withProxy:i,props:l,propsOptions:[r],slots:c,attrs:u,emit:p,render:d,renderCache:m,data:f,setupState:h,ctx:_,inheritAttrs:w}=n;let y,I;const $=Aa(n);nl=!1;try{if(o.shapeFlag&4){const T=i||a;y=Vn(d.call(T,T,m,l,h,f,_)),I=u}else{const T=s;u===l&&Ma(),y=Vn(T.length>1?T(l,{get attrs(){return Ma(),u},slots:c,emit:p}):T(l,null)),I=s.props?u:bh(u)}}catch(T){mo.length=0,ti(T,n,1),y=R(hn)}let k=y,M;if(y.patchFlag>0&&y.patchFlag&2048&&([k,M]=vh(y)),I&&w!==!1){const T=Object.keys(I),{shapeFlag:N}=k;if(T.length){if(N&7)r&&T.some($a)&&(I=kh(I,r)),k=lt(k,I);else if(!nl&&k.type!==hn){const B=Object.keys(u),j=[],U=[];for(let le=0,me=B.length;le<me;le++){const X=B[le];Ko(X)?$a(X)||j.push(X[2].toLowerCase()+X.slice(3)):U.push(X)}U.length&&q(`Extraneous non-props attributes (${U.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),j.length&&q(`Extraneous non-emits event listeners (${j.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return o.dirs&&(rc(k)||q("Runtime directive used on component with non-element root node. The directives will not function as intended."),k=lt(k),k.dirs=k.dirs?k.dirs.concat(o.dirs):o.dirs),o.transition&&(rc(k)||q("Component inside <Transition> renders non-element root node that cannot be animated."),k.transition=o.transition),M?M(k):y=k,Aa($),y}const vh=n=>{const s=n.children,o=n.dynamicChildren,a=Jp(s);if(!a)return[n,void 0];const i=s.indexOf(a),l=o?o.indexOf(a):-1,r=c=>{s[i]=c,o&&(l>-1?o[l]=c:c.patchFlag>0&&(n.dynamicChildren=[...o,c]))};return[Vn(a),r]};function Jp(n){let s;for(let o=0;o<n.length;o++){const a=n[o];if(Kt(a)){if(a.type!==hn||a.children==="v-if"){if(s)return;s=a}}else return}return s}const bh=n=>{let s;for(const o in n)(o==="class"||o==="style"||Ko(o))&&((s||(s={}))[o]=n[o]);return s},kh=(n,s)=>{const o={};for(const a in n)(!$a(a)||!(a.slice(9)in s))&&(o[a]=n[a]);return o},rc=n=>n.shapeFlag&7||n.type===hn;function xh(n,s,o){const{props:a,children:i,component:l}=n,{props:r,children:c,patchFlag:u}=s,p=l.emitsOptions;if((i||c)&&At||s.dirs||s.transition)return!0;if(o&&u>=0){if(u&1024)return!0;if(u&16)return a?cc(a,r,p):!!r;if(u&8){const d=s.dynamicProps;for(let m=0;m<d.length;m++){const f=d[m];if(r[f]!==a[f]&&!oi(p,f))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:a===r?!1:a?r?cc(a,r,p):!0:!!r;return!1}function cc(n,s,o){const a=Object.keys(s);if(a.length!==Object.keys(n).length)return!0;for(let i=0;i<a.length;i++){const l=a[i];if(s[l]!==n[l]&&!oi(o,l))return!0}return!1}function wh({vnode:n,parent:s},o){for(;s&&s.subTree===n;)(n=s.vnode).el=o,s=s.parent}const Xp=n=>n.__isSuspense;function yh(n,s){s&&s.pendingBranch?ue(n)?s.effects.push(...n):s.effects.push(n):Bp(n)}function xs(n,s){return ii(n,null,s)}function Ih(n,s){return ii(n,null,Ke({},s,{flush:"post"}))}const sa={};function be(n,s,o){return fe(s)||q("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),ii(n,s,o)}function ii(n,s,{immediate:o,deep:a,flush:i,onTrack:l,onTrigger:r}=je){var c;s||(o!==void 0&&q('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),a!==void 0&&q('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const u=T=>{q("Invalid watch source: ",T,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=sr()===((c=Je)==null?void 0:c.scope)?Je:null;let d,m=!1,f=!1;if(Ae(n)?(d=()=>n.value,m=Ra(n)):ps(n)?(d=()=>n,a=!0):ue(n)?(f=!0,m=n.some(T=>ps(T)||Ra(T)),d=()=>n.map(T=>{if(Ae(T))return T.value;if(ps(T))return is(T);if(fe(T))return gt(T,p,2);u(T)})):fe(n)?s?d=()=>gt(n,p,2):d=()=>{if(!(p&&p.isUnmounted))return h&&h(),Fn(n,p,3,[_])}:(d=xn,u(n)),s&&a){const T=d;d=()=>is(T())}let h,_=T=>{h=k.onStop=()=>{gt(T,p,4)}},w;if(So)if(_=xn,s?o&&Fn(s,p,3,[d(),f?[]:void 0,_]):d(),i==="sync"){const T=A_();w=T.__watcherHandles||(T.__watcherHandles=[])}else return xn;let y=f?new Array(n.length).fill(sa):sa;const I=()=>{if(k.active)if(s){const T=k.run();(a||m||(f?T.some((N,B)=>Io(N,y[B])):Io(T,y)))&&(h&&h(),Fn(s,p,3,[T,y===sa?void 0:f&&y[0]===sa?[]:y,_]),y=T)}else k.run()};I.allowRecurse=!!s;let $;i==="sync"?$=I:i==="post"?$=()=>nn(I,p&&p.suspense):(I.pre=!0,p&&(I.id=p.uid),$=()=>si(I));const k=new ar(d,$);k.onTrack=l,k.onTrigger=r,s?o?I():y=k.run():i==="post"?nn(k.run.bind(k),p&&p.suspense):k.run();const M=()=>{k.stop(),p&&p.scope&&Jl(p.scope.effects,k)};return w&&w.push(M),M}function $h(n,s,o){const a=this.proxy,i=We(n)?n.includes(".")?ed(a,n):()=>a[n]:n.bind(a,a);let l;fe(s)?l=s:(l=s.handler,o=s);const r=Je;Ps(this);const c=ii(i,l.bind(a),o);return r?Ps(r):fs(),c}function ed(n,s){const o=s.split(".");return()=>{let a=n;for(let i=0;i<o.length&&a;i++)a=a[o[i]];return a}}function is(n,s){if(!ze(n)||n.__v_skip||(s=s||new Set,s.has(n)))return n;if(s.add(n),Ae(n))is(n.value,s);else if(ue(n))for(let o=0;o<n.length;o++)is(n[o],s);else if(gp(n)||cs(n))n.forEach(o=>{is(o,s)});else if(bp(n))for(const o in n)is(n[o],s);return n}function nd(n){Qf(n)&&q("Do not use built-in directive ids as custom directive id: "+n)}function td(n,s){const o=Xe;if(o===null)return q("withDirectives can only be used inside render functions."),n;const a=ui(o)||o.proxy,i=n.dirs||(n.dirs=[]);for(let l=0;l<s.length;l++){let[r,c,u,p=je]=s[l];r&&(fe(r)&&(r={mounted:r,updated:r}),r.deep&&is(c),i.push({dir:r,instance:a,value:c,oldValue:void 0,arg:u,modifiers:p}))}return n}function Vt(n,s,o,a){const i=n.dirs,l=s&&s.dirs;for(let r=0;r<i.length;r++){const c=i[r];l&&(c.oldValue=l[r].value);let u=c.dir[a];u&&(bs(),Fn(u,o,8,[n.el,c,n,s]),ks())}}function Lh(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xt(()=>{n.isMounted=!0}),Bo(()=>{n.isUnmounting=!0}),n}const On=[Function,Array],Ch={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:On,onEnter:On,onAfterEnter:On,onEnterCancelled:On,onBeforeLeave:On,onLeave:On,onAfterLeave:On,onLeaveCancelled:On,onBeforeAppear:On,onAppear:On,onAfterAppear:On,onAppearCancelled:On};function Eh(n,s){const{leavingVNodes:o}=n;let a=o.get(s.type);return a||(a=Object.create(null),o.set(s.type,a)),a}function tl(n,s,o,a){const{appear:i,mode:l,persisted:r=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:m,onLeave:f,onAfterLeave:h,onLeaveCancelled:_,onBeforeAppear:w,onAppear:y,onAfterAppear:I,onAppearCancelled:$}=s,k=String(n.key),M=Eh(o,n),T=(j,U)=>{j&&Fn(j,a,9,U)},N=(j,U)=>{const le=U[1];T(j,U),ue(j)?j.every(me=>me.length<=1)&&le():j.length<=1&&le()},B={mode:l,persisted:r,beforeEnter(j){let U=c;if(!o.isMounted)if(i)U=w||c;else return;j._leaveCb&&j._leaveCb(!0);const le=M[k];le&&es(n,le)&&le.el._leaveCb&&le.el._leaveCb(),T(U,[j])},enter(j){let U=u,le=p,me=d;if(!o.isMounted)if(i)U=y||u,le=I||p,me=$||d;else return;let X=!1;const ve=j._enterCb=ke=>{X||(X=!0,ke?T(me,[j]):T(le,[j]),B.delayedLeave&&B.delayedLeave(),j._enterCb=void 0)};U?N(U,[j,ve]):ve()},leave(j,U){const le=String(n.key);if(j._enterCb&&j._enterCb(!0),o.isUnmounting)return U();T(m,[j]);let me=!1;const X=j._leaveCb=ve=>{me||(me=!0,U(),ve?T(_,[j]):T(h,[j]),j._leaveCb=void 0,M[le]===n&&delete M[le])};M[le]=n,f?N(f,[j,X]):X()},clone(j){return tl(j,s,o,a)}};return B}function za(n,s){n.shapeFlag&6&&n.component?za(n.component.subTree,s):n.shapeFlag&128?(n.ssContent.transition=s.clone(n.ssContent),n.ssFallback.transition=s.clone(n.ssFallback)):n.transition=s}function sd(n,s=!1,o){let a=[],i=0;for(let l=0;l<n.length;l++){let r=n[l];const c=o==null?r.key:String(o)+String(r.key!=null?r.key:l);r.type===Te?(r.patchFlag&128&&i++,a=a.concat(sd(r.children,s,c))):(s||r.type!==hn)&&a.push(c!=null?lt(r,{key:c}):r)}if(i>1)for(let l=0;l<a.length;l++)a[l].patchFlag=-2;return a}function Me(n,s){return fe(n)?(()=>Ke({name:n.name},s,{setup:n}))():n}const Ms=n=>!!n.type.__asyncLoader,hr=n=>n.type.__isKeepAlive,Sh={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:s}){const o=In(),a=o.ctx;if(!a.renderer)return()=>{const $=s.default&&s.default();return $&&$.length===1?$[0]:$};const i=new Map,l=new Set;let r=null;o.__v_cache=i;const c=o.suspense,{renderer:{p:u,m:p,um:d,o:{createElement:m}}}=a,f=m("div");a.activate=($,k,M,T,N)=>{const B=$.component;p($,k,M,0,c),u(B.vnode,$,k,M,B,c,T,$.slotScopeIds,N),nn(()=>{B.isDeactivated=!1,B.a&&Xt(B.a);const j=$.props&&$.props.onVnodeMounted;j&&Pn(j,B.parent,$)},c),el(B)},a.deactivate=$=>{const k=$.component;p($,f,null,1,c),nn(()=>{k.da&&Xt(k.da);const M=$.props&&$.props.onVnodeUnmounted;M&&Pn(M,k.parent,$),k.isDeactivated=!0},c),el(k)};function h($){bi($),d($,o,c,!0)}function _($){i.forEach((k,M)=>{const T=Ro(k.type);T&&(!$||!$(T))&&w(M)})}function w($){const k=i.get($);!r||!es(k,r)?h(k):r&&bi(r),i.delete($),l.delete($)}be(()=>[n.include,n.exclude],([$,k])=>{$&&_(M=>io($,M)),k&&_(M=>!io(k,M))},{flush:"post",deep:!0});let y=null;const I=()=>{y!=null&&i.set(y,ki(o.subTree))};return xt(I),ri(I),Bo(()=>{i.forEach($=>{const{subTree:k,suspense:M}=o,T=ki(k);if($.type===T.type&&$.key===T.key){bi(T);const N=T.component.da;N&&nn(N,M);return}h($)})}),()=>{if(y=null,!s.default)return null;const $=s.default(),k=$[0];if($.length>1)return q("KeepAlive should contain exactly one component child."),r=null,$;if(!Kt(k)||!(k.shapeFlag&4)&&!(k.shapeFlag&128))return r=null,k;let M=ki(k);const T=M.type,N=Ro(Ms(M)?M.type.__asyncResolved||{}:T),{include:B,exclude:j,max:U}=n;if(B&&(!N||!io(B,N))||j&&N&&io(j,N))return r=M,k;const le=M.key==null?T:M.key,me=i.get(le);return M.el&&(M=lt(M),k.shapeFlag&128&&(k.ssContent=M)),y=le,me?(M.el=me.el,M.component=me.component,M.transition&&za(M,M.transition),M.shapeFlag|=512,l.delete(le),l.add(le)):(l.add(le),U&&l.size>parseInt(U,10)&&w(l.values().next().value)),M.shapeFlag|=256,r=M,Xp(k.type)?k:M}}},od=Sh;function io(n,s){return ue(n)?n.some(o=>io(o,s)):We(n)?n.split(",").includes(s):Yf(n)?n.test(s):!1}function ad(n,s){ld(n,"a",s)}function id(n,s){ld(n,"da",s)}function ld(n,s,o=Je){const a=n.__wdc||(n.__wdc=()=>{let i=o;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(li(s,a,o),o){let i=o.parent;for(;i&&i.parent;)hr(i.parent.vnode)&&Rh(a,s,o,i),i=i.parent}}function Rh(n,s,o,a){const i=li(s,n,a,!0);qo(()=>{Jl(a[s],i)},o)}function bi(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function ki(n){return n.shapeFlag&128?n.ssContent:n}function li(n,s,o=Je,a=!1){if(o){const i=o[n]||(o[n]=[]),l=s.__weh||(s.__weh=(...r)=>{if(o.isUnmounted)return;bs(),Ps(o);const c=Fn(s,o,n,r);return fs(),ks(),c});return a?i.unshift(l):i.push(l),l}else{const i=Zt(pr[n].replace(/ hook$/,""));q(`${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const kt=n=>(s,o=Je)=>(!So||n==="sp")&&li(n,(...a)=>s(...a),o),Th=kt("bm"),xt=kt("m"),Ah=kt("bu"),ri=kt("u"),Bo=kt("bum"),qo=kt("um"),Mh=kt("sp"),zh=kt("rtg"),Oh=kt("rtc");function Ph(n,s=Je){li("ec",n,s)}const sl="components";function Tn(n,s){return Nh(sl,n,!0,s)||n}const Dh=Symbol.for("v-ndc");function Nh(n,s,o=!0,a=!1){const i=Xe||Je;if(i){const l=i.type;if(n===sl){const c=Ro(l,!1);if(c&&(c===s||c===ot(s)||c===gs(ot(s))))return l}const r=uc(i[n]||l[n],s)||uc(i.appContext[n],s);if(!r&&a)return l;if(o&&!r){const c=n===sl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";q(`Failed to resolve ${n.slice(0,-1)}: ${s}${c}`)}return r}else q(`resolve${gs(n.slice(0,-1))} can only be used in render() or setup().`)}function uc(n,s){return n&&(n[s]||n[ot(s)]||n[gs(ot(s))])}function js(n,s,o,a){let i;const l=o&&o[a];if(ue(n)||We(n)){i=new Array(n.length);for(let r=0,c=n.length;r<c;r++)i[r]=s(n[r],r,void 0,l&&l[r])}else if(typeof n=="number"){Number.isInteger(n)||q(`The v-for range expect an integer value but got ${n}.`),i=new Array(n);for(let r=0;r<n;r++)i[r]=s(r+1,r,void 0,l&&l[r])}else if(ze(n))if(n[Symbol.iterator])i=Array.from(n,(r,c)=>s(r,c,void 0,l&&l[c]));else{const r=Object.keys(n);i=new Array(r.length);for(let c=0,u=r.length;c<u;c++){const p=r[c];i[c]=s(n[p],p,c,l&&l[c])}}else i=[];return o&&(o[a]=i),i}function jn(n,s,o={},a,i){if(Xe.isCE||Xe.parent&&Ms(Xe.parent)&&Xe.parent.isCE)return s!=="default"&&(o.name=s),R("slot",o,a&&a());let l=n[s];l&&l.length>1&&(q("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),b();const r=l&&rd(l(o)),c=C(Te,{key:o.key||r&&r.key||`_${s}`},r||(a?a():[]),r&&n._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),l&&l._c&&(l._d=!0),c}function rd(n){return n.some(s=>Kt(s)?!(s.type===hn||s.type===Te&&!rd(s.children)):!0)?n:null}const ol=n=>n?wd(n)?ui(n)||n.proxy:ol(n.parent):null,ms=Ke(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>oo(n.props),$attrs:n=>oo(n.attrs),$slots:n=>oo(n.slots),$refs:n=>oo(n.refs),$parent:n=>ol(n.parent),$root:n=>ol(n.root),$emit:n=>n.emit,$options:n=>gr(n),$forceUpdate:n=>n.f||(n.f=()=>si(n.update)),$nextTick:n=>n.n||(n.n=an.bind(n.proxy)),$watch:n=>$h.bind(n)}),_r=n=>n==="_"||n==="$",xi=(n,s)=>n!==je&&!n.__isScriptSetup&&Ce(n,s),cd={get({_:n},s){const{ctx:o,setupState:a,data:i,props:l,accessCache:r,type:c,appContext:u}=n;if(s==="__isVue")return!0;let p;if(s[0]!=="$"){const h=r[s];if(h!==void 0)switch(h){case 1:return a[s];case 2:return i[s];case 4:return o[s];case 3:return l[s]}else{if(xi(a,s))return r[s]=1,a[s];if(i!==je&&Ce(i,s))return r[s]=2,i[s];if((p=n.propsOptions[0])&&Ce(p,s))return r[s]=3,l[s];if(o!==je&&Ce(o,s))return r[s]=4,o[s];al&&(r[s]=0)}}const d=ms[s];let m,f;if(d)return s==="$attrs"?(cn(n,"get",s),Ma()):s==="$slots"&&cn(n,"get",s),d(n);if((m=c.__cssModules)&&(m=m[s]))return m;if(o!==je&&Ce(o,s))return r[s]=4,o[s];if(f=u.config.globalProperties,Ce(f,s))return f[s];Xe&&(!We(s)||s.indexOf("__v")!==0)&&(i!==je&&_r(s[0])&&Ce(i,s)?q(`Property ${JSON.stringify(s)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):n===Xe&&q(`Property ${JSON.stringify(s)} was accessed during render but is not defined on instance.`))},set({_:n},s,o){const{data:a,setupState:i,ctx:l}=n;return xi(i,s)?(i[s]=o,!0):i.__isScriptSetup&&Ce(i,s)?(q(`Cannot mutate <script setup> binding "${s}" from Options API.`),!1):a!==je&&Ce(a,s)?(a[s]=o,!0):Ce(n.props,s)?(q(`Attempting to mutate prop "${s}". Props are readonly.`),!1):s[0]==="$"&&s.slice(1)in n?(q(`Attempting to mutate public property "${s}". Properties starting with $ are reserved and readonly.`),!1):(s in n.appContext.config.globalProperties?Object.defineProperty(l,s,{enumerable:!0,configurable:!0,value:o}):l[s]=o,!0)},has({_:{data:n,setupState:s,accessCache:o,ctx:a,appContext:i,propsOptions:l}},r){let c;return!!o[r]||n!==je&&Ce(n,r)||xi(s,r)||(c=l[0])&&Ce(c,r)||Ce(a,r)||Ce(ms,r)||Ce(i.config.globalProperties,r)},defineProperty(n,s,o){return o.get!=null?n._.accessCache[s]=0:Ce(o,"value")&&this.set(n,s,o.value,null),Reflect.defineProperty(n,s,o)}};cd.ownKeys=n=>(q("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(n));function Fh(n){const s={};return Object.defineProperty(s,"_",{configurable:!0,enumerable:!1,get:()=>n}),Object.keys(ms).forEach(o=>{Object.defineProperty(s,o,{configurable:!0,enumerable:!1,get:()=>ms[o](n),set:xn})}),s}function jh(n){const{ctx:s,propsOptions:[o]}=n;o&&Object.keys(o).forEach(a=>{Object.defineProperty(s,a,{enumerable:!0,configurable:!0,get:()=>n.props[a],set:xn})})}function Kh(n){const{ctx:s,setupState:o}=n;Object.keys(ge(o)).forEach(a=>{if(!o.__isScriptSetup){if(_r(a[0])){q(`setup() return property ${JSON.stringify(a)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(s,a,{enumerable:!0,configurable:!0,get:()=>o[a],set:xn})}})}function Hh(){return Wh().slots}function Wh(){const n=In();return n||q("useContext() called without active instance."),n.setupContext||(n.setupContext=Id(n))}function pc(n){return ue(n)?n.reduce((s,o)=>(s[o]=null,s),{}):n}function Bh(){const n=Object.create(null);return(s,o)=>{n[o]?q(`${s} property "${o}" is already defined in ${n[o]}.`):n[o]=s}}let al=!0;function qh(n){const s=gr(n),o=n.proxy,a=n.ctx;al=!1,s.beforeCreate&&dc(s.beforeCreate,n,"bc");const{data:i,computed:l,methods:r,watch:c,provide:u,inject:p,created:d,beforeMount:m,mounted:f,beforeUpdate:h,updated:_,activated:w,deactivated:y,beforeDestroy:I,beforeUnmount:$,destroyed:k,unmounted:M,render:T,renderTracked:N,renderTriggered:B,errorCaptured:j,serverPrefetch:U,expose:le,inheritAttrs:me,components:X,directives:ve,filters:ke}=s,ye=Bh();{const[oe]=n.propsOptions;if(oe)for(const pe in oe)ye("Props",pe)}if(p&&Vh(p,a,ye),r)for(const oe in r){const pe=r[oe];fe(pe)?(Object.defineProperty(a,oe,{value:pe.bind(o),configurable:!0,enumerable:!0,writable:!0}),ye("Methods",oe)):q(`Method "${oe}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(i){fe(i)||q("The data option must be a function. Plain object usage is no longer supported.");const oe=i.call(o,o);if(er(oe)&&q("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!ze(oe))q("data() should return an object.");else{n.data=Be(oe);for(const pe in oe)ye("Data",pe),_r(pe[0])||Object.defineProperty(a,pe,{configurable:!0,enumerable:!0,get:()=>oe[pe],set:xn})}}if(al=!0,l)for(const oe in l){const pe=l[oe],Le=fe(pe)?pe.bind(o,o):fe(pe.get)?pe.get.bind(o,o):xn;Le===xn&&q(`Computed property "${oe}" has no getter.`);const Pe=!fe(pe)&&fe(pe.set)?pe.set.bind(o):()=>{q(`Write operation failed: computed property "${oe}" is readonly.`)},Mn=K({get:Le,set:Pe});Object.defineProperty(a,oe,{enumerable:!0,configurable:!0,get:()=>Mn.value,set:sn=>Mn.value=sn}),ye("Computed",oe)}if(c)for(const oe in c)ud(c[oe],a,o,oe);if(u){const oe=fe(u)?u.call(o):u;Reflect.ownKeys(oe).forEach(pe=>{En(pe,oe[pe])})}d&&dc(d,n,"c");function De(oe,pe){ue(pe)?pe.forEach(Le=>oe(Le.bind(o))):pe&&oe(pe.bind(o))}if(De(Th,m),De(xt,f),De(Ah,h),De(ri,_),De(ad,w),De(id,y),De(Ph,j),De(Oh,N),De(zh,B),De(Bo,$),De(qo,M),De(Mh,U),ue(le))if(le.length){const oe=n.exposed||(n.exposed={});le.forEach(pe=>{Object.defineProperty(oe,pe,{get:()=>o[pe],set:Le=>o[pe]=Le})})}else n.exposed||(n.exposed={});T&&n.render===xn&&(n.render=T),me!=null&&(n.inheritAttrs=me),X&&(n.components=X),ve&&(n.directives=ve)}function Vh(n,s,o=xn){ue(n)&&(n=il(n));for(const a in n){const i=n[a];let l;ze(i)?"default"in i?l=L(i.from||a,i.default,!0):l=L(i.from||a):l=L(i),Ae(l)?Object.defineProperty(s,a,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):s[a]=l,o("Inject",a)}}function dc(n,s,o){Fn(ue(n)?n.map(a=>a.bind(s.proxy)):n.bind(s.proxy),s,o)}function ud(n,s,o,a){const i=a.includes(".")?ed(o,a):()=>o[a];if(We(n)){const l=s[n];fe(l)?be(i,l):q(`Invalid watch handler specified by key "${n}"`,l)}else if(fe(n))be(i,n.bind(o));else if(ze(n))if(ue(n))n.forEach(l=>ud(l,s,o,a));else{const l=fe(n.handler)?n.handler.bind(o):s[n.handler];fe(l)?be(i,l,n):q(`Invalid watch handler specified by key "${n.handler}"`,l)}else q(`Invalid watch option: "${a}"`,n)}function gr(n){const s=n.type,{mixins:o,extends:a}=s,{mixins:i,optionsCache:l,config:{optionMergeStrategies:r}}=n.appContext,c=l.get(s);let u;return c?u=c:!i.length&&!o&&!a?u=s:(u={},i.length&&i.forEach(p=>Oa(u,p,r,!0)),Oa(u,s,r)),ze(s)&&l.set(s,u),u}function Oa(n,s,o,a=!1){const{mixins:i,extends:l}=s;l&&Oa(n,l,o,!0),i&&i.forEach(r=>Oa(n,r,o,!0));for(const r in s)if(a&&r==="expose")q('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=Uh[r]||o&&o[r];n[r]=c?c(n[r],s[r]):s[r]}return n}const Uh={data:mc,props:fc,emits:fc,methods:lo,computed:lo,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:lo,directives:lo,watch:Yh,provide:mc,inject:Gh};function mc(n,s){return s?n?function(){return Ke(fe(n)?n.call(this,this):n,fe(s)?s.call(this,this):s)}:s:n}function Gh(n,s){return lo(il(n),il(s))}function il(n){if(ue(n)){const s={};for(let o=0;o<n.length;o++)s[n[o]]=n[o];return s}return n}function pn(n,s){return n?[...new Set([].concat(n,s))]:s}function lo(n,s){return n?Ke(Object.create(null),n,s):s}function fc(n,s){return n?ue(n)&&ue(s)?[...new Set([...n,...s])]:Ke(Object.create(null),pc(n),pc(s??{})):s}function Yh(n,s){if(!n)return s;if(!s)return n;const o=Ke(Object.create(null),n);for(const a in s)o[a]=pn(n[a],s[a]);return o}function pd(){return{app:null,config:{isNativeTag:_p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qh=0;function Zh(n,s){return function(a,i=null){fe(a)||(a=Ke({},a)),i!=null&&!ze(i)&&(q("root props passed to app.mount() must be an object."),i=null);const l=pd();Object.defineProperty(l.config,"unwrapInjectedRef",{get(){return!0},set(){q("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const r=new Set;let c=!1;const u=l.app={_uid:Qh++,_component:a,_props:i,_container:null,_context:l,_instance:null,version:Fa,get config(){return l.config},set config(p){q("app.config cannot be replaced. Modify individual options instead.")},use(p,...d){return r.has(p)?q("Plugin has already been applied to target app."):p&&fe(p.install)?(r.add(p),p.install(u,...d)):fe(p)?(r.add(p),p(u,...d)):q('A plugin must either be a function or an object with an "install" function.'),u},mixin(p){return l.mixins.includes(p)?q("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):l.mixins.push(p),u},component(p,d){return pl(p,l.config),d?(l.components[p]&&q(`Component "${p}" has already been registered in target app.`),l.components[p]=d,u):l.components[p]},directive(p,d){return nd(p),d?(l.directives[p]&&q(`Directive "${p}" has already been registered in target app.`),l.directives[p]=d,u):l.directives[p]},mount(p,d,m){if(c)q("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&q("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=R(a,i);return f.appContext=l,l.reload=()=>{n(lt(f),p,m)},d&&s?s(f,p):n(f,p,m),c=!0,u._container=p,p.__vue_app__=u,u._instance=f.component,uh(u,Fa),ui(f.component)||f.component.proxy}},unmount(){c?(n(null,u._container),u._instance=null,ph(u),delete u._container.__vue_app__):q("Cannot unmount an app that is not mounted.")},provide(p,d){return p in l.provides&&q(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),l.provides[p]=d,u},runWithContext(p){Pa=u;try{return p()}finally{Pa=null}}};return u}}let Pa=null;function En(n,s){if(!Je)q("provide() can only be used inside setup().");else{let o=Je.provides;const a=Je.parent&&Je.parent.provides;a===o&&(o=Je.provides=Object.create(a)),o[n]=s}}function L(n,s,o=!1){const a=Je||Xe;if(a||Pa){const i=a?a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:Pa._context.provides;if(i&&n in i)return i[n];if(arguments.length>1)return o&&fe(s)?s.call(a&&a.proxy):s;q(`injection "${String(n)}" not found.`)}else q("inject() can only be used inside setup() or functional components.")}function Jh(n,s,o,a=!1){const i={},l={};La(l,ci,1),n.propsDefaults=Object.create(null),dd(n,s,i,l);for(const r in n.propsOptions[0])r in i||(i[r]=void 0);fd(s||{},i,n),o?n.props=a?i:j1(i):n.type.props?n.props=i:n.props=l,n.attrs=l}function Xh(n){for(;n;){if(n.type.__hmrId)return!0;n=n.parent}}function e_(n,s,o,a){const{props:i,attrs:l,vnode:{patchFlag:r}}=n,c=ge(i),[u]=n.propsOptions;let p=!1;if(!Xh(n)&&(a||r>0)&&!(r&16)){if(r&8){const d=n.vnode.dynamicProps;for(let m=0;m<d.length;m++){let f=d[m];if(oi(n.emitsOptions,f))continue;const h=s[f];if(u)if(Ce(l,f))h!==l[f]&&(l[f]=h,p=!0);else{const _=ot(f);i[_]=ll(u,c,_,h,n,!1)}else h!==l[f]&&(l[f]=h,p=!0)}}}else{dd(n,s,i,l)&&(p=!0);let d;for(const m in c)(!s||!Ce(s,m)&&((d=vt(m))===m||!Ce(s,d)))&&(u?o&&(o[m]!==void 0||o[d]!==void 0)&&(i[m]=ll(u,c,m,void 0,n,!0)):delete i[m]);if(l!==c)for(const m in l)(!s||!Ce(s,m))&&(delete l[m],p=!0)}p&&at(n,"set","$attrs"),fd(s||{},i,n)}function dd(n,s,o,a){const[i,l]=n.propsOptions;let r=!1,c;if(s)for(let u in s){if(_a(u))continue;const p=s[u];let d;i&&Ce(i,d=ot(u))?!l||!l.includes(d)?o[d]=p:(c||(c={}))[d]=p:oi(n.emitsOptions,u)||(!(u in a)||p!==a[u])&&(a[u]=p,r=!0)}if(l){const u=ge(o),p=c||je;for(let d=0;d<l.length;d++){const m=l[d];o[m]=ll(i,u,m,p[m],n,!Ce(p,m))}}return r}function ll(n,s,o,a,i,l){const r=n[o];if(r!=null){const c=Ce(r,"default");if(c&&a===void 0){const u=r.default;if(r.type!==Function&&!r.skipFactory&&fe(u)){const{propsDefaults:p}=i;o in p?a=p[o]:(Ps(i),a=p[o]=u.call(null,s),fs())}else a=u}r[0]&&(l&&!c?a=!1:r[1]&&(a===""||a===vt(o))&&(a=!0))}return a}function md(n,s,o=!1){const a=s.propsCache,i=a.get(n);if(i)return i;const l=n.props,r={},c=[];let u=!1;if(!fe(n)){const d=m=>{u=!0;const[f,h]=md(m,s,!0);Ke(r,f),h&&c.push(...h)};!o&&s.mixins.length&&s.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!l&&!u)return ze(n)&&a.set(n,Ts),Ts;if(ue(l))for(let d=0;d<l.length;d++){We(l[d])||q("props must be strings when using array syntax.",l[d]);const m=ot(l[d]);hc(m)&&(r[m]=je)}else if(l){ze(l)||q("invalid props options",l);for(const d in l){const m=ot(d);if(hc(m)){const f=l[d],h=r[m]=ue(f)||fe(f)?{type:f}:Ke({},f);if(h){const _=gc(Boolean,h.type),w=gc(String,h.type);h[0]=_>-1,h[1]=w<0||_<w,(_>-1||Ce(h,"default"))&&c.push(m)}}}}const p=[r,c];return ze(n)&&a.set(n,p),p}function hc(n){return n[0]!=="$"?!0:(q(`Invalid prop name: "${n}" is a reserved property.`),!1)}function rl(n){const s=n&&n.toString().match(/^\s*(function|class) (\w+)/);return s?s[2]:n===null?"null":""}function _c(n,s){return rl(n)===rl(s)}function gc(n,s){return ue(s)?s.findIndex(o=>_c(o,n)):fe(s)&&_c(s,n)?0:-1}function fd(n,s,o){const a=ge(s),i=o.propsOptions[0];for(const l in i){let r=i[l];r!=null&&n_(l,a[l],r,!Ce(n,l)&&!Ce(n,vt(l)))}}function n_(n,s,o,a){const{type:i,required:l,validator:r,skipCheck:c}=o;if(l&&a){q('Missing required prop: "'+n+'"');return}if(!(s==null&&!l)){if(i!=null&&i!==!0&&!c){let u=!1;const p=ue(i)?i:[i],d=[];for(let m=0;m<p.length&&!u;m++){const{valid:f,expectedType:h}=s_(s,p[m]);d.push(h||""),u=f}if(!u){q(o_(n,s,d));return}}r&&!r(s)&&q('Invalid prop: custom validator check failed for prop "'+n+'".')}}const t_=Wt("String,Number,Boolean,Function,Symbol,BigInt");function s_(n,s){let o;const a=rl(s);if(t_(a)){const i=typeof n;o=i===a.toLowerCase(),!o&&i==="object"&&(o=n instanceof s)}else a==="Object"?o=ze(n):a==="Array"?o=ue(n):a==="null"?o=n===null:o=n instanceof s;return{valid:o,expectedType:a}}function o_(n,s,o){let a=`Invalid prop: type check failed for prop "${n}". Expected ${o.map(gs).join(" | ")}`;const i=o[0],l=nr(s),r=vc(s,i),c=vc(s,l);return o.length===1&&bc(i)&&!a_(i,l)&&(a+=` with value ${r}`),a+=`, got ${l} `,bc(l)&&(a+=`with value ${c}.`),a}function vc(n,s){return s==="String"?`"${n}"`:s==="Number"?`${Number(n)}`:`${n}`}function bc(n){return["string","number","boolean"].some(o=>n.toLowerCase()===o)}function a_(...n){return n.some(s=>s.toLowerCase()==="boolean")}const hd=n=>n[0]==="_"||n==="$stable",vr=n=>ue(n)?n.map(Vn):[Vn(n)],i_=(n,s,o)=>{if(s._n)return s;const a=v((...i)=>(Je&&q(`Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),vr(s(...i))),o);return a._c=!1,a},_d=(n,s,o)=>{const a=n._ctx;for(const i in n){if(hd(i))continue;const l=n[i];if(fe(l))s[i]=i_(i,l,a);else if(l!=null){q(`Non-function value encountered for slot "${i}". Prefer function slots for better performance.`);const r=vr(l);s[i]=()=>r}}},gd=(n,s)=>{hr(n.vnode)||q("Non-function value encountered for default slot. Prefer function slots for better performance.");const o=vr(s);n.slots.default=()=>o},l_=(n,s)=>{if(n.vnode.shapeFlag&32){const o=s._;o?(n.slots=ge(s),La(s,"_",o)):_d(s,n.slots={})}else n.slots={},s&&gd(n,s);La(n.slots,ci,1)},r_=(n,s,o)=>{const{vnode:a,slots:i}=n;let l=!0,r=je;if(a.shapeFlag&32){const c=s._;c?At?(Ke(i,s),at(n,"set","$slots")):o&&c===1?l=!1:(Ke(i,s),!o&&c===1&&delete i._):(l=!s.$stable,_d(s,i)),r=s}else s&&(gd(n,s),r={default:1});if(l)for(const c in i)!hd(c)&&!(c in r)&&delete i[c]};function cl(n,s,o,a,i=!1){if(ue(n)){n.forEach((f,h)=>cl(f,s&&(ue(s)?s[h]:s),o,a,i));return}if(Ms(a)&&!i)return;const l=a.shapeFlag&4?ui(a.component)||a.component.proxy:a.el,r=i?null:l,{i:c,r:u}=n;if(!c){q("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=s&&s.r,d=c.refs===je?c.refs={}:c.refs,m=c.setupState;if(p!=null&&p!==u&&(We(p)?(d[p]=null,Ce(m,p)&&(m[p]=null)):Ae(p)&&(p.value=null)),fe(u))gt(u,c,12,[r,d]);else{const f=We(u),h=Ae(u);if(f||h){const _=()=>{if(n.f){const w=f?Ce(m,u)?m[u]:d[u]:u.value;i?ue(w)&&Jl(w,l):ue(w)?w.includes(l)||w.push(l):f?(d[u]=[l],Ce(m,u)&&(m[u]=d[u])):(u.value=[l],n.k&&(d[n.k]=u.value))}else f?(d[u]=r,Ce(m,u)&&(m[u]=r)):h?(u.value=r,n.k&&(d[n.k]=r)):q("Invalid template ref type:",u,`(${typeof u})`)};r?(_.id=-1,nn(_,o)):_()}else q("Invalid template ref type:",u,`(${typeof u})`)}}let qs,St;function pt(n,s){n.appContext.config.performance&&Da()&&St.mark(`vue-${s}-${n.uid}`),fh(n,s,Da()?St.now():Date.now())}function dt(n,s){if(n.appContext.config.performance&&Da()){const o=`vue-${s}-${n.uid}`,a=o+":end";St.mark(a),St.measure(`<${pi(n,n.type)}> ${s}`,o,a),St.clearMarks(o),St.clearMarks(a)}hh(n,s,Da()?St.now():Date.now())}function Da(){return qs!==void 0||(typeof window<"u"&&window.performance?(qs=!0,St=window.performance):qs=!1),qs}function c_(){const n=[];if(n.length){const s=n.length>1;console.warn(`Feature flag${s?"s":""} ${n.join(", ")} ${s?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const nn=yh;function u_(n){return p_(n)}function p_(n,s){c_();const o=Ca();o.__VUE__=!0,Gp(o.__VUE_DEVTOOLS_GLOBAL_HOOK__,o);const{insert:a,remove:i,patchProp:l,createElement:r,createText:c,createComment:u,setText:p,setElementText:d,parentNode:m,nextSibling:f,setScopeId:h=xn,insertStaticContent:_}=n,w=(g,x,A,W=null,H=null,Q=null,te=!1,Y=null,Z=At?!1:!!x.dynamicChildren)=>{if(g===x)return;g&&!es(g,x)&&(W=ne(g),gn(g,H,Q,!0),g=null),x.patchFlag===-2&&(Z=!1,x.dynamicChildren=null);const{type:V,ref:ce,shapeFlag:re}=x;switch(V){case Vo:y(g,x,A,W);break;case hn:I(g,x,A,W);break;case po:g==null?$(x,A,W,te):k(g,x,A,te);break;case Te:ve(g,x,A,W,H,Q,te,Y,Z);break;default:re&1?N(g,x,A,W,H,Q,te,Y,Z):re&6?ke(g,x,A,W,H,Q,te,Y,Z):re&64||re&128?V.process(g,x,A,W,H,Q,te,Y,Z,ae):q("Invalid VNode type:",V,`(${typeof V})`)}ce!=null&&H&&cl(ce,g&&g.ref,Q,x||g,!x)},y=(g,x,A,W)=>{if(g==null)a(x.el=c(x.children),A,W);else{const H=x.el=g.el;x.children!==g.children&&p(H,x.children)}},I=(g,x,A,W)=>{g==null?a(x.el=u(x.children||""),A,W):x.el=g.el},$=(g,x,A,W)=>{[g.el,g.anchor]=_(g.children,x,A,W,g.el,g.anchor)},k=(g,x,A,W)=>{if(x.children!==g.children){const H=f(g.anchor);T(g),[x.el,x.anchor]=_(x.children,A,H,W)}else x.el=g.el,x.anchor=g.anchor},M=({el:g,anchor:x},A,W)=>{let H;for(;g&&g!==x;)H=f(g),a(g,A,W),g=H;a(x,A,W)},T=({el:g,anchor:x})=>{let A;for(;g&&g!==x;)A=f(g),i(g),g=A;i(x)},N=(g,x,A,W,H,Q,te,Y,Z)=>{te=te||x.type==="svg",g==null?B(x,A,W,H,Q,te,Y,Z):le(g,x,H,Q,te,Y,Z)},B=(g,x,A,W,H,Q,te,Y)=>{let Z,V;const{type:ce,props:re,shapeFlag:de,transition:_e,dirs:Ee}=g;if(Z=g.el=r(g.type,Q,re&&re.is,re),de&8?d(Z,g.children):de&16&&U(g.children,Z,null,W,H,Q&&ce!=="foreignObject",te,Y),Ee&&Vt(g,null,W,"created"),j(Z,g,g.scopeId,te,W),re){for(const Fe in re)Fe!=="value"&&!_a(Fe)&&l(Z,Fe,null,re[Fe],Q,g.children,W,H,F);"value"in re&&l(Z,"value",null,re.value),(V=re.onVnodeBeforeMount)&&Pn(V,W,g)}Object.defineProperty(Z,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(Z,"__vueParentComponent",{value:W,enumerable:!1}),Ee&&Vt(g,null,W,"beforeMount");const He=(!H||H&&!H.pendingBranch)&&_e&&!_e.persisted;He&&_e.beforeEnter(Z),a(Z,x,A),((V=re&&re.onVnodeMounted)||He||Ee)&&nn(()=>{V&&Pn(V,W,g),He&&_e.enter(Z),Ee&&Vt(g,null,W,"mounted")},H)},j=(g,x,A,W,H)=>{if(A&&h(g,A),W)for(let Q=0;Q<W.length;Q++)h(g,W[Q]);if(H){let Q=H.subTree;if(Q.patchFlag>0&&Q.patchFlag&2048&&(Q=Jp(Q.children)||Q),x===Q){const te=H.vnode;j(g,te,te.scopeId,te.slotScopeIds,H.parent)}}},U=(g,x,A,W,H,Q,te,Y,Z=0)=>{for(let V=Z;V<g.length;V++){const ce=g[V]=Y?Ct(g[V]):Vn(g[V]);w(null,ce,x,A,W,H,Q,te,Y)}},le=(g,x,A,W,H,Q,te)=>{const Y=x.el=g.el;let{patchFlag:Z,dynamicChildren:V,dirs:ce}=x;Z|=g.patchFlag&16;const re=g.props||je,de=x.props||je;let _e;A&&Ut(A,!1),(_e=de.onVnodeBeforeUpdate)&&Pn(_e,A,x,g),ce&&Vt(x,g,A,"beforeUpdate"),A&&Ut(A,!0),At&&(Z=0,te=!1,V=null);const Ee=H&&x.type!=="foreignObject";if(V?(me(g.dynamicChildren,V,Y,A,W,Ee,Q),Na(g,x)):te||Le(g,x,Y,null,A,W,Ee,Q,!1),Z>0){if(Z&16)X(Y,x,re,de,A,W,H);else if(Z&2&&re.class!==de.class&&l(Y,"class",null,de.class,H),Z&4&&l(Y,"style",re.style,de.style,H),Z&8){const He=x.dynamicProps;for(let Fe=0;Fe<He.length;Fe++){const Ue=He[Fe],Wn=re[Ue],Is=de[Ue];(Is!==Wn||Ue==="value")&&l(Y,Ue,Wn,Is,H,g.children,A,W,F)}}Z&1&&g.children!==x.children&&d(Y,x.children)}else!te&&V==null&&X(Y,x,re,de,A,W,H);((_e=de.onVnodeUpdated)||ce)&&nn(()=>{_e&&Pn(_e,A,x,g),ce&&Vt(x,g,A,"updated")},W)},me=(g,x,A,W,H,Q,te)=>{for(let Y=0;Y<x.length;Y++){const Z=g[Y],V=x[Y],ce=Z.el&&(Z.type===Te||!es(Z,V)||Z.shapeFlag&70)?m(Z.el):A;w(Z,V,ce,null,W,H,Q,te,!0)}},X=(g,x,A,W,H,Q,te)=>{if(A!==W){if(A!==je)for(const Y in A)!_a(Y)&&!(Y in W)&&l(g,Y,A[Y],null,te,x.children,H,Q,F);for(const Y in W){if(_a(Y))continue;const Z=W[Y],V=A[Y];Z!==V&&Y!=="value"&&l(g,Y,V,Z,te,x.children,H,Q,F)}"value"in W&&l(g,"value",A.value,W.value)}},ve=(g,x,A,W,H,Q,te,Y,Z)=>{const V=x.el=g?g.el:c(""),ce=x.anchor=g?g.anchor:c("");let{patchFlag:re,dynamicChildren:de,slotScopeIds:_e}=x;(At||re&2048)&&(re=0,Z=!1,de=null),_e&&(Y=Y?Y.concat(_e):_e),g==null?(a(V,A,W),a(ce,A,W),U(x.children,A,ce,H,Q,te,Y,Z)):re>0&&re&64&&de&&g.dynamicChildren?(me(g.dynamicChildren,de,A,H,Q,te,Y),Na(g,x)):Le(g,x,A,ce,H,Q,te,Y,Z)},ke=(g,x,A,W,H,Q,te,Y,Z)=>{x.slotScopeIds=Y,g==null?x.shapeFlag&512?H.ctx.activate(x,A,W,te,Z):ye(x,A,W,H,Q,te,Z):De(g,x,Z)},ye=(g,x,A,W,H,Q,te)=>{const Y=g.component=w_(g,W,H);if(Y.type.__hmrId&&ih(Y),ga(g),pt(Y,"mount"),hr(g)&&(Y.ctx.renderer=ae),pt(Y,"init"),I_(Y),dt(Y,"init"),Y.asyncDep){if(H&&H.registerDep(Y,oe),!g.el){const Z=Y.subTree=R(hn);I(null,Z,x,A)}return}oe(Y,g,x,A,H,Q,te),va(),dt(Y,"mount")},De=(g,x,A)=>{const W=x.component=g.component;if(xh(g,x,A))if(W.asyncDep&&!W.asyncResolved){ga(x),pe(W,x,A),va();return}else W.next=x,oh(W.update),W.update();else x.el=g.el,W.vnode=x},oe=(g,x,A,W,H,Q,te)=>{const Y=()=>{if(g.isMounted){let{next:ce,bu:re,u:de,parent:_e,vnode:Ee}=g,He=ce,Fe;ga(ce||g.vnode),Ut(g,!1),ce?(ce.el=Ee.el,pe(g,ce,te)):ce=Ee,re&&Xt(re),(Fe=ce.props&&ce.props.onVnodeBeforeUpdate)&&Pn(Fe,_e,ce,Ee),Ut(g,!0),pt(g,"render");const Ue=vi(g);dt(g,"render");const Wn=g.subTree;g.subTree=Ue,pt(g,"patch"),w(Wn,Ue,m(Wn.el),ne(Wn),g,H,Q),dt(g,"patch"),ce.el=Ue.el,He===null&&wh(g,Ue.el),de&&nn(de,H),(Fe=ce.props&&ce.props.onVnodeUpdated)&&nn(()=>Pn(Fe,_e,ce,Ee),H),Yp(g),va()}else{let ce;const{el:re,props:de}=x,{bm:_e,m:Ee,parent:He}=g,Fe=Ms(x);if(Ut(g,!1),_e&&Xt(_e),!Fe&&(ce=de&&de.onVnodeBeforeMount)&&Pn(ce,He,x),Ut(g,!0),re&&Ne){const Ue=()=>{pt(g,"render"),g.subTree=vi(g),dt(g,"render"),pt(g,"hydrate"),Ne(re,g.subTree,g,H,null),dt(g,"hydrate")};Fe?x.type.__asyncLoader().then(()=>!g.isUnmounted&&Ue()):Ue()}else{pt(g,"render");const Ue=g.subTree=vi(g);dt(g,"render"),pt(g,"patch"),w(null,Ue,A,W,g,H,Q),dt(g,"patch"),x.el=Ue.el}if(Ee&&nn(Ee,H),!Fe&&(ce=de&&de.onVnodeMounted)){const Ue=x;nn(()=>Pn(ce,He,Ue),H)}(x.shapeFlag&256||He&&Ms(He.vnode)&&He.vnode.shapeFlag&256)&&g.a&&nn(g.a,H),g.isMounted=!0,el(g),x=A=W=null}},Z=g.effect=new ar(Y,()=>si(V),g.scope),V=g.update=()=>Z.run();V.id=g.uid,Ut(g,!0),Z.onTrack=g.rtc?ce=>Xt(g.rtc,ce):void 0,Z.onTrigger=g.rtg?ce=>Xt(g.rtg,ce):void 0,V.ownerInstance=g,V()},pe=(g,x,A)=>{x.component=g;const W=g.vnode.props;g.vnode=x,g.next=null,e_(g,x.props,W,A),r_(g,x.children,A),bs(),ic(),ks()},Le=(g,x,A,W,H,Q,te,Y,Z=!1)=>{const V=g&&g.children,ce=g?g.shapeFlag:0,re=x.children,{patchFlag:de,shapeFlag:_e}=x;if(de>0){if(de&128){Mn(V,re,A,W,H,Q,te,Y,Z);return}else if(de&256){Pe(V,re,A,W,H,Q,te,Y,Z);return}}_e&8?(ce&16&&F(V,H,Q),re!==V&&d(A,re)):ce&16?_e&16?Mn(V,re,A,W,H,Q,te,Y,Z):F(V,H,Q,!0):(ce&8&&d(A,""),_e&16&&U(re,A,W,H,Q,te,Y,Z))},Pe=(g,x,A,W,H,Q,te,Y,Z)=>{g=g||Ts,x=x||Ts;const V=g.length,ce=x.length,re=Math.min(V,ce);let de;for(de=0;de<re;de++){const _e=x[de]=Z?Ct(x[de]):Vn(x[de]);w(g[de],_e,A,null,H,Q,te,Y,Z)}V>ce?F(g,H,Q,!0,!1,re):U(x,A,W,H,Q,te,Y,Z,re)},Mn=(g,x,A,W,H,Q,te,Y,Z)=>{let V=0;const ce=x.length;let re=g.length-1,de=ce-1;for(;V<=re&&V<=de;){const _e=g[V],Ee=x[V]=Z?Ct(x[V]):Vn(x[V]);if(es(_e,Ee))w(_e,Ee,A,null,H,Q,te,Y,Z);else break;V++}for(;V<=re&&V<=de;){const _e=g[re],Ee=x[de]=Z?Ct(x[de]):Vn(x[de]);if(es(_e,Ee))w(_e,Ee,A,null,H,Q,te,Y,Z);else break;re--,de--}if(V>re){if(V<=de){const _e=de+1,Ee=_e<ce?x[_e].el:W;for(;V<=de;)w(null,x[V]=Z?Ct(x[V]):Vn(x[V]),A,Ee,H,Q,te,Y,Z),V++}}else if(V>de)for(;V<=re;)gn(g[V],H,Q,!0),V++;else{const _e=V,Ee=V,He=new Map;for(V=Ee;V<=de;V++){const un=x[V]=Z?Ct(x[V]):Vn(x[V]);un.key!=null&&(He.has(un.key)&&q("Duplicate keys found during update:",JSON.stringify(un.key),"Make sure keys are unique."),He.set(un.key,V))}let Fe,Ue=0;const Wn=de-Ee+1;let Is=!1,Yr=0;const Bs=new Array(Wn);for(V=0;V<Wn;V++)Bs[V]=0;for(V=_e;V<=re;V++){const un=g[V];if(Ue>=Wn){gn(un,H,Q,!0);continue}let Jn;if(un.key!=null)Jn=He.get(un.key);else for(Fe=Ee;Fe<=de;Fe++)if(Bs[Fe-Ee]===0&&es(un,x[Fe])){Jn=Fe;break}Jn===void 0?gn(un,H,Q,!0):(Bs[Jn-Ee]=V+1,Jn>=Yr?Yr=Jn:Is=!0,w(un,x[Jn],A,null,H,Q,te,Y,Z),Ue++)}const Qr=Is?d_(Bs):Ts;for(Fe=Qr.length-1,V=Wn-1;V>=0;V--){const un=Ee+V,Jn=x[un],Zr=un+1<ce?x[un+1].el:W;Bs[V]===0?w(null,Jn,A,Zr,H,Q,te,Y,Z):Is&&(Fe<0||V!==Qr[Fe]?sn(Jn,A,Zr,2):Fe--)}}},sn=(g,x,A,W,H=null)=>{const{el:Q,type:te,transition:Y,children:Z,shapeFlag:V}=g;if(V&6){sn(g.component.subTree,x,A,W);return}if(V&128){g.suspense.move(x,A,W);return}if(V&64){te.move(g,x,A,ae);return}if(te===Te){a(Q,x,A);for(let re=0;re<Z.length;re++)sn(Z[re],x,A,W);a(g.anchor,x,A);return}if(te===po){M(g,x,A);return}if(W!==2&&V&1&&Y)if(W===0)Y.beforeEnter(Q),a(Q,x,A),nn(()=>Y.enter(Q),H);else{const{leave:re,delayLeave:de,afterLeave:_e}=Y,Ee=()=>a(Q,x,A),He=()=>{re(Q,()=>{Ee(),_e&&_e()})};de?de(Q,Ee,He):He()}else a(Q,x,A)},gn=(g,x,A,W=!1,H=!1)=>{const{type:Q,props:te,ref:Y,children:Z,dynamicChildren:V,shapeFlag:ce,patchFlag:re,dirs:de}=g;if(Y!=null&&cl(Y,null,A,g,!0),ce&256){x.ctx.deactivate(g);return}const _e=ce&1&&de,Ee=!Ms(g);let He;if(Ee&&(He=te&&te.onVnodeBeforeUnmount)&&Pn(He,x,g),ce&6)zn(g.component,A,W);else{if(ce&128){g.suspense.unmount(A,W);return}_e&&Vt(g,null,x,"beforeUnmount"),ce&64?g.type.remove(g,x,A,H,ae,W):V&&(Q!==Te||re>0&&re&64)?F(V,x,A,!1,!0):(Q===Te&&re&384||!H&&ce&16)&&F(Z,x,A),W&&Zn(g)}(Ee&&(He=te&&te.onVnodeUnmounted)||_e)&&nn(()=>{He&&Pn(He,x,g),_e&&Vt(g,null,x,"unmounted")},A)},Zn=g=>{const{type:x,el:A,anchor:W,transition:H}=g;if(x===Te){g.patchFlag>0&&g.patchFlag&2048&&H&&!H.persisted?g.children.forEach(te=>{te.type===hn?i(te.el):Zn(te)}):qt(A,W);return}if(x===po){T(g);return}const Q=()=>{i(A),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(g.shapeFlag&1&&H&&!H.persisted){const{leave:te,delayLeave:Y}=H,Z=()=>te(A,Q);Y?Y(g.el,Q,Z):Z()}else Q()},qt=(g,x)=>{let A;for(;g!==x;)A=f(g),i(g),g=A;i(x)},zn=(g,x,A)=>{g.type.__hmrId&&lh(g);const{bum:W,scope:H,update:Q,subTree:te,um:Y}=g;W&&Xt(W),H.stop(),Q&&(Q.active=!1,gn(te,g,x,A)),Y&&nn(Y,x),nn(()=>{g.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve()),mh(g)},F=(g,x,A,W=!1,H=!1,Q=0)=>{for(let te=Q;te<g.length;te++)gn(g[te],x,A,W,H)},ne=g=>g.shapeFlag&6?ne(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),se=(g,x,A)=>{g==null?x._vnode&&gn(x._vnode,null,null,!0):w(x._vnode||null,g,x,null,null,null,A),ic(),qp(),x._vnode=g},ae={p:w,um:gn,m:sn,r:Zn,mt:ye,mc:U,pc:Le,pbc:me,n:ne,o:n};let $e,Ne;return s&&([$e,Ne]=s(ae)),{render:se,hydrate:$e,createApp:Zh(se,$e)}}function Ut({effect:n,update:s},o){n.allowRecurse=s.allowRecurse=o}function Na(n,s,o=!1){const a=n.children,i=s.children;if(ue(a)&&ue(i))for(let l=0;l<a.length;l++){const r=a[l];let c=i[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[l]=Ct(i[l]),c.el=r.el),o||Na(r,c)),c.type===Vo&&(c.el=r.el),c.type===hn&&!c.el&&(c.el=r.el)}}function d_(n){const s=n.slice(),o=[0];let a,i,l,r,c;const u=n.length;for(a=0;a<u;a++){const p=n[a];if(p!==0){if(i=o[o.length-1],n[i]<p){s[a]=i,o.push(a);continue}for(l=0,r=o.length-1;l<r;)c=l+r>>1,n[o[c]]<p?l=c+1:r=c;p<n[o[l]]&&(l>0&&(s[a]=o[l-1]),o[l]=a)}}for(l=o.length,r=o[l-1];l-- >0;)o[l]=r,r=s[r];return o}const m_=n=>n.__isTeleport,zs=n=>n&&(n.disabled||n.disabled===""),kc=n=>typeof SVGElement<"u"&&n instanceof SVGElement,ul=(n,s)=>{const o=n&&n.to;if(We(o))if(s){const a=s(o);return a||q(`Failed to locate Teleport target with selector "${o}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),a}else return q("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!o&&!zs(n)&&q(`Invalid Teleport target: ${o}`),o},f_={__isTeleport:!0,process(n,s,o,a,i,l,r,c,u,p){const{mc:d,pc:m,pbc:f,o:{insert:h,querySelector:_,createText:w,createComment:y}}=p,I=zs(s.props);let{shapeFlag:$,children:k,dynamicChildren:M}=s;if(At&&(u=!1,M=null),n==null){const T=s.el=y("teleport start"),N=s.anchor=y("teleport end");h(T,o,a),h(N,o,a);const B=s.target=ul(s.props,_),j=s.targetAnchor=w("");B?(h(j,B),r=r||kc(B)):I||q("Invalid Teleport target on mount:",B,`(${typeof B})`);const U=(le,me)=>{$&16&&d(k,le,me,i,l,r,c,u)};I?U(o,N):B&&U(B,j)}else{s.el=n.el;const T=s.anchor=n.anchor,N=s.target=n.target,B=s.targetAnchor=n.targetAnchor,j=zs(n.props),U=j?o:N,le=j?T:B;if(r=r||kc(N),M?(f(n.dynamicChildren,M,U,i,l,r,c),Na(n,s,!0)):u||m(n,s,U,le,i,l,r,c,!1),I)j||oa(s,o,T,p,1);else if((s.props&&s.props.to)!==(n.props&&n.props.to)){const me=s.target=ul(s.props,_);me?oa(s,me,null,p,0):q("Invalid Teleport target on update:",N,`(${typeof N})`)}else j&&oa(s,N,B,p,1)}vd(s)},remove(n,s,o,a,{um:i,o:{remove:l}},r){const{shapeFlag:c,children:u,anchor:p,targetAnchor:d,target:m,props:f}=n;if(m&&l(d),(r||!zs(f))&&(l(p),c&16))for(let h=0;h<u.length;h++){const _=u[h];i(_,s,o,!0,!!_.dynamicChildren)}},move:oa,hydrate:h_};function oa(n,s,o,{o:{insert:a},m:i},l=2){l===0&&a(n.targetAnchor,s,o);const{el:r,anchor:c,shapeFlag:u,children:p,props:d}=n,m=l===2;if(m&&a(r,s,o),(!m||zs(d))&&u&16)for(let f=0;f<p.length;f++)i(p[f],s,o,2);m&&a(c,s,o)}function h_(n,s,o,a,i,l,{o:{nextSibling:r,parentNode:c,querySelector:u}},p){const d=s.target=ul(s.props,u);if(d){const m=d._lpa||d.firstChild;if(s.shapeFlag&16)if(zs(s.props))s.anchor=p(r(n),s,c(n),o,a,i,l),s.targetAnchor=m;else{s.anchor=r(n);let f=m;for(;f;)if(f=r(f),f&&f.nodeType===8&&f.data==="teleport anchor"){s.targetAnchor=f,d._lpa=s.targetAnchor&&r(s.targetAnchor);break}p(m,s,d,o,a,i,l)}vd(s)}return s.anchor&&r(s.anchor)}const __=f_;function vd(n){const s=n.ctx;if(s&&s.ut){let o=n.children[0].el;for(;o!==n.targetAnchor;)o.nodeType===1&&o.setAttribute("data-v-owner",s.uid),o=o.nextSibling;s.ut()}}const Te=Symbol.for("v-fgt"),Vo=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),po=Symbol.for("v-stc"),mo=[];let Gn=null;function b(n=!1){mo.push(Gn=n?null:[])}function g_(){mo.pop(),Gn=mo[mo.length-1]||null}let Eo=1;function xc(n){Eo+=n}function bd(n){return n.dynamicChildren=Eo>0?Gn||Ts:null,g_(),Eo>0&&Gn&&Gn.push(n),n}function ie(n,s,o,a,i,l){return bd(e(n,s,o,a,i,l,!0))}function C(n,s,o,a,i){return bd(R(n,s,o,a,i,!0))}function Kt(n){return n?n.__v_isVNode===!0:!1}function es(n,s){return s.shapeFlag&6&&Ss.has(s.type)?(n.shapeFlag&=-257,s.shapeFlag&=-513,!1):n.type===s.type&&n.key===s.key}const v_=(...n)=>b_(...n),ci="__vInternal",kd=({key:n})=>n??null,ba=({ref:n,ref_key:s,ref_for:o})=>(typeof n=="number"&&(n=""+n),n!=null?We(n)||Ae(n)||fe(n)?{i:Xe,r:n,k:s,f:!!o}:n:null);function e(n,s=null,o=null,a=0,i=null,l=n===Te?0:1,r=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:s,key:s&&kd(s),ref:s&&ba(s),scopeId:ai,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:a,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Xe};return c?(br(u,o),l&128&&n.normalize(u)):o&&(u.shapeFlag|=We(o)?8:16),u.key!==u.key&&q("VNode created with invalid key (NaN). VNode type:",u.type),Eo>0&&!r&&Gn&&(u.patchFlag>0||l&6)&&u.patchFlag!==32&&Gn.push(u),u}const R=v_;function b_(n,s=null,o=null,a=0,i=null,l=!1){if((!n||n===Dh)&&(n||q(`Invalid vnode type when creating vnode: ${n}.`),n=hn),Kt(n)){const c=lt(n,s,!0);return o&&br(c,o),Eo>0&&!l&&Gn&&(c.shapeFlag&6?Gn[Gn.indexOf(n)]=c:Gn.push(c)),c.patchFlag|=-2,c}if($d(n)&&(n=n.__vccOpts),s){s=O(s);let{class:c,style:u}=s;c&&!We(c)&&(s.class=qe(c)),ze(u)&&(Ta(u)&&!ue(u)&&(u=Ke({},u)),s.style=tn(u))}const r=We(n)?1:Xp(n)?128:m_(n)?64:ze(n)?4:fe(n)?2:0;return r&4&&Ta(n)&&(n=ge(n),q("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,n)),e(n,s,o,a,i,r,l,!0)}function O(n){return n?Ta(n)||ci in n?Ke({},n):n:null}function lt(n,s,o=!1){const{props:a,ref:i,patchFlag:l,children:r}=n,c=s?G(a||{},s):a;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&kd(c),ref:s&&s.ref?o&&i?ue(i)?i.concat(ba(s)):[i,ba(s)]:ba(s):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l===-1&&ue(r)?r.map(xd):r,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:s&&n.type!==Te?l===-1?16:l|16:l,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&lt(n.ssContent),ssFallback:n.ssFallback&&lt(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function xd(n){const s=lt(n);return ue(n.children)&&(s.children=n.children.map(xd)),s}function t(n=" ",s=0){return R(Vo,null,n,s)}function we(n="",s=!1){return s?(b(),C(hn,null,n)):R(hn,null,n)}function Vn(n){return n==null||typeof n=="boolean"?R(hn):ue(n)?R(Te,null,n.slice()):typeof n=="object"?Ct(n):R(Vo,null,String(n))}function Ct(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:lt(n)}function br(n,s){let o=0;const{shapeFlag:a}=n;if(s==null)s=null;else if(ue(s))o=16;else if(typeof s=="object")if(a&65){const i=s.default;i&&(i._c&&(i._d=!1),br(n,i()),i._c&&(i._d=!0));return}else{o=32;const i=s._;!i&&!(ci in s)?s._ctx=Xe:i===3&&Xe&&(Xe.slots._===1?s._=1:(s._=2,n.patchFlag|=1024))}else fe(s)?(s={default:s,_ctx:Xe},o=32):(s=String(s),a&64?(o=16,s=[t(s)]):o=8);n.children=s,n.shapeFlag|=o}function G(...n){const s={};for(let o=0;o<n.length;o++){const a=n[o];for(const i in a)if(i==="class")s.class!==a.class&&(s.class=qe([s.class,a.class]));else if(i==="style")s.style=tn([s.style,a.style]);else if(Ko(i)){const l=s[i],r=a[i];r&&l!==r&&!(ue(l)&&l.includes(r))&&(s[i]=l?[].concat(l,r):r)}else i!==""&&(s[i]=a[i])}return s}function Pn(n,s,o,a=null){Fn(n,s,7,[o,a])}const k_=pd();let x_=0;function w_(n,s,o){const a=n.type,i=(s?s.appContext:n.appContext)||k_,l={uid:x_++,vnode:n,type:a,parent:s,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new yp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:md(a,i),emitsOptions:Zp(a,i),emit:null,emitted:null,propsDefaults:je,inheritAttrs:a.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=Fh(l),l.root=s?s.root:l,l.emit=gh.bind(null,l),n.ce&&n.ce(l),l}let Je=null;const In=()=>Je||Xe;let kr,$s,wc="__VUE_INSTANCE_SETTERS__";($s=Ca()[wc])||($s=Ca()[wc]=[]),$s.push(n=>Je=n),kr=n=>{$s.length>1?$s.forEach(s=>s(n)):$s[0](n)};const Ps=n=>{kr(n),n.scope.on()},fs=()=>{Je&&Je.scope.off(),kr(null)},y_=Wt("slot,component");function pl(n,s){const o=s.isNativeTag||_p;(y_(n)||o(n))&&q("Do not use built-in or reserved HTML elements as component id: "+n)}function wd(n){return n.vnode.shapeFlag&4}let So=!1;function I_(n,s=!1){So=s;const{props:o,children:a}=n.vnode,i=wd(n);Jh(n,o,i,s),l_(n,a);const l=i?$_(n,s):void 0;return So=!1,l}function $_(n,s){var o;const a=n.type;{if(a.name&&pl(a.name,n.appContext.config),a.components){const l=Object.keys(a.components);for(let r=0;r<l.length;r++)pl(l[r],n.appContext.config)}if(a.directives){const l=Object.keys(a.directives);for(let r=0;r<l.length;r++)nd(l[r])}a.compilerOptions&&L_()&&q('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}n.accessCache=Object.create(null),n.proxy=ni(new Proxy(n.ctx,cd)),jh(n);const{setup:i}=a;if(i){const l=n.setupContext=i.length>1?Id(n):null;Ps(n),bs();const r=gt(i,n,0,[oo(n.props),l]);if(ks(),fs(),er(r)){if(r.then(fs,fs),s)return r.then(c=>{yc(n,c,s)}).catch(c=>{ti(c,n,0)});if(n.asyncDep=r,!n.suspense){const c=(o=a.name)!=null?o:"Anonymous";q(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else yc(n,r,s)}else yd(n,s)}function yc(n,s,o){fe(s)?n.type.__ssrInlineRender?n.ssrRender=s:n.render=s:ze(s)?(Kt(s)&&q("setup() should not return VNodes directly - return a render function instead."),n.devtoolsRawSetupState=s,n.setupState=Fp(s),Kh(n)):s!==void 0&&q(`setup() should return an object. Received: ${s===null?"null":typeof s}`),yd(n,o)}let dl;const L_=()=>!dl;function yd(n,s,o){const a=n.type;if(!n.render){if(!s&&dl&&!a.render){const i=a.template||gr(n).template;if(i){pt(n,"compile");const{isCustomElement:l,compilerOptions:r}=n.appContext.config,{delimiters:c,compilerOptions:u}=a,p=Ke(Ke({isCustomElement:l,delimiters:c},r),u);a.render=dl(i,p),dt(n,"compile")}}n.render=a.render||xn}Ps(n),bs(),qh(n),ks(),fs(),!a.render&&n.render===xn&&!s&&(a.template?q('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):q("Component is missing template or render function."))}function C_(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(s,o){return Ma(),cn(n,"get","$attrs"),s[o]},set(){return q("setupContext.attrs is readonly."),!1},deleteProperty(){return q("setupContext.attrs is readonly."),!1}}))}function E_(n){return n.slotsProxy||(n.slotsProxy=new Proxy(n.slots,{get(s,o){return cn(n,"get","$slots"),s[o]}}))}function Id(n){return Object.freeze({get attrs(){return C_(n)},get slots(){return E_(n)},get emit(){return(o,...a)=>n.emit(o,...a)},expose:o=>{if(n.exposed&&q("expose() should be called only once per setup()."),o!=null){let a=typeof o;a==="object"&&(ue(o)?a="array":Ae(o)&&(a="ref")),a!=="object"&&q(`expose() should be passed a plain object, received ${a}.`)}n.exposed=o||{}}})}function ui(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Fp(ni(n.exposed)),{get(s,o){if(o in s)return s[o];if(o in ms)return ms[o](n)},has(s,o){return o in s||o in ms}}))}const S_=/(?:^|[-_])(\w)/g,R_=n=>n.replace(S_,s=>s.toUpperCase()).replace(/[-_]/g,"");function Ro(n,s=!0){return fe(n)?n.displayName||n.name:n.name||s&&n.__name}function pi(n,s,o=!1){let a=Ro(s);if(!a&&s.__file){const i=s.__file.match(/([^/\\]+)\.\w+$/);i&&(a=i[1])}if(!a&&n&&n.parent){const i=l=>{for(const r in l)if(l[r]===s)return r};a=i(n.components||n.parent.type.components)||i(n.appContext.components)}return a?R_(a):o?"App":"Anonymous"}function $d(n){return fe(n)&&"__vccOpts"in n}const K=(n,s)=>Y1(n,s,So);function yn(n,s,o){const a=arguments.length;return a===2?ze(s)&&!ue(s)?Kt(s)?R(n,null,[s]):R(n,s):R(n,null,s):(a>3?o=Array.prototype.slice.call(arguments,2):a===3&&Kt(o)&&(o=[o]),R(n,s,o))}const T_=Symbol.for("v-scx"),A_=()=>{{const n=L(T_);return n||q("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),n}};function wi(n){return!!(n&&n.__v_isShallow)}function M_(){if(typeof window>"u")return;const n={style:"color:#3ba776"},s={style:"color:#0b1bc9"},o={style:"color:#b62e24"},a={style:"color:#9d288c"},i={header(m){return ze(m)?m.__isVue?["div",n,"VueInstance"]:Ae(m)?["div",{},["span",n,d(m)],"<",c(m.value),">"]:ps(m)?["div",{},["span",n,wi(m)?"ShallowReactive":"Reactive"],"<",c(m),`>${jt(m)?" (readonly)":""}`]:jt(m)?["div",{},["span",n,wi(m)?"ShallowReadonly":"Readonly"],"<",c(m),">"]:null:null},hasBody(m){return m&&m.__isVue},body(m){if(m&&m.__isVue)return["div",{},...l(m.$)]}};function l(m){const f=[];m.type.props&&m.props&&f.push(r("props",ge(m.props))),m.setupState!==je&&f.push(r("setup",m.setupState)),m.data!==je&&f.push(r("data",ge(m.data)));const h=u(m,"computed");h&&f.push(r("computed",h));const _=u(m,"inject");return _&&f.push(r("injected",_)),f.push(["div",{},["span",{style:a.style+";opacity:0.66"},"$ (internal): "],["object",{object:m}]]),f}function r(m,f){return f=Ke({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},m],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",a,h+": "],c(f[h],!1)])]]:["span",{}]}function c(m,f=!0){return typeof m=="number"?["span",s,m]:typeof m=="string"?["span",o,JSON.stringify(m)]:typeof m=="boolean"?["span",a,m]:ze(m)?["object",{object:f?ge(m):m}]:["span",o,String(m)]}function u(m,f){const h=m.type;if(fe(h))return;const _={};for(const w in m.ctx)p(h,w,f)&&(_[w]=m.ctx[w]);return _}function p(m,f,h){const _=m[h];if(ue(_)&&_.includes(f)||ze(_)&&f in _||m.extends&&p(m.extends,f,h)||m.mixins&&m.mixins.some(w=>p(w,f,h)))return!0}function d(m){return wi(m)?"ShallowRef":m.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(i):window.devtoolsFormatters=[i]}const Fa="3.3.4",z_="http://www.w3.org/2000/svg",ns=typeof document<"u"?document:null,Ic=ns&&ns.createElement("template"),O_={insert:(n,s,o)=>{s.insertBefore(n,o||null)},remove:n=>{const s=n.parentNode;s&&s.removeChild(n)},createElement:(n,s,o,a)=>{const i=s?ns.createElementNS(z_,n):ns.createElement(n,o?{is:o}:void 0);return n==="select"&&a&&a.multiple!=null&&i.setAttribute("multiple",a.multiple),i},createText:n=>ns.createTextNode(n),createComment:n=>ns.createComment(n),setText:(n,s)=>{n.nodeValue=s},setElementText:(n,s)=>{n.textContent=s},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ns.querySelector(n),setScopeId(n,s){n.setAttribute(s,"")},insertStaticContent(n,s,o,a,i,l){const r=o?o.previousSibling:s.lastChild;if(i&&(i===l||i.nextSibling))for(;s.insertBefore(i.cloneNode(!0),o),!(i===l||!(i=i.nextSibling)););else{Ic.innerHTML=a?`<svg>${n}</svg>`:n;const c=Ic.content;if(a){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}s.insertBefore(c,o)}return[r?r.nextSibling:s.firstChild,o?o.previousSibling:s.lastChild]}};function P_(n,s,o){const a=n._vtc;a&&(s=(s?[s,...a]:[...a]).join(" ")),s==null?n.removeAttribute("class"):o?n.setAttribute("class",s):n.className=s}function D_(n,s,o){const a=n.style,i=We(o);if(o&&!i){if(s&&!We(s))for(const l in s)o[l]==null&&ml(a,l,"");for(const l in o)ml(a,l,o[l])}else{const l=a.display;i?s!==o&&(a.cssText=o):s&&n.removeAttribute("style"),"_vod"in n&&(a.display=l)}}const N_=/[^\\];\s*$/,$c=/\s*!important$/;function ml(n,s,o){if(ue(o))o.forEach(a=>ml(n,s,a));else if(o==null&&(o=""),N_.test(o)&&q(`Unexpected semicolon at the end of '${s}' style value: '${o}'`),s.startsWith("--"))n.setProperty(s,o);else{const a=F_(n,s);$c.test(o)?n.setProperty(vt(a),o.replace($c,""),"important"):n[a]=o}}const Lc=["Webkit","Moz","ms"],yi={};function F_(n,s){const o=yi[s];if(o)return o;let a=ot(s);if(a!=="filter"&&a in n)return yi[s]=a;a=gs(a);for(let i=0;i<Lc.length;i++){const l=Lc[i]+a;if(l in n)return yi[s]=l}return s}const Cc="http://www.w3.org/1999/xlink";function j_(n,s,o,a,i){if(a&&s.startsWith("xlink:"))o==null?n.removeAttributeNS(Cc,s.slice(6,s.length)):n.setAttributeNS(Cc,s,o);else{const l=c1(s);o==null||l&&!xp(o)?n.removeAttribute(s):n.setAttribute(s,l?"":o)}}function K_(n,s,o,a,i,l,r){if(s==="innerHTML"||s==="textContent"){a&&r(a,i,l),n[s]=o??"";return}const c=n.tagName;if(s==="value"&&c!=="PROGRESS"&&!c.includes("-")){n._value=o;const p=c==="OPTION"?n.getAttribute("value"):n.value,d=o??"";p!==d&&(n.value=d),o==null&&n.removeAttribute(s);return}let u=!1;if(o===""||o==null){const p=typeof n[s];p==="boolean"?o=xp(o):o==null&&p==="string"?(o="",u=!0):p==="number"&&(o=0,u=!0)}try{n[s]=o}catch(p){u||q(`Failed setting prop "${s}" on <${c.toLowerCase()}>: value ${o} is invalid.`,p)}u&&n.removeAttribute(s)}function H_(n,s,o,a){n.addEventListener(s,o,a)}function W_(n,s,o,a){n.removeEventListener(s,o,a)}function B_(n,s,o,a,i=null){const l=n._vei||(n._vei={}),r=l[s];if(a&&r)r.value=a;else{const[c,u]=q_(s);if(a){const p=l[s]=G_(a,i);H_(n,c,p,u)}else r&&(W_(n,c,r,u),l[s]=void 0)}}const Ec=/(?:Once|Passive|Capture)$/;function q_(n){let s;if(Ec.test(n)){s={};let a;for(;a=n.match(Ec);)n=n.slice(0,n.length-a[0].length),s[a[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):vt(n.slice(2)),s]}let Ii=0;const V_=Promise.resolve(),U_=()=>Ii||(V_.then(()=>Ii=0),Ii=Date.now());function G_(n,s){const o=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=o.attached)return;Fn(Y_(a,o.value),s,5,[a])};return o.value=n,o.attached=U_(),o}function Y_(n,s){if(ue(s)){const o=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{o.call(n),n._stopped=!0},s.map(a=>i=>!i._stopped&&a&&a(i))}else return s}const Sc=/^on[a-z]/,Q_=(n,s,o,a,i=!1,l,r,c,u)=>{s==="class"?P_(n,a,i):s==="style"?D_(n,o,a):Ko(s)?$a(s)||B_(n,s,o,a,r):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):Z_(n,s,a,i))?K_(n,s,a,l,r,c,u):(s==="true-value"?n._trueValue=a:s==="false-value"&&(n._falseValue=a),j_(n,s,a,i))};function Z_(n,s,o,a){return a?!!(s==="innerHTML"||s==="textContent"||s in n&&Sc.test(s)&&fe(o)):s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&n.tagName==="INPUT"||s==="type"&&n.tagName==="TEXTAREA"||Sc.test(s)&&We(o)?!1:s in n}function Ld(n){const s=In();if(!s){q("useCssVars is called without current active component instance.");return}const o=s.ut=(i=n(s.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${s.uid}"]`)).forEach(l=>hl(l,i))},a=()=>{const i=n(s.proxy);fl(s.subTree,i),o(i)};Ih(a),xt(()=>{const i=new MutationObserver(a);i.observe(s.subTree.el.parentNode,{childList:!0}),qo(()=>i.disconnect())})}function fl(n,s){if(n.shapeFlag&128){const o=n.suspense;n=o.activeBranch,o.pendingBranch&&!o.isHydrating&&o.effects.push(()=>{fl(o.activeBranch,s)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)hl(n.el,s);else if(n.type===Te)n.children.forEach(o=>fl(o,s));else if(n.type===po){let{el:o,anchor:a}=n;for(;o&&(hl(o,s),o!==a);)o=o.nextSibling}}function hl(n,s){if(n.nodeType===1){const o=n.style;for(const a in s)o.setProperty(`--${a}`,s[a])}}const yt="transition",Vs="animation",Cd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},J_=Ke({},Ch,Cd),Gt=(n,s=[])=>{ue(n)?n.forEach(o=>o(...s)):n&&n(...s)},Rc=n=>n?ue(n)?n.some(s=>s.length>1):n.length>1:!1;function X_(n){const s={};for(const X in n)X in Cd||(s[X]=n[X]);if(n.css===!1)return s;const{name:o="v",type:a,duration:i,enterFromClass:l=`${o}-enter-from`,enterActiveClass:r=`${o}-enter-active`,enterToClass:c=`${o}-enter-to`,appearFromClass:u=l,appearActiveClass:p=r,appearToClass:d=c,leaveFromClass:m=`${o}-leave-from`,leaveActiveClass:f=`${o}-leave-active`,leaveToClass:h=`${o}-leave-to`}=n,_=eg(i),w=_&&_[0],y=_&&_[1],{onBeforeEnter:I,onEnter:$,onEnterCancelled:k,onLeave:M,onLeaveCancelled:T,onBeforeAppear:N=I,onAppear:B=$,onAppearCancelled:j=k}=s,U=(X,ve,ke)=>{$t(X,ve?d:c),$t(X,ve?p:r),ke&&ke()},le=(X,ve)=>{X._isLeaving=!1,$t(X,m),$t(X,h),$t(X,f),ve&&ve()},me=X=>(ve,ke)=>{const ye=X?B:$,De=()=>U(ve,X,ke);Gt(ye,[ve,De]),Tc(()=>{$t(ve,X?u:l),mt(ve,X?d:c),Rc(ye)||Ac(ve,a,w,De)})};return Ke(s,{onBeforeEnter(X){Gt(I,[X]),mt(X,l),mt(X,r)},onBeforeAppear(X){Gt(N,[X]),mt(X,u),mt(X,p)},onEnter:me(!1),onAppear:me(!0),onLeave(X,ve){X._isLeaving=!0;const ke=()=>le(X,ve);mt(X,m),Sd(),mt(X,f),Tc(()=>{X._isLeaving&&($t(X,m),mt(X,h),Rc(M)||Ac(X,a,y,ke))}),Gt(M,[X,ke])},onEnterCancelled(X){U(X,!1),Gt(k,[X])},onAppearCancelled(X){U(X,!0),Gt(j,[X])},onLeaveCancelled(X){le(X),Gt(T,[X])}})}function eg(n){if(n==null)return null;if(ze(n))return[$i(n.enter),$i(n.leave)];{const s=$i(n);return[s,s]}}function $i(n){const s=e1(n);return eh(s,"<transition> explicit duration"),s}function mt(n,s){s.split(/\s+/).forEach(o=>o&&n.classList.add(o)),(n._vtc||(n._vtc=new Set)).add(s)}function $t(n,s){s.split(/\s+/).forEach(a=>a&&n.classList.remove(a));const{_vtc:o}=n;o&&(o.delete(s),o.size||(n._vtc=void 0))}function Tc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let ng=0;function Ac(n,s,o,a){const i=n._endId=++ng,l=()=>{i===n._endId&&a()};if(o)return setTimeout(l,o);const{type:r,timeout:c,propCount:u}=Ed(n,s);if(!r)return a();const p=r+"end";let d=0;const m=()=>{n.removeEventListener(p,f),l()},f=h=>{h.target===n&&++d>=u&&m()};setTimeout(()=>{d<u&&m()},c+1),n.addEventListener(p,f)}function Ed(n,s){const o=window.getComputedStyle(n),a=_=>(o[_]||"").split(", "),i=a(`${yt}Delay`),l=a(`${yt}Duration`),r=Mc(i,l),c=a(`${Vs}Delay`),u=a(`${Vs}Duration`),p=Mc(c,u);let d=null,m=0,f=0;s===yt?r>0&&(d=yt,m=r,f=l.length):s===Vs?p>0&&(d=Vs,m=p,f=u.length):(m=Math.max(r,p),d=m>0?r>p?yt:Vs:null,f=d?d===yt?l.length:u.length:0);const h=d===yt&&/\b(transform|all)(,|$)/.test(a(`${yt}Property`).toString());return{type:d,timeout:m,propCount:f,hasTransform:h}}function Mc(n,s){for(;n.length<s.length;)n=n.concat(n);return Math.max(...s.map((o,a)=>zc(o)+zc(n[a])))}function zc(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function Sd(){return document.body.offsetHeight}const Rd=new WeakMap,Td=new WeakMap,Ad={name:"TransitionGroup",props:Ke({},J_,{tag:String,moveClass:String}),setup(n,{slots:s}){const o=In(),a=Lh();let i,l;return ri(()=>{if(!i.length)return;const r=n.moveClass||`${n.name||"v"}-move`;if(!lg(i[0].el,o.vnode.el,r))return;i.forEach(og),i.forEach(ag);const c=i.filter(ig);Sd(),c.forEach(u=>{const p=u.el,d=p.style;mt(p,r),d.transform=d.webkitTransform=d.transitionDuration="";const m=p._moveCb=f=>{f&&f.target!==p||(!f||/transform$/.test(f.propertyName))&&(p.removeEventListener("transitionend",m),p._moveCb=null,$t(p,r))};p.addEventListener("transitionend",m)})}),()=>{const r=ge(n),c=X_(r);let u=r.tag||Te;i=l,l=s.default?sd(s.default()):[];for(let p=0;p<l.length;p++){const d=l[p];d.key!=null?za(d,tl(d,c,a,o)):q("<TransitionGroup> children must be keyed.")}if(i)for(let p=0;p<i.length;p++){const d=i[p];za(d,tl(d,c,a,o)),Rd.set(d,d.el.getBoundingClientRect())}return R(u,null,l)}}},tg=n=>delete n.mode;Ad.props;const sg=Ad;function og(n){const s=n.el;s._moveCb&&s._moveCb(),s._enterCb&&s._enterCb()}function ag(n){Td.set(n,n.el.getBoundingClientRect())}function ig(n){const s=Rd.get(n),o=Td.get(n),a=s.left-o.left,i=s.top-o.top;if(a||i){const l=n.el.style;return l.transform=l.webkitTransform=`translate(${a}px,${i}px)`,l.transitionDuration="0s",n}}function lg(n,s,o){const a=n.cloneNode();n._vtc&&n._vtc.forEach(r=>{r.split(/\s+/).forEach(c=>c&&a.classList.remove(c))}),o.split(/\s+/).forEach(r=>r&&a.classList.add(r)),a.style.display="none";const i=s.nodeType===1?s:s.parentNode;i.appendChild(a);const{hasTransform:l}=Ed(a);return i.removeChild(a),l}const rg=["ctrl","shift","alt","meta"],cg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,s)=>rg.some(o=>n[`${o}Key`]&&!s.includes(o))},ug=(n,s)=>(o,...a)=>{for(let i=0;i<s.length;i++){const l=cg[s[i]];if(l&&l(o,s))return}return n(o,...a)},pg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},aa=(n,s)=>o=>{if(!("key"in o))return;const a=vt(o.key);if(s.some(i=>i===a||pg[i]===a))return n(o)},Md={beforeMount(n,{value:s},{transition:o}){n._vod=n.style.display==="none"?"":n.style.display,o&&s?o.beforeEnter(n):Us(n,s)},mounted(n,{value:s},{transition:o}){o&&s&&o.enter(n)},updated(n,{value:s,oldValue:o},{transition:a}){!s!=!o&&(a?s?(a.beforeEnter(n),Us(n,!0),a.enter(n)):a.leave(n,()=>{Us(n,!1)}):Us(n,s))},beforeUnmount(n,{value:s}){Us(n,s)}};function Us(n,s){n.style.display=s?n._vod:"none"}const dg=Ke({patchProp:Q_},O_);let Oc;function mg(){return Oc||(Oc=u_(dg))}const fg=(...n)=>{const s=mg().createApp(...n);hg(s),_g(s);const{mount:o}=s;return s.mount=a=>{const i=gg(a);if(!i)return;const l=s._component;!fe(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.innerHTML="";const r=o(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},s};function hg(n){Object.defineProperty(n.config,"isNativeTag",{value:s=>kp(s)||l1(s),writable:!1})}function _g(n){{const s=n.config.isCustomElement;Object.defineProperty(n.config,"isCustomElement",{get(){return s},set(){q("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const o=n.config.compilerOptions,a='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(n.config,"compilerOptions",{get(){return q(a),o},set(){q(a)}})}}function gg(n){if(We(n)){const s=document.querySelector(n);return s||q(`Failed to mount app: mount target selector "${n}" returned null.`),s}return window.ShadowRoot&&n instanceof window.ShadowRoot&&n.mode==="closed"&&q('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),n}function vg(){M_()}vg();function _l(n,s={},o){for(const a in n){const i=n[a],l=o?`${o}:${a}`:a;typeof i=="object"&&i!==null?_l(i,s,l):typeof i=="function"&&(s[l]=i)}return s}const bg={run:n=>n()},kg=()=>bg,zd=typeof console.createTask<"u"?console.createTask:kg;function xg(n,s){const o=s.shift(),a=zd(o);return n.reduce((i,l)=>i.then(()=>a.run(()=>l(...s))),Promise.resolve())}function wg(n,s){const o=s.shift(),a=zd(o);return Promise.all(n.map(i=>a.run(()=>i(...s))))}function Li(n,s){for(const o of[...n])o(s)}class yg{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(s,o,a={}){if(!s||typeof o!="function")return()=>{};const i=s;let l;for(;this._deprecatedHooks[s];)l=this._deprecatedHooks[s],s=l.to;if(l&&!a.allowDeprecated){let r=l.message;r||(r=`${i} hook has been deprecated`+(l.to?`, please use ${l.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(r)||(console.warn(r),this._deprecatedMessages.add(r))}if(!o.name)try{Object.defineProperty(o,"name",{get:()=>"_"+s.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[s]=this._hooks[s]||[],this._hooks[s].push(o),()=>{o&&(this.removeHook(s,o),o=void 0)}}hookOnce(s,o){let a,i=(...l)=>(typeof a=="function"&&a(),a=void 0,i=void 0,o(...l));return a=this.hook(s,i),a}removeHook(s,o){if(this._hooks[s]){const a=this._hooks[s].indexOf(o);a!==-1&&this._hooks[s].splice(a,1),this._hooks[s].length===0&&delete this._hooks[s]}}deprecateHook(s,o){this._deprecatedHooks[s]=typeof o=="string"?{to:o}:o;const a=this._hooks[s]||[];delete this._hooks[s];for(const i of a)this.hook(s,i)}deprecateHooks(s){Object.assign(this._deprecatedHooks,s);for(const o in s)this.deprecateHook(o,s[o])}addHooks(s){const o=_l(s),a=Object.keys(o).map(i=>this.hook(i,o[i]));return()=>{for(const i of a.splice(0,a.length))i()}}removeHooks(s){const o=_l(s);for(const a in o)this.removeHook(a,o[a])}removeAllHooks(){for(const s in this._hooks)delete this._hooks[s]}callHook(s,...o){return o.unshift(s),this.callHookWith(xg,s,...o)}callHookParallel(s,...o){return o.unshift(s),this.callHookWith(wg,s,...o)}callHookWith(s,o,...a){const i=this._before||this._after?{name:o,args:a,context:{}}:void 0;this._before&&Li(this._before,i);const l=s(o in this._hooks?[...this._hooks[o]]:[],a);return l instanceof Promise?l.finally(()=>{this._after&&i&&Li(this._after,i)}):(this._after&&i&&Li(this._after,i),l)}beforeEach(s){return this._before=this._before||[],this._before.push(s),()=>{if(this._before!==void 0){const o=this._before.indexOf(s);o!==-1&&this._before.splice(o,1)}}}afterEach(s){return this._after=this._after||[],this._after.push(s),()=>{if(this._after!==void 0){const o=this._after.indexOf(s);o!==-1&&this._after.splice(o,1)}}}}function Ig(){return new yg}function $g(n){return Array.isArray(n)?n:[n]}const Od=["title","script","style","noscript"],Pd=["base","meta","link","style","script","noscript"],Lg=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Cg=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Eg=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Dd(n){let s=9;for(let o=0;o<n.length;)s=Math.imul(s^n.charCodeAt(o++),9**9);return((s^s>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function gl(n){return Dd(`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([s,o])=>`${s}:${String(o)}`).join(",")}`)}function Sg(n){let s=9;for(const o of n)for(let a=0;a<o.length;)s=Math.imul(s^o.charCodeAt(a++),9**9);return((s^s>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Nd(n,s){const{props:o,tag:a}=n;if(Cg.includes(a))return a;if(a==="link"&&o.rel==="canonical")return"canonical";if(o.charset)return"charset";const i=["id"];a==="meta"&&i.push("name","property","http-equiv");for(const l of i)if(typeof o[l]<"u"){const r=String(o[l]);return s&&!s(r)?!1:`${a}:${l}:${r}`}return!1}function Pc(n,s){return n==null?s||null:typeof n=="function"?n(s):n}function ia(n,s=!1,o){const{tag:a,$el:i}=n;i&&(Object.entries(a.props).forEach(([l,r])=>{r=String(r);const c=`attr:${l}`;if(l==="class"){if(!r)return;for(const u of r.split(" ")){const p=`${c}:${u}`;o&&o(n,p,()=>i.classList.remove(u)),i.classList.contains(u)||i.classList.add(u)}return}o&&!l.startsWith("data-h-")&&o(n,c,()=>i.removeAttribute(l)),(s||i.getAttribute(l)!==r)&&i.setAttribute(l,r)}),Od.includes(a.tag)&&(a.textContent&&a.textContent!==i.textContent?i.textContent=a.textContent:a.innerHTML&&a.innerHTML!==i.innerHTML&&(i.innerHTML=a.innerHTML)))}let Gs=!1;async function Fd(n,s={}){var f,h;const o={shouldRender:!0};if(await n.hooks.callHook("dom:beforeRender",o),!o.shouldRender)return;const a=s.document||n.resolvedOptions.document||window.document,i=(await n.resolveTags()).map(c);if(n.resolvedOptions.experimentalHashHydration&&(Gs=Gs||n._hash||!1,Gs)){const _=Sg(i.map(w=>w.tag._h));if(Gs===_)return;Gs=_}const l=n._popSideEffectQueue();n.headEntries().map(_=>_._sde).forEach(_=>{Object.entries(_).forEach(([w,y])=>{l[w]=y})});const r=(_,w,y)=>{w=`${_.renderId}:${w}`,_.entry&&(_.entry._sde[w]=y),delete l[w]};function c(_){const w=n.headEntries().find(I=>I._i===_._e),y={renderId:_._d||gl(_),$el:null,shouldRender:!0,tag:_,entry:w,markSideEffect:(I,$)=>r(y,I,$)};return y}const u=[],p={body:[],head:[]},d=_=>{n._elMap[_.renderId]=_.$el,u.push(_),r(_,"el",()=>{var w;(w=_.$el)==null||w.remove(),delete n._elMap[_.renderId]})};for(const _ of i){if(await n.hooks.callHook("dom:beforeRenderTag",_),!_.shouldRender)continue;const{tag:w}=_;if(w.tag==="title"){a.title=w.textContent||"",u.push(_);continue}if(w.tag==="htmlAttrs"||w.tag==="bodyAttrs"){_.$el=a[w.tag==="htmlAttrs"?"documentElement":"body"],ia(_,!1,r),u.push(_);continue}if(_.$el=n._elMap[_.renderId],!_.$el&&w.key&&(_.$el=a.querySelector(`${(f=w.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${w.tag}[data-h-${w._h}]`)),_.$el){_.tag._d&&ia(_),d(_);continue}p[(h=w.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(_)}const m={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(p).forEach(([_,w])=>{var I;if(!w.length)return;const y=(I=a==null?void 0:a[_])==null?void 0:I.children;if(y){for(const $ of[...y].reverse()){const k=$.tagName.toLowerCase();if(!Pd.includes(k))continue;const M=$.getAttributeNames().reduce((j,U)=>({...j,[U]:$.getAttribute(U)}),{}),T={tag:k,props:M};$.innerHTML&&(T.innerHTML=$.innerHTML);const N=gl(T);let B=w.findIndex(j=>(j==null?void 0:j.renderId)===N);if(B===-1){const j=Nd(T);B=w.findIndex(U=>(U==null?void 0:U.tag._d)&&U.tag._d===j)}if(B!==-1){const j=w[B];j.$el=$,ia(j),d(j),delete w[B]}}w.forEach($=>{const k=$.tag.tagPosition||"head";m[k]=m[k]||a.createDocumentFragment(),$.$el||($.$el=a.createElement($.tag.tag),ia($,!0)),m[k].appendChild($.$el),d($)})}}),m.head&&a.head.appendChild(m.head),m.bodyOpen&&a.body.insertBefore(m.bodyOpen,a.body.firstChild),m.bodyClose&&a.body.appendChild(m.bodyClose);for(const _ of u)await n.hooks.callHook("dom:renderTag",_);Object.values(l).forEach(_=>_())}let Ci=null;async function jd(n,s={}){function o(){return Ci=null,Fd(n,s)}const a=s.delayFn||(i=>setTimeout(i,10));return Ci=Ci||new Promise(i=>a(()=>i(o())))}function Rg(n){return{hooks:{"entries:updated":function(s){if(typeof(n==null?void 0:n.document)>"u"&&typeof window>"u")return;let o=n==null?void 0:n.delayFn;!o&&typeof requestAnimationFrame<"u"&&(o=requestAnimationFrame),jd(s,{document:(n==null?void 0:n.document)||window.document,delayFn:o})}}}}function Tg(n){var s;return((s=n==null?void 0:n.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:s.getAttribute("content"))||!1}const Dc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Nc(n){if(typeof n.tagPriority=="number")return n.tagPriority;if(n.tag==="meta"){if(n.props.charset)return-2;if(n.props["http-equiv"]==="content-security-policy")return 0}const s=n.tagPriority||n.tag;return s in Dc?Dc[s]:10}const Ag=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Mg(){return{hooks:{"tags:resolve":n=>{const s=o=>{var a;return(a=n.tags.find(i=>i._d===o))==null?void 0:a._p};for(const{prefix:o,offset:a}of Ag)for(const i of n.tags.filter(l=>typeof l.tagPriority=="string"&&l.tagPriority.startsWith(o))){const l=s(i.tagPriority.replace(o,""));typeof l<"u"&&(i._p=l+a)}n.tags.sort((o,a)=>o._p-a._p).sort((o,a)=>Nc(o)-Nc(a))}}}}function zg(){return{hooks:{"tags:resolve":n=>{const{tags:s}=n;let o=s.findIndex(i=>i.tag==="titleTemplate");const a=s.findIndex(i=>i.tag==="title");if(a!==-1&&o!==-1){const i=Pc(s[o].textContent,s[a].textContent);i!==null?s[a].textContent=i||s[a].textContent:delete s[a]}else if(o!==-1){const i=Pc(s[o].textContent);i!==null&&(s[o].textContent=i,s[o].tag="title",o=-1)}o!==-1&&delete s[o],n.tags=s.filter(Boolean)}}}}function Og(){return{hooks:{"tag:normalise":function({tag:n}){typeof n.props.body<"u"&&(n.tagPosition="bodyClose",delete n.props.body)}}}}const Pg=["link","style","script","noscript"];function Dg(){return{hooks:{"tag:normalise":({tag:n,resolvedOptions:s})=>{s.experimentalHashHydration===!0&&(n._h=gl(n)),n.key&&Pg.includes(n.tag)&&(n._h=Dd(n.key),n.props[`data-h-${n._h}`]="")}}}}const Fc=["script","link","bodyAttrs"];function Ng(){const n=(s,o)=>{const a={},i={};Object.entries(o.props).forEach(([r,c])=>{r.startsWith("on")&&typeof c=="function"?i[r]=c:a[r]=c});let l;return s==="dom"&&o.tag==="script"&&typeof a.src=="string"&&typeof i.onload<"u"&&(l=a.src,delete a.src),{props:a,eventHandlers:i,delayedSrc:l}};return{hooks:{"ssr:render":function(s){s.tags=s.tags.map(o=>(!Fc.includes(o.tag)||!Object.entries(o.props).find(([a,i])=>a.startsWith("on")&&typeof i=="function")||(o.props=n("ssr",o).props),o))},"dom:beforeRenderTag":function(s){if(!Fc.includes(s.tag.tag)||!Object.entries(s.tag.props).find(([l,r])=>l.startsWith("on")&&typeof r=="function"))return;const{props:o,eventHandlers:a,delayedSrc:i}=n("dom",s.tag);Object.keys(a).length&&(s.tag.props=o,s.tag._eventHandlers=a,s.tag._delayedSrc=i)},"dom:renderTag":function(s){const o=s.$el;if(!s.tag._eventHandlers||!o)return;const a=s.tag.tag==="bodyAttrs"&&typeof window<"u"?window:o;Object.entries(s.tag._eventHandlers).forEach(([i,l])=>{const r=`${s.tag._d||s.tag._p}:${i}`,c=i.slice(2).toLowerCase(),u=`data-h-${c}`;if(s.markSideEffect(r,()=>{}),o.hasAttribute(u))return;const p=l;o.setAttribute(u,""),a.addEventListener(c,p),s.entry&&(s.entry._sde[r]=()=>{a.removeEventListener(c,p),o.removeAttribute(u)})}),s.tag._delayedSrc&&o.setAttribute("src",s.tag._delayedSrc)}}}}const Fg=["templateParams","htmlAttrs","bodyAttrs"];function jg(){return{hooks:{"tag:normalise":function({tag:n}){["hid","vmid","key"].forEach(a=>{n.props[a]&&(n.key=n.props[a],delete n.props[a])});const o=Nd(n)||(n.key?`${n.tag}:${n.key}`:!1);o&&(n._d=o)},"tags:resolve":function(n){const s={};n.tags.forEach(a=>{const i=(a.key?`${a.tag}:${a.key}`:a._d)||a._p,l=s[i];if(l){let c=a==null?void 0:a.tagDuplicateStrategy;if(!c&&Fg.includes(a.tag)&&(c="merge"),c==="merge"){const u=l.props;["class","style"].forEach(p=>{a.props[p]&&u[p]&&(p==="style"&&!u[p].endsWith(";")&&(u[p]+=";"),a.props[p]=`${u[p]} ${a.props[p]}`)}),s[i].props={...u,...a.props};return}else if(a._e===l._e){l._duped=l._duped||[],a._d=`${l._d}:${l._duped.length+1}`,l._duped.push(a);return}}const r=Object.keys(a.props).length+(a.innerHTML?1:0)+(a.textContent?1:0);if(Pd.includes(a.tag)&&r===0){delete s[i];return}s[i]=a});const o=[];Object.values(s).forEach(a=>{const i=a._duped;delete a._duped,o.push(a),i&&o.push(...i)}),n.tags=o}}}}function la(n,s){function o(l){if(["s","pageTitle"].includes(l))return s.pageTitle;let r;return l.includes(".")?r=l.split(".").reduce((c,u)=>c&&c[u]||void 0,s):r=s[l],typeof r<"u"?r||"":!1}let a=n;try{a=decodeURI(n)}catch{}return(a.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(l=>{const r=o(l.slice(1));typeof r=="string"&&(n=n.replace(new RegExp(`\\${l}(\\W|$)`,"g"),`${r}$1`).trim())}),s.separator&&(n.endsWith(s.separator)&&(n=n.slice(0,-s.separator.length).trim()),n.startsWith(s.separator)&&(n=n.slice(s.separator.length).trim()),n=n.replace(new RegExp(`\\${s.separator}\\s*\\${s.separator}`,"g"),s.separator)),n}function Kg(){return{hooks:{"tags:resolve":n=>{var l;const{tags:s}=n,o=(l=s.find(r=>r.tag==="title"))==null?void 0:l.textContent,a=s.findIndex(r=>r.tag==="templateParams"),i=a!==-1?s[a].props:{};i.pageTitle=i.pageTitle||o||"";for(const r of s)if(["titleTemplate","title"].includes(r.tag)&&typeof r.textContent=="string")r.textContent=la(r.textContent,i);else if(r.tag==="meta"&&typeof r.props.content=="string")r.props.content=la(r.props.content,i);else if(r.tag==="link"&&typeof r.props.href=="string")r.props.href=la(r.props.href,i);else if(r.tag==="script"&&["application/json","application/ld+json"].includes(r.props.type)&&typeof r.innerHTML=="string")try{r.innerHTML=JSON.stringify(JSON.parse(r.innerHTML),(c,u)=>typeof u=="string"?la(u,i):u)}catch{}n.tags=s.filter(r=>r.tag!=="templateParams")}}}}const Hg=typeof window<"u";let Kd;function Wg(n){return Kd=n}function Bg(){return Kd}async function qg(n,s){const o={tag:n,props:{}};return n==="templateParams"?(o.props=s,o):["title","titleTemplate"].includes(n)?(o.textContent=s instanceof Promise?await s:s,o):typeof s=="string"?["script","noscript","style"].includes(n)?(n==="script"&&(/^(https?:)?\/\//.test(s)||s.startsWith("/"))?o.props.src=s:o.innerHTML=s,o):!1:(o.props=await Ug(n,{...s}),o.props.children&&(o.props.innerHTML=o.props.children),delete o.props.children,Object.keys(o.props).filter(a=>Eg.includes(a)).forEach(a=>{(!["innerHTML","textContent"].includes(a)||Od.includes(o.tag))&&(o[a]=o.props[a]),delete o.props[a]}),["innerHTML","textContent"].forEach(a=>{if(o.tag==="script"&&typeof o[a]=="string"&&["application/ld+json","application/json"].includes(o.props.type))try{o[a]=JSON.parse(o[a])}catch{o[a]=""}typeof o[a]=="object"&&(o[a]=JSON.stringify(o[a]))}),o.props.class&&(o.props.class=Vg(o.props.class)),o.props.content&&Array.isArray(o.props.content)?o.props.content.map(a=>({...o,props:{...o.props,content:a}})):o)}function Vg(n){return typeof n=="object"&&!Array.isArray(n)&&(n=Object.keys(n).filter(s=>n[s])),(Array.isArray(n)?n.join(" "):n).split(" ").filter(s=>s.trim()).filter(Boolean).join(" ")}async function Ug(n,s){for(const o of Object.keys(s)){const a=o.startsWith("data-");s[o]instanceof Promise&&(s[o]=await s[o]),String(s[o])==="true"?s[o]=a?"true":"":String(s[o])==="false"&&(a?s[o]="false":delete s[o])}return s}const Gg=10;async function Yg(n){const s=[];return Object.entries(n.resolvedInput).filter(([o,a])=>typeof a<"u"&&Lg.includes(o)).forEach(([o,a])=>{const i=$g(a);s.push(...i.map(l=>qg(o,l)).flat())}),(await Promise.all(s)).flat().filter(Boolean).map((o,a)=>(o._e=n._i,o._p=(n._i<<Gg)+a,o))}function Qg(){return[jg(),Mg(),Kg(),zg(),Dg(),Ng(),Og()]}function Zg(n={}){return[Rg({document:n==null?void 0:n.document,delayFn:n==null?void 0:n.domDelayFn})]}function Jg(n={}){const s=Xg({...n,plugins:[...Zg(n),...(n==null?void 0:n.plugins)||[]]});return n.experimentalHashHydration&&s.resolvedOptions.document&&(s._hash=Tg(s.resolvedOptions.document)),Wg(s),s}function Xg(n={}){let s=[],o={},a=0;const i=Ig();n!=null&&n.hooks&&i.addHooks(n.hooks),n.plugins=[...Qg(),...(n==null?void 0:n.plugins)||[]],n.plugins.forEach(c=>c.hooks&&i.addHooks(c.hooks)),n.document=n.document||(Hg?document:void 0);const l=()=>i.callHook("entries:updated",r),r={resolvedOptions:n,headEntries(){return s},get hooks(){return i},use(c){c.hooks&&i.addHooks(c.hooks)},push(c,u){const p={_i:a++,input:c,_sde:{}};return u!=null&&u.mode&&(p._m=u==null?void 0:u.mode),u!=null&&u.transform&&(p._t=u==null?void 0:u.transform),s.push(p),l(),{dispose(){s=s.filter(d=>d._i!==p._i?!0:(o={...o,...d._sde||{}},d._sde={},l(),!1))},patch(d){s=s.map(m=>(m._i===p._i&&(p.input=m.input=d,l()),m))}}},async resolveTags(){const c={tags:[],entries:[...s]};await i.callHook("entries:resolve",c);for(const u of c.entries){const p=u._t||(d=>d);if(u.resolvedInput=p(u.resolvedInput||u.input),u.resolvedInput)for(const d of await Yg(u)){const m={tag:d,entry:u,resolvedOptions:r.resolvedOptions};await i.callHook("tag:normalise",m),c.tags.push(m.tag)}}return await i.callHook("tags:resolve",c),c.tags},_popSideEffectQueue(){const c={...o};return o={},c},_elMap:{}};return r.hooks.callHook("init",r),r}function e0(n){return typeof n=="function"?n():z(n)}function ja(n,s=""){if(n instanceof Promise)return n;const o=e0(n);return!n||!o?o:Array.isArray(o)?o.map(a=>ja(a,s)):typeof o=="object"?Object.fromEntries(Object.entries(o).map(([a,i])=>a==="titleTemplate"||a.startsWith("on")?[a,z(i)]:[a,ja(i,a)])):o}const n0=Fa.startsWith("3"),t0=typeof window<"u",Hd="usehead";function xr(){return In()&&L(Hd)||Bg()}function s0(n){return{install(o){n0&&(o.config.globalProperties.$unhead=n,o.config.globalProperties.$head=n,o.provide(Hd,n))}}.install}function o0(n={}){const s=Jg({...n,domDelayFn:o=>setTimeout(()=>an(()=>o()),10),plugins:[a0(),...(n==null?void 0:n.plugins)||[]]});return s.install=s0(s),s}function a0(){return{hooks:{"entries:resolve":function(n){for(const s of n.entries)s.resolvedInput=ja(s.input)}}}}function i0(n,s={}){const o=xr(),a=J(!1),i=J({});xs(()=>{i.value=a.value?{}:ja(n)});const l=o.push(i.value,s);return be(i,c=>{l.patch(c)}),In()&&(Bo(()=>{l.dispose()}),id(()=>{a.value=!0}),ad(()=>{a.value=!1})),l}function l0(n,s={}){return xr().push(n,s)}function Wd(n,s={}){var a;const o=xr();if(o){const i=t0||!!((a=o.resolvedOptions)!=null&&a.document);return s.mode==="server"&&i||s.mode==="client"&&!i?void 0:i?i0(n,s):l0(n,s)}}function r0(n,s){const o=o0(s||{}),a={unhead:o,install(i){Fa.startsWith("3")&&(i.config.globalProperties.$head=o,i.provide("usehead",o))},use(i){o.use(i)},resolveTags(){return o.resolveTags()},headEntries(){return o.headEntries()},headTags(){return o.resolveTags()},push(i,l){return o.push(i,l)},addEntry(i,l){return o.push(i,l)},addHeadObjs(i,l){return o.push(i,l)},addReactiveEntry(i,l){const r=Wd(i,l);return typeof r<"u"?r.dispose:()=>{}},removeHeadObjs(){},updateDOM(i,l){l?Fd(o,{document:i}):jd(o,{delayFn:r=>setTimeout(()=>r(),50),document:i})},internalHooks:o.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return o.addHeadObjs=a.addHeadObjs,o.updateDOM=a.updateDOM,o.hooks.hook("dom:beforeRender",i=>{for(const l of a.hooks["before:dom"])l()===!1&&(i.shouldRender=!1)}),n&&a.addHeadObjs(n),a}const fo=Symbol("v-click-clicks"),ts=Symbol("v-click-clicks-elements"),vl=Symbol("v-click-clicks-order-map"),ho=Symbol("v-click-clicks-disabled"),Bd=Symbol("slidev-slide-scale"),E=Symbol("slidev-slidev-context"),c0=Symbol("slidev-route"),u0=Symbol("slidev-slide-context"),Jt="slidev-vclick-target",Ei="slidev-vclick-hidden",p0="slidev-vclick-fade",Si="slidev-vclick-hidden-explicitly",Ys="slidev-vclick-current",ra="slidev-vclick-prior",d0=["localhost","127.0.0.1"];let m0=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((s,o)=>(o&=63,o<36?s+=o.toString(36):o<62?s+=(o-26).toString(36).toUpperCase():o>62?s+="-":s+="_",s),"");function bl(n,s){if(!n)return!1;const o=n.indexOf(s);return o>=0?(n.splice(o,1),!0):!1}function f0(...n){let s,o,a;n.length===1?(s=0,a=1,[o]=n):[s,o,a=1]=n;const i=[];let l=s;for(;l<o;)i.push(l),l+=a||1;return i}function h0(n){return n!=null}function _0(n,s){return Object.fromEntries(Object.entries(n).map(([o,a])=>s(o,a)).filter(h0))}const ro={theme:"default",title:"SISTEMI & RETI 3",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},background:"/cover.png",class:"text-center",materia:"RETI 3",as:"2024/2025",version:"1.1.3"},Re=ro,Mt=Re.aspectRatio??16/9,zt=Re.canvasWidth??980,wr=Math.ceil(zt/Mt),yr=K(()=>_0(Re.themeConfig||{},(n,s)=>[`--slidev-theme-${n}`,s]));function qd(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Hn(n,s,o){Object.defineProperty(n,s,{value:o,writable:!0,enumerable:!1})}const ws=Be({page:0,clicks:0});let g0=[],v0=[];Hn(ws,"$syncUp",!0);Hn(ws,"$syncDown",!0);Hn(ws,"$paused",!1);Hn(ws,"$onSet",n=>g0.push(n));Hn(ws,"$onPatch",n=>v0.push(n));qd();Hn(ws,"$patch",async()=>!1);function Vd(n,s,o=!1){const a=[];let i=!1,l=!1,r,c;const u=Be(s);function p(h){a.push(h)}function d(h,_){u[h]!==_&&(clearTimeout(r),i=!0,u[h]=_,r=setTimeout(()=>i=!1,0))}function m(h){i||(clearTimeout(c),l=!0,Object.entries(h).forEach(([_,w])=>{u[_]=w}),c=setTimeout(()=>l=!1,0))}function f(h){let _;o?o&&window.addEventListener("storage",y=>{y&&y.key===h&&y.newValue&&m(JSON.parse(y.newValue))}):(_=new BroadcastChannel(h),_.addEventListener("message",y=>m(y.data)));function w(){!o&&_&&!l?_.postMessage(ge(u)):o&&!l&&window.localStorage.setItem(h,JSON.stringify(u)),i||a.forEach(y=>y(u))}if(be(u,w,{deep:!0,flush:"sync"}),o){const y=window.localStorage.getItem(h);y&&m(JSON.parse(y))}}return{init:f,onPatch:p,patch:d,state:u}}const{init:b0,onPatch:k0,patch:Qs,state:Ri}=Vd(ws,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ys=Be({});let x0=[],w0=[];Hn(ys,"$syncUp",!0);Hn(ys,"$syncDown",!0);Hn(ys,"$paused",!1);Hn(ys,"$onSet",n=>x0.push(n));Hn(ys,"$onPatch",n=>w0.push(n));qd();Hn(ys,"$patch",async()=>!1);const{init:y0,onPatch:I0,patch:Ud,state:Ka}=Vd(ys,{},!1),$0="modulepreload",L0=function(n){return"/3/linux_cli/"+n},jc={},Ot=function(s,o,a){if(!o||o.length===0)return s();const i=document.getElementsByTagName("link");return Promise.all(o.map(l=>{if(l=L0(l),l in jc)return;jc[l]=!0;const r=l.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!a)for(let d=i.length-1;d>=0;d--){const m=i[d];if(m.href===l&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":$0,r||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),r)return new Promise((d,m)=>{p.addEventListener("load",d),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>s())};function C0(n,s){let o,a,i;const l=J(!0),r=()=>{l.value=!0,i()};be(n,r,{flush:"sync"});const c=typeof s=="function"?s:s.get,u=typeof s=="function"?void 0:s.set,p=ur((d,m)=>(a=d,i=m,{get(){return l.value&&(o=c(),l.value=!1),a(),o},set(f){u==null||u(f)}}));return Object.isExtensible(p)&&(p.trigger=r),p}function rt(n){return sr()?(Ip(n),!0):!1}function Ge(n){return typeof n=="function"?n():z(n)}function E0(n){if(!Ae(n))return Be(n);const s=new Proxy({},{get(o,a,i){return z(Reflect.get(n.value,a,i))},set(o,a,i){return Ae(n.value[a])&&!Ae(i)?n.value[a].value=i:n.value[a]=i,!0},deleteProperty(o,a){return Reflect.deleteProperty(n.value,a)},has(o,a){return Reflect.has(n.value,a)},ownKeys(){return Object.keys(n.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Be(s)}const Yn=typeof window<"u",S0=n=>typeof n<"u",R0=n=>n!=null,T0=Object.prototype.toString,kl=n=>T0.call(n)==="[object Object]",xl=()=>+Date.now(),hs=()=>{},A0=M0();function M0(){var n;return Yn&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function z0(n,s){function o(...a){return new Promise((i,l)=>{Promise.resolve(n(()=>s.apply(this,a),{fn:s,thisArg:this,args:a})).then(i).catch(l)})}return o}const Gd=n=>n();function O0(n=Gd){const s=J(!0);function o(){s.value=!1}function a(){s.value=!0}const i=(...l)=>{s.value&&n(...l)};return{isActive:Un(s),pause:o,resume:a,eventFilter:i}}function P0(n,s){var o;if(typeof n=="number")return n+s;const a=((o=n.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:o[0])||"",i=n.slice(a.length),l=parseFloat(a)+s;return Number.isNaN(l)?n:l+i}function Yd(...n){if(n.length!==1)return U1(...n);const s=n[0];return typeof s=="function"?Un(ur(()=>({get:s,set:hs}))):J(s)}var D0=Object.defineProperty,N0=Object.defineProperties,F0=Object.getOwnPropertyDescriptors,Kc=Object.getOwnPropertySymbols,j0=Object.prototype.hasOwnProperty,K0=Object.prototype.propertyIsEnumerable,Hc=(n,s,o)=>s in n?D0(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,H0=(n,s)=>{for(var o in s||(s={}))j0.call(s,o)&&Hc(n,o,s[o]);if(Kc)for(var o of Kc(s))K0.call(s,o)&&Hc(n,o,s[o]);return n},W0=(n,s)=>N0(n,F0(s));function B0(n){if(!Ae(n))return B1(n);const s=Array.isArray(n.value)?new Array(n.value.length):{};for(const o in n.value)s[o]=ur(()=>({get(){return n.value[o]},set(a){if(Array.isArray(n.value)){const i=[...n.value];i[o]=a,n.value=i}else{const i=W0(H0({},n.value),{[o]:a});Object.setPrototypeOf(i,n.value),n.value=i}}}));return s}function Qd(n,s=!0){In()?xt(n):s?n():an(n)}function q0(n){In()&&qo(n)}function V0(n,s=1e3,o={}){const{immediate:a=!0,immediateCallback:i=!1}=o;let l=null;const r=J(!1);function c(){l&&(clearInterval(l),l=null)}function u(){r.value=!1,c()}function p(){const d=Ge(s);d<=0||(r.value=!0,i&&n(),c(),l=setInterval(n,d))}if(a&&Yn&&p(),Ae(s)||typeof s=="function"){const d=be(s,()=>{r.value&&Yn&&p()});rt(d)}return rt(u),{isActive:r,pause:u,resume:p}}function U0(n,s,o={}){const{immediate:a=!0}=o,i=J(!1);let l=null;function r(){l&&(clearTimeout(l),l=null)}function c(){i.value=!1,r()}function u(...p){r(),i.value=!0,l=setTimeout(()=>{i.value=!1,l=null,n(...p)},Ge(s))}return a&&(i.value=!0,Yn&&u()),rt(c),{isPending:Un(i),start:u,stop:c}}function Zd(n=!1,s={}){const{truthyValue:o=!0,falsyValue:a=!1}=s,i=Ae(n),l=J(n);function r(c){if(arguments.length)return l.value=c,l.value;{const u=Ge(o);return l.value=l.value===u?Ge(a):u,l.value}}return i?r:[l,r]}var Wc=Object.getOwnPropertySymbols,G0=Object.prototype.hasOwnProperty,Y0=Object.prototype.propertyIsEnumerable,Q0=(n,s)=>{var o={};for(var a in n)G0.call(n,a)&&s.indexOf(a)<0&&(o[a]=n[a]);if(n!=null&&Wc)for(var a of Wc(n))s.indexOf(a)<0&&Y0.call(n,a)&&(o[a]=n[a]);return o};function Z0(n,s,o={}){const a=o,{eventFilter:i=Gd}=a,l=Q0(a,["eventFilter"]);return be(n,z0(i,s),l)}var J0=Object.defineProperty,X0=Object.defineProperties,ev=Object.getOwnPropertyDescriptors,Ha=Object.getOwnPropertySymbols,Jd=Object.prototype.hasOwnProperty,Xd=Object.prototype.propertyIsEnumerable,Bc=(n,s,o)=>s in n?J0(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,nv=(n,s)=>{for(var o in s||(s={}))Jd.call(s,o)&&Bc(n,o,s[o]);if(Ha)for(var o of Ha(s))Xd.call(s,o)&&Bc(n,o,s[o]);return n},tv=(n,s)=>X0(n,ev(s)),sv=(n,s)=>{var o={};for(var a in n)Jd.call(n,a)&&s.indexOf(a)<0&&(o[a]=n[a]);if(n!=null&&Ha)for(var a of Ha(n))s.indexOf(a)<0&&Xd.call(n,a)&&(o[a]=n[a]);return o};function ov(n,s,o={}){const a=o,{eventFilter:i}=a,l=sv(a,["eventFilter"]),{eventFilter:r,pause:c,resume:u,isActive:p}=O0(i);return{stop:Z0(n,s,tv(nv({},l),{eventFilter:r})),pause:c,resume:u,isActive:p}}function ln(n){var s;const o=Ge(n);return(s=o==null?void 0:o.$el)!=null?s:o}const en=Yn?window:void 0,em=Yn?window.document:void 0,av=Yn?window.navigator:void 0;function Ie(...n){let s,o,a,i;if(typeof n[0]=="string"||Array.isArray(n[0])?([o,a,i]=n,s=en):[s,o,a,i]=n,!s)return hs;Array.isArray(o)||(o=[o]),Array.isArray(a)||(a=[a]);const l=[],r=()=>{l.forEach(d=>d()),l.length=0},c=(d,m,f,h)=>(d.addEventListener(m,f,h),()=>d.removeEventListener(m,f,h)),u=be(()=>[ln(s),Ge(i)],([d,m])=>{r(),d&&l.push(...o.flatMap(f=>a.map(h=>c(d,f,h,m))))},{immediate:!0,flush:"post"}),p=()=>{u(),r()};return rt(p),p}let qc=!1;function iv(n,s,o={}){const{window:a=en,ignore:i=[],capture:l=!0,detectIframe:r=!1}=o;if(!a)return;A0&&!qc&&(qc=!0,Array.from(a.document.body.children).forEach(f=>f.addEventListener("click",hs)));let c=!0;const u=f=>i.some(h=>{if(typeof h=="string")return Array.from(a.document.querySelectorAll(h)).some(_=>_===f.target||f.composedPath().includes(_));{const _=ln(h);return _&&(f.target===_||f.composedPath().includes(_))}}),d=[Ie(a,"click",f=>{const h=ln(n);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(c=!u(f)),!c){c=!0;return}s(f)}},{passive:!0,capture:l}),Ie(a,"pointerdown",f=>{const h=ln(n);h&&(c=!f.composedPath().includes(h)&&!u(f))},{passive:!0}),r&&Ie(a,"blur",f=>{var h;const _=ln(n);((h=a.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(_!=null&&_.contains(a.document.activeElement))&&s(f)})].filter(Boolean);return()=>d.forEach(f=>f())}function lv(n){return typeof n=="function"?n:typeof n=="string"?s=>s.key===n:Array.isArray(n)?s=>n.includes(s.key):()=>!0}function rv(...n){let s,o,a={};n.length===3?(s=n[0],o=n[1],a=n[2]):n.length===2?typeof n[1]=="object"?(s=!0,o=n[0],a=n[1]):(s=n[0],o=n[1]):(s=!0,o=n[0]);const{target:i=en,eventName:l="keydown",passive:r=!1,dedupe:c=!1}=a,u=lv(s);return Ie(i,l,d=>{d.repeat&&Ge(c)||u(d)&&o(d)},r)}function cv(n={}){var s;const{window:o=en}=n,a=(s=n.document)!=null?s:o==null?void 0:o.document,i=C0(()=>null,()=>a==null?void 0:a.activeElement);return o&&(Ie(o,"blur",l=>{l.relatedTarget===null&&i.trigger()},!0),Ie(o,"focus",i.trigger,!0)),i}function uv(){const n=J(!1);return In()&&xt(()=>{n.value=!0}),n}function Uo(n){const s=uv();return K(()=>(s.value,!!n()))}function pv(n,s={}){const{immediate:o=!0,window:a=en}=s,i=J(!1);let l=0,r=null;function c(d){if(!i.value||!a)return;const m=d-l;n({delta:m,timestamp:d}),l=d,r=a.requestAnimationFrame(c)}function u(){!i.value&&a&&(i.value=!0,r=a.requestAnimationFrame(c))}function p(){i.value=!1,r!=null&&a&&(a.cancelAnimationFrame(r),r=null)}return o&&u(),rt(p),{isActive:Un(i),pause:p,resume:u}}function ss(n,s={}){const{window:o=en}=s,a=Uo(()=>o&&"matchMedia"in o&&typeof o.matchMedia=="function");let i;const l=J(!1),r=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",c):i.removeListener(c))},c=()=>{a.value&&(r(),i=o.matchMedia(Yd(n).value),l.value=!!(i!=null&&i.matches),i&&("addEventListener"in i?i.addEventListener("change",c):i.addListener(c)))};return xs(c),rt(()=>r()),l}const dv={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function mv(n,s={}){function o(c,u){let p=n[c];return u!=null&&(p=P0(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:a=en}=s;function i(c){return a?a.matchMedia(c).matches:!1}const l=c=>ss(`(min-width: ${o(c)})`,s),r=Object.keys(n).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>l(u),enumerable:!0,configurable:!0}),c),{});return Object.assign(r,{greater(c){return ss(`(min-width: ${o(c,.1)})`,s)},greaterOrEqual:l,smaller(c){return ss(`(max-width: ${o(c,-.1)})`,s)},smallerOrEqual(c){return ss(`(max-width: ${o(c)})`,s)},between(c,u){return ss(`(min-width: ${o(c)}) and (max-width: ${o(u,-.1)})`,s)},isGreater(c){return i(`(min-width: ${o(c,.1)})`)},isGreaterOrEqual(c){return i(`(min-width: ${o(c)})`)},isSmaller(c){return i(`(max-width: ${o(c,-.1)})`)},isSmallerOrEqual(c){return i(`(max-width: ${o(c)})`)},isInBetween(c,u){return i(`(min-width: ${o(c)}) and (max-width: ${o(u,-.1)})`)},current(){const c=Object.keys(n).map(u=>[u,l(u)]);return K(()=>c.filter(([,u])=>u.value).map(([u])=>u))}})}function fv(n={}){const{navigator:s=av,read:o=!1,source:a,copiedDuring:i=1500,legacy:l=!1}=n,r=["copy","cut"],c=Uo(()=>s&&"clipboard"in s),u=K(()=>c.value||l),p=J(""),d=J(!1),m=U0(()=>d.value=!1,i);function f(){c.value?s.clipboard.readText().then(y=>{p.value=y}):p.value=w()}if(u.value&&o)for(const y of r)Ie(y,f);async function h(y=Ge(a)){u.value&&y!=null&&(c.value?await s.clipboard.writeText(y):_(y),p.value=y,d.value=!0,m.start())}function _(y){const I=document.createElement("textarea");I.value=y??"",I.style.position="absolute",I.style.opacity="0",document.body.appendChild(I),I.select(),document.execCommand("copy"),I.remove()}function w(){var y,I,$;return($=(I=(y=document==null?void 0:document.getSelection)==null?void 0:y.call(document))==null?void 0:I.toString())!=null?$:""}return{isSupported:u,text:p,copied:d,copy:h}}function hv(n){return JSON.parse(JSON.stringify(n))}const ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ua="__vueuse_ssr_handlers__",_v=gv();function gv(){return ua in ca||(ca[ua]=ca[ua]||{}),ca[ua]}function vv(n,s){return _v[n]||s}function bv(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}var kv=Object.defineProperty,Vc=Object.getOwnPropertySymbols,xv=Object.prototype.hasOwnProperty,wv=Object.prototype.propertyIsEnumerable,Uc=(n,s,o)=>s in n?kv(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,Gc=(n,s)=>{for(var o in s||(s={}))xv.call(s,o)&&Uc(n,o,s[o]);if(Vc)for(var o of Vc(s))wv.call(s,o)&&Uc(n,o,s[o]);return n};const yv={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},Yc="vueuse-storage";function Iv(n,s,o,a={}){var i;const{flush:l="pre",deep:r=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:d,window:m=en,eventFilter:f,onError:h=j=>{console.error(j)}}=a,_=(d?it:J)(s);if(!o)try{o=vv("getDefaultStorage",()=>{var j;return(j=en)==null?void 0:j.localStorage})()}catch(j){h(j)}if(!o)return _;const w=Ge(s),y=bv(w),I=(i=a.serializer)!=null?i:yv[y],{pause:$,resume:k}=ov(_,()=>M(_.value),{flush:l,deep:r,eventFilter:f});return m&&c&&(Ie(m,"storage",B),Ie(m,Yc,N)),B(),_;function M(j){try{if(j==null)o.removeItem(n);else{const U=I.write(j),le=o.getItem(n);le!==U&&(o.setItem(n,U),m&&m.dispatchEvent(new CustomEvent(Yc,{detail:{key:n,oldValue:le,newValue:U,storageArea:o}})))}}catch(U){h(U)}}function T(j){const U=j?j.newValue:o.getItem(n);if(U==null)return u&&w!==null&&o.setItem(n,I.write(w)),w;if(!j&&p){const le=I.read(U);return typeof p=="function"?p(le,w):y==="object"&&!Array.isArray(le)?Gc(Gc({},w),le):le}else return typeof U!="string"?U:I.read(U)}function N(j){B(j.detail)}function B(j){if(!(j&&j.storageArea!==o)){if(j&&j.key==null){_.value=w;return}if(!(j&&j.key!==n)){$();try{_.value=T(j)}catch(U){h(U)}finally{j?an(k):k()}}}}}function $v(n){return ss("(prefers-color-scheme: dark)",n)}var Lv=Object.defineProperty,Cv=Object.defineProperties,Ev=Object.getOwnPropertyDescriptors,Qc=Object.getOwnPropertySymbols,Sv=Object.prototype.hasOwnProperty,Rv=Object.prototype.propertyIsEnumerable,Zc=(n,s,o)=>s in n?Lv(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,Tv=(n,s)=>{for(var o in s||(s={}))Sv.call(s,o)&&Zc(n,o,s[o]);if(Qc)for(var o of Qc(s))Rv.call(s,o)&&Zc(n,o,s[o]);return n},Av=(n,s)=>Cv(n,Ev(s));function AN(n,s={}){var o,a;const{pointerTypes:i,preventDefault:l,stopPropagation:r,exact:c,onMove:u,onEnd:p,onStart:d,initialValue:m,axis:f="both",draggingElement:h=en,handle:_=n}=s,w=J((o=Ge(m))!=null?o:{x:0,y:0}),y=J(),I=N=>i?i.includes(N.pointerType):!0,$=N=>{Ge(l)&&N.preventDefault(),Ge(r)&&N.stopPropagation()},k=N=>{if(!I(N)||Ge(c)&&N.target!==Ge(n))return;const B=Ge(n).getBoundingClientRect(),j={x:N.clientX-B.left,y:N.clientY-B.top};(d==null?void 0:d(j,N))!==!1&&(y.value=j,$(N))},M=N=>{if(!I(N)||!y.value)return;let{x:B,y:j}=w.value;(f==="x"||f==="both")&&(B=N.clientX-y.value.x),(f==="y"||f==="both")&&(j=N.clientY-y.value.y),w.value={x:B,y:j},u==null||u(w.value,N),$(N)},T=N=>{I(N)&&y.value&&(y.value=void 0,p==null||p(w.value,N),$(N))};if(Yn){const N={capture:(a=s.capture)!=null?a:!0};Ie(_,"pointerdown",k,N),Ie(h,"pointermove",M,N),Ie(h,"pointerup",T,N)}return Av(Tv({},B0(w)),{position:w,isDragging:K(()=>!!y.value),style:K(()=>`left:${w.value.x}px;top:${w.value.y}px;`)})}var Jc=Object.getOwnPropertySymbols,Mv=Object.prototype.hasOwnProperty,zv=Object.prototype.propertyIsEnumerable,Ov=(n,s)=>{var o={};for(var a in n)Mv.call(n,a)&&s.indexOf(a)<0&&(o[a]=n[a]);if(n!=null&&Jc)for(var a of Jc(n))s.indexOf(a)<0&&zv.call(n,a)&&(o[a]=n[a]);return o};function Pv(n,s,o={}){const a=o,{window:i=en}=a,l=Ov(a,["window"]);let r;const c=Uo(()=>i&&"ResizeObserver"in i),u=()=>{r&&(r.disconnect(),r=void 0)},p=K(()=>Array.isArray(n)?n.map(f=>ln(f)):[ln(n)]),d=be(p,f=>{if(u(),c.value&&i){r=new ResizeObserver(s);for(const h of f)h&&r.observe(h,l)}},{immediate:!0,flush:"post",deep:!0}),m=()=>{u(),d()};return rt(m),{isSupported:c,stop:m}}function Dv(n,s={width:0,height:0},o={}){const{window:a=en,box:i="content-box"}=o,l=K(()=>{var u,p;return(p=(u=ln(n))==null?void 0:u.namespaceURI)==null?void 0:p.includes("svg")}),r=J(s.width),c=J(s.height);return Pv(n,([u])=>{const p=i==="border-box"?u.borderBoxSize:i==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(a&&l.value){const d=ln(n);if(d){const m=a.getComputedStyle(d);r.value=parseFloat(m.width),c.value=parseFloat(m.height)}}else if(p){const d=Array.isArray(p)?p:[p];r.value=d.reduce((m,{inlineSize:f})=>m+f,0),c.value=d.reduce((m,{blockSize:f})=>m+f,0)}else r.value=u.contentRect.width,c.value=u.contentRect.height},o),be(()=>ln(n),u=>{r.value=u?s.width:0,c.value=u?s.height:0}),{width:r,height:c}}function Nv(n,s,o={}){const{root:a,rootMargin:i="0px",threshold:l=.1,window:r=en,immediate:c=!0}=o,u=Uo(()=>r&&"IntersectionObserver"in r),p=K(()=>{const _=Ge(n);return(Array.isArray(_)?_:[_]).map(ln).filter(R0)});let d=hs;const m=J(c),f=u.value?be(()=>[p.value,ln(a),m.value],([_,w])=>{if(d(),!m.value||!_.length)return;const y=new IntersectionObserver(s,{root:ln(w),rootMargin:i,threshold:l});_.forEach(I=>I&&y.observe(I)),d=()=>{y.disconnect(),d=hs}},{immediate:c,flush:"post"}):hs,h=()=>{d(),f(),m.value=!1};return rt(h),{isSupported:u,isActive:m,pause(){d(),m.value=!1},resume(){m.value=!0},stop:h}}const Xc=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Fv(n,s={}){const{document:o=em,autoExit:a=!1}=s,i=K(()=>{var I;return(I=ln(n))!=null?I:o==null?void 0:o.querySelector("html")}),l=J(!1),r=K(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(I=>o&&I in o||i.value&&I in i.value)),c=K(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(I=>o&&I in o||i.value&&I in i.value)),u=K(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(I=>o&&I in o||i.value&&I in i.value)),p=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(I=>o&&I in o),d=Uo(()=>i.value&&o&&r.value!==void 0&&c.value!==void 0&&u.value!==void 0),m=()=>p?(o==null?void 0:o[p])===i.value:!1,f=()=>{if(u.value){if(o&&o[u.value]!=null)return o[u.value];{const I=i.value;if((I==null?void 0:I[u.value])!=null)return!!I[u.value]}}return!1};async function h(){if(d.value){if(c.value)if((o==null?void 0:o[c.value])!=null)await o[c.value]();else{const I=i.value;(I==null?void 0:I[c.value])!=null&&await I[c.value]()}l.value=!1}}async function _(){if(!d.value)return;f()&&await h();const I=i.value;r.value&&(I==null?void 0:I[r.value])!=null&&(await I[r.value](),l.value=!0)}async function w(){await(l.value?h():_())}const y=()=>{const I=f();(!I||I&&m())&&(l.value=I)};return Ie(o,Xc,y,!1),Ie(()=>ln(i),Xc,y,!1),a&&rt(h),{isSupported:d,isFullscreen:l,enter:_,exit:h,toggle:w}}function Qn(n,s,o={}){const{window:a=en}=o;return Iv(n,s,a==null?void 0:a.localStorage,o)}const jv={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Kv(n={}){const{reactive:s=!1,target:o=en,aliasMap:a=jv,passive:i=!0,onEventFired:l=hs}=n,r=Be(new Set),c={toJSON(){return{}},current:r},u=s?Be(c):c,p=new Set,d=new Set;function m(w,y){w in u&&(s?u[w]=y:u[w].value=y)}function f(){r.clear();for(const w of d)m(w,!1)}function h(w,y){var I,$;const k=(I=w.key)==null?void 0:I.toLowerCase(),T=[($=w.code)==null?void 0:$.toLowerCase(),k].filter(Boolean);k&&(y?r.add(k):r.delete(k));for(const N of T)d.add(N),m(N,y);k==="meta"&&!y?(p.forEach(N=>{r.delete(N),m(N,!1)}),p.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&y&&[...r,...T].forEach(N=>p.add(N))}Ie(o,"keydown",w=>(h(w,!0),l(w)),{passive:i}),Ie(o,"keyup",w=>(h(w,!1),l(w)),{passive:i}),Ie("blur",f,{passive:!0}),Ie("focus",f,{passive:!0});const _=new Proxy(u,{get(w,y,I){if(typeof y!="string")return Reflect.get(w,y,I);if(y=y.toLowerCase(),y in a&&(y=a[y]),!(y in u))if(/[+_-]/.test(y)){const k=y.split(/[+_-]/g).map(M=>M.trim());u[y]=K(()=>k.every(M=>Ge(_[M])))}else u[y]=J(!1);const $=Reflect.get(w,y,I);return s?Ge($):$}});return _}const Hv={page:n=>[n.pageX,n.pageY],client:n=>[n.clientX,n.clientY],screen:n=>[n.screenX,n.screenY],movement:n=>n instanceof Touch?null:[n.movementX,n.movementY]};function MN(n={}){const{type:s="page",touch:o=!0,resetOnTouchEnds:a=!1,initialValue:i={x:0,y:0},window:l=en,target:r=l,eventFilter:c}=n,u=J(i.x),p=J(i.y),d=J(null),m=typeof s=="function"?s:Hv[s],f=I=>{const $=m(I);$&&([u.value,p.value]=$,d.value="mouse")},h=I=>{if(I.touches.length>0){const $=m(I.touches[0]);$&&([u.value,p.value]=$,d.value="touch")}},_=()=>{u.value=i.x,p.value=i.y},w=c?I=>c(()=>f(I),{}):I=>f(I),y=c?I=>c(()=>h(I),{}):I=>h(I);return r&&(Ie(r,"mousemove",w,{passive:!0}),Ie(r,"dragover",w,{passive:!0}),o&&s!=="movement"&&(Ie(r,"touchstart",y,{passive:!0}),Ie(r,"touchmove",y,{passive:!0}),a&&Ie(r,"touchend",_,{passive:!0}))),{x:u,y:p,sourceType:d}}function Wv(n,s={}){const o=Yd(n),{threshold:a=50,onSwipe:i,onSwipeEnd:l,onSwipeStart:r}=s,c=Be({x:0,y:0}),u=(N,B)=>{c.x=N,c.y=B},p=Be({x:0,y:0}),d=(N,B)=>{p.x=N,p.y=B},m=K(()=>c.x-p.x),f=K(()=>c.y-p.y),{max:h,abs:_}=Math,w=K(()=>h(_(m.value),_(f.value))>=a),y=J(!1),I=J(!1),$=K(()=>w.value?_(m.value)>_(f.value)?m.value>0?"left":"right":f.value>0?"up":"down":"none"),k=N=>{var B,j,U;const le=N.buttons===0,me=N.buttons===1;return(U=(j=(B=s.pointerTypes)==null?void 0:B.includes(N.pointerType))!=null?j:le||me)!=null?U:!0},M=[Ie(n,"pointerdown",N=>{var B,j;if(!k(N))return;I.value=!0,(j=(B=o.value)==null?void 0:B.style)==null||j.setProperty("touch-action","none");const U=N.target;U==null||U.setPointerCapture(N.pointerId);const{clientX:le,clientY:me}=N;u(le,me),d(le,me),r==null||r(N)}),Ie(n,"pointermove",N=>{if(!k(N)||!I.value)return;const{clientX:B,clientY:j}=N;d(B,j),!y.value&&w.value&&(y.value=!0),y.value&&(i==null||i(N))}),Ie(n,"pointerup",N=>{var B,j;k(N)&&(y.value&&(l==null||l(N,$.value)),I.value=!1,y.value=!1,(j=(B=o.value)==null?void 0:B.style)==null||j.setProperty("touch-action","initial"))})],T=()=>M.forEach(N=>N());return{isSwiping:Un(y),direction:Un($),posStart:Un(c),posEnd:Un(p),distanceX:m,distanceY:f,stop:T}}let Bv=0;function zN(n,s={}){const o=J(!1),{document:a=em,immediate:i=!0,manual:l=!1,id:r=`vueuse_styletag_${++Bv}`}=s,c=J(n);let u=()=>{};const p=()=>{if(!a)return;const m=a.getElementById(r)||a.createElement("style");m.isConnected||(m.type="text/css",m.id=r,s.media&&(m.media=s.media),a.head.appendChild(m)),!o.value&&(u=be(c,f=>{m.textContent=f},{immediate:!0}),o.value=!0)},d=()=>{!a||!o.value||(u(),a.head.removeChild(a.getElementById(r)),o.value=!1)};return i&&!l&&Qd(p),l||rt(d),{id:r,css:c,unload:d,load:p,isLoaded:Un(o)}}var qv=Object.defineProperty,eu=Object.getOwnPropertySymbols,Vv=Object.prototype.hasOwnProperty,Uv=Object.prototype.propertyIsEnumerable,nu=(n,s,o)=>s in n?qv(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,Gv=(n,s)=>{for(var o in s||(s={}))Vv.call(s,o)&&nu(n,o,s[o]);if(eu)for(var o of eu(s))Uv.call(s,o)&&nu(n,o,s[o]);return n};function ON(n={}){const{controls:s=!1,offset:o=0,immediate:a=!0,interval:i="requestAnimationFrame",callback:l}=n,r=J(xl()+o),c=()=>r.value=xl()+o,u=l?()=>{c(),l(r.value)}:c,p=i==="requestAnimationFrame"?pv(u,{immediate:a}):V0(u,i,{immediate:a});return s?Gv({timestamp:r},p):r}function Ze(n,s,o,a={}){var i,l,r;const{clone:c=!1,passive:u=!1,eventName:p,deep:d=!1,defaultValue:m,shouldEmit:f}=a,h=In(),_=o||(h==null?void 0:h.emit)||((i=h==null?void 0:h.$emit)==null?void 0:i.bind(h))||((r=(l=h==null?void 0:h.proxy)==null?void 0:l.$emit)==null?void 0:r.bind(h==null?void 0:h.proxy));let w=p;s||(s="modelValue"),w=p||w||`update:${s.toString()}`;const y=k=>c?typeof c=="function"?c(k):hv(k):k,I=()=>S0(n[s])?y(n[s]):m,$=k=>{f?f(k)&&_(w,k):_(w,k)};if(u){const k=I(),M=J(k);return be(()=>n[s],T=>M.value=y(T)),be(M,T=>{(T!==n[s]||d)&&$(T)},{deep:d}),M}else return K({get(){return I()},set(k){$(k)}})}function PN({window:n=en}={}){if(!n)return J(!1);const s=J(n.document.hasFocus());return Ie(n,"blur",()=>{s.value=!1}),Ie(n,"focus",()=>{s.value=!0}),s}function Yv(n={}){const{window:s=en,initialWidth:o=1/0,initialHeight:a=1/0,listenOrientation:i=!0,includeScrollbar:l=!0}=n,r=J(o),c=J(a),u=()=>{s&&(l?(r.value=s.innerWidth,c.value=s.innerHeight):(r.value=s.document.documentElement.clientWidth,c.value=s.document.documentElement.clientHeight))};if(u(),Qd(u),Ie("resize",u,{passive:!0}),i){const p=ss("(orientation: portrait)");be(p,()=>u())}return{width:r,height:c}}function Qv(){return nm().__VUE_DEVTOOLS_GLOBAL_HOOK__}function nm(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Zv=typeof Proxy=="function",Jv="devtools-plugin:setup",Xv="plugin:settings:set";let Ls,wl;function eb(){var n;return Ls!==void 0||(typeof window<"u"&&window.performance?(Ls=!0,wl=window.performance):typeof global<"u"&&(!((n=global.perf_hooks)===null||n===void 0)&&n.performance)?(Ls=!0,wl=global.perf_hooks.performance):Ls=!1),Ls}function nb(){return eb()?wl.now():Date.now()}class tb{constructor(s,o){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=s,this.hook=o;const a={};if(s.settings)for(const r in s.settings){const c=s.settings[r];a[r]=c.defaultValue}const i=`__vue-devtools-plugin-settings__${s.id}`;let l=Object.assign({},a);try{const r=localStorage.getItem(i),c=JSON.parse(r);Object.assign(l,c)}catch{}this.fallbacks={getSettings(){return l},setSettings(r){try{localStorage.setItem(i,JSON.stringify(r))}catch{}l=r},now(){return nb()}},o&&o.on(Xv,(r,c)=>{r===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(r,c)=>this.target?this.target.on[c]:(...u)=>{this.onQueue.push({method:c,args:u})}}),this.proxiedTarget=new Proxy({},{get:(r,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...u)=>(this.targetQueue.push({method:c,args:u,resolve:()=>{}}),this.fallbacks[c](...u)):(...u)=>new Promise(p=>{this.targetQueue.push({method:c,args:u,resolve:p})})})}async setRealTarget(s){this.target=s;for(const o of this.onQueue)this.target.on[o.method](...o.args);for(const o of this.targetQueue)o.resolve(await this.target[o.method](...o.args))}}function sb(n,s){const o=n,a=nm(),i=Qv(),l=Zv&&o.enableEarlyProxy;if(i&&(a.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))i.emit(Jv,n,s);else{const r=l?new tb(o,i):null;(a.__VUE_DEVTOOLS_PLUGINS__=a.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:o,setupFn:s,proxy:r}),r&&s(r.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ht=typeof window<"u";function ob(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function Ti(n,s){const o={};for(const a in s){const i=s[a];o[a]=An(i)?i.map(n):n(i)}return o}const _o=()=>{},An=Array.isArray;function Se(n){const s=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+n].concat(s))}const ab=/\/$/,ib=n=>n.replace(ab,"");function Ai(n,s,o="/"){let a,i={},l="",r="";const c=s.indexOf("#");let u=s.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(a=s.slice(0,u),l=s.slice(u+1,c>-1?c:s.length),i=n(l)),c>-1&&(a=a||s.slice(0,c),r=s.slice(c,s.length)),a=cb(a??s,o),{fullPath:a+(l&&"?")+l+r,path:a,query:i,hash:r}}function lb(n,s){const o=s.query?n(s.query):"";return s.path+(o&&"?")+o+(s.hash||"")}function tu(n,s){return!s||!n.toLowerCase().startsWith(s.toLowerCase())?n:n.slice(s.length)||"/"}function su(n,s,o){const a=s.matched.length-1,i=o.matched.length-1;return a>-1&&a===i&&Ht(s.matched[a],o.matched[i])&&tm(s.params,o.params)&&n(s.query)===n(o.query)&&s.hash===o.hash}function Ht(n,s){return(n.aliasOf||n)===(s.aliasOf||s)}function tm(n,s){if(Object.keys(n).length!==Object.keys(s).length)return!1;for(const o in n)if(!rb(n[o],s[o]))return!1;return!0}function rb(n,s){return An(n)?ou(n,s):An(s)?ou(s,n):n===s}function ou(n,s){return An(s)?n.length===s.length&&n.every((o,a)=>o===s[a]):n.length===1&&n[0]===s}function cb(n,s){if(n.startsWith("/"))return n;if(!s.startsWith("/"))return Se(`Cannot resolve a relative location without an absolute path. Trying to resolve "${n}" from "${s}". It should look like "/${s}".`),n;if(!n)return s;const o=s.split("/"),a=n.split("/"),i=a[a.length-1];(i===".."||i===".")&&a.push("");let l=o.length-1,r,c;for(r=0;r<a.length;r++)if(c=a[r],c!==".")if(c==="..")l>1&&l--;else break;return o.slice(0,l).join("/")+"/"+a.slice(r-(r===a.length?1:0)).join("/")}var To;(function(n){n.pop="pop",n.push="push"})(To||(To={}));var go;(function(n){n.back="back",n.forward="forward",n.unknown=""})(go||(go={}));function ub(n){if(!n)if(ht){const s=document.querySelector("base");n=s&&s.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ib(n)}const pb=/^[^#]+#/;function db(n,s){return n.replace(pb,"#")+s}function mb(n,s){const o=document.documentElement.getBoundingClientRect(),a=n.getBoundingClientRect();return{behavior:s.behavior,left:a.left-o.left-(s.left||0),top:a.top-o.top-(s.top||0)}}const di=()=>({left:window.pageXOffset,top:window.pageYOffset});function fb(n){let s;if("el"in n){const o=n.el,a=typeof o=="string"&&o.startsWith("#");if(typeof n.el=="string"&&(!a||!document.getElementById(n.el.slice(1))))try{const l=document.querySelector(n.el);if(a&&l){Se(`The selector "${n.el}" should be passed as "el: document.querySelector('${n.el}')" because it starts with "#".`);return}}catch{Se(`The selector "${n.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const i=typeof o=="string"?a?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!i){Se(`Couldn't find element using selector "${n.el}" returned by scrollBehavior.`);return}s=mb(i,n)}else s=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.pageXOffset,s.top!=null?s.top:window.pageYOffset)}function au(n,s){return(history.state?history.state.position-s:-1)+n}const yl=new Map;function hb(n,s){yl.set(n,s)}function _b(n){const s=yl.get(n);return yl.delete(n),s}let gb=()=>location.protocol+"//"+location.host;function sm(n,s){const{pathname:o,search:a,hash:i}=s,l=n.indexOf("#");if(l>-1){let c=i.includes(n.slice(l))?n.slice(l).length:1,u=i.slice(c);return u[0]!=="/"&&(u="/"+u),tu(u,"")}return tu(o,n)+a+i}function vb(n,s,o,a){let i=[],l=[],r=null;const c=({state:f})=>{const h=sm(n,location),_=o.value,w=s.value;let y=0;if(f){if(o.value=h,s.value=f,r&&r===_){r=null;return}y=w?f.position-w.position:0}else a(h);i.forEach(I=>{I(o.value,_,{delta:y,type:To.pop,direction:y?y>0?go.forward:go.back:go.unknown})})};function u(){r=o.value}function p(f){i.push(f);const h=()=>{const _=i.indexOf(f);_>-1&&i.splice(_,1)};return l.push(h),h}function d(){const{history:f}=window;f.state&&f.replaceState(Oe({},f.state,{scroll:di()}),"")}function m(){for(const f of l)f();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:p,destroy:m}}function iu(n,s,o,a=!1,i=!1){return{back:n,current:s,forward:o,replaced:a,position:window.history.length,scroll:i?di():null}}function bb(n){const{history:s,location:o}=window,a={value:sm(n,o)},i={value:s.state};i.value||l(a.value,{back:null,current:a.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function l(u,p,d){const m=n.indexOf("#"),f=m>-1?(o.host&&document.querySelector("base")?n:n.slice(m))+u:gb()+n+u;try{s[d?"replaceState":"pushState"](p,"",f),i.value=p}catch(h){Se("Error with push/replace State",h),o[d?"replace":"assign"](f)}}function r(u,p){const d=Oe({},s.state,iu(i.value.back,u,i.value.forward,!0),p,{position:i.value.position});l(u,d,!0),a.value=u}function c(u,p){const d=Oe({},i.value,s.state,{forward:u,scroll:di()});s.state||Se(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(d.current,d,!0);const m=Oe({},iu(a.value,u,null),{position:d.position+1},p);l(u,m,!1),a.value=u}return{location:a,state:i,push:c,replace:r}}function kb(n){n=ub(n);const s=bb(n),o=vb(n,s.state,s.location,s.replace);function a(l,r=!0){r||o.pauseListeners(),history.go(l)}const i=Oe({location:"",base:n,go:a,createHref:db.bind(null,n)},s,o);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>s.state.value}),i}function xb(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),!n.endsWith("#/")&&!n.endsWith("#")&&Se(`A hash base must end with a "#":
"${n}" should be "${n.replace(/#.*$/,"#")}".`),kb(n)}function wb(n){return typeof n=="string"||n&&typeof n=="object"}function om(n){return typeof n=="string"||typeof n=="symbol"}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},am=Symbol("navigation failure");var lu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(lu||(lu={}));const yb={[1]({location:n,currentLocation:s}){return`No match for
 ${JSON.stringify(n)}${s?`
while being at
`+JSON.stringify(s):""}`},[2]({from:n,to:s}){return`Redirected from "${n.fullPath}" to "${$b(s)}" via a navigation guard.`},[4]({from:n,to:s}){return`Navigation aborted from "${n.fullPath}" to "${s.fullPath}" via a navigation guard.`},[8]({from:n,to:s}){return`Navigation cancelled from "${n.fullPath}" to "${s.fullPath}" with a new navigation.`},[16]({from:n,to:s}){return`Avoided redundant navigation to current location: "${n.fullPath}".`}};function Ds(n,s){return Oe(new Error(yb[n](s)),{type:n,[am]:!0},s)}function ut(n,s){return n instanceof Error&&am in n&&(s==null||!!(n.type&s))}const Ib=["params","query","hash"];function $b(n){if(typeof n=="string")return n;if("path"in n)return n.path;const s={};for(const o of Ib)o in n&&(s[o]=n[o]);return JSON.stringify(s,null,2)}const ru="[^/]+?",Lb={sensitive:!1,strict:!1,start:!0,end:!0},Cb=/[.+*?^${}()[\]/\\]/g;function Eb(n,s){const o=Oe({},Lb,s),a=[];let i=o.start?"^":"";const l=[];for(const p of n){const d=p.length?[]:[90];o.strict&&!p.length&&(i+="/");for(let m=0;m<p.length;m++){const f=p[m];let h=40+(o.sensitive?.25:0);if(f.type===0)m||(i+="/"),i+=f.value.replace(Cb,"\\$&"),h+=40;else if(f.type===1){const{value:_,repeatable:w,optional:y,regexp:I}=f;l.push({name:_,repeatable:w,optional:y});const $=I||ru;if($!==ru){h+=10;try{new RegExp(`(${$})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${_}" (${$}): `+M.message)}}let k=w?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;m||(k=y&&p.length<2?`(?:/${k})`:"/"+k),y&&(k+="?"),i+=k,h+=20,y&&(h+=-8),w&&(h+=-20),$===".*"&&(h+=-50)}d.push(h)}a.push(d)}if(o.strict&&o.end){const p=a.length-1;a[p][a[p].length-1]+=.7000000000000001}o.strict||(i+="/?"),o.end?i+="$":o.strict&&(i+="(?:/|$)");const r=new RegExp(i,o.sensitive?"":"i");function c(p){const d=p.match(r),m={};if(!d)return null;for(let f=1;f<d.length;f++){const h=d[f]||"",_=l[f-1];m[_.name]=h&&_.repeatable?h.split("/"):h}return m}function u(p){let d="",m=!1;for(const f of n){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const h of f)if(h.type===0)d+=h.value;else if(h.type===1){const{value:_,repeatable:w,optional:y}=h,I=_ in p?p[_]:"";if(An(I)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const $=An(I)?I.join("/"):I;if(!$)if(y)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${_}"`);d+=$}}return d||"/"}return{re:r,score:a,keys:l,parse:c,stringify:u}}function Sb(n,s){let o=0;for(;o<n.length&&o<s.length;){const a=s[o]-n[o];if(a)return a;o++}return n.length<s.length?n.length===1&&n[0]===40+40?-1:1:n.length>s.length?s.length===1&&s[0]===40+40?1:-1:0}function Rb(n,s){let o=0;const a=n.score,i=s.score;for(;o<a.length&&o<i.length;){const l=Sb(a[o],i[o]);if(l)return l;o++}if(Math.abs(i.length-a.length)===1){if(cu(a))return 1;if(cu(i))return-1}return i.length-a.length}function cu(n){const s=n[n.length-1];return n.length>0&&s[s.length-1]<0}const Tb={type:0,value:""},Ab=/[a-zA-Z0-9_]/;function Mb(n){if(!n)return[[]];if(n==="/")return[[Tb]];if(!n.startsWith("/"))throw new Error(`Route paths should start with a "/": "${n}" should be "/${n}".`);function s(h){throw new Error(`ERR (${o})/"${p}": ${h}`)}let o=0,a=o;const i=[];let l;function r(){l&&i.push(l),l=[]}let c=0,u,p="",d="";function m(){p&&(o===0?l.push({type:0,value:p}):o===1||o===2||o===3?(l.length>1&&(u==="*"||u==="+")&&s(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):s("Invalid state to consume buffer"),p="")}function f(){p+=u}for(;c<n.length;){if(u=n[c++],u==="\\"&&o!==2){a=o,o=4;continue}switch(o){case 0:u==="/"?(p&&m(),r()):u===":"?(m(),o=1):f();break;case 4:f(),o=a;break;case 1:u==="("?o=2:Ab.test(u)?f():(m(),o=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:o=3:d+=u;break;case 3:m(),o=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:s("Unknown state");break}}return o===2&&s(`Unfinished custom RegExp for param "${p}"`),m(),r(),i}function zb(n,s,o){const a=Eb(Mb(n.path),o);{const l=new Set;for(const r of a.keys)l.has(r.name)&&Se(`Found duplicated params with name "${r.name}" for path "${n.path}". Only the last one will be available on "$route.params".`),l.add(r.name)}const i=Oe(a,{record:n,parent:s,children:[],alias:[]});return s&&!i.record.aliasOf==!s.record.aliasOf&&s.children.push(i),i}function Ob(n,s){const o=[],a=new Map;s=du({strict:!1,end:!0,sensitive:!1},s);function i(d){return a.get(d)}function l(d,m,f){const h=!f,_=Pb(d);jb(_,m),_.aliasOf=f&&f.record;const w=du(s,d),y=[_];if("alias"in d){const k=typeof d.alias=="string"?[d.alias]:d.alias;for(const M of k)y.push(Oe({},_,{components:f?f.record.components:_.components,path:M,aliasOf:f?f.record:_}))}let I,$;for(const k of y){const{path:M}=k;if(m&&M[0]!=="/"){const T=m.record.path,N=T[T.length-1]==="/"?"":"/";k.path=m.record.path+(M&&N+M)}if(k.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(I=zb(k,m,w),m&&M[0]==="/"&&Kb(I,m),f?(f.alias.push(I),Fb(f,I)):($=$||I,$!==I&&$.alias.push(I),h&&d.name&&!pu(I)&&r(d.name)),_.children){const T=_.children;for(let N=0;N<T.length;N++)l(T[N],I,f&&f.children[N])}f=f||I,(I.record.components&&Object.keys(I.record.components).length||I.record.name||I.record.redirect)&&u(I)}return $?()=>{r($)}:_o}function r(d){if(om(d)){const m=a.get(d);m&&(a.delete(d),o.splice(o.indexOf(m),1),m.children.forEach(r),m.alias.forEach(r))}else{const m=o.indexOf(d);m>-1&&(o.splice(m,1),d.record.name&&a.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function c(){return o}function u(d){let m=0;for(;m<o.length&&Rb(d,o[m])>=0&&(d.record.path!==o[m].record.path||!im(d,o[m]));)m++;o.splice(m,0,d),d.record.name&&!pu(d)&&a.set(d.record.name,d)}function p(d,m){let f,h={},_,w;if("name"in d&&d.name){if(f=a.get(d.name),!f)throw Ds(1,{location:d});{const $=Object.keys(d.params||{}).filter(k=>!f.keys.find(M=>M.name===k));$.length&&Se(`Discarded invalid param(s) "${$.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}w=f.record.name,h=Oe(uu(m.params,f.keys.filter($=>!$.optional).map($=>$.name)),d.params&&uu(d.params,f.keys.map($=>$.name))),_=f.stringify(h)}else if("path"in d)_=d.path,_.startsWith("/")||Se(`The Matcher cannot resolve relative paths but received "${_}". Unless you directly called \`matcher.resolve("${_}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=o.find($=>$.re.test(_)),f&&(h=f.parse(_),w=f.record.name);else{if(f=m.name?a.get(m.name):o.find($=>$.re.test(m.path)),!f)throw Ds(1,{location:d,currentLocation:m});w=f.record.name,h=Oe({},m.params,d.params),_=f.stringify(h)}const y=[];let I=f;for(;I;)y.unshift(I.record),I=I.parent;return{name:w,path:_,params:h,matched:y,meta:Nb(y)}}return n.forEach(d=>l(d)),{addRoute:l,resolve:p,removeRoute:r,getRoutes:c,getRecordMatcher:i}}function uu(n,s){const o={};for(const a of s)a in n&&(o[a]=n[a]);return o}function Pb(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Db(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Db(n){const s={},o=n.props||!1;if("component"in n)s.default=o;else for(const a in n.components)s[a]=typeof o=="boolean"?o:o[a];return s}function pu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Nb(n){return n.reduce((s,o)=>Oe(s,o.meta),{})}function du(n,s){const o={};for(const a in n)o[a]=a in s?s[a]:n[a];return o}function Il(n,s){return n.name===s.name&&n.optional===s.optional&&n.repeatable===s.repeatable}function Fb(n,s){for(const o of n.keys)if(!o.optional&&!s.keys.find(Il.bind(null,o)))return Se(`Alias "${s.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${o.name}"`);for(const o of s.keys)if(!o.optional&&!n.keys.find(Il.bind(null,o)))return Se(`Alias "${s.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${o.name}"`)}function jb(n,s){s&&s.record.name&&!n.name&&!n.path&&Se(`The route named "${String(s.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Kb(n,s){for(const o of s.keys)if(!n.keys.find(Il.bind(null,o)))return Se(`Absolute path "${n.record.path}" must have the exact same param named "${o.name}" as its parent "${s.record.path}".`)}function im(n,s){return s.children.some(o=>o===n||im(n,o))}const lm=/#/g,Hb=/&/g,Wb=/\//g,Bb=/=/g,qb=/\?/g,rm=/\+/g,Vb=/%5B/g,Ub=/%5D/g,cm=/%5E/g,Gb=/%60/g,um=/%7B/g,Yb=/%7C/g,pm=/%7D/g,Qb=/%20/g;function Ir(n){return encodeURI(""+n).replace(Yb,"|").replace(Vb,"[").replace(Ub,"]")}function Zb(n){return Ir(n).replace(um,"{").replace(pm,"}").replace(cm,"^")}function $l(n){return Ir(n).replace(rm,"%2B").replace(Qb,"+").replace(lm,"%23").replace(Hb,"%26").replace(Gb,"`").replace(um,"{").replace(pm,"}").replace(cm,"^")}function Jb(n){return $l(n).replace(Bb,"%3D")}function Xb(n){return Ir(n).replace(lm,"%23").replace(qb,"%3F")}function ek(n){return n==null?"":Xb(n).replace(Wb,"%2F")}function Ao(n){try{return decodeURIComponent(""+n)}catch{Se(`Error decoding "${n}". Using original value`)}return""+n}function nk(n){const s={};if(n===""||n==="?")return s;const a=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<a.length;++i){const l=a[i].replace(rm," "),r=l.indexOf("="),c=Ao(r<0?l:l.slice(0,r)),u=r<0?null:Ao(l.slice(r+1));if(c in s){let p=s[c];An(p)||(p=s[c]=[p]),p.push(u)}else s[c]=u}return s}function mu(n){let s="";for(let o in n){const a=n[o];if(o=Jb(o),a==null){a!==void 0&&(s+=(s.length?"&":"")+o);continue}(An(a)?a.map(l=>l&&$l(l)):[a&&$l(a)]).forEach(l=>{l!==void 0&&(s+=(s.length?"&":"")+o,l!=null&&(s+="="+l))})}return s}function tk(n){const s={};for(const o in n){const a=n[o];a!==void 0&&(s[o]=An(a)?a.map(i=>i==null?null:""+i):a==null?a:""+a)}return s}const sk=Symbol("router view location matched"),fu=Symbol("router view depth"),$r=Symbol("router"),dm=Symbol("route location"),Ll=Symbol("router view location");function Zs(){let n=[];function s(a){return n.push(a),()=>{const i=n.indexOf(a);i>-1&&n.splice(i,1)}}function o(){n=[]}return{add:s,list:()=>n,reset:o}}function Et(n,s,o,a,i){const l=a&&(a.enterCallbacks[i]=a.enterCallbacks[i]||[]);return()=>new Promise((r,c)=>{const u=m=>{m===!1?c(Ds(4,{from:o,to:s})):m instanceof Error?c(m):wb(m)?c(Ds(2,{from:s,to:m})):(l&&a.enterCallbacks[i]===l&&typeof m=="function"&&l.push(m),r())},p=n.call(a&&a.instances[i],s,o,ok(u,s,o));let d=Promise.resolve(p);if(n.length<3&&(d=d.then(u)),n.length>2){const m=`The "next" callback was never called inside of ${n.name?'"'+n.name+'"':""}:
${n.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)d=d.then(f=>u._called?f:(Se(m),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!u._called){Se(m),c(new Error("Invalid navigation guard"));return}}d.catch(m=>c(m))})}function ok(n,s,o){let a=0;return function(){a++===1&&Se(`The "next" callback was called more than once in one navigation guard when going from "${o.fullPath}" to "${s.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),n._called=!0,a===1&&n.apply(null,arguments)}}function Mi(n,s,o,a){const i=[];for(const l of n){!l.components&&!l.children.length&&Se(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const r in l.components){let c=l.components[r];{if(!c||typeof c!="object"&&typeof c!="function")throw Se(`Component "${r}" in record with path "${l.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){Se(`Component "${r}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=c;c=()=>u}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,Se(`Component "${r}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(s!=="beforeRouteEnter"&&!l.instances[r]))if(ak(c)){const p=(c.__vccOpts||c)[s];p&&i.push(Et(p,o,a,l,r))}else{let u=c();"catch"in u||(Se(`Component "${r}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),i.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${l.path}"`));const d=ob(p)?p.default:p;l.components[r]=d;const f=(d.__vccOpts||d)[s];return f&&Et(f,o,a,l,r)()}))}}}return i}function ak(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function hu(n){const s=L($r),o=L(dm),a=K(()=>s.resolve(z(n.to))),i=K(()=>{const{matched:u}=a.value,{length:p}=u,d=u[p-1],m=o.matched;if(!d||!m.length)return-1;const f=m.findIndex(Ht.bind(null,d));if(f>-1)return f;const h=_u(u[p-2]);return p>1&&_u(d)===h&&m[m.length-1].path!==h?m.findIndex(Ht.bind(null,u[p-2])):f}),l=K(()=>i.value>-1&&ck(o.params,a.value.params)),r=K(()=>i.value>-1&&i.value===o.matched.length-1&&tm(o.params,a.value.params));function c(u={}){return rk(u)?s[z(n.replace)?"replace":"push"](z(n.to)).catch(_o):Promise.resolve()}if(ht){const u=In();if(u){const p={route:a.value,isActive:l.value,isExactActive:r.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(p),xs(()=>{p.route=a.value,p.isActive=l.value,p.isExactActive=r.value},{flush:"post"})}}return{route:a,href:K(()=>a.value.href),isActive:l,isExactActive:r,navigate:c}}const ik=Me({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hu,setup(n,{slots:s}){const o=Be(hu(n)),{options:a}=L($r),i=K(()=>({[gu(n.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,[gu(n.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const l=s.default&&s.default(o);return n.custom?l:yn("a",{"aria-current":o.isExactActive?n.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:i.value},l)}}}),lk=ik;function rk(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const s=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return n.preventDefault&&n.preventDefault(),!0}}function ck(n,s){for(const o in s){const a=s[o],i=n[o];if(typeof a=="string"){if(a!==i)return!1}else if(!An(i)||i.length!==a.length||a.some((l,r)=>l!==i[r]))return!1}return!0}function _u(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const gu=(n,s,o)=>n??s??o,uk=Me({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:s,slots:o}){dk();const a=L(Ll),i=K(()=>n.route||a.value),l=L(fu,0),r=K(()=>{let p=z(l);const{matched:d}=i.value;let m;for(;(m=d[p])&&!m.components;)p++;return p}),c=K(()=>i.value.matched[r.value]);En(fu,K(()=>r.value+1)),En(sk,c),En(Ll,i);const u=J();return be(()=>[u.value,c.value,n.name],([p,d,m],[f,h,_])=>{d&&(d.instances[m]=p,h&&h!==d&&p&&p===f&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),p&&d&&(!h||!Ht(d,h)||!f)&&(d.enterCallbacks[m]||[]).forEach(w=>w(p))},{flush:"post"}),()=>{const p=i.value,d=n.name,m=c.value,f=m&&m.components[d];if(!f)return vu(o.default,{Component:f,route:p});const h=m.props[d],_=h?h===!0?p.params:typeof h=="function"?h(p):h:null,y=yn(f,Oe({},_,s,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(m.instances[d]=null)},ref:u}));if(ht&&y.ref){const I={depth:r.value,name:m.name,path:m.path,meta:m.meta};(An(y.ref)?y.ref.map(k=>k.i):[y.ref.i]).forEach(k=>{k.__vrv_devtools=I})}return vu(o.default,{Component:y,route:p})||y}}});function vu(n,s){if(!n)return null;const o=n(s);return o.length===1?o[0]:o}const pk=uk;function dk(){const n=In(),s=n.parent&&n.parent.type.name,o=n.parent&&n.parent.subTree&&n.parent.subTree.type;if(s&&(s==="KeepAlive"||s.includes("Transition"))&&typeof o=="object"&&o.name==="RouterView"){const a=s==="KeepAlive"?"keep-alive":"transition";Se(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${a}>
    <component :is="Component" />
  </${a}>
</router-view>`)}}function Js(n,s){const o=Oe({},n,{matched:n.matched.map(a=>xk(a,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:n.fullPath,tooltip:s,value:o}}}function pa(n){return{_custom:{display:n}}}let mk=0;function fk(n,s,o){if(s.__hasDevtools)return;s.__hasDevtools=!0;const a=mk++;sb({id:"org.vuejs.router"+(a?"."+a:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:n},i=>{typeof i.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),i.on.inspectComponent((d,m)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Js(s.currentRoute.value,"Current Route")})}),i.on.visitComponentTree(({treeNode:d,componentInstance:m})=>{if(m.__vrv_devtools){const f=m.__vrv_devtools;d.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:mm})}An(m.__vrl_devtools)&&(m.__devtoolsApi=i,m.__vrl_devtools.forEach(f=>{let h=_m,_="";f.isExactActive?(h=hm,_="This is exactly active"):f.isActive&&(h=fm,_="This link is active"),d.tags.push({label:f.route.path,textColor:0,tooltip:_,backgroundColor:h})}))}),be(s.currentRoute,()=>{u(),i.notifyComponentUpdate(),i.sendInspectorTree(c),i.sendInspectorState(c)});const l="router:navigations:"+a;i.addTimelineLayer({id:l,label:`Router${a?" "+a:""} Navigations`,color:4237508}),s.onError((d,m)=>{i.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:m.fullPath,logType:"error",time:i.now(),data:{error:d},groupId:m.meta.__navigationId}})});let r=0;s.beforeEach((d,m)=>{const f={guard:pa("beforeEach"),from:Js(m,"Current Location during this navigation"),to:Js(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:r++}),i.addTimelineEvent({layerId:l,event:{time:i.now(),title:"Start of navigation",subtitle:d.fullPath,data:f,groupId:d.meta.__navigationId}})}),s.afterEach((d,m,f)=>{const h={guard:pa("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=pa("❌")):h.status=pa("✅"),h.from=Js(m,"Current Location during this navigation"),h.to=Js(d,"Target location"),i.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:d.fullPath,time:i.now(),data:h,logType:f?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+a;i.addInspector({id:c,label:"Routes"+(a?" "+a:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!p)return;const d=p;let m=o.getRoutes().filter(f=>!f.parent);m.forEach(bm),d.filter&&(m=m.filter(f=>Cl(f,d.filter.toLowerCase()))),m.forEach(f=>vm(f,s.currentRoute.value)),d.rootNodes=m.map(gm)}let p;i.on.getInspectorTree(d=>{p=d,d.app===n&&d.inspectorId===c&&u()}),i.on.getInspectorState(d=>{if(d.app===n&&d.inspectorId===c){const f=o.getRoutes().find(h=>h.record.__vd_id===d.nodeId);f&&(d.state={options:_k(f)})}}),i.sendInspectorTree(c),i.sendInspectorState(c)})}function hk(n){return n.optional?n.repeatable?"*":"?":n.repeatable?"+":""}function _k(n){const{record:s}=n,o=[{editable:!1,key:"path",value:s.path}];return s.name!=null&&o.push({editable:!1,key:"name",value:s.name}),o.push({editable:!1,key:"regexp",value:n.re}),n.keys.length&&o.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:n.keys.map(a=>`${a.name}${hk(a)}`).join(" "),tooltip:"Param keys",value:n.keys}}}),s.redirect!=null&&o.push({editable:!1,key:"redirect",value:s.redirect}),n.alias.length&&o.push({editable:!1,key:"aliases",value:n.alias.map(a=>a.record.path)}),Object.keys(n.record.meta).length&&o.push({editable:!1,key:"meta",value:n.record.meta}),o.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:n.score.map(a=>a.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:n.score}}}),o}const mm=15485081,fm=2450411,hm=8702998,gk=2282478,_m=16486972,vk=6710886;function gm(n){const s=[],{record:o}=n;o.name!=null&&s.push({label:String(o.name),textColor:0,backgroundColor:gk}),o.aliasOf&&s.push({label:"alias",textColor:0,backgroundColor:_m}),n.__vd_match&&s.push({label:"matches",textColor:0,backgroundColor:mm}),n.__vd_exactActive&&s.push({label:"exact",textColor:0,backgroundColor:hm}),n.__vd_active&&s.push({label:"active",textColor:0,backgroundColor:fm}),o.redirect&&s.push({label:typeof o.redirect=="string"?`redirect: ${o.redirect}`:"redirects",textColor:16777215,backgroundColor:vk});let a=o.__vd_id;return a==null&&(a=String(bk++),o.__vd_id=a),{id:a,label:o.path,tags:s,children:n.children.map(gm)}}let bk=0;const kk=/^\/(.*)\/([a-z]*)$/;function vm(n,s){const o=s.matched.length&&Ht(s.matched[s.matched.length-1],n.record);n.__vd_exactActive=n.__vd_active=o,o||(n.__vd_active=s.matched.some(a=>Ht(a,n.record))),n.children.forEach(a=>vm(a,s))}function bm(n){n.__vd_match=!1,n.children.forEach(bm)}function Cl(n,s){const o=String(n.re).match(kk);if(n.__vd_match=!1,!o||o.length<3)return!1;if(new RegExp(o[1].replace(/\$$/,""),o[2]).test(s))return n.children.forEach(r=>Cl(r,s)),n.record.path!=="/"||s==="/"?(n.__vd_match=n.re.test(s),!0):!1;const i=n.record.path.toLowerCase(),l=Ao(i);return!s.startsWith("/")&&(l.includes(s)||i.includes(s))||l.startsWith(s)||i.startsWith(s)||n.record.name&&String(n.record.name).includes(s)?!0:n.children.some(r=>Cl(r,s))}function xk(n,s){const o={};for(const a in n)s.includes(a)||(o[a]=n[a]);return o}function wk(n){const s=Ob(n.routes,n),o=n.parseQuery||nk,a=n.stringifyQuery||mu,i=n.history;if(!i)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=Zs(),r=Zs(),c=Zs(),u=it(It);let p=It;ht&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ti.bind(null,F=>""+F),m=Ti.bind(null,ek),f=Ti.bind(null,Ao);function h(F,ne){let se,ae;return om(F)?(se=s.getRecordMatcher(F),ae=ne):ae=F,s.addRoute(ae,se)}function _(F){const ne=s.getRecordMatcher(F);ne?s.removeRoute(ne):Se(`Cannot remove non-existent route "${String(F)}"`)}function w(){return s.getRoutes().map(F=>F.record)}function y(F){return!!s.getRecordMatcher(F)}function I(F,ne){if(ne=Oe({},ne||u.value),typeof F=="string"){const x=Ai(o,F,ne.path),A=s.resolve({path:x.path},ne),W=i.createHref(x.fullPath);return W.startsWith("//")?Se(`Location "${F}" resolved to "${W}". A resolved location cannot start with multiple slashes.`):A.matched.length||Se(`No match found for location with path "${F}"`),Oe(x,A,{params:f(A.params),hash:Ao(x.hash),redirectedFrom:void 0,href:W})}let se;if("path"in F)"params"in F&&!("name"in F)&&Object.keys(F.params).length&&Se(`Path "${F.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),se=Oe({},F,{path:Ai(o,F.path,ne.path).path});else{const x=Oe({},F.params);for(const A in x)x[A]==null&&delete x[A];se=Oe({},F,{params:m(x)}),ne.params=m(ne.params)}const ae=s.resolve(se,ne),$e=F.hash||"";$e&&!$e.startsWith("#")&&Se(`A \`hash\` should always start with the character "#". Replace "${$e}" with "#${$e}".`),ae.params=d(f(ae.params));const Ne=lb(a,Oe({},F,{hash:Zb($e),path:ae.path})),g=i.createHref(Ne);return g.startsWith("//")?Se(`Location "${F}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):ae.matched.length||Se(`No match found for location with path "${"path"in F?F.path:F}"`),Oe({fullPath:Ne,hash:$e,query:a===mu?tk(F.query):F.query||{}},ae,{redirectedFrom:void 0,href:g})}function $(F){return typeof F=="string"?Ai(o,F,u.value.path):Oe({},F)}function k(F,ne){if(p!==F)return Ds(8,{from:ne,to:F})}function M(F){return B(F)}function T(F){return M(Oe($(F),{replace:!0}))}function N(F){const ne=F.matched[F.matched.length-1];if(ne&&ne.redirect){const{redirect:se}=ne;let ae=typeof se=="function"?se(F):se;if(typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=$(ae):{path:ae},ae.params={}),!("path"in ae)&&!("name"in ae))throw Se(`Invalid redirect found:
${JSON.stringify(ae,null,2)}
 when navigating to "${F.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Oe({query:F.query,hash:F.hash,params:"path"in ae?{}:F.params},ae)}}function B(F,ne){const se=p=I(F),ae=u.value,$e=F.state,Ne=F.force,g=F.replace===!0,x=N(se);if(x)return B(Oe($(x),{state:typeof x=="object"?Oe({},$e,x.state):$e,force:Ne,replace:g}),ne||se);const A=se;A.redirectedFrom=ne;let W;return!Ne&&su(a,ae,se)&&(W=Ds(16,{to:A,from:ae}),Mn(ae,ae,!0,!1)),(W?Promise.resolve(W):le(A,ae)).catch(H=>ut(H)?ut(H,2)?H:Pe(H):pe(H,A,ae)).then(H=>{if(H){if(ut(H,2))return su(a,I(H.to),A)&&ne&&(ne._count=ne._count?ne._count+1:1)>30?(Se(`Detected a possibly infinite redirection in a navigation guard when going from "${ae.fullPath}" to "${A.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):B(Oe({replace:g},$(H.to),{state:typeof H.to=="object"?Oe({},$e,H.to.state):$e,force:Ne}),ne||A)}else H=X(A,ae,!0,g,$e);return me(A,ae,H),H})}function j(F,ne){const se=k(F,ne);return se?Promise.reject(se):Promise.resolve()}function U(F){const ne=Zn.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(F):F()}function le(F,ne){let se;const[ae,$e,Ne]=yk(F,ne);se=Mi(ae.reverse(),"beforeRouteLeave",F,ne);for(const x of ae)x.leaveGuards.forEach(A=>{se.push(Et(A,F,ne))});const g=j.bind(null,F,ne);return se.push(g),zn(se).then(()=>{se=[];for(const x of l.list())se.push(Et(x,F,ne));return se.push(g),zn(se)}).then(()=>{se=Mi($e,"beforeRouteUpdate",F,ne);for(const x of $e)x.updateGuards.forEach(A=>{se.push(Et(A,F,ne))});return se.push(g),zn(se)}).then(()=>{se=[];for(const x of F.matched)if(x.beforeEnter&&!ne.matched.includes(x))if(An(x.beforeEnter))for(const A of x.beforeEnter)se.push(Et(A,F,ne));else se.push(Et(x.beforeEnter,F,ne));return se.push(g),zn(se)}).then(()=>(F.matched.forEach(x=>x.enterCallbacks={}),se=Mi(Ne,"beforeRouteEnter",F,ne),se.push(g),zn(se))).then(()=>{se=[];for(const x of r.list())se.push(Et(x,F,ne));return se.push(g),zn(se)}).catch(x=>ut(x,8)?x:Promise.reject(x))}function me(F,ne,se){for(const ae of c.list())U(()=>ae(F,ne,se))}function X(F,ne,se,ae,$e){const Ne=k(F,ne);if(Ne)return Ne;const g=ne===It,x=ht?history.state:{};se&&(ae||g?i.replace(F.fullPath,Oe({scroll:g&&x&&x.scroll},$e)):i.push(F.fullPath,$e)),u.value=F,Mn(F,ne,se,g),Pe()}let ve;function ke(){ve||(ve=i.listen((F,ne,se)=>{if(!qt.listening)return;const ae=I(F),$e=N(ae);if($e){B(Oe($e,{replace:!0}),ae).catch(_o);return}p=ae;const Ne=u.value;ht&&hb(au(Ne.fullPath,se.delta),di()),le(ae,Ne).catch(g=>ut(g,12)?g:ut(g,2)?(B(g.to,ae).then(x=>{ut(x,20)&&!se.delta&&se.type===To.pop&&i.go(-1,!1)}).catch(_o),Promise.reject()):(se.delta&&i.go(-se.delta,!1),pe(g,ae,Ne))).then(g=>{g=g||X(ae,Ne,!1),g&&(se.delta&&!ut(g,8)?i.go(-se.delta,!1):se.type===To.pop&&ut(g,20)&&i.go(-1,!1)),me(ae,Ne,g)}).catch(_o)}))}let ye=Zs(),De=Zs(),oe;function pe(F,ne,se){Pe(F);const ae=De.list();return ae.length?ae.forEach($e=>$e(F,ne,se)):(Se("uncaught error during route navigation:"),console.error(F)),Promise.reject(F)}function Le(){return oe&&u.value!==It?Promise.resolve():new Promise((F,ne)=>{ye.add([F,ne])})}function Pe(F){return oe||(oe=!F,ke(),ye.list().forEach(([ne,se])=>F?se(F):ne()),ye.reset()),F}function Mn(F,ne,se,ae){const{scrollBehavior:$e}=n;if(!ht||!$e)return Promise.resolve();const Ne=!se&&_b(au(F.fullPath,0))||(ae||!se)&&history.state&&history.state.scroll||null;return an().then(()=>$e(F,ne,Ne)).then(g=>g&&fb(g)).catch(g=>pe(g,F,ne))}const sn=F=>i.go(F);let gn;const Zn=new Set,qt={currentRoute:u,listening:!0,addRoute:h,removeRoute:_,hasRoute:y,getRoutes:w,resolve:I,options:n,push:M,replace:T,go:sn,back:()=>sn(-1),forward:()=>sn(1),beforeEach:l.add,beforeResolve:r.add,afterEach:c.add,onError:De.add,isReady:Le,install(F){const ne=this;F.component("RouterLink",lk),F.component("RouterView",pk),F.config.globalProperties.$router=ne,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>z(u)}),ht&&!gn&&u.value===It&&(gn=!0,M(i.location).catch($e=>{Se("Unexpected error when starting the router:",$e)}));const se={};for(const $e in It)se[$e]=K(()=>u.value[$e]);F.provide($r,ne),F.provide(dm,Be(se)),F.provide(Ll,u);const ae=F.unmount;Zn.add(F),F.unmount=function(){Zn.delete(F),Zn.size<1&&(p=It,ve&&ve(),ve=null,u.value=It,gn=!1,oe=!1),ae()},ht&&fk(F,ne,s)}};function zn(F){return F.reduce((ne,se)=>ne.then(()=>U(se)),Promise.resolve())}return qt}function yk(n,s){const o=[],a=[],i=[],l=Math.max(s.matched.length,n.matched.length);for(let r=0;r<l;r++){const c=s.matched[r];c&&(n.matched.find(p=>Ht(p,c))?a.push(c):o.push(c));const u=n.matched[r];u&&(s.matched.find(p=>Ht(p,u))||i.push(u))}return[o,a,i]}const zi=J(!1),vo=J(!1),Rs=J(!1),Ik=J(!0),El=mv({xs:460,...dv}),_s=Yv(),km=Kv(),$k=K(()=>_s.height.value-_s.width.value/Mt>180),xm=Fv(Yn?document.body:null),Pt=cv(),Lk=K(()=>{var n,s;return["INPUT","TEXTAREA"].includes(((n=Pt.value)==null?void 0:n.tagName)||"")||((s=Pt.value)==null?void 0:s.classList.contains("CodeMirror-code"))}),Ck=K(()=>{var n;return["BUTTON","A"].includes(((n=Pt.value)==null?void 0:n.tagName)||"")});Qn("slidev-camera","default");Qn("slidev-mic","default");const ka=Qn("slidev-scale",0),dn=Qn("slidev-show-overview",!1),Oi=Qn("slidev-presenter-cursor",!0),bu=Qn("slidev-show-editor",!1);Qn("slidev-editor-width",Yn?window.innerWidth*.4:100);const wm=Zd(dn);function ku(n,s,o,a=i=>i){return n*a(.5-s*(.5-o))}function Ek(n){return[-n[0],-n[1]]}function qn(n,s){return[n[0]+s[0],n[1]+s[1]]}function Dn(n,s){return[n[0]-s[0],n[1]-s[1]]}function Bn(n,s){return[n[0]*s,n[1]*s]}function Sk(n,s){return[n[0]/s,n[1]/s]}function Xs(n){return[n[1],-n[0]]}function xu(n,s){return n[0]*s[0]+n[1]*s[1]}function Rk(n,s){return n[0]===s[0]&&n[1]===s[1]}function Tk(n){return Math.hypot(n[0],n[1])}function Ak(n){return n[0]*n[0]+n[1]*n[1]}function wu(n,s){return Ak(Dn(n,s))}function ym(n){return Sk(n,Tk(n))}function Mk(n,s){return Math.hypot(n[1]-s[1],n[0]-s[0])}function eo(n,s,o){let a=Math.sin(o),i=Math.cos(o),l=n[0]-s[0],r=n[1]-s[1],c=l*i-r*a,u=l*a+r*i;return[c+s[0],u+s[1]]}function Sl(n,s,o){return qn(n,Bn(Dn(s,n),o))}function yu(n,s,o){return qn(n,Bn(s,o))}var{min:Cs,PI:zk}=Math,Iu=.275,no=zk+1e-4;function Ok(n,s={}){let{size:o=16,smoothing:a=.5,thinning:i=.5,simulatePressure:l=!0,easing:r=oe=>oe,start:c={},end:u={},last:p=!1}=s,{cap:d=!0,easing:m=oe=>oe*(2-oe)}=c,{cap:f=!0,easing:h=oe=>--oe*oe*oe+1}=u;if(n.length===0||o<=0)return[];let _=n[n.length-1].runningLength,w=c.taper===!1?0:c.taper===!0?Math.max(o,_):c.taper,y=u.taper===!1?0:u.taper===!0?Math.max(o,_):u.taper,I=Math.pow(o*a,2),$=[],k=[],M=n.slice(0,10).reduce((oe,pe)=>{let Le=pe.pressure;if(l){let Pe=Cs(1,pe.distance/o),Mn=Cs(1,1-Pe);Le=Cs(1,oe+(Mn-oe)*(Pe*Iu))}return(oe+Le)/2},n[0].pressure),T=ku(o,i,n[n.length-1].pressure,r),N,B=n[0].vector,j=n[0].point,U=j,le=j,me=U,X=!1;for(let oe=0;oe<n.length;oe++){let{pressure:pe}=n[oe],{point:Le,vector:Pe,distance:Mn,runningLength:sn}=n[oe];if(oe<n.length-1&&_-sn<3)continue;if(i){if(l){let ae=Cs(1,Mn/o),$e=Cs(1,1-ae);pe=Cs(1,M+($e-M)*(ae*Iu))}T=ku(o,i,pe,r)}else T=o/2;N===void 0&&(N=T);let gn=sn<w?m(sn/w):1,Zn=_-sn<y?h((_-sn)/y):1;T=Math.max(.01,T*Math.min(gn,Zn));let qt=(oe<n.length-1?n[oe+1]:n[oe]).vector,zn=oe<n.length-1?xu(Pe,qt):1,F=xu(Pe,B)<0&&!X,ne=zn!==null&&zn<0;if(F||ne){let ae=Bn(Xs(B),T);for(let $e=1/13,Ne=0;Ne<=1;Ne+=$e)le=eo(Dn(Le,ae),Le,no*Ne),$.push(le),me=eo(qn(Le,ae),Le,no*-Ne),k.push(me);j=le,U=me,ne&&(X=!0);continue}if(X=!1,oe===n.length-1){let ae=Bn(Xs(Pe),T);$.push(Dn(Le,ae)),k.push(qn(Le,ae));continue}let se=Bn(Xs(Sl(qt,Pe,zn)),T);le=Dn(Le,se),(oe<=1||wu(j,le)>I)&&($.push(le),j=le),me=qn(Le,se),(oe<=1||wu(U,me)>I)&&(k.push(me),U=me),M=pe,B=Pe}let ve=n[0].point.slice(0,2),ke=n.length>1?n[n.length-1].point.slice(0,2):qn(n[0].point,[1,1]),ye=[],De=[];if(n.length===1){if(!(w||y)||p){let oe=yu(ve,ym(Xs(Dn(ve,ke))),-(N||T)),pe=[];for(let Le=1/13,Pe=Le;Pe<=1;Pe+=Le)pe.push(eo(oe,ve,no*2*Pe));return pe}}else{if(!(w||y&&n.length===1))if(d)for(let pe=1/13,Le=pe;Le<=1;Le+=pe){let Pe=eo(k[0],ve,no*Le);ye.push(Pe)}else{let pe=Dn($[0],k[0]),Le=Bn(pe,.5),Pe=Bn(pe,.51);ye.push(Dn(ve,Le),Dn(ve,Pe),qn(ve,Pe),qn(ve,Le))}let oe=Xs(Ek(n[n.length-1].vector));if(y||w&&n.length===1)De.push(ke);else if(f){let pe=yu(ke,oe,T);for(let Le=1/29,Pe=Le;Pe<1;Pe+=Le)De.push(eo(pe,ke,no*3*Pe))}else De.push(qn(ke,Bn(oe,T)),qn(ke,Bn(oe,T*.99)),Dn(ke,Bn(oe,T*.99)),Dn(ke,Bn(oe,T)))}return $.concat(De,k.reverse(),ye)}function Pk(n,s={}){var o;let{streamline:a=.5,size:i=16,last:l=!1}=s;if(n.length===0)return[];let r=.15+(1-a)*.85,c=Array.isArray(n[0])?n:n.map(({x:h,y:_,pressure:w=.5})=>[h,_,w]);if(c.length===2){let h=c[1];c=c.slice(0,-1);for(let _=1;_<5;_++)c.push(Sl(c[0],h,_/4))}c.length===1&&(c=[...c,[...qn(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,m=u[0],f=c.length-1;for(let h=1;h<c.length;h++){let _=l&&h===f?c[h].slice(0,2):Sl(m.point,c[h],r);if(Rk(m.point,_))continue;let w=Mk(_,m.point);if(d+=w,h<f&&!p){if(d<i)continue;p=!0}m={point:_,pressure:c[h][2]>=0?c[h][2]:.5,vector:ym(Dn(m.point,_)),distance:w,runningLength:d},u.push(m)}return u[0].vector=((o=u[1])==null?void 0:o.vector)||[0,0],u}function Dk(n,s={}){return Ok(Pk(n,s),s)}var Nk=()=>({events:{},emit(n,...s){let o=this.events[n]||[];for(let a=0,i=o.length;a<i;a++)o[a](...s)},on(n,s){var o;return(o=this.events[n])!=null&&o.push(s)||(this.events[n]=[s]),()=>{var a;this.events[n]=(a=this.events[n])==null?void 0:a.filter(i=>s!==i)}}});function Wa(n,s){return n-s}function Fk(n){return n<0?-1:1}function Ba(n){return[Math.abs(n),Fk(n)]}function Im(){const n=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${n()+n()}-${n()}-${n()}-${n()}-${n()}${n()}${n()}`}var jk=2,_t=jk,Ks=class{constructor(n){this.drauu=n,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(n){}onUnselected(){}onStart(n){}onMove(n){return!1}onEnd(n){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(n){var s;const o=this.drauu.el,a=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const i=this.drauu.el.getBoundingClientRect();return{x:(n.pageX-i.left)*a,y:(n.pageY-i.top)*a,pressure:n.pressure}}else{const i=this.drauu.svgPoint;i.x=n.clientX,i.y=n.clientY;const l=i.matrixTransform((s=o.getScreenCTM())==null?void 0:s.inverse());return{x:l.x*a,y:l.y*a,pressure:n.pressure}}}createElement(n,s){const o=document.createElementNS("http://www.w3.org/2000/svg",n),a=s?{...this.brush,...s}:this.brush;return o.setAttribute("fill",a.fill??"transparent"),o.setAttribute("stroke",a.color),o.setAttribute("stroke-width",a.size.toString()),o.setAttribute("stroke-linecap","round"),a.dasharray&&o.setAttribute("stroke-dasharray",a.dasharray),o}attr(n,s){this.el.setAttribute(n,typeof s=="string"?s:s.toFixed(_t))}_setEvent(n){this.event=n,this.point=this.getMousePosition(n)}_eventDown(n){return this._setEvent(n),this.start=this.point,this.onStart(this.point)}_eventMove(n){return this._setEvent(n),this.onMove(this.point)}_eventUp(n){return this._setEvent(n),this.onEnd(this.point)}},Kk=class extends Ks{constructor(){super(...arguments),this.points=[]}onStart(n){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[n],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&this.points.push(n),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!!n}getSvgData(n){const s=Dk(n,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!s.length)return"";const o=s.reduce((a,[i,l],r,c)=>{const[u,p]=c[(r+1)%c.length];return a.push(i,l,(i+u)/2,(l+p)/2),a},["M",...s[0],"Q"]);return o.push("Z"),o.map(a=>typeof a=="number"?a.toFixed(2):a).join(" ")}},Hk=class extends Ks{onStart(n){return this.el=this.createElement("ellipse"),this.attr("cx",n.x),this.attr("cy",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[s,o]=Ba(n.x-this.start.x),[a,i]=Ba(n.y-this.start.y);if(this.shiftPressed){const l=Math.min(s,a);s=l,a=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",s),this.attr("ry",a);else{const[l,r]=[this.start.x,this.start.x+s*o].sort(Wa),[c,u]=[this.start.y,this.start.y+a*i].sort(Wa);this.attr("cx",(l+r)/2),this.attr("cy",(c+u)/2),this.attr("rx",(r-l)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function $m(n,s){const o=document.createElementNS("http://www.w3.org/2000/svg","defs"),a=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",s),a.setAttribute("id",n),a.setAttribute("viewBox","0 -5 10 10"),a.setAttribute("refX","5"),a.setAttribute("refY","0"),a.setAttribute("markerWidth","4"),a.setAttribute("markerHeight","4"),a.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),a.appendChild(i),o.appendChild(a),o}var Wk=class extends Ks{onStart(n){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",n.x),this.attr("y1",n.y),this.attr("x2",n.x),this.attr("y2",n.y),this.brush.arrowEnd){const s=Im(),o=document.createElementNS("http://www.w3.org/2000/svg","g");return o.append($m(s,this.brush.color)),o.append(this.el),this.attr("marker-end",`url(#${s})`),o}return this.el}onMove(n){if(!this.el)return!1;let{x:s,y:o}=n;if(this.shiftPressed){const a=n.x-this.start.x,i=n.y-this.start.y;if(i!==0){let l=a/i;l=Math.round(l),Math.abs(l)<=1?(s=this.start.x+i*l,o=this.start.y+i):(s=this.start.x+a,o=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-s),this.attr("y1",this.start.y*2-o),this.attr("x2",s),this.attr("y2",o)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",s),this.attr("y2",o)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||n.getTotalLength()<5)}},Bk=class extends Ks{onStart(n){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",n.x),this.attr("y",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[s,o]=Ba(n.x-this.start.x),[a,i]=Ba(n.y-this.start.y);if(this.shiftPressed){const l=Math.min(s,a);s=l,a=l}if(this.altPressed)this.attr("x",this.start.x-s),this.attr("y",this.start.y-a),this.attr("width",s*2),this.attr("height",a*2);else{const[l,r]=[this.start.x,this.start.x+s*o].sort(Wa),[c,u]=[this.start.y,this.start.y+a*i].sort(Wa);this.attr("x",l),this.attr("y",c),this.attr("width",r-l),this.attr("height",u-c)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function qk(n,s){const o=n.x-s.x,a=n.y-s.y;return o*o+a*a}function Vk(n,s,o){let a=s.x,i=s.y,l=o.x-a,r=o.y-i;if(l!==0||r!==0){const c=((n.x-a)*l+(n.y-i)*r)/(l*l+r*r);c>1?(a=o.x,i=o.y):c>0&&(a+=l*c,i+=r*c)}return l=n.x-a,r=n.y-i,l*l+r*r}function Uk(n,s){let o=n[0];const a=[o];let i;for(let l=1,r=n.length;l<r;l++)i=n[l],qk(i,o)>s&&(a.push(i),o=i);return o!==i&&i&&a.push(i),a}function Rl(n,s,o,a,i){let l=a,r=0;for(let c=s+1;c<o;c++){const u=Vk(n[c],n[s],n[o]);u>l&&(r=c,l=u)}l>a&&(r-s>1&&Rl(n,s,r,a,i),i.push(n[r]),o-r>1&&Rl(n,r,o,a,i))}function Gk(n,s){const o=n.length-1,a=[n[0]];return Rl(n,0,o,s,a),a.push(n[o]),a}function $u(n,s,o=!1){if(n.length<=2)return n;const a=s!==void 0?s*s:1;return n=o?n:Uk(n,a),n=Gk(n,a),n}var Yk=class extends Ks{constructor(){super(...arguments),this.points=[],this.count=0}onStart(n){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[n],this.brush.arrowEnd){this.arrowId=Im();const s=$m(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&(this.points.push(n),this.count+=1),this.count>5&&(this.points=$u(this.points,1,!0),this.count=0),this.attr("d",Cu(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||(n.setAttribute("d",Cu($u(this.points,1,!0))),!n.getTotalLength()))}};function Qk(n,s){const o=s.x-n.x,a=s.y-n.y;return{length:Math.sqrt(o**2+a**2),angle:Math.atan2(a,o)}}function Lu(n,s,o,a){const i=s||n,l=o||n,r=.2,c=Qk(i,l),u=c.angle+(a?Math.PI:0),p=c.length*r,d=n.x+Math.cos(u)*p,m=n.y+Math.sin(u)*p;return{x:d,y:m}}function Zk(n,s,o){const a=Lu(o[s-1],o[s-2],n),i=Lu(n,o[s-1],o[s+1],!0);return`C ${a.x.toFixed(_t)},${a.y.toFixed(_t)} ${i.x.toFixed(_t)},${i.y.toFixed(_t)} ${n.x.toFixed(_t)},${n.y.toFixed(_t)}`}function Cu(n){return n.reduce((s,o,a,i)=>a===0?`M ${o.x.toFixed(_t)},${o.y.toFixed(_t)}`:`${s} ${Zk(o,a,i)}`,"")}var Jk=class extends Ks{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(n){const s=(o,a)=>{if(o&&o.length)for(let i=0;i<o.length;i++){const l=o[i];if(l.getTotalLength){const r=l.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=l.getPointAtLength(r*c/this.pathSubFactor),p=l.getPointAtLength(r*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:a||l})}}else l.children&&s(l.children,l)}};n&&s(n.children)}onUnselected(){this.pathFragments=[]}onStart(n){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=n.x,this.svgPointPrevious.y=n.y}onMove(n){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=n.x,this.svgPointCurrent.y=n.y;const s=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,s}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const n=[];if(this.pathFragments.length)for(let s=0;s<this.pathFragments.length;s++){const o=this.pathFragments[s],a={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(o,a)&&(o.element.remove(),n.push(s))}return n.length&&(this.pathFragments=this.pathFragments.filter((s,o)=>!n.includes(o))),n.length>0}lineLineIntersect(n,s){const o=n.x1,a=n.x2,i=s.x1,l=s.x2,r=n.y1,c=n.y2,u=s.y1,p=s.y2,d=(o-a)*(u-p)-(r-c)*(i-l),m=(o*c-r*a)*(i-l)-(o-a)*(i*p-u*l),f=(o*c-r*a)*(u-p)-(r-c)*(i*p-u*l),h=(_,w,y)=>_>=w&&_<=y?!0:_>=y&&_<=w;if(d===0)return!1;{const _={x:m/d,y:f/d};return h(_.x,o,a)&&h(_.y,r,c)&&h(_.x,i,l)&&h(_.y,u,p)}}};function Xk(n){return{draw:new Yk(n),stylus:new Kk(n),line:new Wk(n),rectangle:new Bk(n),ellipse:new Hk(n),eraseLine:new Jk(n)}}var ex=class{constructor(n={}){this.options=n,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Nk(),this._models=Xk(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),n.el&&this.mount(n.el,n.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(n){this._models[this.mode].onUnselected(),this.options.brush.mode=n,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(n){this.options.brush=n}resolveSelector(n){return typeof n=="string"?document.querySelector(n):n||null}mount(n,s){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(n),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const o=this.resolveSelector(s)||this.el,a=this.eventStart.bind(this),i=this.eventMove.bind(this),l=this.eventEnd.bind(this),r=this.eventKeyboard.bind(this);o.addEventListener("pointerdown",a,{passive:!1}),window.addEventListener("pointermove",i,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",r,!1),window.addEventListener("keyup",r,!1),this._disposables.push(()=>{o.removeEventListener("pointerdown",a),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",r,!1),window.removeEventListener("keyup",r,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(n=>n()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(n,s){return this._emitter.on(n,s)}undo(){const n=this.el;return n.lastElementChild?(this._undoStack.push(n.lastElementChild.cloneNode(!0)),n.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var n;return!!((n=this.el)!=null&&n.lastElementChild)}eventMove(n){!this.acceptsInput(n)||!this.drawing||this.model._eventMove(n)&&(n.stopPropagation(),n.preventDefault(),this._emitter.emit("changed"))}eventStart(n){this.acceptsInput(n)&&(n.stopPropagation(),n.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(n),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(n){if(!this.acceptsInput(n)||!this.drawing)return;const s=this.model._eventUp(n);s?(s instanceof Element&&s!==this._currentNode&&(this._currentNode=s),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(n){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(n.pointerType)}eventKeyboard(n){this.shiftPressed===n.shiftKey&&this.altPressed===n.altKey||(this.shiftPressed=n.shiftKey,this.altPressed=n.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const n=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",n)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(n){this.clear(),this.el.innerHTML=n}};function nx(n){return new ex(n)}const Tl=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],tt=Qn("slidev-drawing-enabled",!1),DN=Qn("slidev-drawing-pinned",!1),tx=J(!1),sx=J(!1),ox=J(!1),Mo=J(!1),ls=E0(Qn("slidev-drawing-brush",{color:Tl[0],size:4,mode:"stylus"})),Eu=J("stylus"),Lm=K(()=>Re.drawings.syncAll||bn.value);let zo=!1;const to=K({get(){return Eu.value},set(n){Eu.value=n,n==="arrow"?(ls.mode="line",ls.arrowEnd=!0):(ls.mode=n,ls.arrowEnd=!1)}}),ax=Be({brush:ls,acceptsInputTypes:K(()=>tt.value&&(!Re.drawings.presenterOnly||bn.value)?void 0:["pen"]),coordinateTransform:!1}),_n=ni(nx(ax));function ix(){_n.clear(),Lm.value&&Ud(Ve.value,"")}function Lr(){var n;sx.value=_n.canRedo(),tx.value=_n.canUndo(),ox.value=!!((n=_n.el)!=null&&n.children.length)}function lx(n){zo=!0;const s=Ka[n||Ve.value];s!=null?_n.load(s):_n.clear(),Lr(),zo=!1}_n.on("changed",()=>{if(Lr(),!zo){const n=_n.dump(),s=Ve.value;(Ka[s]||"")!==n&&Lm.value&&Ud(s,_n.dump())}});I0(n=>{zo=!0,n[Ve.value]!=null&&_n.load(n[Ve.value]||""),zo=!1,Lr()});an(()=>{be(Ve,()=>{_n.mounted&&lx()},{immediate:!0})});_n.on("start",()=>Mo.value=!0);_n.on("end",()=>Mo.value=!1);window.addEventListener("keydown",n=>{if(!tt.value)return;const s=!n.ctrlKey&&!n.altKey&&!n.shiftKey&&!n.metaKey;let o=!0;n.code==="KeyZ"&&(n.ctrlKey||n.metaKey)?n.shiftKey?_n.redo():_n.undo():n.code==="Escape"?tt.value=!1:n.code==="KeyL"&&s?to.value="line":n.code==="KeyA"&&s?to.value="arrow":n.code==="KeyS"&&s?to.value="stylus":n.code==="KeyR"&&s?to.value="rectangle":n.code==="KeyE"&&s?to.value="ellipse":n.code==="KeyC"&&s?ix():n.code.startsWith("Digit")&&s&&+n.code[5]<=Tl.length?ls.color=Tl[+n.code[5]-1]:o=!1,o&&(n.preventDefault(),n.stopPropagation())},!1);function Qe(...n){return K(()=>n.every(s=>Ge(s)))}function Ln(n){return K(()=>!Ge(n))}const Su=$v(),Pi=Qn("slidev-color-schema","auto"),Al=K(()=>Re.colorSchema!=="auto"),Cr=K({get(){return Al.value?Re.colorSchema==="dark":Pi.value==="auto"?Su.value:Pi.value==="dark"},set(n){Al.value||(Pi.value=n===Su.value?"auto":n?"dark":"light")}}),Cm=Zd(Cr);Yn&&be(Cr,n=>{const s=document.querySelector("html");s.classList.toggle("dark",n),s.classList.toggle("light",!n)},{immediate:!0});const xa=J(1),wa=K(()=>Ye.length-1),Rn=J(0),Er=J(0);function rx(){Rn.value>xa.value&&(Rn.value-=1)}function cx(){Rn.value<wa.value&&(Rn.value+=1)}function ux(){if(Rn.value>xa.value){let n=Rn.value-Er.value;n<xa.value&&(n=xa.value),Rn.value=n}}function px(){if(Rn.value<wa.value){let n=Rn.value+Er.value;n>wa.value&&(n=wa.value),Rn.value=n}}function dx(){const{escape:n,space:s,shift:o,left:a,right:i,up:l,down:r,enter:c,d:u,g:p,o:d}=km;let m=[{name:"next_space",key:Qe(s,Ln(o)),fn:Dt,autoRepeat:!0},{name:"prev_space",key:Qe(s,o),fn:Nt,autoRepeat:!0},{name:"next_right",key:Qe(i,Ln(o),Ln(dn)),fn:Dt,autoRepeat:!0},{name:"prev_left",key:Qe(a,Ln(o),Ln(dn)),fn:Nt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Dt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Nt,autoRepeat:!0},{name:"next_down",key:Qe(r,Ln(dn)),fn:Po,autoRepeat:!0},{name:"prev_up",key:Qe(l,Ln(dn)),fn:()=>Do(!1),autoRepeat:!0},{name:"next_shift",key:Qe(i,o),fn:Po,autoRepeat:!0},{name:"prev_shift",key:Qe(a,o),fn:()=>Do(!1),autoRepeat:!0},{name:"toggle_dark",key:Qe(u,Ln(tt)),fn:Cm},{name:"toggle_overview",key:Qe(d,Ln(tt)),fn:wm},{name:"hide_overview",key:Qe(n,Ln(tt)),fn:()=>dn.value=!1},{name:"goto",key:Qe(p,Ln(tt)),fn:()=>Rs.value=!Rs.value},{name:"next_overview",key:Qe(i,dn),fn:cx},{name:"prev_overview",key:Qe(a,dn),fn:rx},{name:"up_overview",key:Qe(l,dn),fn:ux},{name:"down_overview",key:Qe(r,dn),fn:px},{name:"goto_from_overview",key:Qe(c,dn),fn:()=>{Fs(Rn.value),dn.value=!1}}];const f=new Set(m.map(_=>_.name));if(m.filter(_=>_.name&&f.has(_.name)).length===0){const _=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(_),console.warn(_)}return m}const Em=Qe(Ln(Lk),Ln(Ck),Ik);function mx(n,s,o=!1){typeof n=="string"&&(n=km[n]);const a=Qe(n,Em);let i=0,l;const r=()=>{if(clearTimeout(l),!a.value){i=0;return}o&&(l=setTimeout(r,Math.max(1e3-i*250,150)),i++),s()};return be(a,r,{flush:"sync"})}function fx(n,s){return rv(n,o=>{Em.value&&(o.repeat||s())})}function hx(){const n=dx();new Map(n.map(o=>[o.key,o])).forEach(o=>{o.fn&&mx(o.key,o.fn,o.autoRepeat)}),fx("f",()=>xm.toggle())}const _x={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gx=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),vx=[gx];function bx(n,s){return b(),ie("svg",_x,vx)}const kx={name:"carbon-close",render:bx};function Sr(n,s=""){var i,l;const o=["slidev-page",s],a=(l=(i=n==null?void 0:n.meta)==null?void 0:i.slide)==null?void 0:l.no;return a!=null&&o.push(`slidev-page-${a}`),o.filter(Boolean).join(" ")}const xx=Me({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(n){const s=n;L(E);const o=J(),a=Dv(o),i=K(()=>s.width?s.width:a.width.value),l=K(()=>s.width?s.width/Mt:a.height.value);s.width&&xs(()=>{o.value&&(o.value.style.width=`${i.value}px`,o.value.style.height=`${l.value}px`)});const r=K(()=>i.value/l.value),c=K(()=>s.scale&&!Ns.value?s.scale:r.value<Mt?i.value/zt:l.value*Mt/zt),u=K(()=>({height:`${wr}px`,width:`${zt}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=K(()=>({"select-none":!Re.selectable,"slidev-code-line-numbers":Re.lineNumbers}));return En(Bd,c),(d,m)=>(b(),ie("div",{id:"slide-container",ref_key:"root",ref:o,class:qe(p.value)},[e("div",{id:"slide-content",style:tn(u.value)},[jn(d.$slots,"default")],4),jn(d.$slots,"controls")],2))}});const S=(n,s)=>{const o=n.__vccOpts||n;for(const[a,i]of s)o[a]=i;return o},Sm=S(xx,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Rr=Me({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(n,{emit:s}){const o=Ze(n,"clicks",s),a=Ze(n,"clicksElements",s),i=Ze(n,"clicksDisabled",s),l=Ze(n,"clicksOrderMap",s);a.value.length=0,En(c0,n.route),En(u0,n.context),En(fo,o),En(ho,i),En(ts,a),En(vl,l)},render(){var n,s;return this.$props.is?yn(this.$props.is):(s=(n=this.$slots)==null?void 0:n.default)==null?void 0:s.call(n)}}),wx=["innerHTML"],yx=Me({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(n){return L(E),(s,o)=>z(Ka)[s.page]?(b(),ie("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:z(Ka)[s.page]},null,8,wx)):we("v-if",!0)}}),Rm=S(yx,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Ix=Object.freeze(Object.defineProperty({__proto__:null,default:Rm},Symbol.toStringTag,{value:"Module"})),$x={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Lx=["onClick"],Di=4*16*2,Ru=2*16,Cx=Me({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(n,{emit:s}){const o=n;L(E);const a=Ze(o,"modelValue",s);function i(){a.value=!1}function l(m){Fs(m),i()}function r(m){return m===Rn.value}const c=El.smaller("xs"),u=El.smaller("sm"),p=K(()=>c.value?_s.width.value-Di:u.value?(_s.width.value-Di-Ru)/2:300),d=K(()=>Math.floor((_s.width.value-Di)/(p.value+Ru)));return xs(()=>{Rn.value=Ve.value,Er.value=d.value}),(m,f)=>{const h=kx;return b(),ie(Te,null,[td(e("div",$x,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:tn(`grid-template-columns: repeat(auto-fit,minmax(${p.value}px,1fr))`)},[(b(!0),ie(Te,null,js(z(Ye).slice(0,-1),(_,w)=>(b(),ie("div",{key:_.path,class:"relative"},[e("div",{class:qe(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":r(w+1),"border-gray-400":!r(w+1)}]),style:tn(z(yr)),onClick:y=>l(+_.path)},[(b(),C(Sm,{key:_.path,width:p.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:v(()=>[_!=null&&_.component?(b(),C(z(Rr),{key:0,is:_.component,"clicks-disabled":!0,class:qe(z(Sr)(_)),route:_,context:"overview"},null,8,["is","class","route"])):we("v-if",!0),R(Rm,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],14,Lx),e("div",{class:"absolute top-0 opacity-50",style:tn(`left: ${p.value+5}px`)},kn(w+1),5)]))),128))],4)],512),[[Md,z(a)]]),z(a)?(b(),ie("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:i},[R(h)])):we("v-if",!0)],64)}}});const Ex=S(Cx,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Sx="/3/linux_cli/assets/logo-b72bde5d.png",Rx={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Tx=Me({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(n,{emit:s}){const o=n;L(E);const a=Ze(o,"modelValue",s);function i(){a.value=!1}return(l,r)=>(b(),C(od,null,[z(a)?(b(),ie("div",Rx,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=c=>i())}),e("div",{class:qe(["m-auto rounded-md bg-main shadow",o.class]),"dark:border":"~ main"},[jn(l.$slots,"default")],2)])):we("v-if",!0)],1024))}}),Ax=S(Tx,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),Mx={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},zx=["innerHTML"],Ox=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Sx,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),t("dev ")])])],-1),Px=Me({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(n,{emit:s}){const o=n;L(E);const a=Ze(o,"modelValue",s),i=K(()=>typeof Re.info=="string");return(l,r)=>(b(),C(Ax,{modelValue:z(a),"onUpdate:modelValue":r[0]||(r[0]=c=>Ae(a)?a.value=c:null),class:"px-6 py-4"},{default:v(()=>[e("div",Mx,[i.value?(b(),ie("div",{key:0,class:"mb-4",innerHTML:z(Re).info},null,8,zx)):we("v-if",!0),Ox])]),_:1},8,["modelValue"]))}});const Dx=S(Px,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function bt(n){return Array.isArray?Array.isArray(n):Mm(n)==="[object Array]"}const Nx=1/0;function Fx(n){if(typeof n=="string")return n;let s=n+"";return s=="0"&&1/n==-Nx?"-0":s}function jx(n){return n==null?"":Fx(n)}function st(n){return typeof n=="string"}function Tm(n){return typeof n=="number"}function Kx(n){return n===!0||n===!1||Hx(n)&&Mm(n)=="[object Boolean]"}function Am(n){return typeof n=="object"}function Hx(n){return Am(n)&&n!==null}function Sn(n){return n!=null}function Ni(n){return!n.trim().length}function Mm(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}const Wx="Incorrect 'index' type",Bx=n=>`Invalid value for key ${n}`,qx=n=>`Pattern length exceeds max of ${n}.`,Vx=n=>`Missing ${n} property in key`,Ux=n=>`Property 'weight' in key '${n}' must be a positive integer`,Tu=Object.prototype.hasOwnProperty;class Gx{constructor(s){this._keys=[],this._keyMap={};let o=0;s.forEach(a=>{let i=zm(a);o+=i.weight,this._keys.push(i),this._keyMap[i.id]=i,o+=i.weight}),this._keys.forEach(a=>{a.weight/=o})}get(s){return this._keyMap[s]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function zm(n){let s=null,o=null,a=null,i=1,l=null;if(st(n)||bt(n))a=n,s=Au(n),o=Ml(n);else{if(!Tu.call(n,"name"))throw new Error(Vx("name"));const r=n.name;if(a=r,Tu.call(n,"weight")&&(i=n.weight,i<=0))throw new Error(Ux(r));s=Au(r),o=Ml(r),l=n.getFn}return{path:s,id:o,weight:i,src:a,getFn:l}}function Au(n){return bt(n)?n:n.split(".")}function Ml(n){return bt(n)?n.join("."):n}function Yx(n,s){let o=[],a=!1;const i=(l,r,c)=>{if(Sn(l))if(!r[c])o.push(l);else{let u=r[c];const p=l[u];if(!Sn(p))return;if(c===r.length-1&&(st(p)||Tm(p)||Kx(p)))o.push(jx(p));else if(bt(p)){a=!0;for(let d=0,m=p.length;d<m;d+=1)i(p[d],r,c+1)}else r.length&&i(p,r,c+1)}};return i(n,st(s)?s.split("."):s,0),a?o:o[0]}const Qx={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Zx={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(n,s)=>n.score===s.score?n.idx<s.idx?-1:1:n.score<s.score?-1:1},Jx={location:0,threshold:.6,distance:100},Xx={useExtendedSearch:!1,getFn:Yx,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var he={...Zx,...Qx,...Jx,...Xx};const e2=/[^ ]+/g;function n2(n=1,s=3){const o=new Map,a=Math.pow(10,s);return{get(i){const l=i.match(e2).length;if(o.has(l))return o.get(l);const r=1/Math.pow(l,.5*n),c=parseFloat(Math.round(r*a)/a);return o.set(l,c),c},clear(){o.clear()}}}class Tr{constructor({getFn:s=he.getFn,fieldNormWeight:o=he.fieldNormWeight}={}){this.norm=n2(o,3),this.getFn=s,this.isCreated=!1,this.setIndexRecords()}setSources(s=[]){this.docs=s}setIndexRecords(s=[]){this.records=s}setKeys(s=[]){this.keys=s,this._keysMap={},s.forEach((o,a)=>{this._keysMap[o.id]=a})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,st(this.docs[0])?this.docs.forEach((s,o)=>{this._addString(s,o)}):this.docs.forEach((s,o)=>{this._addObject(s,o)}),this.norm.clear())}add(s){const o=this.size();st(s)?this._addString(s,o):this._addObject(s,o)}removeAt(s){this.records.splice(s,1);for(let o=s,a=this.size();o<a;o+=1)this.records[o].i-=1}getValueForItemAtKeyId(s,o){return s[this._keysMap[o]]}size(){return this.records.length}_addString(s,o){if(!Sn(s)||Ni(s))return;let a={v:s,i:o,n:this.norm.get(s)};this.records.push(a)}_addObject(s,o){let a={i:o,$:{}};this.keys.forEach((i,l)=>{let r=i.getFn?i.getFn(s):this.getFn(s,i.path);if(Sn(r)){if(bt(r)){let c=[];const u=[{nestedArrIndex:-1,value:r}];for(;u.length;){const{nestedArrIndex:p,value:d}=u.pop();if(Sn(d))if(st(d)&&!Ni(d)){let m={v:d,i:p,n:this.norm.get(d)};c.push(m)}else bt(d)&&d.forEach((m,f)=>{u.push({nestedArrIndex:f,value:m})})}a.$[l]=c}else if(st(r)&&!Ni(r)){let c={v:r,n:this.norm.get(r)};a.$[l]=c}}}),this.records.push(a)}toJSON(){return{keys:this.keys,records:this.records}}}function Om(n,s,{getFn:o=he.getFn,fieldNormWeight:a=he.fieldNormWeight}={}){const i=new Tr({getFn:o,fieldNormWeight:a});return i.setKeys(n.map(zm)),i.setSources(s),i.create(),i}function t2(n,{getFn:s=he.getFn,fieldNormWeight:o=he.fieldNormWeight}={}){const{keys:a,records:i}=n,l=new Tr({getFn:s,fieldNormWeight:o});return l.setKeys(a),l.setIndexRecords(i),l}function da(n,{errors:s=0,currentLocation:o=0,expectedLocation:a=0,distance:i=he.distance,ignoreLocation:l=he.ignoreLocation}={}){const r=s/n.length;if(l)return r;const c=Math.abs(a-o);return i?r+c/i:c?1:r}function s2(n=[],s=he.minMatchCharLength){let o=[],a=-1,i=-1,l=0;for(let r=n.length;l<r;l+=1){let c=n[l];c&&a===-1?a=l:!c&&a!==-1&&(i=l-1,i-a+1>=s&&o.push([a,i]),a=-1)}return n[l-1]&&l-a>=s&&o.push([a,l-1]),o}const os=32;function o2(n,s,o,{location:a=he.location,distance:i=he.distance,threshold:l=he.threshold,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,includeMatches:u=he.includeMatches,ignoreLocation:p=he.ignoreLocation}={}){if(s.length>os)throw new Error(qx(os));const d=s.length,m=n.length,f=Math.max(0,Math.min(a,m));let h=l,_=f;const w=c>1||u,y=w?Array(m):[];let I;for(;(I=n.indexOf(s,_))>-1;){let B=da(s,{currentLocation:I,expectedLocation:f,distance:i,ignoreLocation:p});if(h=Math.min(B,h),_=I+d,w){let j=0;for(;j<d;)y[I+j]=1,j+=1}}_=-1;let $=[],k=1,M=d+m;const T=1<<d-1;for(let B=0;B<d;B+=1){let j=0,U=M;for(;j<U;)da(s,{errors:B,currentLocation:f+U,expectedLocation:f,distance:i,ignoreLocation:p})<=h?j=U:M=U,U=Math.floor((M-j)/2+j);M=U;let le=Math.max(1,f-U+1),me=r?m:Math.min(f+U,m)+d,X=Array(me+2);X[me+1]=(1<<B)-1;for(let ke=me;ke>=le;ke-=1){let ye=ke-1,De=o[n.charAt(ye)];if(w&&(y[ye]=+!!De),X[ke]=(X[ke+1]<<1|1)&De,B&&(X[ke]|=($[ke+1]|$[ke])<<1|1|$[ke+1]),X[ke]&T&&(k=da(s,{errors:B,currentLocation:ye,expectedLocation:f,distance:i,ignoreLocation:p}),k<=h)){if(h=k,_=ye,_<=f)break;le=Math.max(1,2*f-_)}}if(da(s,{errors:B+1,currentLocation:f,expectedLocation:f,distance:i,ignoreLocation:p})>h)break;$=X}const N={isMatch:_>=0,score:Math.max(.001,k)};if(w){const B=s2(y,c);B.length?u&&(N.indices=B):N.isMatch=!1}return N}function a2(n){let s={};for(let o=0,a=n.length;o<a;o+=1){const i=n.charAt(o);s[i]=(s[i]||0)|1<<a-o-1}return s}class Pm{constructor(s,{location:o=he.location,threshold:a=he.threshold,distance:i=he.distance,includeMatches:l=he.includeMatches,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,isCaseSensitive:u=he.isCaseSensitive,ignoreLocation:p=he.ignoreLocation}={}){if(this.options={location:o,threshold:a,distance:i,includeMatches:l,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:p},this.pattern=u?s:s.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(f,h)=>{this.chunks.push({pattern:f,alphabet:a2(f),startIndex:h})},m=this.pattern.length;if(m>os){let f=0;const h=m%os,_=m-h;for(;f<_;)d(this.pattern.substr(f,os),f),f+=os;if(h){const w=m-os;d(this.pattern.substr(w),w)}}else d(this.pattern,0)}searchIn(s){const{isCaseSensitive:o,includeMatches:a}=this.options;if(o||(s=s.toLowerCase()),this.pattern===s){let _={isMatch:!0,score:0};return a&&(_.indices=[[0,s.length-1]]),_}const{location:i,distance:l,threshold:r,findAllMatches:c,minMatchCharLength:u,ignoreLocation:p}=this.options;let d=[],m=0,f=!1;this.chunks.forEach(({pattern:_,alphabet:w,startIndex:y})=>{const{isMatch:I,score:$,indices:k}=o2(s,_,w,{location:i+y,distance:l,threshold:r,findAllMatches:c,minMatchCharLength:u,includeMatches:a,ignoreLocation:p});I&&(f=!0),m+=$,I&&k&&(d=[...d,...k])});let h={isMatch:f,score:f?m/this.chunks.length:1};return f&&a&&(h.indices=d),h}}class Bt{constructor(s){this.pattern=s}static isMultiMatch(s){return Mu(s,this.multiRegex)}static isSingleMatch(s){return Mu(s,this.singleRegex)}search(){}}function Mu(n,s){const o=n.match(s);return o?o[1]:null}class i2 extends Bt{constructor(s){super(s)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(s){const o=s===this.pattern;return{isMatch:o,score:o?0:1,indices:[0,this.pattern.length-1]}}}class l2 extends Bt{constructor(s){super(s)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(s){const a=s.indexOf(this.pattern)===-1;return{isMatch:a,score:a?0:1,indices:[0,s.length-1]}}}class r2 extends Bt{constructor(s){super(s)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(s){const o=s.startsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,this.pattern.length-1]}}}class c2 extends Bt{constructor(s){super(s)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(s){const o=!s.startsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,s.length-1]}}}class u2 extends Bt{constructor(s){super(s)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(s){const o=s.endsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[s.length-this.pattern.length,s.length-1]}}}class p2 extends Bt{constructor(s){super(s)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(s){const o=!s.endsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,s.length-1]}}}class Dm extends Bt{constructor(s,{location:o=he.location,threshold:a=he.threshold,distance:i=he.distance,includeMatches:l=he.includeMatches,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,isCaseSensitive:u=he.isCaseSensitive,ignoreLocation:p=he.ignoreLocation}={}){super(s),this._bitapSearch=new Pm(s,{location:o,threshold:a,distance:i,includeMatches:l,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:p})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(s){return this._bitapSearch.searchIn(s)}}class Nm extends Bt{constructor(s){super(s)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(s){let o=0,a;const i=[],l=this.pattern.length;for(;(a=s.indexOf(this.pattern,o))>-1;)o=a+l,i.push([a,o-1]);const r=!!i.length;return{isMatch:r,score:r?0:1,indices:i}}}const zl=[i2,Nm,r2,c2,p2,u2,l2,Dm],zu=zl.length,d2=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,m2="|";function f2(n,s={}){return n.split(m2).map(o=>{let a=o.trim().split(d2).filter(l=>l&&!!l.trim()),i=[];for(let l=0,r=a.length;l<r;l+=1){const c=a[l];let u=!1,p=-1;for(;!u&&++p<zu;){const d=zl[p];let m=d.isMultiMatch(c);m&&(i.push(new d(m,s)),u=!0)}if(!u)for(p=-1;++p<zu;){const d=zl[p];let m=d.isSingleMatch(c);if(m){i.push(new d(m,s));break}}}return i})}const h2=new Set([Dm.type,Nm.type]);class _2{constructor(s,{isCaseSensitive:o=he.isCaseSensitive,includeMatches:a=he.includeMatches,minMatchCharLength:i=he.minMatchCharLength,ignoreLocation:l=he.ignoreLocation,findAllMatches:r=he.findAllMatches,location:c=he.location,threshold:u=he.threshold,distance:p=he.distance}={}){this.query=null,this.options={isCaseSensitive:o,includeMatches:a,minMatchCharLength:i,findAllMatches:r,ignoreLocation:l,location:c,threshold:u,distance:p},this.pattern=o?s:s.toLowerCase(),this.query=f2(this.pattern,this.options)}static condition(s,o){return o.useExtendedSearch}searchIn(s){const o=this.query;if(!o)return{isMatch:!1,score:1};const{includeMatches:a,isCaseSensitive:i}=this.options;s=i?s:s.toLowerCase();let l=0,r=[],c=0;for(let u=0,p=o.length;u<p;u+=1){const d=o[u];r.length=0,l=0;for(let m=0,f=d.length;m<f;m+=1){const h=d[m],{isMatch:_,indices:w,score:y}=h.search(s);if(_){if(l+=1,c+=y,a){const I=h.constructor.type;h2.has(I)?r=[...r,...w]:r.push(w)}}else{c=0,l=0,r.length=0;break}}if(l){let m={isMatch:!0,score:c/l};return a&&(m.indices=r),m}}return{isMatch:!1,score:1}}}const Ol=[];function g2(...n){Ol.push(...n)}function Pl(n,s){for(let o=0,a=Ol.length;o<a;o+=1){let i=Ol[o];if(i.condition(n,s))return new i(n,s)}return new Pm(n,s)}const qa={AND:"$and",OR:"$or"},Dl={PATH:"$path",PATTERN:"$val"},Nl=n=>!!(n[qa.AND]||n[qa.OR]),v2=n=>!!n[Dl.PATH],b2=n=>!bt(n)&&Am(n)&&!Nl(n),Ou=n=>({[qa.AND]:Object.keys(n).map(s=>({[s]:n[s]}))});function Fm(n,s,{auto:o=!0}={}){const a=i=>{let l=Object.keys(i);const r=v2(i);if(!r&&l.length>1&&!Nl(i))return a(Ou(i));if(b2(i)){const u=r?i[Dl.PATH]:l[0],p=r?i[Dl.PATTERN]:i[u];if(!st(p))throw new Error(Bx(u));const d={keyId:Ml(u),pattern:p};return o&&(d.searcher=Pl(p,s)),d}let c={children:[],operator:l[0]};return l.forEach(u=>{const p=i[u];bt(p)&&p.forEach(d=>{c.children.push(a(d))})}),c};return Nl(n)||(n=Ou(n)),a(n)}function k2(n,{ignoreFieldNorm:s=he.ignoreFieldNorm}){n.forEach(o=>{let a=1;o.matches.forEach(({key:i,norm:l,score:r})=>{const c=i?i.weight:null;a*=Math.pow(r===0&&c?Number.EPSILON:r,(c||1)*(s?1:l))}),o.score=a})}function x2(n,s){const o=n.matches;s.matches=[],Sn(o)&&o.forEach(a=>{if(!Sn(a.indices)||!a.indices.length)return;const{indices:i,value:l}=a;let r={indices:i,value:l};a.key&&(r.key=a.key.src),a.idx>-1&&(r.refIndex=a.idx),s.matches.push(r)})}function w2(n,s){s.score=n.score}function y2(n,s,{includeMatches:o=he.includeMatches,includeScore:a=he.includeScore}={}){const i=[];return o&&i.push(x2),a&&i.push(w2),n.map(l=>{const{idx:r}=l,c={item:s[r],refIndex:r};return i.length&&i.forEach(u=>{u(l,c)}),c})}class Hs{constructor(s,o={},a){this.options={...he,...o},this.options.useExtendedSearch,this._keyStore=new Gx(this.options.keys),this.setCollection(s,a)}setCollection(s,o){if(this._docs=s,o&&!(o instanceof Tr))throw new Error(Wx);this._myIndex=o||Om(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(s){Sn(s)&&(this._docs.push(s),this._myIndex.add(s))}remove(s=()=>!1){const o=[];for(let a=0,i=this._docs.length;a<i;a+=1){const l=this._docs[a];s(l,a)&&(this.removeAt(a),a-=1,i-=1,o.push(l))}return o}removeAt(s){this._docs.splice(s,1),this._myIndex.removeAt(s)}getIndex(){return this._myIndex}search(s,{limit:o=-1}={}){const{includeMatches:a,includeScore:i,shouldSort:l,sortFn:r,ignoreFieldNorm:c}=this.options;let u=st(s)?st(this._docs[0])?this._searchStringList(s):this._searchObjectList(s):this._searchLogical(s);return k2(u,{ignoreFieldNorm:c}),l&&u.sort(r),Tm(o)&&o>-1&&(u=u.slice(0,o)),y2(u,this._docs,{includeMatches:a,includeScore:i})}_searchStringList(s){const o=Pl(s,this.options),{records:a}=this._myIndex,i=[];return a.forEach(({v:l,i:r,n:c})=>{if(!Sn(l))return;const{isMatch:u,score:p,indices:d}=o.searchIn(l);u&&i.push({item:l,idx:r,matches:[{score:p,value:l,norm:c,indices:d}]})}),i}_searchLogical(s){const o=Fm(s,this.options),a=(c,u,p)=>{if(!c.children){const{keyId:m,searcher:f}=c,h=this._findMatches({key:this._keyStore.get(m),value:this._myIndex.getValueForItemAtKeyId(u,m),searcher:f});return h&&h.length?[{idx:p,item:u,matches:h}]:[]}const d=[];for(let m=0,f=c.children.length;m<f;m+=1){const h=c.children[m],_=a(h,u,p);if(_.length)d.push(..._);else if(c.operator===qa.AND)return[]}return d},i=this._myIndex.records,l={},r=[];return i.forEach(({$:c,i:u})=>{if(Sn(c)){let p=a(o,c,u);p.length&&(l[u]||(l[u]={idx:u,item:c,matches:[]},r.push(l[u])),p.forEach(({matches:d})=>{l[u].matches.push(...d)}))}}),r}_searchObjectList(s){const o=Pl(s,this.options),{keys:a,records:i}=this._myIndex,l=[];return i.forEach(({$:r,i:c})=>{if(!Sn(r))return;let u=[];a.forEach((p,d)=>{u.push(...this._findMatches({key:p,value:r[d],searcher:o}))}),u.length&&l.push({idx:c,item:r,matches:u})}),l}_findMatches({key:s,value:o,searcher:a}){if(!Sn(o))return[];let i=[];if(bt(o))o.forEach(({v:l,i:r,n:c})=>{if(!Sn(l))return;const{isMatch:u,score:p,indices:d}=a.searchIn(l);u&&i.push({score:p,key:s,value:l,idx:r,norm:c,indices:d})});else{const{v:l,n:r}=o,{isMatch:c,score:u,indices:p}=a.searchIn(l);c&&i.push({score:u,key:s,value:l,norm:r,indices:p})}return i}}Hs.version="6.6.2";Hs.createIndex=Om;Hs.parseIndex=t2;Hs.config=he;Hs.parseQuery=Fm;g2(_2);const I2={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},$2=["value","disabled","onKeydown"],L2=["border","onClick"],C2={"w-4":"","text-right":"",op50:"","text-sm":""},E2=Me({__name:"Goto",setup(n){L(E);const s=J(),o=J(),a=J(),i=J(),l=J(""),r=J(0);function c(k){return k!=null}const u=K(()=>new Hs(Ye.map(k=>{var M;return(M=k.meta)==null?void 0:M.slide}).filter(c),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),p=K(()=>l.value.startsWith("/")?l.value.substring(1):l.value),d=K(()=>u.value.search(p.value).map(k=>k.item)),m=K(()=>!!d.value.length);function f(){if(m.value){const k=d.value.at(r.value||0);k&&Fs(k.no)}h()}function h(){l.value="",Rs.value=!1}function _(k){k.preventDefault(),r.value++,r.value>=d.value.length&&(r.value=0),y()}function w(k){k.preventDefault(),r.value--,r.value<=-2&&(r.value=d.value.length-1),y()}function y(){var M;const k=(M=i.value)==null?void 0:M[r.value];k&&a.value&&(k.offsetTop+k.offsetHeight>a.value.offsetHeight+a.value.scrollTop?a.value.scrollTo({behavior:"smooth",top:k.offsetTop+k.offsetHeight-a.value.offsetHeight+1}):k.offsetTop<a.value.scrollTop&&a.value.scrollTo({behavior:"smooth",top:k.offsetTop}))}function I(k){r.value=0,l.value=k.target.value}function $(k){Fs(k),h()}return be(Rs,async k=>{var M;k?(l.value="",r.value=0,setTimeout(()=>{var T;return(T=o.value)==null?void 0:T.focus()},0)):(M=o.value)==null||M.blur()}),be(Pt,()=>{var k;(k=s.value)!=null&&k.contains(Pt.value)||h()}),(k,M)=>(b(),ie("div",{id:"slidev-goto-dialog",ref_key:"container",ref:s,class:qe(["fixed right-5 transition-all",z(Rs)?"top-5":"-top-20"]),"w-90":""},[e("div",I2,[e("input",{ref_key:"input",ref:o,value:l.value,type:"text",disabled:!z(Rs),class:qe(["outline-none bg-transparent",{"text-red-400":!m.value&&l.value}]),placeholder:"Goto...",onKeydown:[aa(f,["enter"]),aa(h,["escape"]),aa(_,["down"]),aa(w,["up"])],onInput:I},null,42,$2)]),d.value.length>0?(b(),ie("ul",{key:0,ref_key:"list",ref:a,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(b(!0),ie(Te,null,js(d.value,(T,N)=>(b(),ie("li",{ref_for:!0,ref_key:"items",ref:i,key:T.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","items-center":"",border:N===0?"":"t main",class:qe(r.value===N?"bg-active op100":"op80"),onClick:ug(B=>$(T.no),["stop"])},[e("div",C2,kn(T.no),1),t(" "+kn(T.title),1)],10,L2))),128))],512)):we("v-if",!0)],2))}});const S2=S(E2,[["__scopeId","data-v-f5ee02a7"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Goto.vue"]]),R2=Me({__name:"Controls",setup(n){L(E);const s=it(),o=it();return(a,i)=>(b(),ie(Te,null,[R(Ex,{modelValue:z(dn),"onUpdate:modelValue":i[0]||(i[0]=l=>Ae(dn)?dn.value=l:null)},null,8,["modelValue"]),R(S2),s.value?(b(),C(z(s),{key:0})):we("v-if",!0),o.value?(b(),C(z(o),{key:1,modelValue:z(zi),"onUpdate:modelValue":i[1]||(i[1]=l=>Ae(zi)?zi.value=l:null)},null,8,["modelValue"])):we("v-if",!0),z(Re).info?(b(),C(Dx,{key:2,modelValue:z(vo),"onUpdate:modelValue":i[2]||(i[2]=l=>Ae(vo)?vo.value=l:null)},null,8,["modelValue"])):we("v-if",!0)],64))}}),T2=S(R2,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),A2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},M2=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),z2=[M2];function O2(n,s){return b(),ie("svg",A2,z2)}const P2={name:"carbon-settings-adjust",render:O2},D2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},N2=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),F2=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),j2=[N2,F2];function K2(n,s){return b(),ie("svg",D2,j2)}const H2={name:"carbon-information",render:K2},W2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},B2=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),q2=[B2];function V2(n,s){return b(),ie("svg",W2,q2)}const U2={name:"carbon-download",render:V2},G2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y2=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Q2=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Z2=[Y2,Q2];function J2(n,s){return b(),ie("svg",G2,Z2)}const X2={name:"carbon-user-speaker",render:J2},ew={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},nw=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),tw=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),sw=[nw,tw];function ow(n,s){return b(),ie("svg",ew,sw)}const aw={name:"carbon-presentation-file",render:ow},iw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},lw=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),rw=[lw];function cw(n,s){return b(),ie("svg",iw,rw)}const uw={name:"carbon-pen",render:cw},pw={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},dw=e("g",{fill:"currentColor"},[e("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),e("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),mw=[dw];function fw(n,s){return b(),ie("svg",pw,mw)}const hw={name:"ph-cursor-duotone",render:fw},_w={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},gw=e("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),vw=[gw];function bw(n,s){return b(),ie("svg",_w,vw)}const jm={name:"ph-cursor-fill",render:bw},kw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xw=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),ww=[xw];function yw(n,s){return b(),ie("svg",kw,ww)}const Iw={name:"carbon-sun",render:yw},$w={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lw=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Cw=[Lw];function Ew(n,s){return b(),ie("svg",$w,Cw)}const Sw={name:"carbon-moon",render:Ew},Rw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tw=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Aw=[Tw];function Mw(n,s){return b(),ie("svg",Rw,Aw)}const zw={name:"carbon-apps",render:Mw},Ow={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Pw=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Dw=[Pw];function Nw(n,s){return b(),ie("svg",Ow,Dw)}const Km={name:"carbon-arrow-right",render:Nw},Fw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jw=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Kw=[jw];function Hw(n,s){return b(),ie("svg",Fw,Kw)}const Ww={name:"carbon-arrow-left",render:Hw},Bw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},qw=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Vw=[qw];function Uw(n,s){return b(),ie("svg",Bw,Vw)}const Gw={name:"carbon-maximize",render:Uw},Yw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qw=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Zw=[Qw];function Jw(n,s){return b(),ie("svg",Yw,Zw)}const Xw={name:"carbon-minimize",render:Jw},ey={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ny=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),ty=[ny];function sy(n,s){return b(),ie("svg",ey,ty)}const oy={name:"carbon-checkmark",render:sy},ay={class:"select-list"},iy={class:"title"},ly={class:"items"},ry=["onClick"],cy=Me({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(n,{emit:s}){const o=n;L(E);const a=Ze(o,"modelValue",s,{passive:!0});return(i,l)=>{const r=oy;return b(),ie("div",ay,[e("div",iy,kn(n.title),1),e("div",ly,[(b(!0),ie(Te,null,js(n.items,c=>(b(),ie("div",{key:c.value,class:qe(["item",{active:z(a)===c.value}]),onClick:()=>{var u;a.value=c.value,(u=c.onClick)==null||u.call(c)}},[R(r,{class:qe(["text-green-500",{"opacity-0":z(a)!==c.value}])},null,8,["class"]),t(" "+kn(c.display||c.value),1)],10,ry))),128))])])}}});const uy=S(cy,[["__scopeId","data-v-3f89fa11"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SelectList.vue"]]),py={class:"text-sm"},dy=Me({__name:"Settings",setup(n){L(E);const s=[{display:"Fit",value:0},{display:"1:1",value:1}];return(o,a)=>(b(),ie("div",py,[R(uy,{modelValue:z(ka),"onUpdate:modelValue":a[0]||(a[0]=i=>Ae(ka)?ka.value=i:null),title:"Scale",items:s},null,8,["modelValue"])]))}}),my=S(dy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Settings.vue"]]),fy={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},hy=Me({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(n,{emit:s}){const o=n;L(E);const a=Ze(o,"modelValue",s,{passive:!0}),i=J();return iv(i,()=>{a.value=!1}),(l,r)=>(b(),ie("div",{ref_key:"el",ref:i,class:"flex relative"},[e("button",{class:qe({disabled:n.disabled}),onClick:r[0]||(r[0]=c=>a.value=!z(a))},[jn(l.$slots,"button",{class:qe({disabled:n.disabled})})],2),(b(),C(od,null,[z(a)?(b(),ie("div",fy,[jn(l.$slots,"menu")])):we("v-if",!0)],1024))],512))}}),_y=S(hy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/MenuButton.vue"]]),gy={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},vy={__name:"VerticalDivider",setup(n){return L(E),(s,o)=>(b(),ie("div",gy))}},ma=S(vy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),by={render(){return[]}},ky={class:"slidev-icon-btn"},xy={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},wy={class:"my-auto"},yy={class:"opacity-50"},Iy=Me({__name:"NavControls",props:{persist:{default:!1}},setup(n){const s=n;L(E);const o=El.smaller("md"),{isFullscreen:a,toggle:i}=xm,l=K(()=>jl.value?`?password=${jl.value}`:""),r=K(()=>`/presenter/${Ve.value}${l.value}`),c=K(()=>`/${Ve.value}${l.value}`),u=J();function p(){u.value&&Pt.value&&u.value.contains(Pt.value)&&Pt.value.blur()}const d=K(()=>s.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),m=it(),f=it();return Ot(()=>import("./DrawingControls-ef8ecf20.js"),[]).then(h=>f.value=h.default),(h,_)=>{const w=Xw,y=Gw,I=Ww,$=Km,k=zw,M=Sw,T=Iw,N=jm,B=hw,j=uw,U=aw,le=Tn("RouterLink"),me=X2,X=U2,ve=H2,ke=P2;return b(),ie("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[e("div",{class:qe(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",d.value]),onMouseleave:p},[z(ft)?we("v-if",!0):(b(),ie("button",{key:0,class:"slidev-icon-btn",onClick:_[0]||(_[0]=(...ye)=>z(i)&&z(i)(...ye))},[z(a)?(b(),C(w,{key:0})):(b(),C(y,{key:1}))])),e("button",{class:qe(["slidev-icon-btn",{disabled:!z(XO)}]),onClick:_[1]||(_[1]=(...ye)=>z(Nt)&&z(Nt)(...ye))},[R(I)],2),e("button",{class:qe(["slidev-icon-btn",{disabled:!z(JO)}]),title:"Next",onClick:_[2]||(_[2]=(...ye)=>z(Dt)&&z(Dt)(...ye))},[R($)],2),z(ft)?we("v-if",!0):(b(),ie("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:_[3]||(_[3]=ye=>z(wm)())},[R(k)])),z(Al)?we("v-if",!0):(b(),ie("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:_[4]||(_[4]=ye=>z(Cm)())},[z(Cr)?(b(),C(M,{key:0})):(b(),C(T,{key:1}))])),R(ma),z(ft)?we("v-if",!0):(b(),ie(Te,{key:3},[!z(bn)&&!z(o)&&m.value?(b(),ie(Te,{key:0},[R(z(m)),R(ma)],64)):we("v-if",!0),z(bn)?(b(),ie("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:_[5]||(_[5]=ye=>Oi.value=!z(Oi))},[z(Oi)?(b(),C(N,{key:0})):(b(),C(B,{key:1,class:"opacity-50"}))])):we("v-if",!0)],64)),(!z(Re).drawings.presenterOnly||z(bn))&&!z(ft)?(b(),ie(Te,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:_[6]||(_[6]=ye=>tt.value=!z(tt))},[R(j),z(tt)?(b(),ie("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:tn({background:z(ls).color})},null,4)):we("v-if",!0)]),R(ma)],64)):we("v-if",!0),z(ft)?we("v-if",!0):(b(),ie(Te,{key:5},[z(bn)?(b(),C(le,{key:0,to:c.value,class:"slidev-icon-btn",title:"Play Mode"},{default:v(()=>[R(U)]),_:1},8,["to"])):we("v-if",!0),z(UO)?(b(),C(le,{key:1,to:r.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:v(()=>[R(me)]),_:1},8,["to"])):we("v-if",!0),we("v-if",!0)],64)),(b(),ie(Te,{key:6},[z(Re).download?(b(),ie("button",{key:0,class:"slidev-icon-btn",onClick:_[8]||(_[8]=(...ye)=>z(Kl)&&z(Kl)(...ye))},[R(X)])):we("v-if",!0)],64)),!z(bn)&&z(Re).info&&!z(ft)?(b(),ie("button",{key:7,class:"slidev-icon-btn",onClick:_[9]||(_[9]=ye=>vo.value=!z(vo))},[R(ve)])):we("v-if",!0),!z(bn)&&!z(ft)?(b(),C(_y,{key:8},{button:v(()=>[e("button",ky,[R(ke)])]),menu:v(()=>[R(my)]),_:1})):we("v-if",!0),z(ft)?we("v-if",!0):(b(),C(ma,{key:9})),e("div",xy,[e("div",wy,[t(kn(z(Ve))+" ",1),e("span",yy,"/ "+kn(z(GO)),1)])]),R(z(by))],34)],512)}}}),$y=S(Iy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/NavControls.vue"]]),Ly={style:{"font-size":"0.55rem","line-height":"1rem"}},Cy=e("div",{class:"absolute bottom-0 left-1"},[e("img",{src:"https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png",width:"60"})],-1),Ey={class:"absolute bottom-1 left-89 text-gray-700"},Sy={key:0,class:"absolute bottom-1 right-1 text-gray-700"},Ry={__name:"global-top",setup(n){const s=L(E);return(o,a)=>(b(),ie("footer",Ly,[Cy,e("div",Ey," ITT E.Agnelli - Informatica - "+kn(z(s).configs.materia)+" - prof. Antonio Mancuso - a.s. "+kn(z(s).configs.as)+" - v "+kn(z(s).configs.version||0),1),z(s).nav.currentPage!==1&&z(s).nav.currentPage!=z(s).nav.total+1?(b(),ie("div",Sy,kn(z(s).nav.currentPage-1)+" / "+kn(z(s).nav.total-1),1)):we("v-if",!0)]))}},Ty=S(Ry,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/global-top.vue"]]),Hm={render(){return[yn(Ty)]}},Wm={render(){return[]}},Ay={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},My=Me({__name:"PresenterMouse",setup(n){return L(E),(s,o)=>{const a=jm;return z(Ri).cursor?(b(),ie("div",Ay,[R(a,{class:"absolute",style:tn({left:`${z(Ri).cursor.x}%`,top:`${z(Ri).cursor.y}%`})},null,8,["style"])])):we("v-if",!0)}}}),zy=S(My,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),Oy=Me({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(n){L(E),be(mn,()=>{var a,i;(a=mn.value)!=null&&a.meta&&mn.value.meta.preload!==!1&&(mn.value.meta.__preloaded=!0),(i=Fi.value)!=null&&i.meta&&Fi.value.meta.preload!==!1&&(Fi.value.meta.__preloaded=!0)},{immediate:!0});const s=it();Ot(()=>import("./DrawingLayer-2e065e42.js"),[]).then(a=>s.value=a.default);const o=K(()=>Ye.filter(a=>{var i;return((i=a.meta)==null?void 0:i.__preloaded)||a===mn.value}));return(a,i)=>(b(),ie(Te,null,[we(" Global Bottom "),R(z(Wm)),we(" Slides "),R(sg,G(z(t7),{id:"slideshow",tag:"div"}),{default:v(()=>[(b(!0),ie(Te,null,js(o.value,l=>{var r;return td((b(),C(z(Rr),{key:l.path,is:l==null?void 0:l.component,clicks:l===z(mn)?z(Nn):0,"clicks-elements":((r=l.meta)==null?void 0:r.__clicksElements)||[],"clicks-disabled":!1,class:qe(z(Sr)(l)),route:l,context:a.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Md,l===z(mn)]])}),128))]),_:1},16),we(" Global Top "),R(z(Hm)),s.value?(b(),C(z(s),{key:0})):we("v-if",!0),z(bn)?we("v-if",!0):(b(),C(zy,{key:1}))],64))}});const Py=S(Oy,[["__scopeId","data-v-afb4231e"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesShow.vue"]]),Dy=Me({__name:"PrintStyle",setup(n){L(E);function s(o,{slots:a}){if(a.default)return yn("style",a.default())}return(o,a)=>(b(),C(s,null,{default:v(()=>[t(" @page { size: "+kn(z(zt))+"px "+kn(z(wr))+"px; margin: 0px; } ",1)]),_:1}))}}),Bm=S(Dy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),Ny=Me({__name:"Play",setup(n){L(E),hx();const s=J();function o(l){var r;bu.value||((r=l.target)==null?void 0:r.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?Dt():Nt())}s7(s);const a=K(()=>$k.value||bu.value);it();const i=it();return Ot(()=>import("./DrawingControls-ef8ecf20.js"),[]).then(l=>i.value=l.default),(l,r)=>(b(),ie(Te,null,[z(Ns)?(b(),C(Bm,{key:0})):we("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:s,class:"grid grid-cols-[1fr_max-content]",style:tn(z(yr))},[R(Sm,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:z(Ns)?z(_s).width.value:void 0,scale:z(ka),onPointerdown:o},{default:v(()=>[R(Py,{context:"slide"})]),controls:v(()=>[e("div",{class:qe(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[a.value?"opacity-100 right-0":"opacity-0 p-2",z(Mo)?"pointer-events-none":""]])},[R($y,{class:"m-auto",persist:a.value},null,8,["persist"])],2),!z(Re).drawings.presenterOnly&&!z(ft)&&i.value?(b(),C(z(i),{key:0,class:"ml-0"})):we("v-if",!0)]),_:1},8,["style","width","scale"]),we("v-if",!0)],4),R(T2)],64))}}),Fy=S(Ny,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function qm(n){return typeof n>"u"||n===null}function jy(n){return typeof n=="object"&&n!==null}function Ky(n){return Array.isArray(n)?n:qm(n)?[]:[n]}function Hy(n,s){var o,a,i,l;if(s)for(l=Object.keys(s),o=0,a=l.length;o<a;o+=1)i=l[o],n[i]=s[i];return n}function Wy(n,s){var o="",a;for(a=0;a<s;a+=1)o+=n;return o}function By(n){return n===0&&Number.NEGATIVE_INFINITY===1/n}var qy=qm,Vy=jy,Uy=Ky,Gy=Wy,Yy=By,Qy=Hy,Ar={isNothing:qy,isObject:Vy,toArray:Uy,repeat:Gy,isNegativeZero:Yy,extend:Qy};function Vm(n,s){var o="",a=n.reason||"(unknown reason)";return n.mark?(n.mark.name&&(o+='in "'+n.mark.name+'" '),o+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")",!s&&n.mark.snippet&&(o+=`

`+n.mark.snippet),a+" "+o):a}function Oo(n,s){Error.call(this),this.name="YAMLException",this.reason=n,this.mark=s,this.message=Vm(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Oo.prototype=Object.create(Error.prototype);Oo.prototype.constructor=Oo;Oo.prototype.toString=function(s){return this.name+": "+Vm(this,s)};var as=Oo,Zy=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Jy=["scalar","sequence","mapping"];function Xy(n){var s={};return n!==null&&Object.keys(n).forEach(function(o){n[o].forEach(function(a){s[String(a)]=o})}),s}function eI(n,s){if(s=s||{},Object.keys(s).forEach(function(o){if(Zy.indexOf(o)===-1)throw new as('Unknown option "'+o+'" is met in definition of "'+n+'" YAML type.')}),this.options=s,this.tag=n,this.kind=s.kind||null,this.resolve=s.resolve||function(){return!0},this.construct=s.construct||function(o){return o},this.instanceOf=s.instanceOf||null,this.predicate=s.predicate||null,this.represent=s.represent||null,this.representName=s.representName||null,this.defaultStyle=s.defaultStyle||null,this.multi=s.multi||!1,this.styleAliases=Xy(s.styleAliases||null),Jy.indexOf(this.kind)===-1)throw new as('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}var rn=eI;function Pu(n,s){var o=[];return n[s].forEach(function(a){var i=o.length;o.forEach(function(l,r){l.tag===a.tag&&l.kind===a.kind&&l.multi===a.multi&&(i=r)}),o[i]=a}),o}function nI(){var n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},s,o;function a(i){i.multi?(n.multi[i.kind].push(i),n.multi.fallback.push(i)):n[i.kind][i.tag]=n.fallback[i.tag]=i}for(s=0,o=arguments.length;s<o;s+=1)arguments[s].forEach(a);return n}function Fl(n){return this.extend(n)}Fl.prototype.extend=function(s){var o=[],a=[];if(s instanceof rn)a.push(s);else if(Array.isArray(s))a=a.concat(s);else if(s&&(Array.isArray(s.implicit)||Array.isArray(s.explicit)))s.implicit&&(o=o.concat(s.implicit)),s.explicit&&(a=a.concat(s.explicit));else throw new as("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(l){if(!(l instanceof rn))throw new as("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new as("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new as("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),a.forEach(function(l){if(!(l instanceof rn))throw new as("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(Fl.prototype);return i.implicit=(this.implicit||[]).concat(o),i.explicit=(this.explicit||[]).concat(a),i.compiledImplicit=Pu(i,"implicit"),i.compiledExplicit=Pu(i,"explicit"),i.compiledTypeMap=nI(i.compiledImplicit,i.compiledExplicit),i};var tI=Fl,sI=new rn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),oI=new rn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),aI=new rn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),iI=new tI({explicit:[sI,oI,aI]});function lI(n){if(n===null)return!0;var s=n.length;return s===1&&n==="~"||s===4&&(n==="null"||n==="Null"||n==="NULL")}function rI(){return null}function cI(n){return n===null}var uI=new rn("tag:yaml.org,2002:null",{kind:"scalar",resolve:lI,construct:rI,predicate:cI,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function pI(n){if(n===null)return!1;var s=n.length;return s===4&&(n==="true"||n==="True"||n==="TRUE")||s===5&&(n==="false"||n==="False"||n==="FALSE")}function dI(n){return n==="true"||n==="True"||n==="TRUE"}function mI(n){return Object.prototype.toString.call(n)==="[object Boolean]"}var fI=new rn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:pI,construct:dI,predicate:mI,represent:{lowercase:function(n){return n?"true":"false"},uppercase:function(n){return n?"TRUE":"FALSE"},camelcase:function(n){return n?"True":"False"}},defaultStyle:"lowercase"});function hI(n){return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102}function _I(n){return 48<=n&&n<=55}function gI(n){return 48<=n&&n<=57}function vI(n){if(n===null)return!1;var s=n.length,o=0,a=!1,i;if(!s)return!1;if(i=n[o],(i==="-"||i==="+")&&(i=n[++o]),i==="0"){if(o+1===s)return!0;if(i=n[++o],i==="b"){for(o++;o<s;o++)if(i=n[o],i!=="_"){if(i!=="0"&&i!=="1")return!1;a=!0}return a&&i!=="_"}if(i==="x"){for(o++;o<s;o++)if(i=n[o],i!=="_"){if(!hI(n.charCodeAt(o)))return!1;a=!0}return a&&i!=="_"}if(i==="o"){for(o++;o<s;o++)if(i=n[o],i!=="_"){if(!_I(n.charCodeAt(o)))return!1;a=!0}return a&&i!=="_"}}if(i==="_")return!1;for(;o<s;o++)if(i=n[o],i!=="_"){if(!gI(n.charCodeAt(o)))return!1;a=!0}return!(!a||i==="_")}function bI(n){var s=n,o=1,a;if(s.indexOf("_")!==-1&&(s=s.replace(/_/g,"")),a=s[0],(a==="-"||a==="+")&&(a==="-"&&(o=-1),s=s.slice(1),a=s[0]),s==="0")return 0;if(a==="0"){if(s[1]==="b")return o*parseInt(s.slice(2),2);if(s[1]==="x")return o*parseInt(s.slice(2),16);if(s[1]==="o")return o*parseInt(s.slice(2),8)}return o*parseInt(s,10)}function kI(n){return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!Ar.isNegativeZero(n)}var xI=new rn("tag:yaml.org,2002:int",{kind:"scalar",resolve:vI,construct:bI,predicate:kI,represent:{binary:function(n){return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)},octal:function(n){return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)},decimal:function(n){return n.toString(10)},hexadecimal:function(n){return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),wI=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function yI(n){return!(n===null||!wI.test(n)||n[n.length-1]==="_")}function II(n){var s,o;return s=n.replace(/_/g,"").toLowerCase(),o=s[0]==="-"?-1:1,"+-".indexOf(s[0])>=0&&(s=s.slice(1)),s===".inf"?o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:s===".nan"?NaN:o*parseFloat(s,10)}var $I=/^[-+]?[0-9]+e/;function LI(n,s){var o;if(isNaN(n))switch(s){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===n)switch(s){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===n)switch(s){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ar.isNegativeZero(n))return"-0.0";return o=n.toString(10),$I.test(o)?o.replace("e",".e"):o}function CI(n){return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||Ar.isNegativeZero(n))}var EI=new rn("tag:yaml.org,2002:float",{kind:"scalar",resolve:yI,construct:II,predicate:CI,represent:LI,defaultStyle:"lowercase"}),SI=iI.extend({implicit:[uI,fI,xI,EI]}),RI=SI,Um=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Gm=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function TI(n){return n===null?!1:Um.exec(n)!==null||Gm.exec(n)!==null}function AI(n){var s,o,a,i,l,r,c,u=0,p=null,d,m,f;if(s=Um.exec(n),s===null&&(s=Gm.exec(n)),s===null)throw new Error("Date resolve error");if(o=+s[1],a=+s[2]-1,i=+s[3],!s[4])return new Date(Date.UTC(o,a,i));if(l=+s[4],r=+s[5],c=+s[6],s[7]){for(u=s[7].slice(0,3);u.length<3;)u+="0";u=+u}return s[9]&&(d=+s[10],m=+(s[11]||0),p=(d*60+m)*6e4,s[9]==="-"&&(p=-p)),f=new Date(Date.UTC(o,a,i,l,r,c,u)),p&&f.setTime(f.getTime()-p),f}function MI(n){return n.toISOString()}var zI=new rn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:TI,construct:AI,instanceOf:Date,represent:MI});function OI(n){return n==="<<"||n===null}var PI=new rn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:OI}),Mr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function DI(n){if(n===null)return!1;var s,o,a=0,i=n.length,l=Mr;for(o=0;o<i;o++)if(s=l.indexOf(n.charAt(o)),!(s>64)){if(s<0)return!1;a+=6}return a%8===0}function NI(n){var s,o,a=n.replace(/[\r\n=]/g,""),i=a.length,l=Mr,r=0,c=[];for(s=0;s<i;s++)s%4===0&&s&&(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)),r=r<<6|l.indexOf(a.charAt(s));return o=i%4*6,o===0?(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)):o===18?(c.push(r>>10&255),c.push(r>>2&255)):o===12&&c.push(r>>4&255),new Uint8Array(c)}function FI(n){var s="",o=0,a,i,l=n.length,r=Mr;for(a=0;a<l;a++)a%3===0&&a&&(s+=r[o>>18&63],s+=r[o>>12&63],s+=r[o>>6&63],s+=r[o&63]),o=(o<<8)+n[a];return i=l%3,i===0?(s+=r[o>>18&63],s+=r[o>>12&63],s+=r[o>>6&63],s+=r[o&63]):i===2?(s+=r[o>>10&63],s+=r[o>>4&63],s+=r[o<<2&63],s+=r[64]):i===1&&(s+=r[o>>2&63],s+=r[o<<4&63],s+=r[64],s+=r[64]),s}function jI(n){return Object.prototype.toString.call(n)==="[object Uint8Array]"}var KI=new rn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:DI,construct:NI,predicate:jI,represent:FI}),HI=Object.prototype.hasOwnProperty,WI=Object.prototype.toString;function BI(n){if(n===null)return!0;var s=[],o,a,i,l,r,c=n;for(o=0,a=c.length;o<a;o+=1){if(i=c[o],r=!1,WI.call(i)!=="[object Object]")return!1;for(l in i)if(HI.call(i,l))if(!r)r=!0;else return!1;if(!r)return!1;if(s.indexOf(l)===-1)s.push(l);else return!1}return!0}function qI(n){return n!==null?n:[]}var VI=new rn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:BI,construct:qI}),UI=Object.prototype.toString;function GI(n){if(n===null)return!0;var s,o,a,i,l,r=n;for(l=new Array(r.length),s=0,o=r.length;s<o;s+=1){if(a=r[s],UI.call(a)!=="[object Object]"||(i=Object.keys(a),i.length!==1))return!1;l[s]=[i[0],a[i[0]]]}return!0}function YI(n){if(n===null)return[];var s,o,a,i,l,r=n;for(l=new Array(r.length),s=0,o=r.length;s<o;s+=1)a=r[s],i=Object.keys(a),l[s]=[i[0],a[i[0]]];return l}var QI=new rn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:GI,construct:YI}),ZI=Object.prototype.hasOwnProperty;function JI(n){if(n===null)return!0;var s,o=n;for(s in o)if(ZI.call(o,s)&&o[s]!==null)return!1;return!0}function XI(n){return n!==null?n:{}}var e$=new rn("tag:yaml.org,2002:set",{kind:"mapping",resolve:JI,construct:XI});RI.extend({implicit:[zI,PI],explicit:[KI,VI,QI,e$]});function Du(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"":n===95?" ":n===76?"\u2028":n===80?"\u2029":""}var n$=new Array(256),t$=new Array(256);for(var Es=0;Es<256;Es++)n$[Es]=Du(Es)?1:0,t$[Es]=Du(Es);function s$(n){return Array.from(new Set(n))}function Nu(...n){let s,o,a;n.length===1?(s=0,a=1,[o]=n):[s,o,a=1]=n;const i=[];let l=s;for(;l<o;)i.push(l),l+=a||1;return i}function Ym(n,s){if(!s||s==="all"||s==="*")return Nu(1,n+1);const o=[];for(const a of s.split(/[,;]/g))if(!a.includes("-"))o.push(+a);else{const[i,l]=a.split("-",2);o.push(...Nu(+i,l?+l+1:n+1))}return s$(o).filter(a=>a<=n).sort((a,i)=>a-i)}function Qm(n){const s=K(()=>n.value.path),o=K(()=>Ye.length-1),a=K(()=>parseInt(s.value.split(/\//g).slice(-1)[0])||1),i=K(()=>mi(a.value)),l=K(()=>Ye.find(f=>f.path===`${a.value}`)),r=K(()=>{var f,h,_;return(_=(h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:_.id}),c=K(()=>{var f,h;return((h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.layout)||(a.value===1?"cover":"default")}),u=K(()=>Ye.find(f=>f.path===`${Math.min(Ye.length,a.value+1)}`)),p=K(()=>Ye.filter(f=>{var h,_;return(_=(h=f.meta)==null?void 0:h.slide)==null?void 0:_.title}).reduce((f,h)=>(zr(f,h),f),[])),d=K(()=>Or(p.value,l.value)),m=K(()=>Pr(d.value));return{route:n,path:s,total:o,currentPage:a,currentPath:i,currentRoute:l,currentSlideId:r,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:d,tree:m,downloadPDF:Kl,next:Dt,nextSlide:Po,openInEditor:o7,prev:Nt,prevSlide:Do}}function Zm(n,s,o){const a=J(0);an(()=>{wn.afterEach(async()=>{await an(),a.value+=1})});const i=K(()=>{var u,p;return a.value,((p=(u=s.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),l=K(()=>{var u,p;return+(((p=(u=s.value)==null?void 0:u.meta)==null?void 0:p.clicks)??i.value.length)}),r=K(()=>o.value<Ye.length-1||n.value<l.value),c=K(()=>o.value>1||n.value>0);return{clicks:n,clicksElements:i,clicksTotal:l,hasNext:r,hasPrev:c}}const o$=["id"],a$=Me({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(n,{emit:s}){const o=n,a=Ze(o,"clicksElements",s),i=K(()=>({height:`${wr}px`,width:`${zt}px`})),l=it();Ot(()=>Promise.resolve().then(()=>Ix),void 0).then(p=>l.value=p.default);const r=K(()=>o.clicks),c=Zm(r,o.nav.currentRoute,o.nav.currentPage),u=K(()=>`${o.route.path.toString().padStart(3,"0")}-${(r.value+1).toString().padStart(2,"0")}`);return En(E,Be({nav:{...o.nav,...c},configs:Re,themeConfigs:K(()=>Re.themeConfig)})),(p,d)=>{var m;return b(),ie("div",{id:u.value,class:"print-slide-container",style:tn(i.value)},[R(z(Wm)),R(z(Rr),{is:(m=p.route)==null?void 0:m.component,"clicks-elements":z(a),"onUpdate:clicksElements":d[0]||(d[0]=f=>Ae(a)?a.value=f:null),clicks:r.value,"clicks-disabled":!1,class:qe(z(Sr)(p.route)),route:p.route},null,8,["is","clicks-elements","clicks","class","route"]),l.value?(b(),C(z(l),{key:0,page:+p.route.path},null,8,["page"])):we("v-if",!0),R(z(Hm))],12,o$)}}}),Fu=S(a$,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),i$=Me({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(n){var l;const s=n;L(E);const o=J(((l=s.route.meta)==null?void 0:l.__clicksElements)||[]),a=K(()=>s.route),i=Qm(a);return(r,c)=>(b(),ie(Te,null,[R(Fu,{"clicks-elements":o.value,"onUpdate:clicksElements":c[0]||(c[0]=u=>o.value=u),clicks:0,nav:z(i),route:a.value},null,8,["clicks-elements","nav","route"]),z(bo)?we("v-if",!0):(b(!0),ie(Te,{key:0},js(o.value.length,u=>(b(),C(Fu,{key:u,clicks:u,nav:z(i),route:a.value},null,8,["clicks","nav","route"]))),128))],64))}}),l$=S(i$,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlide.vue"]]),r$={id:"print-content"},c$=Me({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(n){const s=n;L(E);const o=K(()=>s.width),a=K(()=>s.width/Mt),i=K(()=>o.value/a.value),l=K(()=>i.value<Mt?o.value/zt:a.value*Mt/zt);let r=Ye.slice(0,-1);Kn.value.query.range&&(r=Ym(r.length,Kn.value.query.range).map(p=>r[p-1]));const c=K(()=>({"select-none":!Re.selectable,"slidev-code-line-numbers":Re.lineNumbers}));return En(Bd,l),(u,p)=>(b(),ie("div",{id:"print-container",class:qe(c.value)},[e("div",r$,[(b(!0),ie(Te,null,js(z(r),d=>(b(),C(l$,{key:d.path,route:d},null,8,["route"]))),128))]),jn(u.$slots,"controls")],2))}});const u$=S(c$,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintContainer.vue"]]),p$=Me({__name:"Print",setup(n){return L(E),xs(()=>{Ns?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,o)=>(b(),ie(Te,null,[z(Ns)?(b(),C(Bm,{key:0})):we("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:tn(z(yr))},[R(u$,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:z(_s).width.value},null,8,["style","width"])],4)],64))}});const d$=S(p$,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Print.vue"]]);const m$={class:"slidev-layout end"},f$={__name:"end",setup(n){return L(E),(s,o)=>(b(),ie("div",m$,[jn(s.$slots,"default",{},()=>[t("END")],!0)]))}},h$=S(f$,[["__scopeId","data-v-e532b98d"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/end.vue"]]);function ju(n){return n.startsWith("/")?"/3/linux_cli/"+n.slice(1):n}function _$(n,s=!1){const o=n&&["#","rgb","hsl"].some(i=>n.indexOf(i)===0),a={background:o?n:void 0,color:n&&!o?"white":void 0,backgroundImage:o?void 0:n?s?`linear-gradient(#0005, #0008), url(${ju(n)})`:`url("${ju(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return a.background||delete a.background,a}const g$={class:"my-auto w-full"},v$=Me({__name:"cover",props:{background:{default:""}},setup(n){const s=n;L(E);const o=K(()=>_$(s.background,!0));return(a,i)=>(b(),ie("div",{class:"slidev-layout cover",style:tn(o.value)},[e("div",g$,[jn(a.$slots,"default")])],4))}}),b$=S(v$,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/theme-default/layouts/cover.vue"]]),k$=e("h1",null,"SISTEMI & RETI 3",-1),x$=e("p",null,"Linux CLI",-1),w$={class:"pt-12"},y$={class:"px-2 py-1"},I$={__name:"1",setup(n){const s={theme:"default",background:"/cover.png",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"RETI 3",as:"2024/2025",version:"1.1.3"};return L(E),(o,a)=>{const i=Km;return b(),C(b$,P(O(s)),{default:v(()=>[we(" https://www.linuxjournal.com/content/linux-command-line-interface-introduction-guide#firstlook "),k$,x$,e("div",w$,[e("span",y$,[t(" Premi spazio o "),R(i,{class:"inline"}),t(" per la prossima slide ")])])]),_:1},16)}}},$$=S(I$,[["__file","/@slidev/slides/1.md"]]),L$="/3/linux_cli/assets/cli_00-1fd55adb.png",C$={class:"slidev-layout default"},E$={__name:"default",setup(n){return L(E),(s,o)=>(b(),ie("div",C$,[jn(s.$slots,"default")]))}},D=S(E$,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/default.vue"]]),S$=e("h1",null,"Linux CLI",-1),R$=e("img",{src:L$,width:"750",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),T$={__name:"2",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[S$,R$]),_:1},16))}},A$=S(T$,[["__file","/@slidev/slides/2.md"]]),M$="/3/linux_cli/assets/c_01-ec6830b4.jpg",z$=e("h1",null,"Linux CLI",-1),O$=e("img",{src:M$,width:"650",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),P$={__name:"3",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[z$,O$]),_:1},16))}},D$=S(P$,[["__file","/@slidev/slides/3.md"]]),N$="/3/linux_cli/assets/c_02-25fc3292.jpg",F$=e("h1",null,"Linux CLI",-1),j$=e("img",{src:N$,width:"600",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),K$={__name:"4",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[F$,j$]),_:1},16))}},H$=S(K$,[["__file","/@slidev/slides/4.md"]]),W$="/3/linux_cli/assets/c_03-2292d779.jpg",B$=e("h1",null,"Linux CLI",-1),q$=e("img",{src:W$,width:"750",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),V$={__name:"5",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[B$,q$]),_:1},16))}},U$=S(V$,[["__file","/@slidev/slides/5.md"]]),G$=e("h1",null,"Linux CLI",-1),Y$=e("p",null,"Esercitarsi con Linux e Materiale Aggiuntivo",-1),Q$=e("ul",null,[e("li",null,[e("a",{href:"/support/3/linux_cli/The_Complete_Linux_Manual.pdf",target:"_blank",rel:"noopener"},"The_Complete_Linux_Manual")]),e("li",null,[e("a",{href:"/support/3/linux_cli/How_Linux_Works.epub",target:"_blank",rel:"noopener"},"How_Linux_Works")]),e("li",null,[e("a",{href:"/support/3/linux_cli/Learning_Modern_Linux.epub",target:"_blank",rel:"noopener"},"Learning_Modern_Linux")]),e("li",null,[e("a",{href:"/support/3/linux_cli/linux_commands.pdf",target:"_blank",rel:"noopener"},"Linux CLI Commands")]),e("li",null,[e("a",{href:"/support/3/linux_cli/introduction-to-bash-scripting-light.pdf",target:"_blank",rel:"noopener"},"Introduction to Bash")]),e("li",null,[e("a",{href:"https://linuxjourney.com",target:"_blank",rel:"noopener"},"Linux Journey")]),e("li",null,[e("a",{href:"https://linuxsurvival.com",target:"_blank",rel:"noopener"},"Linux Survival")]),e("li",null,[e("a",{href:"https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html",target:"_blank",rel:"noopener"},"Linux Interactive Game")]),e("li",null,[e("a",{href:"https://web.archive.org/web/20130926213426/http://nixsrv.com/llthw",target:"_blank",rel:"noopener"},"llthw")]),e("li",null,[e("a",{href:"https://www.codecademy.com/learn/introduction-to-linux-installation",target:"_blank",rel:"noopener"},"introduction-to-linux-installation")]),e("li",null,[e("a",{href:"https://www.codecademy.com/learn/intro-to-the-command-line",target:"_blank",rel:"noopener"},"intro-to-the-command-line")]),e("li",null,[e("a",{href:"https://www.codecademy.com/learn/learn-the-command-line-viewing-and-changing-the-file-system",target:"_blank",rel:"noopener"},"learn-the-command-line")]),e("li",null,[e("a",{href:"https://www.codecademy.com/learn/learn-the-command-line-redirecting-input-and-output",target:"_blank",rel:"noopener"},"learn-the-command-line-redirecting-input-and-output")])],-1),Z$={__name:"6",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[G$,Y$,Q$]),_:1},16))}},J$=S(Z$,[["__file","/@slidev/slides/6.md"]]),X$=e("h1",null,"Linux CLI",-1),e3=e("p",null,"Esercitarsi con Linux e Materiale Aggiuntivo",-1),n3=e("ul",null,[e("li",null,[e("a",{href:"https://www.codecademy.com/learn/introduction-to-linux-users-and-permissions",target:"_blank",rel:"noopener"},"introduction-to-linux-users-and-permissions")]),e("li",null,[e("a",{href:"https://www.codecademy.com/learn/introduction-to-linux-bash-scripting",target:"_blank",rel:"noopener"},"introduction-to-linux-bash-scripting")]),e("li",null,[e("a",{href:"https://linux-training.be/linuxfun.pdf?ref=itsfoss.com",target:"_blank",rel:"noopener"},"Linux Fundamentals")]),e("li",null,[e("a",{href:"https://linuxnewbieguide.org/wp-content/uploads/2016/07/The-Ultimate-Linux-Newbie-Guide-eBook-Edition-January-2017.pdf",target:"_blank",rel:"noopener"},"Ultimate Linux Beginner Guide")]),e("li",null,[e("a",{href:"https://www.netacad.com/courses/os-it/ndg-linux-unhatched?ref=itsfoss.com",target:"_blank",rel:"noopener"},"Cisco Linux From Scratch")]),e("li",null,[e("a",{href:"https://www.netacad.com/courses/os-it/ndg-linux-essentials",target:"_blank",rel:"noopener"},"Cisco NDG Linux Essentials")]),e("li",null,[e("a",{href:"https://www.netacad.com/courses/os-it/ndg-linux-I",target:"_blank",rel:"noopener"},"Cisco NDG Linux 1")]),e("li",null,[e("a",{href:"https://www.netacad.com/courses/os-it/ndg-linux-II",target:"_blank",rel:"noopener"},"Cisco NDG Linux 2")]),e("li",null,[e("a",{href:"https://sourceforge.net/projects/linuxcommand/files/AWTLCL/21.10/AWTLCL-21.10.pdf/download",target:"_blank",rel:"noopener"},"The Linux Command Line")]),e("li",null,[e("a",{href:"https://linuxcommand.org/lc3_learning_the_shell.php",target:"_blank",rel:"noopener"},"Learning The Shell")]),e("li",null,[e("a",{href:"https://linuxcommand.org/lc3_man_page_index.php#builtins",target:"_blank",rel:"noopener"},"Bash builtins")]),e("li",null,[e("a",{href:"https://linuxcommand.org/lc3_man_page_index.php#file",target:"_blank",rel:"noopener"},"File utilities")])],-1),t3={__name:"7",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[X$,e3,n3]),_:1},16))}},s3=S(t3,[["__file","/@slidev/slides/7.md"]]),o3=e("h1",null,"Linux CLI",-1),a3=e("p",null,"Esercitarsi con Linux e Materiale Aggiuntivo",-1),i3=e("ul",null,[e("li",null,[e("a",{href:"https://linuxcommand.org/lc3_man_page_index.php#text",target:"_blank",rel:"noopener"},"Text utilities")]),e("li",null,[e("a",{href:"https://linuxcommand.org/lc3_man_page_index.php#shell",target:"_blank",rel:"noopener"},"Shell utilities")]),e("li",null,[e("a",{href:"https://linuxcommand.org/lc3_man_page_index.php#other",target:"_blank",rel:"noopener"},"Misc commands")]),e("li",null,[e("a",{href:"https://tldp.org/LDP/intro-linux/intro-linux.pdf?ref=itsfoss.com",target:"_blank",rel:"noopener"},"Intro to Linux")]),e("li",null,[e("a",{href:"https://www.linuxtrainingacademy.com/itsfoss-ll5d/",target:"_blank",rel:"noopener"},"Learn Linux in 5 Days")])],-1),l3={__name:"8",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[o3,a3,i3]),_:1},16))}},r3=S(l3,[["__file","/@slidev/slides/8.md"]]),c3={class:"cover"},u3=Me({__name:"Cover",props:{bg:{default:"yellow"},fg:{default:"black"},fs:{default:"80px"}},setup(n,{emit:s}){const o=n;Ld(r=>({"759f654d-fs":z(l),"759f654d-bgcol":z(a),"759f654d-fgcol":z(i)})),L(E);const a=Ze(o,"bg",s),i=Ze(o,"fg",s),l=Ze(o,"fs",s);return(r,c)=>(b(),ie("div",c3,[jn(r.$slots,"default")]))}});const ct=S(u3,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/components/Cover.vue"]]),p3=e("p",null," ",-1),d3={__name:"9",setup(n){const s={};return L(E),(o,a)=>{const i=ct;return b(),C(D,P(O(s)),{default:v(()=>[p3,R(i,{fs:"100px"},{default:v(()=>[t(" Intro ")]),_:1})]),_:1},16)}}},m3=S(d3,[["__file","/@slidev/slides/9.md"]]),f3=e("h1",null,"Linux CLI",-1),h3=e("p",null,"Introduzione",-1),_3=e("ul",null,[e("li",null,"Unix e Linux hanno una lunga tradizione nel fornire degli ambienti grafici per le proprie versioni o distribuzioni."),e("li",null,"Oggi ci sono decine di ambienti desktop diversi per Linux, al contrario di 1 solo per Windows e MAC"),e("li",null,"Questo è legato a motivi storici e legato al concetto che ogni utente può scegliere veramente l’ambiente che preferisce ed è maggiormente congeniale per lui"),e("li",null,[t("Alcuni tra i più popolari ambienti desktop sono "),e("ul",null,[e("li",null,"Gnome"),e("li",null,"KDE"),e("li",null,"XFCE"),e("li",null,"LXQt"),e("li",null,"Cinnamon"),e("li",null,"Mate"),e("li",null,"Unit")])])],-1),g3={__name:"10",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[f3,h3,_3]),_:1},16))}},v3=S(g3,[["__file","/@slidev/slides/10.md"]]),b3={class:"banner"},k3=Me({__name:"Banner",props:{bg:{default:"green"},fg:{default:"yellow"},padding:{default:"10px"},mt:{default:"0px"},mb:{default:"0px"},ml:{default:"0px"},mr:{default:"0px"}},setup(n,{emit:s}){const o=n;Ld(p=>({"76049b2e-bgcol":z(a),"76049b2e-fgcol":z(i),"76049b2e-padding":z(l),"76049b2e-marginTop":z(r),"76049b2e-marginBottom":z(c),"76049b2e-marginLeft":p.marginLeft,"76049b2e-marginRight":z(u)})),L(E);const a=Ze(o,"bg",s),i=Ze(o,"fg",s),l=Ze(o,"padding",s),r=Ze(o,"mt",s),c=Ze(o,"mb",s),u=Ze(o,"mr",s);return(p,d)=>(b(),ie("div",b3,[jn(p.$slots,"default")]))}});const Jm=S(k3,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/components/Banner.vue"]]),x3=e("h1",null,"Linux CLI",-1),w3=e("p",null,"Esercitazioni",-1),y3=e("ul",null,[e("li",null,[t("Per svolgere le esercitazioni seguenti in modo sicuro e in modo riproducibile (tutti glistudenti hanno lo stesso ambiente) utilizziamo una tecnologia chiamta "),e("code",null,"Docker"),t(" (la vedremo in dettaglio in 5)")]),e("li",null,'Quindi le esercitazioni non le svogeremo direttamente sul PC, ma in un ambiente "virtuale" protetto e sicuro'),e("li",null,'In altre parole potremo sperimentare senza problemi e senza timore di "rompere" il PC'),e("li",null,'Qualsiasi cosa avviene nell’ambiente "virtuale" (container) NON ha impatto sul PC in uso')],-1),I3={__name:"11",setup(n){const s={};return L(E),(o,a)=>{const i=Tn("center"),l=Jm;return b(),C(D,P(O(s)),{default:v(()=>[x3,w3,y3,R(l,{mt:"30px",padding:"30px"},{default:v(()=>[R(i,null,{default:v(()=>[t(" SPERIMETATE CON TRANQUILLITA' ")]),_:1})]),_:1})]),_:1},16)}}},$3=S(I3,[["__file","/@slidev/slides/11.md"]]),L3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},C3=e("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),E3=[C3];function S3(n,s){return b(),ie("svg",L3,E3)}const R3={name:"ph-clipboard",render:S3},T3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},A3=e("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),M3=[A3];function z3(n,s){return b(),ie("svg",T3,M3)}const O3={name:"ph-check-circle",render:z3},P3=["title"],D3=Me({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(n){const s=n;L(E);const o=L(fo),a=L(ts),i=L(ho);function l(m=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",_=h.length;for(let w=0;w<m;w++)f.push(h.charAt(Math.floor(Math.random()*_)));return f.join("")}const r=J(),c=In();xt(()=>{const m=s.at==null?a==null?void 0:a.value.length:s.at,f=K(()=>i!=null&&i.value?s.ranges.length-1:Math.min(Math.max(0,((o==null?void 0:o.value)||0)-(m||0)),s.ranges.length-1)),h=K(()=>s.ranges[f.value]||"");if(s.ranges.length>=2&&!(i!=null&&i.value)){const _=l(),w=f0(s.ranges.length-1).map(y=>_+y);a!=null&&a.value&&(a.value.push(...w),qo(()=>w.forEach(y=>bl(a.value,y)),c))}xs(()=>{if(!r.value)return;const w=r.value.querySelector(".shiki-dark")?Array.from(r.value.querySelectorAll(".shiki")):[r.value];for(const y of w){const I=Array.from(y.querySelectorAll(".line")),$=Ym(I.length,h.value);if(I.forEach((k,M)=>{const T=$.includes(M+1);k.classList.toggle(Jt,!0),k.classList.toggle("highlighted",T),k.classList.toggle("dishonored",!T)}),s.maxHeight){const k=Array.from(y.querySelectorAll(".line.highlighted"));k.reduce((T,N)=>N.offsetHeight+T,0)>r.value.offsetHeight?k[0].scrollIntoView({behavior:"smooth",block:"start"}):k.length>0&&k[Math.round((k.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:p}=fv();function d(){var f,h;const m=(h=(f=r.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;m&&p(m)}return(m,f)=>{const h=O3,_=R3;return b(),ie("div",{ref_key:"el",ref:r,class:"slidev-code-wrapper relative group",style:tn({"max-height":s.maxHeight,"overflow-y":s.maxHeight?"scroll":void 0})},[jn(m.$slots,"default"),z(Re).codeCopy?(b(),ie("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:z(u)?"Copied":"Copy",onClick:f[0]||(f[0]=w=>d())},[z(u)?(b(),C(h,{key:0,class:"p-2 w-8 h-8"})):(b(),C(_,{key:1,class:"p-2 w-8 h-8"}))],8,P3)):we("v-if",!0)],4)}}}),ee=S(D3,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),N3=e("h1",null,"Linux CLI",-1),F3=e("p",null,"Esercitazioni",-1),j3=e("ul",null,[e("li",null,"Per eseguire ed entare nell’ambiente virtuale eseguite il seguente comando")],-1),K3=e("br",null,null,-1),H3=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"docker"),t(" run "),e("span",{class:"token parameter variable"},"-ti"),t(),e("span",{class:"token parameter variable"},"--rm"),t(" profmancusoa/linux-cli:latest")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("Unable to "),e("span",{class:"token function"},"find"),t(" image "),e("span",{class:"token string"},"'profmancusoa/linux-cli:latest'"),t(" locally")]),t(`
`),e("span",{class:"line"},"latest: Pulling from profmancusoa/linux-cli"),t(`
`),e("span",{class:"line"},"203e9cf21bd2: Pulling fs layer "),t(`
`),e("span",{class:"line"},"5c69d8c91484: Pulling fs layer "),t(`
`),e("span",{class:"line"},"d7c0c274ef0a: Pulling fs layer "),t(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},".."),t(".")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},".."),t(".")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("antonio"),e("span",{class:"token comment"},"#")])])],-1),W3={__name:"12",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[N3,F3,j3,K3,R(i,G({},{ranges:[""]}),{default:v(()=>[H3]),_:1},16)]),_:1},16)}}},B3=S(W3,[["__file","/@slidev/slides/12.md"]]),q3=e("h1",null,"Linux CLI",-1),V3=e("p",null,"Esercitazione cli_01",-1),U3=e("ul",null,[e("li",null,"Svolgere la seguente esercitazione (Quinz inclusi)")],-1),G3=e("br",null,null,-1),Y3=e("p",null,[e("a",{href:"https://linuxjourney.com/lesson/linux-history",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/linux-history")],-1),Q3=e("br",null,null,-1),Z3=e("ul",null,[e("li",null,"Domande agli studenti sul contenuto dell’esercitazione")],-1),J3={__name:"13",setup(n){const s={};return L(E),(o,a)=>{const i=Tn("center");return b(),C(D,P(O(s)),{default:v(()=>[q3,V3,U3,G3,R(i,null,{default:v(()=>[Y3]),_:1}),Q3,Z3]),_:1},16)}}},X3=S(J3,[["__file","/@slidev/slides/13.md"]]),e4=e("h1",null,"Linux CLI",-1),n4=e("p",null,"Introduzione",-1),t4=e("ul",null,[e("li",null,"Gli ambienti desktop sono molto evoluti e permettono all’utente di svolgere qualsiasi funzione necessaria durante l’utilizzo convenzionale del PC con Linux, esattamente come avviene per un utente Windows o Mac"),e("li",null,"Oggi un utente Desktop Linux non sente la mancanza di nessuno strumento disponibile su Windows o Mac"),e("li",null,[t("Tuttavia per quanto un’ambiente possa essere evoluto, per sfruttare al meglio e al massimo le funzionalità di un sistema Linux è necessario utilizzare uno strumento imprescindibile che si chiama "),e("code",null,"CLI")])],-1),s4=e("p",null,[e("span",{class:"cli",style:{"font-size":"3rem",margin:"70px auto","text-align":"center",display:"block",width:"85%",color:"#00fe00",background:"black","line-height":"4rem",height:"4rem"}},"Command Line Interface")],-1),o4={__name:"14",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[e4,n4,t4,s4]),_:1},16))}},a4=S(o4,[["__file","/@slidev/slides/14.md"]]),i4="/3/linux_cli/assets/cli_01-79073bdb.png",l4=e("h1",null,"Linux CLI",-1),r4=e("p",null,"Introduzione",-1),c4=e("img",{src:i4,width:"750",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),u4={__name:"15",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[l4,r4,c4]),_:1},16))}},p4=S(u4,[["__file","/@slidev/slides/15.md"]]),d4="/3/linux_cli/assets/cli_02-be67e48e.png",m4=e("h1",null,"Linux CLI",-1),f4=e("p",null,"Introduzione",-1),h4=e("ul",null,[e("li",null,"La Linea di Comando di Linux (Command Line Interface, CLI) è un’interfaccia testuale che consente agli utenti di comunicare direttamente con il sistema operativo Linux attraverso comandi testuali.")],-1),_4=e("img",{src:d4,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),g4={__name:"16",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[m4,f4,h4,_4]),_:1},16))}},v4=S(g4,[["__file","/@slidev/slides/16.md"]]),b4=e("h1",null,"Linux CLI",-1),k4=e("p",null,"Esercitazione cli_02",-1),x4=e("ul",null,[e("li",null,"Svolgere la seguente esercitazione (Quinz inclusi)")],-1),w4=e("br",null,null,-1),y4=e("p",null,[e("a",{href:"https://linuxjourney.com/lesson/kernel-overview",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/kernel-overview")],-1),I4=e("br",null,null,-1),$4=e("ul",null,[e("li",null,"Domande agli studenti sul contenuto dell’esercitazione")],-1),L4={__name:"17",setup(n){const s={};return L(E),(o,a)=>{const i=Tn("center");return b(),C(D,P(O(s)),{default:v(()=>[b4,k4,x4,w4,R(i,null,{default:v(()=>[y4]),_:1}),I4,$4]),_:1},16)}}},C4=S(L4,[["__file","/@slidev/slides/17.md"]]),E4=e("h1",null,"Linux CLI",-1),S4=e("p",null,"Introduzione",-1),R4=e("ul",null,[e("li",null,"A differenza delle interfacce grafiche, che utilizzano icone e finestre, la CLI richiede l’uso di comandi testuali per eseguire operazioni sul sistema."),e("li",null,[t("La CLI di Linux offre numerosi vantaggi, tra cui: "),e("ul",null,[e("li",null,[t("il controllo più preciso e potente sul sistema ("),e("em",null,"root mode"),t(")")]),e("li",null,[t("crea i tuoi comandi per risolvere i tuoi problemi ("),e("em",null,"god mode"),t(")")]),e("li",null,[t("l’automazione delle attività ripetitive ("),e("em",null,"Productive laziness - Do it right, do it once. That’s the lazy option."),t(")")]),e("li",null,"la possibilità di lavorare in ambienti in cui le interfacce grafiche non sono disponibili (server remoti, sistemi embedded)."),e("li",null,"maggior velocità, flessibilità ed efficienza")])])],-1),T4={__name:"18",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[E4,S4,R4]),_:1},16))}},A4=S(T4,[["__file","/@slidev/slides/18.md"]]),M4=e("p",null," ",-1),z4={__name:"19",setup(n){const s={};return L(E),(o,a)=>{const i=ct;return b(),C(D,P(O(s)),{default:v(()=>[M4,R(i,{fs:"100px"},{default:v(()=>[t(" Cenni Storici ")]),_:1})]),_:1},16)}}},O4=S(z4,[["__file","/@slidev/slides/19.md"]]),P4="/3/linux_cli/assets/cli_16-36df4747.png",D4=e("h1",null,"Linux CLI",-1),N4=e("p",null,"Breve Storia",-1),F4=e("ul",null,[e("li",null,[t("La "),e("em",null,"Bourne Shell"),t(" (sh) è stata originariamente sviluppata da Stephen Bourne mentre lavorava ai Bell Labs.")]),e("li",null,"Rilasciato nel 1979 nella versione Unix versione 7 distribuita a college e università."),e("li",null,[t("La "),e("code",null,"Bourne Again Shell"),t(" ("),e("strong",null,"bash"),t(") è stata scritta come sostituto gratuito e open source della Bourne Shell.")]),e("li",null,"Data la natura aperta di Bash, nel tempo è stata adottata come shell predefinita sulla maggior parte dei sistemi Linux."),e("li",null,[t("Esistono molte altre shell (csh, ksh) ed in epoca più moderna "),e("strong",null,"zsh"),t(" e "),e("strong",null,"fish")])],-1),j4=e("img",{src:P4,width:"800",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),K4={__name:"20",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[D4,N4,F4,j4]),_:1},16))}},H4=S(K4,[["__file","/@slidev/slides/20.md"]]),W4="/3/linux_cli/assets/cli_04-092808b1.png",B4=e("h1",null,"Linux CLI",-1),q4=e("img",{src:W4,width:"700",style:{margin:"auto",position:"relative",left:"0px",top:"-10px"}},null,-1),V4={__name:"21",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[B4,q4]),_:1},16))}},U4=S(V4,[["__file","/@slidev/slides/21.md"]]),G4="/3/linux_cli/assets/cli_03-dd7d6ef3.png",Y4=e("h1",null,"Linux CLI",-1),Q4=e("img",{src:G4,width:"600",style:{margin:"auto",position:"relative",left:"0px",top:"-10px"}},null,-1),Z4={__name:"22",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[Y4,Q4]),_:1},16))}},J4=S(Z4,[["__file","/@slidev/slides/22.md"]]),X4=e("p",null," ",-1),eL={__name:"23",setup(n){const s={};return L(E),(o,a)=>{const i=ct;return b(),C(D,P(O(s)),{default:v(()=>[X4,R(i,{fs:"100px"},{default:v(()=>[t(" Concetti Chiave ")]),_:1})]),_:1},16)}}},nL=S(eL,[["__file","/@slidev/slides/23.md"]]),tL="/3/linux_cli/assets/cli_05-ad4cc1fd.png",sL=e("h1",null,"Linux CLI",-1),oL=e("div",{style:{width:"50%"}},[e("p",null,"Ecco alcuni concetti chiave relativi alla CLI di Linux:"),e("ul",null,[e("li",null,[e("strong",null,"Terminale"),t(": Il terminale è l’ambiente in cui vengono inseriti i comandi. E’ un’applicazione che fornisce un’interfaccia testuale per interagire con il sistema operativo. Mostra un prompt, di solito indicato dal simbolo del dollaro ($) per gli utenti normali e dal cancelletto (#) per l’utente root con privilegi amministrativi.")]),e("li",null,[e("strong",null,"Comandi"),t(": I comandi sono le istruzioni testuali che vengono inserite nel terminale per eseguire azioni specifiche. Un comando è generalmente composto da un nome di comando seguito da argomenti e opzioni. Ad esempio, il comando ls -l elenca i file e le directory con dettagli.")])])],-1),aL=e("img",{src:tL,width:"450",style:{margin:"auto",position:"relative",left:"250px",top:"-450px"}},null,-1),iL={__name:"24",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[sL,oL,aL]),_:1},16))}},lL=S(iL,[["__file","/@slidev/slides/24.md"]]),rL=e("h1",null,"Linux CLI",-1),cL=e("p",null,"File System",-1),uL=e("div",{style:{width:"50%"}},[e("p",null,[e("strong",null,"File System"),t(":")]),e("ul",null,[e("li",null,"Linux organizza file e directory in una struttura ad albero chiamata file system."),e("li",null,'Il file system di Linux segue la filosofia "tutto è un file", che significa che anche le periferiche hardware sono rappresentate come file.')]),e("p",null,[e("strong",null,"Path"),t(":")]),e("ul",null,[e("li",null,"Il percorso è la posizione di un file o di una directory all’interno del File System."),e("li",null,"Il percorso assoluto inizia dalla radice del sistema (/)"),e("li",null,"Il percorso relativo si basa sulla posizione corrente.")])],-1),pL={style:{width:"50%",position:"relative",top:"-490px",left:"450px"}},dL=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("❯❯❯ tree "),e("span",{class:"token parameter variable"},"-L"),t(),e("span",{class:"token number"},"1"),t(" /")]),t(`
`),e("span",{class:"line"},"/"),t(`
`),e("span",{class:"line"},[t("├── bin -"),e("span",{class:"token operator"},">"),t(" usr/bin")]),t(`
`),e("span",{class:"line"},"├── boot"),t(`
`),e("span",{class:"line"},"├── dev"),t(`
`),e("span",{class:"line"},"├── etc"),t(`
`),e("span",{class:"line"},"├── home"),t(`
`),e("span",{class:"line"},[t("├── lib -"),e("span",{class:"token operator"},">"),t(" usr/lib")]),t(`
`),e("span",{class:"line"},[t("├── lib32 -"),e("span",{class:"token operator"},">"),t(" usr/lib32")]),t(`
`),e("span",{class:"line"},[t("├── lib64 -"),e("span",{class:"token operator"},">"),t(" usr/lib64")]),t(`
`),e("span",{class:"line"},[t("├── libx32 -"),e("span",{class:"token operator"},">"),t(" usr/libx32")]),t(`
`),e("span",{class:"line"},"├── lost+found"),t(`
`),e("span",{class:"line"},"├── media"),t(`
`),e("span",{class:"line"},"├── mnt"),t(`
`),e("span",{class:"line"},"├── opt"),t(`
`),e("span",{class:"line"},"├── proc"),t(`
`),e("span",{class:"line"},"├── root"),t(`
`),e("span",{class:"line"},"├── run"),t(`
`),e("span",{class:"line"},[t("├── sbin -"),e("span",{class:"token operator"},">"),t(" usr/sbin")]),t(`
`),e("span",{class:"line"},"├── srv"),t(`
`),e("span",{class:"line"},"├── sys"),t(`
`),e("span",{class:"line"},"├── tmp"),t(`
`),e("span",{class:"line"},"├── usr"),t(`
`),e("span",{class:"line"},"└── var"),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"22"),t(" directories, "),e("span",{class:"token number"},"0"),t(" files")])])],-1),mL={__name:"25",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[rL,cL,uL,e("div",pL,[R(i,G({},{ranges:[""]}),{default:v(()=>[dL]),_:1},16)])]),_:1},16)}}},fL=S(mL,[["__file","/@slidev/slides/25.md"]]),hL=e("h1",null,"Linux CLI",-1),_L=e("p",null,"File System",-1),gL=e("p",null,[e("strong",null,"/bin"),t(": è la directory che contiene i file binari, ovvero alcune applicazioni e programmi che è possibile eseguire. Troverai il programma ls menzionato sopra in questa directory, così come altri strumenti di base per creare e rimuovere file e directory, spostarli e così via.")],-1),vL=e("p",null,[e("strong",null,"/boot"),t(": contiene i file necessari per avviare il sistema. Il boot loader, il kernel etc… "),e("mark",null,"NON TOCCARE"),t(" Modificando i file contenuti in questa directory potresti non essere in grado di riavviare correttamente Linux")],-1),bL=e("p",null,[e("strong",null,"/dev"),t(": contiene i file dei dispositivi logici e HW (terminale, console, SSD, scheda video, scheda di rete, …). Molti di questi vengono generati all’avvio o addirittura al volo. Ad esempio, se colleghi una nuova webcam o una chiavetta USB al tuo computer, una nuova voce relativa al dispositivo verrà automaticamente visualizzata qui.")],-1),kL=e("p",null,[e("strong",null,"/etc"),t(": è la directory che contiene la maggior parte, se non tutti, i file di configurazione a livello di sistema. Ad esempio, i file che contengono il nome del tuo sistema, gli utenti e le loro password, i nomi delle macchine sulla tua rete e quando e dove dovrebbero essere montate le partizioni sui tuoi dischi rigidi sono tutti qui. E’ una directory da "),e("mark",null,"MANEGGIARE CON CURA"),t(".")],-1),xL={__name:"26",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[hL,_L,gL,vL,bL,kL]),_:1},16))}},wL=S(xL,[["__file","/@slidev/slides/26.md"]]),yL=e("h1",null,"Linux CLI",-1),IL=e("p",null,"File System",-1),$L=e("p",null,[e("strong",null,"/home"),t(": contiene le directory personali degli utenti del sistema. Normalmente il nome della directory coincide con il nome dell’utente (utente "),e("em",null,"antonio"),t(", home dir: "),e("em",null,"/home/antonio"),t(")")],-1),LL=e("p",null,[e("strong",null,"/lib o /usr/lib"),t(": contiene le librerie di sistema che permettono l’esecuzione degli applicativi, della shell ed in genere di tutti i programmi che girano sul PC. In breve contengono frammenti di codice utilizzati dalle applicazioni per disegnare finestre sul desktop, controllare le periferiche o inviare file al disco rigido.")],-1),CL=e("p",null,[t("Una sotto directory importantissima è "),e("em",null,"modules"),t(" contiene gli importantissimi moduli del kernel. I moduli del kernel sono driver che fanno funzionare cose come la scheda video, la scheda audio, il WiFi, la stampante e così via.")],-1),EL=e("p",null,[e("strong",null,"/media"),t(": è dove la memoria esterna verrà montata automaticamente quando la colleghi e provi ad accedervi (pendrive, dischi USB, schede SD, ecc.)")],-1),SL=e("p",null,[e("strong",null,"/mnt"),t(": luogo dove monterai manualmente i dispositivi di archiviazione o le partizioni.")],-1),RL={__name:"27",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[yL,IL,$L,LL,CL,EL,SL]),_:1},16))}},TL=S(RL,[["__file","/@slidev/slides/27.md"]]),AL=e("h1",null,"Linux CLI",-1),ML=e("p",null,"File System",-1),zL=e("p",null,[e("strong",null,"/opt"),t(": contiene tradizionalmente il software opzionale, non di sistema, spesso quello installato dall’utente. Le applicazioni finiranno nella directory /opt/bin e le librerie nella directory /opt/lib.")],-1),OL=e("p",null,"Un’altra directory in cui finiscono applicazioni opzionali e librerie è /usr/local. Quando il software viene installato qui, ci saranno anche le directory /usr/local/bin e /usr/local/lib. Ciò che determina quale software va dove è il modo in cui gli sviluppatori hanno configurato i file che controllano il processo di compilazione e installazione.",-1),PL=e("p",null,[e("strong",null,"/proc"),t(": come /dev, è una directory virtuale. Contiene informazioni sul tuo computer, come informazioni sulla CPU, sul kernel su cui è in esecuzione il tuo sistema Linux, sui processi che stanno girando, sulla rete, … Come con /dev, i file e le directory vengono generati all’avvio del computer o al volo, mentre il sistema è in esecuzione e le cose cambiano.")],-1),DL=e("p",null,[e("strong",null,"/root"),t(": è la directory home del "),e("strong",null,"superutente"),t(),e("mark",null,"root"),t(' (noto anche come "Amministratore") del sistema. È separato dal resto delle directory home degli utenti in quanto non è un utente normale.')],-1),NL={__name:"28",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[AL,ML,zL,OL,PL,DL]),_:1},16))}},FL=S(NL,[["__file","/@slidev/slides/28.md"]]),jL=e("h1",null,"Linux CLI",-1),KL=e("p",null,"File System",-1),HL=e("p",null,[e("strong",null,"/run"),t(": è una directory utilizzata dai processi di sistema per archiviare dati temporanei utili all’esecuzione. Questa è un’altra di quelle cartelle da "),e("mark",null,"NON TOCCARE"),t(".")],-1),WL=e("p",null,[e("strong",null,"/sbin o /usr/bin"),t(": è simile a /bin, ma contiene applicazioni di cui avrà bisogno solo il superutente (da qui la "),e("strong",null,"s"),t(" iniziale). Pertanto le applicazioni qui contenute possono essere eseguite solo da root o dagli utenti a cui viene concesso un permesso temporaneo. Come puoi immaginare, alcune di queste istruzioni sono letali se le usi in modo improprio, quindi "),e("mark",null,"MANEGGIALE CON CURA"),t(".")],-1),BL=e("p",null,[e("strong",null,"/srv"),t(": la directory contiene dati per i server. Oggi tendenzialmente vuota.")],-1),qL=e("p",null,[e("strong",null,"/sys"),t(": è un’altra directory virtuale come /proc e /dev e contiene anche informazioni dai dispositivi collegati al tuo computer.")],-1),VL=e("p",null,[t("In alcuni casi puoi anche manipolare questi dispositivi. Posso, ad esempio, cambiare la luminosità dello schermo del mio portatile modificando il valore memorizzato in /sys/devices/pci0000:00/0000:00:02.0/drm/card0/card0-eDP-1/intel_backlight.Anche per questa directory è consigliato di "),e("mark",null,"NON TOCCARE"),t(" finché non sei sicuro di sapere esattamente cosa stai facendo.")],-1),UL={__name:"29",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[jL,KL,HL,WL,BL,qL,VL]),_:1},16))}},GL=S(UL,[["__file","/@slidev/slides/29.md"]]),YL=e("h1",null,"Linux CLI",-1),QL=e("p",null,"File System",-1),ZL=e("p",null,[e("strong",null,"/tmp"),t(": contiene file temporanei, solitamente inseriti lì dalle applicazioni in esecuzione. I file e le directory spesso contengono dati di cui un’applicazione non ha bisogno in questo momento, ma che potrebbe aver bisogno in seguito. Puoi anche usare /tmp per archiviare i tuoi file temporanei: /tmp è una delle poche directory appese / con cui puoi effettivamente interagire senza diventare superutente.")],-1),JL=e("p",null,[e("strong",null,"/usr"),t(": conteneva le directory utente quando /home non esisteva. Al giorno d’oggi, /usr contiene un miscuglio di directory che a loro volta contengono applicazioni, librerie, documentazione, sfondi, icone e un lungo elenco di altre cose che devono essere condivise da applicazioni e servizi.")],-1),XL=e("p",null,[e("strong",null,"/var"),t(": è stato originariamente dato questo nome perché il suo contenuto era considerato variabile, nel senso che cambiava frequentemente. Oggi è un termine un po’ improprio perché ci sono molte altre directory che contengono dati che cambiano frequentemente, soprattutto le directory virtuali che abbiamo visto sopra. Comunque sia, /var contiene cose come i log di sistema e delle applicazioni, lo spool della stampante, ed altri tipi di dati. Alcuni web server impostano la document root di default in /var/www")],-1),e6={__name:"30",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[YL,QL,ZL,JL,XL]),_:1},16))}},n6=S(e6,[["__file","/@slidev/slides/30.md"]]),t6="/3/linux_cli/assets/cli_06-72f0f737.png",s6=e("h1",null,"Linux CLI",-1),o6=e("p",null,"File System",-1),a6=e("div",{style:{width:"50%"}},[e("p",null,[t("Il percorse "),e("code",null,"ASSOLUTO"),t(" del file "),e("em",null,"README.md"),t(" è:")]),e("p",null,[e("code",null,"/home/antonio/SARP/README.md")]),e("ul",null,[e("li",null,[e("strong",null,"/"),t(" ("),e("em",null,"root directory, radice dell’albero del filesystem"),t(")")]),e("li",null,[e("strong",null,"home"),t(": sotto directory di /")]),e("li",null,[e("strong",null,"antonio"),t(": sotto directory di home")]),e("li",null,[e("strong",null,"SARP"),t(": sotto directory di antonio")]),e("li",null,[e("strong",null,"README.md"),t(": file di testo ("),e("em",null,"foglia dell’albero"),t(")")])])],-1),i6=e("img",{src:t6,width:"450",style:{margin:"auto",position:"relative",left:"250px",top:"-350px"}},null,-1),l6={__name:"31",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[s6,o6,a6,i6]),_:1},16))}},r6=S(l6,[["__file","/@slidev/slides/31.md"]]),c6=e("h1",null,"Linux CLI",-1),u6=e("p",null,"File System",-1),p6=e("p",null,[t("In ogni directory ci sono due directory speciali "),e("code",null,"."),t(" e "),e("code",null,"..")],-1),d6=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("❯❯❯ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t("                           ")]),t(`
`),e("span",{class:"line"},[t("totale "),e("span",{class:"token number"},"1836")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t("  "),e("span",{class:"token number"},"1"),t(),e("span",{class:"token number"},"14"),t(":48 "),e("span",{class:"token builtin class-name"},"."),t("  "),e("span",{class:"token operator"},"<"),t("------ directory corrente")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"3"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(" ago "),e("span",{class:"token number"},"16"),t(),e("span",{class:"token number"},"15"),t(":18 "),e("span",{class:"token punctuation"},".."),t(),e("span",{class:"token operator"},"<"),t("------ directory precedente")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio "),e("span",{class:"token number"},"119686"),t(" ago "),e("span",{class:"token number"},"29"),t(),e("span",{class:"token number"},"10"),t(":29 c_01.jpg")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio  "),e("span",{class:"token number"},"73756"),t(" ago "),e("span",{class:"token number"},"29"),t(),e("span",{class:"token number"},"10"),t(":29 c_02.jpg")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio  "),e("span",{class:"token number"},"25078"),t(" ago "),e("span",{class:"token number"},"29"),t(),e("span",{class:"token number"},"10"),t(":29 c_03.jpg")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio "),e("span",{class:"token number"},"699558"),t(" ago "),e("span",{class:"token number"},"16"),t(),e("span",{class:"token number"},"16"),t(":11 cli_00.png")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio "),e("span",{class:"token number"},"108107"),t(" ago "),e("span",{class:"token number"},"16"),t(),e("span",{class:"token number"},"16"),t(":29 cli_01.png")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio  "),e("span",{class:"token number"},"79049"),t(" ago "),e("span",{class:"token number"},"29"),t(),e("span",{class:"token number"},"10"),t(":42 cli_02.png")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio "),e("span",{class:"token number"},"119269"),t(" ago "),e("span",{class:"token number"},"29"),t(),e("span",{class:"token number"},"11"),t(":02 cli_03.png")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio "),e("span",{class:"token number"},"177065"),t(" ago "),e("span",{class:"token number"},"29"),t(),e("span",{class:"token number"},"11"),t(":22 cli_04.png")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio  "),e("span",{class:"token number"},"60778"),t(" ago "),e("span",{class:"token number"},"29"),t(),e("span",{class:"token number"},"11"),t(":37 cli_05.png")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio  "),e("span",{class:"token number"},"54990"),t(),e("span",{class:"token builtin class-name"},"set"),t("  "),e("span",{class:"token number"},"1"),t(),e("span",{class:"token number"},"14"),t(":40 cli_06.png")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio  "),e("span",{class:"token number"},"55905"),t(),e("span",{class:"token builtin class-name"},"set"),t("  "),e("span",{class:"token number"},"1"),t(),e("span",{class:"token number"},"14"),t(":46 cli_07.png")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio  "),e("span",{class:"token number"},"41286"),t(),e("span",{class:"token builtin class-name"},"set"),t("  "),e("span",{class:"token number"},"1"),t(),e("span",{class:"token number"},"14"),t(":48 cli_08.png")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio "),e("span",{class:"token number"},"222693"),t(" ago "),e("span",{class:"token number"},"29"),t(),e("span",{class:"token number"},"10"),t(":24 cover.png")])])],-1),m6={__name:"32",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[c6,u6,p6,R(i,G({},{ranges:[""]}),{default:v(()=>[d6]),_:1},16)]),_:1},16)}}},f6=S(m6,[["__file","/@slidev/slides/32.md"]]),h6="/3/linux_cli/assets/cli_07-8bb6e8e1.png",_6=e("h1",null,"Linux CLI",-1),g6=e("p",null,"File System",-1),v6=e("div",{style:{width:"50%"}},[e("p",null,[t("Il percorse "),e("code",null,"RELATIVO"),t(" alla home del file "),e("em",null,"README.md"),t(" è:")]),e("p",null,[e("code",null,"./SARP/README.md"),t(" o "),e("code",null,"SARP/README.md")]),e("ul",null,[e("li",null,[e("strong",null,"/"),t(" ("),e("em",null,"root directory, radice dell’albero del filesystem"),t(")")]),e("li",null,[e("strong",null,"home"),t(": sotto directory di /")]),e("li",null,[e("strong",null,"antonio"),t(": sotto directory di home")]),e("li",null,[e("strong",null,"SARP"),t(": sotto directory di antonio")]),e("li",null,[e("strong",null,"README.md"),t(": file di testo ("),e("em",null,"foglia dell’albero"),t(")")])])],-1),b6=e("img",{src:h6,width:"450",style:{margin:"auto",position:"relative",left:"250px",top:"-370px"}},null,-1),k6={__name:"33",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[_6,g6,v6,b6]),_:1},16))}},x6=S(k6,[["__file","/@slidev/slides/33.md"]]),w6=e("h1",null,"Linux CLI",-1),y6=e("p",null,"Esercitazione cli_03",-1),I6=e("ul",null,[e("li",null,"Svolgere la seguente esercitazione (Quinz inclusi)")],-1),$6=e("br",null,null,-1),L6=e("p",null,[e("a",{href:"https://linuxjourney.com/lesson/filesystem-hierarchy",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/filesystem-hierarchy")],-1),C6=e("br",null,null,-1),E6=e("ul",null,[e("li",null,"Svolgere solo i primi 4 punti"),e("li",null,"Domande agli studenti sul contenuto dell’esercitazione")],-1),S6={__name:"34",setup(n){const s={};return L(E),(o,a)=>{const i=Tn("center");return b(),C(D,P(O(s)),{default:v(()=>[w6,y6,I6,$6,R(i,null,{default:v(()=>[L6]),_:1}),C6,E6]),_:1},16)}}},R6=S(S6,[["__file","/@slidev/slides/34.md"]]),T6="/3/linux_cli/assets/cli_08-9461a39d.png",A6=e("h1",null,"Linux CLI",-1),M6=e("p",null," ",-1),z6=e("p",null,"Ecco alcuni concetti chiave relativi alla CLI di Linux:",-1),O6=e("ul",null,[e("li",null,[e("strong",null,"Utenti"),t(": Linux utilizza un sistema di autorizzazioni basato su "),e("code",null,"utenti"),t(" e "),e("code",null,"gruppi"),t(" univoci per controllare l’accesso ai file e alle risorse del sistema (ricorda "),e("em",null,"everything is a file"),t("). "),e("ul",null,[e("li",null,[t("L’utente "),e("strong",null,"root"),t(" ha privilegi amministrativi completi ("),e("em",null,"god"),t("), mentre gli utenti normali hanno "),e("strong",null,"accesso limitato"),t(".")]),e("li",null,"Ogni utente appartiene ad uno o più gruppi")])])],-1),P6=e("img",{src:T6,width:"500",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),D6={__name:"35",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[A6,M6,z6,O6,P6]),_:1},16))}},N6=S(D6,[["__file","/@slidev/slides/35.md"]]),F6="/3/linux_cli/assets/cli_09-f59b3cee.png",j6=e("h1",null,"Linux CLI",-1),K6=e("ul",null,[e("li",null,[e("strong",null,"Permessi"),t(": Ogni gruppo ed ogni utente ha una serie di permessi su ogni risorsa (file). Con questo livello di granularità è possibile creare policy dei permessi molto dettagliate e garantire la sicurezza del sistema operativo ("),e("em",null,"es: non voglio che l’utente Jon possa leggere i miei file"),t(")")])],-1),H6=e("img",{src:F6,width:"950",style:{margin:"auto",position:"relative",left:"0px",top:"10px"}},null,-1),W6={__name:"36",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[j6,K6,H6]),_:1},16))}},B6=S(W6,[["__file","/@slidev/slides/36.md"]]),q6="/3/linux_cli/assets/cli_10-6d8791bc.png",V6=e("h1",null,"Linux CLI",-1),U6=e("img",{src:q6,width:"950",style:{margin:"auto",position:"relative",left:"0px",top:"80px"}},null,-1),G6={__name:"37",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[V6,U6]),_:1},16))}},Y6=S(G6,[["__file","/@slidev/slides/37.md"]]),Q6="/3/linux_cli/assets/cli_11-d5d854a8.png",Z6=e("h1",null,"Linux CLI",-1),J6=e("img",{src:Q6,width:"950",style:{margin:"auto",position:"relative",left:"0px",top:"50px"}},null,-1),X6={__name:"38",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[Z6,J6]),_:1},16))}},e5=S(X6,[["__file","/@slidev/slides/38.md"]]),n5=e("h1",null,"Linux CLI",-1),t5=e("p",null,"Esercitazione cli_04",-1),s5=e("ul",null,[e("li",null,"Svolgere la seguente esercitazione (Quinz inclusi)")],-1),o5=e("br",null,null,-1),a5=e("p",null,[e("a",{href:"https://linuxjourney.com/lesson/users-and-groups",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/users-and-groups")],-1),i5=e("br",null,null,-1),l5=e("ul",null,[e("li",null,"Domande agli studenti sul contenuto dell’esercitazione")],-1),r5={__name:"39",setup(n){const s={};return L(E),(o,a)=>{const i=Tn("center");return b(),C(D,P(O(s)),{default:v(()=>[n5,t5,s5,o5,R(i,null,{default:v(()=>[a5]),_:1}),i5,l5]),_:1},16)}}},c5=S(r5,[["__file","/@slidev/slides/39.md"]]),u5=e("h1",null,"Linux CLI",-1),p5=e("p",null,"Esercitazione cli_05",-1),d5=e("ul",null,[e("li",null,"Svolgere la seguente esercitazione (Quinz inclusi)")],-1),m5=e("br",null,null,-1),f5=e("p",null,[e("a",{href:"https://linuxjourney.com/lesson/file-permissions",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/file-permissions")],-1),h5=e("br",null,null,-1),_5=e("ul",null,[e("li",null,"Svolgere i primi 3 punti"),e("li",null,"Domande agli studenti sul contenuto dell’esercitazione")],-1),g5={__name:"40",setup(n){const s={};return L(E),(o,a)=>{const i=Tn("center");return b(),C(D,P(O(s)),{default:v(()=>[u5,p5,d5,m5,R(i,null,{default:v(()=>[f5]),_:1}),h5,_5]),_:1},16)}}},v5=S(g5,[["__file","/@slidev/slides/40.md"]]),b5=e("h1",null,"Linux CLI",-1),k5=e("p",null," ",-1),x5=e("p",null,"Ecco alcuni concetti chiave relativi alla CLI di Linux:",-1),w5=e("p",null,[e("strong",null,"Completamento del Tab"),t(": Puoi premere il tasto Tab per completare automaticamente nomi di file, directory e comandi. Questa funzionalità aiuta a risparmiare tempo e riduce gli errori di battitura.")],-1),y5=e("p",null,[t("In shell moderne come "),e("em",null,"zsh"),t(" e "),e("em",null,"fish"),t(" il tab può anche completare i comandi e il manuale di sistema")],-1),I5={__name:"41",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[b5,k5,x5,w5,y5]),_:1},16))}},$5=S(I5,[["__file","/@slidev/slides/41.md"]]),L5="/3/linux_cli/assets/cli_12-d3515f38.gif",C5=e("h1",null,"Linux CLI",-1),E5=e("img",{src:L5,width:"700",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),S5={__name:"42",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[C5,E5]),_:1},16))}},R5=S(S5,[["__file","/@slidev/slides/42.md"]]),T5=e("h1",null,"Linux CLI",-1),A5=e("p",null," ",-1),M5=e("p",null,"Ecco alcuni concetti chiave relativi alla CLI di Linux:",-1),z5=e("p",null,[e("strong",null,"Redirezione"),t(": Puoi redirigere l’output di un comando su file file utilizzando i simboli > o >>")],-1),O5=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"echo"),t(),e("span",{class:"token string"},'"ciao io sono Linux"')]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},"ciao io sono Linux"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"echo"),t(),e("span",{class:"token string"},'"ciao io sono Linux"'),t(),e("span",{class:"token operator"},">"),t(" file.txt")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" file.txt")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio "),e("span",{class:"token number"},"19"),t(),e("span",{class:"token builtin class-name"},"set"),t("  "),e("span",{class:"token number"},"3"),t(),e("span",{class:"token number"},"17"),t(":57 file.txt")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"more"),t(" file.txt")]),t(`
`),e("span",{class:"line"},"ciao io sono Linux"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"echo"),t(),e("span",{class:"token string"},'"ed io sono Babbo Natale"'),t(),e("span",{class:"token operator"},">>"),t(" file.txt")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"more"),t(" file.txt ")]),t(`
`),e("span",{class:"line"},"ciao io sono Linux"),t(`
`),e("span",{class:"line"},"ed io sono Babbo Natale")])],-1),P5={__name:"43",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[T5,A5,M5,z5,R(i,G({},{ranges:[""]}),{default:v(()=>[O5]),_:1},16)]),_:1},16)}}},D5=S(P5,[["__file","/@slidev/slides/43.md"]]),N5=e("p",null," ",-1),F5={__name:"44",setup(n){const s={};return L(E),(o,a)=>{const i=ct;return b(),C(D,P(O(s)),{default:v(()=>[N5,R(i,{fs:"100px"},{default:v(()=>[t(" La Fisolofia Unix ")]),_:1})]),_:1},16)}}},j5=S(F5,[["__file","/@slidev/slides/44.md"]]),K5="/3/linux_cli/assets/cli_12-63718bf4.png",H5=e("h1",null,"Linux CLI",-1),W5=e("img",{src:K5,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"100px"}},null,-1),B5={__name:"45",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[H5,W5]),_:1},16))}},q5=S(B5,[["__file","/@slidev/slides/45.md"]]),V5="/3/linux_cli/assets/cli_13-758ca9e1.png",U5=e("h1",null,"Linux CLI",-1),G5=e("p",null,"Filosofia Linux",-1),Y5=e("p",null,[e("a",{href:"http://www.catb.org/esr/writings/taoup/html/ch01s06.html",target:"_blank",rel:"noopener"},"La filosofia di Unix"),t(" (in inglese: Unix philosophy) è una metodologia di sviluppo del software proposta nel 1969 da Ken Thompson e adottata dagli sviluppatori del sistema operativo Unix e Linux")],-1),Q5=e("br",null,null,-1),Z5=e("img",{src:V5,width:"250",style:{margin:"auto",position:"relative",left:"0px",top:"10px"}},null,-1),J5={__name:"46",setup(n){const s={};return L(E),(o,a)=>{const i=Jm;return b(),C(D,P(O(s)),{default:v(()=>[U5,G5,Y5,Q5,R(i,{padding:"30px"},{default:v(()=>[t(" Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams, because that is a universal interface. (Doug McIlroy) ")]),_:1}),Z5]),_:1},16)}}},X5=S(J5,[["__file","/@slidev/slides/46.md"]]),eC=e("p",null," ",-1),nC={__name:"47",setup(n){const s={};return L(E),(o,a)=>{const i=ct;return b(),C(D,P(O(s)),{default:v(()=>[eC,R(i,{fs:"100px"},{default:v(()=>[t(" Le Pipe ")]),_:1})]),_:1},16)}}},tC=S(nC,[["__file","/@slidev/slides/47.md"]]),sC=e("h1",null,"Linux CLI",-1),oC=e("p",null," ",-1),aC=e("p",null,[e("strong",null,"Pipe"),t(": (Doug McIlroy) La pipe "),e("code",null,"|"),t(" permette di concatenare più comandi shell insieme per creare un nuovo comando che risolve un problema specifico. Il concetto è che l’output di un programma viene utilizzato come input di un altro comando. Questo concetto è un meccanismo "),e("strong",null,"POTENTISSIMO"),t(" che rende la CLI di Unix/Linux infinitamente potente e flessibile")],-1),iC=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file.txt")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"5")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")])])],-1),lC={__name:"48",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[sC,oC,aC,R(i,G({},{ranges:[""]}),{default:v(()=>[iC]),_:1},16)]),_:1},16)}}},rC=S(lC,[["__file","/@slidev/slides/48.md"]]),cC="/3/linux_cli/assets/cli_14-68d0e0fd.png",uC=e("h1",null,"Linux CLI",-1),pC=e("p",null," ",-1),dC=e("p",null,[e("strong",null,"Domanda"),t(": Qual’è il comando che mi permette di ottenere una lista di numeri univoci ordinati in senso crescete partendo da file.txt? "),e("strong",null,"Risposta"),t(": NON ESISTE")],-1),mC=e("p",null,"Ma niente paura, possiamo creare noi stessi questo comando a partire da comandi esistenti e quindi risolvere il problema. Una volta appreso questo concetto, si dimostrerà un meccanismo incredibilmente potente",-1),fC=e("img",{src:cC,width:"850",style:{margin:"auto",position:"relative",left:"0px",top:"10px"}},null,-1),hC={__name:"49",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[uC,pC,dC,mC,fC]),_:1},16))}},_C=S(hC,[["__file","/@slidev/slides/49.md"]]),gC="/3/linux_cli/assets/cli_15-17e5f5b0.png",vC=e("h1",null,"Linux CLI",-1),bC=e("p",null," ",-1),kC=e("ul",null,[e("li",null,"Proviamo ad implementare la pipeline descritta prima con comandi linux"),e("li",null,[t("La prima cosa dobbiamo leggere il file, quindi usiamo il comando "),e("code",null,"cat"),t(" che prende in input il nome del file e genera in output la lettura del file")]),e("li",null,[t("Questo output (lista di numeri non ordinati e duplicati) viene preso in input dal comando "),e("code",null,"sort"),t(" che in output produce l’input ma ordinato")]),e("li",null,[t("A questo punto avremo una lista di numeri ordinati ma ancora duplicati, quindi forniamo questa lista in input al comando "),e("code",null,"uniq"),t(" che in output rimuove tutti i numeri duplicati")]),e("li",null,"In questo modo all’output della pipeline avremo una lista di numeri ordinati ed univoci, che è esattamente la soluzione al problema posto")],-1),xC=e("img",{src:gC,width:"500",style:{margin:"auto",position:"relative",left:"100px",top:"-40px"}},null,-1),wC={__name:"50",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[vC,bC,kC,xC]),_:1},16))}},yC=S(wC,[["__file","/@slidev/slides/50.md"]]),IC=e("h1",null,"Linux CLI",-1),$C=e("p",null," ",-1),LC=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file.txt  "),e("span",{class:"token comment"},"# prende in input il file e in output lo stampa")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"5")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")])])],-1),CC={__name:"51",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[IC,$C,R(i,G({},{ranges:[""]}),{default:v(()=>[LC]),_:1},16)]),_:1},16)}}},EC=S(CC,[["__file","/@slidev/slides/51.md"]]),SC=e("h1",null,"Linux CLI",-1),RC=e("p",null," ",-1),TC=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# l'output di cat viene usato come input da sort che in output stampa il file ordinato")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file.txt "),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"sort"),t()]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"5")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")])])],-1),AC={__name:"52",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[SC,RC,R(i,G({},{ranges:[""]}),{default:v(()=>[TC]),_:1},16)]),_:1},16)}}},MC=S(AC,[["__file","/@slidev/slides/52.md"]]),zC=e("h1",null,"Linux CLI",-1),OC=e("p",null," ",-1),PC=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# l'output ordinato di sort viene preso in input da uniq che in output elimina le occorrenze multiple")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file.txt "),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"sort"),t(),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"uniq")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"5")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")])])],-1),DC={__name:"53",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[zC,OC,R(i,G({},{ranges:[""]}),{default:v(()=>[PC]),_:1},16)]),_:1},16)}}},NC=S(DC,[["__file","/@slidev/slides/53.md"]]),FC=e("h1",null,"Linux CLI",-1),jC=e("p",null," ",-1),KC=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# l'output della pipeline viene rediretto e quindi scritto sul file file_ord.txt")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file.txt "),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"sort"),t(),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"uniq"),t(),e("span",{class:"token operator"},">"),t(" file_ord.txt")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file_ord.txt ")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"5")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# quindi in ingresso alla pipeline abbiamo il file di numeri  non ordinati e duplicati")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# in uscita abbiamo la lista di numeri ordinati e de-duplicati")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# abbiamo così creato un nuovo comando che risolve esattamente il nostro problema")])])],-1),HC={__name:"54",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[FC,jC,R(i,G({},{ranges:[""]}),{default:v(()=>[KC]),_:1},16)]),_:1},16)}}},WC=S(HC,[["__file","/@slidev/slides/54.md"]]),BC=e("h1",null,"Linux CLI",-1),qC=e("p",null," ",-1),VC=e("ul",null,[e("li",null,[t("La CLI di Linux offre una vasta gamma di comandi per eseguire varie attività, tra cui: "),e("ul",null,[e("li",null,"la navigazione del sistema di file"),e("li",null,"la gestione dei processi"),e("li",null,"la configurazione di rete"),e("li",null,"la gestione degli utenti"),e("li",null,"…e molto altro.")])])],-1),UC=e("p",null,"Vediamo ora i principali comandi base per poter iniziare ad usare Linux in modo efficiente ed agevole dalla linea di comando",-1),GC={__name:"55",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[BC,qC,VC,UC]),_:1},16))}},YC=S(GC,[["__file","/@slidev/slides/55.md"]]),QC=e("h1",null,"Linux CLI",-1),ZC=e("p",null,"Sintassi Generale",-1),JC=e("ul",null,[e("li",null,"I comandi possono essere eseguiti da soli o possono accettare argomenti per alterarne il comportamento.")],-1),XC=e("p",null,"Una sintassi tipica può essere simile a questa:",-1),e9=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("comando "),e("span",{class:"token punctuation"},"["),t("-argomento"),e("span",{class:"token punctuation"},"]"),t(),e("span",{class:"token punctuation"},"["),t("--argomento-lungo"),e("span",{class:"token punctuation"},"]"),t(),e("span",{class:"token function"},"file")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-l"),t(),e("span",{class:"token parameter variable"},"-a"),t(" - h")])])],-1),n9=e("br",null,null,-1),t9=e("ul",null,[e("li",null,[e("strong",null,"ls"),t(" è il nome del comando (list)")]),e("li",null,"-l è un parametro che modifica l’output di ls in modo da visualizzare una lista di file uno per ogni riga"),e("li",null,"-a è un parametro che indica ad ls di far vedere tutti i file anche quelli nascosti (come . e …)"),e("li",null,"-h è un parametro che dice a ls di visualizzare un output facilmente leggibile da un umano(stampa la dimensione del file in un formato leggibile dall’uomo)")],-1),s9={__name:"56",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[QC,ZC,JC,XC,R(i,G({},{ranges:[""]}),{default:v(()=>[e9]),_:1},16),n9,t9]),_:1},16)}}},o9=S(s9,[["__file","/@slidev/slides/56.md"]]),a9=e("p",null," ",-1),i9={__name:"57",setup(n){const s={};return L(E),(o,a)=>{const i=ct;return b(),C(D,P(O(s)),{default:v(()=>[a9,R(i,{fs:"100px"},{default:v(()=>[t(" Indice dei Comandi ")]),_:1})]),_:1},16)}}},l9=S(i9,[["__file","/@slidev/slides/57.md"]]),r9="/3/linux_cli/assets/cli_17-cc02eb38.png",c9=e("h1",null,"Linux CLI",-1),u9=e("img",{src:r9,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"-20px"}},null,-1),p9={__name:"58",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[c9,u9]),_:1},16))}},d9=S(p9,[["__file","/@slidev/slides/58.md"]]),m9="/3/linux_cli/assets/cli_18-9dbf9d0f.png",f9=e("h1",null,"Linux CLI",-1),h9=e("img",{src:m9,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"-20px"}},null,-1),_9={__name:"59",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[f9,h9]),_:1},16))}},g9=S(_9,[["__file","/@slidev/slides/59.md"]]),v9="/3/linux_cli/assets/cli_19-379d852a.png",b9=e("h1",null,"Linux CLI",-1),k9=e("img",{src:v9,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),x9={__name:"60",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[b9,k9]),_:1},16))}},w9=S(x9,[["__file","/@slidev/slides/60.md"]]),y9="/3/linux_cli/assets/cli_20-d498d8d9.png",I9=e("h1",null,"Linux CLI",-1),$9=e("img",{src:y9,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),L9={__name:"61",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[I9,$9]),_:1},16))}},C9=S(L9,[["__file","/@slidev/slides/61.md"]]),E9=e("p",null," ",-1),S9={__name:"62",setup(n){const s={};return L(E),(o,a)=>{const i=ct;return b(),C(D,P(O(s)),{default:v(()=>[E9,R(i,{fs:"100px"},{default:v(()=>[t(" Comandi di uso generale ")]),_:1})]),_:1},16)}}},R9=S(S9,[["__file","/@slidev/slides/62.md"]]),T9=e("h1",null,"Linux CLI",-1),A9=e("p",null,"man - un’interfaccia ai manuali di riferimento in linea",-1),M9=e("ul",null,[e("li",null,[t("Il comando più importante di tutti è "),e("code",null,"man"),t(" che permette di accedere al manuale di sistema e di TUTTI i comandi")]),e("li",null,"E’ buona regola consultare SEMPRE il manuale per capire come funziona un comando, quali sono i suoi parametri e conoscere le particolarità del singolo comando")],-1),z9=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"man"),t(),e("span",{class:"token operator"},"<"),t("nome comando"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"man"),t(),e("span",{class:"token function"},"ls")]),t(`
`),e("span",{class:"line"},[t("LS"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),t("                                   User Commands                                   LS"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},"NAME"),t(`
`),e("span",{class:"line"},[t("       "),e("span",{class:"token function"},"ls"),t(" - list directory contents")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},"SYNOPSIS"),t(`
`),e("span",{class:"line"},[t("       "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token punctuation"},"["),t("OPTION"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},".."),t(". "),e("span",{class:"token punctuation"},"["),t("FILE"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},".."),t(".")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},"DESCRIPTION"),t(`
`),e("span",{class:"line"},[t("       List  information  about  the FILEs "),e("span",{class:"token punctuation"},"("),t("the current directory by default"),e("span",{class:"token punctuation"},")"),t(".  Sort entries ")]),t(`
`),e("span",{class:"line"},[t("       nor "),e("span",{class:"token parameter variable"},"--sort"),t(" is specified.")])])],-1),O9={__name:"63",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[T9,A9,M9,R(i,G({},{ranges:[""]}),{default:v(()=>[z9]),_:1},16)]),_:1},16)}}},P9=S(O9,[["__file","/@slidev/slides/63.md"]]),D9=e("h1",null,"Linux CLI",-1),N9=e("p",null,"man - un’interfaccia ai manuali di riferimento in linea",-1),F9=e("ul",null,[e("li",null,"Ecco alcuni parametri utili")],-1),j9=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},"-K: cerca e visualizza i manuali compatibili con la parola chiave"),t(`
`),e("span",{class:"line"},"-k: visualizza possibili comandi compatibili con la parola chiave")])],-1),K9=e("br",null,null,-1),H9=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"man"),t(),e("span",{class:"token parameter variable"},"-K"),t("  "),e("span",{class:"token string"},'"concatenate files"')]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"man"),t(),e("span",{class:"token parameter variable"},"-k"),t("  "),e("span",{class:"token string"},'"concatenate files"')]),t(`
`),e("span",{class:"line"},[e("span",{class:"token function"},"cat"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),t("              - concatenate files and print on the standard output")])])],-1),W9={__name:"64",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[D9,N9,F9,R(i,G({},{ranges:[""]}),{default:v(()=>[j9]),_:1},16),K9,R(i,G({},{ranges:[""]}),{default:v(()=>[H9]),_:1},16)]),_:1},16)}}},B9=S(W9,[["__file","/@slidev/slides/64.md"]]),q9=e("h1",null,"Linux CLI",-1),V9=e("p",null,"info - read Info documents",-1),U9=e("ul",null,[e("li",null,[t("Un’altro comando utilissimo per reperire informazione è "),e("code",null,"info"),t(".")]),e("li",null,"Si usa esattamente come man")],-1),G9=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ info "),e("span",{class:"token operator"},"<"),t("nome comando"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"},[t("$ info "),e("span",{class:"token function"},"ls")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"10.1"),t(" ‘ls’: List directory contents")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token operator"},"=="),e("span",{class:"token operator"},"=="),e("span",{class:"token operator"},"=="),e("span",{class:"token operator"},"=="),e("span",{class:"token operator"},"=="),e("span",{class:"token operator"},"=="),e("span",{class:"token operator"},"=="),e("span",{class:"token operator"},"=="),e("span",{class:"token operator"},"=="),e("span",{class:"token operator"},"=="),e("span",{class:"token operator"},"=="),e("span",{class:"token operator"},"=="),e("span",{class:"token operator"},"=="),e("span",{class:"token operator"},"=="),e("span",{class:"token operator"},"=="),e("span",{class:"token operator"},"=="),e("span",{class:"token operator"},"==")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("The ‘ls’ program lists information about files "),e("span",{class:"token punctuation"},"("),t("of any type, including")]),t(`
`),e("span",{class:"line"},[t("directories"),e("span",{class:"token punctuation"},")"),t(".  Options and "),e("span",{class:"token function"},"file"),t(" arguments can be intermixed arbitrarily,")]),t(`
`),e("span",{class:"line"},"as usual."),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},"   For non-option command-line arguments that are directories, by"),t(`
`),e("span",{class:"line"},"default ‘ls’ lists the contents of directories, not recursively, and"),t(`
`),e("span",{class:"line"},"omitting files with names beginning with ‘.’.  For other non-option"),t(`
`),e("span",{class:"line"},[t("arguments, by default ‘ls’ lists just the "),e("span",{class:"token function"},"file"),t(" name.  If no non-option")]),t(`
`),e("span",{class:"line"},"argument is specified, ‘ls’ operates on the current directory, acting as"),t(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"if"),t(" it had been invoked with a single argument of ‘.’.")])])],-1),Y9={__name:"65",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[q9,V9,U9,R(i,G({},{ranges:[""]}),{default:v(()=>[G9]),_:1},16)]),_:1},16)}}},Q9=S(Y9,[["__file","/@slidev/slides/65.md"]]),Z9=e("h1",null,"Linux CLI",-1),J9=e("p",null,"apropos - ricerca nei nomi e nelle descrizioni delle pagine di manuale",-1),X9=e("ul",null,[e("li",null,"Effettua una ricerca all’interno dei manuali. Molto utile quando non sappiamo esattamente il nome di un comando ma ne conosciamo il suo contesto.")],-1),eE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"apropos"),t(),e("span",{class:"token operator"},"<"),t("parole chiave"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"apropos"),t(),e("span",{class:"token string"},'"concatenate files"')]),t(`
`),e("span",{class:"line"},[e("span",{class:"token function"},"cat"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),t("              - concatenate files and print on the standard output")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"apropos"),t(),e("span",{class:"token string"},'"remove files"')]),t(`
`),e("span",{class:"line"},[t("git-rm "),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),t("           - Remove files from the working tree and from the index")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token function"},"rm"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),t("               - remove files or directories")])])],-1),nE=e("p",null,"Se apropos non trova nessun suggerimento potrebbe essere utile eseguire il seguente comando",-1),tE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sudo"),t(" mandb "),e("span",{class:"token parameter variable"},"-c")])])],-1),sE=e("p",null,"In questo modo si ricrea il DB per apropos",-1),oE={__name:"66",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[Z9,J9,X9,R(i,G({},{ranges:[""]}),{default:v(()=>[eE]),_:1},16),nE,R(i,G({},{ranges:[""]}),{default:v(()=>[tE]),_:1},16),sE]),_:1},16)}}},aE=S(oE,[["__file","/@slidev/slides/66.md"]]),iE=e("h1",null,"Linux CLI",-1),lE=e("p",null,"clear - clear the terminal screen",-1),rE=e("ul",null,[e("li",null,"Alle volte è utile svuotare e cancellare la finestra di terminale"),e("li",null,"Ciò si può ottenere con il comando clear")],-1),cE=e("br",null,null,-1),uE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"clear")])])],-1),pE=e("br",null,null,-1),dE=e("p",null,[t("Si può anche utilizzare uno shortcuts da tastiera che è "),e("code",null,"CTRL + L")],-1),mE={__name:"67",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[iE,lE,rE,cE,uE,pE,dE]),_:1},16))}},fE=S(mE,[["__file","/@slidev/slides/67.md"]]),hE=e("h1",null,"Linux CLI",-1),_E=e("p",null,"reset - terminal initialization",-1),gE=e("ul",null,[e("li",null,"In alcuni scenari clear può non essere efficace, quindi per resettare un terminale al suo stato iniziale possiamo usare il comando reset")],-1),vE=e("br",null,null,-1),bE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},"$ reset")])],-1),kE={__name:"68",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[hE,_E,gE,vE,R(i,G({},{ranges:[""]}),{default:v(()=>[bE]),_:1},16)]),_:1},16)}}},xE=S(kE,[["__file","/@slidev/slides/68.md"]]),wE=e("p",null," ",-1),yE={__name:"69",setup(n){const s={};return L(E),(o,a)=>{const i=ct;return b(),C(D,P(O(s)),{default:v(()=>[wE,R(i,{fs:"100px"},{default:v(()=>[t(" Filesystem ")]),_:1})]),_:1},16)}}},IE=S(yE,[["__file","/@slidev/slides/69.md"]]),$E=e("h1",null,"Linux CLI",-1),LE=e("p",null,"pwd - output the current working directory",-1),CE=e("ul",null,[e("li",null,[t("Per conosce l’attuale posizione nel filesystem, in altre parole per sapere in quale directory ci troviamo basta eseguire il comando "),e("strong",null,"pwd")])],-1),EE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"pwd")]),t(`
`),e("span",{class:"line"},"/home/antonio/tmp/SARP"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"pwd")]),t(`
`),e("span",{class:"line"},"/media/antonio/NAS")])],-1),SE={__name:"70",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[$E,LE,CE,R(i,G({},{ranges:[""]}),{default:v(()=>[EE]),_:1},16)]),_:1},16)}}},RE=S(SE,[["__file","/@slidev/slides/70.md"]]),TE=e("h1",null,"Linux CLI",-1),AE=e("p",null,"cd - change directory",-1),ME=e("ul",null,[e("li",null,"Permette di cambiare directory e quindi di spostarsi da una directory all’altra")],-1),zE=e("br",null,null,-1),OE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"cd"),t(),e("span",{class:"token operator"},"<"),t("percorso assoluto o relativo della directory destinazione"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"pwd")]),t(`
`),e("span",{class:"line"},"/home/antonio/tmp/SARP/src/routes"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"cd"),t(" tools/  "),e("span",{class:"token comment"},"# questo è un percorso relativo")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"pwd")]),t(`
`),e("span",{class:"line"},"/home/antonio/tmp/SARP/src/routes/tools"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"cd"),t(),e("span",{class:"token punctuation"},".."),t(),e("span",{class:"token comment"},"# torna indietro di una directory (o torna alla directory padre)")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"pwd"),t("                                                                    ")]),t(`
`),e("span",{class:"line"},"/home/antonio/tmp/SARP/src/routes"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"cd"),t(),e("span",{class:"token punctuation"},".."),t("/"),e("span",{class:"token punctuation"},".."),t(),e("span",{class:"token comment"},"# torna indietro di due livelli")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"pwd"),t("                                      ")]),t(`
`),e("span",{class:"line"},"/home/antonio/tmp/SARP")])],-1),PE={__name:"71",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[TE,AE,ME,zE,R(i,G({},{ranges:[""]}),{default:v(()=>[OE]),_:1},16)]),_:1},16)}}},DE=S(PE,[["__file","/@slidev/slides/71.md"]]),NE=e("h1",null,"Linux CLI",-1),FE=e("p",null,"cd - change directory",-1),jE=e("br",null,null,-1),KE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"cd"),t(),e("span",{class:"token comment"},"# torna alla HOME directory")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"pwd")]),t(`
`),e("span",{class:"line"},"/home/antonio"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"cd"),t(" /usr/bin "),e("span",{class:"token comment"},"# questo è un percorso assoluto")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"pwd")]),t(`
`),e("span",{class:"line"},"/usr/bin"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"cd"),t(" ~ "),e("span",{class:"token comment"},"# torna alla HOME directory")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"pwd")]),t(`
`),e("span",{class:"line"},"/home/antonio"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"cd"),t(" - "),e("span",{class:"token comment"},"# torna alla directory in cui eravamo prima")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"pwd")]),t(`
`),e("span",{class:"line"},"/usr/bin")])],-1),HE={__name:"72",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[NE,FE,jE,R(i,G({},{ranges:[""]}),{default:v(()=>[KE]),_:1},16)]),_:1},16)}}},WE=S(HE,[["__file","/@slidev/slides/72.md"]]),BE=e("h1",null,"Linux CLI",-1),qE=e("p",null,"ls - list directory contents",-1),VE=e("ul",null,[e("li",null,"Il comando ls (list) permette di vedere (listare) il contenuto della directory corrente o di una directory specifica")],-1),UE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token operator"},"<"),t("file"),e("span",{class:"token operator"},">"),t(" o "),e("span",{class:"token operator"},"<"),t("directory"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token comment"},"#list della directory corrente")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"151.101"),t(".242.137.00443-192.168   CMakeTools            index.html.5       recently-used.xbel")]),t(`
`),e("span",{class:"line"},[t(),e("span",{class:"token number"},"192.168"),t(".001.077.37480-151.101  Desktop               keyrings           regole01.jpg")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'2023-07-28 18-52-21.mkv'"),t("       desktop-directories   linked_list,h      report.html")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'2023-07-28 18-55-11.mkv'"),t("       Documents             linked_list.h      report.xml")]),t(`
`),e("span",{class:"line"}," Android                        Downloads             LocalSend-1.deb    scripts"),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'Android Open Source Project'"),t("   espedito.keys.asc     mime               static.key")]),t(`
`),e("span",{class:"line"}," android-studio                 espedito.pub.asc      mimeapps.list      TBR.pdf"),t(`
`),e("span",{class:"line"}," AndroidStudioProjects          evolution             msgFilterRules.dat Templates")])],-1),GE={__name:"73",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[BE,qE,VE,R(i,G({},{ranges:[""]}),{default:v(()=>[UE]),_:1},16)]),_:1},16)}}},YE=S(GE,[["__file","/@slidev/slides/73.md"]]),QE=e("h1",null,"Linux CLI",-1),ZE=e("p",null,"ls - list directory contents",-1),JE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(" /usr/bin/ "),e("span",{class:"token comment"},"# lista il contenuto della directory /usr/bin")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'['"),t("                                                gtscompare                         ppmtolj")]),t(`
`),e("span",{class:"line"}," 411toppm                                          gts-config                         ppmtomap"),t(`
`),e("span",{class:"line"}," aa-enabled                                        gtstemplate                        ppmtomitsu"),t(`
`),e("span",{class:"line"}," aa-exec                                           gucharmap                          ppmtompeg"),t(`
`),e("span",{class:"line"}," aa-features-abi                                   guestfish                          ppmtoneo"),t(`
`),e("span",{class:"line"}," ab                                                guestmount                         ppmtopcx"),t(`
`),e("span",{class:"line"}," aclocal                                           guestunmount                       ppmtopgm"),t(`
`),e("span",{class:"line"}," aclocal-1.16                                      gunzip                             ppmtopi1"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(" ~ "),e("span",{class:"token comment"},"# list della home directory")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"151.101"),t(".242.137.00443-192.168   CMakeTools            index.html.5       recently-used.xbel")]),t(`
`),e("span",{class:"line"},[t(),e("span",{class:"token number"},"192.168"),t(".001.077.37480-151.101  Desktop               keyrings           regole01.jpg")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'2023-07-28 18-52-21.mkv'"),t("       desktop-directories   linked_list,h      report.html")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'2023-07-28 18-55-11.mkv'"),t("       Documents             linked_list.h      report.xml")]),t(`
`),e("span",{class:"line"}," Android                        Downloads             LocalSend-1.deb    scripts"),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'Android Open Source Project'"),t("   espedito.keys.asc     mime               static.key")]),t(`
`),e("span",{class:"line"}," android-studio                 espedito.pub.asc      mimeapps.list      TBR.pdf"),t(`
`),e("span",{class:"line"}," AndroidStudioProjects          evolution             msgFilterRules.dat Templates")])],-1),XE={__name:"74",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[QE,ZE,R(i,G({},{ranges:[""]}),{default:v(()=>[JE]),_:1},16)]),_:1},16)}}},eS=S(XE,[["__file","/@slidev/slides/74.md"]]),nS=e("h1",null,"Linux CLI",-1),tS=e("p",null,"ls - list directory contents",-1),sS=e("ul",null,[e("li",null,"ls possiede 55 parametri e quindi è un comando molto complesso"),e("li",null,"tuttavia nella maggioranza dei casi ci servono solo 2 o 3 parametri"),e("li",null,"in queste situazioni l’uso del manuale è fondamentale")],-1),oS=e("p",null,"Ecco alcuni parametri utili",-1),aS=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("-1: lista il contenuto dei "),e("span",{class:"token function"},"file"),t(),e("span",{class:"token function"},"su"),t(" una singola colonna")]),t(`
`),e("span",{class:"line"},[t("-l: long list "),e("span",{class:"token function"},"format")]),t(`
`),e("span",{class:"line"},[t("-a: visualizza tutti i "),e("span",{class:"token function"},"file"),t(" anche quelli nascosti come "),e("span",{class:"token builtin class-name"},"."),t(" e "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},"-F: appende un indicatore per ogni entry indicandone il tipo"),t(`
`),e("span",{class:"line"},[t("-h: visualizza le dimensioni dei "),e("span",{class:"token function"},"file"),t(),e("span",{class:"token keyword"},"in"),t(" un formato utile per gli umani")]),t(`
`),e("span",{class:"line"},[t("-S: ordina per dimensione del "),e("span",{class:"token function"},"file"),t(),e("span",{class:"token keyword"},"in"),t(" ordine decrescente")]),t(`
`),e("span",{class:"line"},"-r: inverte l'ordine di visualizzazione")])],-1),iS={__name:"75",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[nS,tS,sS,oS,R(i,G({},{ranges:[""]}),{default:v(()=>[aS]),_:1},16)]),_:1},16)}}},lS=S(iS,[["__file","/@slidev/slides/75.md"]]),rS=e("h1",null,"Linux CLI",-1),cS=e("p",null,"ls - list directory contents",-1),uS=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-lah")]),t(`
`),e("span",{class:"line"},"totale 62M"),t(`
`),e("span",{class:"line"},[t("drwxr-xr-x  "),e("span",{class:"token number"},"95"),t(" antonio antonio  12K "),e("span",{class:"token builtin class-name"},"set"),t("  "),e("span",{class:"token number"},"4"),t(),e("span",{class:"token number"},"14"),t(":59  "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxr-xr-x   "),e("span",{class:"token number"},"5"),t(" root    root    "),e("span",{class:"token number"},"4"),t(",0K ago  "),e("span",{class:"token number"},"1"),t("  "),e("span",{class:"token number"},"2022"),t("  "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("-rw-r--r--   "),e("span",{class:"token number"},"1"),t(" root    root      "),e("span",{class:"token number"},"24"),t(" nov "),e("span",{class:"token number"},"13"),t("  "),e("span",{class:"token number"},"2022"),t("  "),e("span",{class:"token number"},"151.101"),t(".242.137.00443-192.168.001.077.37480")]),t(`
`),e("span",{class:"line"},[t("-rw-r--r--   "),e("span",{class:"token number"},"1"),t(" root    root      "),e("span",{class:"token number"},"24"),t(" nov "),e("span",{class:"token number"},"13"),t("  "),e("span",{class:"token number"},"2022"),t("  "),e("span",{class:"token number"},"192.168"),t(".001.077.37480-151.101.242.137.00443")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio "),e("span",{class:"token number"},"2"),t(",0M lug "),e("span",{class:"token number"},"28"),t(),e("span",{class:"token number"},"18"),t(":52 "),e("span",{class:"token string"},"'2023-07-28 18-52-21.mkv'")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio "),e("span",{class:"token number"},"7"),t(",3M lug "),e("span",{class:"token number"},"28"),t(),e("span",{class:"token number"},"18"),t(":55 "),e("span",{class:"token string"},"'2023-07-28 18-55-11.mkv'")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"6"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K giu  "),e("span",{class:"token number"},"4"),t("  "),e("span",{class:"token number"},"2022"),t("  .android")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"3"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K mar  "),e("span",{class:"token number"},"4"),t("  "),e("span",{class:"token number"},"2022"),t("  Android")]),t(`
`),e("span",{class:"line"},[t("drwx------   "),e("span",{class:"token number"},"3"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K mar  "),e("span",{class:"token number"},"4"),t("  "),e("span",{class:"token number"},"2022"),t(),e("span",{class:"token string"},"'Android Open Source Project'")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"7"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K mar  "),e("span",{class:"token number"},"4"),t("  "),e("span",{class:"token number"},"2022"),t("  android-studio")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"3"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K mar "),e("span",{class:"token number"},"14"),t("  "),e("span",{class:"token number"},"2022"),t("  AndroidStudioProjects")]),t(`
`),e("span",{class:"line"},[t("drwxr-xr-x  "),e("span",{class:"token number"},"48"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t("  "),e("span",{class:"token number"},"7"),t("  "),e("span",{class:"token number"},"2022"),t("  antonio")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio "),e("span",{class:"token number"},"5"),t(",1K "),e("span",{class:"token builtin class-name"},"set"),t("  "),e("span",{class:"token number"},"4"),t("  "),e("span",{class:"token number"},"2022"),t("  antonio.pub.asc")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio "),e("span",{class:"token number"},"2"),t(",4K "),e("span",{class:"token builtin class-name"},"set"),t("  "),e("span",{class:"token number"},"4"),t("  "),e("span",{class:"token number"},"2022"),t("  antonioy.pub.asc")]),t(`
`),e("span",{class:"line"},[t("drwxr-xr-x   "),e("span",{class:"token number"},"2"),t(" antonio staff   "),e("span",{class:"token number"},"4"),t(",0K ago "),e("span",{class:"token number"},"30"),t("  "),e("span",{class:"token number"},"2022"),t("  app")]),t(`
`),e("span",{class:"line"},[t("-rwxr-xr-x   "),e("span",{class:"token number"},"1"),t(" antonio antonio  "),e("span",{class:"token number"},"649"),t(" ago "),e("span",{class:"token number"},"12"),t("  "),e("span",{class:"token number"},"2022"),t("  appimagekit-openshot-qt.desktop")]),t(`
`),e("span",{class:"line"},[t("-rwxr-xr-x   "),e("span",{class:"token number"},"1"),t(" antonio antonio  "),e("span",{class:"token number"},"351"),t(" ago "),e("span",{class:"token number"},"12"),t("  "),e("span",{class:"token number"},"2022"),t("  appimagekit-shotcut.desktop")])])],-1),pS={__name:"76",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[rS,cS,R(i,G({},{ranges:[""]}),{default:v(()=>[uS]),_:1},16)]),_:1},16)}}},dS=S(pS,[["__file","/@slidev/slides/76.md"]]),mS=e("h1",null,"Linux CLI",-1),fS=e("p",null,"ls - list directory contents",-1),hS=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-lahFS")]),t(`
`),e("span",{class:"line"},"totale 62M"),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio  34M giu "),e("span",{class:"token number"},"10"),t("  "),e("span",{class:"token number"},"2022"),t("  aws.tgz")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio "),e("span",{class:"token number"},"8"),t(",5M giu  "),e("span",{class:"token number"},"2"),t(),e("span",{class:"token number"},"14"),t(":15  LocalSend-1.10.0-linux-x86-64.deb")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio "),e("span",{class:"token number"},"7"),t(",3M lug "),e("span",{class:"token number"},"28"),t(),e("span",{class:"token number"},"18"),t(":55 "),e("span",{class:"token string"},"'2023-07-28 18-55-11.mkv'")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio "),e("span",{class:"token number"},"3"),t(",6M lug "),e("span",{class:"token number"},"11"),t("  "),e("span",{class:"token number"},"2022"),t("  TBR.pdf")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio "),e("span",{class:"token number"},"3"),t(",4M nov "),e("span",{class:"token number"},"19"),t("  "),e("span",{class:"token number"},"2022"),t("  _HR.pdf")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio "),e("span",{class:"token number"},"2"),t(",0M lug "),e("span",{class:"token number"},"28"),t(),e("span",{class:"token number"},"18"),t(":52 "),e("span",{class:"token string"},"'2023-07-28 18-52-21.mkv'")]),t(`
`),e("span",{class:"line"},[t("-rw-------   "),e("span",{class:"token number"},"1"),t(" antonio antonio 488K "),e("span",{class:"token builtin class-name"},"set"),t("  "),e("span",{class:"token number"},"4"),t(),e("span",{class:"token number"},"10"),t(":33  .zsh_history")]),t(`
`),e("span",{class:"line"},[t("-rw-------   "),e("span",{class:"token number"},"1"),t(" antonio antonio 336K "),e("span",{class:"token builtin class-name"},"set"),t("  "),e("span",{class:"token number"},"4"),t(),e("span",{class:"token number"},"10"),t(":33  .bash_history")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"223"),t(" antonio antonio 236K "),e("span",{class:"token builtin class-name"},"set"),t("  "),e("span",{class:"token number"},"4"),t(" 08:46  tmp/ ----------"),e("span",{class:"token operator"},">"),t(" directory")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio 215K lug "),e("span",{class:"token number"},"17"),t(),e("span",{class:"token number"},"11"),t(":12  index.html.3")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio 215K lug "),e("span",{class:"token number"},"17"),t(),e("span",{class:"token number"},"11"),t(":13  index.html.4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio 194K lug "),e("span",{class:"token number"},"29"),t(),e("span",{class:"token number"},"17"),t(":52  index.html.5")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio 185K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"13"),t("  "),e("span",{class:"token number"},"2022"),t("  regole01.jpg")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio 136K lug "),e("span",{class:"token number"},"13"),t(),e("span",{class:"token number"},"15"),t(":56  package-lock.json")]),t(`
`),e("span",{class:"line"},[t("-rw-r--r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio  88K "),e("span",{class:"token builtin class-name"},"set"),t("  "),e("span",{class:"token number"},"5"),t("  "),e("span",{class:"token number"},"2022"),t("  report.html")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio  51K ago "),e("span",{class:"token number"},"22"),t(" 02:54  .zcompdump-asus-5.8.1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio  50K ago "),e("span",{class:"token number"},"29"),t(),e("span",{class:"token number"},"10"),t(":15  .zcompdump")])])],-1),_S={__name:"77",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[mS,fS,R(i,G({},{ranges:[""]}),{default:v(()=>[hS]),_:1},16)]),_:1},16)}}},gS=S(_S,[["__file","/@slidev/slides/77.md"]]),vS=e("h1",null,"Linux CLI",-1),bS=e("p",null,"alias",-1),kS=e("ul",null,[e("li",null,[t("Alle volte ricordarsi comandi lunghi come "),e("code",null,"ls -lahFSr"),t(" può essere poco conveniente")]),e("li",null,[t("Allora la shell ci viene in aiuto con il concetto di "),e("code",null,"alias")]),e("li",null,[t("Gli "),e("code",null,"alias"),t(" non è un comando, ma una funzionalità della shell")]),e("li",null,[t("Gli "),e("code",null,"alias"),t(" consentono di sostituire una stringa con una parola quando viene utilizzata come prima parola di un comando semplice")])],-1),xS=e("p",null,"Quindi ogni utente può creare tutti gli alias che desidera per rendersi la vita più semplice.",-1),wS=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"alias"),t(),e("span",{class:"token operator"},"<"),t("nome alias"),e("span",{class:"token operator"},">="),e("span",{class:"token operator"},"<"),t("comando"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"alias"),t(),e("span",{class:"token assign-left variable"},"lo"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'ls -lahFSr'")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"alias"),t(),e("span",{class:"token assign-left variable"},"l1"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'ls -1'")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token builtin class-name"},"alias"),t(),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"grep"),t(),e("span",{class:"token parameter variable"},"-E"),t(),e("span",{class:"token string"},"'^l1|^lo'")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token assign-left variable"},"l1"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'ls -1'")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token assign-left variable"},"lo"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'ls -lahFSr'")])])],-1),yS={__name:"78",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[vS,bS,kS,xS,R(i,G({},{ranges:[""]}),{default:v(()=>[wS]),_:1},16)]),_:1},16)}}},IS=S(yS,[["__file","/@slidev/slides/78.md"]]),$S=e("h1",null,"Linux CLI",-1),LS=e("p",null,"alias",-1),CS=e("ul",null,[e("li",null,"Quindi ora abbiamo due nuovi comandi (o alias) chiamati lo e l1 che possiamo usare esattamente come ogni altro comando linux")],-1),ES=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$  lo ----"),e("span",{class:"token operator"},">"),t(" equivale a "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-lahFSr")]),t(`
`),e("span",{class:"line"},"totale 62M"),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t("  "),e("span",{class:"token number"},"2"),t("  "),e("span",{class:"token number"},"2022"),t("  .zshenv")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"0"),t(" gen  "),e("span",{class:"token number"},"7"),t("  "),e("span",{class:"token number"},"2022"),t("  .todo.bak")]),t(`
`),e("span",{class:"line"},[t("-rw-r--r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"0"),t(" dic "),e("span",{class:"token number"},"27"),t("  "),e("span",{class:"token number"},"2021"),t("  .sudo_as_admin_successful")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"0"),t(" gen  "),e("span",{class:"token number"},"2"),t("  "),e("span",{class:"token number"},"2022"),t("  mimeapps.list")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ l1 ----"),e("span",{class:"token operator"},">"),t(" equivale a "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'2023-07-28 18-52-21.mkv'")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'2023-07-28 18-55-11.mkv'")]),t(`
`),e("span",{class:"line"},"Android"),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'Android Open Source Project'")]),t(`
`),e("span",{class:"line"},"android-studio"),t(`
`),e("span",{class:"line"},"AndroidStudioProjects"),t(`
`),e("span",{class:"line"},"antonio")])],-1),SS={__name:"79",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[$S,LS,CS,R(i,G({},{ranges:[""]}),{default:v(()=>[ES]),_:1},16)]),_:1},16)}}},RS=S(SS,[["__file","/@slidev/slides/79.md"]]),TS=e("h1",null,"Linux CLI",-1),AS=e("p",null,"File Timestamps",-1),MS=e("ul",null,[e("li",null,"Ogni file e directory una serie di timestamp che ci indicano esattamente quando sono avvenute particolari operazioni sul file stesso"),e("li",null,[t("Nello specifico i 4 principali timestamp sono: "),e("ul",null,[e("li",null,[e("strong",null,"Accesso"),t(": indica l’ultima volta che è stato effettuato l’accesso al file")]),e("li",null,[e("strong",null,"Modifica"),t(": indica l’ultima volta che è stato modificato il contenuto del file")]),e("li",null,[e("strong",null,"Cambio"),t(": indica l’ultima volta che è stato effettuato un cambio ai metadata del file")]),e("li",null,[e("strong",null,"Creazione"),t(": indica quando il file è stato creato e rimane costante")])])])],-1),zS={__name:"80",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[TS,AS,MS]),_:1},16))}},OS=S(zS,[["__file","/@slidev/slides/80.md"]]),PS=e("h1",null,"Linux CLI",-1),DS=e("p",null,"stat - visualizza i timestamp di un file",-1),NS=e("ul",null,[e("li",null,[t("Per visualizzare le informazioni relative ad un file o directory, quali dimensione e timestamp si utilizza il comando "),e("strong",null,"stat")])],-1),FS=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"stat"),t(),e("span",{class:"token operator"},"<"),t("file/dir name"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{class:"token variable"},"$stat"),t(" README.md                                                     main")]),t(`
`),e("span",{class:"line"},"  File: README.md"),t(`
`),e("span",{class:"line"},[t("  Dim.: "),e("span",{class:"token number"},"1164"),t("      	Blocchi: "),e("span",{class:"token number"},"8"),t("          Blocco di IO: "),e("span",{class:"token number"},"4096"),t("   "),e("span",{class:"token function"},"file"),t(" regolare")]),t(`
`),e("span",{class:"line"},[t("Device: 10305h/66309d	Inode: "),e("span",{class:"token number"},"11665449"),t("    Coll.: "),e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[t("Accesso: "),e("span",{class:"token punctuation"},"("),t("0664/-rw-rw-r--"),e("span",{class:"token punctuation"},")"),t("  Uid: "),e("span",{class:"token punctuation"},"("),t(),e("span",{class:"token number"},"1000"),t("/ antonio"),e("span",{class:"token punctuation"},")"),t("   Gid: "),e("span",{class:"token punctuation"},"("),t(),e("span",{class:"token number"},"1000"),t("/ antonio"),e("span",{class:"token punctuation"},")")]),t(`
`),e("span",{class:"line"},[t("Accesso  "),e("span",{class:"token builtin class-name"},":"),t(),e("span",{class:"token number"},"2022"),t("-08-27 "),e("span",{class:"token number"},"11"),t(":11:42.197271632 +0200")]),t(`
`),e("span",{class:"line"},[t("Modifica "),e("span",{class:"token builtin class-name"},":"),t(),e("span",{class:"token number"},"2022"),t("-08-27 "),e("span",{class:"token number"},"11"),t(":11:42.197271632 +0200")]),t(`
`),e("span",{class:"line"},[t("Cambio   "),e("span",{class:"token builtin class-name"},":"),t(),e("span",{class:"token number"},"2022"),t("-08-27 "),e("span",{class:"token number"},"11"),t(":11:42.197271632 +0200")]),t(`
`),e("span",{class:"line"},[t("Creazione: "),e("span",{class:"token number"},"2022"),t("-08-27 "),e("span",{class:"token number"},"11"),t(":11:42.197271632 +0200")])])],-1),jS={__name:"81",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[PS,DS,NS,R(i,G({},{ranges:[""]}),{default:v(()=>[FS]),_:1},16)]),_:1},16)}}},KS=S(jS,[["__file","/@slidev/slides/81.md"]]),HS=e("h1",null,"Linux CLI",-1),WS=e("p",null,"stat - visualizza i timestamp di un file",-1),BS=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"stat"),t(" code                                                          main")]),t(`
`),e("span",{class:"line"},"  File: code"),t(`
`),e("span",{class:"line"},[t("  Dim.: "),e("span",{class:"token number"},"4096"),t("      	Blocchi: "),e("span",{class:"token number"},"8"),t("          Blocco di IO: "),e("span",{class:"token number"},"4096"),t("   directory")]),t(`
`),e("span",{class:"line"},[t("Device: 10305h/66309d	Inode: "),e("span",{class:"token number"},"16777517"),t("    Coll.: "),e("span",{class:"token number"},"5")]),t(`
`),e("span",{class:"line"},[t("Accesso: "),e("span",{class:"token punctuation"},"("),t("0775/drwxrwxr-x"),e("span",{class:"token punctuation"},")"),t("  Uid: "),e("span",{class:"token punctuation"},"("),t(),e("span",{class:"token number"},"1000"),t("/ antonio"),e("span",{class:"token punctuation"},")"),t("   Gid: "),e("span",{class:"token punctuation"},"("),t(),e("span",{class:"token number"},"1000"),t("/ antonio"),e("span",{class:"token punctuation"},")")]),t(`
`),e("span",{class:"line"},[t("Accesso  "),e("span",{class:"token builtin class-name"},":"),t(),e("span",{class:"token number"},"2023"),t("-07-09 "),e("span",{class:"token number"},"10"),t(":18:25.132871216 +0200")]),t(`
`),e("span",{class:"line"},[t("Modifica "),e("span",{class:"token builtin class-name"},":"),t(),e("span",{class:"token number"},"2023"),t("-07-16 "),e("span",{class:"token number"},"17"),t(":41:17.282502735 +0200")]),t(`
`),e("span",{class:"line"},[t("Cambio   "),e("span",{class:"token builtin class-name"},":"),t(),e("span",{class:"token number"},"2023"),t("-07-16 "),e("span",{class:"token number"},"17"),t(":41:17.282502735 +0200")]),t(`
`),e("span",{class:"line"},[t("Creazione: "),e("span",{class:"token number"},"2023"),t("-07-09 "),e("span",{class:"token number"},"10"),t(":18:25.132871216 +0200")])])],-1),qS={__name:"82",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[HS,WS,R(i,G({},{ranges:[""]}),{default:v(()=>[BS]),_:1},16)]),_:1},16)}}},VS=S(qS,[["__file","/@slidev/slides/82.md"]]),US=e("h1",null,"Linux CLI",-1),GS=e("p",null,"cp - copiare file e directory",-1),YS=e("ul",null,[e("li",null,[t("Spesso è molto utile "),e("strong",null,"copiare"),t(" un file o un’intera directory all’interno del filesystem")])],-1),QS=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cp"),t(),e("span",{class:"token operator"},"<"),t(" - parametri opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("file sorgente"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("file destinazione"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cp"),t(),e("span",{class:"token operator"},"<"),t(" - parametri opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("file sorgente"),e("span",{class:"token operator"},">"),e("span",{class:"token punctuation"},".."),t("."),e("span",{class:"token operator"},"<"),t("file sorgente"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("directory destinazione"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cp"),t(),e("span",{class:"token operator"},"<"),t(" - parametri opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("directory sorgente"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("directory destinazione"),e("span",{class:"token operator"},">")])])],-1),ZS=e("br",null,null,-1),JS=e("ul",null,[e("li",null,"cp ha 24 parametri e i più utili sono:")],-1),XS=e("br",null,null,-1),eR=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},"- r: copia ricorsivamente un albero di directory e il suo contenuto"),t(`
`),e("span",{class:"line"},"- v: verbose permette di vedere lo stato della copia"),t(`
`),e("span",{class:"line"},[t("- a: copia "),e("span",{class:"token keyword"},"in"),t(" modalità archivio preservando ownership, timestamps, mode")]),t(`
`),e("span",{class:"line"},[t("- i: copia "),e("span",{class:"token keyword"},"in"),t(" modalità interattiva "),e("span",{class:"token punctuation"},"("),t("chiede conferma "),e("span",{class:"token keyword"},"in"),t(" caso di overwrite"),e("span",{class:"token punctuation"},")")]),t(`
`),e("span",{class:"line"},[t("- f: forza la copia anche "),e("span",{class:"token keyword"},"in"),t(" caso di overwrite")])])],-1),nR={__name:"83",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[US,GS,YS,R(i,G({},{ranges:[""]}),{default:v(()=>[QS]),_:1},16),ZS,JS,XS,R(i,G({},{ranges:[""]}),{default:v(()=>[eR]),_:1},16)]),_:1},16)}}},tR=S(nR,[["__file","/@slidev/slides/83.md"]]),sR=e("h1",null,"Linux CLI",-1),oR=e("p",null,"cp - copiare file e directory",-1),aR=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t()]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"3"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"225"),t(" antonio antonio "),e("span",{class:"token number"},"241664"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 DIR1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cp"),t(" file1 "),e("span",{class:"token function"},"file"),t(),e("span",{class:"token comment"},"# crea una copia di file1 nella directory corrente chiamato file2")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 DIR1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 file2")])])],-1),iR={__name:"84",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[sR,oR,R(i,G({},{ranges:[""]}),{default:v(()=>[aR]),_:1},16)]),_:1},16)}}},lR=S(iR,[["__file","/@slidev/slides/84.md"]]),rR=e("h1",null,"Linux CLI",-1),cR=e("p",null,"cp - copiare file e directory",-1),uR=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" DIR1")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"3"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cp"),t(" file1 DIR1 "),e("span",{class:"token comment"},"# crea una copia di file1 nella directory DIR1 con nome file1")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" DIR1")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":33 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"3"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":33 file1")])])],-1),pR={__name:"85",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[rR,cR,R(i,G({},{ranges:[""]}),{default:v(()=>[uR]),_:1},16)]),_:1},16)}}},dR=S(pR,[["__file","/@slidev/slides/85.md"]]),mR=e("h1",null,"Linux CLI",-1),fR=e("p",null,"cp - copiare file e directory",-1),hR=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" DIR1")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":33 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"3"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":33 file1")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cp"),t(" file1 DIR1/fileDIR1 "),e("span",{class:"token comment"},"# crea una copia di file1 nella directory dIR1 con nome fileDIR1")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" DIR1")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":34 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"3"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":33 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":34 fileDIR1")])])],-1),_R={__name:"86",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[mR,fR,R(i,G({},{ranges:[""]}),{default:v(()=>[hR]),_:1},16)]),_:1},16)}}},gR=S(_R,[["__file","/@slidev/slides/86.md"]]),vR=e("h1",null,"Linux CLI",-1),bR=e("p",null,"cp - copiare file e directory",-1),kR=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"3"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"225"),t(" antonio antonio "),e("span",{class:"token number"},"241664"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":34 DIR1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 file2")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cp"),t(),e("span",{class:"token parameter variable"},"-rv"),t(" DIR1 DIR2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'DIR1'"),t(" -"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token string"},"'DIR2'")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'DIR1/file1'"),t(" -"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token string"},"'DIR2/file1'")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'DIR1/fileDIR1'"),t(" -"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token string"},"'DIR2/fileDIR1'")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"4"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":35 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"225"),t(" antonio antonio "),e("span",{class:"token number"},"241664"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":34 DIR1")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":35 DIR2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 file2")])])],-1),xR={__name:"87",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[vR,bR,kR]),_:1},16))}},wR=S(xR,[["__file","/@slidev/slides/87.md"]]),yR=e("h1",null,"Linux CLI",-1),IR=e("p",null,"cp - copiare file e directory",-1),$R=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"touch"),t(" file3 file4")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cp"),t(),e("span",{class:"token parameter variable"},"-v"),t(" file3 file4 DIR2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'file3'"),t(" -"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token string"},"'DIR2/file3'")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'file4'"),t(" -"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token string"},"'DIR2/file4'")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" DIR2")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"4"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":36 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":35 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 file3")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 file4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":35 fileDIR1")])])],-1),LR={__name:"88",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[yR,IR,R(i,G({},{ranges:[""]}),{default:v(()=>[$R]),_:1},16)]),_:1},16)}}},CR=S(LR,[["__file","/@slidev/slides/88.md"]]),ER=e("h1",null,"Linux CLI",-1),SR=e("p",null,"cp - copiare file e directory",-1),RR=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cp"),t(),e("span",{class:"token parameter variable"},"-vi"),t(" file3 file4 DIR2")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("cp: sovrascrivere "),e("span",{class:"token string"},"'DIR2/file3'"),t("? y")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'file3'"),t(" -"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token string"},"'DIR2/file3'")]),t(`
`),e("span",{class:"line"},[t("cp: sovrascrivere "),e("span",{class:"token string"},"'DIR2/file4'"),t("? y")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'file4'"),t(" -"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token string"},"'DIR2/file4'")])])],-1),TR={__name:"89",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[ER,SR,R(i,G({},{ranges:[""]}),{default:v(()=>[RR]),_:1},16)]),_:1},16)}}},AR=S(TR,[["__file","/@slidev/slides/89.md"]]),MR=e("h1",null,"Linux CLI",-1),zR=e("p",null,"mv - muove o rinomina file",-1),OR=e("ul",null,[e("li",null,[t("Il comando "),e("strong",null,"mv"),t(" è utilizzato per spostare un file o una directory da una directory ad un altra nel filesystem")]),e("li",null,"Il comando è anche utilizzato per rinominare un file nel caso la directory sorgente e destinazione siano le stesse")],-1),PR=e("br",null,null,-1),DR=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mv"),t(),e("span",{class:"token operator"},"<"),t("source file"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("destination dir"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token comment"},"# muove un file dalla directory corrente ad un'altra directory")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# sposta il file in una directory diversa e lo rinomina")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mv"),t(),e("span",{class:"token operator"},"<"),t("source file"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("destination dir/destination file"),e("span",{class:"token operator"},">"),t()]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mv"),t(),e("span",{class:"token operator"},"<"),t("source dir"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("destination dir"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token comment"},"# sposta o rinomina una directory")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mv"),t(),e("span",{class:"token operator"},"<"),t("source file"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("destination file"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token comment"},"# rinomina un file nella stessa directory")])])],-1),NR={__name:"90",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[MR,zR,OR,PR,R(i,G({},{ranges:[""]}),{default:v(()=>[DR]),_:1},16)]),_:1},16)}}},FR=S(NR,[["__file","/@slidev/slides/90.md"]]),jR=e("h1",null,"Linux CLI",-1),KR=e("p",null,"mv - muove o rinomina file",-1),HR=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" DIR1/")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":10 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"4"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":10 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":33 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":34 fileDIR1")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mv"),t(" file4 DIR1")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{class:"token variable"},"$ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" DIR1/")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":10 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"4"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":10 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":33 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":36 file4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":34 fileDIR1")])])],-1),WR={__name:"91",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[jR,KR,R(i,G({},{ranges:[""]}),{default:v(()=>[HR]),_:1},16)]),_:1},16)}}},BR=S(WR,[["__file","/@slidev/slides/91.md"]]),qR=e("h1",null,"Linux CLI",-1),VR=e("p",null,"mv - muove o rinomina file",-1),UR=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token variable"},"$ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" DIR1/")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":10 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"4"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":10 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":33 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":36 file4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":34 fileDIR1")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mv"),t(" file3  DIR1/file33")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{class:"token variable"},"$ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" DIR1/")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"4"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":33 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":36 file33")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":36 file4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":34 fileDIR1")])])],-1),GR={__name:"92",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[qR,VR,R(i,G({},{ranges:[""]}),{default:v(()=>[UR]),_:1},16)]),_:1},16)}}},YR=S(GR,[["__file","/@slidev/slides/92.md"]]),QR=e("h1",null,"Linux CLI",-1),ZR=e("p",null,"mv - muove o rinomina file",-1),JR=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"4"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"225"),t(" antonio antonio "),e("span",{class:"token number"},"241664"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 DIR1")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 file2")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mv"),t(" DIR1 DIR11")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"4"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"225"),t(" antonio antonio "),e("span",{class:"token number"},"241664"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 file2")])])],-1),XR={__name:"93",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[QR,ZR,R(i,G({},{ranges:[""]}),{default:v(()=>[JR]),_:1},16)]),_:1},16)}}},eT=S(XR,[["__file","/@slidev/slides/93.md"]]),nT=e("h1",null,"Linux CLI",-1),tT=e("p",null,"mv - muove o rinomina file",-1),sT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"4"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":13 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"225"),t(" antonio antonio "),e("span",{class:"token number"},"241664"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 file2")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mv"),t(" file2 fileAAA2")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{class:"token variable"},"$ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"4"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":14 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"225"),t(" antonio antonio "),e("span",{class:"token number"},"241664"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 fileAAA2")])])],-1),oT={__name:"94",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[nT,tT,R(i,G({},{ranges:[""]}),{default:v(()=>[sT]),_:1},16)]),_:1},16)}}},aT=S(oT,[["__file","/@slidev/slides/94.md"]]),iT=e("h1",null,"Linux CLI",-1),lT=e("p",null,"mv - muove o rinomina file",-1),rT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token variable"},"$ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 fileAAA2")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mv"),t(" file1 fileAAA2 /tmp")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{class:"token variable"},"$ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{class:"token variable"},"$ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" /tmp/")]),t(`
`),e("span",{class:"line"},[t("srwx------  "),e("span",{class:"token number"},"1"),t(" antonio antonio     "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"12"),t(":59 "),e("span",{class:"token string"},"'844uMDg5r12KpmxXG2wGOx0Hlsvelh2xjo6CL4epTjM='")]),t(`
`),e("span",{class:"line"},[t("drwx------  "),e("span",{class:"token number"},"2"),t(" antonio antonio  "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"18"),t(":53  .com.google.Chrome.RGR4te")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--  "),e("span",{class:"token number"},"1"),t(" antonio antonio     "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30  file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--  "),e("span",{class:"token number"},"1"),t(" antonio antonio     "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31  fileAAA2")])])],-1),cT={__name:"95",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[iT,lT,R(i,G({},{ranges:[""]}),{default:v(()=>[rT]),_:1},16)]),_:1},16)}}},uT=S(cT,[["__file","/@slidev/slides/95.md"]]),pT=e("h1",null,"Linux CLI",-1),dT=e("p",null,"rm - rimuove file o directory",-1),mT=e("ul",null,[e("li",null,[t("Per cancellare un file in modo permanente (non c’è il cestino nella CLI) si utilizza il comando "),e("strong",null,"rm (remove)")])],-1),fT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"rm"),t(),e("span",{class:"token operator"},"<"),t("- parametri opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("file o directory"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 fileAAA2")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"rm"),t(" file1")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 fileAAA2")])])],-1),hT={__name:"96",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[pT,dT,mT,R(i,G({},{ranges:[""]}),{default:v(()=>[fT]),_:1},16)]),_:1},16)}}},_T=S(hT,[["__file","/@slidev/slides/96.md"]]),gT=e("h1",null,"Linux CLI",-1),vT=e("p",null,"rm - rimuove file o directory",-1),bT=e("ul",null,[e("li",null,"I parametri più utilizzati sono:")],-1),kT=e("br",null,null,-1),xT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},"-i: interactive chiede conferma prima di rimuovere"),t(`
`),e("span",{class:"line"},"-d: rimuove una directory vuota"),t(`
`),e("span",{class:"line"},"-r: rimuove ricorsivamente il contenuto nelle sotto directory"),t(`
`),e("span",{class:"line"},[t("-f: forza il comando anche "),e("span",{class:"token keyword"},"in"),t(" caso di directory non vuote")])])],-1),wT=e("br",null,null,-1),yT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"rm"),t(),e("span",{class:"token parameter variable"},"-i"),t(" fileAAA2 ")]),t(`
`),e("span",{class:"line"},[t("rm: rimuovere "),e("span",{class:"token function"},"file"),t(" regolare "),e("span",{class:"token string"},"'fileAAA2'"),t("? y")])])],-1),IT={__name:"97",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[gT,vT,bT,kT,R(i,G({},{ranges:[""]}),{default:v(()=>[xT]),_:1},16),wT,R(i,G({},{ranges:[""]}),{default:v(()=>[yT]),_:1},16)]),_:1},16)}}},$T=S(IT,[["__file","/@slidev/slides/97.md"]]),LT=e("h1",null,"Linux CLI",-1),CT=e("p",null,"rm - rimuove file o directory",-1),ET=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" DIR3")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":21 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"5"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":20 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":21 file13")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$  "),e("span",{class:"token function"},"rm"),t(" DIR3                                                                                 ✘ "),e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[t("rm: impossibile rimuovere "),e("span",{class:"token string"},"'DIR3'"),e("span",{class:"token builtin class-name"},":"),t(" È una directory")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"rm"),t(),e("span",{class:"token parameter variable"},"-d"),t(" DIR3                                                                              ✘ "),e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[t("rm: impossibile rimuovere "),e("span",{class:"token string"},"'DIR3'"),e("span",{class:"token builtin class-name"},":"),t(" Directory non vuota")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# svuotiamo la directory 3")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{class:"token variable"},"$rm"),t(),e("span",{class:"token parameter variable"},"-d"),t(" DIR3                                                                             ✘ "),e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 fileAAA2")])])],-1),ST={__name:"98",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[LT,CT,R(i,G({},{ranges:[""]}),{default:v(()=>[ET]),_:1},16)]),_:1},16)}}},RT=S(ST,[["__file","/@slidev/slides/98.md"]]),TT=e("h1",null,"Linux CLI",-1),AT=e("p",null,"rm - rimuove file o directory",-1),MT=e("ul",null,[e("li",null,"Per rimuovere una directory e tutto il suo contenuto senza priam svuotarla possiamo fare così")],-1),zT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"rm"),t(),e("span",{class:"token parameter variable"},"-dr"),t(" DIR3")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},"oppure"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"rm"),t(),e("span",{class:"token parameter variable"},"-rf"),t(" DIR3")])])],-1),OT=e("br",null,null,-1),PT=e("ul",null,[e("li",null,"Entrambi i comandi hanno lo stesso effetto ma il secondo è più comune tra gli amministratori di sistemi Linux")],-1),DT={__name:"99",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[TT,AT,MT,R(i,G({},{ranges:[""]}),{default:v(()=>[zT]),_:1},16),OT,PT]),_:1},16)}}},NT=S(DT,[["__file","/@slidev/slides/99.md"]]),FT=e("h1",null,"Linux CLI",-1),jT=e("p",null,"more - visualizzazione file paginata",-1),KT=e("ul",null,[e("li",null,"more permette di leggere un file di testo una pagina alla volta")],-1),HT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"more"),t(),e("span",{class:"token operator"},"<"),t("nome file"),e("span",{class:"token operator"},">")])])],-1),WT=e("br",null,null,-1),BT=e("ul",null,[e("li",null,"Se il file è più corto di una pagina di video viene visualizzato e more esce"),e("li",null,"Se il file è più lungo e rivhiede più paginate del video per essere visualizzato, more entra in modalità comando"),e("li",null,"more accetta i seguenti comandi principali:")],-1),qT=e("br",null,null,-1),VT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token operator"},"<"),t("spaca"),e("span",{class:"token operator"},">"),t(": avanza alla prossima pagina del testo")]),t(`
`),e("span",{class:"line"},"b: torna indietro alla pagina precedente"),t(`
`),e("span",{class:"line"},[t("/"),e("span",{class:"token operator"},"<"),t("pattern"),e("span",{class:"token operator"},">"),t(": effettua una ricerca del pattern all'interno del "),e("span",{class:"token function"},"file")]),t(`
`),e("span",{class:"line"},[t("n: salta alla prossima occorrenza di "),e("span",{class:"token operator"},"<"),t("pattern"),e("span",{class:"token operator"},">"),t(" se presente")]),t(`
`),e("span",{class:"line"},"q: esce dalla visualizzazione")])],-1),UT={__name:"100",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[FT,jT,KT,R(i,G({},{ranges:[""]}),{default:v(()=>[HT]),_:1},16),WT,BT,qT,R(i,G({},{ranges:[""]}),{default:v(()=>[VT]),_:1},16)]),_:1},16)}}},GT=S(UT,[["__file","/@slidev/slides/100.md"]]),YT=e("h1",null,"Linux CLI",-1),QT=e("p",null,"less - visualizzazione file avanzata",-1),ZT=e("ul",null,[e("li",null,"less è molto simile a more ed ha lo stesso scopo che è quello di visualizzare un file multipagina"),e("li",null,"less ha alcune funzione più sofisticate di more, ma nell’uso comune sono sostanzialmente uguali")],-1),JT=e("br",null,null,-1),XT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"less"),t(),e("span",{class:"token operator"},"<"),t("nome file"),e("span",{class:"token operator"},">")])])],-1),eA=e("br",null,null,-1),nA=e("ul",null,[e("li",null,[e("p",null,"i comandi accettati sono gli stessi di more")]),e("li",null,[e("p",null,[t("Spesso "),e("strong",null,"more"),t(" e "),e("strong",null,"less"),t(" sono utilizzati come filtri finali di una pipeline di comandi")])])],-1),tA=e("br",null,null,-1),sA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file_grande "),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"sort"),t(),e("span",{class:"token parameter variable"},"-r"),t(),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"less")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},"oppure"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ $ "),e("span",{class:"token function"},"cat"),t(" file_grande "),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"sort"),t(),e("span",{class:"token parameter variable"},"-r"),t(),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"more")])])],-1),oA={__name:"101",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[YT,QT,ZT,JT,R(i,G({},{ranges:[""]}),{default:v(()=>[XT]),_:1},16),eA,nA,tA,R(i,G({},{ranges:[""]}),{default:v(()=>[sA]),_:1},16)]),_:1},16)}}},aA=S(oA,[["__file","/@slidev/slides/101.md"]]),iA=e("h1",null,"Linux CLI",-1),lA=e("p",null,"cat - concatenazione file",-1),rA=e("ul",null,[e("li",null,[e("strong",null,"cat"),t(" concatena uno o più file e lo visualizza sullo standard output")]),e("li",null,"quindi usando cat con un solo file ha l’effetto di visualizzare il file sullo schermo")],-1),cA=e("br",null,null,-1),uA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t("  "),e("span",{class:"token operator"},"<"),t("nome file"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token punctuation"},"["),e("span",{class:"token operator"},"<"),t("nome file"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("nome file"),e("span",{class:"token operator"},">"),e("span",{class:"token punctuation"},"]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t("     ")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"4"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"14"),t(":54 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"225"),t(" antonio antonio "),e("span",{class:"token number"},"241664"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"14"),t(":47 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"7"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"14"),t(":54 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"7"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"14"),t(":54 file2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"7"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"14"),t(":54 file3")])])],-1),pA={__name:"102",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[iA,lA,rA,cA,R(i,G({},{ranges:[""]}),{default:v(()=>[uA]),_:1},16)]),_:1},16)}}},dA=S(pA,[["__file","/@slidev/slides/102.md"]]),mA=e("h1",null,"Linux CLI",-1),fA=e("p",null,"cat - concatenazione file",-1),hA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token variable"},"$cat"),t(" file1               ")]),t(`
`),e("span",{class:"line"},"linea1"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file2")]),t(`
`),e("span",{class:"line"},"linea2"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file3")]),t(`
`),e("span",{class:"line"},"linea3"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file1 file2 file3")]),t(`
`),e("span",{class:"line"},"linea1"),t(`
`),e("span",{class:"line"},"linea2"),t(`
`),e("span",{class:"line"},"linea3"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file1 file2 file3 "),e("span",{class:"token operator"},">"),t(" file4")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file4                    ")]),t(`
`),e("span",{class:"line"},"linea1"),t(`
`),e("span",{class:"line"},"linea2"),t(`
`),e("span",{class:"line"},"linea3")])],-1),_A={__name:"103",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[mA,fA,R(i,G({},{ranges:[""]}),{default:v(()=>[hA]),_:1},16)]),_:1},16)}}},gA=S(_A,[["__file","/@slidev/slides/103.md"]]),vA=e("h1",null,"Linux CLI",-1),bA=e("p",null,"head - visualizzare la parte iniziale di un file",-1),kA=e("ul",null,[e("li",null,"Visualizza la prima parte di un file di solito specificata in bytes o linee")],-1),xA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"head"),t(),e("span",{class:"token operator"},"<"),t(" - parametri opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("file"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"head"),t(" file1")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"5")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"7")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"8")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"9")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"10")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"head"),t(),e("span",{class:"token parameter variable"},"-n"),t(),e("span",{class:"token number"},"2"),t(" file1 "),e("span",{class:"token comment"},"# visualizza solo le prime 2 linee del file")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"2")])])],-1),wA={__name:"104",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[vA,bA,kA,R(i,G({},{ranges:[""]}),{default:v(()=>[xA]),_:1},16)]),_:1},16)}}},yA=S(wA,[["__file","/@slidev/slides/104.md"]]),IA=e("h1",null,"Linux CLI",-1),$A=e("p",null,"tail - visualizzare la parte finale di un file",-1),LA=e("ul",null,[e("li",null,"In maniera esattamente analoga ad head, visualizza la parte finale di un file in linee o bytes")],-1),CA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token variable"},"$tail"),t(" file1                                  ")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"991")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"992")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"993")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"994")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"995")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"996")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"997")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"998")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"999")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"1000")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"tail"),t(),e("span",{class:"token parameter variable"},"-n"),t(),e("span",{class:"token number"},"3"),t(" file1 "),e("span",{class:"token comment"},"# visualizza le ultime 3 linee di un file")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"998")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"999")]),t(`
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"1000")])])],-1),EA={__name:"105",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[IA,$A,LA,R(i,G({},{ranges:[""]}),{default:v(()=>[CA]),_:1},16)]),_:1},16)}}},SA=S(EA,[["__file","/@slidev/slides/105.md"]]),RA=e("h1",null,"Linux CLI",-1),TA=e("p",null,"tail - visualizzare la parte finale di un file",-1),AA=e("ul",null,[e("li",null,[t("Un parametro molto usate per tail è "),e("code",null,"-f"),t(" che permette di continuare a leggere un file per scritture successive")]),e("li",null,'Utilizzato prevalentemente per l’analisi di file di log in cui un processo "appende" nuovi dati al fondo del file')],-1),MA=e("p",null,"Aprire due shelle 1 e 2",-1),zA=e("p",null,"shell 1:",-1),OA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"touch"),t(" file1")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"tail"),t(),e("span",{class:"token parameter variable"},"-f"),t(" file1")])])],-1),PA=e("p",null,"shell 2:",-1),DA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"echo"),t(" ciao "),e("span",{class:"token operator"},">"),t(" file1")])])],-1),NA={__name:"106",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[RA,TA,AA,MA,zA,R(i,G({},{ranges:[""]}),{default:v(()=>[OA]),_:1},16),PA,R(i,G({},{ranges:[""]}),{default:v(()=>[DA]),_:1},16)]),_:1},16)}}},FA=S(NA,[["__file","/@slidev/slides/106.md"]]),jA=e("h1",null,"Linux CLI",-1),KA=e("p",null,"Esercitazione cli_06",-1),HA=e("ul",null,[e("li",null,"Svolgere la seguente esercitazione (Quinz inclusi)")],-1),WA=e("br",null,null,-1),BA=e("p",null,[t("["),e("a",{href:"https://linuxjourney.com/lesson/the-shell",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/the-shell"),t("]"),e("a",{href:"https://linuxjourney.com/lesson/the-shell",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/the-shell"),t(")")],-1),qA=e("br",null,null,-1),VA=e("ul",null,[e("li",null,"Domande agli studenti sul contenuto dell’esercitazione")],-1),UA={__name:"107",setup(n){const s={};return L(E),(o,a)=>{const i=Tn("center");return b(),C(D,P(O(s)),{default:v(()=>[jA,KA,HA,WA,R(i,null,{default:v(()=>[BA]),_:1}),qA,VA]),_:1},16)}}},GA=S(UA,[["__file","/@slidev/slides/107.md"]]),YA=e("h1",null,"Linux CLI",-1),QA=e("p",null,"sort - ordinare le linee di un file di testo",-1),ZA=e("ul",null,[e("li",null,"Ordina un file di testo")],-1),JA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sort"),t(),e("span",{class:"token operator"},"<"),t(" - parametri opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("file"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sort"),t(" file1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"10")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"5")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"8")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"9")])])],-1),XA={__name:"108",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[YA,QA,ZA,R(i,G({},{ranges:[""]}),{default:v(()=>[JA]),_:1},16)]),_:1},16)}}},eM=S(XA,[["__file","/@slidev/slides/108.md"]]),nM=e("h1",null,"Linux CLI",-1),tM=e("p",null,"sort - ordinare le linee di un file di testo",-1),sM=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sort"),t(),e("span",{class:"token parameter variable"},"-g"),t(" file1 "),e("span",{class:"token comment"},"# usa ordine numerico")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"5")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"8")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"9")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"10")])])],-1),oM={__name:"109",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[nM,tM,R(i,G({},{ranges:[""]}),{default:v(()=>[sM]),_:1},16)]),_:1},16)}}},aM=S(oM,[["__file","/@slidev/slides/109.md"]]),iM=e("h1",null,"Linux CLI",-1),lM=e("p",null,"sort - ordinare le linee di un file di testo",-1),rM=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sort"),t(),e("span",{class:"token parameter variable"},"-rg"),t(" file1 "),e("span",{class:"token comment"},"# usa ordine numerico inverso (reverse)")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"10")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"9")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"8")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"5")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")])])],-1),cM=e("br",null,null,-1),uM=e("ul",null,[e("li",null,[t("Sort ha 20 parametri opzionali inclusi "),e("strong",null,"g"),t(" e "),e("strong",null,"r")]),e("li",null,"Consultare il manuale per eventuali necessità")],-1),pM={__name:"110",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[iM,lM,R(i,G({},{ranges:[""]}),{default:v(()=>[rM]),_:1},16),cM,uM]),_:1},16)}}},dM=S(pM,[["__file","/@slidev/slides/110.md"]]),mM=e("h1",null,"Linux CLI",-1),fM=e("p",null,"uniq - rimuovere le linee occorrenti di un file",-1),hM=e("ul",null,[e("li",null,"Uniq permette di identificare le occorrenze uguali di linee di testo in un file"),e("li",null,"Permette di riportare o di eliminare tali occorrenze")],-1),_M=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file1 ")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"5")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"8")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"9")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"10")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")])])],-1),gM={__name:"111",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[mM,fM,hM,R(i,G({},{ranges:[""]}),{default:v(()=>[_M]),_:1},16)]),_:1},16)}}},vM=S(gM,[["__file","/@slidev/slides/111.md"]]),bM=e("h1",null,"Linux CLI",-1),kM=e("p",null,"uniq - rimuovere le linee occorrenti di un file",-1),xM=e("ul",null,[e("li",null,"uniq deve lavorare su un file ordinato")],-1),wM=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file1 "),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"sort"),t(),e("span",{class:"token parameter variable"},"-g"),t(),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"uniq")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"5")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"8")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"9")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"10")])])],-1),yM=e("br",null,null,-1),IM=e("ul",null,[e("li",null,[e("strong",null,"uniq"),t(" ha rimosso le occorrenze e ora tutti i numeri compaio una sola volta")])],-1),$M={__name:"112",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[bM,kM,xM,R(i,G({},{ranges:[""]}),{default:v(()=>[wM]),_:1},16),yM,IM]),_:1},16)}}},LM=S($M,[["__file","/@slidev/slides/112.md"]]),CM=e("h1",null,"Linux CLI",-1),EM=e("p",null,"uniq - rimuovere le linee occorrenti di un file",-1),SM=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token variable"},"$cat"),t(" file1 "),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"sort"),t(),e("span",{class:"token parameter variable"},"-g"),t(),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"uniq"),t(),e("span",{class:"token parameter variable"},"-d")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")])])],-1),RM=e("br",null,null,-1),TM=e("ul",null,[e("li",null,[e("strong",null,"uniq"),t(" ha mantenuto solo le occorrenze doppie e rimosso quelle singole")])],-1),AM={__name:"113",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[CM,EM,R(i,G({},{ranges:[""]}),{default:v(()=>[SM]),_:1},16),RM,TM]),_:1},16)}}},MM=S(AM,[["__file","/@slidev/slides/113.md"]]),zM=e("h1",null,"Linux CLI",-1),OM=e("p",null,"wc - contare caratteri, parole e linee di un file",-1),PM=e("ul",null,[e("li",null,"Spesso è utile contare quanti caratteri, parole o linee sono presenti in un file di testo"),e("li",null,[e("strong",null,"wc"),t(" assolve esattamente a questo compito")])],-1),DM=e("br",null,null,-1),NM=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"wc"),t(),e("span",{class:"token operator"},"<"),t(" - parametri opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("file"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},"-c: conta i bytes o caratteri"),t(`
`),e("span",{class:"line"},"-w: conta le parole"),t(`
`),e("span",{class:"line"},"-l: conta le linee "),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file1                    ")]),t(`
`),e("span",{class:"line"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "),t(`
`),e("span",{class:"line"},[t("Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of "),e("span",{class:"token builtin class-name"},"type"),t(" and scrambled it to "),e("span",{class:"token function"},"make"),t(" a "),e("span",{class:"token builtin class-name"},"type"),t(" specimen book. ")]),t(`
`),e("span",{class:"line"},"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "),t(`
`),e("span",{class:"line"},[t("It was popularised "),e("span",{class:"token keyword"},"in"),t(" the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and "),e("span",{class:"token function"},"more"),t(" recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")])])],-1),FM={__name:"114",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[zM,OM,PM,DM,R(i,G({},{ranges:[""]}),{default:v(()=>[NM]),_:1},16)]),_:1},16)}}},jM=S(FM,[["__file","/@slidev/slides/114.md"]]),KM=e("h1",null,"Linux CLI",-1),HM=e("p",null,"wc - contare caratteri, parole e linee di un file",-1),WM=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"wc"),t(),e("span",{class:"token parameter variable"},"-c"),t(" file1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"579"),t(" file1")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"wc"),t(),e("span",{class:"token parameter variable"},"-w"),t(" file1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"91"),t(" file1")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"wc"),t(),e("span",{class:"token parameter variable"},"-l"),t(" file1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"5"),t(" file1")])])],-1),BM=e("br",null,null,-1),qM=e("ul",null,[e("li",null,"Spesso usato come parte finale di una pipeline di comandi")],-1),VM={__name:"115",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[KM,HM,R(i,G({},{ranges:[""]}),{default:v(()=>[WM]),_:1},16),BM,qM]),_:1},16)}}},UM=S(VM,[["__file","/@slidev/slides/115.md"]]),GM=e("h1",null,"Linux CLI",-1),YM=e("p",null,"touch - creare un file vuoto",-1),QM=e("ul",null,[e("li",null,[t("Per creare velocemente un file vuoto è possibile usare il comando "),e("strong",null,"touch")])],-1),ZM=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"touch"),t(),e("span",{class:"token operator"},"<"),t("nome file"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"touch"),t(" file4")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"4"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":22 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"225"),t(" antonio antonio "),e("span",{class:"token number"},"241664"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":13 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"579"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":21 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"9"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":04 file2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":22 file4")])])],-1),JM={__name:"116",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[GM,YM,QM,R(i,G({},{ranges:[""]}),{default:v(()=>[ZM]),_:1},16)]),_:1},16)}}},XM=S(JM,[["__file","/@slidev/slides/116.md"]]),ez=e("h1",null,"Linux CLI",-1),nz=e("p",null,"mkdir - creare una directory",-1),tz=e("ul",null,[e("li",null,[t("Per creare una nuova directory o albero di directory si usa il comando "),e("strong",null,"mkdir")])],-1),sz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mkdir"),t(),e("span",{class:"token operator"},"<"),t("directory"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token comment"},"# crea una nuova directory")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mkdir"),t(),e("span",{class:"token parameter variable"},"-p"),t(),e("span",{class:"token operator"},"<"),t("dir"),e("span",{class:"token operator"},[e("span",{class:"token file-descriptor important"},"1"),t(">")]),t("/"),e("span",{class:"token operator"},"<"),t("dir"),e("span",{class:"token operator"},[e("span",{class:"token file-descriptor important"},"2"),t(">")]),t("/"),e("span",{class:"token punctuation"},".."),t("./"),e("span",{class:"token operator"},"<"),t("dirN"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token comment"},"# crea un albero di directory")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mkdir"),t(" DIR3")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 DIR3")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mkdir"),t(),e("span",{class:"token parameter variable"},"-p"),t(" DIR4/DIR5/DIR6")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},"$  tree DIR4   "),t(`
`),e("span",{class:"line"},"DIR4"),t(`
`),e("span",{class:"line"},"└── DIR5"),t(`
`),e("span",{class:"line"},"    └── DIR6"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2"),t(" directories, "),e("span",{class:"token number"},"0"),t(" files")])])],-1),oz={__name:"117",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[ez,nz,tz,R(i,G({},{ranges:[""]}),{default:v(()=>[sz]),_:1},16)]),_:1},16)}}},az=S(oz,[["__file","/@slidev/slides/117.md"]]),iz=e("h1",null,"Linux CLI",-1),lz=e("p",null,"du - calcola lo spazio disco occupato da una directory",-1),rz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"du")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4"),t("	./DIR3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"12"),t("	./DIR2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"12"),t("	./DIR11")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4"),t("	./DIR4/DIR5/DIR6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"8"),t("	./DIR4/DIR5")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"12"),t("	./DIR4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"52"),t("	"),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"du"),t(),e("span",{class:"token parameter variable"},"-h"),t(),e("span",{class:"token comment"},"# visualizza le dimensioni human readable")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4"),t(",0K	./DIR3")]),t(`
`),e("span",{class:"line"},"12K	./DIR2"),t(`
`),e("span",{class:"line"},"12K	./DIR11"),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4"),t(",0K	./DIR4/DIR5/DIR6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"8"),t(",0K	./DIR4/DIR5")]),t(`
`),e("span",{class:"line"},"12K	./DIR4"),t(`
`),e("span",{class:"line"},[t("52K	"),e("span",{class:"token builtin class-name"},".")])])],-1),cz={__name:"118",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[iz,lz,R(i,G({},{ranges:[""]}),{default:v(()=>[rz]),_:1},16)]),_:1},16)}}},uz=S(cz,[["__file","/@slidev/slides/118.md"]]),pz=e("h1",null,"Linux CLI",-1),dz=e("p",null,"df - visualizza lo spazio disponibile su un filesystem",-1),mz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"df"),t("   ")]),t(`
`),e("span",{class:"line"},[t("File system    1K-blocchi     Usati Disponib. Uso% Montato "),e("span",{class:"token function"},"su")]),t(`
`),e("span",{class:"line"},[t("tmpfs             "),e("span",{class:"token number"},"1617056"),t("      "),e("span",{class:"token number"},"2132"),t("   "),e("span",{class:"token number"},"1614924"),t("   "),e("span",{class:"token number"},"1"),t("% /run")]),t(`
`),e("span",{class:"line"},[t("/dev/nvme0n1p4  "),e("span",{class:"token number"},"123390456"),t("  "),e("span",{class:"token number"},"82302484"),t("  "),e("span",{class:"token number"},"34773940"),t("  "),e("span",{class:"token number"},"71"),t("% /")]),t(`
`),e("span",{class:"line"},[t("tmpfs             "),e("span",{class:"token number"},"8085268"),t("     "),e("span",{class:"token number"},"45036"),t("   "),e("span",{class:"token number"},"8040232"),t("   "),e("span",{class:"token number"},"1"),t("% /dev/shm")]),t(`
`),e("span",{class:"line"},[t("tmpfs                "),e("span",{class:"token number"},"5120"),t("         "),e("span",{class:"token number"},"0"),t("      "),e("span",{class:"token number"},"5120"),t("   "),e("span",{class:"token number"},"0"),t("% /run/lock")]),t(`
`),e("span",{class:"line"},[t("tmpfs             "),e("span",{class:"token number"},"8085268"),t("         "),e("span",{class:"token number"},"0"),t("   "),e("span",{class:"token number"},"8085268"),t("   "),e("span",{class:"token number"},"0"),t("% /run/qemu")]),t(`
`),e("span",{class:"line"},[t("/dev/nvme0n1p1     "),e("span",{class:"token number"},"521200"),t("    "),e("span",{class:"token number"},"326952"),t("    "),e("span",{class:"token number"},"194248"),t("  "),e("span",{class:"token number"},"63"),t("% /boot/efi")]),t(`
`),e("span",{class:"line"},[t("/dev/nvme0n1p5  "),e("span",{class:"token number"},"775506816"),t(),e("span",{class:"token number"},"491167292"),t(),e("span",{class:"token number"},"249685692"),t("  "),e("span",{class:"token number"},"67"),t("% /home")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"df"),t(),e("span",{class:"token parameter variable"},"-h"),t(),e("span",{class:"token comment"},"# visualizza le dimensioni human readable")]),t(`
`),e("span",{class:"line"},[t("File system     Dim. Usati Dispon. Uso% Montato "),e("span",{class:"token function"},"su")]),t(`
`),e("span",{class:"line"},[t("tmpfs           "),e("span",{class:"token number"},"1"),t(",6G  "),e("span",{class:"token number"},"2"),t(",1M    "),e("span",{class:"token number"},"1"),t(",6G   "),e("span",{class:"token number"},"1"),t("% /run")]),t(`
`),e("span",{class:"line"},[t("/dev/nvme0n1p4  118G   79G     34G  "),e("span",{class:"token number"},"71"),t("% /")]),t(`
`),e("span",{class:"line"},[t("tmpfs           "),e("span",{class:"token number"},"7"),t(",8G   48M    "),e("span",{class:"token number"},"7"),t(",7G   "),e("span",{class:"token number"},"1"),t("% /dev/shm")]),t(`
`),e("span",{class:"line"},[t("tmpfs           "),e("span",{class:"token number"},"5"),t(",0M     "),e("span",{class:"token number"},"0"),t("    "),e("span",{class:"token number"},"5"),t(",0M   "),e("span",{class:"token number"},"0"),t("% /run/lock")]),t(`
`),e("span",{class:"line"},[t("tmpfs           "),e("span",{class:"token number"},"7"),t(",8G     "),e("span",{class:"token number"},"0"),t("    "),e("span",{class:"token number"},"7"),t(",8G   "),e("span",{class:"token number"},"0"),t("% /run/qemu")]),t(`
`),e("span",{class:"line"},[t("/dev/nvme0n1p1  509M  320M    190M  "),e("span",{class:"token number"},"63"),t("% /boot/efi")]),t(`
`),e("span",{class:"line"},[t("/dev/nvme0n1p5  740G  469G    239G  "),e("span",{class:"token number"},"67"),t("% /home")])])],-1),fz={__name:"119",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[pz,dz,R(i,G({},{ranges:[""]}),{default:v(()=>[mz]),_:1},16)]),_:1},16)}}},hz=S(fz,[["__file","/@slidev/slides/119.md"]]),_z=e("h1",null,"Linux CLI",-1),gz=e("p",null,"find - search for files in a directory hierarchy",-1),vz=e("ul",null,[e("li",null,"Spesso quando navighiamo nel filesystem abbiamo la necessità di cercare dei file"),e("li",null,[e("code",null,"find"),t(" è un comando potentissimo che permette di fare ricerche nel filesystem molto sofisticate")]),e("li",null,[e("strong",null,"find"),t(" ha 71 parametri, ma non abbiamo bisogno di conoscerli tutti. CI ricordiamo i principali e quando ci serve qualcosa di particolare consultiamo il manuale")])],-1),bz=e("br",null,null,-1),kz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token operator"},"<"),t("directory iniziale"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t(" - parametri opzionali"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# partendo dalla directory corrente scandisce tutti i file e sottodirectory alla ricerca ")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# di ogni file che fa match con pillole*.png")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token builtin class-name"},"."),t(),e("span",{class:"token parameter variable"},"-name"),t(),e("span",{class:"token string"},"'pillole*.png'"),t("  --"),e("span",{class:"token operator"},">"),t(" il carattere * rappresenta uno o più caratteri")]),t(`
`),e("span",{class:"line"}," "),t(`
`),e("span",{class:"line"},"./Downloads/pillole-di-css.png"),t(`
`),e("span",{class:"line"},"./Downloads/img/pillole.png"),t(`
`),e("span",{class:"line"},"./Downloads/pillole-css.png"),t(`
`),e("span",{class:"line"},"./tmp/profmancusoa.github.io/pillole-css.png")])],-1),xz={__name:"120",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[_z,gz,vz,bz,R(i,G({},{ranges:[""]}),{default:v(()=>[kz]),_:1},16)]),_:1},16)}}},wz=S(xz,[["__file","/@slidev/slides/120.md"]]),yz=e("h1",null,"Linux CLI",-1),Iz=e("p",null,"find - search for files in a directory hierarchy",-1),$z=e("p",null,"Vediamo alcuni parametri utili",-1),Lz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("-type: specifica il tipo di "),e("span",{class:"token function"},"file"),t(" da ricercare "),e("span",{class:"token punctuation"},"("),t("f file, d directory, "),e("span",{class:"token punctuation"},".."),t("."),e("span",{class:"token punctuation"},")")]),t(`
`),e("span",{class:"line"},[t("-user: specifica l'owner del "),e("span",{class:"token function"},"file"),t(),e("span",{class:"token punctuation"},"("),t("nome utente o "),e("span",{class:"token function"},"id"),e("span",{class:"token punctuation"},")")]),t(`
`),e("span",{class:"line"},[t("-atime: cerca un "),e("span",{class:"token function"},"file"),t(" che a cui è stato fatto accesso -n, n o +n giorni fà")]),t(`
`),e("span",{class:"line"},[t("-mtime: cerca un "),e("span",{class:"token function"},"file"),t(" o directory che è stata modificato -n, n o +n giorni fà")]),t(`
`),e("span",{class:"line"},[t("-size: cerca "),e("span",{class:"token function"},"file"),t(" di dimensione -n, n o +n unità di spazio "),e("span",{class:"token punctuation"},"("),t("b,c,k,M,G"),e("span",{class:"token punctuation"},")")]),t(`
`),e("span",{class:"line"},[t("-exec: esegue un comando per ogni "),e("span",{class:"token function"},"file"),t(" selezionato")])])],-1),Cz=e("br",null,null,-1),Ez=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token builtin class-name"},"."),t(),e("span",{class:"token parameter variable"},"-type"),t(" d "),e("span",{class:"token comment"},"# cerca tutte le sottodirectory a partire dalla directory corrente")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token builtin class-name"},"."),t(),e("span",{class:"token parameter variable"},"-type"),t(" f  "),e("span",{class:"token parameter variable"},"-user"),t(" root "),e("span",{class:"token comment"},"# cerca tutti i file di proprietà root")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token builtin class-name"},"."),t(),e("span",{class:"token parameter variable"},"-mtime"),t(),e("span",{class:"token parameter variable"},"-2"),t(),e("span",{class:"token comment"},"# cerca tutti i file che sono stati modificati meno di 2 giorni fà")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token builtin class-name"},"."),t(),e("span",{class:"token parameter variable"},"-mtime"),t(),e("span",{class:"token number"},"2"),t(),e("span",{class:"token comment"},"# cerca tutti i file che sono stati modificati esattamente 2 giorni fà")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token builtin class-name"},"."),t(),e("span",{class:"token parameter variable"},"-mtime"),t(" +2 "),e("span",{class:"token comment"},"# cerca tutti i file che sono stati modificati più di 2 giorni fà")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token builtin class-name"},"."),t(),e("span",{class:"token parameter variable"},"-size"),t(" 512c "),e("span",{class:"token comment"},"# cerca tutti i file di 512 byte")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token builtin class-name"},"."),t(),e("span",{class:"token parameter variable"},"-size"),t(" +100M "),e("span",{class:"token parameter variable"},"-exec"),t(),e("span",{class:"token function"},"rm"),t(),e("span",{class:"token punctuation"},"{"),e("span",{class:"token punctuation"},"}"),t(),e("span",{class:"token punctuation"},"\\"),e("span",{class:"token punctuation"},";"),t(),e("span",{class:"token comment"},"# rimuove tutti i file più grandi di 100MByte")])])],-1),Sz={__name:"121",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[yz,Iz,$z,R(i,G({},{ranges:[""]}),{default:v(()=>[Lz]),_:1},16),Cz,R(i,G({},{ranges:[""]}),{default:v(()=>[Ez]),_:1},16)]),_:1},16)}}},Rz=S(Sz,[["__file","/@slidev/slides/121.md"]]),Tz=e("h1",null,"Linux CLI",-1),Az=e("p",null,"watch - eseguire un programma periodicamente (monitoring)",-1),Mz=e("ul",null,[e("li",null,[t("Il comando "),e("strong",null,"watch"),t(" permette di eseguire un comando periodicamente e di visualizzare il suo output sullo schermo")]),e("li",null,[t("Quindi "),e("strong",null,"watch"),t(" è molto comodo per monitorare un’attività di sistema di cui vogliamo osservare il progresso nel tempo")])],-1),zz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"watch"),t(),e("span",{class:"token operator"},"<"),t(),e("span",{class:"token parameter variable"},"-parametri"),t(" opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("comando"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"watch"),t(),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("Every "),e("span",{class:"token number"},"2"),t(",0s: "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t("                            ")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"6"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"225"),t(" antonio antonio "),e("span",{class:"token number"},"241664"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":13 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"3"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 DIR4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"579"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":21 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"9"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":04 file2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":22 file4")])])],-1),Oz=e("br",null,null,-1),Pz=e("ul",null,[e("li",null,[t("Esegue ogni 2 secondi il comando "),e("code",null,"ls -la")])],-1),Dz={__name:"122",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[Tz,Az,Mz,R(i,G({},{ranges:[""]}),{default:v(()=>[zz]),_:1},16),Oz,Pz]),_:1},16)}}},Nz=S(Dz,[["__file","/@slidev/slides/122.md"]]),Fz=e("h1",null,"Linux CLI",-1),jz=e("p",null,"watch - eseguire un programma periodicamente (monitoring)",-1),Kz=e("ul",null,[e("li",null,"I parametri più importanti sono")],-1),Hz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},"-d: evidenzia le differenze tra un periodo di osservazione e il successivo"),t(`
`),e("span",{class:"line"},[t("-n: specifica l'intervallo di osservazione "),e("span",{class:"token keyword"},"in"),t(" secondi")])])],-1),Wz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"watch"),t(),e("span",{class:"token parameter variable"},"-d"),t(),e("span",{class:"token parameter variable"},"-n1"),t(),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("very "),e("span",{class:"token number"},"1"),t(",0s: "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t("                            ")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"6"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"225"),t(" antonio antonio "),e("span",{class:"token number"},"241664"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":13 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"3"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 DIR4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"579"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":21 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"9"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":04 file2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":22 file4")])])],-1),Bz=e("br",null,null,-1),qz=e("ul",null,[e("li",null,"Visualizza ogni secondo l’output di ls -la evidenziandone le differenze"),e("li",null,"Watch è il tool perfetto per il monitoring di sistema")],-1),Vz={__name:"123",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[Fz,jz,Kz,R(i,G({},{ranges:[""]}),{default:v(()=>[Hz]),_:1},16),R(i,G({},{ranges:[""]}),{default:v(()=>[Wz]),_:1},16),Bz,qz]),_:1},16)}}},Uz=S(Vz,[["__file","/@slidev/slides/123.md"]]),Gz=e("h1",null,"Linux CLI",-1),Yz=e("p",null,"chown - cambiare proprietario di un file",-1),Qz=e("ul",null,[e("li",null,[e("strong",null,"chown"),t(" permette di cambiare l’owner o proprietario di un file")]),e("li",null,"Nello specifico permette di cambiare l’utente e/o il gruppo di appartenenza di un file")],-1),Zz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"chown"),t(),e("span",{class:"token operator"},"<"),t(),e("span",{class:"token parameter variable"},"-parametri"),t(" opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token punctuation"},"["),t("Utente"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"["),t(":Gruppo"),e("span",{class:"token punctuation"},"]"),t(),e("span",{class:"token operator"},"<"),t("file"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"3"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 DIR4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":22 file4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio    antonio    "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"16"),t(),e("span",{class:"token number"},"19"),t(":16 file5")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sudo"),t(),e("span",{class:"token function"},"chown"),t(" root file5 "),e("span",{class:"token comment"},"#cambia l'utente proprietario del file")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"3"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 DIR4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":22 file4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" root    antonio    "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"16"),t(),e("span",{class:"token number"},"19"),t(":16 file5")])])],-1),Jz={__name:"124",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[Gz,Yz,Qz,R(i,G({},{ranges:[""]}),{default:v(()=>[Zz]),_:1},16)]),_:1},16)}}},Xz=S(Jz,[["__file","/@slidev/slides/124.md"]]),e8=e("h1",null,"Linux CLI",-1),n8=e("p",null,"chown - cambiare proprietario di un file",-1),t8=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sudo"),t(),e("span",{class:"token function"},"chown"),t(" root:backup file5 "),e("span",{class:"token comment"},"# cambia il gruppo di appartenenza del file")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"3"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 DIR4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":22 file4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" root    backup     "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"16"),t(),e("span",{class:"token number"},"19"),t(":16 file5")])])],-1),s8=e("br",null,null,-1),o8=e("ul",null,[e("li",null,[e("strong",null,"-R"),t(" è il parametro più importante che cambia l’ownership ricorsivamente di tutti i file e directory")])],-1),a8=e("br",null,null,-1),i8=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"chown"),t(),e("span",{class:"token parameter variable"},"-R"),t(" antonio:backup DIR4")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t(" $ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 DIR3")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"3"),t(" antonio backup  "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 DIR4")])])],-1),l8={__name:"125",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[e8,n8,R(i,G({},{ranges:[""]}),{default:v(()=>[t8]),_:1},16),s8,o8,a8,R(i,G({},{ranges:[""]}),{default:v(()=>[i8]),_:1},16)]),_:1},16)}}},r8=S(l8,[["__file","/@slidev/slides/125.md"]]),c8=e("h1",null,"Linux CLI",-1),u8=e("p",null,"chmod - cambiare permessi di un file",-1),p8=e("ul",null,[e("li",null,[t("Il comando "),e("strong",null,"chmod"),t(" permette di cambiare i permessi di un file di cui si è proprietari")])],-1),d8=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"chmod"),t(),e("span",{class:"token operator"},"<"),t(),e("span",{class:"token parameter variable"},"-parametri"),t(" opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("octal mode"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("file"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 DIR3")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"3"),t(" antonio backup    "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 DIR4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"579"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":21 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"9"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":04 file2")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"chmod"),t(),e("span",{class:"token number"},"551"),t(" file1")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 DIR3")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"3"),t(" antonio backup    "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 DIR4")]),t(`
`),e("span",{class:"line"},[t("-r-xr-x--x   "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"579"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":21 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"9"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":04 file2")])])],-1),m8={__name:"126",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[c8,u8,p8,R(i,G({},{ranges:[""]}),{default:v(()=>[d8]),_:1},16)]),_:1},16)}}},f8=S(m8,[["__file","/@slidev/slides/126.md"]]),h8=e("h1",null,"Linux CLI",-1),_8=e("p",null,"Esercitazione cli_07",-1),g8=e("ul",null,[e("li",null,"Svolgere la seguente esercitazione (Quinz inclusi)")],-1),v8=e("br",null,null,-1),b8=e("p",null,[e("a",{href:"https://linuxjourney.com/lesson/stdout-standard-out-redirect",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/stdout-standard-out-redirect")],-1),k8=e("br",null,null,-1),x8=e("ul",null,[e("li",null,"Domande agli studenti sul contenuto dell’esercitazione")],-1),w8={__name:"127",setup(n){const s={};return L(E),(o,a)=>{const i=Tn("center");return b(),C(D,P(O(s)),{default:v(()=>[h8,_8,g8,v8,R(i,null,{default:v(()=>[b8]),_:1}),k8,x8]),_:1},16)}}},y8=S(w8,[["__file","/@slidev/slides/127.md"]]),I8=e("h1",null,"Linux CLI",-1),$8=e("p",null,"Esercitazione cli_08",-1),L8=e("ul",null,[e("li",null,"Svolgere la seguente esercitazione (Quinz inclusi)")],-1),C8=e("br",null,null,-1),E8=e("p",null,[e("a",{href:"https://linuxjourney.com/lesson/regular-expressions-regex",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/regular-expressions-regex")],-1),S8=e("br",null,null,-1),R8=e("ul",null,[e("li",null,"Svolgere i punti dal 2 al 8 inclusi"),e("li",null,"Domande agli studenti sul contenuto dell’esercitazione")],-1),T8={__name:"128",setup(n){const s={};return L(E),(o,a)=>{const i=Tn("center");return b(),C(D,P(O(s)),{default:v(()=>[I8,$8,L8,C8,R(i,null,{default:v(()=>[E8]),_:1}),S8,R8]),_:1},16)}}},A8=S(T8,[["__file","/@slidev/slides/128.md"]]),M8=e("p",null," ",-1),z8={__name:"129",setup(n){const s={};return L(E),(o,a)=>{const i=ct;return b(),C(D,P(O(s)),{default:v(()=>[M8,R(i,{fs:"100px"},{default:v(()=>[t(" Gestione dei processi ")]),_:1})]),_:1},16)}}},O8=S(z8,[["__file","/@slidev/slides/129.md"]]),P8=e("h1",null,"Linux CLI",-1),D8=e("p",null,"ps - visualizza i processi di sistema",-1),N8=e("ul",null,[e("li",null,[t("Il comando "),e("strong",null,"ps"),t(" visualizza una snapshot dei processi in esecuzione sul sistema")]),e("li",null,"Ha 32 parametri opzionali ma i più comuni sono")],-1),F8=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("-a: visualizza tutti i processi "),e("span",{class:"token keyword"},"in"),t(" esecuzione")]),t(`
`),e("span",{class:"line"},"-u: visualizza il nome del proprietario dei processi"),t(`
`),e("span",{class:"line"},"-x: visualizza anche i processi root")])],-1),j8=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ps"),t(" aux o "),e("span",{class:"token function"},"ps"),t(),e("span",{class:"token parameter variable"},"-aux")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token environment constant"},"USER"),t("         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND")]),t(`
`),e("span",{class:"line"},[t("root           "),e("span",{class:"token number"},"1"),t("  "),e("span",{class:"token number"},"0.0"),t("  "),e("span",{class:"token number"},"0.0"),t(),e("span",{class:"token number"},"166600"),t(),e("span",{class:"token number"},"11996"),t(" ?        Ss   set14   "),e("span",{class:"token number"},"0"),t(":04 /sbin/init splash")]),t(`
`),e("span",{class:"line"},[t("root           "),e("span",{class:"token number"},"2"),t("  "),e("span",{class:"token number"},"0.0"),t("  "),e("span",{class:"token number"},"0.0"),t("      "),e("span",{class:"token number"},"0"),t("     "),e("span",{class:"token number"},"0"),t(" ?        S    set14   "),e("span",{class:"token number"},"0"),t(":00 "),e("span",{class:"token punctuation"},"["),t("kthreadd"),e("span",{class:"token punctuation"},"]")]),t(`
`),e("span",{class:"line"},[t("root           "),e("span",{class:"token number"},"3"),t("  "),e("span",{class:"token number"},"0.0"),t("  "),e("span",{class:"token number"},"0.0"),t("      "),e("span",{class:"token number"},"0"),t("     "),e("span",{class:"token number"},"0"),t(" ?        I"),e("span",{class:"token operator"},"<"),t("   set14   "),e("span",{class:"token number"},"0"),t(":00 "),e("span",{class:"token punctuation"},"["),t("rcu_gp"),e("span",{class:"token punctuation"},"]")]),t(`
`),e("span",{class:"line"},[t("root           "),e("span",{class:"token number"},"4"),t("  "),e("span",{class:"token number"},"0.0"),t("  "),e("span",{class:"token number"},"0.0"),t("      "),e("span",{class:"token number"},"0"),t("     "),e("span",{class:"token number"},"0"),t(" ?        I"),e("span",{class:"token operator"},"<"),t("   set14   "),e("span",{class:"token number"},"0"),t(":00 "),e("span",{class:"token punctuation"},"["),t("rcu_par_gp"),e("span",{class:"token punctuation"},"]")]),t(`
`),e("span",{class:"line"},[t("antonio     "),e("span",{class:"token number"},"3329"),t("  "),e("span",{class:"token number"},"0.0"),t("  "),e("span",{class:"token number"},"0.1"),t(),e("span",{class:"token number"},"271324"),t(),e("span",{class:"token number"},"19684"),t(" ?        S"),e("span",{class:"token operator"},"<"),t("sl set14   "),e("span",{class:"token number"},"0"),t(":08 /usr/bin/wireplumber")]),t(`
`),e("span",{class:"line"},[t("antonio     "),e("span",{class:"token number"},"3330"),t("  "),e("span",{class:"token number"},"0.0"),t("  "),e("span",{class:"token number"},"0.1"),t("  "),e("span",{class:"token number"},"59836"),t(),e("span",{class:"token number"},"25776"),t(" ?        S"),e("span",{class:"token operator"},"<"),t("sl set14   "),e("span",{class:"token number"},"0"),t(":17 /usr/bin/pipewire-pulse")]),t(`
`),e("span",{class:"line"},[t("antonio     "),e("span",{class:"token number"},"3332"),t("  "),e("span",{class:"token number"},"0.0"),t("  "),e("span",{class:"token number"},"0.0"),t(),e("span",{class:"token number"},"325608"),t("  "),e("span",{class:"token number"},"9352"),t(" ?        SNLl set14   "),e("span",{class:"token number"},"0"),t(":03 /usr/bin/gnome-keyring-daemon")]),t(`
`),e("span",{class:"line"},[t("antonio     "),e("span",{class:"token number"},"3334"),t("  "),e("span",{class:"token number"},"0.0"),t("  "),e("span",{class:"token number"},"0.0"),t("   "),e("span",{class:"token number"},"9672"),t("  "),e("span",{class:"token number"},"4280"),t(" ?        SNs  set14   "),e("span",{class:"token number"},"0"),t(":00 /usr/bin/dbus-broker-launch")]),t(`
`),e("span",{class:"line"},[t("antonio     "),e("span",{class:"token number"},"3338"),t("  "),e("span",{class:"token number"},"0.0"),t("  "),e("span",{class:"token number"},"0.1"),t("  "),e("span",{class:"token number"},"30732"),t(),e("span",{class:"token number"},"28020"),t(" ?        SN   set14   "),e("span",{class:"token number"},"0"),t(":09 dbus-broker "),e("span",{class:"token parameter variable"},"--log"),t(),e("span",{class:"token number"},"4"),t()]),t(`
`),e("span",{class:"line"},[t("antonio     "),e("span",{class:"token number"},"3340"),t("  "),e("span",{class:"token number"},"0.0"),t("  "),e("span",{class:"token number"},"0.0"),t(),e("span",{class:"token number"},"250744"),t("  "),e("span",{class:"token number"},"8516"),t(" ?        SNsl set14   "),e("span",{class:"token number"},"0"),t(":00 /usr/libexec/gvfsd")])])],-1),K8={__name:"130",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[P8,D8,N8,R(i,G({},{ranges:[""]}),{default:v(()=>[F8]),_:1},16),R(i,G({},{ranges:[""]}),{default:v(()=>[j8]),_:1},16)]),_:1},16)}}},H8=S(K8,[["__file","/@slidev/slides/130.md"]]),W8=e("h1",null,"Linux CLI",-1),B8=e("p",null,"top - monitor dei processi",-1),q8=e("ul",null,[e("li",null,[t("Il comando "),e("strong",null,"top"),t(" permette di monitorare in realtime lo stato dei processi e del sistema")])],-1),V8=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"top"),t(" o "),e("span",{class:"token function"},"top"),t(),e("span",{class:"token parameter variable"},"-d1"),t(),e("span",{class:"token punctuation"},"("),t("-d imposta la frequenza di aggiornamento "),e("span",{class:"token keyword"},"in"),t(" secondi"),e("span",{class:"token punctuation"},")")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token function"},"top"),t(" - "),e("span",{class:"token number"},"19"),t(":33:42 up "),e("span",{class:"token number"},"2"),t(" days, "),e("span",{class:"token number"},"11"),t(":19,  "),e("span",{class:"token number"},"1"),t(" user,  load average: "),e("span",{class:"token number"},"0,99"),t(", "),e("span",{class:"token number"},"0,79"),t(", "),e("span",{class:"token number"},"0,76")]),t(`
`),e("span",{class:"line"},[t("Tasks: "),e("span",{class:"token number"},"324"),t(" total,   "),e("span",{class:"token number"},"1"),t(" running, "),e("span",{class:"token number"},"323"),t(" sleeping,   "),e("span",{class:"token number"},"0"),t(" stopped,   "),e("span",{class:"token number"},"0"),t(" zombie")]),t(`
`),e("span",{class:"line"},[t("%Cpu"),e("span",{class:"token punctuation"},"("),t("s"),e("span",{class:"token punctuation"},")"),t(":  "),e("span",{class:"token number"},"0,8"),t(" us,  "),e("span",{class:"token number"},"0,7"),t(" sy,  "),e("span",{class:"token number"},"0,1"),t(" ni, "),e("span",{class:"token number"},"98,2"),t(" id,  "),e("span",{class:"token number"},"0,2"),t(" wa,  "),e("span",{class:"token number"},"0,0"),t(" hi,  "),e("span",{class:"token number"},"0,0"),t(" si,  "),e("span",{class:"token number"},"0,0"),t(" st")]),t(`
`),e("span",{class:"line"},[t("MiB Mem "),e("span",{class:"token builtin class-name"},":"),t("  "),e("span",{class:"token number"},"15791,6"),t(" total,   "),e("span",{class:"token number"},"1786,3"),t(" free,   "),e("span",{class:"token number"},"3292,2"),t(" used,  "),e("span",{class:"token number"},"10713,1"),t(" buff/cache")]),t(`
`),e("span",{class:"line"},[t("MiB Swap:  "),e("span",{class:"token number"},"15792,0"),t(" total,  "),e("span",{class:"token number"},"15791,7"),t(" free,      "),e("span",{class:"token number"},"0,2"),t(" used.   "),e("span",{class:"token number"},"7012,9"),t(" avail Mem")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("    PID "),e("span",{class:"token environment constant"},"USER"),t("      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND")]),t(`
`),e("span",{class:"line"},[t("   "),e("span",{class:"token number"},"3554"),t(" antonio   "),e("span",{class:"token number"},"15"),t("  "),e("span",{class:"token parameter variable"},"-5"),t(),e("span",{class:"token number"},"9759148"),t(),e("span",{class:"token number"},"449940"),t(),e("span",{class:"token number"},"140404"),t(" S   "),e("span",{class:"token number"},"7,0"),t("   "),e("span",{class:"token number"},"2,8"),t("  "),e("span",{class:"token number"},"70"),t(":34.56 gnome-shell")]),t(`
`),e("span",{class:"line"},[t("   "),e("span",{class:"token number"},"3376"),t(" antonio   "),e("span",{class:"token number"},"15"),t("  "),e("span",{class:"token parameter variable"},"-5"),t(),e("span",{class:"token number"},"1576484"),t(),e("span",{class:"token number"},"138616"),t("  "),e("span",{class:"token number"},"74300"),t(" S   "),e("span",{class:"token number"},"4,0"),t("   "),e("span",{class:"token number"},"0,9"),t("  "),e("span",{class:"token number"},"34"),t(":09.73 Xorg     ")]),t(`
`),e("span",{class:"line"},[t(),e("span",{class:"token number"},"127381"),t(" antonio   "),e("span",{class:"token number"},"15"),t("  "),e("span",{class:"token parameter variable"},"-5"),t("  "),e("span",{class:"token number"},"801916"),t("  "),e("span",{class:"token number"},"81964"),t("  "),e("span",{class:"token number"},"50044"),t(" S   "),e("span",{class:"token number"},"2,3"),t("   "),e("span",{class:"token number"},"0,5"),t("   "),e("span",{class:"token number"},"0"),t(":09.48 terminator")]),t(`
`),e("span",{class:"line"},[t("    "),e("span",{class:"token number"},"588"),t(" root      "),e("span",{class:"token number"},"29"),t("   "),e("span",{class:"token number"},"9"),t("   "),e("span",{class:"token number"},"86268"),t("   "),e("span",{class:"token number"},"6220"),t("   "),e("span",{class:"token number"},"5644"),t(" S   "),e("span",{class:"token number"},"0,3"),t("   "),e("span",{class:"token number"},"0,0"),t("   "),e("span",{class:"token number"},"0"),t(":37.69 system76-power")]),t(`
`),e("span",{class:"line"},[t("   "),e("span",{class:"token number"},"3715"),t(" antonio   "),e("span",{class:"token number"},"25"),t("   "),e("span",{class:"token number"},"5"),t("  "),e("span",{class:"token number"},"325420"),t("  "),e("span",{class:"token number"},"13064"),t("   "),e("span",{class:"token number"},"7372"),t(" S   "),e("span",{class:"token number"},"0,3"),t("   "),e("span",{class:"token number"},"0,1"),t("   "),e("span",{class:"token number"},"4"),t(":46.58 ibus-daemon")]),t(`
`),e("span",{class:"line"},[t(),e("span",{class:"token number"},"118065"),t(" antonio   "),e("span",{class:"token number"},"25"),t("   "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token number"},"1357808"),t("  "),e("span",{class:"token number"},"98500"),t("  "),e("span",{class:"token number"},"57336"),t(" S   "),e("span",{class:"token number"},"0,3"),t("   "),e("span",{class:"token number"},"0,6"),t("   "),e("span",{class:"token number"},"0"),t(":09.93 warpinator")]),t(`
`),e("span",{class:"line"},[t(),e("span",{class:"token number"},"128253"),t(" antonio   "),e("span",{class:"token number"},"25"),t("   "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token number"},"1122"),t(",0g "),e("span",{class:"token number"},"177448"),t(),e("span",{class:"token number"},"130300"),t(" S   "),e("span",{class:"token number"},"0,3"),t("   "),e("span",{class:"token number"},"1,1"),t("   "),e("span",{class:"token number"},"0"),t(":28.34 code  ")]),t(`
`),e("span",{class:"line"},[t("      "),e("span",{class:"token number"},"1"),t(" root      "),e("span",{class:"token number"},"20"),t("   "),e("span",{class:"token number"},"0"),t("  "),e("span",{class:"token number"},"166600"),t("  "),e("span",{class:"token number"},"11996"),t("   "),e("span",{class:"token number"},"8436"),t(" S   "),e("span",{class:"token number"},"0,0"),t("   "),e("span",{class:"token number"},"0,1"),t("   "),e("span",{class:"token number"},"0"),t(":04.89 systemd ")]),t(`
`),e("span",{class:"line"},[t("      "),e("span",{class:"token number"},"2"),t(" root      "),e("span",{class:"token number"},"20"),t("   "),e("span",{class:"token number"},"0"),t("       "),e("span",{class:"token number"},"0"),t("      "),e("span",{class:"token number"},"0"),t("      "),e("span",{class:"token number"},"0"),t(" S   "),e("span",{class:"token number"},"0,0"),t("   "),e("span",{class:"token number"},"0,0"),t("   "),e("span",{class:"token number"},"0"),t(":00.11 kthreadd ")]),t(`
`),e("span",{class:"line"},[t("      "),e("span",{class:"token number"},"3"),t(" root       "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token parameter variable"},"-20"),t("       "),e("span",{class:"token number"},"0"),t("      "),e("span",{class:"token number"},"0"),t("      "),e("span",{class:"token number"},"0"),t(" I   "),e("span",{class:"token number"},"0,0"),t("   "),e("span",{class:"token number"},"0,0"),t("   "),e("span",{class:"token number"},"0"),t(":00.00 rcu_gp")])])],-1),U8={__name:"131",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[W8,B8,q8,R(i,G({},{ranges:[""]}),{default:v(()=>[V8]),_:1},16)]),_:1},16)}}},G8=S(U8,[["__file","/@slidev/slides/131.md"]]),Y8=e("h1",null,"Linux CLI",-1),Q8=e("p",null,"kill - inviare un segnale ad un processo (uccidere un processo)",-1),Z8=e("ul",null,[e("li",null,[t("Il comando "),e("strong",null,"kill"),t(" server per inviare un segnale ad un processo")]),e("li",null,[t("Il segnale più comune è quello nominato "),e("strong",null,"SIGKILL"),t(" che termina e uccide un process")])],-1),J8=e("br",null,null,-1),X8=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"kill"),t(),e("span",{class:"token parameter variable"},"-9"),t(),e("span",{class:"token operator"},"<"),t("process id"),e("span",{class:"token operator"},">"),t("  "),e("span",{class:"token comment"},"# uccide il processo identificato da id")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"kill"),t(),e("span",{class:"token parameter variable"},"-9"),t(),e("span",{class:"token number"},"132480")])])],-1),eO={__name:"132",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[Y8,Q8,Z8,J8,R(i,G({},{ranges:[""]}),{default:v(()=>[X8]),_:1},16)]),_:1},16)}}},nO=S(eO,[["__file","/@slidev/slides/132.md"]]),tO=e("h1",null,"Linux CLI",-1),sO=e("p",null,"free - visualizzare la memoria disponibile",-1),oO=e("ul",null,[e("li",null,"Visualizza lo statod ella memoria RAM indicando la capacità occupata e quella disponibile")],-1),aO=e("br",null,null,-1),iO=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"free"),t(),e("span",{class:"token parameter variable"},"-h")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},"               buff/cache condivisi gratuiti totali utilizzati disponibili"),t(`
`),e("span",{class:"line"},[t("Mem:            15Gi       "),e("span",{class:"token number"},"3"),t(",1Gi       "),e("span",{class:"token number"},"1"),t(",9Gi       "),e("span",{class:"token number"},"4"),t(",2Gi        10Gi       "),e("span",{class:"token number"},"7"),t(",0Gi")]),t(`
`),e("span",{class:"line"},[t("Swap:           15Gi       "),e("span",{class:"token number"},"0"),t(",0Ki        15Gi")])])],-1),lO={__name:"133",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[tO,sO,oO,aO,R(i,G({},{ranges:[""]}),{default:v(()=>[iO]),_:1},16)]),_:1},16)}}},rO=S(lO,[["__file","/@slidev/slides/133.md"]]),cO=e("p",null," ",-1),uO={__name:"134",setup(n){const s={};return L(E),(o,a)=>{const i=ct;return b(),C(D,P(O(s)),{default:v(()=>[cO,R(i,{fs:"100px"},{default:v(()=>[t(" Comandi di sistema ")]),_:1})]),_:1},16)}}},pO=S(uO,[["__file","/@slidev/slides/134.md"]]),dO=e("h1",null,"Linux CLI",-1),mO=e("p",null,"sudo - eseguire un comando come un’altro utente",-1),fO=e("ul",null,[e("li",null,"In alcuni casi è necessario eseguire un comando con i privilegi di root"),e("li",null,"Tuttavia in un sistema, a meno che noi siamo root, non conosciamo la password"),e("li",null,"Pertanto l’amministratore può decidere di fornirci i permessi per eseguire alcuni o tutti i comandi come root"),e("li",null,[t("Per far ciò si usa il comando "),e("strong",null,"sudo")])],-1),hO=e("br",null,null,-1),_O=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sudo"),t(),e("span",{class:"token operator"},"<"),t("comando"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token comment"},"# esegue comando come root")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sudo"),t(),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" /root")]),t(`
`),e("span",{class:"line"},[t("drwx------  "),e("span",{class:"token number"},"8"),t(" root root  "),e("span",{class:"token number"},"4096"),t(" ago "),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"17"),t(":18 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxr-xr-x "),e("span",{class:"token number"},"18"),t(" root root  "),e("span",{class:"token number"},"4096"),t(" ago "),e("span",{class:"token number"},"29"),t(),e("span",{class:"token number"},"11"),t(":42 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("-rw-------  "),e("span",{class:"token number"},"1"),t(" root root "),e("span",{class:"token number"},"32037"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"16"),t(),e("span",{class:"token number"},"19"),t(":19 .bash_history")]),t(`
`),e("span",{class:"line"},[t("-rw-r--r--  "),e("span",{class:"token number"},"1"),t(" root root  "),e("span",{class:"token number"},"3106"),t(" ott "),e("span",{class:"token number"},"15"),t("  "),e("span",{class:"token number"},"2021"),t(" .bashrc")]),t(`
`),e("span",{class:"line"},[t("drwx------  "),e("span",{class:"token number"},"6"),t(" root root  "),e("span",{class:"token number"},"4096"),t(" ago  "),e("span",{class:"token number"},"7"),t(),e("span",{class:"token number"},"15"),t(":11 .cache")]),t(`
`),e("span",{class:"line"},[t("drwxr-xr-x  "),e("span",{class:"token number"},"7"),t(" root root  "),e("span",{class:"token number"},"4096"),t(" ago "),e("span",{class:"token number"},"24"),t(),e("span",{class:"token number"},"18"),t(":05 .config")]),t(`
`),e("span",{class:"line"},[t("drwx------  "),e("span",{class:"token number"},"3"),t(" root root  "),e("span",{class:"token number"},"4096"),t(" nov "),e("span",{class:"token number"},"18"),t("  "),e("span",{class:"token number"},"2022"),t(" .gnupg")]),t(`
`),e("span",{class:"line"},[t("drwx------  "),e("span",{class:"token number"},"3"),t(" root root  "),e("span",{class:"token number"},"4096"),t(" lug  "),e("span",{class:"token number"},"3"),t("  "),e("span",{class:"token number"},"2022"),t(" .launchpadlib")]),t(`
`),e("span",{class:"line"},[t("-rw-------  "),e("span",{class:"token number"},"1"),t(" root root    "),e("span",{class:"token number"},"48"),t(" ago "),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"17"),t(":18 .lesshst")])])],-1),gO={__name:"135",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[dO,mO,fO,hO,R(i,G({},{ranges:[""]}),{default:v(()=>[_O]),_:1},16)]),_:1},16)}}},vO=S(gO,[["__file","/@slidev/slides/135.md"]]),bO=e("h1",null,"Linux CLI",-1),kO=e("p",null,"Il packet manager APT",-1),xO=e("ul",null,[e("li",null,[e("p",null,"Fin dagli albori, ogni distribuzione di linux fornisce un packet manager più o meno sofisticato")]),e("li",null,[e("p",null,"Windows non ha mai fornito un packet manager (esiste qualche scimmiottamento in tempi recenti)")]),e("li",null,[e("p",null,[t("Le distribuzioni derivate da Debiam incorporano tutte il packet manager "),e("code",null,"APT")])]),e("li",null,[e("p",null,[e("strong",null,"APT"),t(" permette con estrema semplicità, e gestendo le dipendenze per noi,di")]),e("ul",null,[e("li",null,"cercare"),e("li",null,"installare"),e("li",null,"rimuovere")])]),e("li",null,[e("p",null,"ogni tipo di software che vogliamo usare su linux")])],-1),wO={__name:"136",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[bO,kO,xO]),_:1},16))}},yO=S(wO,[["__file","/@slidev/slides/136.md"]]),IO=e("h1",null,"Linux CLI",-1),$O=e("p",null,"apt search - ricerchiamo un programma da installare",-1),LO=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"apt"),t(" search "),e("span",{class:"token operator"},"<"),t("stringa"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token comment"},"# cerca nel repository tutti i software e paccketti che includono stringa")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"apt"),t(" search figlet                                                     ")]),t(`
`),e("span",{class:"line"},[t("Ordinamento"),e("span",{class:"token punctuation"},".."),t(". Fatto")]),t(`
`),e("span",{class:"line"},[t("Ricerca sul testo"),e("span",{class:"token punctuation"},".."),t(". Fatto")]),t(`
`),e("span",{class:"line"},[t("figlet/jammy "),e("span",{class:"token number"},"2.2"),t(".5-3 amd64")]),t(`
`),e("span",{class:"line"},"  crea striscioni ASCII con grandi caratteri da testo normale"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("irssi-scripts/jammy,jammy "),e("span",{class:"token number"},"20201016"),t(" all")]),t(`
`),e("span",{class:"line"},"  raccolta di script per irssi"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("php-text-figlet/jammy,jammy "),e("span",{class:"token number"},"1.0"),t(".2-5 all")]),t(`
`),e("span",{class:"line"},"  motore per usare tipi di carattere FIGlet per fare il rendering di testo"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("presentty/jammy,jammy "),e("span",{class:"token number"},"0.2"),t(".1-1.1 all")]),t(`
`),e("span",{class:"line"},[t("  software per presentazioni basato "),e("span",{class:"token function"},"su"),t(" console")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("python3-pyfiglet/jammy,jammy "),e("span",{class:"token number"},"0.8"),t(".0+dfsg-1 all")]),t(`
`),e("span",{class:"line"},[t("  port per Python "),e("span",{class:"token number"},"3"),t(" della specifica FIGlet")])])],-1),CO={__name:"137",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[IO,$O,R(i,G({},{ranges:[""]}),{default:v(()=>[LO]),_:1},16)]),_:1},16)}}},EO=S(CO,[["__file","/@slidev/slides/137.md"]]),SO=e("h1",null,"Linux CLI",-1),RO=e("p",null,"apt install - installare un software",-1),TO=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sudo"),t(),e("span",{class:"token function"},"apt"),t(),e("span",{class:"token function"},"install"),t(" figlet "),e("span",{class:"token comment"},"# installa il paccketto figlet")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("Lettura elenco dei pacchetti"),e("span",{class:"token punctuation"},".."),t(". Fatto")]),t(`
`),e("span",{class:"line"},[t("Generazione albero delle dipendenze"),e("span",{class:"token punctuation"},".."),t(". Fatto")]),t(`
`),e("span",{class:"line"},[t("Lettura informazioni sullo stato"),e("span",{class:"token punctuation"},".."),t(". Fatto   ")]),t(`
`),e("span",{class:"line"},"I seguenti pacchetti NUOVI saranno installati:"),t(`
`),e("span",{class:"line"},"  figlet"),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"0"),t(" aggiornati, "),e("span",{class:"token number"},"1"),t(" installati, "),e("span",{class:"token number"},"0"),t(" da rimuovere e "),e("span",{class:"token number"},"579"),t(" non aggiornati.")]),t(`
`),e("span",{class:"line"},[t("È necessario scaricare "),e("span",{class:"token number"},"133"),t(" kB di archivi.")]),t(`
`),e("span",{class:"line"},[t("Dopo quest'operazione, verranno occupati "),e("span",{class:"token number"},"752"),t(" kB di spazio "),e("span",{class:"token function"},"su"),t(" disco.")]),t(`
`),e("span",{class:"line"},[t("Scaricamento di:1 http://apt.pop-os.org/ubuntu jammy/universe amd64 figlet amd64 "),e("span",{class:"token number"},"2.2"),t(".5-3 "),e("span",{class:"token punctuation"},"["),e("span",{class:"token number"},"133"),t(" kB"),e("span",{class:"token punctuation"},"]")]),t(`
`),e("span",{class:"line"},[t("Recuperati "),e("span",{class:"token number"},"133"),t(" kB "),e("span",{class:"token keyword"},"in"),t(" 0s "),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"799"),t(" kB/s"),e("span",{class:"token punctuation"},")")]),t(`
`),e("span",{class:"line"},"Selezionato il pacchetto figlet non precedentemente selezionato."),t(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"("),t("Lettura del database"),e("span",{class:"token punctuation"},".."),t(". "),e("span",{class:"token number"},"381484"),t(),e("span",{class:"token function"},"file"),t(" e directory attualmente installati."),e("span",{class:"token punctuation"},")")]),t(`
`),e("span",{class:"line"},[t("Preparativi per estrarre "),e("span",{class:"token punctuation"},".."),t("./figlet_2.2.5-3_amd64.deb"),e("span",{class:"token punctuation"},".."),t(".")]),t(`
`),e("span",{class:"line"},[t("Estrazione di figlet "),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"2.2"),t(".5-3"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},".."),t(".")]),t(`
`),e("span",{class:"line"},[t("Configurazione di figlet "),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"2.2"),t(".5-3"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},".."),t(".")]),t(`
`),e("span",{class:"line"},"update-alternatives: viene usato /usr/bin/figlet-figlet per fornire /usr/bin/figlet"),t(`
`),e("span",{class:"line"},[t("Elaborazione dei trigger per man-db "),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"2.10"),t(".2-1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},".."),t(".")])])],-1),AO={__name:"138",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[SO,RO,R(i,G({},{ranges:[""]}),{default:v(()=>[TO]),_:1},16)]),_:1},16)}}},MO=S(AO,[["__file","/@slidev/slides/138.md"]]),zO=e("h1",null,"Linux CLI",-1),OO=e("p",null,"apt remove - disinstallare un software",-1),PO=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sudo"),t(),e("span",{class:"token function"},"apt"),t(" remove figlet "),e("span",{class:"token comment"},"# rimuove il paccketto figlet")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("Lettura elenco dei pacchetti"),e("span",{class:"token punctuation"},".."),t(". Fatto")]),t(`
`),e("span",{class:"line"},[t("Generazione albero delle dipendenze"),e("span",{class:"token punctuation"},".."),t(". Fatto")]),t(`
`),e("span",{class:"line"},[t("Lettura informazioni sullo stato"),e("span",{class:"token punctuation"},".."),t(". Fatto   ")]),t(`
`),e("span",{class:"line"},"I seguenti pacchetti saranno RIMOSSI:"),t(`
`),e("span",{class:"line"},"  figlet"),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"0"),t(" aggiornati, "),e("span",{class:"token number"},"0"),t(" installati, "),e("span",{class:"token number"},"1"),t(" da rimuovere e "),e("span",{class:"token number"},"579"),t(" non aggiornati.")]),t(`
`),e("span",{class:"line"},[t("Dopo quest'operazione, verranno liberati "),e("span",{class:"token number"},"752"),t(" kB di spazio "),e("span",{class:"token function"},"su"),t(" disco.")]),t(`
`),e("span",{class:"line"},[t("Continuare? "),e("span",{class:"token punctuation"},"["),t("S/n"),e("span",{class:"token punctuation"},"]"),t(" s")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"("),t("Lettura del database"),e("span",{class:"token punctuation"},".."),t(". "),e("span",{class:"token number"},"381556"),t(),e("span",{class:"token function"},"file"),t(" e directory attualmente installati."),e("span",{class:"token punctuation"},")")]),t(`
`),e("span",{class:"line"},[t("Rimozione di figlet "),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"2.2"),t(".5-3"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},".."),t(".")]),t(`
`),e("span",{class:"line"},"update-alternatives: viene usato /usr/bin/figlet-toilet per fornire /usr/bin/figlet"),t(`
`),e("span",{class:"line"},[t("Elaborazione dei trigger per man-db "),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"2.10"),t(".2-1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},".."),t(".")])])],-1),DO={__name:"139",setup(n){const s={};return L(E),(o,a)=>{const i=ee;return b(),C(D,P(O(s)),{default:v(()=>[zO,OO,R(i,G({},{ranges:[""]}),{default:v(()=>[PO]),_:1},16)]),_:1},16)}}},NO=S(DO,[["__file","/@slidev/slides/139.md"]]),FO="/3/linux_cli/assets/hh01-23d0a28c.webp",jO=e("img",{src:FO,style:{position:"relative",top:"-20px"}},null,-1),KO={__name:"140",setup(n){const s={};return L(E),(o,a)=>(b(),C(D,P(O(s)),{default:v(()=>[jO]),_:1},16))}},HO=S(KO,[["__file","/@slidev/slides/140.md"]]),WO=[{path:"1",name:"page-1",component:$$,meta:{theme:"default",background:"/cover.png",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"RETI 3",as:"2024/2025",version:"1.1.3",title:"SISTEMI & RETI 3",slide:{raw:`---
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
version: '1.1.3'
---  

<!-- https://www.linuxjournal.com/content/linux-command-line-interface-introduction-guide#firstlook -->

# SISTEMI & RETI 3

Linux CLI

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>
`,title:"SISTEMI & RETI 3",level:1,content:`<!-- https://www.linuxjournal.com/content/linux-command-line-interface-introduction-guide#firstlook -->

# SISTEMI & RETI 3

Linux CLI

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>`,frontmatter:{theme:"default",background:"/cover.png",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"RETI 3",as:"2024/2025",version:"1.1.3",title:"SISTEMI & RETI 3"},index:0,start:0,end:29,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:A$,meta:{slide:{raw:`
# Linux CLI 

<img src="/media/cli_00.png" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 

<img src="/media/cli_00.png" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:1,start:30,end:36,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:D$,meta:{slide:{raw:`
# Linux CLI 

<img src="/media/c_01.jpg" width="650" style="margin:auto;position:relative; left: 0px; top: 0px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 

<img src="/media/c_01.jpg" width="650" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:2,start:37,end:42,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:H$,meta:{slide:{raw:`
# Linux CLI 

<img src="/media/c_02.jpg" width="600" style="margin:auto;position:relative; left: 0px; top: 0px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 

<img src="/media/c_02.jpg" width="600" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:3,start:43,end:48,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:U$,meta:{slide:{raw:`
# Linux CLI 

<img src="/media/c_03.jpg" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 

<img src="/media/c_03.jpg" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:4,start:49,end:54,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:J$,meta:{slide:{raw:`
# Linux CLI

Esercitarsi con Linux e Materiale Aggiuntivo

- [The_Complete_Linux_Manual](/support/3/linux_cli/The_Complete_Linux_Manual.pdf)
- [How_Linux_Works](/support/3/linux_cli/How_Linux_Works.epub)
- [Learning_Modern_Linux](/support/3/linux_cli/Learning_Modern_Linux.epub)
- [Linux CLI Commands](/support/3/linux_cli/linux_commands.pdf)
- [Introduction to Bash](/support/3/linux_cli/introduction-to-bash-scripting-light.pdf)
- [Linux Journey](https://linuxjourney.com)
- [Linux Survival](https://linuxsurvival.com)
- [Linux Interactive Game](https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html)
- [llthw](https://web.archive.org/web/20130926213426/http://nixsrv.com/llthw)
- [introduction-to-linux-installation](https://www.codecademy.com/learn/introduction-to-linux-installation)
- [intro-to-the-command-line](https://www.codecademy.com/learn/intro-to-the-command-line)
- [learn-the-command-line](https://www.codecademy.com/learn/learn-the-command-line-viewing-and-changing-the-file-system)
- [learn-the-command-line-redirecting-input-and-output](https://www.codecademy.com/learn/learn-the-command-line-redirecting-input-and-output)
`,title:"Linux CLI",level:1,content:`# Linux CLI

Esercitarsi con Linux e Materiale Aggiuntivo

- [The_Complete_Linux_Manual](/support/3/linux_cli/The_Complete_Linux_Manual.pdf)
- [How_Linux_Works](/support/3/linux_cli/How_Linux_Works.epub)
- [Learning_Modern_Linux](/support/3/linux_cli/Learning_Modern_Linux.epub)
- [Linux CLI Commands](/support/3/linux_cli/linux_commands.pdf)
- [Introduction to Bash](/support/3/linux_cli/introduction-to-bash-scripting-light.pdf)
- [Linux Journey](https://linuxjourney.com)
- [Linux Survival](https://linuxsurvival.com)
- [Linux Interactive Game](https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html)
- [llthw](https://web.archive.org/web/20130926213426/http://nixsrv.com/llthw)
- [introduction-to-linux-installation](https://www.codecademy.com/learn/introduction-to-linux-installation)
- [intro-to-the-command-line](https://www.codecademy.com/learn/intro-to-the-command-line)
- [learn-the-command-line](https://www.codecademy.com/learn/learn-the-command-line-viewing-and-changing-the-file-system)
- [learn-the-command-line-redirecting-input-and-output](https://www.codecademy.com/learn/learn-the-command-line-redirecting-input-and-output)`,frontmatter:{},index:5,start:55,end:74,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:s3,meta:{slide:{raw:`
# Linux CLI

Esercitarsi con Linux e Materiale Aggiuntivo

- [introduction-to-linux-users-and-permissions](https://www.codecademy.com/learn/introduction-to-linux-users-and-permissions)
- [introduction-to-linux-bash-scripting](https://www.codecademy.com/learn/introduction-to-linux-bash-scripting)
- [Linux Fundamentals](https://linux-training.be/linuxfun.pdf?ref=itsfoss.com)
- [Ultimate Linux Beginner Guide](https://linuxnewbieguide.org/wp-content/uploads/2016/07/The-Ultimate-Linux-Newbie-Guide-eBook-Edition-January-2017.pdf)
- [Cisco Linux From Scratch](https://www.netacad.com/courses/os-it/ndg-linux-unhatched?ref=itsfoss.com)
- [Cisco NDG Linux Essentials](https://www.netacad.com/courses/os-it/ndg-linux-essentials)
- [Cisco NDG Linux 1](https://www.netacad.com/courses/os-it/ndg-linux-I)
- [Cisco NDG Linux 2](https://www.netacad.com/courses/os-it/ndg-linux-II)
- [The Linux Command Line](https://sourceforge.net/projects/linuxcommand/files/AWTLCL/21.10/AWTLCL-21.10.pdf/download)
- [Learning The Shell](https://linuxcommand.org/lc3_learning_the_shell.php)
- [Bash builtins](https://linuxcommand.org/lc3_man_page_index.php#builtins)
- [File utilities](https://linuxcommand.org/lc3_man_page_index.php#file)
`,title:"Linux CLI",level:1,content:`# Linux CLI

Esercitarsi con Linux e Materiale Aggiuntivo

- [introduction-to-linux-users-and-permissions](https://www.codecademy.com/learn/introduction-to-linux-users-and-permissions)
- [introduction-to-linux-bash-scripting](https://www.codecademy.com/learn/introduction-to-linux-bash-scripting)
- [Linux Fundamentals](https://linux-training.be/linuxfun.pdf?ref=itsfoss.com)
- [Ultimate Linux Beginner Guide](https://linuxnewbieguide.org/wp-content/uploads/2016/07/The-Ultimate-Linux-Newbie-Guide-eBook-Edition-January-2017.pdf)
- [Cisco Linux From Scratch](https://www.netacad.com/courses/os-it/ndg-linux-unhatched?ref=itsfoss.com)
- [Cisco NDG Linux Essentials](https://www.netacad.com/courses/os-it/ndg-linux-essentials)
- [Cisco NDG Linux 1](https://www.netacad.com/courses/os-it/ndg-linux-I)
- [Cisco NDG Linux 2](https://www.netacad.com/courses/os-it/ndg-linux-II)
- [The Linux Command Line](https://sourceforge.net/projects/linuxcommand/files/AWTLCL/21.10/AWTLCL-21.10.pdf/download)
- [Learning The Shell](https://linuxcommand.org/lc3_learning_the_shell.php)
- [Bash builtins](https://linuxcommand.org/lc3_man_page_index.php#builtins)
- [File utilities](https://linuxcommand.org/lc3_man_page_index.php#file)`,frontmatter:{},index:6,start:75,end:93,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:r3,meta:{slide:{raw:`
# Linux CLI

Esercitarsi con Linux e Materiale Aggiuntivo

- [Text utilities](https://linuxcommand.org/lc3_man_page_index.php#text)
- [Shell utilities](https://linuxcommand.org/lc3_man_page_index.php#shell)
- [Misc commands](https://linuxcommand.org/lc3_man_page_index.php#other)
- [Intro to Linux](https://tldp.org/LDP/intro-linux/intro-linux.pdf?ref=itsfoss.com)
- [Learn Linux in 5 Days](https://www.linuxtrainingacademy.com/itsfoss-ll5d/)

`,title:"Linux CLI",level:1,content:`# Linux CLI

Esercitarsi con Linux e Materiale Aggiuntivo

- [Text utilities](https://linuxcommand.org/lc3_man_page_index.php#text)
- [Shell utilities](https://linuxcommand.org/lc3_man_page_index.php#shell)
- [Misc commands](https://linuxcommand.org/lc3_man_page_index.php#other)
- [Intro to Linux](https://tldp.org/LDP/intro-linux/intro-linux.pdf?ref=itsfoss.com)
- [Learn Linux in 5 Days](https://www.linuxtrainingacademy.com/itsfoss-ll5d/)`,frontmatter:{},index:7,start:94,end:106,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:m3,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Intro
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
Intro
</Cover>`,frontmatter:{},index:8,start:107,end:114,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:v3,meta:{slide:{raw:`
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
  - Unit`,frontmatter:{},index:9,start:115,end:132,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:$3,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazioni

- Per svolgere le esercitazioni seguenti in modo sicuro e in modo riproducibile (tutti glistudenti hanno lo stesso ambiente) utilizziamo una tecnologia chiamta \`Docker\` (la vedremo in dettaglio in 5)
- Quindi le esercitazioni non le svogeremo direttamente sul PC, ma in un ambiente "virtuale" protetto e sicuro
- In altre parole potremo sperimentare senza problemi e senza timore di "rompere" il PC
- Qualsiasi cosa avviene nell'ambiente "virtuale" (container) NON ha impatto sul PC in uso

<Banner mt=30px padding=30px>
<center>
SPERIMETATE CON TRANQUILLITA'
</center>
</Banner>
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazioni

- Per svolgere le esercitazioni seguenti in modo sicuro e in modo riproducibile (tutti glistudenti hanno lo stesso ambiente) utilizziamo una tecnologia chiamta \`Docker\` (la vedremo in dettaglio in 5)
- Quindi le esercitazioni non le svogeremo direttamente sul PC, ma in un ambiente "virtuale" protetto e sicuro
- In altre parole potremo sperimentare senza problemi e senza timore di "rompere" il PC
- Qualsiasi cosa avviene nell'ambiente "virtuale" (container) NON ha impatto sul PC in uso

<Banner mt=30px padding=30px>
<center>
SPERIMETATE CON TRANQUILLITA'
</center>
</Banner>`,frontmatter:{},index:10,start:133,end:149,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:B3,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazioni

- Per eseguire ed entare nell'ambiente virtuale eseguite il seguente comando

<br>

\`\`\`bash
$ docker run -ti --rm profmancusoa/linux-cli:latest

Unable to find image 'profmancusoa/linux-cli:latest' locally
latest: Pulling from profmancusoa/linux-cli
203e9cf21bd2: Pulling fs layer 
5c69d8c91484: Pulling fs layer 
d7c0c274ef0a: Pulling fs layer 
...
...

antonio# 
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazioni

- Per eseguire ed entare nell'ambiente virtuale eseguite il seguente comando

<br>

\`\`\`bash
$ docker run -ti --rm profmancusoa/linux-cli:latest

Unable to find image 'profmancusoa/linux-cli:latest' locally
latest: Pulling from profmancusoa/linux-cli
203e9cf21bd2: Pulling fs layer 
5c69d8c91484: Pulling fs layer 
d7c0c274ef0a: Pulling fs layer 
...
...

antonio# 
\`\`\``,frontmatter:{},index:11,start:150,end:173,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:X3,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_01

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/linux-history](https://linuxjourney.com/lesson/linux-history)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_01

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/linux-history](https://linuxjourney.com/lesson/linux-history)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione`,frontmatter:{},index:12,start:174,end:191,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:a4,meta:{slide:{raw:`
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

<span class="cli" style="font-size:3rem; margin:70px auto; text-align: center; display:block; width:85%;color: #00fe00; background: black; line-height: 4rem; height: 4rem;">Command Line Interface</span>`,frontmatter:{},index:13,start:192,end:204,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:p4,meta:{slide:{raw:`
# Linux CLI 
 
Introduzione

<img src="/media/cli_01.png" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Introduzione

<img src="/media/cli_01.png" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:14,start:205,end:213,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:v4,meta:{slide:{raw:`
# Linux CLI 
 
Introduzione

- La Linea di Comando di Linux (Command Line Interface, CLI) è un'interfaccia testuale che consente agli utenti di comunicare direttamente con il sistema operativo Linux attraverso comandi testuali. 

<img src="/media/cli_02.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Introduzione

- La Linea di Comando di Linux (Command Line Interface, CLI) è un'interfaccia testuale che consente agli utenti di comunicare direttamente con il sistema operativo Linux attraverso comandi testuali. 

<img src="/media/cli_02.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:15,start:214,end:223,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:C4,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_02

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/kernel-overview](https://linuxjourney.com/lesson/kernel-overview)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione


`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_02

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/kernel-overview](https://linuxjourney.com/lesson/kernel-overview)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione`,frontmatter:{},index:16,start:224,end:243,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:A4,meta:{slide:{raw:`
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
  - maggior velocità, flessibilità ed efficienza`,frontmatter:{},index:17,start:244,end:257,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:O4,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Cenni Storici
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Cenni Storici
</Cover>`,frontmatter:{},index:18,start:258,end:266,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:H4,meta:{slide:{raw:`
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


<img src="/media/cli_16.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:19,start:267,end:282,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:U4,meta:{slide:{raw:`
# Linux CLI 
 

<img src="/media/cli_04.png" width="700" style="margin:auto;position:relative; left: 0px; top: -10px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 

<img src="/media/cli_04.png" width="700" style="margin:auto;position:relative; left: 0px; top: -10px;">`,frontmatter:{},index:20,start:283,end:289,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:J4,meta:{slide:{raw:`
# Linux CLI 
 
<img src="/media/cli_03.png" width="600" style="margin:auto;position:relative; left: 0px; top: -10px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
<img src="/media/cli_03.png" width="600" style="margin:auto;position:relative; left: 0px; top: -10px;">`,frontmatter:{},index:21,start:290,end:295,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:nL,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Concetti Chiave
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Concetti Chiave
</Cover>`,frontmatter:{},index:22,start:296,end:304,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:lL,meta:{slide:{raw:`
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

<img src="/media/cli_05.png" width="450" style="margin:auto;position:relative; left: 250px; top: -450px;">`,frontmatter:{},index:23,start:305,end:320,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:fL,meta:{slide:{raw:`
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
❯❯❯ tree -L 1 /
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
❯❯❯ tree -L 1 /
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

</div>`,frontmatter:{},index:24,start:321,end:371,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:wL,meta:{slide:{raw:`
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

**/etc**: è la directory che contiene la maggior parte, se non tutti, i file di configurazione a livello di sistema. Ad esempio, i file che contengono il nome del tuo sistema, gli utenti e le loro password, i nomi delle macchine sulla tua rete e quando e dove dovrebbero essere montate le partizioni sui tuoi dischi rigidi sono tutti qui. E' una directory da <mark>MANEGGIARE CON CURA</mark>.`,frontmatter:{},index:25,start:372,end:385,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:TL,meta:{slide:{raw:`
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

**/mnt**: luogo dove monterai manualmente i dispositivi di archiviazione o le partizioni.`,frontmatter:{},index:26,start:386,end:402,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:FL,meta:{slide:{raw:`
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

**/root**: è la directory home del **superutente** <mark>root</mark> (noto anche come "Amministratore") del sistema. È separato dal resto delle directory home degli utenti in quanto non è un utente normale.`,frontmatter:{},index:27,start:403,end:416,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:GL,meta:{slide:{raw:`
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

In alcuni casi puoi anche manipolare questi dispositivi. Posso, ad esempio, cambiare la luminosità dello schermo del mio portatile modificando il valore memorizzato in /sys/devices/pci0000:00/0000:00:02.0/drm/card0/card0-eDP-1/intel_backlight.Anche per questa directory è consigliato di <mark>NON TOCCARE</mark> finché non sei sicuro di sapere esattamente cosa stai facendo.`,frontmatter:{},index:28,start:417,end:432,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:n6,meta:{slide:{raw:`
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
Comunque sia, /var contiene cose come i log di sistema e delle applicazioni, lo spool della stampante, ed altri tipi di dati. Alcuni web server impostano la document root di default in /var/www`,frontmatter:{},index:29,start:433,end:446,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:r6,meta:{slide:{raw:`
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

<img src="/media/cli_06.png" width="450" style="margin:auto;position:relative; left: 250px; top: -350px;">`,frontmatter:{},index:30,start:447,end:467,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:f6,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:31,start:468,end:495,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:x6,meta:{slide:{raw:`
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

<img src="/media/cli_07.png" width="450" style="margin:auto;position:relative; left: 250px; top: -370px;">`,frontmatter:{},index:32,start:496,end:516,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:R6,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_03

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/filesystem-hierarchy](https://linuxjourney.com/lesson/filesystem-hierarchy)

</center>
<br>

- Svolgere solo i primi 4 punti
- Domande agli studenti sul contenuto dell'esercitazione
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_03

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/filesystem-hierarchy](https://linuxjourney.com/lesson/filesystem-hierarchy)

</center>
<br>

- Svolgere solo i primi 4 punti
- Domande agli studenti sul contenuto dell'esercitazione`,frontmatter:{},index:33,start:517,end:535,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:N6,meta:{slide:{raw:`
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

<img src="/media/cli_08.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:34,start:536,end:549,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:B6,meta:{slide:{raw:`
# Linux CLI 

- **Permessi**: Ogni gruppo ed ogni utente ha una serie di permessi su ogni risorsa (file). Con questo livello di granularità è possibile creare policy dei permessi molto dettagliate e garantire la sicurezza del sistema operativo (*es: non voglio che l'utente Jon possa leggere i miei file*)

<img src="/media/cli_09.png" width="950" style="margin:auto;position:relative; left: 0px; top: 10px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 

- **Permessi**: Ogni gruppo ed ogni utente ha una serie di permessi su ogni risorsa (file). Con questo livello di granularità è possibile creare policy dei permessi molto dettagliate e garantire la sicurezza del sistema operativo (*es: non voglio che l'utente Jon possa leggere i miei file*)

<img src="/media/cli_09.png" width="950" style="margin:auto;position:relative; left: 0px; top: 10px;">`,frontmatter:{},index:35,start:550,end:558,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:Y6,meta:{slide:{raw:`
# Linux CLI 

<img src="/media/cli_10.png" width="950" style="margin:auto;position:relative; left: 0px; top: 80px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 

<img src="/media/cli_10.png" width="950" style="margin:auto;position:relative; left: 0px; top: 80px;">`,frontmatter:{},index:36,start:559,end:565,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:e5,meta:{slide:{raw:`
# Linux CLI 

<img src="/media/cli_11.png" width="950" style="margin:auto;position:relative; left: 0px; top: 50px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 

<img src="/media/cli_11.png" width="950" style="margin:auto;position:relative; left: 0px; top: 50px;">`,frontmatter:{},index:37,start:566,end:571,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:c5,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_04

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/users-and-groups](https://linuxjourney.com/lesson/users-and-groups)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_04

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/users-and-groups](https://linuxjourney.com/lesson/users-and-groups)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione`,frontmatter:{},index:38,start:572,end:590,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:v5,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_05

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/file-permissions](https://linuxjourney.com/lesson/file-permissions)

</center>
<br>

- Svolgere i primi 3 punti
- Domande agli studenti sul contenuto dell'esercitazione
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_05

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/file-permissions](https://linuxjourney.com/lesson/file-permissions)

</center>
<br>

- Svolgere i primi 3 punti
- Domande agli studenti sul contenuto dell'esercitazione`,frontmatter:{},index:39,start:591,end:609,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:$5,meta:{slide:{raw:`
# Linux CLI 

&nbsp;
 
Ecco alcuni concetti chiave relativi alla CLI di Linux:

**Completamento del Tab**: Puoi premere il tasto Tab per completare automaticamente nomi di file, directory e comandi. Questa funzionalità aiuta a risparmiare tempo e riduce gli errori di battitura.

In shell moderne come *zsh* e *fish* il tab può anche completare i comandi e il manuale di sistema

`,title:"Linux CLI",level:1,content:`# Linux CLI 

&nbsp;
 
Ecco alcuni concetti chiave relativi alla CLI di Linux:

**Completamento del Tab**: Puoi premere il tasto Tab per completare automaticamente nomi di file, directory e comandi. Questa funzionalità aiuta a risparmiare tempo e riduce gli errori di battitura.

In shell moderne come *zsh* e *fish* il tab può anche completare i comandi e il manuale di sistema`,frontmatter:{},index:40,start:610,end:622,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:R5,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_12.gif" width="700" style="margin:auto;position:relative; left: 0px; top: 0px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_12.gif" width="700" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:41,start:623,end:630,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:D5,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:42,start:631,end:659,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:j5,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
La Fisolofia Unix
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
La Fisolofia Unix
</Cover>`,frontmatter:{},index:43,start:660,end:667,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:q5,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_12.png" width="900" style="margin:auto;position:relative; left: 0px; top: 100px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_12.png" width="900" style="margin:auto;position:relative; left: 0px; top: 100px;">`,frontmatter:{},index:44,start:668,end:675,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:X5,meta:{slide:{raw:`
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

<img src="/media/cli_13.png" width="250" style="margin:auto;position:relative; left: 0px; top: 10px;">`,frontmatter:{},index:45,start:676,end:691,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:tC,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Le Pipe
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Le Pipe
</Cover>`,frontmatter:{},index:46,start:692,end:700,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:rC,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:47,start:701,end:726,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:_C,meta:{slide:{raw:`
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

<img src="/media/cli_14.png" width="850" style="margin:auto;position:relative; left: 0px; top: 10px;">`,frontmatter:{},index:48,start:727,end:740,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:yC,meta:{slide:{raw:`
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


<img src="/media/cli_15.png" width="500" style="margin:auto;position:relative; left: 100px; top: -40px;">`,frontmatter:{},index:49,start:741,end:756,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:EC,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:50,start:757,end:779,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:MC,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:51,start:780,end:803,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:NC,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:52,start:804,end:822,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:WC,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:53,start:823,end:847,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:YC,meta:{slide:{raw:`
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

Vediamo ora i principali comandi base per poter iniziare ad usare Linux in modo efficiente ed agevole dalla linea di comando`,frontmatter:{},index:54,start:848,end:863,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:o9,meta:{slide:{raw:`
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
- -h è un parametro che dice a ls di visualizzare un output facilmente leggibile da un umano(stampa la dimensione del file in un formato leggibile dall'uomo)`,frontmatter:{},index:55,start:864,end:886,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:l9,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Indice dei Comandi
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Indice dei Comandi
</Cover>`,frontmatter:{},index:56,start:887,end:895,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:d9,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_17.png" width="900" style="margin:auto;position:relative; left: 0px; top: -20px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_17.png" width="900" style="margin:auto;position:relative; left: 0px; top: -20px;">`,frontmatter:{},index:57,start:896,end:902,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:g9,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_18.png" width="900" style="margin:auto;position:relative; left: 0px; top: -20px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_18.png" width="900" style="margin:auto;position:relative; left: 0px; top: -20px;">`,frontmatter:{},index:58,start:903,end:909,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:w9,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_19.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_19.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:59,start:910,end:917,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:C9,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_20.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_20.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:60,start:918,end:925,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:R9,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Comandi di uso generale
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Comandi di uso generale
</Cover>`,frontmatter:{},index:61,start:926,end:934,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:P9,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:62,start:935,end:959,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:B9,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:63,start:960,end:981,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:Q9,meta:{slide:{raw:`
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

\`\`\``,frontmatter:{},index:64,start:982,end:1009,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:aE,meta:{slide:{raw:`
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

In questo modo si ricrea il DB per apropos`,frontmatter:{},index:65,start:1010,end:1036,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:fE,meta:{slide:{raw:`
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

Si può anche utilizzare uno shortcuts da tastiera che è \`CTRL + L\``,frontmatter:{},index:66,start:1037,end:1054,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:xE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:67,start:1055,end:1067,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:IE,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Filesystem
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Filesystem
</Cover>`,frontmatter:{},index:68,start:1068,end:1076,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:RE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:69,start:1077,end:1093,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:DE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:70,start:1094,end:1121,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:WE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:71,start:1122,end:1146,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:YE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:72,start:1147,end:1168,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:eS,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:73,start:1169,end:1196,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:lS,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:74,start:1197,end:1218,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:dS,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:75,start:1219,end:1246,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:gS,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:76,start:1247,end:1274,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:IS,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:77,start:1275,end:1297,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:RS,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:78,start:1298,end:1322,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:OS,meta:{slide:{raw:`
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
  - **Creazione**: indica quando il file è stato creato e rimane costante`,frontmatter:{},index:79,start:1323,end:1336,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:KS,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:80,start:1337,end:1358,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:VS,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:81,start:1359,end:1376,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:tR,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:82,start:1377,end:1404,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:lR,meta:{slide:{raw:`
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

\`\`\``,frontmatter:{},index:83,start:1405,end:1426,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:dR,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:84,start:1427,end:1444,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:gR,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:85,start:1445,end:1465,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:wR,meta:{slide:{raw:`
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

\`\`\``,frontmatter:{},index:86,start:1466,end:1494,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:CR,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:87,start:1495,end:1516,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",name:"page-89",component:AR,meta:{slide:{raw:`
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

\`\`\``,frontmatter:{},index:88,start:1517,end:1532,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:88,no:89},__clicksElements:[],__preloaded:!1}},{path:"90",name:"page-90",component:FR,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:89,start:1533,end:1551,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",name:"page-91",component:BR,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:90,start:1552,end:1574,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:90,no:91},__clicksElements:[],__preloaded:!1}},{path:"92",name:"page-92",component:YR,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:91,start:1575,end:1600,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:91,no:92},__clicksElements:[],__preloaded:!1}},{path:"93",name:"page-93",component:eT,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:92,start:1601,end:1626,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:92,no:93},__clicksElements:[],__preloaded:!1}},{path:"94",name:"page-94",component:aT,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:93,start:1627,end:1652,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:93,no:94},__clicksElements:[],__preloaded:!1}},{path:"95",name:"page-95",component:uT,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:94,start:1653,end:1678,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:94,no:95},__clicksElements:[],__preloaded:!1}},{path:"96",name:"page-96",component:_T,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:95,start:1679,end:1702,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:95,no:96},__clicksElements:[],__preloaded:!1}},{path:"97",name:"page-97",component:$T,meta:{slide:{raw:`
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

\`\`\``,frontmatter:{},index:96,start:1703,end:1726,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:96,no:97},__clicksElements:[],__preloaded:!1}},{path:"98",name:"page-98",component:RT,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:97,start:1727,end:1754,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:97,no:98},__clicksElements:[],__preloaded:!1}},{path:"99",name:"page-99",component:NT,meta:{slide:{raw:`
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

- Entrambi i comandi hanno lo stesso effetto ma il secondo è più comune tra gli amministratori di sistemi Linux`,frontmatter:{},index:98,start:1755,end:1774,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:98,no:99},__clicksElements:[],__preloaded:!1}},{path:"100",name:"page-100",component:GT,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:99,start:1775,end:1802,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:99,no:100},__clicksElements:[],__preloaded:!1}},{path:"101",name:"page-101",component:aA,meta:{slide:{raw:`
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
 
\`\`\``,frontmatter:{},index:100,start:1803,end:1834,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:100,no:101},__clicksElements:[],__preloaded:!1}},{path:"102",name:"page-102",component:dA,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:101,start:1835,end:1859,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:101,no:102},__clicksElements:[],__preloaded:!1}},{path:"103",name:"page-103",component:gA,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:102,start:1860,end:1887,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:102,no:103},__clicksElements:[],__preloaded:!1}},{path:"104",name:"page-104",component:yA,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:103,start:1888,end:1915,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:103,no:104},__clicksElements:[],__preloaded:!1}},{path:"105",name:"page-105",component:SA,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:104,start:1916,end:1942,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:104,no:105},__clicksElements:[],__preloaded:!1}},{path:"106",name:"page-106",component:FA,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:105,start:1943,end:1964,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:105,no:106},__clicksElements:[],__preloaded:!1}},{path:"107",name:"page-107",component:GA,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_06

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/the-shell]https://linuxjourney.com/lesson/the-shell)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_06

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/the-shell]https://linuxjourney.com/lesson/the-shell)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione`,frontmatter:{},index:106,start:1965,end:1982,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:106,no:107},__clicksElements:[],__preloaded:!1}},{path:"108",name:"page-108",component:eM,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:107,start:1983,end:2006,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:107,no:108},__clicksElements:[],__preloaded:!1}},{path:"109",name:"page-109",component:aM,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:108,start:2007,end:2027,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:108,no:109},__clicksElements:[],__preloaded:!1}},{path:"110",name:"page-110",component:dM,meta:{slide:{raw:`
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
- Consultare il manuale per eventuali necessità`,frontmatter:{},index:109,start:2028,end:2053,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:109,no:110},__clicksElements:[],__preloaded:!1}},{path:"111",name:"page-111",component:vM,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:110,start:2054,end:2082,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:110,no:111},__clicksElements:[],__preloaded:!1}},{path:"112",name:"page-112",component:LM,meta:{slide:{raw:`
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

- **uniq** ha rimosso le occorrenze e ora tutti i numeri compaio una sola volta`,frontmatter:{},index:111,start:2083,end:2108,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:111,no:112},__clicksElements:[],__preloaded:!1}},{path:"113",name:"page-113",component:MM,meta:{slide:{raw:`
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

- **uniq** ha mantenuto solo le occorrenze doppie e rimosso quelle singole`,frontmatter:{},index:112,start:2109,end:2128,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:112,no:113},__clicksElements:[],__preloaded:!1}},{path:"114",name:"page-114",component:jM,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:113,start:2129,end:2153,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:113,no:114},__clicksElements:[],__preloaded:!1}},{path:"115",name:"page-115",component:UM,meta:{slide:{raw:`
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

- Spesso usato come parte finale di una pipeline di comandi`,frontmatter:{},index:114,start:2154,end:2174,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:114,no:115},__clicksElements:[],__preloaded:!1}},{path:"116",name:"page-116",component:XM,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:115,start:2175,end:2196,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:115,no:116},__clicksElements:[],__preloaded:!1}},{path:"117",name:"page-117",component:az,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:116,start:2197,end:2225,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:116,no:117},__clicksElements:[],__preloaded:!1}},{path:"118",name:"page-118",component:uz,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:117,start:2226,end:2250,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:117,no:118},__clicksElements:[],__preloaded:!1}},{path:"119",name:"page-119",component:hz,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:118,start:2251,end:2278,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:118,no:119},__clicksElements:[],__preloaded:!1}},{path:"120",name:"page-120",component:wz,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:119,start:2279,end:2302,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:119,no:120},__clicksElements:[],__preloaded:!1}},{path:"121",name:"page-121",component:Rz,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:120,start:2303,end:2331,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:120,no:121},__clicksElements:[],__preloaded:!1}},{path:"122",name:"page-122",component:Nz,meta:{slide:{raw:`
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

- Esegue ogni 2 secondi il comando \`ls -la\``,frontmatter:{},index:121,start:2332,end:2357,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:121,no:122},__clicksElements:[],__preloaded:!1}},{path:"123",name:"page-123",component:Uz,meta:{slide:{raw:`
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
- Watch è il tool perfetto per il monitoring di sistema`,frontmatter:{},index:122,start:2358,end:2385,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:122,no:123},__clicksElements:[],__preloaded:!1}},{path:"124",name:"page-124",component:Xz,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:123,start:2386,end:2410,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:123,no:124},__clicksElements:[],__preloaded:!1}},{path:"125",name:"page-125",component:r8,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:124,start:2411,end:2442,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:124,no:125},__clicksElements:[],__preloaded:!1}},{path:"126",name:"page-126",component:f8,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:125,start:2443,end:2470,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:125,no:126},__clicksElements:[],__preloaded:!1}},{path:"127",name:"page-127",component:y8,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_07

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/stdout-standard-out-redirect](https://linuxjourney.com/lesson/stdout-standard-out-redirect)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_07

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/stdout-standard-out-redirect](https://linuxjourney.com/lesson/stdout-standard-out-redirect)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione`,frontmatter:{},index:126,start:2471,end:2489,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:126,no:127},__clicksElements:[],__preloaded:!1}},{path:"128",name:"page-128",component:A8,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_08

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/regular-expressions-regex](https://linuxjourney.com/lesson/regular-expressions-regex)

</center>
<br>

- Svolgere i punti dal 2 al 8 inclusi
- Domande agli studenti sul contenuto dell'esercitazione

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_08

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/regular-expressions-regex](https://linuxjourney.com/lesson/regular-expressions-regex)

</center>
<br>

- Svolgere i punti dal 2 al 8 inclusi
- Domande agli studenti sul contenuto dell'esercitazione`,frontmatter:{},index:127,start:2490,end:2509,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:127,no:128},__clicksElements:[],__preloaded:!1}},{path:"129",name:"page-129",component:O8,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Gestione dei processi
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
Gestione dei processi
</Cover>`,frontmatter:{},index:128,start:2510,end:2517,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:128,no:129},__clicksElements:[],__preloaded:!1}},{path:"130",name:"page-130",component:H8,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:129,start:2518,end:2547,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:129,no:130},__clicksElements:[],__preloaded:!1}},{path:"131",name:"page-131",component:G8,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:130,start:2548,end:2576,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:130,no:131},__clicksElements:[],__preloaded:!1}},{path:"132",name:"page-132",component:nO,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:131,start:2577,end:2593,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:131,no:132},__clicksElements:[],__preloaded:!1}},{path:"133",name:"page-133",component:rO,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:132,start:2594,end:2610,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:132,no:133},__clicksElements:[],__preloaded:!1}},{path:"134",name:"page-134",component:pO,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Comandi di sistema
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
Comandi di sistema
</Cover>`,frontmatter:{},index:133,start:2611,end:2618,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:133,no:134},__clicksElements:[],__preloaded:!1}},{path:"135",name:"page-135",component:vO,meta:{slide:{raw:`
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

\`\`\``,frontmatter:{},index:134,start:2619,end:2647,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:134,no:135},__clicksElements:[],__preloaded:!1}},{path:"136",name:"page-136",component:yO,meta:{slide:{raw:`
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

- ogni tipo di software che vogliamo usare su linux`,frontmatter:{},index:135,start:2648,end:2664,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:135,no:136},__clicksElements:[],__preloaded:!1}},{path:"137",name:"page-137",component:EO,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:136,start:2665,end:2692,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:136,no:137},__clicksElements:[],__preloaded:!1}},{path:"138",name:"page-138",component:MO,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:137,start:2693,end:2720,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:137,no:138},__clicksElements:[],__preloaded:!1}},{path:"139",name:"page-139",component:NO,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:138,start:2721,end:2743,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:138,no:139},__clicksElements:[],__preloaded:!1}},{path:"140",name:"page-140",component:HO,meta:{slide:{raw:`
<img src="/media/hh01.webp" style="position:relative;top:-20px;">
`,content:'<img src="/media/hh01.webp" style="position:relative;top:-20px;">',frontmatter:{},index:139,start:2744,end:2747,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:139,no:140},__clicksElements:[],__preloaded:!1}},{path:"141",component:h$,meta:{layout:"end"}}],Ye=WO,co=[{name:"play",path:"/",component:Fy,children:[...Ye]},{name:"print",path:"/print",component:d$},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let n=function(s){if(!ro.remote||ro.remote===s.query.password)return!0;if(ro.remote&&s.query.password===void 0){const o=prompt("Enter password");if(ro.remote===o)return!0}return s.params.no?{path:`/${s.params.no}`}:{path:""}};co.push({path:"/presenter/print",component:()=>Ot(()=>import("./PresenterPrint-b6c9ab61.js"),["assets/PresenterPrint-b6c9ab61.js","assets/NoteDisplay-191efd9f.js"])}),co.push({name:"notes",path:"/notes",component:()=>Ot(()=>import("./NotesView-10eae9eb.js"),["assets/NotesView-10eae9eb.js","assets/NoteDisplay-191efd9f.js"]),beforeEnter:n}),co.push({name:"presenter",path:"/presenter/:no",component:()=>Ot(()=>import("./Presenter-6e9af608.js"),["assets/Presenter-6e9af608.js","assets/NoteDisplay-191efd9f.js","assets/DrawingControls-ef8ecf20.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:n}),co.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const wn=wk({history:xb("/3/linux_cli/"),routes:co});function BO(n,s,{mode:o="replace"}={}){return K({get(){const a=wn.currentRoute.value.query[n];return a==null?s??null:Array.isArray(a)?a.filter(Boolean):a},set(a){an(()=>{wn[z(o)]({query:{...wn.currentRoute.value.query,[n]:a}})})}})}const Xm=J(0);an(()=>{wn.afterEach(async()=>{await an(),Xm.value+=1})});const ef=J(0),Kn=K(()=>wn.currentRoute.value),Ns=K(()=>Kn.value.query.print!==void 0),qO=K(()=>Kn.value.query.print==="clicks"),ft=K(()=>Kn.value.query.embedded!==void 0),bn=K(()=>Kn.value.path.startsWith("/presenter")),VO=K(()=>Kn.value.path.startsWith("/notes")),bo=K(()=>Ns.value&&!qO.value),jl=K(()=>Kn.value.query.password),UO=K(()=>!bn.value&&(!Re.remote||jl.value===Re.remote)),Ku=BO("clicks","0"),GO=K(()=>Ye.length-1),YO=K(()=>Kn.value.path),Ve=K(()=>parseInt(YO.value.split(/\//g).slice(-1)[0])||1);K(()=>mi(Ve.value));const mn=K(()=>Ye.find(n=>n.path===`${Ve.value}`));K(()=>{var n,s,o;return(o=(s=(n=mn.value)==null?void 0:n.meta)==null?void 0:s.slide)==null?void 0:o.id});K(()=>{var n,s;return((s=(n=mn.value)==null?void 0:n.meta)==null?void 0:s.layout)||(Ve.value===1?"cover":"default")});const Fi=K(()=>Ye.find(n=>n.path===`${Math.min(Ye.length,Ve.value+1)}`)),QO=K(()=>Ye.find(n=>n.path===`${Math.max(1,Ve.value-1)}`)),ZO=K(()=>{var n,s;return Xm.value,((s=(n=mn.value)==null?void 0:n.meta)==null?void 0:s.__clicksElements)||[]}),Nn=K({get(){if(bo.value)return 99999;let n=+(Ku.value||0);return isNaN(n)&&(n=0),n},set(n){Ku.value=n.toString()}}),Va=K(()=>{var n,s;return+(((s=(n=mn.value)==null?void 0:n.meta)==null?void 0:s.clicks)??ZO.value.length)}),JO=K(()=>Ve.value<Ye.length-1||Nn.value<Va.value),XO=K(()=>Ve.value>1||Nn.value>0),e7=K(()=>Ye.filter(n=>{var s,o;return(o=(s=n.meta)==null?void 0:s.slide)==null?void 0:o.title}).reduce((n,s)=>(zr(n,s),n),[])),n7=K(()=>Or(e7.value,mn.value));K(()=>Pr(n7.value));const t7=K(()=>l7(ef.value,mn.value,QO.value));be(mn,(n,s)=>{ef.value=Number(n==null?void 0:n.path)-Number(s==null?void 0:s.path)});function Dt(){Va.value<=Nn.value?Po():Nn.value+=1}async function Nt(){Nn.value<=0?await Do():Nn.value-=1}function mi(n){return bn.value?`/presenter/${n}`:`/${n}`}function Po(){const n=Math.min(Ye.length,Ve.value+1);return Fs(n)}async function Do(n=!0){const s=Math.max(1,Ve.value-1);await Fs(s),n&&Va.value&&wn.replace({query:{...Kn.value.query,clicks:Va.value}})}function Fs(n,s){return wn.push({path:mi(n),query:{...Kn.value.query,clicks:s}})}function s7(n){const s=J(0),{direction:o,distanceX:a,distanceY:i}=Wv(n,{onSwipeStart(l){l.pointerType==="touch"&&(Mo.value||(s.value=xl()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!s.value||Mo.value)return;const r=Math.abs(a.value),c=Math.abs(i.value);r/window.innerWidth>.3||r>100?o.value==="left"?Dt():Nt():(c/window.innerHeight>.4||c>200)&&(o.value==="down"?Do():Po())}})}async function Kl(){const{saveAs:n}=await Ot(()=>import("./FileSaver.min-23a5d44b.js").then(s=>s.F),[]);n(typeof Re.download=="string"?Re.download:Re.exportFilename?`${Re.exportFilename}.pdf`:"/3/linux_cli/slidev-exported.pdf",`${Re.title}.pdf`)}async function o7(n){var s,o;if(n==null){const a=(o=(s=mn.value)==null?void 0:s.meta)==null?void 0:o.slide;if(!(a!=null&&a.filepath))return!1;n=`${a.filepath}:${a.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(n)}`),!0}function zr(n,s,o=1){var i,l,r,c,u;const a=(l=(i=s.meta)==null?void 0:i.slide)==null?void 0:l.level;a&&a>o&&n.length>0?zr(n[n.length-1].children,s,o+1):n.push({children:[],level:o,path:s.path,hideInToc:!!((r=s.meta)!=null&&r.hideInToc),title:(u=(c=s.meta)==null?void 0:c.slide)==null?void 0:u.title})}function Or(n,s,o=!1,a){return n.map(i=>{const l={...i,active:i.path===(s==null?void 0:s.path),hasActiveParent:o};return l.children.length>0&&(l.children=Or(l.children,s,l.active||l.hasActiveParent,l)),a&&(l.active||l.activeParent)&&(a.activeParent=!0),l})}function Pr(n,s=1){return n.filter(o=>!o.hideInToc).map(o=>({...o,children:Pr(o.children,s+1)}))}const a7={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function i7(n,s=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let o=n.name.includes("|")?n.name:a7[n.name]||n.name;if(o.includes("|")){const[a,i]=o.split("|").map(l=>l.trim());o=s?i:a}if(o)return{...n,name:o}}function l7(n,s,o){var i,l;let a=n>0?(i=o==null?void 0:o.meta)==null?void 0:i.transition:(l=s==null?void 0:s.meta)==null?void 0:l.transition;return a||(a=Re.transition),i7(a,n<0)}function r7(){const n=Re.titleTemplate.replace("%s",Re.title||"Slidev");Wd({title:n,htmlAttrs:Re.htmlAttrs}),b0(`${n} - shared`),y0(`${n} - drawings`);const s=`${location.origin}_${m0()}`;function o(){VO.value||!bn.value&&!d0.includes(location.host.split(":")[0])||(bn.value?(Qs("page",+Ve.value),Qs("clicks",Nn.value)):(Qs("viewerPage",+Ve.value),Qs("viewerClicks",Nn.value)),Qs("lastUpdate",{id:s,type:bn.value?"presenter":"viewer",time:new Date().getTime()}))}wn.afterEach(o),be(Nn,o),k0(a=>{var l;wn.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((l=a.lastUpdate)==null?void 0:l.type)==="presenter"&&(+a.page!=+Ve.value||+Nn.value!=+a.clicks)&&wn.replace({path:mi(a.page),query:{...wn.currentRoute.value.query,clicks:a.clicks||0}})})}const c7=Me({__name:"App",setup(n){return L(E),r7(),(s,o)=>{const a=Tn("RouterView"),i=Tn("StarportCarrier");return b(),ie(Te,null,[R(a),R(i)],64)}}}),u7=S(c7,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/App.vue"]]);function ji(n){return n!==null&&typeof n=="object"}function Hl(n,s,o=".",a){if(!ji(s))return Hl(n,{},o,a);const i=Object.assign({},s);for(const l in n){if(l==="__proto__"||l==="constructor")continue;const r=n[l];r!=null&&(a&&a(i,l,r,o)||(Array.isArray(r)&&Array.isArray(i[l])?i[l]=[...r,...i[l]]:ji(r)&&ji(i[l])?i[l]=Hl(r,i[l],(o?`${o}.`:"")+l.toString(),a):i[l]=r))}return i}function p7(n){return(...s)=>s.reduce((o,a)=>Hl(o,a,"",n),{})}const d7=p7(),nf=1/60*1e3,m7=typeof performance<"u"?()=>performance.now():()=>Date.now(),tf=typeof window<"u"?n=>window.requestAnimationFrame(n):n=>setTimeout(()=>n(m7()),nf);function f7(n){let s=[],o=[],a=0,i=!1,l=!1;const r=new WeakSet,c={schedule:(u,p=!1,d=!1)=>{const m=d&&i,f=m?s:o;return p&&r.add(u),f.indexOf(u)===-1&&(f.push(u),m&&i&&(a=s.length)),u},cancel:u=>{const p=o.indexOf(u);p!==-1&&o.splice(p,1),r.delete(u)},process:u=>{if(i){l=!0;return}if(i=!0,[s,o]=[o,s],o.length=0,a=s.length,a)for(let p=0;p<a;p++){const d=s[p];d(u),r.has(d)&&(c.schedule(d),n())}i=!1,l&&(l=!1,c.process(u))}};return c}const h7=40;let Wl=!0,No=!1,Bl=!1;const Os={delta:0,timestamp:0},Go=["read","update","preRender","render","postRender"],fi=Go.reduce((n,s)=>(n[s]=f7(()=>No=!0),n),{}),ql=Go.reduce((n,s)=>{const o=fi[s];return n[s]=(a,i=!1,l=!1)=>(No||v7(),o.schedule(a,i,l)),n},{}),_7=Go.reduce((n,s)=>(n[s]=fi[s].cancel,n),{});Go.reduce((n,s)=>(n[s]=()=>fi[s].process(Os),n),{});const g7=n=>fi[n].process(Os),sf=n=>{No=!1,Os.delta=Wl?nf:Math.max(Math.min(n-Os.timestamp,h7),1),Os.timestamp=n,Bl=!0,Go.forEach(g7),Bl=!1,No&&(Wl=!1,tf(sf))},v7=()=>{No=!0,Wl=!0,Bl||tf(sf)},of=()=>Os;function af(n,s){var o={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&s.indexOf(a)<0&&(o[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(n);i<a.length;i++)s.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(n,a[i])&&(o[a[i]]=n[a[i]]);return o}var Dr=function(){},Fo=function(){};Dr=function(n,s){!n&&typeof console<"u"&&console.warn(s)},Fo=function(n,s){if(!n)throw new Error(s)};const Vl=(n,s,o)=>Math.min(Math.max(o,n),s),Ki=.001,b7=.01,Hu=10,k7=.05,x7=1;function w7({duration:n=800,bounce:s=.25,velocity:o=0,mass:a=1}){let i,l;Dr(n<=Hu*1e3,"Spring duration must be 10 seconds or less");let r=1-s;r=Vl(k7,x7,r),n=Vl(b7,Hu,n/1e3),r<1?(i=p=>{const d=p*r,m=d*n,f=d-o,h=Ul(p,r),_=Math.exp(-m);return Ki-f/h*_},l=p=>{const m=p*r*n,f=m*o+o,h=Math.pow(r,2)*Math.pow(p,2)*n,_=Math.exp(-m),w=Ul(Math.pow(p,2),r);return(-i(p)+Ki>0?-1:1)*((f-h)*_)/w}):(i=p=>{const d=Math.exp(-p*n),m=(p-o)*n+1;return-Ki+d*m},l=p=>{const d=Math.exp(-p*n),m=(o-p)*(n*n);return d*m});const c=5/n,u=I7(i,l,c);if(n=n*1e3,isNaN(u))return{stiffness:100,damping:10,duration:n};{const p=Math.pow(u,2)*a;return{stiffness:p,damping:r*2*Math.sqrt(a*p),duration:n}}}const y7=12;function I7(n,s,o){let a=o;for(let i=1;i<y7;i++)a=a-n(a)/s(a);return a}function Ul(n,s){return n*Math.sqrt(1-s*s)}const $7=["duration","bounce"],L7=["stiffness","damping","mass"];function Wu(n,s){return s.some(o=>n[o]!==void 0)}function C7(n){let s=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!Wu(n,L7)&&Wu(n,$7)){const o=w7(n);s=Object.assign(Object.assign(Object.assign({},s),o),{velocity:0,mass:1}),s.isResolvedFromDuration=!0}return s}function Nr(n){var{from:s=0,to:o=1,restSpeed:a=2,restDelta:i}=n,l=af(n,["from","to","restSpeed","restDelta"]);const r={done:!1,value:s};let{stiffness:c,damping:u,mass:p,velocity:d,duration:m,isResolvedFromDuration:f}=C7(l),h=Bu,_=Bu;function w(){const y=d?-(d/1e3):0,I=o-s,$=u/(2*Math.sqrt(c*p)),k=Math.sqrt(c/p)/1e3;if(i===void 0&&(i=Math.min(Math.abs(o-s)/100,.4)),$<1){const M=Ul(k,$);h=T=>{const N=Math.exp(-$*k*T);return o-N*((y+$*k*I)/M*Math.sin(M*T)+I*Math.cos(M*T))},_=T=>{const N=Math.exp(-$*k*T);return $*k*N*(Math.sin(M*T)*(y+$*k*I)/M+I*Math.cos(M*T))-N*(Math.cos(M*T)*(y+$*k*I)-M*I*Math.sin(M*T))}}else if($===1)h=M=>o-Math.exp(-k*M)*(I+(y+k*I)*M);else{const M=k*Math.sqrt($*$-1);h=T=>{const N=Math.exp(-$*k*T),B=Math.min(M*T,300);return o-N*((y+$*k*I)*Math.sinh(B)+M*I*Math.cosh(B))/M}}}return w(),{next:y=>{const I=h(y);if(f)r.done=y>=m;else{const $=_(y)*1e3,k=Math.abs($)<=a,M=Math.abs(o-I)<=i;r.done=k&&M}return r.value=r.done?o:I,r},flipTarget:()=>{d=-d,[s,o]=[o,s],w()}}}Nr.needsInterpolation=(n,s)=>typeof n=="string"||typeof s=="string";const Bu=n=>0,lf=(n,s,o)=>{const a=s-n;return a===0?1:(o-n)/a},Fr=(n,s,o)=>-o*n+o*s+n,rf=(n,s)=>o=>Math.max(Math.min(o,s),n),ko=n=>n%1?Number(n.toFixed(5)):n,jo=/(-)?([\d]*\.?[\d])+/g,Gl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,E7=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Yo(n){return typeof n=="string"}const Qo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},xo=Object.assign(Object.assign({},Qo),{transform:rf(0,1)}),fa=Object.assign(Object.assign({},Qo),{default:1}),jr=n=>({test:s=>Yo(s)&&s.endsWith(n)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${n}`}),Yt=jr("deg"),wo=jr("%"),xe=jr("px"),qu=Object.assign(Object.assign({},wo),{parse:n=>wo.parse(n)/100,transform:n=>wo.transform(n*100)}),Kr=(n,s)=>o=>!!(Yo(o)&&E7.test(o)&&o.startsWith(n)||s&&Object.prototype.hasOwnProperty.call(o,s)),cf=(n,s,o)=>a=>{if(!Yo(a))return a;const[i,l,r,c]=a.match(jo);return{[n]:parseFloat(i),[s]:parseFloat(l),[o]:parseFloat(r),alpha:c!==void 0?parseFloat(c):1}},rs={test:Kr("hsl","hue"),parse:cf("hue","saturation","lightness"),transform:({hue:n,saturation:s,lightness:o,alpha:a=1})=>"hsla("+Math.round(n)+", "+wo.transform(ko(s))+", "+wo.transform(ko(o))+", "+ko(xo.transform(a))+")"},S7=rf(0,255),Hi=Object.assign(Object.assign({},Qo),{transform:n=>Math.round(S7(n))}),Rt={test:Kr("rgb","red"),parse:cf("red","green","blue"),transform:({red:n,green:s,blue:o,alpha:a=1})=>"rgba("+Hi.transform(n)+", "+Hi.transform(s)+", "+Hi.transform(o)+", "+ko(xo.transform(a))+")"};function R7(n){let s="",o="",a="",i="";return n.length>5?(s=n.substr(1,2),o=n.substr(3,2),a=n.substr(5,2),i=n.substr(7,2)):(s=n.substr(1,1),o=n.substr(2,1),a=n.substr(3,1),i=n.substr(4,1),s+=s,o+=o,a+=a,i+=i),{red:parseInt(s,16),green:parseInt(o,16),blue:parseInt(a,16),alpha:i?parseInt(i,16)/255:1}}const Yl={test:Kr("#"),parse:R7,transform:Rt.transform},vn={test:n=>Rt.test(n)||Yl.test(n)||rs.test(n),parse:n=>Rt.test(n)?Rt.parse(n):rs.test(n)?rs.parse(n):Yl.parse(n),transform:n=>Yo(n)?n:n.hasOwnProperty("red")?Rt.transform(n):rs.transform(n)},uf="${c}",pf="${n}";function T7(n){var s,o,a,i;return isNaN(n)&&Yo(n)&&((o=(s=n.match(jo))===null||s===void 0?void 0:s.length)!==null&&o!==void 0?o:0)+((i=(a=n.match(Gl))===null||a===void 0?void 0:a.length)!==null&&i!==void 0?i:0)>0}function df(n){typeof n=="number"&&(n=`${n}`);const s=[];let o=0;const a=n.match(Gl);a&&(o=a.length,n=n.replace(Gl,uf),s.push(...a.map(vn.parse)));const i=n.match(jo);return i&&(n=n.replace(jo,pf),s.push(...i.map(Qo.parse))),{values:s,numColors:o,tokenised:n}}function mf(n){return df(n).values}function ff(n){const{values:s,numColors:o,tokenised:a}=df(n),i=s.length;return l=>{let r=a;for(let c=0;c<i;c++)r=r.replace(c<o?uf:pf,c<o?vn.transform(l[c]):ko(l[c]));return r}}const A7=n=>typeof n=="number"?0:n;function M7(n){const s=mf(n);return ff(n)(s.map(A7))}const Zo={test:T7,parse:mf,createTransformer:ff,getAnimatableNone:M7},z7=new Set(["brightness","contrast","saturate","opacity"]);function O7(n){let[s,o]=n.slice(0,-1).split("(");if(s==="drop-shadow")return n;const[a]=o.match(jo)||[];if(!a)return n;const i=o.replace(a,"");let l=z7.has(s)?1:0;return a!==o&&(l*=100),s+"("+l+i+")"}const P7=/([a-z-]*)\(.*?\)/g,Ql=Object.assign(Object.assign({},Zo),{getAnimatableNone:n=>{const s=n.match(P7);return s?s.map(O7).join(" "):n}});function Wi(n,s,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(s-n)*6*o:o<1/2?s:o<2/3?n+(s-n)*(2/3-o)*6:n}function Vu({hue:n,saturation:s,lightness:o,alpha:a}){n/=360,s/=100,o/=100;let i=0,l=0,r=0;if(!s)i=l=r=o;else{const c=o<.5?o*(1+s):o+s-o*s,u=2*o-c;i=Wi(u,c,n+1/3),l=Wi(u,c,n),r=Wi(u,c,n-1/3)}return{red:Math.round(i*255),green:Math.round(l*255),blue:Math.round(r*255),alpha:a}}const D7=(n,s,o)=>{const a=n*n,i=s*s;return Math.sqrt(Math.max(0,o*(i-a)+a))},N7=[Yl,Rt,rs],Uu=n=>N7.find(s=>s.test(n)),Gu=n=>`'${n}' is not an animatable color. Use the equivalent color code instead.`,hf=(n,s)=>{let o=Uu(n),a=Uu(s);Fo(!!o,Gu(n)),Fo(!!a,Gu(s));let i=o.parse(n),l=a.parse(s);o===rs&&(i=Vu(i),o=Rt),a===rs&&(l=Vu(l),a=Rt);const r=Object.assign({},i);return c=>{for(const u in r)u!=="alpha"&&(r[u]=D7(i[u],l[u],c));return r.alpha=Fr(i.alpha,l.alpha,c),o.transform(r)}},F7=n=>typeof n=="number",j7=(n,s)=>o=>s(n(o)),_f=(...n)=>n.reduce(j7);function gf(n,s){return F7(n)?o=>Fr(n,s,o):vn.test(n)?hf(n,s):bf(n,s)}const vf=(n,s)=>{const o=[...n],a=o.length,i=n.map((l,r)=>gf(l,s[r]));return l=>{for(let r=0;r<a;r++)o[r]=i[r](l);return o}},K7=(n,s)=>{const o=Object.assign(Object.assign({},n),s),a={};for(const i in o)n[i]!==void 0&&s[i]!==void 0&&(a[i]=gf(n[i],s[i]));return i=>{for(const l in a)o[l]=a[l](i);return o}};function Yu(n){const s=Zo.parse(n),o=s.length;let a=0,i=0,l=0;for(let r=0;r<o;r++)a||typeof s[r]=="number"?a++:s[r].hue!==void 0?l++:i++;return{parsed:s,numNumbers:a,numRGB:i,numHSL:l}}const bf=(n,s)=>{const o=Zo.createTransformer(s),a=Yu(n),i=Yu(s);return a.numHSL===i.numHSL&&a.numRGB===i.numRGB&&a.numNumbers>=i.numNumbers?_f(vf(a.parsed,i.parsed),o):(Dr(!0,`Complex values '${n}' and '${s}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),r=>`${r>0?s:n}`)},H7=(n,s)=>o=>Fr(n,s,o);function W7(n){if(typeof n=="number")return H7;if(typeof n=="string")return vn.test(n)?hf:bf;if(Array.isArray(n))return vf;if(typeof n=="object")return K7}function B7(n,s,o){const a=[],i=o||W7(n[0]),l=n.length-1;for(let r=0;r<l;r++){let c=i(n[r],n[r+1]);if(s){const u=Array.isArray(s)?s[r]:s;c=_f(u,c)}a.push(c)}return a}function q7([n,s],[o]){return a=>o(lf(n,s,a))}function V7(n,s){const o=n.length,a=o-1;return i=>{let l=0,r=!1;if(i<=n[0]?r=!0:i>=n[a]&&(l=a-1,r=!0),!r){let u=1;for(;u<o&&!(n[u]>i||u===a);u++);l=u-1}const c=lf(n[l],n[l+1],i);return s[l](c)}}function kf(n,s,{clamp:o=!0,ease:a,mixer:i}={}){const l=n.length;Fo(l===s.length,"Both input and output ranges must be the same length"),Fo(!a||!Array.isArray(a)||a.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),n[0]>n[l-1]&&(n=[].concat(n),s=[].concat(s),n.reverse(),s.reverse());const r=B7(s,a,i),c=l===2?q7(n,r):V7(n,r);return o?u=>c(Vl(n[0],n[l-1],u)):c}const hi=n=>s=>1-n(1-s),Hr=n=>s=>s<=.5?n(2*s)/2:(2-n(2*(1-s)))/2,U7=n=>s=>Math.pow(s,n),xf=n=>s=>s*s*((n+1)*s-n),G7=n=>{const s=xf(n);return o=>(o*=2)<1?.5*s(o):.5*(2-Math.pow(2,-10*(o-1)))},wf=1.525,Y7=4/11,Q7=8/11,Z7=9/10,yf=n=>n,Wr=U7(2),J7=hi(Wr),If=Hr(Wr),$f=n=>1-Math.sin(Math.acos(n)),Lf=hi($f),X7=Hr(Lf),Br=xf(wf),eP=hi(Br),nP=Hr(Br),tP=G7(wf),sP=4356/361,oP=35442/1805,aP=16061/1805,Ua=n=>{if(n===1||n===0)return n;const s=n*n;return n<Y7?7.5625*s:n<Q7?9.075*s-9.9*n+3.4:n<Z7?sP*s-oP*n+aP:10.8*n*n-20.52*n+10.72},iP=hi(Ua),lP=n=>n<.5?.5*(1-Ua(1-n*2)):.5*Ua(n*2-1)+.5;function rP(n,s){return n.map(()=>s||If).splice(0,n.length-1)}function cP(n){const s=n.length;return n.map((o,a)=>a!==0?a/(s-1):0)}function uP(n,s){return n.map(o=>o*s)}function ya({from:n=0,to:s=1,ease:o,offset:a,duration:i=300}){const l={done:!1,value:n},r=Array.isArray(s)?s:[n,s],c=uP(a&&a.length===r.length?a:cP(r),i);function u(){return kf(c,r,{ease:Array.isArray(o)?o:rP(r,o)})}let p=u();return{next:d=>(l.value=p(d),l.done=d>=i,l),flipTarget:()=>{r.reverse(),p=u()}}}function pP({velocity:n=0,from:s=0,power:o=.8,timeConstant:a=350,restDelta:i=.5,modifyTarget:l}){const r={done:!1,value:s};let c=o*n;const u=s+c,p=l===void 0?u:l(u);return p!==u&&(c=p-s),{next:d=>{const m=-c*Math.exp(-d/a);return r.done=!(m>i||m<-i),r.value=r.done?p:p+m,r},flipTarget:()=>{}}}const Qu={keyframes:ya,spring:Nr,decay:pP};function dP(n){if(Array.isArray(n.to))return ya;if(Qu[n.type])return Qu[n.type];const s=new Set(Object.keys(n));return s.has("ease")||s.has("duration")&&!s.has("dampingRatio")?ya:s.has("dampingRatio")||s.has("stiffness")||s.has("mass")||s.has("damping")||s.has("restSpeed")||s.has("restDelta")?Nr:ya}function Cf(n,s,o=0){return n-s-o}function mP(n,s,o=0,a=!0){return a?Cf(s+-n,s,o):s-(n-s)+o}function fP(n,s,o,a){return a?n>=s+o:n<=-o}const hP=n=>{const s=({delta:o})=>n(o);return{start:()=>ql.update(s,!0),stop:()=>_7.update(s)}};function Ef(n){var s,o,{from:a,autoplay:i=!0,driver:l=hP,elapsed:r=0,repeat:c=0,repeatType:u="loop",repeatDelay:p=0,onPlay:d,onStop:m,onComplete:f,onRepeat:h,onUpdate:_}=n,w=af(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:y}=w,I,$=0,k=w.duration,M,T=!1,N=!0,B;const j=dP(w);!((o=(s=j).needsInterpolation)===null||o===void 0)&&o.call(s,a,y)&&(B=kf([0,100],[a,y],{clamp:!1}),a=0,y=100);const U=j(Object.assign(Object.assign({},w),{from:a,to:y}));function le(){$++,u==="reverse"?(N=$%2===0,r=mP(r,k,p,N)):(r=Cf(r,k,p),u==="mirror"&&U.flipTarget()),T=!1,h&&h()}function me(){I.stop(),f&&f()}function X(ke){if(N||(ke=-ke),r+=ke,!T){const ye=U.next(Math.max(0,r));M=ye.value,B&&(M=B(M)),T=N?ye.done:r<=0}_==null||_(M),T&&($===0&&(k??(k=r)),$<c?fP(r,k,p,N)&&le():me())}function ve(){d==null||d(),I=l(X),I.start()}return i&&ve(),{stop:()=>{m==null||m(),I.stop()}}}function Sf(n,s){return s?n*(1e3/s):0}function _P({from:n=0,velocity:s=0,min:o,max:a,power:i=.8,timeConstant:l=750,bounceStiffness:r=500,bounceDamping:c=10,restDelta:u=1,modifyTarget:p,driver:d,onUpdate:m,onComplete:f,onStop:h}){let _;function w(k){return o!==void 0&&k<o||a!==void 0&&k>a}function y(k){return o===void 0?a:a===void 0||Math.abs(o-k)<Math.abs(a-k)?o:a}function I(k){_==null||_.stop(),_=Ef(Object.assign(Object.assign({},k),{driver:d,onUpdate:M=>{var T;m==null||m(M),(T=k.onUpdate)===null||T===void 0||T.call(k,M)},onComplete:f,onStop:h}))}function $(k){I(Object.assign({type:"spring",stiffness:r,damping:c,restDelta:u},k))}if(w(n))$({from:n,velocity:s,to:y(n)});else{let k=i*s+n;typeof p<"u"&&(k=p(k));const M=y(k),T=M===o?-1:1;let N,B;const j=U=>{N=B,B=U,s=Sf(U-N,of().delta),(T===1&&U>M||T===-1&&U<M)&&$({from:U,to:M,velocity:s})};I({type:"decay",from:n,velocity:s,timeConstant:l,power:i,restDelta:u,modifyTarget:p,onUpdate:w(k)?j:void 0})}return{stop:()=>_==null?void 0:_.stop()}}const Rf=(n,s)=>1-3*s+3*n,Tf=(n,s)=>3*s-6*n,Af=n=>3*n,Ga=(n,s,o)=>((Rf(s,o)*n+Tf(s,o))*n+Af(s))*n,Mf=(n,s,o)=>3*Rf(s,o)*n*n+2*Tf(s,o)*n+Af(s),gP=1e-7,vP=10;function bP(n,s,o,a,i){let l,r,c=0;do r=s+(o-s)/2,l=Ga(r,a,i)-n,l>0?o=r:s=r;while(Math.abs(l)>gP&&++c<vP);return r}const kP=8,xP=.001;function wP(n,s,o,a){for(let i=0;i<kP;++i){const l=Mf(s,o,a);if(l===0)return s;const r=Ga(s,o,a)-n;s-=r/l}return s}const Ia=11,ha=1/(Ia-1);function yP(n,s,o,a){if(n===s&&o===a)return yf;const i=new Float32Array(Ia);for(let r=0;r<Ia;++r)i[r]=Ga(r*ha,n,o);function l(r){let c=0,u=1;const p=Ia-1;for(;u!==p&&i[u]<=r;++u)c+=ha;--u;const d=(r-i[u])/(i[u+1]-i[u]),m=c+d*ha,f=Mf(m,n,o);return f>=xP?wP(r,m,n,o):f===0?m:bP(r,c,c+ha,n,o)}return r=>r===0||r===1?r:Ga(l(r),s,a)}const Bi={};class IP{constructor(){this.subscriptions=new Set}add(s){return this.subscriptions.add(s),()=>this.subscriptions.delete(s)}notify(s,o,a){if(this.subscriptions.size)for(const i of this.subscriptions)i(s,o,a)}clear(){this.subscriptions.clear()}}function Zu(n){return!isNaN(parseFloat(n))}class $P{constructor(s){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new IP,this.canTrackVelocity=!1,this.updateAndNotify=o=>{this.prev=this.current,this.current=o;const{delta:a,timestamp:i}=of();this.lastUpdated!==i&&(this.timeDelta=a,this.lastUpdated=i),ql.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>ql.postRender(this.velocityCheck),this.velocityCheck=({timestamp:o})=>{this.canTrackVelocity||(this.canTrackVelocity=Zu(this.current)),o!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=s,this.canTrackVelocity=Zu(this.current)}onChange(s){return this.updateSubscribers.add(s)}clearListeners(){this.updateSubscribers.clear()}set(s){this.updateAndNotify(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Sf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(s){return this.stop(),new Promise(o=>{const{stop:a}=s(o);this.stopAnimation=a}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function LP(n){return new $P(n)}const{isArray:CP}=Array;function EP(){const n=J({}),s=a=>{const i=l=>{n.value[l]&&(n.value[l].stop(),n.value[l].destroy(),delete n.value[l])};a?CP(a)?a.forEach(i):i(a):Object.keys(n.value).forEach(i)},o=(a,i,l)=>{if(n.value[a])return n.value[a];const r=LP(i);return r.onChange(c=>l[a]=c),n.value[a]=r,r};return q0(s),{motionValues:n,get:o,stop:s}}function SP(n){return Array.isArray(n)}function Qt(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function qi(n){return{type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function RP(n){return{type:"spring",stiffness:550,damping:n===0?100:30,restDelta:.01,restSpeed:10}}function Vi(){return{type:"keyframes",ease:"linear",duration:300}}function TP(n){return{type:"keyframes",duration:800,values:n}}const Ju={default:RP,x:Qt,y:Qt,z:Qt,rotate:Qt,rotateX:Qt,rotateY:Qt,rotateZ:Qt,scaleX:qi,scaleY:qi,scale:qi,backgroundColor:Vi,color:Vi,opacity:Vi};function zf(n,s){let o;return SP(s)?o=TP:o=Ju[n]||Ju.default,{to:s,...o(s)}}const Xu={...Qo,transform:Math.round},Of={color:vn,backgroundColor:vn,outlineColor:vn,fill:vn,stroke:vn,borderColor:vn,borderTopColor:vn,borderRightColor:vn,borderBottomColor:vn,borderLeftColor:vn,borderWidth:xe,borderTopWidth:xe,borderRightWidth:xe,borderBottomWidth:xe,borderLeftWidth:xe,borderRadius:xe,radius:xe,borderTopLeftRadius:xe,borderTopRightRadius:xe,borderBottomRightRadius:xe,borderBottomLeftRadius:xe,width:xe,maxWidth:xe,height:xe,maxHeight:xe,size:xe,top:xe,right:xe,bottom:xe,left:xe,padding:xe,paddingTop:xe,paddingRight:xe,paddingBottom:xe,paddingLeft:xe,margin:xe,marginTop:xe,marginRight:xe,marginBottom:xe,marginLeft:xe,rotate:Yt,rotateX:Yt,rotateY:Yt,rotateZ:Yt,scale:fa,scaleX:fa,scaleY:fa,scaleZ:fa,skew:Yt,skewX:Yt,skewY:Yt,distance:xe,translateX:xe,translateY:xe,translateZ:xe,x:xe,y:xe,z:xe,perspective:xe,transformPerspective:xe,opacity:xo,originX:qu,originY:qu,originZ:xe,zIndex:Xu,filter:Ql,WebkitFilter:Ql,fillOpacity:xo,strokeOpacity:xo,numOctaves:Xu},qr=n=>Of[n];function Pf(n,s){return s&&typeof n=="number"&&s.transform?s.transform(n):n}function AP(n,s){let o=qr(n);return o!==Ql&&(o=Zo),o.getAnimatableNone?o.getAnimatableNone(s):void 0}const MP={linear:yf,easeIn:Wr,easeInOut:If,easeOut:J7,circIn:$f,circInOut:X7,circOut:Lf,backIn:Br,backInOut:nP,backOut:eP,anticipate:tP,bounceIn:iP,bounceInOut:lP,bounceOut:Ua};function ep(n){if(Array.isArray(n)){const[s,o,a,i]=n;return yP(s,o,a,i)}else if(typeof n=="string")return MP[n];return n}function zP(n){return Array.isArray(n)&&typeof n[0]!="number"}function np(n,s){return n==="zIndex"?!1:!!(typeof s=="number"||Array.isArray(s)||typeof s=="string"&&Zo.test(s)&&!s.startsWith("url("))}function OP(n){return Array.isArray(n.to)&&n.to[0]===null&&(n.to=[...n.to],n.to[0]=n.from),n}function PP({ease:n,times:s,delay:o,...a}){const i={...a};return s&&(i.offset=s),n&&(i.ease=zP(n)?n.map(ep):ep(n)),o&&(i.elapsed=-o),i}function DP(n,s,o){return Array.isArray(s.to)&&(n.duration||(n.duration=800)),OP(s),NP(n)||(n={...n,...zf(o,s.to)}),{...s,...PP(n)}}function NP({delay:n,repeat:s,repeatType:o,repeatDelay:a,from:i,...l}){return!!Object.keys(l).length}function FP(n,s){return n[s]||n.default||n}function jP(n,s,o,a,i){const l=FP(a,n);let r=l.from===null||l.from===void 0?s.get():l.from;const c=np(n,o);r==="none"&&c&&typeof o=="string"&&(r=AP(n,o));const u=np(n,r);function p(m){const f={from:r,to:o,velocity:a.velocity?a.velocity:s.getVelocity(),onUpdate:h=>s.set(h)};return l.type==="inertia"||l.type==="decay"?_P({...f,...l}):Ef({...DP(l,f,n),onUpdate:h=>{f.onUpdate(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{a.onComplete&&a.onComplete(),i&&i(),m&&m()}})}function d(m){return s.set(o),a.onComplete&&a.onComplete(),i&&i(),m&&m(),{stop:()=>{}}}return!u||!c||l.type===!1?d:p}function KP(){const{motionValues:n,stop:s,get:o}=EP();return{motionValues:n,stop:s,push:(i,l,r,c={},u)=>{const p=r[i],d=o(i,p,r);if(c&&c.immediate){d.set(l);return}const m=jP(i,d,l,c,u);d.start(m)}}}function HP(n,s={},{motionValues:o,push:a,stop:i}=KP()){const l=z(s),r=J(!1);be(o,m=>{r.value=Object.values(m).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const c=m=>{if(!l||!l[m])throw new Error(`The variant ${m} does not exist.`);return l[m]},u=m=>(typeof m=="string"&&(m=c(m)),Promise.all(Object.entries(m).map(([f,h])=>{if(f!=="transition")return new Promise(_=>a(f,h,n,m.transition||zf(f,m[f]),_))}).filter(Boolean)));return{isAnimating:r,apply:u,set:m=>{const f=kl(m)?m:c(m);Object.entries(f).forEach(([h,_])=>{h!=="transition"&&a(h,_,n,{immediate:!0})})},leave:async m=>{let f;if(l&&(l.leave&&(f=l.leave),!l.leave&&l.initial&&(f=l.initial)),!f){m();return}await u(f),m()},stop:i}}const Vr=typeof window<"u",WP=()=>Vr&&window.onpointerdown===null,BP=()=>Vr&&window.ontouchstart===null,qP=()=>Vr&&window.onmousedown===null;function VP({target:n,state:s,variants:o,apply:a}){const i=z(o),l=J(!1),r=J(!1),c=J(!1),u=K(()=>{let d=[];return i&&(i.hovered&&(d=[...d,...Object.keys(i.hovered)]),i.tapped&&(d=[...d,...Object.keys(i.tapped)]),i.focused&&(d=[...d,...Object.keys(i.focused)])),d}),p=K(()=>{const d={};Object.assign(d,s.value),l.value&&i.hovered&&Object.assign(d,i.hovered),r.value&&i.tapped&&Object.assign(d,i.tapped),c.value&&i.focused&&Object.assign(d,i.focused);for(const m in d)u.value.includes(m)||delete d[m];return d});i.hovered&&(Ie(n,"mouseenter",()=>l.value=!0),Ie(n,"mouseleave",()=>{l.value=!1,r.value=!1}),Ie(n,"mouseout",()=>{l.value=!1,r.value=!1})),i.tapped&&(qP()&&(Ie(n,"mousedown",()=>r.value=!0),Ie(n,"mouseup",()=>r.value=!1)),WP()&&(Ie(n,"pointerdown",()=>r.value=!0),Ie(n,"pointerup",()=>r.value=!1)),BP()&&(Ie(n,"touchstart",()=>r.value=!0),Ie(n,"touchend",()=>r.value=!1))),i.focused&&(Ie(n,"focus",()=>c.value=!0),Ie(n,"blur",()=>c.value=!1)),be(p,a)}function UP({set:n,target:s,variants:o,variant:a}){const i=z(o);be(()=>s,()=>{i&&(i.initial&&n("initial"),i.enter&&(a.value="enter"))},{immediate:!0,flush:"pre"})}function GP({state:n,apply:s}){be(n,o=>{o&&s(o)},{immediate:!0})}function YP({target:n,variants:s,variant:o}){const a=z(s);a&&(a.visible||a.visibleOnce)&&Nv(n,([{isIntersecting:i}])=>{a.visible?i?o.value="visible":o.value="initial":a.visibleOnce&&(i&&o.value!=="visibleOnce"?o.value="visibleOnce":o.value||(o.value="initial"))})}function QP(n,s={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){s.lifeCycleHooks&&UP(n),s.syncVariants&&GP(n),s.visibilityHooks&&YP(n),s.eventListeners&&VP(n)}function Df(n={}){const s=Be({...n}),o=J({});return be(s,()=>{const a={};for(const[i,l]of Object.entries(s)){const r=qr(i),c=Pf(l,r);a[i]=c}o.value=a},{immediate:!0,deep:!0}),{state:s,style:o}}function Ur(n,s){be(()=>ln(n),o=>{o&&s(o)},{immediate:!0})}const ZP={x:"translateX",y:"translateY",z:"translateZ"};function Nf(n={},s=!0){const o=Be({...n}),a=J("");return be(o,i=>{let l="",r=!1;if(s&&(i.x||i.y||i.z)){const c=[i.x||0,i.y||0,i.z||0].map(xe.transform).join(",");l+=`translate3d(${c}) `,r=!0}for(const[c,u]of Object.entries(i)){if(s&&(c==="x"||c==="y"||c==="z"))continue;const p=qr(c),d=Pf(u,p);l+=`${ZP[c]||c}(${d}) `}s&&!r&&(l+="translateZ(0px) "),a.value=l.trim()},{immediate:!0,deep:!0}),{state:o,transform:a}}const JP=["","X","Y","Z"],XP=["perspective","translate","scale","rotate","skew"],Ff=["transformPerspective","x","y","z"];XP.forEach(n=>{JP.forEach(s=>{const o=n+s;Ff.push(o)})});const eD=new Set(Ff);function Gr(n){return eD.has(n)}const nD=new Set(["originX","originY","originZ"]);function jf(n){return nD.has(n)}function tD(n){const s={},o={};return Object.entries(n).forEach(([a,i])=>{Gr(a)||jf(a)?s[a]=i:o[a]=i}),{transform:s,style:o}}function Kf(n){const{transform:s,style:o}=tD(n),{transform:a}=Nf(s),{style:i}=Df(o);return a.value&&(i.value.transform=a.value),i.value}function sD(n,s){let o,a;const{state:i,style:l}=Df();return Ur(n,r=>{a=r;for(const c of Object.keys(Of))r.style[c]===null||r.style[c]===""||Gr(c)||jf(c)||(i[c]=r.style[c]);o&&Object.entries(o).forEach(([c,u])=>r.style[c]=u),s&&s(i)}),be(l,r=>{if(!a){o=r;return}for(const c in r)a.style[c]=r[c]},{immediate:!0}),{style:i}}function oD(n){const s=n.trim().split(/\) |\)/);if(s.length===1)return{};const o=a=>a.endsWith("px")||a.endsWith("deg")?parseFloat(a):isNaN(Number(a))?Number(a):a;return s.reduce((a,i)=>{if(!i)return a;const[l,r]=i.split("("),u=r.split(",").map(d=>o(d.endsWith(")")?d.replace(")",""):d.trim())),p=u.length===1?u[0]:u;return{...a,[l]:p}},{})}function aD(n,s){Object.entries(oD(s)).forEach(([o,a])=>{const i=["x","y","z"];if(o==="translate3d"){if(a===0){i.forEach(l=>n[l]=0);return}a.forEach((l,r)=>n[i[r]]=l);return}if(a=parseFloat(a),o==="translateX"){n.x=a;return}if(o==="translateY"){n.y=a;return}if(o==="translateZ"){n.z=a;return}n[o]=a})}function iD(n,s){let o,a;const{state:i,transform:l}=Nf();return Ur(n,r=>{a=r,r.style.transform&&aD(i,r.style.transform),o&&(r.style.transform=o),s&&s(i)}),be(l,r=>{if(!a){o=r;return}a.style.transform=r},{immediate:!0}),{transform:i}}function lD(n,s){const o=Be({}),a=r=>Object.entries(r).forEach(([c,u])=>o[c]=u),{style:i}=sD(n,a),{transform:l}=iD(n,a);return be(o,r=>{Object.entries(r).forEach(([c,u])=>{const p=Gr(c)?l:i;p[c]&&p[c]===u||(p[c]=u)})},{immediate:!0,deep:!0}),Ur(n,()=>s&&a(s)),{motionProperties:o,style:i,transform:l}}function rD(n={}){const s=z(n),o=J();return{state:K(()=>{if(o.value)return s[o.value]}),variant:o}}function Hf(n,s={},o){const{motionProperties:a}=lD(n),{variant:i,state:l}=rD(s),r=HP(a,s),c={target:n,variant:i,variants:s,state:l,motionProperties:a,...r};return QP(c,o),c}const cD=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function uD(n,s){const o=n.props?n.props:n.data&&n.data.attrs?n.data.attrs:{};o&&(o.variants&&kl(o.variants)&&(s.value={...s.value,...o.variants}),cD.forEach(a=>{if(a==="delay"){if(o&&o[a]&&typeof o[a]=="number"){const i=o[a];s&&s.value&&(s.value.enter&&(s.value.enter.transition||(s.value.enter.transition={}),s.value.enter.transition={delay:i,...s.value.enter.transition}),s.value.visible&&(s.value.visible.transition||(s.value.visible.transition={}),s.value.visible.transition={delay:i,...s.value.visible.transition}),s.value.visibleOnce&&(s.value.visibleOnce.transition||(s.value.visibleOnce.transition={}),s.value.visibleOnce.transition={delay:i,...s.value.visibleOnce.transition}))}return}a==="visible-once"&&(a="visibleOnce"),o&&o[a]&&kl(o[a])&&(s.value[a]=o[a])}))}function Ui(n){return{created:(o,a,i)=>{const l=a.value&&typeof a.value=="string"?a.value:i.key;l&&Bi[l]&&Bi[l].stop();const r=J(n||{});typeof a.value=="object"&&(r.value=a.value),uD(i,r);const c=Hf(o,r);o.motionInstance=c,l&&(Bi[l]=c)},getSSRProps(o,a){let{initial:i}=o.value||a&&(a==null?void 0:a.props)||{};i=z(i);const l=d7((n==null?void 0:n.initial)||{},i||{});return!l||Object.keys(l).length===0?void 0:{style:Kf(l)}}}}const pD={initial:{opacity:0},enter:{opacity:1}},dD={initial:{opacity:0},visible:{opacity:1}},mD={initial:{opacity:0},visibleOnce:{opacity:1}},fD={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},hD={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},_D={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},gD={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},vD={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},bD={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},kD={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},xD={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},wD={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},yD={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},ID={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},$D={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},LD={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},CD={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},ED={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},SD={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},RD={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},TD={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},AD={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},MD={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},zD={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},OD={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},PD={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},DD={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},ND={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},FD={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},jD={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Zl={__proto__:null,fade:pD,fadeVisible:dD,fadeVisibleOnce:mD,pop:fD,popVisible:hD,popVisibleOnce:_D,rollBottom:LD,rollLeft:gD,rollRight:kD,rollTop:yD,rollVisibleBottom:CD,rollVisibleLeft:vD,rollVisibleOnceBottom:ED,rollVisibleOnceLeft:bD,rollVisibleOnceRight:wD,rollVisibleOnceTop:$D,rollVisibleRight:xD,rollVisibleTop:ID,slideBottom:ND,slideLeft:SD,slideRight:AD,slideTop:OD,slideVisibleBottom:FD,slideVisibleLeft:RD,slideVisibleOnceBottom:jD,slideVisibleOnceLeft:TD,slideVisibleOnceRight:zD,slideVisibleOnceTop:DD,slideVisibleRight:MD,slideVisibleTop:PD},KD=Me({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(n){var c;const s=Hh(),o=Be({});if(!n.is&&!s.default)return()=>yn("div",{});const a=K(()=>{let u;return n.preset&&(u=Zl[n.preset]),u}),i=K(()=>({initial:n.initial,enter:n.enter,leave:n.leave,visible:n.visible,visibleOnce:n.visibleOnce,hovered:n.hovered,tapped:n.tapped,focused:n.focused})),l=K(()=>{const u={...i.value,...a.value||{},...n.variants||{}};return n.delay&&(u.enter.transition={...u.enter.transition},u.enter.transition.delay=parseInt(n.delay)),u}),r=K(()=>{if(!n.is)return;let u=n.is;return typeof r.value=="string"&&!kp(u)&&(u=Tn(u)),u});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||process!=null&&process.dev){const u=p=>{var d;(d=p.variants)!=null&&d.initial&&p.set("initial"),setTimeout(()=>{var m,f,h;(m=p.variants)!=null&&m.enter&&p.apply("enter"),(f=p.variants)!=null&&f.visible&&p.apply("visible"),(h=p.variants)!=null&&h.visibleOnce&&p.apply("visibleOnce")},10)};ri(()=>Object.entries(o).forEach(([p,d])=>u(d)))}return{slots:s,component:r,motionConfig:l,instances:o}},render({slots:n,motionConfig:s,instances:o,component:a}){var c;const i=Kf(s.initial||{}),l=(u,p)=>(u.props||(u.props={}),u.props.style=i,u.props.onVnodeMounted=({el:d})=>{const m=Hf(d,s);o[p]=m},u);if(a){const u=yn(a,void 0,n);return l(u,0),u}return(((c=n.default)==null?void 0:c.call(n))||[]).map((u,p)=>l(u,p))}});function HD(n){const s="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",o="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",a=new RegExp(s.split("").join("|"),"g");return n.toString().replace(/[A-Z]/g,i=>`-${i}`).toLowerCase().replace(/\s+/g,"-").replace(a,i=>o.charAt(s.indexOf(i))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const WD={install(n,s){if(n.directive("motion",Ui()),n.component("Motion",KD),!s||s&&!s.excludePresets)for(const o in Zl){const a=Zl[o];n.directive(`motion-${HD(o)}`,Ui(a))}if(s&&s.directives)for(const o in s.directives){const a=s.directives[o];a.initial,n.directive(`motion-${o}`,Ui(a))}}};var tp;const yo=typeof window<"u",BD=Object.prototype.toString,qD=n=>BD.call(n)==="[object Object]";yo&&((tp=window==null?void 0:window.navigator)!=null&&tp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function VD(n){return sr()?(Ip(n),!0):!1}function UD(n){var s;const o=z(n);return(s=o==null?void 0:o.$el)!=null?s:o}const GD=yo?window:void 0,sp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},op="__vueuse_ssr_handlers__";sp[op]=sp[op]||{};function YD(n,s={}){const{immediate:o=!0,window:a=GD}=s,i=J(!1);let l=null;function r(){!i.value||!a||(n(),l=a.requestAnimationFrame(r))}function c(){!i.value&&a&&(i.value=!0,r())}function u(){i.value=!1,l!=null&&a&&(a.cancelAnimationFrame(l),l=null)}return o&&c(),VD(u),{isActive:i,pause:u,resume:c}}var ap;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(ap||(ap={}));const _i="vue-starport-injection",Wf="vue-starport-options",QD={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Bf={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var ZD=Object.defineProperty,Ya=Object.getOwnPropertySymbols,qf=Object.prototype.hasOwnProperty,Vf=Object.prototype.propertyIsEnumerable,ip=(n,s,o)=>s in n?ZD(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,JD=(n,s)=>{for(var o in s||(s={}))qf.call(s,o)&&ip(n,o,s[o]);if(Ya)for(var o of Ya(s))Vf.call(s,o)&&ip(n,o,s[o]);return n},lp=(n,s)=>{var o={};for(var a in n)qf.call(n,a)&&s.indexOf(a)<0&&(o[a]=n[a]);if(n!=null&&Ya)for(var a of Ya(n))s.indexOf(a)<0&&Vf.call(n,a)&&(o[a]=n[a]);return o};const XD=Me({name:"StarportProxy",props:JD({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Bf),setup(n,s){const o=L(_i),a=K(()=>o.getInstance(n.port,n.component)),i=J(),l=a.value.generateId(),r=J(!1);return a.value.isVisible||(a.value.land(),r.value=!0),xt(async()=>{if(a.value.el){console.error(`[Vue Starport] Multiple proxies of "${a.value.componentName}" with port "${n.port}" detected. The later one will be ignored.`);return}if(a.value.el=i.value,await an(),r.value=!0,a.value.rect.update(),a.value.rect.width===0||a.value.rect.height===0){const c=a.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${a.value.componentName}" (port "${n.port}") has no ${c} on initial render, have you set the size for it?`),console.warn("element:",a.value.el),console.warn("rect:",a.value.rect)}}),Bo(async()=>{a.value.rect.update(),a.value.liftOff(),a.value.el=void 0,r.value=!1,!a.value.options.keepAlive&&(await an(),await an(),!a.value.el&&o.dispose(a.value.port))}),be(()=>n,async()=>{a.value.props&&await an();const c=n,{props:u}=c,p=lp(c,["props"]);a.value.props=u||{},a.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const c=n,{initialProps:u,mountedProps:p}=c,d=lp(c,["initialProps","mountedProps"]),m=G(d,(r.value?p:u)||{});return yn("div",G(m,{id:l,ref:i,"data-starport-proxy":a.value.componentId,"data-starport-landed":a.value.isLanded?"true":void 0,"data-starport-floating":a.value.isLanded?void 0:"true"}),s.slots.default?yn(s.slots.default):void 0)}}});var eN=Object.defineProperty,nN=Object.defineProperties,tN=Object.getOwnPropertyDescriptors,rp=Object.getOwnPropertySymbols,sN=Object.prototype.hasOwnProperty,oN=Object.prototype.propertyIsEnumerable,cp=(n,s,o)=>s in n?eN(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,aN=(n,s)=>{for(var o in s||(s={}))sN.call(s,o)&&cp(n,o,s[o]);if(rp)for(var o of rp(s))oN.call(s,o)&&cp(n,o,s[o]);return n},iN=(n,s)=>nN(n,tN(s));const lN=Me({name:"Starport",inheritAttrs:!0,props:Bf,setup(n,s){const o=J(!1);return xt(()=>{if(o.value=!0,!L(_i))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var r,c;const a=(c=(r=s.slots).default)==null?void 0:c.call(r);if(!a)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(a.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${a.length}`);const i=a[0];let l=i.type;return(!qD(l)||Kt(l))&&(l={render(){return a}}),yn(XD,iN(aN({},n),{key:n.port,component:ni(l),props:i.props}))}}});function rN(n){const s=Be({height:0,width:0,left:0,top:0,update:a,listen:l,pause:r,margin:"0px",padding:"0px"}),o=yo?document.documentElement||document.body:void 0;function a(){if(!yo)return;const c=UD(n);if(!c)return;const{height:u,width:p,left:d,top:m}=c.getBoundingClientRect(),f=window.getComputedStyle(c),h=f.margin,_=f.padding;Object.assign(s,{height:u,width:p,left:d,top:o.scrollTop+m,margin:h,padding:_})}const i=YD(a,{immediate:!1});function l(){yo&&(a(),i.resume())}function r(){i.pause()}return s}let cN=(n,s=21)=>(o=s)=>{let a="",i=o;for(;i--;)a+=n[Math.random()*n.length|0];return a};const up=cN("abcdefghijklmnopqrstuvwxyz",5);function pp(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function uN(n){var s;return n.name||((s=n.__file)==null?void 0:s.split(/[\/\\.]/).slice(-2)[0])||""}var pN=Object.defineProperty,dp=Object.getOwnPropertySymbols,dN=Object.prototype.hasOwnProperty,mN=Object.prototype.propertyIsEnumerable,mp=(n,s,o)=>s in n?pN(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,Gi=(n,s)=>{for(var o in s||(s={}))dN.call(s,o)&&mp(n,o,s[o]);if(dp)for(var o of dp(s))mN.call(s,o)&&mp(n,o,s[o]);return n};function fN(n,s,o={}){const a=uN(s),i=pp(a)||up(),l=J(),r=J(null),c=J(!1),u=J(!1),p=u1(!0),d=J({}),m=K(()=>Gi(Gi(Gi({},QD),o),d.value)),f=J(0);let h;p.run(()=>{h=rN(l),be(l,async I=>{I&&(u.value=!0),await an(),l.value||(u.value=!1)})});const _=pp(n);function w(){return`starport-${i}-${_}-${up()}`}const y=w();return Be({el:l,id:y,port:n,props:r,rect:h,scope:p,isLanded:c,isVisible:u,options:m,liftOffTime:f,component:s,componentName:a,componentId:i,generateId:w,setLocalOptions(I={}){d.value=JSON.parse(JSON.stringify(I))},elRef(){return l},liftOff(){c.value&&(c.value=!1,f.value=Date.now(),h.listen())},land(){c.value||(c.value=!0,h.pause())}})}function hN(n){const s=Be(new Map);function o(i,l){let r=s.get(i);return r||(r=fN(i,l,n),s.set(i,r)),r.component=l,r}function a(i){var l;(l=s.get(i))==null||l.scope.stop(),s.delete(i)}return{portMap:s,dispose:a,getInstance:o}}var _N=Object.defineProperty,gN=Object.defineProperties,vN=Object.getOwnPropertyDescriptors,fp=Object.getOwnPropertySymbols,bN=Object.prototype.hasOwnProperty,kN=Object.prototype.propertyIsEnumerable,hp=(n,s,o)=>s in n?_N(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,xN=(n,s)=>{for(var o in s||(s={}))bN.call(s,o)&&hp(n,o,s[o]);if(fp)for(var o of fp(s))kN.call(s,o)&&hp(n,o,s[o]);return n},wN=(n,s)=>gN(n,vN(s));const yN=Me({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(n){const s=L(_i);if(!s)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const o=K(()=>s.getInstance(n.port,n.component)),a=K(()=>{var r;return((r=o.value.el)==null?void 0:r.id)||o.value.id}),i=K(()=>{const r=Date.now()-o.value.liftOffTime,c=Math.max(0,o.value.options.duration-r),u=o.value.rect,p={position:"absolute",left:0,top:0,width:`${u.width}px`,height:`${u.height}px`,margin:u.margin,padding:u.padding,transform:`translate3d(${u.left}px,${u.top}px,0px)`};return!o.value.isVisible||!o.value.el?wN(xN({},p),{zIndex:-1,display:"none"}):(o.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:o.value.options.easing}),p)}),l={onTransitionend(r){o.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${o.value.componentName}" is too short (${r.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${o.value.options.duration/1e3}s).`)}};return()=>{const r=!!(o.value.isLanded&&o.value.el);return yn("div",{style:i.value,"data-starport-craft":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true",onTransitionend:o.value.land},yn(__,{to:r?`#${a.value}`:"body",disabled:!r},yn(o.value.component,G(l,o.value.props))))}}}),IN=Me({name:"StarportCarrier",setup(n,{slots:s}){const o=hN(L(Wf,{}));return In().appContext.app.provide(_i,o),()=>{var i;return[(i=s.default)==null?void 0:i.call(s),Array.from(o.portMap.entries()).map(([l,{component:r}])=>yn(yN,{key:l,port:l,component:r}))]}}});function $N(n={}){return{install(s){s.provide(Wf,n),s.component("Starport",lN),s.component("StarportCarrier",IN)}}}function LN(n){function s(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}s(),window.addEventListener("resize",s),n.app.use(WD),n.app.use($N({keepAlive:!0}))}function $n(n,s,o){var a;return((a=n.instance)==null?void 0:a.$).provides[s]??o}function CN(){return{install(n){n.directive("click",{name:"v-click",mounted(s,o){var d,m,f,h,_,w;if(bo.value||(d=$n(o,ho))!=null&&d.value)return;const a=$n(o,ts),i=$n(o,fo),l=$n(o,vl),r=o.modifiers.hide!==!1&&o.modifiers.hide!=null,c=o.modifiers.fade!==!1&&o.modifiers.fade!=null,u=((m=a==null?void 0:a.value)==null?void 0:m.length)||0,p=c?p0:Ei;if(a&&!((f=a==null?void 0:a.value)!=null&&f.includes(s))&&a.value.push(s),o.value==null&&(o.value=(h=a==null?void 0:a.value)==null?void 0:h.length),typeof o.value=="string"&&(o.value.startsWith("+")||o.value.startsWith("-"))&&(o.value=(((_=a==null?void 0:a.value)==null?void 0:_.length)||0)+Number(o.value)),!(l!=null&&l.value.has(o.value)))l==null||l.value.set(o.value,[s]);else if(!((w=l==null?void 0:l.value.get(o.value))!=null&&w.includes(s))){const y=(l==null?void 0:l.value.get(o.value))||[];l==null||l.value.set(o.value,[s].concat(y))}s==null||s.classList.toggle(Jt,!0),i&&be(i,()=>{const y=(i==null?void 0:i.value)??0,I=o.value!=null?y>=o.value:y>u;s.classList.contains(Si)||s.classList.toggle(p,!I),r!==!1&&r!==void 0&&s.classList.toggle(p,I),s.classList.toggle(Ys,!1);const $=l==null?void 0:l.value.get(y);$==null||$.forEach((k,M)=>{k.classList.toggle(ra,!1),M===$.length-1?k.classList.toggle(Ys,!0):k.classList.toggle(ra,!0)}),s.classList.contains(Ys)||s.classList.toggle(ra,I)},{immediate:!0})},unmounted(s,o){s==null||s.classList.toggle(Jt,!1);const a=$n(o,ts);a!=null&&a.value&&bl(a.value,s)}}),n.directive("after",{name:"v-after",mounted(s,o){var c,u,p;if(bo.value||(c=$n(o,ho))!=null&&c.value)return;const a=$n(o,ts),i=$n(o,fo),l=$n(o,vl),r=a==null?void 0:a.value.length;o.value==null&&(o.value=a==null?void 0:a.value.length),typeof o.value=="string"&&(o.value.startsWith("+")||o.value.startsWith("-"))&&(o.value=(((u=a==null?void 0:a.value)==null?void 0:u.length)||0)+Number(o.value)),l!=null&&l.value.has(o.value)?(p=l==null?void 0:l.value.get(o.value))==null||p.push(s):l==null||l.value.set(o.value,[s]),s==null||s.classList.toggle(Jt,!0),i&&be(i,()=>{const d=(i.value??0)>=(o.value??r??0);s.classList.contains(Si)||s.classList.toggle(Ei,!d),s.classList.toggle(Ys,!1),s.classList.contains(Ys)||s.classList.toggle(ra,d)},{immediate:!0})},unmounted(s){s==null||s.classList.toggle(Jt,!0)}}),n.directive("click-hide",{name:"v-click-hide",mounted(s,o){var r,c,u;if(bo.value||(r=$n(o,ho))!=null&&r.value)return;const a=$n(o,ts),i=$n(o,fo),l=((c=a==null?void 0:a.value)==null?void 0:c.length)||0;a&&!((u=a==null?void 0:a.value)!=null&&u.includes(s))&&a.value.push(s),s==null||s.classList.toggle(Jt,!0),i&&be(i,()=>{const p=(i==null?void 0:i.value)??0,d=o.value!=null?p>=o.value:p>l;s.classList.toggle(Ei,d),s.classList.toggle(Si,d)},{immediate:!0})},unmounted(s,o){s==null||s.classList.toggle(Jt,!1);const a=$n(o,ts);a!=null&&a.value&&bl(a.value,s)}})}}}function EN(n,s){const o=Qm(n),a=Zm(s,o.currentRoute,o.currentPage);return{nav:{...o,...a},configs:Re,themeConfigs:K(()=>Re.themeConfig)}}function SN(){return{install(n){const s=EN(Kn,Nn);n.provide(E,Be(s))}}}const Ws=fg(u7);Ws.use(wn);Ws.use(r0());Ws.use(CN());Ws.use(SN());LN({app:Ws,router:wn});Ws.mount("#app");export{Py as $,Gw as A,J as B,ON as C,mn as D,qe as E,Te as F,hx as G,s7 as H,Nn as I,Va as J,JO as K,Fi as L,xt as M,Be as N,MN as O,PN as P,be as Q,v as R,Sm as S,Ae as T,dn as U,Ex as V,RN as W,TN as X,Mo as Y,Oi as Z,S as _,E as a,Sr as a0,Rr as a1,Ve as a2,$y as a3,S2 as a4,AN as a5,jn as a6,to as a7,ls as a8,tt as a9,Tl as aa,tx as ab,sx as ac,ox as ad,ix as ae,td as af,Md as ag,DN as ah,_n as ai,ma as aj,uw as ak,Bd as al,lx as am,Bo as an,Wd as b,Re as c,Me as d,Y1 as e,ie as f,e as g,z as h,L as i,Ye as j,GO as k,t as l,R as m,tn as n,b as o,we as p,yr as q,js as r,Qn as s,kn as t,zN as u,K as v,Ri as w,C as x,xm as y,Xw as z};
