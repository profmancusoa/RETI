(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=o(a);fetch(a.href,l)}})();function Wt(n,s){const o=Object.create(null),i=n.split(",");for(let a=0;a<i.length;a++)o[i[a]]=!0;return s?a=>!!o[a.toLowerCase()]:a=>!!o[a]}const Fe=Object.freeze({}),zs=Object.freeze([]),kn=()=>{},gp=()=>!1,Vf=/^on[^a-z]/,Ho=n=>Vf.test(n),Ii=n=>n.startsWith("onUpdate:"),He=Object.assign,Jl=(n,s)=>{const o=n.indexOf(s);o>-1&&n.splice(o,1)},Gf=Object.prototype.hasOwnProperty,Ce=(n,s)=>Gf.call(n,s),ue=Array.isArray,cs=n=>Ko(n)==="[object Map]",vp=n=>Ko(n)==="[object Set]",Yf=n=>Ko(n)==="[object RegExp]",fe=n=>typeof n=="function",We=n=>typeof n=="string",Xl=n=>typeof n=="symbol",Ae=n=>n!==null&&typeof n=="object",er=n=>Ae(n)&&fe(n.then)&&fe(n.catch),bp=Object.prototype.toString,Ko=n=>bp.call(n),nr=n=>Ko(n).slice(8,-1),xp=n=>Ko(n)==="[object Object]",tr=n=>We(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,_i=Wt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qf=Wt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Qi=n=>{const s=Object.create(null);return o=>s[o]||(s[o]=n(o))},Zf=/-(\w)/g,ot=Qi(n=>n.replace(Zf,(s,o)=>o?o.toUpperCase():"")),Jf=/\B([A-Z])/g,vt=Qi(n=>n.replace(Jf,"-$1").toLowerCase()),gs=Qi(n=>n.charAt(0).toUpperCase()+n.slice(1)),Zt=Qi(n=>n?`on${gs(n)}`:""),Lo=(n,s)=>!Object.is(n,s),Xt=(n,s)=>{for(let o=0;o<n.length;o++)n[o](s)},$i=(n,s,o)=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,value:o})},Xf=n=>{const s=parseFloat(n);return isNaN(s)?n:s},eh=n=>{const s=We(n)?Number(n):NaN;return isNaN(s)?n:s};let Xr;const Ci=()=>Xr||(Xr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tn(n){if(ue(n)){const s={};for(let o=0;o<n.length;o++){const i=n[o],a=We(i)?oh(i):tn(i);if(a)for(const l in a)s[l]=a[l]}return s}else{if(We(n))return n;if(Ae(n))return n}}const nh=/;(?![^(]*\))/g,th=/:([^]+)/,sh=/\/\*[^]*?\*\//g;function oh(n){const s={};return n.replace(sh,"").split(nh).forEach(o=>{if(o){const i=o.split(th);i.length>1&&(s[i[0].trim()]=i[1].trim())}}),s}function qe(n){let s="";if(We(n))s=n;else if(ue(n))for(let o=0;o<n.length;o++){const i=qe(n[o]);i&&(s+=i+" ")}else if(Ae(n))for(const o in n)n[o]&&(s+=o+" ");return s.trim()}function M(n){if(!n)return null;let{class:s,style:o}=n;return s&&!We(s)&&(n.class=qe(s)),o&&(n.style=tn(o)),n}const ih="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",ah="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",kp=Wt(ih),lh=Wt(ah),rh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ch=Wt(rh);function wp(n){return!!n||n===""}const xn=n=>We(n)?n:n==null?"":ue(n)||Ae(n)&&(n.toString===bp||!fe(n.toString))?JSON.stringify(n,yp,2):String(n),yp=(n,s)=>s&&s.__v_isRef?yp(n,s.value):cs(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((o,[i,a])=>(o[`${i} =>`]=a,o),{})}:vp(s)?{[`Set(${s.size})`]:[...s.values()]}:Ae(s)&&!ue(s)&&!xp(s)?String(s):s;function Ei(n,...s){console.warn(`[Vue warn] ${n}`,...s)}let Cn;class Lp{constructor(s=!1){this.detached=s,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Cn,!s&&Cn&&(this.index=(Cn.scopes||(Cn.scopes=[])).push(this)-1)}get active(){return this._active}run(s){if(this._active){const o=Cn;try{return Cn=this,s()}finally{Cn=o}}else Ei("cannot run an inactive effect scope.")}on(){Cn=this}off(){Cn=this.parent}stop(s){if(this._active){let o,i;for(o=0,i=this.effects.length;o<i;o++)this.effects[o].stop();for(o=0,i=this.cleanups.length;o<i;o++)this.cleanups[o]();if(this.scopes)for(o=0,i=this.scopes.length;o<i;o++)this.scopes[o].stop(!0);if(!this.detached&&this.parent&&!s){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function uh(n){return new Lp(n)}function ph(n,s=Cn){s&&s.active&&s.effects.push(n)}function sr(){return Cn}function Ip(n){Cn?Cn.cleanups.push(n):Ei("onScopeDispose() is called when there is no active effect scope to be associated with.")}const or=n=>{const s=new Set(n);return s.w=0,s.n=0,s},$p=n=>(n.w&Nt)>0,Cp=n=>(n.n&Nt)>0,dh=({deps:n})=>{if(n.length)for(let s=0;s<n.length;s++)n[s].w|=Nt},mh=n=>{const{deps:s}=n;if(s.length){let o=0;for(let i=0;i<s.length;i++){const a=s[i];$p(a)&&!Cp(a)?a.delete(n):s[o++]=a,a.w&=~Nt,a.n&=~Nt}s.length=o}},Si=new WeakMap;let so=0,Nt=1;const Ya=30;let fn;const us=Symbol("iterate"),Qa=Symbol("Map key iterate");class ir{constructor(s,o=null,i){this.fn=s,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,ph(this,i)}run(){if(!this.active)return this.fn();let s=fn,o=zt;for(;s;){if(s===this)return;s=s.parent}try{return this.parent=fn,fn=this,zt=!0,Nt=1<<++so,so<=Ya?dh(this):ec(this),this.fn()}finally{so<=Ya&&mh(this),Nt=1<<--so,fn=this.parent,zt=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){fn===this?this.deferStop=!0:this.active&&(ec(this),this.onStop&&this.onStop(),this.active=!1)}}function ec(n){const{deps:s}=n;if(s.length){for(let o=0;o<s.length;o++)s[o].delete(n);s.length=0}}let zt=!0;const Ep=[];function bs(){Ep.push(zt),zt=!1}function xs(){const n=Ep.pop();zt=n===void 0?!0:n}function cn(n,s,o){if(zt&&fn){let i=Si.get(n);i||Si.set(n,i=new Map);let a=i.get(o);a||i.set(o,a=or()),Sp(a,{effect:fn,target:n,type:s,key:o})}}function Sp(n,s){let o=!1;so<=Ya?Cp(n)||(n.n|=Nt,o=!$p(n)):o=!n.has(fn),o&&(n.add(fn),fn.deps.push(n),fn.onTrack&&fn.onTrack(He({effect:fn},s)))}function it(n,s,o,i,a,l){const r=Si.get(n);if(!r)return;let c=[];if(s==="clear")c=[...r.values()];else if(o==="length"&&ue(n)){const p=Number(i);r.forEach((d,m)=>{(m==="length"||m>=p)&&c.push(d)})}else switch(o!==void 0&&c.push(r.get(o)),s){case"add":ue(n)?tr(o)&&c.push(r.get("length")):(c.push(r.get(us)),cs(n)&&c.push(r.get(Qa)));break;case"delete":ue(n)||(c.push(r.get(us)),cs(n)&&c.push(r.get(Qa)));break;case"set":cs(n)&&c.push(r.get(us));break}const u={target:n,type:s,key:o,newValue:i,oldValue:a,oldTarget:l};if(c.length===1)c[0]&&Za(c[0],u);else{const p=[];for(const d of c)d&&p.push(...d);Za(or(p),u)}}function Za(n,s){const o=ue(n)?n:[...n];for(const i of o)i.computed&&nc(i,s);for(const i of o)i.computed||nc(i,s)}function nc(n,s){(n!==fn||n.allowRecurse)&&(n.onTrigger&&n.onTrigger(He({effect:n},s)),n.scheduler?n.scheduler():n.run())}function fh(n,s){var o;return(o=Si.get(n))==null?void 0:o.get(s)}const hh=Wt("__proto__,__v_isRef,__isVue"),Rp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Xl)),_h=Zi(),gh=Zi(!1,!0),vh=Zi(!0),bh=Zi(!0,!0),tc=xh();function xh(){const n={};return["includes","indexOf","lastIndexOf"].forEach(s=>{n[s]=function(...o){const i=ge(this);for(let l=0,r=this.length;l<r;l++)cn(i,"get",l+"");const a=i[s](...o);return a===-1||a===!1?i[s](...o.map(ge)):a}}),["push","pop","shift","unshift","splice"].forEach(s=>{n[s]=function(...o){bs();const i=ge(this)[s].apply(this,o);return xs(),i}}),n}function kh(n){const s=ge(this);return cn(s,"has",n),s.hasOwnProperty(n)}function Zi(n=!1,s=!1){return function(i,a,l){if(a==="__v_isReactive")return!n;if(a==="__v_isReadonly")return n;if(a==="__v_isShallow")return s;if(a==="__v_raw"&&l===(n?s?jp:Dp:s?Pp:Op).get(i))return i;const r=ue(i);if(!n){if(r&&Ce(tc,a))return Reflect.get(tc,a,l);if(a==="hasOwnProperty")return kh}const c=Reflect.get(i,a,l);return(Xl(a)?Rp.has(a):hh(a))||(n||cn(i,"get",a),s)?c:Te(c)?r&&tr(a)?c:c.value:Ae(c)?n?Vn(c):Be(c):c}}const wh=zp(),yh=zp(!0);function zp(n=!1){return function(o,i,a,l){let r=o[i];if(Ft(r)&&Te(r)&&!Te(a))return!1;if(!n&&(!Ri(a)&&!Ft(a)&&(r=ge(r),a=ge(a)),!ue(o)&&Te(r)&&!Te(a)))return r.value=a,!0;const c=ue(o)&&tr(i)?Number(i)<o.length:Ce(o,i),u=Reflect.set(o,i,a,l);return o===ge(l)&&(c?Lo(a,r)&&it(o,"set",i,a,r):it(o,"add",i,a)),u}}function Lh(n,s){const o=Ce(n,s),i=n[s],a=Reflect.deleteProperty(n,s);return a&&o&&it(n,"delete",s,void 0,i),a}function Ih(n,s){const o=Reflect.has(n,s);return(!Xl(s)||!Rp.has(s))&&cn(n,"has",s),o}function $h(n){return cn(n,"iterate",ue(n)?"length":us),Reflect.ownKeys(n)}const Tp={get:_h,set:wh,deleteProperty:Lh,has:Ih,ownKeys:$h},Mp={get:vh,set(n,s){return Ei(`Set operation on key "${String(s)}" failed: target is readonly.`,n),!0},deleteProperty(n,s){return Ei(`Delete operation on key "${String(s)}" failed: target is readonly.`,n),!0}},Ch=He({},Tp,{get:gh,set:yh}),Eh=He({},Mp,{get:bh}),ar=n=>n,Ji=n=>Reflect.getPrototypeOf(n);function Jo(n,s,o=!1,i=!1){n=n.__v_raw;const a=ge(n),l=ge(s);o||(s!==l&&cn(a,"get",s),cn(a,"get",l));const{has:r}=Ji(a),c=i?ar:o?lr:Io;if(r.call(a,s))return c(n.get(s));if(r.call(a,l))return c(n.get(l));n!==a&&n.get(s)}function Xo(n,s=!1){const o=this.__v_raw,i=ge(o),a=ge(n);return s||(n!==a&&cn(i,"has",n),cn(i,"has",a)),n===a?o.has(n):o.has(n)||o.has(a)}function ei(n,s=!1){return n=n.__v_raw,!s&&cn(ge(n),"iterate",us),Reflect.get(n,"size",n)}function sc(n){n=ge(n);const s=ge(this);return Ji(s).has.call(s,n)||(s.add(n),it(s,"add",n,n)),this}function oc(n,s){s=ge(s);const o=ge(this),{has:i,get:a}=Ji(o);let l=i.call(o,n);l?Ap(o,i,n):(n=ge(n),l=i.call(o,n));const r=a.call(o,n);return o.set(n,s),l?Lo(s,r)&&it(o,"set",n,s,r):it(o,"add",n,s),this}function ic(n){const s=ge(this),{has:o,get:i}=Ji(s);let a=o.call(s,n);a?Ap(s,o,n):(n=ge(n),a=o.call(s,n));const l=i?i.call(s,n):void 0,r=s.delete(n);return a&&it(s,"delete",n,void 0,l),r}function ac(){const n=ge(this),s=n.size!==0,o=cs(n)?new Map(n):new Set(n),i=n.clear();return s&&it(n,"clear",void 0,void 0,o),i}function ni(n,s){return function(i,a){const l=this,r=l.__v_raw,c=ge(r),u=s?ar:n?lr:Io;return!n&&cn(c,"iterate",us),r.forEach((p,d)=>i.call(a,u(p),u(d),l))}}function ti(n,s,o){return function(...i){const a=this.__v_raw,l=ge(a),r=cs(l),c=n==="entries"||n===Symbol.iterator&&r,u=n==="keys"&&r,p=a[n](...i),d=o?ar:s?lr:Io;return!s&&cn(l,"iterate",u?Qa:us),{next(){const{value:m,done:f}=p.next();return f?{value:m,done:f}:{value:c?[d(m[0]),d(m[1])]:d(m),done:f}},[Symbol.iterator](){return this}}}}function wt(n){return function(...s){{const o=s[0]?`on key "${s[0]}" `:"";console.warn(`${gs(n)} operation ${o}failed: target is readonly.`,ge(this))}return n==="delete"?!1:this}}function Sh(){const n={get(l){return Jo(this,l)},get size(){return ei(this)},has:Xo,add:sc,set:oc,delete:ic,clear:ac,forEach:ni(!1,!1)},s={get(l){return Jo(this,l,!1,!0)},get size(){return ei(this)},has:Xo,add:sc,set:oc,delete:ic,clear:ac,forEach:ni(!1,!0)},o={get(l){return Jo(this,l,!0)},get size(){return ei(this,!0)},has(l){return Xo.call(this,l,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:ni(!0,!1)},i={get(l){return Jo(this,l,!0,!0)},get size(){return ei(this,!0)},has(l){return Xo.call(this,l,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:ni(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{n[l]=ti(l,!1,!1),o[l]=ti(l,!0,!1),s[l]=ti(l,!1,!0),i[l]=ti(l,!0,!0)}),[n,o,s,i]}const[Rh,zh,Th,Mh]=Sh();function Xi(n,s){const o=s?n?Mh:Th:n?zh:Rh;return(i,a,l)=>a==="__v_isReactive"?!n:a==="__v_isReadonly"?n:a==="__v_raw"?i:Reflect.get(Ce(o,a)&&a in i?o:i,a,l)}const Ah={get:Xi(!1,!1)},Oh={get:Xi(!1,!0)},Ph={get:Xi(!0,!1)},Dh={get:Xi(!0,!0)};function Ap(n,s,o){const i=ge(o);if(i!==o&&s.call(n,i)){const a=nr(n);console.warn(`Reactive ${a} contains both the raw and reactive versions of the same object${a==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Op=new WeakMap,Pp=new WeakMap,Dp=new WeakMap,jp=new WeakMap;function jh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nh(n){return n.__v_skip||!Object.isExtensible(n)?0:jh(nr(n))}function Be(n){return Ft(n)?n:ea(n,!1,Tp,Ah,Op)}function Fh(n){return ea(n,!1,Ch,Oh,Pp)}function Vn(n){return ea(n,!0,Mp,Ph,Dp)}function oo(n){return ea(n,!0,Eh,Dh,jp)}function ea(n,s,o,i,a){if(!Ae(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(s&&n.__v_isReactive))return n;const l=a.get(n);if(l)return l;const r=Nh(n);if(r===0)return n;const c=new Proxy(n,r===2?i:o);return a.set(n,c),c}function ps(n){return Ft(n)?ps(n.__v_raw):!!(n&&n.__v_isReactive)}function Ft(n){return!!(n&&n.__v_isReadonly)}function Ri(n){return!!(n&&n.__v_isShallow)}function zi(n){return ps(n)||Ft(n)}function ge(n){const s=n&&n.__v_raw;return s?ge(s):n}function na(n){return $i(n,"__v_skip",!0),n}const Io=n=>Ae(n)?Be(n):n,lr=n=>Ae(n)?Vn(n):n;function rr(n){zt&&fn&&(n=ge(n),Sp(n.dep||(n.dep=or()),{target:n,type:"get",key:"value"}))}function cr(n,s){n=ge(n);const o=n.dep;o&&Za(o,{target:n,type:"set",key:"value",newValue:s})}function Te(n){return!!(n&&n.__v_isRef===!0)}function J(n){return Np(n,!1)}function at(n){return Np(n,!0)}function Np(n,s){return Te(n)?n:new Hh(n,s)}class Hh{constructor(s,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?s:ge(s),this._value=o?s:Io(s)}get value(){return rr(this),this._value}set value(s){const o=this.__v_isShallow||Ri(s)||Ft(s);s=o?s:ge(s),Lo(s,this._rawValue)&&(this._rawValue=s,this._value=o?s:Io(s),cr(this,s))}}function D(n){return Te(n)?n.value:n}const Kh={get:(n,s,o)=>D(Reflect.get(n,s,o)),set:(n,s,o,i)=>{const a=n[s];return Te(a)&&!Te(o)?(a.value=o,!0):Reflect.set(n,s,o,i)}};function Fp(n){return ps(n)?n:new Proxy(n,Kh)}class Wh{constructor(s){this.dep=void 0,this.__v_isRef=!0;const{get:o,set:i}=s(()=>rr(this),()=>cr(this));this._get=o,this._set=i}get value(){return this._get()}set value(s){this._set(s)}}function ur(n){return new Wh(n)}function Bh(n){zi(n)||console.warn("toRefs() expects a reactive object but received a plain one.");const s=ue(n)?new Array(n.length):{};for(const o in n)s[o]=Hp(n,o);return s}class qh{constructor(s,o,i){this._object=s,this._key=o,this._defaultValue=i,this.__v_isRef=!0}get value(){const s=this._object[this._key];return s===void 0?this._defaultValue:s}set value(s){this._object[this._key]=s}get dep(){return fh(ge(this._object),this._key)}}class Uh{constructor(s){this._getter=s,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Vh(n,s,o){return Te(n)?n:fe(n)?new Uh(n):Ae(n)&&arguments.length>1?Hp(n,s,o):J(n)}function Hp(n,s,o){const i=n[s];return Te(i)?i:new qh(n,s,o)}class Gh{constructor(s,o,i,a){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ir(s,()=>{this._dirty||(this._dirty=!0,cr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=i}get value(){const s=ge(this);return rr(s),(s._dirty||!s._cacheable)&&(s._dirty=!1,s._value=s.effect.run()),s._value}set value(s){this._setter(s)}}function Yh(n,s,o=!1){let i,a;const l=fe(n);l?(i=n,a=()=>{console.warn("Write operation failed: computed value is readonly")}):(i=n.get,a=n.set);const r=new Gh(i,a,l||!a,o);return s&&!o&&(r.effect.onTrack=s.onTrack,r.effect.onTrigger=s.onTrigger),r}const ds=[];function gi(n){ds.push(n)}function vi(){ds.pop()}function q(n,...s){bs();const o=ds.length?ds[ds.length-1].component:null,i=o&&o.appContext.config.warnHandler,a=Qh();if(i)gt(i,o,11,[n+s.join(""),o&&o.proxy,a.map(({vnode:l})=>`at <${pa(o,l.type)}>`).join(`
`),a]);else{const l=[`[Vue warn]: ${n}`,...s];a.length&&l.push(`
`,...Zh(a)),console.warn(...l)}xs()}function Qh(){let n=ds[ds.length-1];if(!n)return[];const s=[];for(;n;){const o=s[0];o&&o.vnode===n?o.recurseCount++:s.push({vnode:n,recurseCount:0});const i=n.component&&n.component.parent;n=i&&i.vnode}return s}function Zh(n){const s=[];return n.forEach((o,i)=>{s.push(...i===0?[]:[`
`],...Jh(o))}),s}function Jh({vnode:n,recurseCount:s}){const o=s>0?`... (${s} recursive calls)`:"",i=n.component?n.component.parent==null:!1,a=` at <${pa(n.component,n.type,i)}`,l=">"+o;return n.props?[a,...Xh(n.props),l]:[a+l]}function Xh(n){const s=[],o=Object.keys(n);return o.slice(0,3).forEach(i=>{s.push(...Kp(i,n[i]))}),o.length>3&&s.push(" ..."),s}function Kp(n,s,o){return We(s)?(s=JSON.stringify(s),o?s:[`${n}=${s}`]):typeof s=="number"||typeof s=="boolean"||s==null?o?s:[`${n}=${s}`]:Te(s)?(s=Kp(n,ge(s.value),!0),o?s:[`${n}=Ref<`,s,">"]):fe(s)?[`${n}=fn${s.name?`<${s.name}>`:""}`]:(s=ge(s),o?s:[`${n}=`,s])}function e1(n,s){n!==void 0&&(typeof n!="number"?q(`${s} is not a valid number - got ${JSON.stringify(n)}.`):isNaN(n)&&q(`${s} is NaN - the duration expression might be incorrect.`))}const pr={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function gt(n,s,o,i){let a;try{a=i?n(...i):n()}catch(l){ta(l,s,o)}return a}function Nn(n,s,o,i){if(fe(n)){const l=gt(n,s,o,i);return l&&er(l)&&l.catch(r=>{ta(r,s,o)}),l}const a=[];for(let l=0;l<n.length;l++)a.push(Nn(n[l],s,o,i));return a}function ta(n,s,o,i=!0){const a=s?s.vnode:null;if(s){let l=s.parent;const r=s.proxy,c=pr[o];for(;l;){const p=l.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](n,r,c)===!1)return}l=l.parent}const u=s.appContext.config.errorHandler;if(u){gt(u,null,10,[n,r,c]);return}}n1(n,o,a,i)}function n1(n,s,o,i=!0){{const a=pr[s];if(o&&gi(o),q(`Unhandled error${a?` during execution of ${a}`:""}`),o&&vi(),i)throw n;console.error(n)}}let $o=!1,Ja=!1;const on=[];let et=0;const Ts=[];let Xn=null,$t=0;const Wp=Promise.resolve();let dr=null;const t1=100;function an(n){const s=dr||Wp;return n?s.then(this?n.bind(this):n):s}function s1(n){let s=et+1,o=on.length;for(;s<o;){const i=s+o>>>1;Co(on[i])<n?s=i+1:o=i}return s}function sa(n){(!on.length||!on.includes(n,$o&&n.allowRecurse?et+1:et))&&(n.id==null?on.push(n):on.splice(s1(n.id),0,n),Bp())}function Bp(){!$o&&!Ja&&(Ja=!0,dr=Wp.then(Vp))}function o1(n){const s=on.indexOf(n);s>et&&on.splice(s,1)}function qp(n){ue(n)?Ts.push(...n):(!Xn||!Xn.includes(n,n.allowRecurse?$t+1:$t))&&Ts.push(n),Bp()}function lc(n,s=$o?et+1:0){for(n=n||new Map;s<on.length;s++){const o=on[s];if(o&&o.pre){if(mr(n,o))continue;on.splice(s,1),s--,o()}}}function Up(n){if(Ts.length){const s=[...new Set(Ts)];if(Ts.length=0,Xn){Xn.push(...s);return}for(Xn=s,n=n||new Map,Xn.sort((o,i)=>Co(o)-Co(i)),$t=0;$t<Xn.length;$t++)mr(n,Xn[$t])||Xn[$t]();Xn=null,$t=0}}const Co=n=>n.id==null?1/0:n.id,i1=(n,s)=>{const o=Co(n)-Co(s);if(o===0){if(n.pre&&!s.pre)return-1;if(s.pre&&!n.pre)return 1}return o};function Vp(n){Ja=!1,$o=!0,n=n||new Map,on.sort(i1);const s=o=>mr(n,o);try{for(et=0;et<on.length;et++){const o=on[et];if(o&&o.active!==!1){if(s(o))continue;gt(o,null,14)}}}finally{et=0,on.length=0,Up(n),$o=!1,dr=null,(on.length||Ts.length)&&Vp(n)}}function mr(n,s){if(!n.has(s))n.set(s,1);else{const o=n.get(s);if(o>t1){const i=s.ownerInstance,a=i&&Ro(i.type);return q(`Maximum recursive updates exceeded${a?` in component <${a}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else n.set(s,o+1)}}let Tt=!1;const Ss=new Set;Ci().__VUE_HMR_RUNTIME__={createRecord:ga(Gp),rerender:ga(r1),reload:ga(c1)};const vs=new Map;function a1(n){const s=n.type.__hmrId;let o=vs.get(s);o||(Gp(s,n.type),o=vs.get(s)),o.instances.add(n)}function l1(n){vs.get(n.type.__hmrId).instances.delete(n)}function Gp(n,s){return vs.has(n)?!1:(vs.set(n,{initialDef:uo(s),instances:new Set}),!0)}function uo(n){return $d(n)?n.__vccOpts:n}function r1(n,s){const o=vs.get(n);o&&(o.initialDef.render=s,[...o.instances].forEach(i=>{s&&(i.render=s,uo(i.type).render=s),i.renderCache=[],Tt=!0,i.update(),Tt=!1}))}function c1(n,s){const o=vs.get(n);if(!o)return;s=uo(s),rc(o.initialDef,s);const i=[...o.instances];for(const a of i){const l=uo(a.type);Ss.has(l)||(l!==o.initialDef&&rc(l,s),Ss.add(l)),a.appContext.propsCache.delete(a.type),a.appContext.emitsCache.delete(a.type),a.appContext.optionsCache.delete(a.type),a.ceReload?(Ss.add(l),a.ceReload(s.styles),Ss.delete(l)):a.parent?sa(a.parent.update):a.appContext.reload?a.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}qp(()=>{for(const a of i)Ss.delete(uo(a.type))})}function rc(n,s){He(n,s);for(const o in n)o!=="__file"&&!(o in s)&&delete n[o]}function ga(n){return(s,o)=>{try{return n(s,o)}catch(i){console.error(i),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let nt,io=[],Xa=!1;function Wo(n,...s){nt?nt.emit(n,...s):Xa||io.push({event:n,args:s})}function Yp(n,s){var o,i;nt=n,nt?(nt.enabled=!0,io.forEach(({event:a,args:l})=>nt.emit(a,...l)),io=[]):typeof window<"u"&&window.HTMLElement&&!((i=(o=window.navigator)==null?void 0:o.userAgent)!=null&&i.includes("jsdom"))?((s.__VUE_DEVTOOLS_HOOK_REPLAY__=s.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{Yp(l,s)}),setTimeout(()=>{nt||(s.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Xa=!0,io=[])},3e3)):(Xa=!0,io=[])}function u1(n,s){Wo("app:init",n,s,{Fragment:ze,Text:Uo,Comment:hn,Static:po})}function p1(n){Wo("app:unmount",n)}const el=fr("component:added"),Qp=fr("component:updated"),d1=fr("component:removed"),m1=n=>{nt&&typeof nt.cleanupBuffer=="function"&&!nt.cleanupBuffer(n)&&d1(n)};function fr(n){return s=>{Wo(n,s.appContext.app,s.uid,s.parent?s.parent.uid:void 0,s)}}const f1=Zp("perf:start"),h1=Zp("perf:end");function Zp(n){return(s,o,i)=>{Wo(n,s.appContext.app,s.uid,s,o,i)}}function _1(n,s,o){Wo("component:emit",n.appContext.app,n,s,o)}function g1(n,s,...o){if(n.isUnmounted)return;const i=n.vnode.props||Fe;{const{emitsOptions:d,propsOptions:[m]}=n;if(d)if(!(s in d))(!m||!(Zt(s)in m))&&q(`Component emitted event "${s}" but it is neither declared in the emits option nor as an "${Zt(s)}" prop.`);else{const f=d[s];fe(f)&&(f(...o)||q(`Invalid event arguments: event validation failed for event "${s}".`))}}let a=o;const l=s.startsWith("update:"),r=l&&s.slice(7);if(r&&r in i){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:m,trim:f}=i[d]||Fe;f&&(a=o.map(h=>We(h)?h.trim():h)),m&&(a=o.map(Xf))}_1(n,s,a);{const d=s.toLowerCase();d!==s&&i[Zt(d)]&&q(`Event "${d}" is emitted in component ${pa(n,n.type)} but the handler is registered for "${s}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${vt(s)}" instead of "${s}".`)}let c,u=i[c=Zt(s)]||i[c=Zt(ot(s))];!u&&l&&(u=i[c=Zt(vt(s))]),u&&Nn(u,n,6,a);const p=i[c+"Once"];if(p){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Nn(p,n,6,a)}}function Jp(n,s,o=!1){const i=s.emitsCache,a=i.get(n);if(a!==void 0)return a;const l=n.emits;let r={},c=!1;if(!fe(n)){const u=p=>{const d=Jp(p,s,!0);d&&(c=!0,He(r,d))};!o&&s.mixins.length&&s.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!l&&!c?(Ae(n)&&i.set(n,null),null):(ue(l)?l.forEach(u=>r[u]=null):He(r,l),Ae(n)&&i.set(n,r),r)}function oa(n,s){return!n||!Ho(s)?!1:(s=s.slice(2).replace(/Once$/,""),Ce(n,s[0].toLowerCase()+s.slice(1))||Ce(n,vt(s))||Ce(n,s))}let Xe=null,ia=null;function Ti(n){const s=Xe;return Xe=n,ia=n&&n.type.__scopeId||null,s}function eF(n){ia=n}function nF(){ia=null}function v(n,s=Xe,o){if(!s||n._n)return n;const i=(...a)=>{i._d&&wc(-1);const l=Ti(s);let r;try{r=n(...a)}finally{Ti(l),i._d&&wc(1)}return Qp(s),r};return i._n=!0,i._c=!0,i._d=!0,i}let nl=!1;function Mi(){nl=!0}function va(n){const{type:s,vnode:o,proxy:i,withProxy:a,props:l,propsOptions:[r],slots:c,attrs:u,emit:p,render:d,renderCache:m,data:f,setupState:h,ctx:_,inheritAttrs:w}=n;let y,L;const $=Ti(n);nl=!1;try{if(o.shapeFlag&4){const T=a||i;y=Un(d.call(T,T,m,l,h,f,_)),L=u}else{const T=s;u===l&&Mi(),y=Un(T.length>1?T(l,{get attrs(){return Mi(),u},slots:c,emit:p}):T(l,null)),L=s.props?u:b1(u)}}catch(T){mo.length=0,ta(T,n,1),y=R(hn)}let x=y,P;if(y.patchFlag>0&&y.patchFlag&2048&&([x,P]=v1(y)),L&&w!==!1){const T=Object.keys(L),{shapeFlag:j}=x;if(T.length){if(j&7)r&&T.some(Ii)&&(L=x1(L,r)),x=lt(x,L);else if(!nl&&x.type!==hn){const B=Object.keys(u),F=[],V=[];for(let le=0,me=B.length;le<me;le++){const X=B[le];Ho(X)?Ii(X)||F.push(X[2].toLowerCase()+X.slice(3)):V.push(X)}V.length&&q(`Extraneous non-props attributes (${V.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),F.length&&q(`Extraneous non-emits event listeners (${F.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return o.dirs&&(cc(x)||q("Runtime directive used on component with non-element root node. The directives will not function as intended."),x=lt(x),x.dirs=x.dirs?x.dirs.concat(o.dirs):o.dirs),o.transition&&(cc(x)||q("Component inside <Transition> renders non-element root node that cannot be animated."),x.transition=o.transition),P?P(x):y=x,Ti($),y}const v1=n=>{const s=n.children,o=n.dynamicChildren,i=Xp(s);if(!i)return[n,void 0];const a=s.indexOf(i),l=o?o.indexOf(i):-1,r=c=>{s[a]=c,o&&(l>-1?o[l]=c:c.patchFlag>0&&(n.dynamicChildren=[...o,c]))};return[Un(i),r]};function Xp(n){let s;for(let o=0;o<n.length;o++){const i=n[o];if(Ht(i)){if(i.type!==hn||i.children==="v-if"){if(s)return;s=i}}else return}return s}const b1=n=>{let s;for(const o in n)(o==="class"||o==="style"||Ho(o))&&((s||(s={}))[o]=n[o]);return s},x1=(n,s)=>{const o={};for(const i in n)(!Ii(i)||!(i.slice(9)in s))&&(o[i]=n[i]);return o},cc=n=>n.shapeFlag&7||n.type===hn;function k1(n,s,o){const{props:i,children:a,component:l}=n,{props:r,children:c,patchFlag:u}=s,p=l.emitsOptions;if((a||c)&&Tt||s.dirs||s.transition)return!0;if(o&&u>=0){if(u&1024)return!0;if(u&16)return i?uc(i,r,p):!!r;if(u&8){const d=s.dynamicProps;for(let m=0;m<d.length;m++){const f=d[m];if(r[f]!==i[f]&&!oa(p,f))return!0}}}else return(a||c)&&(!c||!c.$stable)?!0:i===r?!1:i?r?uc(i,r,p):!0:!!r;return!1}function uc(n,s,o){const i=Object.keys(s);if(i.length!==Object.keys(n).length)return!0;for(let a=0;a<i.length;a++){const l=i[a];if(s[l]!==n[l]&&!oa(o,l))return!0}return!1}function w1({vnode:n,parent:s},o){for(;s&&s.subTree===n;)(n=s.vnode).el=o,s=s.parent}const ed=n=>n.__isSuspense;function y1(n,s){s&&s.pendingBranch?ue(n)?s.effects.push(...n):s.effects.push(n):qp(n)}function ks(n,s){return aa(n,null,s)}function L1(n,s){return aa(n,null,He({},s,{flush:"post"}))}const si={};function be(n,s,o){return fe(s)||q("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),aa(n,s,o)}function aa(n,s,{immediate:o,deep:i,flush:a,onTrack:l,onTrigger:r}=Fe){var c;s||(o!==void 0&&q('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),i!==void 0&&q('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const u=T=>{q("Invalid watch source: ",T,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=sr()===((c=Je)==null?void 0:c.scope)?Je:null;let d,m=!1,f=!1;if(Te(n)?(d=()=>n.value,m=Ri(n)):ps(n)?(d=()=>n,i=!0):ue(n)?(f=!0,m=n.some(T=>ps(T)||Ri(T)),d=()=>n.map(T=>{if(Te(T))return T.value;if(ps(T))return as(T);if(fe(T))return gt(T,p,2);u(T)})):fe(n)?s?d=()=>gt(n,p,2):d=()=>{if(!(p&&p.isUnmounted))return h&&h(),Nn(n,p,3,[_])}:(d=kn,u(n)),s&&i){const T=d;d=()=>as(T())}let h,_=T=>{h=x.onStop=()=>{gt(T,p,4)}},w;if(So)if(_=kn,s?o&&Nn(s,p,3,[d(),f?[]:void 0,_]):d(),a==="sync"){const T=T_();w=T.__watcherHandles||(T.__watcherHandles=[])}else return kn;let y=f?new Array(n.length).fill(si):si;const L=()=>{if(x.active)if(s){const T=x.run();(i||m||(f?T.some((j,B)=>Lo(j,y[B])):Lo(T,y)))&&(h&&h(),Nn(s,p,3,[T,y===si?void 0:f&&y[0]===si?[]:y,_]),y=T)}else x.run()};L.allowRecurse=!!s;let $;a==="sync"?$=L:a==="post"?$=()=>nn(L,p&&p.suspense):(L.pre=!0,p&&(L.id=p.uid),$=()=>sa(L));const x=new ir(d,$);x.onTrack=l,x.onTrigger=r,s?o?L():y=x.run():a==="post"?nn(x.run.bind(x),p&&p.suspense):x.run();const P=()=>{x.stop(),p&&p.scope&&Jl(p.scope.effects,x)};return w&&w.push(P),P}function I1(n,s,o){const i=this.proxy,a=We(n)?n.includes(".")?nd(i,n):()=>i[n]:n.bind(i,i);let l;fe(s)?l=s:(l=s.handler,o=s);const r=Je;Ps(this);const c=aa(a,l.bind(i),o);return r?Ps(r):fs(),c}function nd(n,s){const o=s.split(".");return()=>{let i=n;for(let a=0;a<o.length&&i;a++)i=i[o[a]];return i}}function as(n,s){if(!Ae(n)||n.__v_skip||(s=s||new Set,s.has(n)))return n;if(s.add(n),Te(n))as(n.value,s);else if(ue(n))for(let o=0;o<n.length;o++)as(n[o],s);else if(vp(n)||cs(n))n.forEach(o=>{as(o,s)});else if(xp(n))for(const o in n)as(n[o],s);return n}function td(n){Qf(n)&&q("Do not use built-in directive ids as custom directive id: "+n)}function sd(n,s){const o=Xe;if(o===null)return q("withDirectives can only be used inside render functions."),n;const i=ua(o)||o.proxy,a=n.dirs||(n.dirs=[]);for(let l=0;l<s.length;l++){let[r,c,u,p=Fe]=s[l];r&&(fe(r)&&(r={mounted:r,updated:r}),r.deep&&as(c),a.push({dir:r,instance:i,value:c,oldValue:void 0,arg:u,modifiers:p}))}return n}function Ut(n,s,o,i){const a=n.dirs,l=s&&s.dirs;for(let r=0;r<a.length;r++){const c=a[r];l&&(c.oldValue=l[r].value);let u=c.dir[i];u&&(bs(),Nn(u,o,8,[n.el,c,n,s]),xs())}}function $1(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kt(()=>{n.isMounted=!0}),Bo(()=>{n.isUnmounting=!0}),n}const On=[Function,Array],C1={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:On,onEnter:On,onAfterEnter:On,onEnterCancelled:On,onBeforeLeave:On,onLeave:On,onAfterLeave:On,onLeaveCancelled:On,onBeforeAppear:On,onAppear:On,onAfterAppear:On,onAppearCancelled:On};function E1(n,s){const{leavingVNodes:o}=n;let i=o.get(s.type);return i||(i=Object.create(null),o.set(s.type,i)),i}function tl(n,s,o,i){const{appear:a,mode:l,persisted:r=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:m,onLeave:f,onAfterLeave:h,onLeaveCancelled:_,onBeforeAppear:w,onAppear:y,onAfterAppear:L,onAppearCancelled:$}=s,x=String(n.key),P=E1(o,n),T=(F,V)=>{F&&Nn(F,i,9,V)},j=(F,V)=>{const le=V[1];T(F,V),ue(F)?F.every(me=>me.length<=1)&&le():F.length<=1&&le()},B={mode:l,persisted:r,beforeEnter(F){let V=c;if(!o.isMounted)if(a)V=w||c;else return;F._leaveCb&&F._leaveCb(!0);const le=P[x];le&&es(n,le)&&le.el._leaveCb&&le.el._leaveCb(),T(V,[F])},enter(F){let V=u,le=p,me=d;if(!o.isMounted)if(a)V=y||u,le=L||p,me=$||d;else return;let X=!1;const ve=F._enterCb=xe=>{X||(X=!0,xe?T(me,[F]):T(le,[F]),B.delayedLeave&&B.delayedLeave(),F._enterCb=void 0)};V?j(V,[F,ve]):ve()},leave(F,V){const le=String(n.key);if(F._enterCb&&F._enterCb(!0),o.isUnmounting)return V();T(m,[F]);let me=!1;const X=F._leaveCb=ve=>{me||(me=!0,V(),ve?T(_,[F]):T(h,[F]),F._leaveCb=void 0,P[le]===n&&delete P[le])};P[le]=n,f?j(f,[F,X]):X()},clone(F){return tl(F,s,o,i)}};return B}function Ai(n,s){n.shapeFlag&6&&n.component?Ai(n.component.subTree,s):n.shapeFlag&128?(n.ssContent.transition=s.clone(n.ssContent),n.ssFallback.transition=s.clone(n.ssFallback)):n.transition=s}function od(n,s=!1,o){let i=[],a=0;for(let l=0;l<n.length;l++){let r=n[l];const c=o==null?r.key:String(o)+String(r.key!=null?r.key:l);r.type===ze?(r.patchFlag&128&&a++,i=i.concat(od(r.children,s,c))):(s||r.type!==hn)&&i.push(c!=null?lt(r,{key:c}):r)}if(a>1)for(let l=0;l<i.length;l++)i[l].patchFlag=-2;return i}function Me(n,s){return fe(n)?(()=>He({name:n.name},s,{setup:n}))():n}const Ms=n=>!!n.type.__asyncLoader,hr=n=>n.type.__isKeepAlive,S1={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:s}){const o=Ln(),i=o.ctx;if(!i.renderer)return()=>{const $=s.default&&s.default();return $&&$.length===1?$[0]:$};const a=new Map,l=new Set;let r=null;o.__v_cache=a;const c=o.suspense,{renderer:{p:u,m:p,um:d,o:{createElement:m}}}=i,f=m("div");i.activate=($,x,P,T,j)=>{const B=$.component;p($,x,P,0,c),u(B.vnode,$,x,P,B,c,T,$.slotScopeIds,j),nn(()=>{B.isDeactivated=!1,B.a&&Xt(B.a);const F=$.props&&$.props.onVnodeMounted;F&&Pn(F,B.parent,$)},c),el(B)},i.deactivate=$=>{const x=$.component;p($,f,null,1,c),nn(()=>{x.da&&Xt(x.da);const P=$.props&&$.props.onVnodeUnmounted;P&&Pn(P,x.parent,$),x.isDeactivated=!0},c),el(x)};function h($){ba($),d($,o,c,!0)}function _($){a.forEach((x,P)=>{const T=Ro(x.type);T&&(!$||!$(T))&&w(P)})}function w($){const x=a.get($);!r||!es(x,r)?h(x):r&&ba(r),a.delete($),l.delete($)}be(()=>[n.include,n.exclude],([$,x])=>{$&&_(P=>ao($,P)),x&&_(P=>!ao(x,P))},{flush:"post",deep:!0});let y=null;const L=()=>{y!=null&&a.set(y,xa(o.subTree))};return kt(L),ra(L),Bo(()=>{a.forEach($=>{const{subTree:x,suspense:P}=o,T=xa(x);if($.type===T.type&&$.key===T.key){ba(T);const j=T.component.da;j&&nn(j,P);return}h($)})}),()=>{if(y=null,!s.default)return null;const $=s.default(),x=$[0];if($.length>1)return q("KeepAlive should contain exactly one component child."),r=null,$;if(!Ht(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return r=null,x;let P=xa(x);const T=P.type,j=Ro(Ms(P)?P.type.__asyncResolved||{}:T),{include:B,exclude:F,max:V}=n;if(B&&(!j||!ao(B,j))||F&&j&&ao(F,j))return r=P,x;const le=P.key==null?T:P.key,me=a.get(le);return P.el&&(P=lt(P),x.shapeFlag&128&&(x.ssContent=P)),y=le,me?(P.el=me.el,P.component=me.component,P.transition&&Ai(P,P.transition),P.shapeFlag|=512,l.delete(le),l.add(le)):(l.add(le),V&&l.size>parseInt(V,10)&&w(l.values().next().value)),P.shapeFlag|=256,r=P,ed(x.type)?x:P}}},id=S1;function ao(n,s){return ue(n)?n.some(o=>ao(o,s)):We(n)?n.split(",").includes(s):Yf(n)?n.test(s):!1}function ad(n,s){rd(n,"a",s)}function ld(n,s){rd(n,"da",s)}function rd(n,s,o=Je){const i=n.__wdc||(n.__wdc=()=>{let a=o;for(;a;){if(a.isDeactivated)return;a=a.parent}return n()});if(la(s,i,o),o){let a=o.parent;for(;a&&a.parent;)hr(a.parent.vnode)&&R1(i,s,o,a),a=a.parent}}function R1(n,s,o,i){const a=la(s,n,i,!0);qo(()=>{Jl(i[s],a)},o)}function ba(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function xa(n){return n.shapeFlag&128?n.ssContent:n}function la(n,s,o=Je,i=!1){if(o){const a=o[n]||(o[n]=[]),l=s.__weh||(s.__weh=(...r)=>{if(o.isUnmounted)return;bs(),Ps(o);const c=Nn(s,o,n,r);return fs(),xs(),c});return i?a.unshift(l):a.push(l),l}else{const a=Zt(pr[n].replace(/ hook$/,""));q(`${a} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const xt=n=>(s,o=Je)=>(!So||n==="sp")&&la(n,(...i)=>s(...i),o),z1=xt("bm"),kt=xt("m"),T1=xt("bu"),ra=xt("u"),Bo=xt("bum"),qo=xt("um"),M1=xt("sp"),A1=xt("rtg"),O1=xt("rtc");function P1(n,s=Je){la("ec",n,s)}const sl="components";function zn(n,s){return j1(sl,n,!0,s)||n}const D1=Symbol.for("v-ndc");function j1(n,s,o=!0,i=!1){const a=Xe||Je;if(a){const l=a.type;if(n===sl){const c=Ro(l,!1);if(c&&(c===s||c===ot(s)||c===gs(ot(s))))return l}const r=pc(a[n]||l[n],s)||pc(a.appContext[n],s);if(!r&&i)return l;if(o&&!r){const c=n===sl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";q(`Failed to resolve ${n.slice(0,-1)}: ${s}${c}`)}return r}else q(`resolve${gs(n.slice(0,-1))} can only be used in render() or setup().`)}function pc(n,s){return n&&(n[s]||n[ot(s)]||n[gs(ot(s))])}function Fs(n,s,o,i){let a;const l=o&&o[i];if(ue(n)||We(n)){a=new Array(n.length);for(let r=0,c=n.length;r<c;r++)a[r]=s(n[r],r,void 0,l&&l[r])}else if(typeof n=="number"){Number.isInteger(n)||q(`The v-for range expect an integer value but got ${n}.`),a=new Array(n);for(let r=0;r<n;r++)a[r]=s(r+1,r,void 0,l&&l[r])}else if(Ae(n))if(n[Symbol.iterator])a=Array.from(n,(r,c)=>s(r,c,void 0,l&&l[c]));else{const r=Object.keys(n);a=new Array(r.length);for(let c=0,u=r.length;c<u;c++){const p=r[c];a[c]=s(n[p],p,c,l&&l[c])}}else a=[];return o&&(o[i]=a),a}function Fn(n,s,o={},i,a){if(Xe.isCE||Xe.parent&&Ms(Xe.parent)&&Xe.parent.isCE)return s!=="default"&&(o.name=s),R("slot",o,i&&i());let l=n[s];l&&l.length>1&&(q("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),b();const r=l&&cd(l(o)),c=C(ze,{key:o.key||r&&r.key||`_${s}`},r||(i?i():[]),r&&n._===1?64:-2);return!a&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),l&&l._c&&(l._d=!0),c}function cd(n){return n.some(s=>Ht(s)?!(s.type===hn||s.type===ze&&!cd(s.children)):!0)?n:null}const ol=n=>n?yd(n)?ua(n)||n.proxy:ol(n.parent):null,ms=He(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>oo(n.props),$attrs:n=>oo(n.attrs),$slots:n=>oo(n.slots),$refs:n=>oo(n.refs),$parent:n=>ol(n.parent),$root:n=>ol(n.root),$emit:n=>n.emit,$options:n=>gr(n),$forceUpdate:n=>n.f||(n.f=()=>sa(n.update)),$nextTick:n=>n.n||(n.n=an.bind(n.proxy)),$watch:n=>I1.bind(n)}),_r=n=>n==="_"||n==="$",ka=(n,s)=>n!==Fe&&!n.__isScriptSetup&&Ce(n,s),ud={get({_:n},s){const{ctx:o,setupState:i,data:a,props:l,accessCache:r,type:c,appContext:u}=n;if(s==="__isVue")return!0;let p;if(s[0]!=="$"){const h=r[s];if(h!==void 0)switch(h){case 1:return i[s];case 2:return a[s];case 4:return o[s];case 3:return l[s]}else{if(ka(i,s))return r[s]=1,i[s];if(a!==Fe&&Ce(a,s))return r[s]=2,a[s];if((p=n.propsOptions[0])&&Ce(p,s))return r[s]=3,l[s];if(o!==Fe&&Ce(o,s))return r[s]=4,o[s];il&&(r[s]=0)}}const d=ms[s];let m,f;if(d)return s==="$attrs"?(cn(n,"get",s),Mi()):s==="$slots"&&cn(n,"get",s),d(n);if((m=c.__cssModules)&&(m=m[s]))return m;if(o!==Fe&&Ce(o,s))return r[s]=4,o[s];if(f=u.config.globalProperties,Ce(f,s))return f[s];Xe&&(!We(s)||s.indexOf("__v")!==0)&&(a!==Fe&&_r(s[0])&&Ce(a,s)?q(`Property ${JSON.stringify(s)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):n===Xe&&q(`Property ${JSON.stringify(s)} was accessed during render but is not defined on instance.`))},set({_:n},s,o){const{data:i,setupState:a,ctx:l}=n;return ka(a,s)?(a[s]=o,!0):a.__isScriptSetup&&Ce(a,s)?(q(`Cannot mutate <script setup> binding "${s}" from Options API.`),!1):i!==Fe&&Ce(i,s)?(i[s]=o,!0):Ce(n.props,s)?(q(`Attempting to mutate prop "${s}". Props are readonly.`),!1):s[0]==="$"&&s.slice(1)in n?(q(`Attempting to mutate public property "${s}". Properties starting with $ are reserved and readonly.`),!1):(s in n.appContext.config.globalProperties?Object.defineProperty(l,s,{enumerable:!0,configurable:!0,value:o}):l[s]=o,!0)},has({_:{data:n,setupState:s,accessCache:o,ctx:i,appContext:a,propsOptions:l}},r){let c;return!!o[r]||n!==Fe&&Ce(n,r)||ka(s,r)||(c=l[0])&&Ce(c,r)||Ce(i,r)||Ce(ms,r)||Ce(a.config.globalProperties,r)},defineProperty(n,s,o){return o.get!=null?n._.accessCache[s]=0:Ce(o,"value")&&this.set(n,s,o.value,null),Reflect.defineProperty(n,s,o)}};ud.ownKeys=n=>(q("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(n));function N1(n){const s={};return Object.defineProperty(s,"_",{configurable:!0,enumerable:!1,get:()=>n}),Object.keys(ms).forEach(o=>{Object.defineProperty(s,o,{configurable:!0,enumerable:!1,get:()=>ms[o](n),set:kn})}),s}function F1(n){const{ctx:s,propsOptions:[o]}=n;o&&Object.keys(o).forEach(i=>{Object.defineProperty(s,i,{enumerable:!0,configurable:!0,get:()=>n.props[i],set:kn})})}function H1(n){const{ctx:s,setupState:o}=n;Object.keys(ge(o)).forEach(i=>{if(!o.__isScriptSetup){if(_r(i[0])){q(`setup() return property ${JSON.stringify(i)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(s,i,{enumerable:!0,configurable:!0,get:()=>o[i],set:kn})}})}function K1(){return W1().slots}function W1(){const n=Ln();return n||q("useContext() called without active instance."),n.setupContext||(n.setupContext=Id(n))}function dc(n){return ue(n)?n.reduce((s,o)=>(s[o]=null,s),{}):n}function B1(){const n=Object.create(null);return(s,o)=>{n[o]?q(`${s} property "${o}" is already defined in ${n[o]}.`):n[o]=s}}let il=!0;function q1(n){const s=gr(n),o=n.proxy,i=n.ctx;il=!1,s.beforeCreate&&mc(s.beforeCreate,n,"bc");const{data:a,computed:l,methods:r,watch:c,provide:u,inject:p,created:d,beforeMount:m,mounted:f,beforeUpdate:h,updated:_,activated:w,deactivated:y,beforeDestroy:L,beforeUnmount:$,destroyed:x,unmounted:P,render:T,renderTracked:j,renderTriggered:B,errorCaptured:F,serverPrefetch:V,expose:le,inheritAttrs:me,components:X,directives:ve,filters:xe}=s,ye=B1();{const[oe]=n.propsOptions;if(oe)for(const pe in oe)ye("Props",pe)}if(p&&U1(p,i,ye),r)for(const oe in r){const pe=r[oe];fe(pe)?(Object.defineProperty(i,oe,{value:pe.bind(o),configurable:!0,enumerable:!0,writable:!0}),ye("Methods",oe)):q(`Method "${oe}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(a){fe(a)||q("The data option must be a function. Plain object usage is no longer supported.");const oe=a.call(o,o);if(er(oe)&&q("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ae(oe))q("data() should return an object.");else{n.data=Be(oe);for(const pe in oe)ye("Data",pe),_r(pe[0])||Object.defineProperty(i,pe,{configurable:!0,enumerable:!0,get:()=>oe[pe],set:kn})}}if(il=!0,l)for(const oe in l){const pe=l[oe],$e=fe(pe)?pe.bind(o,o):fe(pe.get)?pe.get.bind(o,o):kn;$e===kn&&q(`Computed property "${oe}" has no getter.`);const Pe=!fe(pe)&&fe(pe.set)?pe.set.bind(o):()=>{q(`Write operation failed: computed property "${oe}" is readonly.`)},Mn=H({get:$e,set:Pe});Object.defineProperty(i,oe,{enumerable:!0,configurable:!0,get:()=>Mn.value,set:sn=>Mn.value=sn}),ye("Computed",oe)}if(c)for(const oe in c)pd(c[oe],i,o,oe);if(u){const oe=fe(u)?u.call(o):u;Reflect.ownKeys(oe).forEach(pe=>{En(pe,oe[pe])})}d&&mc(d,n,"c");function De(oe,pe){ue(pe)?pe.forEach($e=>oe($e.bind(o))):pe&&oe(pe.bind(o))}if(De(z1,m),De(kt,f),De(T1,h),De(ra,_),De(ad,w),De(ld,y),De(P1,F),De(O1,j),De(A1,B),De(Bo,$),De(qo,P),De(M1,V),ue(le))if(le.length){const oe=n.exposed||(n.exposed={});le.forEach(pe=>{Object.defineProperty(oe,pe,{get:()=>o[pe],set:$e=>o[pe]=$e})})}else n.exposed||(n.exposed={});T&&n.render===kn&&(n.render=T),me!=null&&(n.inheritAttrs=me),X&&(n.components=X),ve&&(n.directives=ve)}function U1(n,s,o=kn){ue(n)&&(n=al(n));for(const i in n){const a=n[i];let l;Ae(a)?"default"in a?l=I(a.from||i,a.default,!0):l=I(a.from||i):l=I(a),Te(l)?Object.defineProperty(s,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):s[i]=l,o("Inject",i)}}function mc(n,s,o){Nn(ue(n)?n.map(i=>i.bind(s.proxy)):n.bind(s.proxy),s,o)}function pd(n,s,o,i){const a=i.includes(".")?nd(o,i):()=>o[i];if(We(n)){const l=s[n];fe(l)?be(a,l):q(`Invalid watch handler specified by key "${n}"`,l)}else if(fe(n))be(a,n.bind(o));else if(Ae(n))if(ue(n))n.forEach(l=>pd(l,s,o,i));else{const l=fe(n.handler)?n.handler.bind(o):s[n.handler];fe(l)?be(a,l,n):q(`Invalid watch handler specified by key "${n.handler}"`,l)}else q(`Invalid watch option: "${i}"`,n)}function gr(n){const s=n.type,{mixins:o,extends:i}=s,{mixins:a,optionsCache:l,config:{optionMergeStrategies:r}}=n.appContext,c=l.get(s);let u;return c?u=c:!a.length&&!o&&!i?u=s:(u={},a.length&&a.forEach(p=>Oi(u,p,r,!0)),Oi(u,s,r)),Ae(s)&&l.set(s,u),u}function Oi(n,s,o,i=!1){const{mixins:a,extends:l}=s;l&&Oi(n,l,o,!0),a&&a.forEach(r=>Oi(n,r,o,!0));for(const r in s)if(i&&r==="expose")q('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=V1[r]||o&&o[r];n[r]=c?c(n[r],s[r]):s[r]}return n}const V1={data:fc,props:hc,emits:hc,methods:lo,computed:lo,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:lo,directives:lo,watch:Y1,provide:fc,inject:G1};function fc(n,s){return s?n?function(){return He(fe(n)?n.call(this,this):n,fe(s)?s.call(this,this):s)}:s:n}function G1(n,s){return lo(al(n),al(s))}function al(n){if(ue(n)){const s={};for(let o=0;o<n.length;o++)s[n[o]]=n[o];return s}return n}function pn(n,s){return n?[...new Set([].concat(n,s))]:s}function lo(n,s){return n?He(Object.create(null),n,s):s}function hc(n,s){return n?ue(n)&&ue(s)?[...new Set([...n,...s])]:He(Object.create(null),dc(n),dc(s??{})):s}function Y1(n,s){if(!n)return s;if(!s)return n;const o=He(Object.create(null),n);for(const i in s)o[i]=pn(n[i],s[i]);return o}function dd(){return{app:null,config:{isNativeTag:gp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Q1=0;function Z1(n,s){return function(i,a=null){fe(i)||(i=He({},i)),a!=null&&!Ae(a)&&(q("root props passed to app.mount() must be an object."),a=null);const l=dd();Object.defineProperty(l.config,"unwrapInjectedRef",{get(){return!0},set(){q("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const r=new Set;let c=!1;const u=l.app={_uid:Q1++,_component:i,_props:a,_container:null,_context:l,_instance:null,version:Ni,get config(){return l.config},set config(p){q("app.config cannot be replaced. Modify individual options instead.")},use(p,...d){return r.has(p)?q("Plugin has already been applied to target app."):p&&fe(p.install)?(r.add(p),p.install(u,...d)):fe(p)?(r.add(p),p(u,...d)):q('A plugin must either be a function or an object with an "install" function.'),u},mixin(p){return l.mixins.includes(p)?q("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):l.mixins.push(p),u},component(p,d){return pl(p,l.config),d?(l.components[p]&&q(`Component "${p}" has already been registered in target app.`),l.components[p]=d,u):l.components[p]},directive(p,d){return td(p),d?(l.directives[p]&&q(`Directive "${p}" has already been registered in target app.`),l.directives[p]=d,u):l.directives[p]},mount(p,d,m){if(c)q("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&q("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=R(i,a);return f.appContext=l,l.reload=()=>{n(lt(f),p,m)},d&&s?s(f,p):n(f,p,m),c=!0,u._container=p,p.__vue_app__=u,u._instance=f.component,u1(u,Ni),ua(f.component)||f.component.proxy}},unmount(){c?(n(null,u._container),u._instance=null,p1(u),delete u._container.__vue_app__):q("Cannot unmount an app that is not mounted.")},provide(p,d){return p in l.provides&&q(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),l.provides[p]=d,u},runWithContext(p){Pi=u;try{return p()}finally{Pi=null}}};return u}}let Pi=null;function En(n,s){if(!Je)q("provide() can only be used inside setup().");else{let o=Je.provides;const i=Je.parent&&Je.parent.provides;i===o&&(o=Je.provides=Object.create(i)),o[n]=s}}function I(n,s,o=!1){const i=Je||Xe;if(i||Pi){const a=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Pi._context.provides;if(a&&n in a)return a[n];if(arguments.length>1)return o&&fe(s)?s.call(i&&i.proxy):s;q(`injection "${String(n)}" not found.`)}else q("inject() can only be used inside setup() or functional components.")}function J1(n,s,o,i=!1){const a={},l={};$i(l,ca,1),n.propsDefaults=Object.create(null),md(n,s,a,l);for(const r in n.propsOptions[0])r in a||(a[r]=void 0);hd(s||{},a,n),o?n.props=i?a:Fh(a):n.type.props?n.props=a:n.props=l,n.attrs=l}function X1(n){for(;n;){if(n.type.__hmrId)return!0;n=n.parent}}function e_(n,s,o,i){const{props:a,attrs:l,vnode:{patchFlag:r}}=n,c=ge(a),[u]=n.propsOptions;let p=!1;if(!X1(n)&&(i||r>0)&&!(r&16)){if(r&8){const d=n.vnode.dynamicProps;for(let m=0;m<d.length;m++){let f=d[m];if(oa(n.emitsOptions,f))continue;const h=s[f];if(u)if(Ce(l,f))h!==l[f]&&(l[f]=h,p=!0);else{const _=ot(f);a[_]=ll(u,c,_,h,n,!1)}else h!==l[f]&&(l[f]=h,p=!0)}}}else{md(n,s,a,l)&&(p=!0);let d;for(const m in c)(!s||!Ce(s,m)&&((d=vt(m))===m||!Ce(s,d)))&&(u?o&&(o[m]!==void 0||o[d]!==void 0)&&(a[m]=ll(u,c,m,void 0,n,!0)):delete a[m]);if(l!==c)for(const m in l)(!s||!Ce(s,m))&&(delete l[m],p=!0)}p&&it(n,"set","$attrs"),hd(s||{},a,n)}function md(n,s,o,i){const[a,l]=n.propsOptions;let r=!1,c;if(s)for(let u in s){if(_i(u))continue;const p=s[u];let d;a&&Ce(a,d=ot(u))?!l||!l.includes(d)?o[d]=p:(c||(c={}))[d]=p:oa(n.emitsOptions,u)||(!(u in i)||p!==i[u])&&(i[u]=p,r=!0)}if(l){const u=ge(o),p=c||Fe;for(let d=0;d<l.length;d++){const m=l[d];o[m]=ll(a,u,m,p[m],n,!Ce(p,m))}}return r}function ll(n,s,o,i,a,l){const r=n[o];if(r!=null){const c=Ce(r,"default");if(c&&i===void 0){const u=r.default;if(r.type!==Function&&!r.skipFactory&&fe(u)){const{propsDefaults:p}=a;o in p?i=p[o]:(Ps(a),i=p[o]=u.call(null,s),fs())}else i=u}r[0]&&(l&&!c?i=!1:r[1]&&(i===""||i===vt(o))&&(i=!0))}return i}function fd(n,s,o=!1){const i=s.propsCache,a=i.get(n);if(a)return a;const l=n.props,r={},c=[];let u=!1;if(!fe(n)){const d=m=>{u=!0;const[f,h]=fd(m,s,!0);He(r,f),h&&c.push(...h)};!o&&s.mixins.length&&s.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!l&&!u)return Ae(n)&&i.set(n,zs),zs;if(ue(l))for(let d=0;d<l.length;d++){We(l[d])||q("props must be strings when using array syntax.",l[d]);const m=ot(l[d]);_c(m)&&(r[m]=Fe)}else if(l){Ae(l)||q("invalid props options",l);for(const d in l){const m=ot(d);if(_c(m)){const f=l[d],h=r[m]=ue(f)||fe(f)?{type:f}:He({},f);if(h){const _=vc(Boolean,h.type),w=vc(String,h.type);h[0]=_>-1,h[1]=w<0||_<w,(_>-1||Ce(h,"default"))&&c.push(m)}}}}const p=[r,c];return Ae(n)&&i.set(n,p),p}function _c(n){return n[0]!=="$"?!0:(q(`Invalid prop name: "${n}" is a reserved property.`),!1)}function rl(n){const s=n&&n.toString().match(/^\s*(function|class) (\w+)/);return s?s[2]:n===null?"null":""}function gc(n,s){return rl(n)===rl(s)}function vc(n,s){return ue(s)?s.findIndex(o=>gc(o,n)):fe(s)&&gc(s,n)?0:-1}function hd(n,s,o){const i=ge(s),a=o.propsOptions[0];for(const l in a){let r=a[l];r!=null&&n_(l,i[l],r,!Ce(n,l)&&!Ce(n,vt(l)))}}function n_(n,s,o,i){const{type:a,required:l,validator:r,skipCheck:c}=o;if(l&&i){q('Missing required prop: "'+n+'"');return}if(!(s==null&&!l)){if(a!=null&&a!==!0&&!c){let u=!1;const p=ue(a)?a:[a],d=[];for(let m=0;m<p.length&&!u;m++){const{valid:f,expectedType:h}=s_(s,p[m]);d.push(h||""),u=f}if(!u){q(o_(n,s,d));return}}r&&!r(s)&&q('Invalid prop: custom validator check failed for prop "'+n+'".')}}const t_=Wt("String,Number,Boolean,Function,Symbol,BigInt");function s_(n,s){let o;const i=rl(s);if(t_(i)){const a=typeof n;o=a===i.toLowerCase(),!o&&a==="object"&&(o=n instanceof s)}else i==="Object"?o=Ae(n):i==="Array"?o=ue(n):i==="null"?o=n===null:o=n instanceof s;return{valid:o,expectedType:i}}function o_(n,s,o){let i=`Invalid prop: type check failed for prop "${n}". Expected ${o.map(gs).join(" | ")}`;const a=o[0],l=nr(s),r=bc(s,a),c=bc(s,l);return o.length===1&&xc(a)&&!i_(a,l)&&(i+=` with value ${r}`),i+=`, got ${l} `,xc(l)&&(i+=`with value ${c}.`),i}function bc(n,s){return s==="String"?`"${n}"`:s==="Number"?`${Number(n)}`:`${n}`}function xc(n){return["string","number","boolean"].some(o=>n.toLowerCase()===o)}function i_(...n){return n.some(s=>s.toLowerCase()==="boolean")}const _d=n=>n[0]==="_"||n==="$stable",vr=n=>ue(n)?n.map(Un):[Un(n)],a_=(n,s,o)=>{if(s._n)return s;const i=v((...a)=>(Je&&q(`Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),vr(s(...a))),o);return i._c=!1,i},gd=(n,s,o)=>{const i=n._ctx;for(const a in n){if(_d(a))continue;const l=n[a];if(fe(l))s[a]=a_(a,l,i);else if(l!=null){q(`Non-function value encountered for slot "${a}". Prefer function slots for better performance.`);const r=vr(l);s[a]=()=>r}}},vd=(n,s)=>{hr(n.vnode)||q("Non-function value encountered for default slot. Prefer function slots for better performance.");const o=vr(s);n.slots.default=()=>o},l_=(n,s)=>{if(n.vnode.shapeFlag&32){const o=s._;o?(n.slots=ge(s),$i(s,"_",o)):gd(s,n.slots={})}else n.slots={},s&&vd(n,s);$i(n.slots,ca,1)},r_=(n,s,o)=>{const{vnode:i,slots:a}=n;let l=!0,r=Fe;if(i.shapeFlag&32){const c=s._;c?Tt?(He(a,s),it(n,"set","$slots")):o&&c===1?l=!1:(He(a,s),!o&&c===1&&delete a._):(l=!s.$stable,gd(s,a)),r=s}else s&&(vd(n,s),r={default:1});if(l)for(const c in a)!_d(c)&&!(c in r)&&delete a[c]};function cl(n,s,o,i,a=!1){if(ue(n)){n.forEach((f,h)=>cl(f,s&&(ue(s)?s[h]:s),o,i,a));return}if(Ms(i)&&!a)return;const l=i.shapeFlag&4?ua(i.component)||i.component.proxy:i.el,r=a?null:l,{i:c,r:u}=n;if(!c){q("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=s&&s.r,d=c.refs===Fe?c.refs={}:c.refs,m=c.setupState;if(p!=null&&p!==u&&(We(p)?(d[p]=null,Ce(m,p)&&(m[p]=null)):Te(p)&&(p.value=null)),fe(u))gt(u,c,12,[r,d]);else{const f=We(u),h=Te(u);if(f||h){const _=()=>{if(n.f){const w=f?Ce(m,u)?m[u]:d[u]:u.value;a?ue(w)&&Jl(w,l):ue(w)?w.includes(l)||w.push(l):f?(d[u]=[l],Ce(m,u)&&(m[u]=d[u])):(u.value=[l],n.k&&(d[n.k]=u.value))}else f?(d[u]=r,Ce(m,u)&&(m[u]=r)):h?(u.value=r,n.k&&(d[n.k]=r)):q("Invalid template ref type:",u,`(${typeof u})`)};r?(_.id=-1,nn(_,o)):_()}else q("Invalid template ref type:",u,`(${typeof u})`)}}let qs,St;function pt(n,s){n.appContext.config.performance&&Di()&&St.mark(`vue-${s}-${n.uid}`),f1(n,s,Di()?St.now():Date.now())}function dt(n,s){if(n.appContext.config.performance&&Di()){const o=`vue-${s}-${n.uid}`,i=o+":end";St.mark(i),St.measure(`<${pa(n,n.type)}> ${s}`,o,i),St.clearMarks(o),St.clearMarks(i)}h1(n,s,Di()?St.now():Date.now())}function Di(){return qs!==void 0||(typeof window<"u"&&window.performance?(qs=!0,St=window.performance):qs=!1),qs}function c_(){const n=[];if(n.length){const s=n.length>1;console.warn(`Feature flag${s?"s":""} ${n.join(", ")} ${s?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const nn=y1;function u_(n){return p_(n)}function p_(n,s){c_();const o=Ci();o.__VUE__=!0,Yp(o.__VUE_DEVTOOLS_GLOBAL_HOOK__,o);const{insert:i,remove:a,patchProp:l,createElement:r,createText:c,createComment:u,setText:p,setElementText:d,parentNode:m,nextSibling:f,setScopeId:h=kn,insertStaticContent:_}=n,w=(g,k,O,W=null,K=null,Q=null,te=!1,Y=null,Z=Tt?!1:!!k.dynamicChildren)=>{if(g===k)return;g&&!es(g,k)&&(W=ne(g),gn(g,K,Q,!0),g=null),k.patchFlag===-2&&(Z=!1,k.dynamicChildren=null);const{type:U,ref:ce,shapeFlag:re}=k;switch(U){case Uo:y(g,k,O,W);break;case hn:L(g,k,O,W);break;case po:g==null?$(k,O,W,te):x(g,k,O,te);break;case ze:ve(g,k,O,W,K,Q,te,Y,Z);break;default:re&1?j(g,k,O,W,K,Q,te,Y,Z):re&6?xe(g,k,O,W,K,Q,te,Y,Z):re&64||re&128?U.process(g,k,O,W,K,Q,te,Y,Z,ie):q("Invalid VNode type:",U,`(${typeof U})`)}ce!=null&&K&&cl(ce,g&&g.ref,Q,k||g,!k)},y=(g,k,O,W)=>{if(g==null)i(k.el=c(k.children),O,W);else{const K=k.el=g.el;k.children!==g.children&&p(K,k.children)}},L=(g,k,O,W)=>{g==null?i(k.el=u(k.children||""),O,W):k.el=g.el},$=(g,k,O,W)=>{[g.el,g.anchor]=_(g.children,k,O,W,g.el,g.anchor)},x=(g,k,O,W)=>{if(k.children!==g.children){const K=f(g.anchor);T(g),[k.el,k.anchor]=_(k.children,O,K,W)}else k.el=g.el,k.anchor=g.anchor},P=({el:g,anchor:k},O,W)=>{let K;for(;g&&g!==k;)K=f(g),i(g,O,W),g=K;i(k,O,W)},T=({el:g,anchor:k})=>{let O;for(;g&&g!==k;)O=f(g),a(g),g=O;a(k)},j=(g,k,O,W,K,Q,te,Y,Z)=>{te=te||k.type==="svg",g==null?B(k,O,W,K,Q,te,Y,Z):le(g,k,K,Q,te,Y,Z)},B=(g,k,O,W,K,Q,te,Y)=>{let Z,U;const{type:ce,props:re,shapeFlag:de,transition:_e,dirs:Ee}=g;if(Z=g.el=r(g.type,Q,re&&re.is,re),de&8?d(Z,g.children):de&16&&V(g.children,Z,null,W,K,Q&&ce!=="foreignObject",te,Y),Ee&&Ut(g,null,W,"created"),F(Z,g,g.scopeId,te,W),re){for(const Ne in re)Ne!=="value"&&!_i(Ne)&&l(Z,Ne,null,re[Ne],Q,g.children,W,K,N);"value"in re&&l(Z,"value",null,re.value),(U=re.onVnodeBeforeMount)&&Pn(U,W,g)}Object.defineProperty(Z,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(Z,"__vueParentComponent",{value:W,enumerable:!1}),Ee&&Ut(g,null,W,"beforeMount");const Ke=(!K||K&&!K.pendingBranch)&&_e&&!_e.persisted;Ke&&_e.beforeEnter(Z),i(Z,k,O),((U=re&&re.onVnodeMounted)||Ke||Ee)&&nn(()=>{U&&Pn(U,W,g),Ke&&_e.enter(Z),Ee&&Ut(g,null,W,"mounted")},K)},F=(g,k,O,W,K)=>{if(O&&h(g,O),W)for(let Q=0;Q<W.length;Q++)h(g,W[Q]);if(K){let Q=K.subTree;if(Q.patchFlag>0&&Q.patchFlag&2048&&(Q=Xp(Q.children)||Q),k===Q){const te=K.vnode;F(g,te,te.scopeId,te.slotScopeIds,K.parent)}}},V=(g,k,O,W,K,Q,te,Y,Z=0)=>{for(let U=Z;U<g.length;U++){const ce=g[U]=Y?Ct(g[U]):Un(g[U]);w(null,ce,k,O,W,K,Q,te,Y)}},le=(g,k,O,W,K,Q,te)=>{const Y=k.el=g.el;let{patchFlag:Z,dynamicChildren:U,dirs:ce}=k;Z|=g.patchFlag&16;const re=g.props||Fe,de=k.props||Fe;let _e;O&&Vt(O,!1),(_e=de.onVnodeBeforeUpdate)&&Pn(_e,O,k,g),ce&&Ut(k,g,O,"beforeUpdate"),O&&Vt(O,!0),Tt&&(Z=0,te=!1,U=null);const Ee=K&&k.type!=="foreignObject";if(U?(me(g.dynamicChildren,U,Y,O,W,Ee,Q),ji(g,k)):te||$e(g,k,Y,null,O,W,Ee,Q,!1),Z>0){if(Z&16)X(Y,k,re,de,O,W,K);else if(Z&2&&re.class!==de.class&&l(Y,"class",null,de.class,K),Z&4&&l(Y,"style",re.style,de.style,K),Z&8){const Ke=k.dynamicProps;for(let Ne=0;Ne<Ke.length;Ne++){const Ve=Ke[Ne],Wn=re[Ve],Ls=de[Ve];(Ls!==Wn||Ve==="value")&&l(Y,Ve,Wn,Ls,K,g.children,O,W,N)}}Z&1&&g.children!==k.children&&d(Y,k.children)}else!te&&U==null&&X(Y,k,re,de,O,W,K);((_e=de.onVnodeUpdated)||ce)&&nn(()=>{_e&&Pn(_e,O,k,g),ce&&Ut(k,g,O,"updated")},W)},me=(g,k,O,W,K,Q,te)=>{for(let Y=0;Y<k.length;Y++){const Z=g[Y],U=k[Y],ce=Z.el&&(Z.type===ze||!es(Z,U)||Z.shapeFlag&70)?m(Z.el):O;w(Z,U,ce,null,W,K,Q,te,!0)}},X=(g,k,O,W,K,Q,te)=>{if(O!==W){if(O!==Fe)for(const Y in O)!_i(Y)&&!(Y in W)&&l(g,Y,O[Y],null,te,k.children,K,Q,N);for(const Y in W){if(_i(Y))continue;const Z=W[Y],U=O[Y];Z!==U&&Y!=="value"&&l(g,Y,U,Z,te,k.children,K,Q,N)}"value"in W&&l(g,"value",O.value,W.value)}},ve=(g,k,O,W,K,Q,te,Y,Z)=>{const U=k.el=g?g.el:c(""),ce=k.anchor=g?g.anchor:c("");let{patchFlag:re,dynamicChildren:de,slotScopeIds:_e}=k;(Tt||re&2048)&&(re=0,Z=!1,de=null),_e&&(Y=Y?Y.concat(_e):_e),g==null?(i(U,O,W),i(ce,O,W),V(k.children,O,ce,K,Q,te,Y,Z)):re>0&&re&64&&de&&g.dynamicChildren?(me(g.dynamicChildren,de,O,K,Q,te,Y),ji(g,k)):$e(g,k,O,ce,K,Q,te,Y,Z)},xe=(g,k,O,W,K,Q,te,Y,Z)=>{k.slotScopeIds=Y,g==null?k.shapeFlag&512?K.ctx.activate(k,O,W,te,Z):ye(k,O,W,K,Q,te,Z):De(g,k,Z)},ye=(g,k,O,W,K,Q,te)=>{const Y=g.component=w_(g,W,K);if(Y.type.__hmrId&&a1(Y),gi(g),pt(Y,"mount"),hr(g)&&(Y.ctx.renderer=ie),pt(Y,"init"),L_(Y),dt(Y,"init"),Y.asyncDep){if(K&&K.registerDep(Y,oe),!g.el){const Z=Y.subTree=R(hn);L(null,Z,k,O)}return}oe(Y,g,k,O,K,Q,te),vi(),dt(Y,"mount")},De=(g,k,O)=>{const W=k.component=g.component;if(k1(g,k,O))if(W.asyncDep&&!W.asyncResolved){gi(k),pe(W,k,O),vi();return}else W.next=k,o1(W.update),W.update();else k.el=g.el,W.vnode=k},oe=(g,k,O,W,K,Q,te)=>{const Y=()=>{if(g.isMounted){let{next:ce,bu:re,u:de,parent:_e,vnode:Ee}=g,Ke=ce,Ne;gi(ce||g.vnode),Vt(g,!1),ce?(ce.el=Ee.el,pe(g,ce,te)):ce=Ee,re&&Xt(re),(Ne=ce.props&&ce.props.onVnodeBeforeUpdate)&&Pn(Ne,_e,ce,Ee),Vt(g,!0),pt(g,"render");const Ve=va(g);dt(g,"render");const Wn=g.subTree;g.subTree=Ve,pt(g,"patch"),w(Wn,Ve,m(Wn.el),ne(Wn),g,K,Q),dt(g,"patch"),ce.el=Ve.el,Ke===null&&w1(g,Ve.el),de&&nn(de,K),(Ne=ce.props&&ce.props.onVnodeUpdated)&&nn(()=>Pn(Ne,_e,ce,Ee),K),Qp(g),vi()}else{let ce;const{el:re,props:de}=k,{bm:_e,m:Ee,parent:Ke}=g,Ne=Ms(k);if(Vt(g,!1),_e&&Xt(_e),!Ne&&(ce=de&&de.onVnodeBeforeMount)&&Pn(ce,Ke,k),Vt(g,!0),re&&je){const Ve=()=>{pt(g,"render"),g.subTree=va(g),dt(g,"render"),pt(g,"hydrate"),je(re,g.subTree,g,K,null),dt(g,"hydrate")};Ne?k.type.__asyncLoader().then(()=>!g.isUnmounted&&Ve()):Ve()}else{pt(g,"render");const Ve=g.subTree=va(g);dt(g,"render"),pt(g,"patch"),w(null,Ve,O,W,g,K,Q),dt(g,"patch"),k.el=Ve.el}if(Ee&&nn(Ee,K),!Ne&&(ce=de&&de.onVnodeMounted)){const Ve=k;nn(()=>Pn(ce,Ke,Ve),K)}(k.shapeFlag&256||Ke&&Ms(Ke.vnode)&&Ke.vnode.shapeFlag&256)&&g.a&&nn(g.a,K),g.isMounted=!0,el(g),k=O=W=null}},Z=g.effect=new ir(Y,()=>sa(U),g.scope),U=g.update=()=>Z.run();U.id=g.uid,Vt(g,!0),Z.onTrack=g.rtc?ce=>Xt(g.rtc,ce):void 0,Z.onTrigger=g.rtg?ce=>Xt(g.rtg,ce):void 0,U.ownerInstance=g,U()},pe=(g,k,O)=>{k.component=g;const W=g.vnode.props;g.vnode=k,g.next=null,e_(g,k.props,W,O),r_(g,k.children,O),bs(),lc(),xs()},$e=(g,k,O,W,K,Q,te,Y,Z=!1)=>{const U=g&&g.children,ce=g?g.shapeFlag:0,re=k.children,{patchFlag:de,shapeFlag:_e}=k;if(de>0){if(de&128){Mn(U,re,O,W,K,Q,te,Y,Z);return}else if(de&256){Pe(U,re,O,W,K,Q,te,Y,Z);return}}_e&8?(ce&16&&N(U,K,Q),re!==U&&d(O,re)):ce&16?_e&16?Mn(U,re,O,W,K,Q,te,Y,Z):N(U,K,Q,!0):(ce&8&&d(O,""),_e&16&&V(re,O,W,K,Q,te,Y,Z))},Pe=(g,k,O,W,K,Q,te,Y,Z)=>{g=g||zs,k=k||zs;const U=g.length,ce=k.length,re=Math.min(U,ce);let de;for(de=0;de<re;de++){const _e=k[de]=Z?Ct(k[de]):Un(k[de]);w(g[de],_e,O,null,K,Q,te,Y,Z)}U>ce?N(g,K,Q,!0,!1,re):V(k,O,W,K,Q,te,Y,Z,re)},Mn=(g,k,O,W,K,Q,te,Y,Z)=>{let U=0;const ce=k.length;let re=g.length-1,de=ce-1;for(;U<=re&&U<=de;){const _e=g[U],Ee=k[U]=Z?Ct(k[U]):Un(k[U]);if(es(_e,Ee))w(_e,Ee,O,null,K,Q,te,Y,Z);else break;U++}for(;U<=re&&U<=de;){const _e=g[re],Ee=k[de]=Z?Ct(k[de]):Un(k[de]);if(es(_e,Ee))w(_e,Ee,O,null,K,Q,te,Y,Z);else break;re--,de--}if(U>re){if(U<=de){const _e=de+1,Ee=_e<ce?k[_e].el:W;for(;U<=de;)w(null,k[U]=Z?Ct(k[U]):Un(k[U]),O,Ee,K,Q,te,Y,Z),U++}}else if(U>de)for(;U<=re;)gn(g[U],K,Q,!0),U++;else{const _e=U,Ee=U,Ke=new Map;for(U=Ee;U<=de;U++){const un=k[U]=Z?Ct(k[U]):Un(k[U]);un.key!=null&&(Ke.has(un.key)&&q("Duplicate keys found during update:",JSON.stringify(un.key),"Make sure keys are unique."),Ke.set(un.key,U))}let Ne,Ve=0;const Wn=de-Ee+1;let Ls=!1,Qr=0;const Bs=new Array(Wn);for(U=0;U<Wn;U++)Bs[U]=0;for(U=_e;U<=re;U++){const un=g[U];if(Ve>=Wn){gn(un,K,Q,!0);continue}let Jn;if(un.key!=null)Jn=Ke.get(un.key);else for(Ne=Ee;Ne<=de;Ne++)if(Bs[Ne-Ee]===0&&es(un,k[Ne])){Jn=Ne;break}Jn===void 0?gn(un,K,Q,!0):(Bs[Jn-Ee]=U+1,Jn>=Qr?Qr=Jn:Ls=!0,w(un,k[Jn],O,null,K,Q,te,Y,Z),Ve++)}const Zr=Ls?d_(Bs):zs;for(Ne=Zr.length-1,U=Wn-1;U>=0;U--){const un=Ee+U,Jn=k[un],Jr=un+1<ce?k[un+1].el:W;Bs[U]===0?w(null,Jn,O,Jr,K,Q,te,Y,Z):Ls&&(Ne<0||U!==Zr[Ne]?sn(Jn,O,Jr,2):Ne--)}}},sn=(g,k,O,W,K=null)=>{const{el:Q,type:te,transition:Y,children:Z,shapeFlag:U}=g;if(U&6){sn(g.component.subTree,k,O,W);return}if(U&128){g.suspense.move(k,O,W);return}if(U&64){te.move(g,k,O,ie);return}if(te===ze){i(Q,k,O);for(let re=0;re<Z.length;re++)sn(Z[re],k,O,W);i(g.anchor,k,O);return}if(te===po){P(g,k,O);return}if(W!==2&&U&1&&Y)if(W===0)Y.beforeEnter(Q),i(Q,k,O),nn(()=>Y.enter(Q),K);else{const{leave:re,delayLeave:de,afterLeave:_e}=Y,Ee=()=>i(Q,k,O),Ke=()=>{re(Q,()=>{Ee(),_e&&_e()})};de?de(Q,Ee,Ke):Ke()}else i(Q,k,O)},gn=(g,k,O,W=!1,K=!1)=>{const{type:Q,props:te,ref:Y,children:Z,dynamicChildren:U,shapeFlag:ce,patchFlag:re,dirs:de}=g;if(Y!=null&&cl(Y,null,O,g,!0),ce&256){k.ctx.deactivate(g);return}const _e=ce&1&&de,Ee=!Ms(g);let Ke;if(Ee&&(Ke=te&&te.onVnodeBeforeUnmount)&&Pn(Ke,k,g),ce&6)An(g.component,O,W);else{if(ce&128){g.suspense.unmount(O,W);return}_e&&Ut(g,null,k,"beforeUnmount"),ce&64?g.type.remove(g,k,O,K,ie,W):U&&(Q!==ze||re>0&&re&64)?N(U,k,O,!1,!0):(Q===ze&&re&384||!K&&ce&16)&&N(Z,k,O),W&&Zn(g)}(Ee&&(Ke=te&&te.onVnodeUnmounted)||_e)&&nn(()=>{Ke&&Pn(Ke,k,g),_e&&Ut(g,null,k,"unmounted")},O)},Zn=g=>{const{type:k,el:O,anchor:W,transition:K}=g;if(k===ze){g.patchFlag>0&&g.patchFlag&2048&&K&&!K.persisted?g.children.forEach(te=>{te.type===hn?a(te.el):Zn(te)}):qt(O,W);return}if(k===po){T(g);return}const Q=()=>{a(O),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(g.shapeFlag&1&&K&&!K.persisted){const{leave:te,delayLeave:Y}=K,Z=()=>te(O,Q);Y?Y(g.el,Q,Z):Z()}else Q()},qt=(g,k)=>{let O;for(;g!==k;)O=f(g),a(g),g=O;a(k)},An=(g,k,O)=>{g.type.__hmrId&&l1(g);const{bum:W,scope:K,update:Q,subTree:te,um:Y}=g;W&&Xt(W),K.stop(),Q&&(Q.active=!1,gn(te,g,k,O)),Y&&nn(Y,k),nn(()=>{g.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve()),m1(g)},N=(g,k,O,W=!1,K=!1,Q=0)=>{for(let te=Q;te<g.length;te++)gn(g[te],k,O,W,K)},ne=g=>g.shapeFlag&6?ne(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),se=(g,k,O)=>{g==null?k._vnode&&gn(k._vnode,null,null,!0):w(k._vnode||null,g,k,null,null,null,O),lc(),Up(),k._vnode=g},ie={p:w,um:gn,m:sn,r:Zn,mt:ye,mc:V,pc:$e,pbc:me,n:ne,o:n};let Ie,je;return s&&([Ie,je]=s(ie)),{render:se,hydrate:Ie,createApp:Z1(se,Ie)}}function Vt({effect:n,update:s},o){n.allowRecurse=s.allowRecurse=o}function ji(n,s,o=!1){const i=n.children,a=s.children;if(ue(i)&&ue(a))for(let l=0;l<i.length;l++){const r=i[l];let c=a[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=a[l]=Ct(a[l]),c.el=r.el),o||ji(r,c)),c.type===Uo&&(c.el=r.el),c.type===hn&&!c.el&&(c.el=r.el)}}function d_(n){const s=n.slice(),o=[0];let i,a,l,r,c;const u=n.length;for(i=0;i<u;i++){const p=n[i];if(p!==0){if(a=o[o.length-1],n[a]<p){s[i]=a,o.push(i);continue}for(l=0,r=o.length-1;l<r;)c=l+r>>1,n[o[c]]<p?l=c+1:r=c;p<n[o[l]]&&(l>0&&(s[i]=o[l-1]),o[l]=i)}}for(l=o.length,r=o[l-1];l-- >0;)o[l]=r,r=s[r];return o}const m_=n=>n.__isTeleport,As=n=>n&&(n.disabled||n.disabled===""),kc=n=>typeof SVGElement<"u"&&n instanceof SVGElement,ul=(n,s)=>{const o=n&&n.to;if(We(o))if(s){const i=s(o);return i||q(`Failed to locate Teleport target with selector "${o}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),i}else return q("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!o&&!As(n)&&q(`Invalid Teleport target: ${o}`),o},f_={__isTeleport:!0,process(n,s,o,i,a,l,r,c,u,p){const{mc:d,pc:m,pbc:f,o:{insert:h,querySelector:_,createText:w,createComment:y}}=p,L=As(s.props);let{shapeFlag:$,children:x,dynamicChildren:P}=s;if(Tt&&(u=!1,P=null),n==null){const T=s.el=y("teleport start"),j=s.anchor=y("teleport end");h(T,o,i),h(j,o,i);const B=s.target=ul(s.props,_),F=s.targetAnchor=w("");B?(h(F,B),r=r||kc(B)):L||q("Invalid Teleport target on mount:",B,`(${typeof B})`);const V=(le,me)=>{$&16&&d(x,le,me,a,l,r,c,u)};L?V(o,j):B&&V(B,F)}else{s.el=n.el;const T=s.anchor=n.anchor,j=s.target=n.target,B=s.targetAnchor=n.targetAnchor,F=As(n.props),V=F?o:j,le=F?T:B;if(r=r||kc(j),P?(f(n.dynamicChildren,P,V,a,l,r,c),ji(n,s,!0)):u||m(n,s,V,le,a,l,r,c,!1),L)F||oi(s,o,T,p,1);else if((s.props&&s.props.to)!==(n.props&&n.props.to)){const me=s.target=ul(s.props,_);me?oi(s,me,null,p,0):q("Invalid Teleport target on update:",j,`(${typeof j})`)}else F&&oi(s,j,B,p,1)}bd(s)},remove(n,s,o,i,{um:a,o:{remove:l}},r){const{shapeFlag:c,children:u,anchor:p,targetAnchor:d,target:m,props:f}=n;if(m&&l(d),(r||!As(f))&&(l(p),c&16))for(let h=0;h<u.length;h++){const _=u[h];a(_,s,o,!0,!!_.dynamicChildren)}},move:oi,hydrate:h_};function oi(n,s,o,{o:{insert:i},m:a},l=2){l===0&&i(n.targetAnchor,s,o);const{el:r,anchor:c,shapeFlag:u,children:p,props:d}=n,m=l===2;if(m&&i(r,s,o),(!m||As(d))&&u&16)for(let f=0;f<p.length;f++)a(p[f],s,o,2);m&&i(c,s,o)}function h_(n,s,o,i,a,l,{o:{nextSibling:r,parentNode:c,querySelector:u}},p){const d=s.target=ul(s.props,u);if(d){const m=d._lpa||d.firstChild;if(s.shapeFlag&16)if(As(s.props))s.anchor=p(r(n),s,c(n),o,i,a,l),s.targetAnchor=m;else{s.anchor=r(n);let f=m;for(;f;)if(f=r(f),f&&f.nodeType===8&&f.data==="teleport anchor"){s.targetAnchor=f,d._lpa=s.targetAnchor&&r(s.targetAnchor);break}p(m,s,d,o,i,a,l)}bd(s)}return s.anchor&&r(s.anchor)}const __=f_;function bd(n){const s=n.ctx;if(s&&s.ut){let o=n.children[0].el;for(;o!==n.targetAnchor;)o.nodeType===1&&o.setAttribute("data-v-owner",s.uid),o=o.nextSibling;s.ut()}}const ze=Symbol.for("v-fgt"),Uo=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),po=Symbol.for("v-stc"),mo=[];let Gn=null;function b(n=!1){mo.push(Gn=n?null:[])}function g_(){mo.pop(),Gn=mo[mo.length-1]||null}let Eo=1;function wc(n){Eo+=n}function xd(n){return n.dynamicChildren=Eo>0?Gn||zs:null,g_(),Eo>0&&Gn&&Gn.push(n),n}function ae(n,s,o,i,a,l){return xd(e(n,s,o,i,a,l,!0))}function C(n,s,o,i,a){return xd(R(n,s,o,i,a,!0))}function Ht(n){return n?n.__v_isVNode===!0:!1}function es(n,s){return s.shapeFlag&6&&Ss.has(s.type)?(n.shapeFlag&=-257,s.shapeFlag&=-513,!1):n.type===s.type&&n.key===s.key}const v_=(...n)=>b_(...n),ca="__vInternal",kd=({key:n})=>n??null,bi=({ref:n,ref_key:s,ref_for:o})=>(typeof n=="number"&&(n=""+n),n!=null?We(n)||Te(n)||fe(n)?{i:Xe,r:n,k:s,f:!!o}:n:null);function e(n,s=null,o=null,i=0,a=null,l=n===ze?0:1,r=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:s,key:s&&kd(s),ref:s&&bi(s),scopeId:ia,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:i,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Xe};return c?(br(u,o),l&128&&n.normalize(u)):o&&(u.shapeFlag|=We(o)?8:16),u.key!==u.key&&q("VNode created with invalid key (NaN). VNode type:",u.type),Eo>0&&!r&&Gn&&(u.patchFlag>0||l&6)&&u.patchFlag!==32&&Gn.push(u),u}const R=v_;function b_(n,s=null,o=null,i=0,a=null,l=!1){if((!n||n===D1)&&(n||q(`Invalid vnode type when creating vnode: ${n}.`),n=hn),Ht(n)){const c=lt(n,s,!0);return o&&br(c,o),Eo>0&&!l&&Gn&&(c.shapeFlag&6?Gn[Gn.indexOf(n)]=c:Gn.push(c)),c.patchFlag|=-2,c}if($d(n)&&(n=n.__vccOpts),s){s=z(s);let{class:c,style:u}=s;c&&!We(c)&&(s.class=qe(c)),Ae(u)&&(zi(u)&&!ue(u)&&(u=He({},u)),s.style=tn(u))}const r=We(n)?1:ed(n)?128:m_(n)?64:Ae(n)?4:fe(n)?2:0;return r&4&&zi(n)&&(n=ge(n),q("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,n)),e(n,s,o,i,a,r,l,!0)}function z(n){return n?zi(n)||ca in n?He({},n):n:null}function lt(n,s,o=!1){const{props:i,ref:a,patchFlag:l,children:r}=n,c=s?G(i||{},s):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&kd(c),ref:s&&s.ref?o&&a?ue(a)?a.concat(bi(s)):[a,bi(s)]:bi(s):a,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l===-1&&ue(r)?r.map(wd):r,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:s&&n.type!==ze?l===-1?16:l|16:l,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&lt(n.ssContent),ssFallback:n.ssFallback&&lt(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function wd(n){const s=lt(n);return ue(n.children)&&(s.children=n.children.map(wd)),s}function t(n=" ",s=0){return R(Uo,null,n,s)}function we(n="",s=!1){return s?(b(),C(hn,null,n)):R(hn,null,n)}function Un(n){return n==null||typeof n=="boolean"?R(hn):ue(n)?R(ze,null,n.slice()):typeof n=="object"?Ct(n):R(Uo,null,String(n))}function Ct(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:lt(n)}function br(n,s){let o=0;const{shapeFlag:i}=n;if(s==null)s=null;else if(ue(s))o=16;else if(typeof s=="object")if(i&65){const a=s.default;a&&(a._c&&(a._d=!1),br(n,a()),a._c&&(a._d=!0));return}else{o=32;const a=s._;!a&&!(ca in s)?s._ctx=Xe:a===3&&Xe&&(Xe.slots._===1?s._=1:(s._=2,n.patchFlag|=1024))}else fe(s)?(s={default:s,_ctx:Xe},o=32):(s=String(s),i&64?(o=16,s=[t(s)]):o=8);n.children=s,n.shapeFlag|=o}function G(...n){const s={};for(let o=0;o<n.length;o++){const i=n[o];for(const a in i)if(a==="class")s.class!==i.class&&(s.class=qe([s.class,i.class]));else if(a==="style")s.style=tn([s.style,i.style]);else if(Ho(a)){const l=s[a],r=i[a];r&&l!==r&&!(ue(l)&&l.includes(r))&&(s[a]=l?[].concat(l,r):r)}else a!==""&&(s[a]=i[a])}return s}function Pn(n,s,o,i=null){Nn(n,s,7,[o,i])}const x_=dd();let k_=0;function w_(n,s,o){const i=n.type,a=(s?s.appContext:n.appContext)||x_,l={uid:k_++,vnode:n,type:i,parent:s,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fd(i,a),emitsOptions:Jp(i,a),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:i.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=N1(l),l.root=s?s.root:l,l.emit=g1.bind(null,l),n.ce&&n.ce(l),l}let Je=null;const Ln=()=>Je||Xe;let xr,Is,yc="__VUE_INSTANCE_SETTERS__";(Is=Ci()[yc])||(Is=Ci()[yc]=[]),Is.push(n=>Je=n),xr=n=>{Is.length>1?Is.forEach(s=>s(n)):Is[0](n)};const Ps=n=>{xr(n),n.scope.on()},fs=()=>{Je&&Je.scope.off(),xr(null)},y_=Wt("slot,component");function pl(n,s){const o=s.isNativeTag||gp;(y_(n)||o(n))&&q("Do not use built-in or reserved HTML elements as component id: "+n)}function yd(n){return n.vnode.shapeFlag&4}let So=!1;function L_(n,s=!1){So=s;const{props:o,children:i}=n.vnode,a=yd(n);J1(n,o,a,s),l_(n,i);const l=a?I_(n,s):void 0;return So=!1,l}function I_(n,s){var o;const i=n.type;{if(i.name&&pl(i.name,n.appContext.config),i.components){const l=Object.keys(i.components);for(let r=0;r<l.length;r++)pl(l[r],n.appContext.config)}if(i.directives){const l=Object.keys(i.directives);for(let r=0;r<l.length;r++)td(l[r])}i.compilerOptions&&$_()&&q('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}n.accessCache=Object.create(null),n.proxy=na(new Proxy(n.ctx,ud)),F1(n);const{setup:a}=i;if(a){const l=n.setupContext=a.length>1?Id(n):null;Ps(n),bs();const r=gt(a,n,0,[oo(n.props),l]);if(xs(),fs(),er(r)){if(r.then(fs,fs),s)return r.then(c=>{Lc(n,c,s)}).catch(c=>{ta(c,n,0)});if(n.asyncDep=r,!n.suspense){const c=(o=i.name)!=null?o:"Anonymous";q(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Lc(n,r,s)}else Ld(n,s)}function Lc(n,s,o){fe(s)?n.type.__ssrInlineRender?n.ssrRender=s:n.render=s:Ae(s)?(Ht(s)&&q("setup() should not return VNodes directly - return a render function instead."),n.devtoolsRawSetupState=s,n.setupState=Fp(s),H1(n)):s!==void 0&&q(`setup() should return an object. Received: ${s===null?"null":typeof s}`),Ld(n,o)}let dl;const $_=()=>!dl;function Ld(n,s,o){const i=n.type;if(!n.render){if(!s&&dl&&!i.render){const a=i.template||gr(n).template;if(a){pt(n,"compile");const{isCustomElement:l,compilerOptions:r}=n.appContext.config,{delimiters:c,compilerOptions:u}=i,p=He(He({isCustomElement:l,delimiters:c},r),u);i.render=dl(a,p),dt(n,"compile")}}n.render=i.render||kn}Ps(n),bs(),q1(n),xs(),fs(),!i.render&&n.render===kn&&!s&&(i.template?q('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):q("Component is missing template or render function."))}function C_(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(s,o){return Mi(),cn(n,"get","$attrs"),s[o]},set(){return q("setupContext.attrs is readonly."),!1},deleteProperty(){return q("setupContext.attrs is readonly."),!1}}))}function E_(n){return n.slotsProxy||(n.slotsProxy=new Proxy(n.slots,{get(s,o){return cn(n,"get","$slots"),s[o]}}))}function Id(n){return Object.freeze({get attrs(){return C_(n)},get slots(){return E_(n)},get emit(){return(o,...i)=>n.emit(o,...i)},expose:o=>{if(n.exposed&&q("expose() should be called only once per setup()."),o!=null){let i=typeof o;i==="object"&&(ue(o)?i="array":Te(o)&&(i="ref")),i!=="object"&&q(`expose() should be passed a plain object, received ${i}.`)}n.exposed=o||{}}})}function ua(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Fp(na(n.exposed)),{get(s,o){if(o in s)return s[o];if(o in ms)return ms[o](n)},has(s,o){return o in s||o in ms}}))}const S_=/(?:^|[-_])(\w)/g,R_=n=>n.replace(S_,s=>s.toUpperCase()).replace(/[-_]/g,"");function Ro(n,s=!0){return fe(n)?n.displayName||n.name:n.name||s&&n.__name}function pa(n,s,o=!1){let i=Ro(s);if(!i&&s.__file){const a=s.__file.match(/([^/\\]+)\.\w+$/);a&&(i=a[1])}if(!i&&n&&n.parent){const a=l=>{for(const r in l)if(l[r]===s)return r};i=a(n.components||n.parent.type.components)||a(n.appContext.components)}return i?R_(i):o?"App":"Anonymous"}function $d(n){return fe(n)&&"__vccOpts"in n}const H=(n,s)=>Yh(n,s,So);function yn(n,s,o){const i=arguments.length;return i===2?Ae(s)&&!ue(s)?Ht(s)?R(n,null,[s]):R(n,s):R(n,null,s):(i>3?o=Array.prototype.slice.call(arguments,2):i===3&&Ht(o)&&(o=[o]),R(n,s,o))}const z_=Symbol.for("v-scx"),T_=()=>{{const n=I(z_);return n||q("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),n}};function wa(n){return!!(n&&n.__v_isShallow)}function M_(){if(typeof window>"u")return;const n={style:"color:#3ba776"},s={style:"color:#0b1bc9"},o={style:"color:#b62e24"},i={style:"color:#9d288c"},a={header(m){return Ae(m)?m.__isVue?["div",n,"VueInstance"]:Te(m)?["div",{},["span",n,d(m)],"<",c(m.value),">"]:ps(m)?["div",{},["span",n,wa(m)?"ShallowReactive":"Reactive"],"<",c(m),`>${Ft(m)?" (readonly)":""}`]:Ft(m)?["div",{},["span",n,wa(m)?"ShallowReadonly":"Readonly"],"<",c(m),">"]:null:null},hasBody(m){return m&&m.__isVue},body(m){if(m&&m.__isVue)return["div",{},...l(m.$)]}};function l(m){const f=[];m.type.props&&m.props&&f.push(r("props",ge(m.props))),m.setupState!==Fe&&f.push(r("setup",m.setupState)),m.data!==Fe&&f.push(r("data",ge(m.data)));const h=u(m,"computed");h&&f.push(r("computed",h));const _=u(m,"inject");return _&&f.push(r("injected",_)),f.push(["div",{},["span",{style:i.style+";opacity:0.66"},"$ (internal): "],["object",{object:m}]]),f}function r(m,f){return f=He({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},m],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",i,h+": "],c(f[h],!1)])]]:["span",{}]}function c(m,f=!0){return typeof m=="number"?["span",s,m]:typeof m=="string"?["span",o,JSON.stringify(m)]:typeof m=="boolean"?["span",i,m]:Ae(m)?["object",{object:f?ge(m):m}]:["span",o,String(m)]}function u(m,f){const h=m.type;if(fe(h))return;const _={};for(const w in m.ctx)p(h,w,f)&&(_[w]=m.ctx[w]);return _}function p(m,f,h){const _=m[h];if(ue(_)&&_.includes(f)||Ae(_)&&f in _||m.extends&&p(m.extends,f,h)||m.mixins&&m.mixins.some(w=>p(w,f,h)))return!0}function d(m){return wa(m)?"ShallowRef":m.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(a):window.devtoolsFormatters=[a]}const Ni="3.3.4",A_="http://www.w3.org/2000/svg",ns=typeof document<"u"?document:null,Ic=ns&&ns.createElement("template"),O_={insert:(n,s,o)=>{s.insertBefore(n,o||null)},remove:n=>{const s=n.parentNode;s&&s.removeChild(n)},createElement:(n,s,o,i)=>{const a=s?ns.createElementNS(A_,n):ns.createElement(n,o?{is:o}:void 0);return n==="select"&&i&&i.multiple!=null&&a.setAttribute("multiple",i.multiple),a},createText:n=>ns.createTextNode(n),createComment:n=>ns.createComment(n),setText:(n,s)=>{n.nodeValue=s},setElementText:(n,s)=>{n.textContent=s},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ns.querySelector(n),setScopeId(n,s){n.setAttribute(s,"")},insertStaticContent(n,s,o,i,a,l){const r=o?o.previousSibling:s.lastChild;if(a&&(a===l||a.nextSibling))for(;s.insertBefore(a.cloneNode(!0),o),!(a===l||!(a=a.nextSibling)););else{Ic.innerHTML=i?`<svg>${n}</svg>`:n;const c=Ic.content;if(i){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}s.insertBefore(c,o)}return[r?r.nextSibling:s.firstChild,o?o.previousSibling:s.lastChild]}};function P_(n,s,o){const i=n._vtc;i&&(s=(s?[s,...i]:[...i]).join(" ")),s==null?n.removeAttribute("class"):o?n.setAttribute("class",s):n.className=s}function D_(n,s,o){const i=n.style,a=We(o);if(o&&!a){if(s&&!We(s))for(const l in s)o[l]==null&&ml(i,l,"");for(const l in o)ml(i,l,o[l])}else{const l=i.display;a?s!==o&&(i.cssText=o):s&&n.removeAttribute("style"),"_vod"in n&&(i.display=l)}}const j_=/[^\\];\s*$/,$c=/\s*!important$/;function ml(n,s,o){if(ue(o))o.forEach(i=>ml(n,s,i));else if(o==null&&(o=""),j_.test(o)&&q(`Unexpected semicolon at the end of '${s}' style value: '${o}'`),s.startsWith("--"))n.setProperty(s,o);else{const i=N_(n,s);$c.test(o)?n.setProperty(vt(i),o.replace($c,""),"important"):n[i]=o}}const Cc=["Webkit","Moz","ms"],ya={};function N_(n,s){const o=ya[s];if(o)return o;let i=ot(s);if(i!=="filter"&&i in n)return ya[s]=i;i=gs(i);for(let a=0;a<Cc.length;a++){const l=Cc[a]+i;if(l in n)return ya[s]=l}return s}const Ec="http://www.w3.org/1999/xlink";function F_(n,s,o,i,a){if(i&&s.startsWith("xlink:"))o==null?n.removeAttributeNS(Ec,s.slice(6,s.length)):n.setAttributeNS(Ec,s,o);else{const l=ch(s);o==null||l&&!wp(o)?n.removeAttribute(s):n.setAttribute(s,l?"":o)}}function H_(n,s,o,i,a,l,r){if(s==="innerHTML"||s==="textContent"){i&&r(i,a,l),n[s]=o??"";return}const c=n.tagName;if(s==="value"&&c!=="PROGRESS"&&!c.includes("-")){n._value=o;const p=c==="OPTION"?n.getAttribute("value"):n.value,d=o??"";p!==d&&(n.value=d),o==null&&n.removeAttribute(s);return}let u=!1;if(o===""||o==null){const p=typeof n[s];p==="boolean"?o=wp(o):o==null&&p==="string"?(o="",u=!0):p==="number"&&(o=0,u=!0)}try{n[s]=o}catch(p){u||q(`Failed setting prop "${s}" on <${c.toLowerCase()}>: value ${o} is invalid.`,p)}u&&n.removeAttribute(s)}function K_(n,s,o,i){n.addEventListener(s,o,i)}function W_(n,s,o,i){n.removeEventListener(s,o,i)}function B_(n,s,o,i,a=null){const l=n._vei||(n._vei={}),r=l[s];if(i&&r)r.value=i;else{const[c,u]=q_(s);if(i){const p=l[s]=G_(i,a);K_(n,c,p,u)}else r&&(W_(n,c,r,u),l[s]=void 0)}}const Sc=/(?:Once|Passive|Capture)$/;function q_(n){let s;if(Sc.test(n)){s={};let i;for(;i=n.match(Sc);)n=n.slice(0,n.length-i[0].length),s[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):vt(n.slice(2)),s]}let La=0;const U_=Promise.resolve(),V_=()=>La||(U_.then(()=>La=0),La=Date.now());function G_(n,s){const o=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=o.attached)return;Nn(Y_(i,o.value),s,5,[i])};return o.value=n,o.attached=V_(),o}function Y_(n,s){if(ue(s)){const o=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{o.call(n),n._stopped=!0},s.map(i=>a=>!a._stopped&&i&&i(a))}else return s}const Rc=/^on[a-z]/,Q_=(n,s,o,i,a=!1,l,r,c,u)=>{s==="class"?P_(n,i,a):s==="style"?D_(n,o,i):Ho(s)?Ii(s)||B_(n,s,o,i,r):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):Z_(n,s,i,a))?H_(n,s,i,l,r,c,u):(s==="true-value"?n._trueValue=i:s==="false-value"&&(n._falseValue=i),F_(n,s,i,a))};function Z_(n,s,o,i){return i?!!(s==="innerHTML"||s==="textContent"||s in n&&Rc.test(s)&&fe(o)):s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&n.tagName==="INPUT"||s==="type"&&n.tagName==="TEXTAREA"||Rc.test(s)&&We(o)?!1:s in n}function Cd(n){const s=Ln();if(!s){q("useCssVars is called without current active component instance.");return}const o=s.ut=(a=n(s.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${s.uid}"]`)).forEach(l=>hl(l,a))},i=()=>{const a=n(s.proxy);fl(s.subTree,a),o(a)};L1(i),kt(()=>{const a=new MutationObserver(i);a.observe(s.subTree.el.parentNode,{childList:!0}),qo(()=>a.disconnect())})}function fl(n,s){if(n.shapeFlag&128){const o=n.suspense;n=o.activeBranch,o.pendingBranch&&!o.isHydrating&&o.effects.push(()=>{fl(o.activeBranch,s)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)hl(n.el,s);else if(n.type===ze)n.children.forEach(o=>fl(o,s));else if(n.type===po){let{el:o,anchor:i}=n;for(;o&&(hl(o,s),o!==i);)o=o.nextSibling}}function hl(n,s){if(n.nodeType===1){const o=n.style;for(const i in s)o.setProperty(`--${i}`,s[i])}}const yt="transition",Us="animation",Ed={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},J_=He({},C1,Ed),Gt=(n,s=[])=>{ue(n)?n.forEach(o=>o(...s)):n&&n(...s)},zc=n=>n?ue(n)?n.some(s=>s.length>1):n.length>1:!1;function X_(n){const s={};for(const X in n)X in Ed||(s[X]=n[X]);if(n.css===!1)return s;const{name:o="v",type:i,duration:a,enterFromClass:l=`${o}-enter-from`,enterActiveClass:r=`${o}-enter-active`,enterToClass:c=`${o}-enter-to`,appearFromClass:u=l,appearActiveClass:p=r,appearToClass:d=c,leaveFromClass:m=`${o}-leave-from`,leaveActiveClass:f=`${o}-leave-active`,leaveToClass:h=`${o}-leave-to`}=n,_=eg(a),w=_&&_[0],y=_&&_[1],{onBeforeEnter:L,onEnter:$,onEnterCancelled:x,onLeave:P,onLeaveCancelled:T,onBeforeAppear:j=L,onAppear:B=$,onAppearCancelled:F=x}=s,V=(X,ve,xe)=>{It(X,ve?d:c),It(X,ve?p:r),xe&&xe()},le=(X,ve)=>{X._isLeaving=!1,It(X,m),It(X,h),It(X,f),ve&&ve()},me=X=>(ve,xe)=>{const ye=X?B:$,De=()=>V(ve,X,xe);Gt(ye,[ve,De]),Tc(()=>{It(ve,X?u:l),mt(ve,X?d:c),zc(ye)||Mc(ve,i,w,De)})};return He(s,{onBeforeEnter(X){Gt(L,[X]),mt(X,l),mt(X,r)},onBeforeAppear(X){Gt(j,[X]),mt(X,u),mt(X,p)},onEnter:me(!1),onAppear:me(!0),onLeave(X,ve){X._isLeaving=!0;const xe=()=>le(X,ve);mt(X,m),Rd(),mt(X,f),Tc(()=>{X._isLeaving&&(It(X,m),mt(X,h),zc(P)||Mc(X,i,y,xe))}),Gt(P,[X,xe])},onEnterCancelled(X){V(X,!1),Gt(x,[X])},onAppearCancelled(X){V(X,!0),Gt(F,[X])},onLeaveCancelled(X){le(X),Gt(T,[X])}})}function eg(n){if(n==null)return null;if(Ae(n))return[Ia(n.enter),Ia(n.leave)];{const s=Ia(n);return[s,s]}}function Ia(n){const s=eh(n);return e1(s,"<transition> explicit duration"),s}function mt(n,s){s.split(/\s+/).forEach(o=>o&&n.classList.add(o)),(n._vtc||(n._vtc=new Set)).add(s)}function It(n,s){s.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const{_vtc:o}=n;o&&(o.delete(s),o.size||(n._vtc=void 0))}function Tc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let ng=0;function Mc(n,s,o,i){const a=n._endId=++ng,l=()=>{a===n._endId&&i()};if(o)return setTimeout(l,o);const{type:r,timeout:c,propCount:u}=Sd(n,s);if(!r)return i();const p=r+"end";let d=0;const m=()=>{n.removeEventListener(p,f),l()},f=h=>{h.target===n&&++d>=u&&m()};setTimeout(()=>{d<u&&m()},c+1),n.addEventListener(p,f)}function Sd(n,s){const o=window.getComputedStyle(n),i=_=>(o[_]||"").split(", "),a=i(`${yt}Delay`),l=i(`${yt}Duration`),r=Ac(a,l),c=i(`${Us}Delay`),u=i(`${Us}Duration`),p=Ac(c,u);let d=null,m=0,f=0;s===yt?r>0&&(d=yt,m=r,f=l.length):s===Us?p>0&&(d=Us,m=p,f=u.length):(m=Math.max(r,p),d=m>0?r>p?yt:Us:null,f=d?d===yt?l.length:u.length:0);const h=d===yt&&/\b(transform|all)(,|$)/.test(i(`${yt}Property`).toString());return{type:d,timeout:m,propCount:f,hasTransform:h}}function Ac(n,s){for(;n.length<s.length;)n=n.concat(n);return Math.max(...s.map((o,i)=>Oc(o)+Oc(n[i])))}function Oc(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function Rd(){return document.body.offsetHeight}const zd=new WeakMap,Td=new WeakMap,Md={name:"TransitionGroup",props:He({},J_,{tag:String,moveClass:String}),setup(n,{slots:s}){const o=Ln(),i=$1();let a,l;return ra(()=>{if(!a.length)return;const r=n.moveClass||`${n.name||"v"}-move`;if(!lg(a[0].el,o.vnode.el,r))return;a.forEach(og),a.forEach(ig);const c=a.filter(ag);Rd(),c.forEach(u=>{const p=u.el,d=p.style;mt(p,r),d.transform=d.webkitTransform=d.transitionDuration="";const m=p._moveCb=f=>{f&&f.target!==p||(!f||/transform$/.test(f.propertyName))&&(p.removeEventListener("transitionend",m),p._moveCb=null,It(p,r))};p.addEventListener("transitionend",m)})}),()=>{const r=ge(n),c=X_(r);let u=r.tag||ze;a=l,l=s.default?od(s.default()):[];for(let p=0;p<l.length;p++){const d=l[p];d.key!=null?Ai(d,tl(d,c,i,o)):q("<TransitionGroup> children must be keyed.")}if(a)for(let p=0;p<a.length;p++){const d=a[p];Ai(d,tl(d,c,i,o)),zd.set(d,d.el.getBoundingClientRect())}return R(u,null,l)}}},tg=n=>delete n.mode;Md.props;const sg=Md;function og(n){const s=n.el;s._moveCb&&s._moveCb(),s._enterCb&&s._enterCb()}function ig(n){Td.set(n,n.el.getBoundingClientRect())}function ag(n){const s=zd.get(n),o=Td.get(n),i=s.left-o.left,a=s.top-o.top;if(i||a){const l=n.el.style;return l.transform=l.webkitTransform=`translate(${i}px,${a}px)`,l.transitionDuration="0s",n}}function lg(n,s,o){const i=n.cloneNode();n._vtc&&n._vtc.forEach(r=>{r.split(/\s+/).forEach(c=>c&&i.classList.remove(c))}),o.split(/\s+/).forEach(r=>r&&i.classList.add(r)),i.style.display="none";const a=s.nodeType===1?s:s.parentNode;a.appendChild(i);const{hasTransform:l}=Sd(i);return a.removeChild(i),l}const rg=["ctrl","shift","alt","meta"],cg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,s)=>rg.some(o=>n[`${o}Key`]&&!s.includes(o))},ug=(n,s)=>(o,...i)=>{for(let a=0;a<s.length;a++){const l=cg[s[a]];if(l&&l(o,s))return}return n(o,...i)},pg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ii=(n,s)=>o=>{if(!("key"in o))return;const i=vt(o.key);if(s.some(a=>a===i||pg[a]===i))return n(o)},Ad={beforeMount(n,{value:s},{transition:o}){n._vod=n.style.display==="none"?"":n.style.display,o&&s?o.beforeEnter(n):Vs(n,s)},mounted(n,{value:s},{transition:o}){o&&s&&o.enter(n)},updated(n,{value:s,oldValue:o},{transition:i}){!s!=!o&&(i?s?(i.beforeEnter(n),Vs(n,!0),i.enter(n)):i.leave(n,()=>{Vs(n,!1)}):Vs(n,s))},beforeUnmount(n,{value:s}){Vs(n,s)}};function Vs(n,s){n.style.display=s?n._vod:"none"}const dg=He({patchProp:Q_},O_);let Pc;function mg(){return Pc||(Pc=u_(dg))}const fg=(...n)=>{const s=mg().createApp(...n);hg(s),_g(s);const{mount:o}=s;return s.mount=i=>{const a=gg(i);if(!a)return;const l=s._component;!fe(l)&&!l.render&&!l.template&&(l.template=a.innerHTML),a.innerHTML="";const r=o(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),r},s};function hg(n){Object.defineProperty(n.config,"isNativeTag",{value:s=>kp(s)||lh(s),writable:!1})}function _g(n){{const s=n.config.isCustomElement;Object.defineProperty(n.config,"isCustomElement",{get(){return s},set(){q("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const o=n.config.compilerOptions,i='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(n.config,"compilerOptions",{get(){return q(i),o},set(){q(i)}})}}function gg(n){if(We(n)){const s=document.querySelector(n);return s||q(`Failed to mount app: mount target selector "${n}" returned null.`),s}return window.ShadowRoot&&n instanceof window.ShadowRoot&&n.mode==="closed"&&q('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),n}function vg(){M_()}vg();function _l(n,s={},o){for(const i in n){const a=n[i],l=o?`${o}:${i}`:i;typeof a=="object"&&a!==null?_l(a,s,l):typeof a=="function"&&(s[l]=a)}return s}const bg={run:n=>n()},xg=()=>bg,Od=typeof console.createTask<"u"?console.createTask:xg;function kg(n,s){const o=s.shift(),i=Od(o);return n.reduce((a,l)=>a.then(()=>i.run(()=>l(...s))),Promise.resolve())}function wg(n,s){const o=s.shift(),i=Od(o);return Promise.all(n.map(a=>i.run(()=>a(...s))))}function $a(n,s){for(const o of[...n])o(s)}class yg{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(s,o,i={}){if(!s||typeof o!="function")return()=>{};const a=s;let l;for(;this._deprecatedHooks[s];)l=this._deprecatedHooks[s],s=l.to;if(l&&!i.allowDeprecated){let r=l.message;r||(r=`${a} hook has been deprecated`+(l.to?`, please use ${l.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(r)||(console.warn(r),this._deprecatedMessages.add(r))}if(!o.name)try{Object.defineProperty(o,"name",{get:()=>"_"+s.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[s]=this._hooks[s]||[],this._hooks[s].push(o),()=>{o&&(this.removeHook(s,o),o=void 0)}}hookOnce(s,o){let i,a=(...l)=>(typeof i=="function"&&i(),i=void 0,a=void 0,o(...l));return i=this.hook(s,a),i}removeHook(s,o){if(this._hooks[s]){const i=this._hooks[s].indexOf(o);i!==-1&&this._hooks[s].splice(i,1),this._hooks[s].length===0&&delete this._hooks[s]}}deprecateHook(s,o){this._deprecatedHooks[s]=typeof o=="string"?{to:o}:o;const i=this._hooks[s]||[];delete this._hooks[s];for(const a of i)this.hook(s,a)}deprecateHooks(s){Object.assign(this._deprecatedHooks,s);for(const o in s)this.deprecateHook(o,s[o])}addHooks(s){const o=_l(s),i=Object.keys(o).map(a=>this.hook(a,o[a]));return()=>{for(const a of i.splice(0,i.length))a()}}removeHooks(s){const o=_l(s);for(const i in o)this.removeHook(i,o[i])}removeAllHooks(){for(const s in this._hooks)delete this._hooks[s]}callHook(s,...o){return o.unshift(s),this.callHookWith(kg,s,...o)}callHookParallel(s,...o){return o.unshift(s),this.callHookWith(wg,s,...o)}callHookWith(s,o,...i){const a=this._before||this._after?{name:o,args:i,context:{}}:void 0;this._before&&$a(this._before,a);const l=s(o in this._hooks?[...this._hooks[o]]:[],i);return l instanceof Promise?l.finally(()=>{this._after&&a&&$a(this._after,a)}):(this._after&&a&&$a(this._after,a),l)}beforeEach(s){return this._before=this._before||[],this._before.push(s),()=>{if(this._before!==void 0){const o=this._before.indexOf(s);o!==-1&&this._before.splice(o,1)}}}afterEach(s){return this._after=this._after||[],this._after.push(s),()=>{if(this._after!==void 0){const o=this._after.indexOf(s);o!==-1&&this._after.splice(o,1)}}}}function Lg(){return new yg}function Ig(n){return Array.isArray(n)?n:[n]}const Pd=["title","script","style","noscript"],Dd=["base","meta","link","style","script","noscript"],$g=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Cg=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Eg=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function jd(n){let s=9;for(let o=0;o<n.length;)s=Math.imul(s^n.charCodeAt(o++),9**9);return((s^s>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function gl(n){return jd(`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([s,o])=>`${s}:${String(o)}`).join(",")}`)}function Sg(n){let s=9;for(const o of n)for(let i=0;i<o.length;)s=Math.imul(s^o.charCodeAt(i++),9**9);return((s^s>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Nd(n,s){const{props:o,tag:i}=n;if(Cg.includes(i))return i;if(i==="link"&&o.rel==="canonical")return"canonical";if(o.charset)return"charset";const a=["id"];i==="meta"&&a.push("name","property","http-equiv");for(const l of a)if(typeof o[l]<"u"){const r=String(o[l]);return s&&!s(r)?!1:`${i}:${l}:${r}`}return!1}function Dc(n,s){return n==null?s||null:typeof n=="function"?n(s):n}function ai(n,s=!1,o){const{tag:i,$el:a}=n;a&&(Object.entries(i.props).forEach(([l,r])=>{r=String(r);const c=`attr:${l}`;if(l==="class"){if(!r)return;for(const u of r.split(" ")){const p=`${c}:${u}`;o&&o(n,p,()=>a.classList.remove(u)),a.classList.contains(u)||a.classList.add(u)}return}o&&!l.startsWith("data-h-")&&o(n,c,()=>a.removeAttribute(l)),(s||a.getAttribute(l)!==r)&&a.setAttribute(l,r)}),Pd.includes(i.tag)&&(i.textContent&&i.textContent!==a.textContent?a.textContent=i.textContent:i.innerHTML&&i.innerHTML!==a.innerHTML&&(a.innerHTML=i.innerHTML)))}let Gs=!1;async function Fd(n,s={}){var f,h;const o={shouldRender:!0};if(await n.hooks.callHook("dom:beforeRender",o),!o.shouldRender)return;const i=s.document||n.resolvedOptions.document||window.document,a=(await n.resolveTags()).map(c);if(n.resolvedOptions.experimentalHashHydration&&(Gs=Gs||n._hash||!1,Gs)){const _=Sg(a.map(w=>w.tag._h));if(Gs===_)return;Gs=_}const l=n._popSideEffectQueue();n.headEntries().map(_=>_._sde).forEach(_=>{Object.entries(_).forEach(([w,y])=>{l[w]=y})});const r=(_,w,y)=>{w=`${_.renderId}:${w}`,_.entry&&(_.entry._sde[w]=y),delete l[w]};function c(_){const w=n.headEntries().find(L=>L._i===_._e),y={renderId:_._d||gl(_),$el:null,shouldRender:!0,tag:_,entry:w,markSideEffect:(L,$)=>r(y,L,$)};return y}const u=[],p={body:[],head:[]},d=_=>{n._elMap[_.renderId]=_.$el,u.push(_),r(_,"el",()=>{var w;(w=_.$el)==null||w.remove(),delete n._elMap[_.renderId]})};for(const _ of a){if(await n.hooks.callHook("dom:beforeRenderTag",_),!_.shouldRender)continue;const{tag:w}=_;if(w.tag==="title"){i.title=w.textContent||"",u.push(_);continue}if(w.tag==="htmlAttrs"||w.tag==="bodyAttrs"){_.$el=i[w.tag==="htmlAttrs"?"documentElement":"body"],ai(_,!1,r),u.push(_);continue}if(_.$el=n._elMap[_.renderId],!_.$el&&w.key&&(_.$el=i.querySelector(`${(f=w.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${w.tag}[data-h-${w._h}]`)),_.$el){_.tag._d&&ai(_),d(_);continue}p[(h=w.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(_)}const m={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(p).forEach(([_,w])=>{var L;if(!w.length)return;const y=(L=i==null?void 0:i[_])==null?void 0:L.children;if(y){for(const $ of[...y].reverse()){const x=$.tagName.toLowerCase();if(!Dd.includes(x))continue;const P=$.getAttributeNames().reduce((F,V)=>({...F,[V]:$.getAttribute(V)}),{}),T={tag:x,props:P};$.innerHTML&&(T.innerHTML=$.innerHTML);const j=gl(T);let B=w.findIndex(F=>(F==null?void 0:F.renderId)===j);if(B===-1){const F=Nd(T);B=w.findIndex(V=>(V==null?void 0:V.tag._d)&&V.tag._d===F)}if(B!==-1){const F=w[B];F.$el=$,ai(F),d(F),delete w[B]}}w.forEach($=>{const x=$.tag.tagPosition||"head";m[x]=m[x]||i.createDocumentFragment(),$.$el||($.$el=i.createElement($.tag.tag),ai($,!0)),m[x].appendChild($.$el),d($)})}}),m.head&&i.head.appendChild(m.head),m.bodyOpen&&i.body.insertBefore(m.bodyOpen,i.body.firstChild),m.bodyClose&&i.body.appendChild(m.bodyClose);for(const _ of u)await n.hooks.callHook("dom:renderTag",_);Object.values(l).forEach(_=>_())}let Ca=null;async function Hd(n,s={}){function o(){return Ca=null,Fd(n,s)}const i=s.delayFn||(a=>setTimeout(a,10));return Ca=Ca||new Promise(a=>i(()=>a(o())))}function Rg(n){return{hooks:{"entries:updated":function(s){if(typeof(n==null?void 0:n.document)>"u"&&typeof window>"u")return;let o=n==null?void 0:n.delayFn;!o&&typeof requestAnimationFrame<"u"&&(o=requestAnimationFrame),Hd(s,{document:(n==null?void 0:n.document)||window.document,delayFn:o})}}}}function zg(n){var s;return((s=n==null?void 0:n.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:s.getAttribute("content"))||!1}const jc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Nc(n){if(typeof n.tagPriority=="number")return n.tagPriority;if(n.tag==="meta"){if(n.props.charset)return-2;if(n.props["http-equiv"]==="content-security-policy")return 0}const s=n.tagPriority||n.tag;return s in jc?jc[s]:10}const Tg=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Mg(){return{hooks:{"tags:resolve":n=>{const s=o=>{var i;return(i=n.tags.find(a=>a._d===o))==null?void 0:i._p};for(const{prefix:o,offset:i}of Tg)for(const a of n.tags.filter(l=>typeof l.tagPriority=="string"&&l.tagPriority.startsWith(o))){const l=s(a.tagPriority.replace(o,""));typeof l<"u"&&(a._p=l+i)}n.tags.sort((o,i)=>o._p-i._p).sort((o,i)=>Nc(o)-Nc(i))}}}}function Ag(){return{hooks:{"tags:resolve":n=>{const{tags:s}=n;let o=s.findIndex(a=>a.tag==="titleTemplate");const i=s.findIndex(a=>a.tag==="title");if(i!==-1&&o!==-1){const a=Dc(s[o].textContent,s[i].textContent);a!==null?s[i].textContent=a||s[i].textContent:delete s[i]}else if(o!==-1){const a=Dc(s[o].textContent);a!==null&&(s[o].textContent=a,s[o].tag="title",o=-1)}o!==-1&&delete s[o],n.tags=s.filter(Boolean)}}}}function Og(){return{hooks:{"tag:normalise":function({tag:n}){typeof n.props.body<"u"&&(n.tagPosition="bodyClose",delete n.props.body)}}}}const Pg=["link","style","script","noscript"];function Dg(){return{hooks:{"tag:normalise":({tag:n,resolvedOptions:s})=>{s.experimentalHashHydration===!0&&(n._h=gl(n)),n.key&&Pg.includes(n.tag)&&(n._h=jd(n.key),n.props[`data-h-${n._h}`]="")}}}}const Fc=["script","link","bodyAttrs"];function jg(){const n=(s,o)=>{const i={},a={};Object.entries(o.props).forEach(([r,c])=>{r.startsWith("on")&&typeof c=="function"?a[r]=c:i[r]=c});let l;return s==="dom"&&o.tag==="script"&&typeof i.src=="string"&&typeof a.onload<"u"&&(l=i.src,delete i.src),{props:i,eventHandlers:a,delayedSrc:l}};return{hooks:{"ssr:render":function(s){s.tags=s.tags.map(o=>(!Fc.includes(o.tag)||!Object.entries(o.props).find(([i,a])=>i.startsWith("on")&&typeof a=="function")||(o.props=n("ssr",o).props),o))},"dom:beforeRenderTag":function(s){if(!Fc.includes(s.tag.tag)||!Object.entries(s.tag.props).find(([l,r])=>l.startsWith("on")&&typeof r=="function"))return;const{props:o,eventHandlers:i,delayedSrc:a}=n("dom",s.tag);Object.keys(i).length&&(s.tag.props=o,s.tag._eventHandlers=i,s.tag._delayedSrc=a)},"dom:renderTag":function(s){const o=s.$el;if(!s.tag._eventHandlers||!o)return;const i=s.tag.tag==="bodyAttrs"&&typeof window<"u"?window:o;Object.entries(s.tag._eventHandlers).forEach(([a,l])=>{const r=`${s.tag._d||s.tag._p}:${a}`,c=a.slice(2).toLowerCase(),u=`data-h-${c}`;if(s.markSideEffect(r,()=>{}),o.hasAttribute(u))return;const p=l;o.setAttribute(u,""),i.addEventListener(c,p),s.entry&&(s.entry._sde[r]=()=>{i.removeEventListener(c,p),o.removeAttribute(u)})}),s.tag._delayedSrc&&o.setAttribute("src",s.tag._delayedSrc)}}}}const Ng=["templateParams","htmlAttrs","bodyAttrs"];function Fg(){return{hooks:{"tag:normalise":function({tag:n}){["hid","vmid","key"].forEach(i=>{n.props[i]&&(n.key=n.props[i],delete n.props[i])});const o=Nd(n)||(n.key?`${n.tag}:${n.key}`:!1);o&&(n._d=o)},"tags:resolve":function(n){const s={};n.tags.forEach(i=>{const a=(i.key?`${i.tag}:${i.key}`:i._d)||i._p,l=s[a];if(l){let c=i==null?void 0:i.tagDuplicateStrategy;if(!c&&Ng.includes(i.tag)&&(c="merge"),c==="merge"){const u=l.props;["class","style"].forEach(p=>{i.props[p]&&u[p]&&(p==="style"&&!u[p].endsWith(";")&&(u[p]+=";"),i.props[p]=`${u[p]} ${i.props[p]}`)}),s[a].props={...u,...i.props};return}else if(i._e===l._e){l._duped=l._duped||[],i._d=`${l._d}:${l._duped.length+1}`,l._duped.push(i);return}}const r=Object.keys(i.props).length+(i.innerHTML?1:0)+(i.textContent?1:0);if(Dd.includes(i.tag)&&r===0){delete s[a];return}s[a]=i});const o=[];Object.values(s).forEach(i=>{const a=i._duped;delete i._duped,o.push(i),a&&o.push(...a)}),n.tags=o}}}}function li(n,s){function o(l){if(["s","pageTitle"].includes(l))return s.pageTitle;let r;return l.includes(".")?r=l.split(".").reduce((c,u)=>c&&c[u]||void 0,s):r=s[l],typeof r<"u"?r||"":!1}let i=n;try{i=decodeURI(n)}catch{}return(i.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(l=>{const r=o(l.slice(1));typeof r=="string"&&(n=n.replace(new RegExp(`\\${l}(\\W|$)`,"g"),`${r}$1`).trim())}),s.separator&&(n.endsWith(s.separator)&&(n=n.slice(0,-s.separator.length).trim()),n.startsWith(s.separator)&&(n=n.slice(s.separator.length).trim()),n=n.replace(new RegExp(`\\${s.separator}\\s*\\${s.separator}`,"g"),s.separator)),n}function Hg(){return{hooks:{"tags:resolve":n=>{var l;const{tags:s}=n,o=(l=s.find(r=>r.tag==="title"))==null?void 0:l.textContent,i=s.findIndex(r=>r.tag==="templateParams"),a=i!==-1?s[i].props:{};a.pageTitle=a.pageTitle||o||"";for(const r of s)if(["titleTemplate","title"].includes(r.tag)&&typeof r.textContent=="string")r.textContent=li(r.textContent,a);else if(r.tag==="meta"&&typeof r.props.content=="string")r.props.content=li(r.props.content,a);else if(r.tag==="link"&&typeof r.props.href=="string")r.props.href=li(r.props.href,a);else if(r.tag==="script"&&["application/json","application/ld+json"].includes(r.props.type)&&typeof r.innerHTML=="string")try{r.innerHTML=JSON.stringify(JSON.parse(r.innerHTML),(c,u)=>typeof u=="string"?li(u,a):u)}catch{}n.tags=s.filter(r=>r.tag!=="templateParams")}}}}const Kg=typeof window<"u";let Kd;function Wg(n){return Kd=n}function Bg(){return Kd}async function qg(n,s){const o={tag:n,props:{}};return n==="templateParams"?(o.props=s,o):["title","titleTemplate"].includes(n)?(o.textContent=s instanceof Promise?await s:s,o):typeof s=="string"?["script","noscript","style"].includes(n)?(n==="script"&&(/^(https?:)?\/\//.test(s)||s.startsWith("/"))?o.props.src=s:o.innerHTML=s,o):!1:(o.props=await Vg(n,{...s}),o.props.children&&(o.props.innerHTML=o.props.children),delete o.props.children,Object.keys(o.props).filter(i=>Eg.includes(i)).forEach(i=>{(!["innerHTML","textContent"].includes(i)||Pd.includes(o.tag))&&(o[i]=o.props[i]),delete o.props[i]}),["innerHTML","textContent"].forEach(i=>{if(o.tag==="script"&&typeof o[i]=="string"&&["application/ld+json","application/json"].includes(o.props.type))try{o[i]=JSON.parse(o[i])}catch{o[i]=""}typeof o[i]=="object"&&(o[i]=JSON.stringify(o[i]))}),o.props.class&&(o.props.class=Ug(o.props.class)),o.props.content&&Array.isArray(o.props.content)?o.props.content.map(i=>({...o,props:{...o.props,content:i}})):o)}function Ug(n){return typeof n=="object"&&!Array.isArray(n)&&(n=Object.keys(n).filter(s=>n[s])),(Array.isArray(n)?n.join(" "):n).split(" ").filter(s=>s.trim()).filter(Boolean).join(" ")}async function Vg(n,s){for(const o of Object.keys(s)){const i=o.startsWith("data-");s[o]instanceof Promise&&(s[o]=await s[o]),String(s[o])==="true"?s[o]=i?"true":"":String(s[o])==="false"&&(i?s[o]="false":delete s[o])}return s}const Gg=10;async function Yg(n){const s=[];return Object.entries(n.resolvedInput).filter(([o,i])=>typeof i<"u"&&$g.includes(o)).forEach(([o,i])=>{const a=Ig(i);s.push(...a.map(l=>qg(o,l)).flat())}),(await Promise.all(s)).flat().filter(Boolean).map((o,i)=>(o._e=n._i,o._p=(n._i<<Gg)+i,o))}function Qg(){return[Fg(),Mg(),Hg(),Ag(),Dg(),jg(),Og()]}function Zg(n={}){return[Rg({document:n==null?void 0:n.document,delayFn:n==null?void 0:n.domDelayFn})]}function Jg(n={}){const s=Xg({...n,plugins:[...Zg(n),...(n==null?void 0:n.plugins)||[]]});return n.experimentalHashHydration&&s.resolvedOptions.document&&(s._hash=zg(s.resolvedOptions.document)),Wg(s),s}function Xg(n={}){let s=[],o={},i=0;const a=Lg();n!=null&&n.hooks&&a.addHooks(n.hooks),n.plugins=[...Qg(),...(n==null?void 0:n.plugins)||[]],n.plugins.forEach(c=>c.hooks&&a.addHooks(c.hooks)),n.document=n.document||(Kg?document:void 0);const l=()=>a.callHook("entries:updated",r),r={resolvedOptions:n,headEntries(){return s},get hooks(){return a},use(c){c.hooks&&a.addHooks(c.hooks)},push(c,u){const p={_i:i++,input:c,_sde:{}};return u!=null&&u.mode&&(p._m=u==null?void 0:u.mode),u!=null&&u.transform&&(p._t=u==null?void 0:u.transform),s.push(p),l(),{dispose(){s=s.filter(d=>d._i!==p._i?!0:(o={...o,...d._sde||{}},d._sde={},l(),!1))},patch(d){s=s.map(m=>(m._i===p._i&&(p.input=m.input=d,l()),m))}}},async resolveTags(){const c={tags:[],entries:[...s]};await a.callHook("entries:resolve",c);for(const u of c.entries){const p=u._t||(d=>d);if(u.resolvedInput=p(u.resolvedInput||u.input),u.resolvedInput)for(const d of await Yg(u)){const m={tag:d,entry:u,resolvedOptions:r.resolvedOptions};await a.callHook("tag:normalise",m),c.tags.push(m.tag)}}return await a.callHook("tags:resolve",c),c.tags},_popSideEffectQueue(){const c={...o};return o={},c},_elMap:{}};return r.hooks.callHook("init",r),r}function e0(n){return typeof n=="function"?n():D(n)}function Fi(n,s=""){if(n instanceof Promise)return n;const o=e0(n);return!n||!o?o:Array.isArray(o)?o.map(i=>Fi(i,s)):typeof o=="object"?Object.fromEntries(Object.entries(o).map(([i,a])=>i==="titleTemplate"||i.startsWith("on")?[i,D(a)]:[i,Fi(a,i)])):o}const n0=Ni.startsWith("3"),t0=typeof window<"u",Wd="usehead";function kr(){return Ln()&&I(Wd)||Bg()}function s0(n){return{install(o){n0&&(o.config.globalProperties.$unhead=n,o.config.globalProperties.$head=n,o.provide(Wd,n))}}.install}function o0(n={}){const s=Jg({...n,domDelayFn:o=>setTimeout(()=>an(()=>o()),10),plugins:[i0(),...(n==null?void 0:n.plugins)||[]]});return s.install=s0(s),s}function i0(){return{hooks:{"entries:resolve":function(n){for(const s of n.entries)s.resolvedInput=Fi(s.input)}}}}function a0(n,s={}){const o=kr(),i=J(!1),a=J({});ks(()=>{a.value=i.value?{}:Fi(n)});const l=o.push(a.value,s);return be(a,c=>{l.patch(c)}),Ln()&&(Bo(()=>{l.dispose()}),ld(()=>{i.value=!0}),ad(()=>{i.value=!1})),l}function l0(n,s={}){return kr().push(n,s)}function Bd(n,s={}){var i;const o=kr();if(o){const a=t0||!!((i=o.resolvedOptions)!=null&&i.document);return s.mode==="server"&&a||s.mode==="client"&&!a?void 0:a?a0(n,s):l0(n,s)}}function r0(n,s){const o=o0(s||{}),i={unhead:o,install(a){Ni.startsWith("3")&&(a.config.globalProperties.$head=o,a.provide("usehead",o))},use(a){o.use(a)},resolveTags(){return o.resolveTags()},headEntries(){return o.headEntries()},headTags(){return o.resolveTags()},push(a,l){return o.push(a,l)},addEntry(a,l){return o.push(a,l)},addHeadObjs(a,l){return o.push(a,l)},addReactiveEntry(a,l){const r=Bd(a,l);return typeof r<"u"?r.dispose:()=>{}},removeHeadObjs(){},updateDOM(a,l){l?Fd(o,{document:a}):Hd(o,{delayFn:r=>setTimeout(()=>r(),50),document:a})},internalHooks:o.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return o.addHeadObjs=i.addHeadObjs,o.updateDOM=i.updateDOM,o.hooks.hook("dom:beforeRender",a=>{for(const l of i.hooks["before:dom"])l()===!1&&(a.shouldRender=!1)}),n&&i.addHeadObjs(n),i}const fo=Symbol("v-click-clicks"),ts=Symbol("v-click-clicks-elements"),vl=Symbol("v-click-clicks-order-map"),ho=Symbol("v-click-clicks-disabled"),qd=Symbol("slidev-slide-scale"),E=Symbol("slidev-slidev-context"),c0=Symbol("slidev-route"),u0=Symbol("slidev-slide-context"),Jt="slidev-vclick-target",Ea="slidev-vclick-hidden",p0="slidev-vclick-fade",Sa="slidev-vclick-hidden-explicitly",Ys="slidev-vclick-current",ri="slidev-vclick-prior",d0=["localhost","127.0.0.1"];let m0=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((s,o)=>(o&=63,o<36?s+=o.toString(36):o<62?s+=(o-26).toString(36).toUpperCase():o>62?s+="-":s+="_",s),"");function bl(n,s){if(!n)return!1;const o=n.indexOf(s);return o>=0?(n.splice(o,1),!0):!1}function f0(...n){let s,o,i;n.length===1?(s=0,i=1,[o]=n):[s,o,i=1]=n;const a=[];let l=s;for(;l<o;)a.push(l),l+=i||1;return a}function h0(n){return n!=null}function _0(n,s){return Object.fromEntries(Object.entries(n).map(([o,i])=>s(o,i)).filter(h0))}const ro={theme:"default",title:"SISTEMI & RETI 3",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},background:"/cover.png",class:"text-center",materia:"RETI 3",as:"2024/2025",version:"1.2.4"},Re=ro,Mt=Re.aspectRatio??16/9,At=Re.canvasWidth??980,wr=Math.ceil(At/Mt),yr=H(()=>_0(Re.themeConfig||{},(n,s)=>[`--slidev-theme-${n}`,s]));function Ud(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Kn(n,s,o){Object.defineProperty(n,s,{value:o,writable:!0,enumerable:!1})}const ws=Be({page:0,clicks:0});let g0=[],v0=[];Kn(ws,"$syncUp",!0);Kn(ws,"$syncDown",!0);Kn(ws,"$paused",!1);Kn(ws,"$onSet",n=>g0.push(n));Kn(ws,"$onPatch",n=>v0.push(n));Ud();Kn(ws,"$patch",async()=>!1);function Vd(n,s,o=!1){const i=[];let a=!1,l=!1,r,c;const u=Be(s);function p(h){i.push(h)}function d(h,_){u[h]!==_&&(clearTimeout(r),a=!0,u[h]=_,r=setTimeout(()=>a=!1,0))}function m(h){a||(clearTimeout(c),l=!0,Object.entries(h).forEach(([_,w])=>{u[_]=w}),c=setTimeout(()=>l=!1,0))}function f(h){let _;o?o&&window.addEventListener("storage",y=>{y&&y.key===h&&y.newValue&&m(JSON.parse(y.newValue))}):(_=new BroadcastChannel(h),_.addEventListener("message",y=>m(y.data)));function w(){!o&&_&&!l?_.postMessage(ge(u)):o&&!l&&window.localStorage.setItem(h,JSON.stringify(u)),a||i.forEach(y=>y(u))}if(be(u,w,{deep:!0,flush:"sync"}),o){const y=window.localStorage.getItem(h);y&&m(JSON.parse(y))}}return{init:f,onPatch:p,patch:d,state:u}}const{init:b0,onPatch:x0,patch:Qs,state:Ra}=Vd(ws,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ys=Be({});let k0=[],w0=[];Kn(ys,"$syncUp",!0);Kn(ys,"$syncDown",!0);Kn(ys,"$paused",!1);Kn(ys,"$onSet",n=>k0.push(n));Kn(ys,"$onPatch",n=>w0.push(n));Ud();Kn(ys,"$patch",async()=>!1);const{init:y0,onPatch:L0,patch:Gd,state:Hi}=Vd(ys,{},!1),I0="modulepreload",$0=function(n){return"/3/linux_cli/"+n},Hc={},Ot=function(s,o,i){if(!o||o.length===0)return s();const a=document.getElementsByTagName("link");return Promise.all(o.map(l=>{if(l=$0(l),l in Hc)return;Hc[l]=!0;const r=l.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!i)for(let d=a.length-1;d>=0;d--){const m=a[d];if(m.href===l&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":I0,r||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),r)return new Promise((d,m)=>{p.addEventListener("load",d),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>s())};function C0(n,s){let o,i,a;const l=J(!0),r=()=>{l.value=!0,a()};be(n,r,{flush:"sync"});const c=typeof s=="function"?s:s.get,u=typeof s=="function"?void 0:s.set,p=ur((d,m)=>(i=d,a=m,{get(){return l.value&&(o=c(),l.value=!1),i(),o},set(f){u==null||u(f)}}));return Object.isExtensible(p)&&(p.trigger=r),p}function rt(n){return sr()?(Ip(n),!0):!1}function Ge(n){return typeof n=="function"?n():D(n)}function E0(n){if(!Te(n))return Be(n);const s=new Proxy({},{get(o,i,a){return D(Reflect.get(n.value,i,a))},set(o,i,a){return Te(n.value[i])&&!Te(a)?n.value[i].value=a:n.value[i]=a,!0},deleteProperty(o,i){return Reflect.deleteProperty(n.value,i)},has(o,i){return Reflect.has(n.value,i)},ownKeys(){return Object.keys(n.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Be(s)}const Yn=typeof window<"u",S0=n=>typeof n<"u",R0=n=>n!=null,z0=Object.prototype.toString,xl=n=>z0.call(n)==="[object Object]",kl=()=>+Date.now(),hs=()=>{},T0=M0();function M0(){var n;return Yn&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function A0(n,s){function o(...i){return new Promise((a,l)=>{Promise.resolve(n(()=>s.apply(this,i),{fn:s,thisArg:this,args:i})).then(a).catch(l)})}return o}const Yd=n=>n();function O0(n=Yd){const s=J(!0);function o(){s.value=!1}function i(){s.value=!0}const a=(...l)=>{s.value&&n(...l)};return{isActive:Vn(s),pause:o,resume:i,eventFilter:a}}function P0(n,s){var o;if(typeof n=="number")return n+s;const i=((o=n.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:o[0])||"",a=n.slice(i.length),l=parseFloat(i)+s;return Number.isNaN(l)?n:l+a}function Qd(...n){if(n.length!==1)return Vh(...n);const s=n[0];return typeof s=="function"?Vn(ur(()=>({get:s,set:hs}))):J(s)}var D0=Object.defineProperty,j0=Object.defineProperties,N0=Object.getOwnPropertyDescriptors,Kc=Object.getOwnPropertySymbols,F0=Object.prototype.hasOwnProperty,H0=Object.prototype.propertyIsEnumerable,Wc=(n,s,o)=>s in n?D0(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,K0=(n,s)=>{for(var o in s||(s={}))F0.call(s,o)&&Wc(n,o,s[o]);if(Kc)for(var o of Kc(s))H0.call(s,o)&&Wc(n,o,s[o]);return n},W0=(n,s)=>j0(n,N0(s));function B0(n){if(!Te(n))return Bh(n);const s=Array.isArray(n.value)?new Array(n.value.length):{};for(const o in n.value)s[o]=ur(()=>({get(){return n.value[o]},set(i){if(Array.isArray(n.value)){const a=[...n.value];a[o]=i,n.value=a}else{const a=W0(K0({},n.value),{[o]:i});Object.setPrototypeOf(a,n.value),n.value=a}}}));return s}function Zd(n,s=!0){Ln()?kt(n):s?n():an(n)}function q0(n){Ln()&&qo(n)}function U0(n,s=1e3,o={}){const{immediate:i=!0,immediateCallback:a=!1}=o;let l=null;const r=J(!1);function c(){l&&(clearInterval(l),l=null)}function u(){r.value=!1,c()}function p(){const d=Ge(s);d<=0||(r.value=!0,a&&n(),c(),l=setInterval(n,d))}if(i&&Yn&&p(),Te(s)||typeof s=="function"){const d=be(s,()=>{r.value&&Yn&&p()});rt(d)}return rt(u),{isActive:r,pause:u,resume:p}}function V0(n,s,o={}){const{immediate:i=!0}=o,a=J(!1);let l=null;function r(){l&&(clearTimeout(l),l=null)}function c(){a.value=!1,r()}function u(...p){r(),a.value=!0,l=setTimeout(()=>{a.value=!1,l=null,n(...p)},Ge(s))}return i&&(a.value=!0,Yn&&u()),rt(c),{isPending:Vn(a),start:u,stop:c}}function Jd(n=!1,s={}){const{truthyValue:o=!0,falsyValue:i=!1}=s,a=Te(n),l=J(n);function r(c){if(arguments.length)return l.value=c,l.value;{const u=Ge(o);return l.value=l.value===u?Ge(i):u,l.value}}return a?r:[l,r]}var Bc=Object.getOwnPropertySymbols,G0=Object.prototype.hasOwnProperty,Y0=Object.prototype.propertyIsEnumerable,Q0=(n,s)=>{var o={};for(var i in n)G0.call(n,i)&&s.indexOf(i)<0&&(o[i]=n[i]);if(n!=null&&Bc)for(var i of Bc(n))s.indexOf(i)<0&&Y0.call(n,i)&&(o[i]=n[i]);return o};function Z0(n,s,o={}){const i=o,{eventFilter:a=Yd}=i,l=Q0(i,["eventFilter"]);return be(n,A0(a,s),l)}var J0=Object.defineProperty,X0=Object.defineProperties,ev=Object.getOwnPropertyDescriptors,Ki=Object.getOwnPropertySymbols,Xd=Object.prototype.hasOwnProperty,em=Object.prototype.propertyIsEnumerable,qc=(n,s,o)=>s in n?J0(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,nv=(n,s)=>{for(var o in s||(s={}))Xd.call(s,o)&&qc(n,o,s[o]);if(Ki)for(var o of Ki(s))em.call(s,o)&&qc(n,o,s[o]);return n},tv=(n,s)=>X0(n,ev(s)),sv=(n,s)=>{var o={};for(var i in n)Xd.call(n,i)&&s.indexOf(i)<0&&(o[i]=n[i]);if(n!=null&&Ki)for(var i of Ki(n))s.indexOf(i)<0&&em.call(n,i)&&(o[i]=n[i]);return o};function ov(n,s,o={}){const i=o,{eventFilter:a}=i,l=sv(i,["eventFilter"]),{eventFilter:r,pause:c,resume:u,isActive:p}=O0(a);return{stop:Z0(n,s,tv(nv({},l),{eventFilter:r})),pause:c,resume:u,isActive:p}}function ln(n){var s;const o=Ge(n);return(s=o==null?void 0:o.$el)!=null?s:o}const en=Yn?window:void 0,nm=Yn?window.document:void 0,iv=Yn?window.navigator:void 0;function Le(...n){let s,o,i,a;if(typeof n[0]=="string"||Array.isArray(n[0])?([o,i,a]=n,s=en):[s,o,i,a]=n,!s)return hs;Array.isArray(o)||(o=[o]),Array.isArray(i)||(i=[i]);const l=[],r=()=>{l.forEach(d=>d()),l.length=0},c=(d,m,f,h)=>(d.addEventListener(m,f,h),()=>d.removeEventListener(m,f,h)),u=be(()=>[ln(s),Ge(a)],([d,m])=>{r(),d&&l.push(...o.flatMap(f=>i.map(h=>c(d,f,h,m))))},{immediate:!0,flush:"post"}),p=()=>{u(),r()};return rt(p),p}let Uc=!1;function av(n,s,o={}){const{window:i=en,ignore:a=[],capture:l=!0,detectIframe:r=!1}=o;if(!i)return;T0&&!Uc&&(Uc=!0,Array.from(i.document.body.children).forEach(f=>f.addEventListener("click",hs)));let c=!0;const u=f=>a.some(h=>{if(typeof h=="string")return Array.from(i.document.querySelectorAll(h)).some(_=>_===f.target||f.composedPath().includes(_));{const _=ln(h);return _&&(f.target===_||f.composedPath().includes(_))}}),d=[Le(i,"click",f=>{const h=ln(n);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(c=!u(f)),!c){c=!0;return}s(f)}},{passive:!0,capture:l}),Le(i,"pointerdown",f=>{const h=ln(n);h&&(c=!f.composedPath().includes(h)&&!u(f))},{passive:!0}),r&&Le(i,"blur",f=>{var h;const _=ln(n);((h=i.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(_!=null&&_.contains(i.document.activeElement))&&s(f)})].filter(Boolean);return()=>d.forEach(f=>f())}function lv(n){return typeof n=="function"?n:typeof n=="string"?s=>s.key===n:Array.isArray(n)?s=>n.includes(s.key):()=>!0}function rv(...n){let s,o,i={};n.length===3?(s=n[0],o=n[1],i=n[2]):n.length===2?typeof n[1]=="object"?(s=!0,o=n[0],i=n[1]):(s=n[0],o=n[1]):(s=!0,o=n[0]);const{target:a=en,eventName:l="keydown",passive:r=!1,dedupe:c=!1}=i,u=lv(s);return Le(a,l,d=>{d.repeat&&Ge(c)||u(d)&&o(d)},r)}function cv(n={}){var s;const{window:o=en}=n,i=(s=n.document)!=null?s:o==null?void 0:o.document,a=C0(()=>null,()=>i==null?void 0:i.activeElement);return o&&(Le(o,"blur",l=>{l.relatedTarget===null&&a.trigger()},!0),Le(o,"focus",a.trigger,!0)),a}function uv(){const n=J(!1);return Ln()&&kt(()=>{n.value=!0}),n}function Vo(n){const s=uv();return H(()=>(s.value,!!n()))}function pv(n,s={}){const{immediate:o=!0,window:i=en}=s,a=J(!1);let l=0,r=null;function c(d){if(!a.value||!i)return;const m=d-l;n({delta:m,timestamp:d}),l=d,r=i.requestAnimationFrame(c)}function u(){!a.value&&i&&(a.value=!0,r=i.requestAnimationFrame(c))}function p(){a.value=!1,r!=null&&i&&(i.cancelAnimationFrame(r),r=null)}return o&&u(),rt(p),{isActive:Vn(a),pause:p,resume:u}}function ss(n,s={}){const{window:o=en}=s,i=Vo(()=>o&&"matchMedia"in o&&typeof o.matchMedia=="function");let a;const l=J(!1),r=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",c):a.removeListener(c))},c=()=>{i.value&&(r(),a=o.matchMedia(Qd(n).value),l.value=!!(a!=null&&a.matches),a&&("addEventListener"in a?a.addEventListener("change",c):a.addListener(c)))};return ks(c),rt(()=>r()),l}const dv={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function mv(n,s={}){function o(c,u){let p=n[c];return u!=null&&(p=P0(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:i=en}=s;function a(c){return i?i.matchMedia(c).matches:!1}const l=c=>ss(`(min-width: ${o(c)})`,s),r=Object.keys(n).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>l(u),enumerable:!0,configurable:!0}),c),{});return Object.assign(r,{greater(c){return ss(`(min-width: ${o(c,.1)})`,s)},greaterOrEqual:l,smaller(c){return ss(`(max-width: ${o(c,-.1)})`,s)},smallerOrEqual(c){return ss(`(max-width: ${o(c)})`,s)},between(c,u){return ss(`(min-width: ${o(c)}) and (max-width: ${o(u,-.1)})`,s)},isGreater(c){return a(`(min-width: ${o(c,.1)})`)},isGreaterOrEqual(c){return a(`(min-width: ${o(c)})`)},isSmaller(c){return a(`(max-width: ${o(c,-.1)})`)},isSmallerOrEqual(c){return a(`(max-width: ${o(c)})`)},isInBetween(c,u){return a(`(min-width: ${o(c)}) and (max-width: ${o(u,-.1)})`)},current(){const c=Object.keys(n).map(u=>[u,l(u)]);return H(()=>c.filter(([,u])=>u.value).map(([u])=>u))}})}function fv(n={}){const{navigator:s=iv,read:o=!1,source:i,copiedDuring:a=1500,legacy:l=!1}=n,r=["copy","cut"],c=Vo(()=>s&&"clipboard"in s),u=H(()=>c.value||l),p=J(""),d=J(!1),m=V0(()=>d.value=!1,a);function f(){c.value?s.clipboard.readText().then(y=>{p.value=y}):p.value=w()}if(u.value&&o)for(const y of r)Le(y,f);async function h(y=Ge(i)){u.value&&y!=null&&(c.value?await s.clipboard.writeText(y):_(y),p.value=y,d.value=!0,m.start())}function _(y){const L=document.createElement("textarea");L.value=y??"",L.style.position="absolute",L.style.opacity="0",document.body.appendChild(L),L.select(),document.execCommand("copy"),L.remove()}function w(){var y,L,$;return($=(L=(y=document==null?void 0:document.getSelection)==null?void 0:y.call(document))==null?void 0:L.toString())!=null?$:""}return{isSupported:u,text:p,copied:d,copy:h}}function hv(n){return JSON.parse(JSON.stringify(n))}const ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ui="__vueuse_ssr_handlers__",_v=gv();function gv(){return ui in ci||(ci[ui]=ci[ui]||{}),ci[ui]}function vv(n,s){return _v[n]||s}function bv(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}var xv=Object.defineProperty,Vc=Object.getOwnPropertySymbols,kv=Object.prototype.hasOwnProperty,wv=Object.prototype.propertyIsEnumerable,Gc=(n,s,o)=>s in n?xv(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,Yc=(n,s)=>{for(var o in s||(s={}))kv.call(s,o)&&Gc(n,o,s[o]);if(Vc)for(var o of Vc(s))wv.call(s,o)&&Gc(n,o,s[o]);return n};const yv={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},Qc="vueuse-storage";function Lv(n,s,o,i={}){var a;const{flush:l="pre",deep:r=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:d,window:m=en,eventFilter:f,onError:h=F=>{console.error(F)}}=i,_=(d?at:J)(s);if(!o)try{o=vv("getDefaultStorage",()=>{var F;return(F=en)==null?void 0:F.localStorage})()}catch(F){h(F)}if(!o)return _;const w=Ge(s),y=bv(w),L=(a=i.serializer)!=null?a:yv[y],{pause:$,resume:x}=ov(_,()=>P(_.value),{flush:l,deep:r,eventFilter:f});return m&&c&&(Le(m,"storage",B),Le(m,Qc,j)),B(),_;function P(F){try{if(F==null)o.removeItem(n);else{const V=L.write(F),le=o.getItem(n);le!==V&&(o.setItem(n,V),m&&m.dispatchEvent(new CustomEvent(Qc,{detail:{key:n,oldValue:le,newValue:V,storageArea:o}})))}}catch(V){h(V)}}function T(F){const V=F?F.newValue:o.getItem(n);if(V==null)return u&&w!==null&&o.setItem(n,L.write(w)),w;if(!F&&p){const le=L.read(V);return typeof p=="function"?p(le,w):y==="object"&&!Array.isArray(le)?Yc(Yc({},w),le):le}else return typeof V!="string"?V:L.read(V)}function j(F){B(F.detail)}function B(F){if(!(F&&F.storageArea!==o)){if(F&&F.key==null){_.value=w;return}if(!(F&&F.key!==n)){$();try{_.value=T(F)}catch(V){h(V)}finally{F?an(x):x()}}}}}function Iv(n){return ss("(prefers-color-scheme: dark)",n)}var $v=Object.defineProperty,Cv=Object.defineProperties,Ev=Object.getOwnPropertyDescriptors,Zc=Object.getOwnPropertySymbols,Sv=Object.prototype.hasOwnProperty,Rv=Object.prototype.propertyIsEnumerable,Jc=(n,s,o)=>s in n?$v(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,zv=(n,s)=>{for(var o in s||(s={}))Sv.call(s,o)&&Jc(n,o,s[o]);if(Zc)for(var o of Zc(s))Rv.call(s,o)&&Jc(n,o,s[o]);return n},Tv=(n,s)=>Cv(n,Ev(s));function tF(n,s={}){var o,i;const{pointerTypes:a,preventDefault:l,stopPropagation:r,exact:c,onMove:u,onEnd:p,onStart:d,initialValue:m,axis:f="both",draggingElement:h=en,handle:_=n}=s,w=J((o=Ge(m))!=null?o:{x:0,y:0}),y=J(),L=j=>a?a.includes(j.pointerType):!0,$=j=>{Ge(l)&&j.preventDefault(),Ge(r)&&j.stopPropagation()},x=j=>{if(!L(j)||Ge(c)&&j.target!==Ge(n))return;const B=Ge(n).getBoundingClientRect(),F={x:j.clientX-B.left,y:j.clientY-B.top};(d==null?void 0:d(F,j))!==!1&&(y.value=F,$(j))},P=j=>{if(!L(j)||!y.value)return;let{x:B,y:F}=w.value;(f==="x"||f==="both")&&(B=j.clientX-y.value.x),(f==="y"||f==="both")&&(F=j.clientY-y.value.y),w.value={x:B,y:F},u==null||u(w.value,j),$(j)},T=j=>{L(j)&&y.value&&(y.value=void 0,p==null||p(w.value,j),$(j))};if(Yn){const j={capture:(i=s.capture)!=null?i:!0};Le(_,"pointerdown",x,j),Le(h,"pointermove",P,j),Le(h,"pointerup",T,j)}return Tv(zv({},B0(w)),{position:w,isDragging:H(()=>!!y.value),style:H(()=>`left:${w.value.x}px;top:${w.value.y}px;`)})}var Xc=Object.getOwnPropertySymbols,Mv=Object.prototype.hasOwnProperty,Av=Object.prototype.propertyIsEnumerable,Ov=(n,s)=>{var o={};for(var i in n)Mv.call(n,i)&&s.indexOf(i)<0&&(o[i]=n[i]);if(n!=null&&Xc)for(var i of Xc(n))s.indexOf(i)<0&&Av.call(n,i)&&(o[i]=n[i]);return o};function Pv(n,s,o={}){const i=o,{window:a=en}=i,l=Ov(i,["window"]);let r;const c=Vo(()=>a&&"ResizeObserver"in a),u=()=>{r&&(r.disconnect(),r=void 0)},p=H(()=>Array.isArray(n)?n.map(f=>ln(f)):[ln(n)]),d=be(p,f=>{if(u(),c.value&&a){r=new ResizeObserver(s);for(const h of f)h&&r.observe(h,l)}},{immediate:!0,flush:"post",deep:!0}),m=()=>{u(),d()};return rt(m),{isSupported:c,stop:m}}function Dv(n,s={width:0,height:0},o={}){const{window:i=en,box:a="content-box"}=o,l=H(()=>{var u,p;return(p=(u=ln(n))==null?void 0:u.namespaceURI)==null?void 0:p.includes("svg")}),r=J(s.width),c=J(s.height);return Pv(n,([u])=>{const p=a==="border-box"?u.borderBoxSize:a==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(i&&l.value){const d=ln(n);if(d){const m=i.getComputedStyle(d);r.value=parseFloat(m.width),c.value=parseFloat(m.height)}}else if(p){const d=Array.isArray(p)?p:[p];r.value=d.reduce((m,{inlineSize:f})=>m+f,0),c.value=d.reduce((m,{blockSize:f})=>m+f,0)}else r.value=u.contentRect.width,c.value=u.contentRect.height},o),be(()=>ln(n),u=>{r.value=u?s.width:0,c.value=u?s.height:0}),{width:r,height:c}}function jv(n,s,o={}){const{root:i,rootMargin:a="0px",threshold:l=.1,window:r=en,immediate:c=!0}=o,u=Vo(()=>r&&"IntersectionObserver"in r),p=H(()=>{const _=Ge(n);return(Array.isArray(_)?_:[_]).map(ln).filter(R0)});let d=hs;const m=J(c),f=u.value?be(()=>[p.value,ln(i),m.value],([_,w])=>{if(d(),!m.value||!_.length)return;const y=new IntersectionObserver(s,{root:ln(w),rootMargin:a,threshold:l});_.forEach(L=>L&&y.observe(L)),d=()=>{y.disconnect(),d=hs}},{immediate:c,flush:"post"}):hs,h=()=>{d(),f(),m.value=!1};return rt(h),{isSupported:u,isActive:m,pause(){d(),m.value=!1},resume(){m.value=!0},stop:h}}const eu=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Nv(n,s={}){const{document:o=nm,autoExit:i=!1}=s,a=H(()=>{var L;return(L=ln(n))!=null?L:o==null?void 0:o.querySelector("html")}),l=J(!1),r=H(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(L=>o&&L in o||a.value&&L in a.value)),c=H(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(L=>o&&L in o||a.value&&L in a.value)),u=H(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(L=>o&&L in o||a.value&&L in a.value)),p=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(L=>o&&L in o),d=Vo(()=>a.value&&o&&r.value!==void 0&&c.value!==void 0&&u.value!==void 0),m=()=>p?(o==null?void 0:o[p])===a.value:!1,f=()=>{if(u.value){if(o&&o[u.value]!=null)return o[u.value];{const L=a.value;if((L==null?void 0:L[u.value])!=null)return!!L[u.value]}}return!1};async function h(){if(d.value){if(c.value)if((o==null?void 0:o[c.value])!=null)await o[c.value]();else{const L=a.value;(L==null?void 0:L[c.value])!=null&&await L[c.value]()}l.value=!1}}async function _(){if(!d.value)return;f()&&await h();const L=a.value;r.value&&(L==null?void 0:L[r.value])!=null&&(await L[r.value](),l.value=!0)}async function w(){await(l.value?h():_())}const y=()=>{const L=f();(!L||L&&m())&&(l.value=L)};return Le(o,eu,y,!1),Le(()=>ln(a),eu,y,!1),i&&rt(h),{isSupported:d,isFullscreen:l,enter:_,exit:h,toggle:w}}function Qn(n,s,o={}){const{window:i=en}=o;return Lv(n,s,i==null?void 0:i.localStorage,o)}const Fv={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Hv(n={}){const{reactive:s=!1,target:o=en,aliasMap:i=Fv,passive:a=!0,onEventFired:l=hs}=n,r=Be(new Set),c={toJSON(){return{}},current:r},u=s?Be(c):c,p=new Set,d=new Set;function m(w,y){w in u&&(s?u[w]=y:u[w].value=y)}function f(){r.clear();for(const w of d)m(w,!1)}function h(w,y){var L,$;const x=(L=w.key)==null?void 0:L.toLowerCase(),T=[($=w.code)==null?void 0:$.toLowerCase(),x].filter(Boolean);x&&(y?r.add(x):r.delete(x));for(const j of T)d.add(j),m(j,y);x==="meta"&&!y?(p.forEach(j=>{r.delete(j),m(j,!1)}),p.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&y&&[...r,...T].forEach(j=>p.add(j))}Le(o,"keydown",w=>(h(w,!0),l(w)),{passive:a}),Le(o,"keyup",w=>(h(w,!1),l(w)),{passive:a}),Le("blur",f,{passive:!0}),Le("focus",f,{passive:!0});const _=new Proxy(u,{get(w,y,L){if(typeof y!="string")return Reflect.get(w,y,L);if(y=y.toLowerCase(),y in i&&(y=i[y]),!(y in u))if(/[+_-]/.test(y)){const x=y.split(/[+_-]/g).map(P=>P.trim());u[y]=H(()=>x.every(P=>Ge(_[P])))}else u[y]=J(!1);const $=Reflect.get(w,y,L);return s?Ge($):$}});return _}const Kv={page:n=>[n.pageX,n.pageY],client:n=>[n.clientX,n.clientY],screen:n=>[n.screenX,n.screenY],movement:n=>n instanceof Touch?null:[n.movementX,n.movementY]};function sF(n={}){const{type:s="page",touch:o=!0,resetOnTouchEnds:i=!1,initialValue:a={x:0,y:0},window:l=en,target:r=l,eventFilter:c}=n,u=J(a.x),p=J(a.y),d=J(null),m=typeof s=="function"?s:Kv[s],f=L=>{const $=m(L);$&&([u.value,p.value]=$,d.value="mouse")},h=L=>{if(L.touches.length>0){const $=m(L.touches[0]);$&&([u.value,p.value]=$,d.value="touch")}},_=()=>{u.value=a.x,p.value=a.y},w=c?L=>c(()=>f(L),{}):L=>f(L),y=c?L=>c(()=>h(L),{}):L=>h(L);return r&&(Le(r,"mousemove",w,{passive:!0}),Le(r,"dragover",w,{passive:!0}),o&&s!=="movement"&&(Le(r,"touchstart",y,{passive:!0}),Le(r,"touchmove",y,{passive:!0}),i&&Le(r,"touchend",_,{passive:!0}))),{x:u,y:p,sourceType:d}}function Wv(n,s={}){const o=Qd(n),{threshold:i=50,onSwipe:a,onSwipeEnd:l,onSwipeStart:r}=s,c=Be({x:0,y:0}),u=(j,B)=>{c.x=j,c.y=B},p=Be({x:0,y:0}),d=(j,B)=>{p.x=j,p.y=B},m=H(()=>c.x-p.x),f=H(()=>c.y-p.y),{max:h,abs:_}=Math,w=H(()=>h(_(m.value),_(f.value))>=i),y=J(!1),L=J(!1),$=H(()=>w.value?_(m.value)>_(f.value)?m.value>0?"left":"right":f.value>0?"up":"down":"none"),x=j=>{var B,F,V;const le=j.buttons===0,me=j.buttons===1;return(V=(F=(B=s.pointerTypes)==null?void 0:B.includes(j.pointerType))!=null?F:le||me)!=null?V:!0},P=[Le(n,"pointerdown",j=>{var B,F;if(!x(j))return;L.value=!0,(F=(B=o.value)==null?void 0:B.style)==null||F.setProperty("touch-action","none");const V=j.target;V==null||V.setPointerCapture(j.pointerId);const{clientX:le,clientY:me}=j;u(le,me),d(le,me),r==null||r(j)}),Le(n,"pointermove",j=>{if(!x(j)||!L.value)return;const{clientX:B,clientY:F}=j;d(B,F),!y.value&&w.value&&(y.value=!0),y.value&&(a==null||a(j))}),Le(n,"pointerup",j=>{var B,F;x(j)&&(y.value&&(l==null||l(j,$.value)),L.value=!1,y.value=!1,(F=(B=o.value)==null?void 0:B.style)==null||F.setProperty("touch-action","initial"))})],T=()=>P.forEach(j=>j());return{isSwiping:Vn(y),direction:Vn($),posStart:Vn(c),posEnd:Vn(p),distanceX:m,distanceY:f,stop:T}}let Bv=0;function oF(n,s={}){const o=J(!1),{document:i=nm,immediate:a=!0,manual:l=!1,id:r=`vueuse_styletag_${++Bv}`}=s,c=J(n);let u=()=>{};const p=()=>{if(!i)return;const m=i.getElementById(r)||i.createElement("style");m.isConnected||(m.type="text/css",m.id=r,s.media&&(m.media=s.media),i.head.appendChild(m)),!o.value&&(u=be(c,f=>{m.textContent=f},{immediate:!0}),o.value=!0)},d=()=>{!i||!o.value||(u(),i.head.removeChild(i.getElementById(r)),o.value=!1)};return a&&!l&&Zd(p),l||rt(d),{id:r,css:c,unload:d,load:p,isLoaded:Vn(o)}}var qv=Object.defineProperty,nu=Object.getOwnPropertySymbols,Uv=Object.prototype.hasOwnProperty,Vv=Object.prototype.propertyIsEnumerable,tu=(n,s,o)=>s in n?qv(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,Gv=(n,s)=>{for(var o in s||(s={}))Uv.call(s,o)&&tu(n,o,s[o]);if(nu)for(var o of nu(s))Vv.call(s,o)&&tu(n,o,s[o]);return n};function iF(n={}){const{controls:s=!1,offset:o=0,immediate:i=!0,interval:a="requestAnimationFrame",callback:l}=n,r=J(kl()+o),c=()=>r.value=kl()+o,u=l?()=>{c(),l(r.value)}:c,p=a==="requestAnimationFrame"?pv(u,{immediate:i}):U0(u,a,{immediate:i});return s?Gv({timestamp:r},p):r}function Ze(n,s,o,i={}){var a,l,r;const{clone:c=!1,passive:u=!1,eventName:p,deep:d=!1,defaultValue:m,shouldEmit:f}=i,h=Ln(),_=o||(h==null?void 0:h.emit)||((a=h==null?void 0:h.$emit)==null?void 0:a.bind(h))||((r=(l=h==null?void 0:h.proxy)==null?void 0:l.$emit)==null?void 0:r.bind(h==null?void 0:h.proxy));let w=p;s||(s="modelValue"),w=p||w||`update:${s.toString()}`;const y=x=>c?typeof c=="function"?c(x):hv(x):x,L=()=>S0(n[s])?y(n[s]):m,$=x=>{f?f(x)&&_(w,x):_(w,x)};if(u){const x=L(),P=J(x);return be(()=>n[s],T=>P.value=y(T)),be(P,T=>{(T!==n[s]||d)&&$(T)},{deep:d}),P}else return H({get(){return L()},set(x){$(x)}})}function aF({window:n=en}={}){if(!n)return J(!1);const s=J(n.document.hasFocus());return Le(n,"blur",()=>{s.value=!1}),Le(n,"focus",()=>{s.value=!0}),s}function Yv(n={}){const{window:s=en,initialWidth:o=1/0,initialHeight:i=1/0,listenOrientation:a=!0,includeScrollbar:l=!0}=n,r=J(o),c=J(i),u=()=>{s&&(l?(r.value=s.innerWidth,c.value=s.innerHeight):(r.value=s.document.documentElement.clientWidth,c.value=s.document.documentElement.clientHeight))};if(u(),Zd(u),Le("resize",u,{passive:!0}),a){const p=ss("(orientation: portrait)");be(p,()=>u())}return{width:r,height:c}}function Qv(){return tm().__VUE_DEVTOOLS_GLOBAL_HOOK__}function tm(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Zv=typeof Proxy=="function",Jv="devtools-plugin:setup",Xv="plugin:settings:set";let $s,wl;function eb(){var n;return $s!==void 0||(typeof window<"u"&&window.performance?($s=!0,wl=window.performance):typeof global<"u"&&(!((n=global.perf_hooks)===null||n===void 0)&&n.performance)?($s=!0,wl=global.perf_hooks.performance):$s=!1),$s}function nb(){return eb()?wl.now():Date.now()}class tb{constructor(s,o){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=s,this.hook=o;const i={};if(s.settings)for(const r in s.settings){const c=s.settings[r];i[r]=c.defaultValue}const a=`__vue-devtools-plugin-settings__${s.id}`;let l=Object.assign({},i);try{const r=localStorage.getItem(a),c=JSON.parse(r);Object.assign(l,c)}catch{}this.fallbacks={getSettings(){return l},setSettings(r){try{localStorage.setItem(a,JSON.stringify(r))}catch{}l=r},now(){return nb()}},o&&o.on(Xv,(r,c)=>{r===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(r,c)=>this.target?this.target.on[c]:(...u)=>{this.onQueue.push({method:c,args:u})}}),this.proxiedTarget=new Proxy({},{get:(r,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...u)=>(this.targetQueue.push({method:c,args:u,resolve:()=>{}}),this.fallbacks[c](...u)):(...u)=>new Promise(p=>{this.targetQueue.push({method:c,args:u,resolve:p})})})}async setRealTarget(s){this.target=s;for(const o of this.onQueue)this.target.on[o.method](...o.args);for(const o of this.targetQueue)o.resolve(await this.target[o.method](...o.args))}}function sb(n,s){const o=n,i=tm(),a=Qv(),l=Zv&&o.enableEarlyProxy;if(a&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))a.emit(Jv,n,s);else{const r=l?new tb(o,a):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:o,setupFn:s,proxy:r}),r&&s(r.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ht=typeof window<"u";function ob(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function za(n,s){const o={};for(const i in s){const a=s[i];o[i]=Tn(a)?a.map(n):n(a)}return o}const _o=()=>{},Tn=Array.isArray;function Se(n){const s=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+n].concat(s))}const ib=/\/$/,ab=n=>n.replace(ib,"");function Ta(n,s,o="/"){let i,a={},l="",r="";const c=s.indexOf("#");let u=s.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(i=s.slice(0,u),l=s.slice(u+1,c>-1?c:s.length),a=n(l)),c>-1&&(i=i||s.slice(0,c),r=s.slice(c,s.length)),i=cb(i??s,o),{fullPath:i+(l&&"?")+l+r,path:i,query:a,hash:r}}function lb(n,s){const o=s.query?n(s.query):"";return s.path+(o&&"?")+o+(s.hash||"")}function su(n,s){return!s||!n.toLowerCase().startsWith(s.toLowerCase())?n:n.slice(s.length)||"/"}function ou(n,s,o){const i=s.matched.length-1,a=o.matched.length-1;return i>-1&&i===a&&Kt(s.matched[i],o.matched[a])&&sm(s.params,o.params)&&n(s.query)===n(o.query)&&s.hash===o.hash}function Kt(n,s){return(n.aliasOf||n)===(s.aliasOf||s)}function sm(n,s){if(Object.keys(n).length!==Object.keys(s).length)return!1;for(const o in n)if(!rb(n[o],s[o]))return!1;return!0}function rb(n,s){return Tn(n)?iu(n,s):Tn(s)?iu(s,n):n===s}function iu(n,s){return Tn(s)?n.length===s.length&&n.every((o,i)=>o===s[i]):n.length===1&&n[0]===s}function cb(n,s){if(n.startsWith("/"))return n;if(!s.startsWith("/"))return Se(`Cannot resolve a relative location without an absolute path. Trying to resolve "${n}" from "${s}". It should look like "/${s}".`),n;if(!n)return s;const o=s.split("/"),i=n.split("/"),a=i[i.length-1];(a===".."||a===".")&&i.push("");let l=o.length-1,r,c;for(r=0;r<i.length;r++)if(c=i[r],c!==".")if(c==="..")l>1&&l--;else break;return o.slice(0,l).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var zo;(function(n){n.pop="pop",n.push="push"})(zo||(zo={}));var go;(function(n){n.back="back",n.forward="forward",n.unknown=""})(go||(go={}));function ub(n){if(!n)if(ht){const s=document.querySelector("base");n=s&&s.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ab(n)}const pb=/^[^#]+#/;function db(n,s){return n.replace(pb,"#")+s}function mb(n,s){const o=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:s.behavior,left:i.left-o.left-(s.left||0),top:i.top-o.top-(s.top||0)}}const da=()=>({left:window.pageXOffset,top:window.pageYOffset});function fb(n){let s;if("el"in n){const o=n.el,i=typeof o=="string"&&o.startsWith("#");if(typeof n.el=="string"&&(!i||!document.getElementById(n.el.slice(1))))try{const l=document.querySelector(n.el);if(i&&l){Se(`The selector "${n.el}" should be passed as "el: document.querySelector('${n.el}')" because it starts with "#".`);return}}catch{Se(`The selector "${n.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const a=typeof o=="string"?i?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!a){Se(`Couldn't find element using selector "${n.el}" returned by scrollBehavior.`);return}s=mb(a,n)}else s=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.pageXOffset,s.top!=null?s.top:window.pageYOffset)}function au(n,s){return(history.state?history.state.position-s:-1)+n}const yl=new Map;function hb(n,s){yl.set(n,s)}function _b(n){const s=yl.get(n);return yl.delete(n),s}let gb=()=>location.protocol+"//"+location.host;function om(n,s){const{pathname:o,search:i,hash:a}=s,l=n.indexOf("#");if(l>-1){let c=a.includes(n.slice(l))?n.slice(l).length:1,u=a.slice(c);return u[0]!=="/"&&(u="/"+u),su(u,"")}return su(o,n)+i+a}function vb(n,s,o,i){let a=[],l=[],r=null;const c=({state:f})=>{const h=om(n,location),_=o.value,w=s.value;let y=0;if(f){if(o.value=h,s.value=f,r&&r===_){r=null;return}y=w?f.position-w.position:0}else i(h);a.forEach(L=>{L(o.value,_,{delta:y,type:zo.pop,direction:y?y>0?go.forward:go.back:go.unknown})})};function u(){r=o.value}function p(f){a.push(f);const h=()=>{const _=a.indexOf(f);_>-1&&a.splice(_,1)};return l.push(h),h}function d(){const{history:f}=window;f.state&&f.replaceState(Oe({},f.state,{scroll:da()}),"")}function m(){for(const f of l)f();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:p,destroy:m}}function lu(n,s,o,i=!1,a=!1){return{back:n,current:s,forward:o,replaced:i,position:window.history.length,scroll:a?da():null}}function bb(n){const{history:s,location:o}=window,i={value:om(n,o)},a={value:s.state};a.value||l(i.value,{back:null,current:i.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function l(u,p,d){const m=n.indexOf("#"),f=m>-1?(o.host&&document.querySelector("base")?n:n.slice(m))+u:gb()+n+u;try{s[d?"replaceState":"pushState"](p,"",f),a.value=p}catch(h){Se("Error with push/replace State",h),o[d?"replace":"assign"](f)}}function r(u,p){const d=Oe({},s.state,lu(a.value.back,u,a.value.forward,!0),p,{position:a.value.position});l(u,d,!0),i.value=u}function c(u,p){const d=Oe({},a.value,s.state,{forward:u,scroll:da()});s.state||Se(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(d.current,d,!0);const m=Oe({},lu(i.value,u,null),{position:d.position+1},p);l(u,m,!1),i.value=u}return{location:i,state:a,push:c,replace:r}}function xb(n){n=ub(n);const s=bb(n),o=vb(n,s.state,s.location,s.replace);function i(l,r=!0){r||o.pauseListeners(),history.go(l)}const a=Oe({location:"",base:n,go:i,createHref:db.bind(null,n)},s,o);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>s.state.value}),a}function kb(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),!n.endsWith("#/")&&!n.endsWith("#")&&Se(`A hash base must end with a "#":
"${n}" should be "${n.replace(/#.*$/,"#")}".`),xb(n)}function wb(n){return typeof n=="string"||n&&typeof n=="object"}function im(n){return typeof n=="string"||typeof n=="symbol"}const Lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},am=Symbol("navigation failure");var ru;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(ru||(ru={}));const yb={[1]({location:n,currentLocation:s}){return`No match for
 ${JSON.stringify(n)}${s?`
while being at
`+JSON.stringify(s):""}`},[2]({from:n,to:s}){return`Redirected from "${n.fullPath}" to "${Ib(s)}" via a navigation guard.`},[4]({from:n,to:s}){return`Navigation aborted from "${n.fullPath}" to "${s.fullPath}" via a navigation guard.`},[8]({from:n,to:s}){return`Navigation cancelled from "${n.fullPath}" to "${s.fullPath}" with a new navigation.`},[16]({from:n,to:s}){return`Avoided redundant navigation to current location: "${n.fullPath}".`}};function Ds(n,s){return Oe(new Error(yb[n](s)),{type:n,[am]:!0},s)}function ut(n,s){return n instanceof Error&&am in n&&(s==null||!!(n.type&s))}const Lb=["params","query","hash"];function Ib(n){if(typeof n=="string")return n;if("path"in n)return n.path;const s={};for(const o of Lb)o in n&&(s[o]=n[o]);return JSON.stringify(s,null,2)}const cu="[^/]+?",$b={sensitive:!1,strict:!1,start:!0,end:!0},Cb=/[.+*?^${}()[\]/\\]/g;function Eb(n,s){const o=Oe({},$b,s),i=[];let a=o.start?"^":"";const l=[];for(const p of n){const d=p.length?[]:[90];o.strict&&!p.length&&(a+="/");for(let m=0;m<p.length;m++){const f=p[m];let h=40+(o.sensitive?.25:0);if(f.type===0)m||(a+="/"),a+=f.value.replace(Cb,"\\$&"),h+=40;else if(f.type===1){const{value:_,repeatable:w,optional:y,regexp:L}=f;l.push({name:_,repeatable:w,optional:y});const $=L||cu;if($!==cu){h+=10;try{new RegExp(`(${$})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${_}" (${$}): `+P.message)}}let x=w?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;m||(x=y&&p.length<2?`(?:/${x})`:"/"+x),y&&(x+="?"),a+=x,h+=20,y&&(h+=-8),w&&(h+=-20),$===".*"&&(h+=-50)}d.push(h)}i.push(d)}if(o.strict&&o.end){const p=i.length-1;i[p][i[p].length-1]+=.7000000000000001}o.strict||(a+="/?"),o.end?a+="$":o.strict&&(a+="(?:/|$)");const r=new RegExp(a,o.sensitive?"":"i");function c(p){const d=p.match(r),m={};if(!d)return null;for(let f=1;f<d.length;f++){const h=d[f]||"",_=l[f-1];m[_.name]=h&&_.repeatable?h.split("/"):h}return m}function u(p){let d="",m=!1;for(const f of n){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const h of f)if(h.type===0)d+=h.value;else if(h.type===1){const{value:_,repeatable:w,optional:y}=h,L=_ in p?p[_]:"";if(Tn(L)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const $=Tn(L)?L.join("/"):L;if(!$)if(y)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${_}"`);d+=$}}return d||"/"}return{re:r,score:i,keys:l,parse:c,stringify:u}}function Sb(n,s){let o=0;for(;o<n.length&&o<s.length;){const i=s[o]-n[o];if(i)return i;o++}return n.length<s.length?n.length===1&&n[0]===40+40?-1:1:n.length>s.length?s.length===1&&s[0]===40+40?1:-1:0}function Rb(n,s){let o=0;const i=n.score,a=s.score;for(;o<i.length&&o<a.length;){const l=Sb(i[o],a[o]);if(l)return l;o++}if(Math.abs(a.length-i.length)===1){if(uu(i))return 1;if(uu(a))return-1}return a.length-i.length}function uu(n){const s=n[n.length-1];return n.length>0&&s[s.length-1]<0}const zb={type:0,value:""},Tb=/[a-zA-Z0-9_]/;function Mb(n){if(!n)return[[]];if(n==="/")return[[zb]];if(!n.startsWith("/"))throw new Error(`Route paths should start with a "/": "${n}" should be "/${n}".`);function s(h){throw new Error(`ERR (${o})/"${p}": ${h}`)}let o=0,i=o;const a=[];let l;function r(){l&&a.push(l),l=[]}let c=0,u,p="",d="";function m(){p&&(o===0?l.push({type:0,value:p}):o===1||o===2||o===3?(l.length>1&&(u==="*"||u==="+")&&s(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):s("Invalid state to consume buffer"),p="")}function f(){p+=u}for(;c<n.length;){if(u=n[c++],u==="\\"&&o!==2){i=o,o=4;continue}switch(o){case 0:u==="/"?(p&&m(),r()):u===":"?(m(),o=1):f();break;case 4:f(),o=i;break;case 1:u==="("?o=2:Tb.test(u)?f():(m(),o=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:o=3:d+=u;break;case 3:m(),o=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:s("Unknown state");break}}return o===2&&s(`Unfinished custom RegExp for param "${p}"`),m(),r(),a}function Ab(n,s,o){const i=Eb(Mb(n.path),o);{const l=new Set;for(const r of i.keys)l.has(r.name)&&Se(`Found duplicated params with name "${r.name}" for path "${n.path}". Only the last one will be available on "$route.params".`),l.add(r.name)}const a=Oe(i,{record:n,parent:s,children:[],alias:[]});return s&&!a.record.aliasOf==!s.record.aliasOf&&s.children.push(a),a}function Ob(n,s){const o=[],i=new Map;s=mu({strict:!1,end:!0,sensitive:!1},s);function a(d){return i.get(d)}function l(d,m,f){const h=!f,_=Pb(d);Fb(_,m),_.aliasOf=f&&f.record;const w=mu(s,d),y=[_];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const P of x)y.push(Oe({},_,{components:f?f.record.components:_.components,path:P,aliasOf:f?f.record:_}))}let L,$;for(const x of y){const{path:P}=x;if(m&&P[0]!=="/"){const T=m.record.path,j=T[T.length-1]==="/"?"":"/";x.path=m.record.path+(P&&j+P)}if(x.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(L=Ab(x,m,w),m&&P[0]==="/"&&Hb(L,m),f?(f.alias.push(L),Nb(f,L)):($=$||L,$!==L&&$.alias.push(L),h&&d.name&&!du(L)&&r(d.name)),_.children){const T=_.children;for(let j=0;j<T.length;j++)l(T[j],L,f&&f.children[j])}f=f||L,(L.record.components&&Object.keys(L.record.components).length||L.record.name||L.record.redirect)&&u(L)}return $?()=>{r($)}:_o}function r(d){if(im(d)){const m=i.get(d);m&&(i.delete(d),o.splice(o.indexOf(m),1),m.children.forEach(r),m.alias.forEach(r))}else{const m=o.indexOf(d);m>-1&&(o.splice(m,1),d.record.name&&i.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function c(){return o}function u(d){let m=0;for(;m<o.length&&Rb(d,o[m])>=0&&(d.record.path!==o[m].record.path||!lm(d,o[m]));)m++;o.splice(m,0,d),d.record.name&&!du(d)&&i.set(d.record.name,d)}function p(d,m){let f,h={},_,w;if("name"in d&&d.name){if(f=i.get(d.name),!f)throw Ds(1,{location:d});{const $=Object.keys(d.params||{}).filter(x=>!f.keys.find(P=>P.name===x));$.length&&Se(`Discarded invalid param(s) "${$.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}w=f.record.name,h=Oe(pu(m.params,f.keys.filter($=>!$.optional).map($=>$.name)),d.params&&pu(d.params,f.keys.map($=>$.name))),_=f.stringify(h)}else if("path"in d)_=d.path,_.startsWith("/")||Se(`The Matcher cannot resolve relative paths but received "${_}". Unless you directly called \`matcher.resolve("${_}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=o.find($=>$.re.test(_)),f&&(h=f.parse(_),w=f.record.name);else{if(f=m.name?i.get(m.name):o.find($=>$.re.test(m.path)),!f)throw Ds(1,{location:d,currentLocation:m});w=f.record.name,h=Oe({},m.params,d.params),_=f.stringify(h)}const y=[];let L=f;for(;L;)y.unshift(L.record),L=L.parent;return{name:w,path:_,params:h,matched:y,meta:jb(y)}}return n.forEach(d=>l(d)),{addRoute:l,resolve:p,removeRoute:r,getRoutes:c,getRecordMatcher:a}}function pu(n,s){const o={};for(const i of s)i in n&&(o[i]=n[i]);return o}function Pb(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Db(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Db(n){const s={},o=n.props||!1;if("component"in n)s.default=o;else for(const i in n.components)s[i]=typeof o=="boolean"?o:o[i];return s}function du(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function jb(n){return n.reduce((s,o)=>Oe(s,o.meta),{})}function mu(n,s){const o={};for(const i in n)o[i]=i in s?s[i]:n[i];return o}function Ll(n,s){return n.name===s.name&&n.optional===s.optional&&n.repeatable===s.repeatable}function Nb(n,s){for(const o of n.keys)if(!o.optional&&!s.keys.find(Ll.bind(null,o)))return Se(`Alias "${s.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${o.name}"`);for(const o of s.keys)if(!o.optional&&!n.keys.find(Ll.bind(null,o)))return Se(`Alias "${s.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${o.name}"`)}function Fb(n,s){s&&s.record.name&&!n.name&&!n.path&&Se(`The route named "${String(s.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Hb(n,s){for(const o of s.keys)if(!n.keys.find(Ll.bind(null,o)))return Se(`Absolute path "${n.record.path}" must have the exact same param named "${o.name}" as its parent "${s.record.path}".`)}function lm(n,s){return s.children.some(o=>o===n||lm(n,o))}const rm=/#/g,Kb=/&/g,Wb=/\//g,Bb=/=/g,qb=/\?/g,cm=/\+/g,Ub=/%5B/g,Vb=/%5D/g,um=/%5E/g,Gb=/%60/g,pm=/%7B/g,Yb=/%7C/g,dm=/%7D/g,Qb=/%20/g;function Lr(n){return encodeURI(""+n).replace(Yb,"|").replace(Ub,"[").replace(Vb,"]")}function Zb(n){return Lr(n).replace(pm,"{").replace(dm,"}").replace(um,"^")}function Il(n){return Lr(n).replace(cm,"%2B").replace(Qb,"+").replace(rm,"%23").replace(Kb,"%26").replace(Gb,"`").replace(pm,"{").replace(dm,"}").replace(um,"^")}function Jb(n){return Il(n).replace(Bb,"%3D")}function Xb(n){return Lr(n).replace(rm,"%23").replace(qb,"%3F")}function ex(n){return n==null?"":Xb(n).replace(Wb,"%2F")}function To(n){try{return decodeURIComponent(""+n)}catch{Se(`Error decoding "${n}". Using original value`)}return""+n}function nx(n){const s={};if(n===""||n==="?")return s;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let a=0;a<i.length;++a){const l=i[a].replace(cm," "),r=l.indexOf("="),c=To(r<0?l:l.slice(0,r)),u=r<0?null:To(l.slice(r+1));if(c in s){let p=s[c];Tn(p)||(p=s[c]=[p]),p.push(u)}else s[c]=u}return s}function fu(n){let s="";for(let o in n){const i=n[o];if(o=Jb(o),i==null){i!==void 0&&(s+=(s.length?"&":"")+o);continue}(Tn(i)?i.map(l=>l&&Il(l)):[i&&Il(i)]).forEach(l=>{l!==void 0&&(s+=(s.length?"&":"")+o,l!=null&&(s+="="+l))})}return s}function tx(n){const s={};for(const o in n){const i=n[o];i!==void 0&&(s[o]=Tn(i)?i.map(a=>a==null?null:""+a):i==null?i:""+i)}return s}const sx=Symbol("router view location matched"),hu=Symbol("router view depth"),Ir=Symbol("router"),mm=Symbol("route location"),$l=Symbol("router view location");function Zs(){let n=[];function s(i){return n.push(i),()=>{const a=n.indexOf(i);a>-1&&n.splice(a,1)}}function o(){n=[]}return{add:s,list:()=>n,reset:o}}function Et(n,s,o,i,a){const l=i&&(i.enterCallbacks[a]=i.enterCallbacks[a]||[]);return()=>new Promise((r,c)=>{const u=m=>{m===!1?c(Ds(4,{from:o,to:s})):m instanceof Error?c(m):wb(m)?c(Ds(2,{from:s,to:m})):(l&&i.enterCallbacks[a]===l&&typeof m=="function"&&l.push(m),r())},p=n.call(i&&i.instances[a],s,o,ox(u,s,o));let d=Promise.resolve(p);if(n.length<3&&(d=d.then(u)),n.length>2){const m=`The "next" callback was never called inside of ${n.name?'"'+n.name+'"':""}:
${n.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)d=d.then(f=>u._called?f:(Se(m),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!u._called){Se(m),c(new Error("Invalid navigation guard"));return}}d.catch(m=>c(m))})}function ox(n,s,o){let i=0;return function(){i++===1&&Se(`The "next" callback was called more than once in one navigation guard when going from "${o.fullPath}" to "${s.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),n._called=!0,i===1&&n.apply(null,arguments)}}function Ma(n,s,o,i){const a=[];for(const l of n){!l.components&&!l.children.length&&Se(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const r in l.components){let c=l.components[r];{if(!c||typeof c!="object"&&typeof c!="function")throw Se(`Component "${r}" in record with path "${l.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){Se(`Component "${r}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=c;c=()=>u}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,Se(`Component "${r}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(s!=="beforeRouteEnter"&&!l.instances[r]))if(ix(c)){const p=(c.__vccOpts||c)[s];p&&a.push(Et(p,o,i,l,r))}else{let u=c();"catch"in u||(Se(`Component "${r}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),a.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${l.path}"`));const d=ob(p)?p.default:p;l.components[r]=d;const f=(d.__vccOpts||d)[s];return f&&Et(f,o,i,l,r)()}))}}}return a}function ix(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function _u(n){const s=I(Ir),o=I(mm),i=H(()=>s.resolve(D(n.to))),a=H(()=>{const{matched:u}=i.value,{length:p}=u,d=u[p-1],m=o.matched;if(!d||!m.length)return-1;const f=m.findIndex(Kt.bind(null,d));if(f>-1)return f;const h=gu(u[p-2]);return p>1&&gu(d)===h&&m[m.length-1].path!==h?m.findIndex(Kt.bind(null,u[p-2])):f}),l=H(()=>a.value>-1&&cx(o.params,i.value.params)),r=H(()=>a.value>-1&&a.value===o.matched.length-1&&sm(o.params,i.value.params));function c(u={}){return rx(u)?s[D(n.replace)?"replace":"push"](D(n.to)).catch(_o):Promise.resolve()}if(ht){const u=Ln();if(u){const p={route:i.value,isActive:l.value,isExactActive:r.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(p),ks(()=>{p.route=i.value,p.isActive=l.value,p.isExactActive=r.value},{flush:"post"})}}return{route:i,href:H(()=>i.value.href),isActive:l,isExactActive:r,navigate:c}}const ax=Me({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_u,setup(n,{slots:s}){const o=Be(_u(n)),{options:i}=I(Ir),a=H(()=>({[vu(n.activeClass,i.linkActiveClass,"router-link-active")]:o.isActive,[vu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const l=s.default&&s.default(o);return n.custom?l:yn("a",{"aria-current":o.isExactActive?n.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:a.value},l)}}}),lx=ax;function rx(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const s=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return n.preventDefault&&n.preventDefault(),!0}}function cx(n,s){for(const o in s){const i=s[o],a=n[o];if(typeof i=="string"){if(i!==a)return!1}else if(!Tn(a)||a.length!==i.length||i.some((l,r)=>l!==a[r]))return!1}return!0}function gu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const vu=(n,s,o)=>n??s??o,ux=Me({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:s,slots:o}){dx();const i=I($l),a=H(()=>n.route||i.value),l=I(hu,0),r=H(()=>{let p=D(l);const{matched:d}=a.value;let m;for(;(m=d[p])&&!m.components;)p++;return p}),c=H(()=>a.value.matched[r.value]);En(hu,H(()=>r.value+1)),En(sx,c),En($l,a);const u=J();return be(()=>[u.value,c.value,n.name],([p,d,m],[f,h,_])=>{d&&(d.instances[m]=p,h&&h!==d&&p&&p===f&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),p&&d&&(!h||!Kt(d,h)||!f)&&(d.enterCallbacks[m]||[]).forEach(w=>w(p))},{flush:"post"}),()=>{const p=a.value,d=n.name,m=c.value,f=m&&m.components[d];if(!f)return bu(o.default,{Component:f,route:p});const h=m.props[d],_=h?h===!0?p.params:typeof h=="function"?h(p):h:null,y=yn(f,Oe({},_,s,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(m.instances[d]=null)},ref:u}));if(ht&&y.ref){const L={depth:r.value,name:m.name,path:m.path,meta:m.meta};(Tn(y.ref)?y.ref.map(x=>x.i):[y.ref.i]).forEach(x=>{x.__vrv_devtools=L})}return bu(o.default,{Component:y,route:p})||y}}});function bu(n,s){if(!n)return null;const o=n(s);return o.length===1?o[0]:o}const px=ux;function dx(){const n=Ln(),s=n.parent&&n.parent.type.name,o=n.parent&&n.parent.subTree&&n.parent.subTree.type;if(s&&(s==="KeepAlive"||s.includes("Transition"))&&typeof o=="object"&&o.name==="RouterView"){const i=s==="KeepAlive"?"keep-alive":"transition";Se(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${i}>
    <component :is="Component" />
  </${i}>
</router-view>`)}}function Js(n,s){const o=Oe({},n,{matched:n.matched.map(i=>kx(i,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:n.fullPath,tooltip:s,value:o}}}function pi(n){return{_custom:{display:n}}}let mx=0;function fx(n,s,o){if(s.__hasDevtools)return;s.__hasDevtools=!0;const i=mx++;sb({id:"org.vuejs.router"+(i?"."+i:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:n},a=>{typeof a.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),a.on.inspectComponent((d,m)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Js(s.currentRoute.value,"Current Route")})}),a.on.visitComponentTree(({treeNode:d,componentInstance:m})=>{if(m.__vrv_devtools){const f=m.__vrv_devtools;d.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:fm})}Tn(m.__vrl_devtools)&&(m.__devtoolsApi=a,m.__vrl_devtools.forEach(f=>{let h=gm,_="";f.isExactActive?(h=_m,_="This is exactly active"):f.isActive&&(h=hm,_="This link is active"),d.tags.push({label:f.route.path,textColor:0,tooltip:_,backgroundColor:h})}))}),be(s.currentRoute,()=>{u(),a.notifyComponentUpdate(),a.sendInspectorTree(c),a.sendInspectorState(c)});const l="router:navigations:"+i;a.addTimelineLayer({id:l,label:`Router${i?" "+i:""} Navigations`,color:4237508}),s.onError((d,m)=>{a.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:m.fullPath,logType:"error",time:a.now(),data:{error:d},groupId:m.meta.__navigationId}})});let r=0;s.beforeEach((d,m)=>{const f={guard:pi("beforeEach"),from:Js(m,"Current Location during this navigation"),to:Js(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:r++}),a.addTimelineEvent({layerId:l,event:{time:a.now(),title:"Start of navigation",subtitle:d.fullPath,data:f,groupId:d.meta.__navigationId}})}),s.afterEach((d,m,f)=>{const h={guard:pi("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=pi("❌")):h.status=pi("✅"),h.from=Js(m,"Current Location during this navigation"),h.to=Js(d,"Target location"),a.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:d.fullPath,time:a.now(),data:h,logType:f?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+i;a.addInspector({id:c,label:"Routes"+(i?" "+i:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!p)return;const d=p;let m=o.getRoutes().filter(f=>!f.parent);m.forEach(xm),d.filter&&(m=m.filter(f=>Cl(f,d.filter.toLowerCase()))),m.forEach(f=>bm(f,s.currentRoute.value)),d.rootNodes=m.map(vm)}let p;a.on.getInspectorTree(d=>{p=d,d.app===n&&d.inspectorId===c&&u()}),a.on.getInspectorState(d=>{if(d.app===n&&d.inspectorId===c){const f=o.getRoutes().find(h=>h.record.__vd_id===d.nodeId);f&&(d.state={options:_x(f)})}}),a.sendInspectorTree(c),a.sendInspectorState(c)})}function hx(n){return n.optional?n.repeatable?"*":"?":n.repeatable?"+":""}function _x(n){const{record:s}=n,o=[{editable:!1,key:"path",value:s.path}];return s.name!=null&&o.push({editable:!1,key:"name",value:s.name}),o.push({editable:!1,key:"regexp",value:n.re}),n.keys.length&&o.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:n.keys.map(i=>`${i.name}${hx(i)}`).join(" "),tooltip:"Param keys",value:n.keys}}}),s.redirect!=null&&o.push({editable:!1,key:"redirect",value:s.redirect}),n.alias.length&&o.push({editable:!1,key:"aliases",value:n.alias.map(i=>i.record.path)}),Object.keys(n.record.meta).length&&o.push({editable:!1,key:"meta",value:n.record.meta}),o.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:n.score.map(i=>i.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:n.score}}}),o}const fm=15485081,hm=2450411,_m=8702998,gx=2282478,gm=16486972,vx=6710886;function vm(n){const s=[],{record:o}=n;o.name!=null&&s.push({label:String(o.name),textColor:0,backgroundColor:gx}),o.aliasOf&&s.push({label:"alias",textColor:0,backgroundColor:gm}),n.__vd_match&&s.push({label:"matches",textColor:0,backgroundColor:fm}),n.__vd_exactActive&&s.push({label:"exact",textColor:0,backgroundColor:_m}),n.__vd_active&&s.push({label:"active",textColor:0,backgroundColor:hm}),o.redirect&&s.push({label:typeof o.redirect=="string"?`redirect: ${o.redirect}`:"redirects",textColor:16777215,backgroundColor:vx});let i=o.__vd_id;return i==null&&(i=String(bx++),o.__vd_id=i),{id:i,label:o.path,tags:s,children:n.children.map(vm)}}let bx=0;const xx=/^\/(.*)\/([a-z]*)$/;function bm(n,s){const o=s.matched.length&&Kt(s.matched[s.matched.length-1],n.record);n.__vd_exactActive=n.__vd_active=o,o||(n.__vd_active=s.matched.some(i=>Kt(i,n.record))),n.children.forEach(i=>bm(i,s))}function xm(n){n.__vd_match=!1,n.children.forEach(xm)}function Cl(n,s){const o=String(n.re).match(xx);if(n.__vd_match=!1,!o||o.length<3)return!1;if(new RegExp(o[1].replace(/\$$/,""),o[2]).test(s))return n.children.forEach(r=>Cl(r,s)),n.record.path!=="/"||s==="/"?(n.__vd_match=n.re.test(s),!0):!1;const a=n.record.path.toLowerCase(),l=To(a);return!s.startsWith("/")&&(l.includes(s)||a.includes(s))||l.startsWith(s)||a.startsWith(s)||n.record.name&&String(n.record.name).includes(s)?!0:n.children.some(r=>Cl(r,s))}function kx(n,s){const o={};for(const i in n)s.includes(i)||(o[i]=n[i]);return o}function wx(n){const s=Ob(n.routes,n),o=n.parseQuery||nx,i=n.stringifyQuery||fu,a=n.history;if(!a)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=Zs(),r=Zs(),c=Zs(),u=at(Lt);let p=Lt;ht&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=za.bind(null,N=>""+N),m=za.bind(null,ex),f=za.bind(null,To);function h(N,ne){let se,ie;return im(N)?(se=s.getRecordMatcher(N),ie=ne):ie=N,s.addRoute(ie,se)}function _(N){const ne=s.getRecordMatcher(N);ne?s.removeRoute(ne):Se(`Cannot remove non-existent route "${String(N)}"`)}function w(){return s.getRoutes().map(N=>N.record)}function y(N){return!!s.getRecordMatcher(N)}function L(N,ne){if(ne=Oe({},ne||u.value),typeof N=="string"){const k=Ta(o,N,ne.path),O=s.resolve({path:k.path},ne),W=a.createHref(k.fullPath);return W.startsWith("//")?Se(`Location "${N}" resolved to "${W}". A resolved location cannot start with multiple slashes.`):O.matched.length||Se(`No match found for location with path "${N}"`),Oe(k,O,{params:f(O.params),hash:To(k.hash),redirectedFrom:void 0,href:W})}let se;if("path"in N)"params"in N&&!("name"in N)&&Object.keys(N.params).length&&Se(`Path "${N.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),se=Oe({},N,{path:Ta(o,N.path,ne.path).path});else{const k=Oe({},N.params);for(const O in k)k[O]==null&&delete k[O];se=Oe({},N,{params:m(k)}),ne.params=m(ne.params)}const ie=s.resolve(se,ne),Ie=N.hash||"";Ie&&!Ie.startsWith("#")&&Se(`A \`hash\` should always start with the character "#". Replace "${Ie}" with "#${Ie}".`),ie.params=d(f(ie.params));const je=lb(i,Oe({},N,{hash:Zb(Ie),path:ie.path})),g=a.createHref(je);return g.startsWith("//")?Se(`Location "${N}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):ie.matched.length||Se(`No match found for location with path "${"path"in N?N.path:N}"`),Oe({fullPath:je,hash:Ie,query:i===fu?tx(N.query):N.query||{}},ie,{redirectedFrom:void 0,href:g})}function $(N){return typeof N=="string"?Ta(o,N,u.value.path):Oe({},N)}function x(N,ne){if(p!==N)return Ds(8,{from:ne,to:N})}function P(N){return B(N)}function T(N){return P(Oe($(N),{replace:!0}))}function j(N){const ne=N.matched[N.matched.length-1];if(ne&&ne.redirect){const{redirect:se}=ne;let ie=typeof se=="function"?se(N):se;if(typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=$(ie):{path:ie},ie.params={}),!("path"in ie)&&!("name"in ie))throw Se(`Invalid redirect found:
${JSON.stringify(ie,null,2)}
 when navigating to "${N.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Oe({query:N.query,hash:N.hash,params:"path"in ie?{}:N.params},ie)}}function B(N,ne){const se=p=L(N),ie=u.value,Ie=N.state,je=N.force,g=N.replace===!0,k=j(se);if(k)return B(Oe($(k),{state:typeof k=="object"?Oe({},Ie,k.state):Ie,force:je,replace:g}),ne||se);const O=se;O.redirectedFrom=ne;let W;return!je&&ou(i,ie,se)&&(W=Ds(16,{to:O,from:ie}),Mn(ie,ie,!0,!1)),(W?Promise.resolve(W):le(O,ie)).catch(K=>ut(K)?ut(K,2)?K:Pe(K):pe(K,O,ie)).then(K=>{if(K){if(ut(K,2))return ou(i,L(K.to),O)&&ne&&(ne._count=ne._count?ne._count+1:1)>30?(Se(`Detected a possibly infinite redirection in a navigation guard when going from "${ie.fullPath}" to "${O.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):B(Oe({replace:g},$(K.to),{state:typeof K.to=="object"?Oe({},Ie,K.to.state):Ie,force:je}),ne||O)}else K=X(O,ie,!0,g,Ie);return me(O,ie,K),K})}function F(N,ne){const se=x(N,ne);return se?Promise.reject(se):Promise.resolve()}function V(N){const ne=Zn.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(N):N()}function le(N,ne){let se;const[ie,Ie,je]=yx(N,ne);se=Ma(ie.reverse(),"beforeRouteLeave",N,ne);for(const k of ie)k.leaveGuards.forEach(O=>{se.push(Et(O,N,ne))});const g=F.bind(null,N,ne);return se.push(g),An(se).then(()=>{se=[];for(const k of l.list())se.push(Et(k,N,ne));return se.push(g),An(se)}).then(()=>{se=Ma(Ie,"beforeRouteUpdate",N,ne);for(const k of Ie)k.updateGuards.forEach(O=>{se.push(Et(O,N,ne))});return se.push(g),An(se)}).then(()=>{se=[];for(const k of N.matched)if(k.beforeEnter&&!ne.matched.includes(k))if(Tn(k.beforeEnter))for(const O of k.beforeEnter)se.push(Et(O,N,ne));else se.push(Et(k.beforeEnter,N,ne));return se.push(g),An(se)}).then(()=>(N.matched.forEach(k=>k.enterCallbacks={}),se=Ma(je,"beforeRouteEnter",N,ne),se.push(g),An(se))).then(()=>{se=[];for(const k of r.list())se.push(Et(k,N,ne));return se.push(g),An(se)}).catch(k=>ut(k,8)?k:Promise.reject(k))}function me(N,ne,se){for(const ie of c.list())V(()=>ie(N,ne,se))}function X(N,ne,se,ie,Ie){const je=x(N,ne);if(je)return je;const g=ne===Lt,k=ht?history.state:{};se&&(ie||g?a.replace(N.fullPath,Oe({scroll:g&&k&&k.scroll},Ie)):a.push(N.fullPath,Ie)),u.value=N,Mn(N,ne,se,g),Pe()}let ve;function xe(){ve||(ve=a.listen((N,ne,se)=>{if(!qt.listening)return;const ie=L(N),Ie=j(ie);if(Ie){B(Oe(Ie,{replace:!0}),ie).catch(_o);return}p=ie;const je=u.value;ht&&hb(au(je.fullPath,se.delta),da()),le(ie,je).catch(g=>ut(g,12)?g:ut(g,2)?(B(g.to,ie).then(k=>{ut(k,20)&&!se.delta&&se.type===zo.pop&&a.go(-1,!1)}).catch(_o),Promise.reject()):(se.delta&&a.go(-se.delta,!1),pe(g,ie,je))).then(g=>{g=g||X(ie,je,!1),g&&(se.delta&&!ut(g,8)?a.go(-se.delta,!1):se.type===zo.pop&&ut(g,20)&&a.go(-1,!1)),me(ie,je,g)}).catch(_o)}))}let ye=Zs(),De=Zs(),oe;function pe(N,ne,se){Pe(N);const ie=De.list();return ie.length?ie.forEach(Ie=>Ie(N,ne,se)):(Se("uncaught error during route navigation:"),console.error(N)),Promise.reject(N)}function $e(){return oe&&u.value!==Lt?Promise.resolve():new Promise((N,ne)=>{ye.add([N,ne])})}function Pe(N){return oe||(oe=!N,xe(),ye.list().forEach(([ne,se])=>N?se(N):ne()),ye.reset()),N}function Mn(N,ne,se,ie){const{scrollBehavior:Ie}=n;if(!ht||!Ie)return Promise.resolve();const je=!se&&_b(au(N.fullPath,0))||(ie||!se)&&history.state&&history.state.scroll||null;return an().then(()=>Ie(N,ne,je)).then(g=>g&&fb(g)).catch(g=>pe(g,N,ne))}const sn=N=>a.go(N);let gn;const Zn=new Set,qt={currentRoute:u,listening:!0,addRoute:h,removeRoute:_,hasRoute:y,getRoutes:w,resolve:L,options:n,push:P,replace:T,go:sn,back:()=>sn(-1),forward:()=>sn(1),beforeEach:l.add,beforeResolve:r.add,afterEach:c.add,onError:De.add,isReady:$e,install(N){const ne=this;N.component("RouterLink",lx),N.component("RouterView",px),N.config.globalProperties.$router=ne,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>D(u)}),ht&&!gn&&u.value===Lt&&(gn=!0,P(a.location).catch(Ie=>{Se("Unexpected error when starting the router:",Ie)}));const se={};for(const Ie in Lt)se[Ie]=H(()=>u.value[Ie]);N.provide(Ir,ne),N.provide(mm,Be(se)),N.provide($l,u);const ie=N.unmount;Zn.add(N),N.unmount=function(){Zn.delete(N),Zn.size<1&&(p=Lt,ve&&ve(),ve=null,u.value=Lt,gn=!1,oe=!1),ie()},ht&&fx(N,ne,s)}};function An(N){return N.reduce((ne,se)=>ne.then(()=>V(se)),Promise.resolve())}return qt}function yx(n,s){const o=[],i=[],a=[],l=Math.max(s.matched.length,n.matched.length);for(let r=0;r<l;r++){const c=s.matched[r];c&&(n.matched.find(p=>Kt(p,c))?i.push(c):o.push(c));const u=n.matched[r];u&&(s.matched.find(p=>Kt(p,u))||a.push(u))}return[o,i,a]}const Aa=J(!1),vo=J(!1),Rs=J(!1),Lx=J(!0),El=mv({xs:460,...dv}),_s=Yv(),km=Hv(),Ix=H(()=>_s.height.value-_s.width.value/Mt>180),wm=Nv(Yn?document.body:null),Pt=cv(),$x=H(()=>{var n,s;return["INPUT","TEXTAREA"].includes(((n=Pt.value)==null?void 0:n.tagName)||"")||((s=Pt.value)==null?void 0:s.classList.contains("CodeMirror-code"))}),Cx=H(()=>{var n;return["BUTTON","A"].includes(((n=Pt.value)==null?void 0:n.tagName)||"")});Qn("slidev-camera","default");Qn("slidev-mic","default");const xi=Qn("slidev-scale",0),dn=Qn("slidev-show-overview",!1),Oa=Qn("slidev-presenter-cursor",!0),xu=Qn("slidev-show-editor",!1);Qn("slidev-editor-width",Yn?window.innerWidth*.4:100);const ym=Jd(dn);function ku(n,s,o,i=a=>a){return n*i(.5-s*(.5-o))}function Ex(n){return[-n[0],-n[1]]}function qn(n,s){return[n[0]+s[0],n[1]+s[1]]}function Dn(n,s){return[n[0]-s[0],n[1]-s[1]]}function Bn(n,s){return[n[0]*s,n[1]*s]}function Sx(n,s){return[n[0]/s,n[1]/s]}function Xs(n){return[n[1],-n[0]]}function wu(n,s){return n[0]*s[0]+n[1]*s[1]}function Rx(n,s){return n[0]===s[0]&&n[1]===s[1]}function zx(n){return Math.hypot(n[0],n[1])}function Tx(n){return n[0]*n[0]+n[1]*n[1]}function yu(n,s){return Tx(Dn(n,s))}function Lm(n){return Sx(n,zx(n))}function Mx(n,s){return Math.hypot(n[1]-s[1],n[0]-s[0])}function eo(n,s,o){let i=Math.sin(o),a=Math.cos(o),l=n[0]-s[0],r=n[1]-s[1],c=l*a-r*i,u=l*i+r*a;return[c+s[0],u+s[1]]}function Sl(n,s,o){return qn(n,Bn(Dn(s,n),o))}function Lu(n,s,o){return qn(n,Bn(s,o))}var{min:Cs,PI:Ax}=Math,Iu=.275,no=Ax+1e-4;function Ox(n,s={}){let{size:o=16,smoothing:i=.5,thinning:a=.5,simulatePressure:l=!0,easing:r=oe=>oe,start:c={},end:u={},last:p=!1}=s,{cap:d=!0,easing:m=oe=>oe*(2-oe)}=c,{cap:f=!0,easing:h=oe=>--oe*oe*oe+1}=u;if(n.length===0||o<=0)return[];let _=n[n.length-1].runningLength,w=c.taper===!1?0:c.taper===!0?Math.max(o,_):c.taper,y=u.taper===!1?0:u.taper===!0?Math.max(o,_):u.taper,L=Math.pow(o*i,2),$=[],x=[],P=n.slice(0,10).reduce((oe,pe)=>{let $e=pe.pressure;if(l){let Pe=Cs(1,pe.distance/o),Mn=Cs(1,1-Pe);$e=Cs(1,oe+(Mn-oe)*(Pe*Iu))}return(oe+$e)/2},n[0].pressure),T=ku(o,a,n[n.length-1].pressure,r),j,B=n[0].vector,F=n[0].point,V=F,le=F,me=V,X=!1;for(let oe=0;oe<n.length;oe++){let{pressure:pe}=n[oe],{point:$e,vector:Pe,distance:Mn,runningLength:sn}=n[oe];if(oe<n.length-1&&_-sn<3)continue;if(a){if(l){let ie=Cs(1,Mn/o),Ie=Cs(1,1-ie);pe=Cs(1,P+(Ie-P)*(ie*Iu))}T=ku(o,a,pe,r)}else T=o/2;j===void 0&&(j=T);let gn=sn<w?m(sn/w):1,Zn=_-sn<y?h((_-sn)/y):1;T=Math.max(.01,T*Math.min(gn,Zn));let qt=(oe<n.length-1?n[oe+1]:n[oe]).vector,An=oe<n.length-1?wu(Pe,qt):1,N=wu(Pe,B)<0&&!X,ne=An!==null&&An<0;if(N||ne){let ie=Bn(Xs(B),T);for(let Ie=1/13,je=0;je<=1;je+=Ie)le=eo(Dn($e,ie),$e,no*je),$.push(le),me=eo(qn($e,ie),$e,no*-je),x.push(me);F=le,V=me,ne&&(X=!0);continue}if(X=!1,oe===n.length-1){let ie=Bn(Xs(Pe),T);$.push(Dn($e,ie)),x.push(qn($e,ie));continue}let se=Bn(Xs(Sl(qt,Pe,An)),T);le=Dn($e,se),(oe<=1||yu(F,le)>L)&&($.push(le),F=le),me=qn($e,se),(oe<=1||yu(V,me)>L)&&(x.push(me),V=me),P=pe,B=Pe}let ve=n[0].point.slice(0,2),xe=n.length>1?n[n.length-1].point.slice(0,2):qn(n[0].point,[1,1]),ye=[],De=[];if(n.length===1){if(!(w||y)||p){let oe=Lu(ve,Lm(Xs(Dn(ve,xe))),-(j||T)),pe=[];for(let $e=1/13,Pe=$e;Pe<=1;Pe+=$e)pe.push(eo(oe,ve,no*2*Pe));return pe}}else{if(!(w||y&&n.length===1))if(d)for(let pe=1/13,$e=pe;$e<=1;$e+=pe){let Pe=eo(x[0],ve,no*$e);ye.push(Pe)}else{let pe=Dn($[0],x[0]),$e=Bn(pe,.5),Pe=Bn(pe,.51);ye.push(Dn(ve,$e),Dn(ve,Pe),qn(ve,Pe),qn(ve,$e))}let oe=Xs(Ex(n[n.length-1].vector));if(y||w&&n.length===1)De.push(xe);else if(f){let pe=Lu(xe,oe,T);for(let $e=1/29,Pe=$e;Pe<1;Pe+=$e)De.push(eo(pe,xe,no*3*Pe))}else De.push(qn(xe,Bn(oe,T)),qn(xe,Bn(oe,T*.99)),Dn(xe,Bn(oe,T*.99)),Dn(xe,Bn(oe,T)))}return $.concat(De,x.reverse(),ye)}function Px(n,s={}){var o;let{streamline:i=.5,size:a=16,last:l=!1}=s;if(n.length===0)return[];let r=.15+(1-i)*.85,c=Array.isArray(n[0])?n:n.map(({x:h,y:_,pressure:w=.5})=>[h,_,w]);if(c.length===2){let h=c[1];c=c.slice(0,-1);for(let _=1;_<5;_++)c.push(Sl(c[0],h,_/4))}c.length===1&&(c=[...c,[...qn(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,m=u[0],f=c.length-1;for(let h=1;h<c.length;h++){let _=l&&h===f?c[h].slice(0,2):Sl(m.point,c[h],r);if(Rx(m.point,_))continue;let w=Mx(_,m.point);if(d+=w,h<f&&!p){if(d<a)continue;p=!0}m={point:_,pressure:c[h][2]>=0?c[h][2]:.5,vector:Lm(Dn(m.point,_)),distance:w,runningLength:d},u.push(m)}return u[0].vector=((o=u[1])==null?void 0:o.vector)||[0,0],u}function Dx(n,s={}){return Ox(Px(n,s),s)}var jx=()=>({events:{},emit(n,...s){let o=this.events[n]||[];for(let i=0,a=o.length;i<a;i++)o[i](...s)},on(n,s){var o;return(o=this.events[n])!=null&&o.push(s)||(this.events[n]=[s]),()=>{var i;this.events[n]=(i=this.events[n])==null?void 0:i.filter(a=>s!==a)}}});function Wi(n,s){return n-s}function Nx(n){return n<0?-1:1}function Bi(n){return[Math.abs(n),Nx(n)]}function Im(){const n=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${n()+n()}-${n()}-${n()}-${n()}-${n()}${n()}${n()}`}var Fx=2,_t=Fx,Hs=class{constructor(n){this.drauu=n,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(n){}onUnselected(){}onStart(n){}onMove(n){return!1}onEnd(n){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(n){var s;const o=this.drauu.el,i=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(n.pageX-a.left)*i,y:(n.pageY-a.top)*i,pressure:n.pressure}}else{const a=this.drauu.svgPoint;a.x=n.clientX,a.y=n.clientY;const l=a.matrixTransform((s=o.getScreenCTM())==null?void 0:s.inverse());return{x:l.x*i,y:l.y*i,pressure:n.pressure}}}createElement(n,s){const o=document.createElementNS("http://www.w3.org/2000/svg",n),i=s?{...this.brush,...s}:this.brush;return o.setAttribute("fill",i.fill??"transparent"),o.setAttribute("stroke",i.color),o.setAttribute("stroke-width",i.size.toString()),o.setAttribute("stroke-linecap","round"),i.dasharray&&o.setAttribute("stroke-dasharray",i.dasharray),o}attr(n,s){this.el.setAttribute(n,typeof s=="string"?s:s.toFixed(_t))}_setEvent(n){this.event=n,this.point=this.getMousePosition(n)}_eventDown(n){return this._setEvent(n),this.start=this.point,this.onStart(this.point)}_eventMove(n){return this._setEvent(n),this.onMove(this.point)}_eventUp(n){return this._setEvent(n),this.onEnd(this.point)}},Hx=class extends Hs{constructor(){super(...arguments),this.points=[]}onStart(n){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[n],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&this.points.push(n),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!!n}getSvgData(n){const s=Dx(n,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!s.length)return"";const o=s.reduce((i,[a,l],r,c)=>{const[u,p]=c[(r+1)%c.length];return i.push(a,l,(a+u)/2,(l+p)/2),i},["M",...s[0],"Q"]);return o.push("Z"),o.map(i=>typeof i=="number"?i.toFixed(2):i).join(" ")}},Kx=class extends Hs{onStart(n){return this.el=this.createElement("ellipse"),this.attr("cx",n.x),this.attr("cy",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[s,o]=Bi(n.x-this.start.x),[i,a]=Bi(n.y-this.start.y);if(this.shiftPressed){const l=Math.min(s,i);s=l,i=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",s),this.attr("ry",i);else{const[l,r]=[this.start.x,this.start.x+s*o].sort(Wi),[c,u]=[this.start.y,this.start.y+i*a].sort(Wi);this.attr("cx",(l+r)/2),this.attr("cy",(c+u)/2),this.attr("rx",(r-l)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function $m(n,s){const o=document.createElementNS("http://www.w3.org/2000/svg","defs"),i=document.createElementNS("http://www.w3.org/2000/svg","marker"),a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("fill",s),i.setAttribute("id",n),i.setAttribute("viewBox","0 -5 10 10"),i.setAttribute("refX","5"),i.setAttribute("refY","0"),i.setAttribute("markerWidth","4"),i.setAttribute("markerHeight","4"),i.setAttribute("orient","auto"),a.setAttribute("d","M0,-5L10,0L0,5"),i.appendChild(a),o.appendChild(i),o}var Wx=class extends Hs{onStart(n){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",n.x),this.attr("y1",n.y),this.attr("x2",n.x),this.attr("y2",n.y),this.brush.arrowEnd){const s=Im(),o=document.createElementNS("http://www.w3.org/2000/svg","g");return o.append($m(s,this.brush.color)),o.append(this.el),this.attr("marker-end",`url(#${s})`),o}return this.el}onMove(n){if(!this.el)return!1;let{x:s,y:o}=n;if(this.shiftPressed){const i=n.x-this.start.x,a=n.y-this.start.y;if(a!==0){let l=i/a;l=Math.round(l),Math.abs(l)<=1?(s=this.start.x+a*l,o=this.start.y+a):(s=this.start.x+i,o=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-s),this.attr("y1",this.start.y*2-o),this.attr("x2",s),this.attr("y2",o)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",s),this.attr("y2",o)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||n.getTotalLength()<5)}},Bx=class extends Hs{onStart(n){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",n.x),this.attr("y",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[s,o]=Bi(n.x-this.start.x),[i,a]=Bi(n.y-this.start.y);if(this.shiftPressed){const l=Math.min(s,i);s=l,i=l}if(this.altPressed)this.attr("x",this.start.x-s),this.attr("y",this.start.y-i),this.attr("width",s*2),this.attr("height",i*2);else{const[l,r]=[this.start.x,this.start.x+s*o].sort(Wi),[c,u]=[this.start.y,this.start.y+i*a].sort(Wi);this.attr("x",l),this.attr("y",c),this.attr("width",r-l),this.attr("height",u-c)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function qx(n,s){const o=n.x-s.x,i=n.y-s.y;return o*o+i*i}function Ux(n,s,o){let i=s.x,a=s.y,l=o.x-i,r=o.y-a;if(l!==0||r!==0){const c=((n.x-i)*l+(n.y-a)*r)/(l*l+r*r);c>1?(i=o.x,a=o.y):c>0&&(i+=l*c,a+=r*c)}return l=n.x-i,r=n.y-a,l*l+r*r}function Vx(n,s){let o=n[0];const i=[o];let a;for(let l=1,r=n.length;l<r;l++)a=n[l],qx(a,o)>s&&(i.push(a),o=a);return o!==a&&a&&i.push(a),i}function Rl(n,s,o,i,a){let l=i,r=0;for(let c=s+1;c<o;c++){const u=Ux(n[c],n[s],n[o]);u>l&&(r=c,l=u)}l>i&&(r-s>1&&Rl(n,s,r,i,a),a.push(n[r]),o-r>1&&Rl(n,r,o,i,a))}function Gx(n,s){const o=n.length-1,i=[n[0]];return Rl(n,0,o,s,i),i.push(n[o]),i}function $u(n,s,o=!1){if(n.length<=2)return n;const i=s!==void 0?s*s:1;return n=o?n:Vx(n,i),n=Gx(n,i),n}var Yx=class extends Hs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(n){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[n],this.brush.arrowEnd){this.arrowId=Im();const s=$m(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&(this.points.push(n),this.count+=1),this.count>5&&(this.points=$u(this.points,1,!0),this.count=0),this.attr("d",Eu(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||(n.setAttribute("d",Eu($u(this.points,1,!0))),!n.getTotalLength()))}};function Qx(n,s){const o=s.x-n.x,i=s.y-n.y;return{length:Math.sqrt(o**2+i**2),angle:Math.atan2(i,o)}}function Cu(n,s,o,i){const a=s||n,l=o||n,r=.2,c=Qx(a,l),u=c.angle+(i?Math.PI:0),p=c.length*r,d=n.x+Math.cos(u)*p,m=n.y+Math.sin(u)*p;return{x:d,y:m}}function Zx(n,s,o){const i=Cu(o[s-1],o[s-2],n),a=Cu(n,o[s-1],o[s+1],!0);return`C ${i.x.toFixed(_t)},${i.y.toFixed(_t)} ${a.x.toFixed(_t)},${a.y.toFixed(_t)} ${n.x.toFixed(_t)},${n.y.toFixed(_t)}`}function Eu(n){return n.reduce((s,o,i,a)=>i===0?`M ${o.x.toFixed(_t)},${o.y.toFixed(_t)}`:`${s} ${Zx(o,i,a)}`,"")}var Jx=class extends Hs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(n){const s=(o,i)=>{if(o&&o.length)for(let a=0;a<o.length;a++){const l=o[a];if(l.getTotalLength){const r=l.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=l.getPointAtLength(r*c/this.pathSubFactor),p=l.getPointAtLength(r*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:i||l})}}else l.children&&s(l.children,l)}};n&&s(n.children)}onUnselected(){this.pathFragments=[]}onStart(n){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=n.x,this.svgPointPrevious.y=n.y}onMove(n){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=n.x,this.svgPointCurrent.y=n.y;const s=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,s}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const n=[];if(this.pathFragments.length)for(let s=0;s<this.pathFragments.length;s++){const o=this.pathFragments[s],i={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(o,i)&&(o.element.remove(),n.push(s))}return n.length&&(this.pathFragments=this.pathFragments.filter((s,o)=>!n.includes(o))),n.length>0}lineLineIntersect(n,s){const o=n.x1,i=n.x2,a=s.x1,l=s.x2,r=n.y1,c=n.y2,u=s.y1,p=s.y2,d=(o-i)*(u-p)-(r-c)*(a-l),m=(o*c-r*i)*(a-l)-(o-i)*(a*p-u*l),f=(o*c-r*i)*(u-p)-(r-c)*(a*p-u*l),h=(_,w,y)=>_>=w&&_<=y?!0:_>=y&&_<=w;if(d===0)return!1;{const _={x:m/d,y:f/d};return h(_.x,o,i)&&h(_.y,r,c)&&h(_.x,a,l)&&h(_.y,u,p)}}};function Xx(n){return{draw:new Yx(n),stylus:new Hx(n),line:new Wx(n),rectangle:new Bx(n),ellipse:new Kx(n),eraseLine:new Jx(n)}}var ek=class{constructor(n={}){this.options=n,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=jx(),this._models=Xx(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),n.el&&this.mount(n.el,n.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(n){this._models[this.mode].onUnselected(),this.options.brush.mode=n,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(n){this.options.brush=n}resolveSelector(n){return typeof n=="string"?document.querySelector(n):n||null}mount(n,s){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(n),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const o=this.resolveSelector(s)||this.el,i=this.eventStart.bind(this),a=this.eventMove.bind(this),l=this.eventEnd.bind(this),r=this.eventKeyboard.bind(this);o.addEventListener("pointerdown",i,{passive:!1}),window.addEventListener("pointermove",a,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",r,!1),window.addEventListener("keyup",r,!1),this._disposables.push(()=>{o.removeEventListener("pointerdown",i),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",r,!1),window.removeEventListener("keyup",r,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(n=>n()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(n,s){return this._emitter.on(n,s)}undo(){const n=this.el;return n.lastElementChild?(this._undoStack.push(n.lastElementChild.cloneNode(!0)),n.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var n;return!!((n=this.el)!=null&&n.lastElementChild)}eventMove(n){!this.acceptsInput(n)||!this.drawing||this.model._eventMove(n)&&(n.stopPropagation(),n.preventDefault(),this._emitter.emit("changed"))}eventStart(n){this.acceptsInput(n)&&(n.stopPropagation(),n.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(n),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(n){if(!this.acceptsInput(n)||!this.drawing)return;const s=this.model._eventUp(n);s?(s instanceof Element&&s!==this._currentNode&&(this._currentNode=s),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(n){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(n.pointerType)}eventKeyboard(n){this.shiftPressed===n.shiftKey&&this.altPressed===n.altKey||(this.shiftPressed=n.shiftKey,this.altPressed=n.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const n=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",n)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(n){this.clear(),this.el.innerHTML=n}};function nk(n){return new ek(n)}const zl=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],tt=Qn("slidev-drawing-enabled",!1),lF=Qn("slidev-drawing-pinned",!1),tk=J(!1),sk=J(!1),ok=J(!1),Mo=J(!1),ls=E0(Qn("slidev-drawing-brush",{color:zl[0],size:4,mode:"stylus"})),Su=J("stylus"),Cm=H(()=>Re.drawings.syncAll||bn.value);let Ao=!1;const to=H({get(){return Su.value},set(n){Su.value=n,n==="arrow"?(ls.mode="line",ls.arrowEnd=!0):(ls.mode=n,ls.arrowEnd=!1)}}),ik=Be({brush:ls,acceptsInputTypes:H(()=>tt.value&&(!Re.drawings.presenterOnly||bn.value)?void 0:["pen"]),coordinateTransform:!1}),_n=na(nk(ik));function ak(){_n.clear(),Cm.value&&Gd(Ue.value,"")}function $r(){var n;sk.value=_n.canRedo(),tk.value=_n.canUndo(),ok.value=!!((n=_n.el)!=null&&n.children.length)}function lk(n){Ao=!0;const s=Hi[n||Ue.value];s!=null?_n.load(s):_n.clear(),$r(),Ao=!1}_n.on("changed",()=>{if($r(),!Ao){const n=_n.dump(),s=Ue.value;(Hi[s]||"")!==n&&Cm.value&&Gd(s,_n.dump())}});L0(n=>{Ao=!0,n[Ue.value]!=null&&_n.load(n[Ue.value]||""),Ao=!1,$r()});an(()=>{be(Ue,()=>{_n.mounted&&lk()},{immediate:!0})});_n.on("start",()=>Mo.value=!0);_n.on("end",()=>Mo.value=!1);window.addEventListener("keydown",n=>{if(!tt.value)return;const s=!n.ctrlKey&&!n.altKey&&!n.shiftKey&&!n.metaKey;let o=!0;n.code==="KeyZ"&&(n.ctrlKey||n.metaKey)?n.shiftKey?_n.redo():_n.undo():n.code==="Escape"?tt.value=!1:n.code==="KeyL"&&s?to.value="line":n.code==="KeyA"&&s?to.value="arrow":n.code==="KeyS"&&s?to.value="stylus":n.code==="KeyR"&&s?to.value="rectangle":n.code==="KeyE"&&s?to.value="ellipse":n.code==="KeyC"&&s?ak():n.code.startsWith("Digit")&&s&&+n.code[5]<=zl.length?ls.color=zl[+n.code[5]-1]:o=!1,o&&(n.preventDefault(),n.stopPropagation())},!1);function Qe(...n){return H(()=>n.every(s=>Ge(s)))}function $n(n){return H(()=>!Ge(n))}const Ru=Iv(),Pa=Qn("slidev-color-schema","auto"),Tl=H(()=>Re.colorSchema!=="auto"),Cr=H({get(){return Tl.value?Re.colorSchema==="dark":Pa.value==="auto"?Ru.value:Pa.value==="dark"},set(n){Tl.value||(Pa.value=n===Ru.value?"auto":n?"dark":"light")}}),Em=Jd(Cr);Yn&&be(Cr,n=>{const s=document.querySelector("html");s.classList.toggle("dark",n),s.classList.toggle("light",!n)},{immediate:!0});const ki=J(1),wi=H(()=>Ye.length-1),Rn=J(0),Er=J(0);function rk(){Rn.value>ki.value&&(Rn.value-=1)}function ck(){Rn.value<wi.value&&(Rn.value+=1)}function uk(){if(Rn.value>ki.value){let n=Rn.value-Er.value;n<ki.value&&(n=ki.value),Rn.value=n}}function pk(){if(Rn.value<wi.value){let n=Rn.value+Er.value;n>wi.value&&(n=wi.value),Rn.value=n}}function dk(){const{escape:n,space:s,shift:o,left:i,right:a,up:l,down:r,enter:c,d:u,g:p,o:d}=km;let m=[{name:"next_space",key:Qe(s,$n(o)),fn:Dt,autoRepeat:!0},{name:"prev_space",key:Qe(s,o),fn:jt,autoRepeat:!0},{name:"next_right",key:Qe(a,$n(o),$n(dn)),fn:Dt,autoRepeat:!0},{name:"prev_left",key:Qe(i,$n(o),$n(dn)),fn:jt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Dt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:jt,autoRepeat:!0},{name:"next_down",key:Qe(r,$n(dn)),fn:Po,autoRepeat:!0},{name:"prev_up",key:Qe(l,$n(dn)),fn:()=>Do(!1),autoRepeat:!0},{name:"next_shift",key:Qe(a,o),fn:Po,autoRepeat:!0},{name:"prev_shift",key:Qe(i,o),fn:()=>Do(!1),autoRepeat:!0},{name:"toggle_dark",key:Qe(u,$n(tt)),fn:Em},{name:"toggle_overview",key:Qe(d,$n(tt)),fn:ym},{name:"hide_overview",key:Qe(n,$n(tt)),fn:()=>dn.value=!1},{name:"goto",key:Qe(p,$n(tt)),fn:()=>Rs.value=!Rs.value},{name:"next_overview",key:Qe(a,dn),fn:ck},{name:"prev_overview",key:Qe(i,dn),fn:rk},{name:"up_overview",key:Qe(l,dn),fn:uk},{name:"down_overview",key:Qe(r,dn),fn:pk},{name:"goto_from_overview",key:Qe(c,dn),fn:()=>{Ns(Rn.value),dn.value=!1}}];const f=new Set(m.map(_=>_.name));if(m.filter(_=>_.name&&f.has(_.name)).length===0){const _=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(_),console.warn(_)}return m}const Sm=Qe($n($x),$n(Cx),Lx);function mk(n,s,o=!1){typeof n=="string"&&(n=km[n]);const i=Qe(n,Sm);let a=0,l;const r=()=>{if(clearTimeout(l),!i.value){a=0;return}o&&(l=setTimeout(r,Math.max(1e3-a*250,150)),a++),s()};return be(i,r,{flush:"sync"})}function fk(n,s){return rv(n,o=>{Sm.value&&(o.repeat||s())})}function hk(){const n=dk();new Map(n.map(o=>[o.key,o])).forEach(o=>{o.fn&&mk(o.key,o.fn,o.autoRepeat)}),fk("f",()=>wm.toggle())}const _k={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gk=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),vk=[gk];function bk(n,s){return b(),ae("svg",_k,vk)}const xk={name:"carbon-close",render:bk};function Sr(n,s=""){var a,l;const o=["slidev-page",s],i=(l=(a=n==null?void 0:n.meta)==null?void 0:a.slide)==null?void 0:l.no;return i!=null&&o.push(`slidev-page-${i}`),o.filter(Boolean).join(" ")}const kk=Me({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(n){const s=n;I(E);const o=J(),i=Dv(o),a=H(()=>s.width?s.width:i.width.value),l=H(()=>s.width?s.width/Mt:i.height.value);s.width&&ks(()=>{o.value&&(o.value.style.width=`${a.value}px`,o.value.style.height=`${l.value}px`)});const r=H(()=>a.value/l.value),c=H(()=>s.scale&&!js.value?s.scale:r.value<Mt?a.value/At:l.value*Mt/At),u=H(()=>({height:`${wr}px`,width:`${At}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=H(()=>({"select-none":!Re.selectable,"slidev-code-line-numbers":Re.lineNumbers}));return En(qd,c),(d,m)=>(b(),ae("div",{id:"slide-container",ref_key:"root",ref:o,class:qe(p.value)},[e("div",{id:"slide-content",style:tn(u.value)},[Fn(d.$slots,"default")],4),Fn(d.$slots,"controls")],2))}});const S=(n,s)=>{const o=n.__vccOpts||n;for(const[i,a]of s)o[i]=a;return o},Rm=S(kk,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Rr=Me({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(n,{emit:s}){const o=Ze(n,"clicks",s),i=Ze(n,"clicksElements",s),a=Ze(n,"clicksDisabled",s),l=Ze(n,"clicksOrderMap",s);i.value.length=0,En(c0,n.route),En(u0,n.context),En(fo,o),En(ho,a),En(ts,i),En(vl,l)},render(){var n,s;return this.$props.is?yn(this.$props.is):(s=(n=this.$slots)==null?void 0:n.default)==null?void 0:s.call(n)}}),wk=["innerHTML"],yk=Me({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(n){return I(E),(s,o)=>D(Hi)[s.page]?(b(),ae("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:D(Hi)[s.page]},null,8,wk)):we("v-if",!0)}}),zm=S(yk,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Lk=Object.freeze(Object.defineProperty({__proto__:null,default:zm},Symbol.toStringTag,{value:"Module"})),Ik={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},$k=["onClick"],Da=4*16*2,zu=2*16,Ck=Me({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(n,{emit:s}){const o=n;I(E);const i=Ze(o,"modelValue",s);function a(){i.value=!1}function l(m){Ns(m),a()}function r(m){return m===Rn.value}const c=El.smaller("xs"),u=El.smaller("sm"),p=H(()=>c.value?_s.width.value-Da:u.value?(_s.width.value-Da-zu)/2:300),d=H(()=>Math.floor((_s.width.value-Da)/(p.value+zu)));return ks(()=>{Rn.value=Ue.value,Er.value=d.value}),(m,f)=>{const h=xk;return b(),ae(ze,null,[sd(e("div",Ik,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:tn(`grid-template-columns: repeat(auto-fit,minmax(${p.value}px,1fr))`)},[(b(!0),ae(ze,null,Fs(D(Ye).slice(0,-1),(_,w)=>(b(),ae("div",{key:_.path,class:"relative"},[e("div",{class:qe(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":r(w+1),"border-gray-400":!r(w+1)}]),style:tn(D(yr)),onClick:y=>l(+_.path)},[(b(),C(Rm,{key:_.path,width:p.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:v(()=>[_!=null&&_.component?(b(),C(D(Rr),{key:0,is:_.component,"clicks-disabled":!0,class:qe(D(Sr)(_)),route:_,context:"overview"},null,8,["is","class","route"])):we("v-if",!0),R(zm,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],14,$k),e("div",{class:"absolute top-0 opacity-50",style:tn(`left: ${p.value+5}px`)},xn(w+1),5)]))),128))],4)],512),[[Ad,D(i)]]),D(i)?(b(),ae("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:a},[R(h)])):we("v-if",!0)],64)}}});const Ek=S(Ck,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Sk="/3/linux_cli/assets/logo-b72bde5d.png",Rk={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},zk=Me({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(n,{emit:s}){const o=n;I(E);const i=Ze(o,"modelValue",s);function a(){i.value=!1}return(l,r)=>(b(),C(id,null,[D(i)?(b(),ae("div",Rk,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=c=>a())}),e("div",{class:qe(["m-auto rounded-md bg-main shadow",o.class]),"dark:border":"~ main"},[Fn(l.$slots,"default")],2)])):we("v-if",!0)],1024))}}),Tk=S(zk,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),Mk={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Ak=["innerHTML"],Ok=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Sk,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),t("dev ")])])],-1),Pk=Me({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(n,{emit:s}){const o=n;I(E);const i=Ze(o,"modelValue",s),a=H(()=>typeof Re.info=="string");return(l,r)=>(b(),C(Tk,{modelValue:D(i),"onUpdate:modelValue":r[0]||(r[0]=c=>Te(i)?i.value=c:null),class:"px-6 py-4"},{default:v(()=>[e("div",Mk,[a.value?(b(),ae("div",{key:0,class:"mb-4",innerHTML:D(Re).info},null,8,Ak)):we("v-if",!0),Ok])]),_:1},8,["modelValue"]))}});const Dk=S(Pk,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function bt(n){return Array.isArray?Array.isArray(n):Am(n)==="[object Array]"}const jk=1/0;function Nk(n){if(typeof n=="string")return n;let s=n+"";return s=="0"&&1/n==-jk?"-0":s}function Fk(n){return n==null?"":Nk(n)}function st(n){return typeof n=="string"}function Tm(n){return typeof n=="number"}function Hk(n){return n===!0||n===!1||Kk(n)&&Am(n)=="[object Boolean]"}function Mm(n){return typeof n=="object"}function Kk(n){return Mm(n)&&n!==null}function Sn(n){return n!=null}function ja(n){return!n.trim().length}function Am(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}const Wk="Incorrect 'index' type",Bk=n=>`Invalid value for key ${n}`,qk=n=>`Pattern length exceeds max of ${n}.`,Uk=n=>`Missing ${n} property in key`,Vk=n=>`Property 'weight' in key '${n}' must be a positive integer`,Tu=Object.prototype.hasOwnProperty;class Gk{constructor(s){this._keys=[],this._keyMap={};let o=0;s.forEach(i=>{let a=Om(i);o+=a.weight,this._keys.push(a),this._keyMap[a.id]=a,o+=a.weight}),this._keys.forEach(i=>{i.weight/=o})}get(s){return this._keyMap[s]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Om(n){let s=null,o=null,i=null,a=1,l=null;if(st(n)||bt(n))i=n,s=Mu(n),o=Ml(n);else{if(!Tu.call(n,"name"))throw new Error(Uk("name"));const r=n.name;if(i=r,Tu.call(n,"weight")&&(a=n.weight,a<=0))throw new Error(Vk(r));s=Mu(r),o=Ml(r),l=n.getFn}return{path:s,id:o,weight:a,src:i,getFn:l}}function Mu(n){return bt(n)?n:n.split(".")}function Ml(n){return bt(n)?n.join("."):n}function Yk(n,s){let o=[],i=!1;const a=(l,r,c)=>{if(Sn(l))if(!r[c])o.push(l);else{let u=r[c];const p=l[u];if(!Sn(p))return;if(c===r.length-1&&(st(p)||Tm(p)||Hk(p)))o.push(Fk(p));else if(bt(p)){i=!0;for(let d=0,m=p.length;d<m;d+=1)a(p[d],r,c+1)}else r.length&&a(p,r,c+1)}};return a(n,st(s)?s.split("."):s,0),i?o:o[0]}const Qk={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Zk={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(n,s)=>n.score===s.score?n.idx<s.idx?-1:1:n.score<s.score?-1:1},Jk={location:0,threshold:.6,distance:100},Xk={useExtendedSearch:!1,getFn:Yk,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var he={...Zk,...Qk,...Jk,...Xk};const e2=/[^ ]+/g;function n2(n=1,s=3){const o=new Map,i=Math.pow(10,s);return{get(a){const l=a.match(e2).length;if(o.has(l))return o.get(l);const r=1/Math.pow(l,.5*n),c=parseFloat(Math.round(r*i)/i);return o.set(l,c),c},clear(){o.clear()}}}class zr{constructor({getFn:s=he.getFn,fieldNormWeight:o=he.fieldNormWeight}={}){this.norm=n2(o,3),this.getFn=s,this.isCreated=!1,this.setIndexRecords()}setSources(s=[]){this.docs=s}setIndexRecords(s=[]){this.records=s}setKeys(s=[]){this.keys=s,this._keysMap={},s.forEach((o,i)=>{this._keysMap[o.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,st(this.docs[0])?this.docs.forEach((s,o)=>{this._addString(s,o)}):this.docs.forEach((s,o)=>{this._addObject(s,o)}),this.norm.clear())}add(s){const o=this.size();st(s)?this._addString(s,o):this._addObject(s,o)}removeAt(s){this.records.splice(s,1);for(let o=s,i=this.size();o<i;o+=1)this.records[o].i-=1}getValueForItemAtKeyId(s,o){return s[this._keysMap[o]]}size(){return this.records.length}_addString(s,o){if(!Sn(s)||ja(s))return;let i={v:s,i:o,n:this.norm.get(s)};this.records.push(i)}_addObject(s,o){let i={i:o,$:{}};this.keys.forEach((a,l)=>{let r=a.getFn?a.getFn(s):this.getFn(s,a.path);if(Sn(r)){if(bt(r)){let c=[];const u=[{nestedArrIndex:-1,value:r}];for(;u.length;){const{nestedArrIndex:p,value:d}=u.pop();if(Sn(d))if(st(d)&&!ja(d)){let m={v:d,i:p,n:this.norm.get(d)};c.push(m)}else bt(d)&&d.forEach((m,f)=>{u.push({nestedArrIndex:f,value:m})})}i.$[l]=c}else if(st(r)&&!ja(r)){let c={v:r,n:this.norm.get(r)};i.$[l]=c}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function Pm(n,s,{getFn:o=he.getFn,fieldNormWeight:i=he.fieldNormWeight}={}){const a=new zr({getFn:o,fieldNormWeight:i});return a.setKeys(n.map(Om)),a.setSources(s),a.create(),a}function t2(n,{getFn:s=he.getFn,fieldNormWeight:o=he.fieldNormWeight}={}){const{keys:i,records:a}=n,l=new zr({getFn:s,fieldNormWeight:o});return l.setKeys(i),l.setIndexRecords(a),l}function di(n,{errors:s=0,currentLocation:o=0,expectedLocation:i=0,distance:a=he.distance,ignoreLocation:l=he.ignoreLocation}={}){const r=s/n.length;if(l)return r;const c=Math.abs(i-o);return a?r+c/a:c?1:r}function s2(n=[],s=he.minMatchCharLength){let o=[],i=-1,a=-1,l=0;for(let r=n.length;l<r;l+=1){let c=n[l];c&&i===-1?i=l:!c&&i!==-1&&(a=l-1,a-i+1>=s&&o.push([i,a]),i=-1)}return n[l-1]&&l-i>=s&&o.push([i,l-1]),o}const os=32;function o2(n,s,o,{location:i=he.location,distance:a=he.distance,threshold:l=he.threshold,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,includeMatches:u=he.includeMatches,ignoreLocation:p=he.ignoreLocation}={}){if(s.length>os)throw new Error(qk(os));const d=s.length,m=n.length,f=Math.max(0,Math.min(i,m));let h=l,_=f;const w=c>1||u,y=w?Array(m):[];let L;for(;(L=n.indexOf(s,_))>-1;){let B=di(s,{currentLocation:L,expectedLocation:f,distance:a,ignoreLocation:p});if(h=Math.min(B,h),_=L+d,w){let F=0;for(;F<d;)y[L+F]=1,F+=1}}_=-1;let $=[],x=1,P=d+m;const T=1<<d-1;for(let B=0;B<d;B+=1){let F=0,V=P;for(;F<V;)di(s,{errors:B,currentLocation:f+V,expectedLocation:f,distance:a,ignoreLocation:p})<=h?F=V:P=V,V=Math.floor((P-F)/2+F);P=V;let le=Math.max(1,f-V+1),me=r?m:Math.min(f+V,m)+d,X=Array(me+2);X[me+1]=(1<<B)-1;for(let xe=me;xe>=le;xe-=1){let ye=xe-1,De=o[n.charAt(ye)];if(w&&(y[ye]=+!!De),X[xe]=(X[xe+1]<<1|1)&De,B&&(X[xe]|=($[xe+1]|$[xe])<<1|1|$[xe+1]),X[xe]&T&&(x=di(s,{errors:B,currentLocation:ye,expectedLocation:f,distance:a,ignoreLocation:p}),x<=h)){if(h=x,_=ye,_<=f)break;le=Math.max(1,2*f-_)}}if(di(s,{errors:B+1,currentLocation:f,expectedLocation:f,distance:a,ignoreLocation:p})>h)break;$=X}const j={isMatch:_>=0,score:Math.max(.001,x)};if(w){const B=s2(y,c);B.length?u&&(j.indices=B):j.isMatch=!1}return j}function i2(n){let s={};for(let o=0,i=n.length;o<i;o+=1){const a=n.charAt(o);s[a]=(s[a]||0)|1<<i-o-1}return s}class Dm{constructor(s,{location:o=he.location,threshold:i=he.threshold,distance:a=he.distance,includeMatches:l=he.includeMatches,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,isCaseSensitive:u=he.isCaseSensitive,ignoreLocation:p=he.ignoreLocation}={}){if(this.options={location:o,threshold:i,distance:a,includeMatches:l,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:p},this.pattern=u?s:s.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(f,h)=>{this.chunks.push({pattern:f,alphabet:i2(f),startIndex:h})},m=this.pattern.length;if(m>os){let f=0;const h=m%os,_=m-h;for(;f<_;)d(this.pattern.substr(f,os),f),f+=os;if(h){const w=m-os;d(this.pattern.substr(w),w)}}else d(this.pattern,0)}searchIn(s){const{isCaseSensitive:o,includeMatches:i}=this.options;if(o||(s=s.toLowerCase()),this.pattern===s){let _={isMatch:!0,score:0};return i&&(_.indices=[[0,s.length-1]]),_}const{location:a,distance:l,threshold:r,findAllMatches:c,minMatchCharLength:u,ignoreLocation:p}=this.options;let d=[],m=0,f=!1;this.chunks.forEach(({pattern:_,alphabet:w,startIndex:y})=>{const{isMatch:L,score:$,indices:x}=o2(s,_,w,{location:a+y,distance:l,threshold:r,findAllMatches:c,minMatchCharLength:u,includeMatches:i,ignoreLocation:p});L&&(f=!0),m+=$,L&&x&&(d=[...d,...x])});let h={isMatch:f,score:f?m/this.chunks.length:1};return f&&i&&(h.indices=d),h}}class Bt{constructor(s){this.pattern=s}static isMultiMatch(s){return Au(s,this.multiRegex)}static isSingleMatch(s){return Au(s,this.singleRegex)}search(){}}function Au(n,s){const o=n.match(s);return o?o[1]:null}class a2 extends Bt{constructor(s){super(s)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(s){const o=s===this.pattern;return{isMatch:o,score:o?0:1,indices:[0,this.pattern.length-1]}}}class l2 extends Bt{constructor(s){super(s)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(s){const i=s.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,s.length-1]}}}class r2 extends Bt{constructor(s){super(s)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(s){const o=s.startsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,this.pattern.length-1]}}}class c2 extends Bt{constructor(s){super(s)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(s){const o=!s.startsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,s.length-1]}}}class u2 extends Bt{constructor(s){super(s)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(s){const o=s.endsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[s.length-this.pattern.length,s.length-1]}}}class p2 extends Bt{constructor(s){super(s)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(s){const o=!s.endsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,s.length-1]}}}class jm extends Bt{constructor(s,{location:o=he.location,threshold:i=he.threshold,distance:a=he.distance,includeMatches:l=he.includeMatches,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,isCaseSensitive:u=he.isCaseSensitive,ignoreLocation:p=he.ignoreLocation}={}){super(s),this._bitapSearch=new Dm(s,{location:o,threshold:i,distance:a,includeMatches:l,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:p})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(s){return this._bitapSearch.searchIn(s)}}class Nm extends Bt{constructor(s){super(s)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(s){let o=0,i;const a=[],l=this.pattern.length;for(;(i=s.indexOf(this.pattern,o))>-1;)o=i+l,a.push([i,o-1]);const r=!!a.length;return{isMatch:r,score:r?0:1,indices:a}}}const Al=[a2,Nm,r2,c2,p2,u2,l2,jm],Ou=Al.length,d2=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,m2="|";function f2(n,s={}){return n.split(m2).map(o=>{let i=o.trim().split(d2).filter(l=>l&&!!l.trim()),a=[];for(let l=0,r=i.length;l<r;l+=1){const c=i[l];let u=!1,p=-1;for(;!u&&++p<Ou;){const d=Al[p];let m=d.isMultiMatch(c);m&&(a.push(new d(m,s)),u=!0)}if(!u)for(p=-1;++p<Ou;){const d=Al[p];let m=d.isSingleMatch(c);if(m){a.push(new d(m,s));break}}}return a})}const h2=new Set([jm.type,Nm.type]);class _2{constructor(s,{isCaseSensitive:o=he.isCaseSensitive,includeMatches:i=he.includeMatches,minMatchCharLength:a=he.minMatchCharLength,ignoreLocation:l=he.ignoreLocation,findAllMatches:r=he.findAllMatches,location:c=he.location,threshold:u=he.threshold,distance:p=he.distance}={}){this.query=null,this.options={isCaseSensitive:o,includeMatches:i,minMatchCharLength:a,findAllMatches:r,ignoreLocation:l,location:c,threshold:u,distance:p},this.pattern=o?s:s.toLowerCase(),this.query=f2(this.pattern,this.options)}static condition(s,o){return o.useExtendedSearch}searchIn(s){const o=this.query;if(!o)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:a}=this.options;s=a?s:s.toLowerCase();let l=0,r=[],c=0;for(let u=0,p=o.length;u<p;u+=1){const d=o[u];r.length=0,l=0;for(let m=0,f=d.length;m<f;m+=1){const h=d[m],{isMatch:_,indices:w,score:y}=h.search(s);if(_){if(l+=1,c+=y,i){const L=h.constructor.type;h2.has(L)?r=[...r,...w]:r.push(w)}}else{c=0,l=0,r.length=0;break}}if(l){let m={isMatch:!0,score:c/l};return i&&(m.indices=r),m}}return{isMatch:!1,score:1}}}const Ol=[];function g2(...n){Ol.push(...n)}function Pl(n,s){for(let o=0,i=Ol.length;o<i;o+=1){let a=Ol[o];if(a.condition(n,s))return new a(n,s)}return new Dm(n,s)}const qi={AND:"$and",OR:"$or"},Dl={PATH:"$path",PATTERN:"$val"},jl=n=>!!(n[qi.AND]||n[qi.OR]),v2=n=>!!n[Dl.PATH],b2=n=>!bt(n)&&Mm(n)&&!jl(n),Pu=n=>({[qi.AND]:Object.keys(n).map(s=>({[s]:n[s]}))});function Fm(n,s,{auto:o=!0}={}){const i=a=>{let l=Object.keys(a);const r=v2(a);if(!r&&l.length>1&&!jl(a))return i(Pu(a));if(b2(a)){const u=r?a[Dl.PATH]:l[0],p=r?a[Dl.PATTERN]:a[u];if(!st(p))throw new Error(Bk(u));const d={keyId:Ml(u),pattern:p};return o&&(d.searcher=Pl(p,s)),d}let c={children:[],operator:l[0]};return l.forEach(u=>{const p=a[u];bt(p)&&p.forEach(d=>{c.children.push(i(d))})}),c};return jl(n)||(n=Pu(n)),i(n)}function x2(n,{ignoreFieldNorm:s=he.ignoreFieldNorm}){n.forEach(o=>{let i=1;o.matches.forEach(({key:a,norm:l,score:r})=>{const c=a?a.weight:null;i*=Math.pow(r===0&&c?Number.EPSILON:r,(c||1)*(s?1:l))}),o.score=i})}function k2(n,s){const o=n.matches;s.matches=[],Sn(o)&&o.forEach(i=>{if(!Sn(i.indices)||!i.indices.length)return;const{indices:a,value:l}=i;let r={indices:a,value:l};i.key&&(r.key=i.key.src),i.idx>-1&&(r.refIndex=i.idx),s.matches.push(r)})}function w2(n,s){s.score=n.score}function y2(n,s,{includeMatches:o=he.includeMatches,includeScore:i=he.includeScore}={}){const a=[];return o&&a.push(k2),i&&a.push(w2),n.map(l=>{const{idx:r}=l,c={item:s[r],refIndex:r};return a.length&&a.forEach(u=>{u(l,c)}),c})}class Ks{constructor(s,o={},i){this.options={...he,...o},this.options.useExtendedSearch,this._keyStore=new Gk(this.options.keys),this.setCollection(s,i)}setCollection(s,o){if(this._docs=s,o&&!(o instanceof zr))throw new Error(Wk);this._myIndex=o||Pm(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(s){Sn(s)&&(this._docs.push(s),this._myIndex.add(s))}remove(s=()=>!1){const o=[];for(let i=0,a=this._docs.length;i<a;i+=1){const l=this._docs[i];s(l,i)&&(this.removeAt(i),i-=1,a-=1,o.push(l))}return o}removeAt(s){this._docs.splice(s,1),this._myIndex.removeAt(s)}getIndex(){return this._myIndex}search(s,{limit:o=-1}={}){const{includeMatches:i,includeScore:a,shouldSort:l,sortFn:r,ignoreFieldNorm:c}=this.options;let u=st(s)?st(this._docs[0])?this._searchStringList(s):this._searchObjectList(s):this._searchLogical(s);return x2(u,{ignoreFieldNorm:c}),l&&u.sort(r),Tm(o)&&o>-1&&(u=u.slice(0,o)),y2(u,this._docs,{includeMatches:i,includeScore:a})}_searchStringList(s){const o=Pl(s,this.options),{records:i}=this._myIndex,a=[];return i.forEach(({v:l,i:r,n:c})=>{if(!Sn(l))return;const{isMatch:u,score:p,indices:d}=o.searchIn(l);u&&a.push({item:l,idx:r,matches:[{score:p,value:l,norm:c,indices:d}]})}),a}_searchLogical(s){const o=Fm(s,this.options),i=(c,u,p)=>{if(!c.children){const{keyId:m,searcher:f}=c,h=this._findMatches({key:this._keyStore.get(m),value:this._myIndex.getValueForItemAtKeyId(u,m),searcher:f});return h&&h.length?[{idx:p,item:u,matches:h}]:[]}const d=[];for(let m=0,f=c.children.length;m<f;m+=1){const h=c.children[m],_=i(h,u,p);if(_.length)d.push(..._);else if(c.operator===qi.AND)return[]}return d},a=this._myIndex.records,l={},r=[];return a.forEach(({$:c,i:u})=>{if(Sn(c)){let p=i(o,c,u);p.length&&(l[u]||(l[u]={idx:u,item:c,matches:[]},r.push(l[u])),p.forEach(({matches:d})=>{l[u].matches.push(...d)}))}}),r}_searchObjectList(s){const o=Pl(s,this.options),{keys:i,records:a}=this._myIndex,l=[];return a.forEach(({$:r,i:c})=>{if(!Sn(r))return;let u=[];i.forEach((p,d)=>{u.push(...this._findMatches({key:p,value:r[d],searcher:o}))}),u.length&&l.push({idx:c,item:r,matches:u})}),l}_findMatches({key:s,value:o,searcher:i}){if(!Sn(o))return[];let a=[];if(bt(o))o.forEach(({v:l,i:r,n:c})=>{if(!Sn(l))return;const{isMatch:u,score:p,indices:d}=i.searchIn(l);u&&a.push({score:p,key:s,value:l,idx:r,norm:c,indices:d})});else{const{v:l,n:r}=o,{isMatch:c,score:u,indices:p}=i.searchIn(l);c&&a.push({score:u,key:s,value:l,norm:r,indices:p})}return a}}Ks.version="6.6.2";Ks.createIndex=Pm;Ks.parseIndex=t2;Ks.config=he;Ks.parseQuery=Fm;g2(_2);const L2={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},I2=["value","disabled","onKeydown"],$2=["border","onClick"],C2={"w-4":"","text-right":"",op50:"","text-sm":""},E2=Me({__name:"Goto",setup(n){I(E);const s=J(),o=J(),i=J(),a=J(),l=J(""),r=J(0);function c(x){return x!=null}const u=H(()=>new Ks(Ye.map(x=>{var P;return(P=x.meta)==null?void 0:P.slide}).filter(c),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),p=H(()=>l.value.startsWith("/")?l.value.substring(1):l.value),d=H(()=>u.value.search(p.value).map(x=>x.item)),m=H(()=>!!d.value.length);function f(){if(m.value){const x=d.value.at(r.value||0);x&&Ns(x.no)}h()}function h(){l.value="",Rs.value=!1}function _(x){x.preventDefault(),r.value++,r.value>=d.value.length&&(r.value=0),y()}function w(x){x.preventDefault(),r.value--,r.value<=-2&&(r.value=d.value.length-1),y()}function y(){var P;const x=(P=a.value)==null?void 0:P[r.value];x&&i.value&&(x.offsetTop+x.offsetHeight>i.value.offsetHeight+i.value.scrollTop?i.value.scrollTo({behavior:"smooth",top:x.offsetTop+x.offsetHeight-i.value.offsetHeight+1}):x.offsetTop<i.value.scrollTop&&i.value.scrollTo({behavior:"smooth",top:x.offsetTop}))}function L(x){r.value=0,l.value=x.target.value}function $(x){Ns(x),h()}return be(Rs,async x=>{var P;x?(l.value="",r.value=0,setTimeout(()=>{var T;return(T=o.value)==null?void 0:T.focus()},0)):(P=o.value)==null||P.blur()}),be(Pt,()=>{var x;(x=s.value)!=null&&x.contains(Pt.value)||h()}),(x,P)=>(b(),ae("div",{id:"slidev-goto-dialog",ref_key:"container",ref:s,class:qe(["fixed right-5 transition-all",D(Rs)?"top-5":"-top-20"]),"w-90":""},[e("div",L2,[e("input",{ref_key:"input",ref:o,value:l.value,type:"text",disabled:!D(Rs),class:qe(["outline-none bg-transparent",{"text-red-400":!m.value&&l.value}]),placeholder:"Goto...",onKeydown:[ii(f,["enter"]),ii(h,["escape"]),ii(_,["down"]),ii(w,["up"])],onInput:L},null,42,I2)]),d.value.length>0?(b(),ae("ul",{key:0,ref_key:"list",ref:i,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(b(!0),ae(ze,null,Fs(d.value,(T,j)=>(b(),ae("li",{ref_for:!0,ref_key:"items",ref:a,key:T.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","items-center":"",border:j===0?"":"t main",class:qe(r.value===j?"bg-active op100":"op80"),onClick:ug(B=>$(T.no),["stop"])},[e("div",C2,xn(T.no),1),t(" "+xn(T.title),1)],10,$2))),128))],512)):we("v-if",!0)],2))}});const S2=S(E2,[["__scopeId","data-v-f5ee02a7"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Goto.vue"]]),R2=Me({__name:"Controls",setup(n){I(E);const s=at(),o=at();return(i,a)=>(b(),ae(ze,null,[R(Ek,{modelValue:D(dn),"onUpdate:modelValue":a[0]||(a[0]=l=>Te(dn)?dn.value=l:null)},null,8,["modelValue"]),R(S2),s.value?(b(),C(D(s),{key:0})):we("v-if",!0),o.value?(b(),C(D(o),{key:1,modelValue:D(Aa),"onUpdate:modelValue":a[1]||(a[1]=l=>Te(Aa)?Aa.value=l:null)},null,8,["modelValue"])):we("v-if",!0),D(Re).info?(b(),C(Dk,{key:2,modelValue:D(vo),"onUpdate:modelValue":a[2]||(a[2]=l=>Te(vo)?vo.value=l:null)},null,8,["modelValue"])):we("v-if",!0)],64))}}),z2=S(R2,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),T2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},M2=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),A2=[M2];function O2(n,s){return b(),ae("svg",T2,A2)}const P2={name:"carbon-settings-adjust",render:O2},D2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},j2=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),N2=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),F2=[j2,N2];function H2(n,s){return b(),ae("svg",D2,F2)}const K2={name:"carbon-information",render:H2},W2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},B2=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),q2=[B2];function U2(n,s){return b(),ae("svg",W2,q2)}const V2={name:"carbon-download",render:U2},G2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y2=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Q2=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Z2=[Y2,Q2];function J2(n,s){return b(),ae("svg",G2,Z2)}const X2={name:"carbon-user-speaker",render:J2},ew={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},nw=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),tw=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),sw=[nw,tw];function ow(n,s){return b(),ae("svg",ew,sw)}const iw={name:"carbon-presentation-file",render:ow},aw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},lw=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),rw=[lw];function cw(n,s){return b(),ae("svg",aw,rw)}const uw={name:"carbon-pen",render:cw},pw={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},dw=e("g",{fill:"currentColor"},[e("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),e("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),mw=[dw];function fw(n,s){return b(),ae("svg",pw,mw)}const hw={name:"ph-cursor-duotone",render:fw},_w={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},gw=e("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),vw=[gw];function bw(n,s){return b(),ae("svg",_w,vw)}const Hm={name:"ph-cursor-fill",render:bw},xw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},kw=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),ww=[kw];function yw(n,s){return b(),ae("svg",xw,ww)}const Lw={name:"carbon-sun",render:yw},Iw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$w=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Cw=[$w];function Ew(n,s){return b(),ae("svg",Iw,Cw)}const Sw={name:"carbon-moon",render:Ew},Rw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zw=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Tw=[zw];function Mw(n,s){return b(),ae("svg",Rw,Tw)}const Aw={name:"carbon-apps",render:Mw},Ow={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Pw=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Dw=[Pw];function jw(n,s){return b(),ae("svg",Ow,Dw)}const Km={name:"carbon-arrow-right",render:jw},Nw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Fw=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Hw=[Fw];function Kw(n,s){return b(),ae("svg",Nw,Hw)}const Ww={name:"carbon-arrow-left",render:Kw},Bw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},qw=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Uw=[qw];function Vw(n,s){return b(),ae("svg",Bw,Uw)}const Gw={name:"carbon-maximize",render:Vw},Yw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qw=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Zw=[Qw];function Jw(n,s){return b(),ae("svg",Yw,Zw)}const Xw={name:"carbon-minimize",render:Jw},ey={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ny=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),ty=[ny];function sy(n,s){return b(),ae("svg",ey,ty)}const oy={name:"carbon-checkmark",render:sy},iy={class:"select-list"},ay={class:"title"},ly={class:"items"},ry=["onClick"],cy=Me({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(n,{emit:s}){const o=n;I(E);const i=Ze(o,"modelValue",s,{passive:!0});return(a,l)=>{const r=oy;return b(),ae("div",iy,[e("div",ay,xn(n.title),1),e("div",ly,[(b(!0),ae(ze,null,Fs(n.items,c=>(b(),ae("div",{key:c.value,class:qe(["item",{active:D(i)===c.value}]),onClick:()=>{var u;i.value=c.value,(u=c.onClick)==null||u.call(c)}},[R(r,{class:qe(["text-green-500",{"opacity-0":D(i)!==c.value}])},null,8,["class"]),t(" "+xn(c.display||c.value),1)],10,ry))),128))])])}}});const uy=S(cy,[["__scopeId","data-v-3f89fa11"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SelectList.vue"]]),py={class:"text-sm"},dy=Me({__name:"Settings",setup(n){I(E);const s=[{display:"Fit",value:0},{display:"1:1",value:1}];return(o,i)=>(b(),ae("div",py,[R(uy,{modelValue:D(xi),"onUpdate:modelValue":i[0]||(i[0]=a=>Te(xi)?xi.value=a:null),title:"Scale",items:s},null,8,["modelValue"])]))}}),my=S(dy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Settings.vue"]]),fy={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},hy=Me({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(n,{emit:s}){const o=n;I(E);const i=Ze(o,"modelValue",s,{passive:!0}),a=J();return av(a,()=>{i.value=!1}),(l,r)=>(b(),ae("div",{ref_key:"el",ref:a,class:"flex relative"},[e("button",{class:qe({disabled:n.disabled}),onClick:r[0]||(r[0]=c=>i.value=!D(i))},[Fn(l.$slots,"button",{class:qe({disabled:n.disabled})})],2),(b(),C(id,null,[D(i)?(b(),ae("div",fy,[Fn(l.$slots,"menu")])):we("v-if",!0)],1024))],512))}}),_y=S(hy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/MenuButton.vue"]]),gy={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},vy={__name:"VerticalDivider",setup(n){return I(E),(s,o)=>(b(),ae("div",gy))}},mi=S(vy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),by={render(){return[]}},xy={class:"slidev-icon-btn"},ky={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},wy={class:"my-auto"},yy={class:"opacity-50"},Ly=Me({__name:"NavControls",props:{persist:{default:!1}},setup(n){const s=n;I(E);const o=El.smaller("md"),{isFullscreen:i,toggle:a}=wm,l=H(()=>Fl.value?`?password=${Fl.value}`:""),r=H(()=>`/presenter/${Ue.value}${l.value}`),c=H(()=>`/${Ue.value}${l.value}`),u=J();function p(){u.value&&Pt.value&&u.value.contains(Pt.value)&&Pt.value.blur()}const d=H(()=>s.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),m=at(),f=at();return Ot(()=>import("./DrawingControls-2cc76a23.js"),[]).then(h=>f.value=h.default),(h,_)=>{const w=Xw,y=Gw,L=Ww,$=Km,x=Aw,P=Sw,T=Lw,j=Hm,B=hw,F=uw,V=iw,le=zn("RouterLink"),me=X2,X=V2,ve=K2,xe=P2;return b(),ae("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[e("div",{class:qe(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",d.value]),onMouseleave:p},[D(ft)?we("v-if",!0):(b(),ae("button",{key:0,class:"slidev-icon-btn",onClick:_[0]||(_[0]=(...ye)=>D(a)&&D(a)(...ye))},[D(i)?(b(),C(w,{key:0})):(b(),C(y,{key:1}))])),e("button",{class:qe(["slidev-icon-btn",{disabled:!D(yP)}]),onClick:_[1]||(_[1]=(...ye)=>D(jt)&&D(jt)(...ye))},[R(L)],2),e("button",{class:qe(["slidev-icon-btn",{disabled:!D(wP)}]),title:"Next",onClick:_[2]||(_[2]=(...ye)=>D(Dt)&&D(Dt)(...ye))},[R($)],2),D(ft)?we("v-if",!0):(b(),ae("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:_[3]||(_[3]=ye=>D(ym)())},[R(x)])),D(Tl)?we("v-if",!0):(b(),ae("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:_[4]||(_[4]=ye=>D(Em)())},[D(Cr)?(b(),C(P,{key:0})):(b(),C(T,{key:1}))])),R(mi),D(ft)?we("v-if",!0):(b(),ae(ze,{key:3},[!D(bn)&&!D(o)&&m.value?(b(),ae(ze,{key:0},[R(D(m)),R(mi)],64)):we("v-if",!0),D(bn)?(b(),ae("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:_[5]||(_[5]=ye=>Oa.value=!D(Oa))},[D(Oa)?(b(),C(j,{key:0})):(b(),C(B,{key:1,class:"opacity-50"}))])):we("v-if",!0)],64)),(!D(Re).drawings.presenterOnly||D(bn))&&!D(ft)?(b(),ae(ze,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:_[6]||(_[6]=ye=>tt.value=!D(tt))},[R(F),D(tt)?(b(),ae("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:tn({background:D(ls).color})},null,4)):we("v-if",!0)]),R(mi)],64)):we("v-if",!0),D(ft)?we("v-if",!0):(b(),ae(ze,{key:5},[D(bn)?(b(),C(le,{key:0,to:c.value,class:"slidev-icon-btn",title:"Play Mode"},{default:v(()=>[R(V)]),_:1},8,["to"])):we("v-if",!0),D(gP)?(b(),C(le,{key:1,to:r.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:v(()=>[R(me)]),_:1},8,["to"])):we("v-if",!0),we("v-if",!0)],64)),(b(),ae(ze,{key:6},[D(Re).download?(b(),ae("button",{key:0,class:"slidev-icon-btn",onClick:_[8]||(_[8]=(...ye)=>D(Hl)&&D(Hl)(...ye))},[R(X)])):we("v-if",!0)],64)),!D(bn)&&D(Re).info&&!D(ft)?(b(),ae("button",{key:7,class:"slidev-icon-btn",onClick:_[9]||(_[9]=ye=>vo.value=!D(vo))},[R(ve)])):we("v-if",!0),!D(bn)&&!D(ft)?(b(),C(_y,{key:8},{button:v(()=>[e("button",xy,[R(xe)])]),menu:v(()=>[R(my)]),_:1})):we("v-if",!0),D(ft)?we("v-if",!0):(b(),C(mi,{key:9})),e("div",ky,[e("div",wy,[t(xn(D(Ue))+" ",1),e("span",yy,"/ "+xn(D(vP)),1)])]),R(D(by))],34)],512)}}}),Iy=S(Ly,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/NavControls.vue"]]),$y={style:{"font-size":"0.55rem","line-height":"1rem"}},Cy=e("div",{class:"absolute bottom-0 left-1"},[e("img",{src:"https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png",width:"60"})],-1),Ey={class:"absolute bottom-1 left-89 text-gray-700"},Sy={key:0,class:"absolute bottom-1 right-1 text-gray-700"},Ry={__name:"global-top",setup(n){const s=I(E);return(o,i)=>(b(),ae("footer",$y,[Cy,e("div",Ey," ITT E.Agnelli - Informatica - "+xn(D(s).configs.materia)+" - prof. Antonio Mancuso - a.s. "+xn(D(s).configs.as)+" - v "+xn(D(s).configs.version||0),1),D(s).nav.currentPage!==1&&D(s).nav.currentPage!=D(s).nav.total+1?(b(),ae("div",Sy,xn(D(s).nav.currentPage-1)+" / "+xn(D(s).nav.total-1),1)):we("v-if",!0)]))}},zy=S(Ry,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/global-top.vue"]]),Wm={render(){return[yn(zy)]}},Bm={render(){return[]}},Ty={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},My=Me({__name:"PresenterMouse",setup(n){return I(E),(s,o)=>{const i=Hm;return D(Ra).cursor?(b(),ae("div",Ty,[R(i,{class:"absolute",style:tn({left:`${D(Ra).cursor.x}%`,top:`${D(Ra).cursor.y}%`})},null,8,["style"])])):we("v-if",!0)}}}),Ay=S(My,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),Oy=Me({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(n){I(E),be(mn,()=>{var i,a;(i=mn.value)!=null&&i.meta&&mn.value.meta.preload!==!1&&(mn.value.meta.__preloaded=!0),(a=Na.value)!=null&&a.meta&&Na.value.meta.preload!==!1&&(Na.value.meta.__preloaded=!0)},{immediate:!0});const s=at();Ot(()=>import("./DrawingLayer-9298c8ed.js"),[]).then(i=>s.value=i.default);const o=H(()=>Ye.filter(i=>{var a;return((a=i.meta)==null?void 0:a.__preloaded)||i===mn.value}));return(i,a)=>(b(),ae(ze,null,[we(" Global Bottom "),R(D(Bm)),we(" Slides "),R(sg,G(D($P),{id:"slideshow",tag:"div"}),{default:v(()=>[(b(!0),ae(ze,null,Fs(o.value,l=>{var r;return sd((b(),C(D(Rr),{key:l.path,is:l==null?void 0:l.component,clicks:l===D(mn)?D(jn):0,"clicks-elements":((r=l.meta)==null?void 0:r.__clicksElements)||[],"clicks-disabled":!1,class:qe(D(Sr)(l)),route:l,context:i.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ad,l===D(mn)]])}),128))]),_:1},16),we(" Global Top "),R(D(Wm)),s.value?(b(),C(D(s),{key:0})):we("v-if",!0),D(bn)?we("v-if",!0):(b(),C(Ay,{key:1}))],64))}});const Py=S(Oy,[["__scopeId","data-v-afb4231e"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesShow.vue"]]),Dy=Me({__name:"PrintStyle",setup(n){I(E);function s(o,{slots:i}){if(i.default)return yn("style",i.default())}return(o,i)=>(b(),C(s,null,{default:v(()=>[t(" @page { size: "+xn(D(At))+"px "+xn(D(wr))+"px; margin: 0px; } ",1)]),_:1}))}}),qm=S(Dy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),jy=Me({__name:"Play",setup(n){I(E),hk();const s=J();function o(l){var r;xu.value||((r=l.target)==null?void 0:r.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?Dt():jt())}CP(s);const i=H(()=>Ix.value||xu.value);at();const a=at();return Ot(()=>import("./DrawingControls-2cc76a23.js"),[]).then(l=>a.value=l.default),(l,r)=>(b(),ae(ze,null,[D(js)?(b(),C(qm,{key:0})):we("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:s,class:"grid grid-cols-[1fr_max-content]",style:tn(D(yr))},[R(Rm,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:D(js)?D(_s).width.value:void 0,scale:D(xi),onPointerdown:o},{default:v(()=>[R(Py,{context:"slide"})]),controls:v(()=>[e("div",{class:qe(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[i.value?"opacity-100 right-0":"opacity-0 p-2",D(Mo)?"pointer-events-none":""]])},[R(Iy,{class:"m-auto",persist:i.value},null,8,["persist"])],2),!D(Re).drawings.presenterOnly&&!D(ft)&&a.value?(b(),C(D(a),{key:0,class:"ml-0"})):we("v-if",!0)]),_:1},8,["style","width","scale"]),we("v-if",!0)],4),R(z2)],64))}}),Ny=S(jy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Um(n){return typeof n>"u"||n===null}function Fy(n){return typeof n=="object"&&n!==null}function Hy(n){return Array.isArray(n)?n:Um(n)?[]:[n]}function Ky(n,s){var o,i,a,l;if(s)for(l=Object.keys(s),o=0,i=l.length;o<i;o+=1)a=l[o],n[a]=s[a];return n}function Wy(n,s){var o="",i;for(i=0;i<s;i+=1)o+=n;return o}function By(n){return n===0&&Number.NEGATIVE_INFINITY===1/n}var qy=Um,Uy=Fy,Vy=Hy,Gy=Wy,Yy=By,Qy=Ky,Tr={isNothing:qy,isObject:Uy,toArray:Vy,repeat:Gy,isNegativeZero:Yy,extend:Qy};function Vm(n,s){var o="",i=n.reason||"(unknown reason)";return n.mark?(n.mark.name&&(o+='in "'+n.mark.name+'" '),o+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")",!s&&n.mark.snippet&&(o+=`

`+n.mark.snippet),i+" "+o):i}function Oo(n,s){Error.call(this),this.name="YAMLException",this.reason=n,this.mark=s,this.message=Vm(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Oo.prototype=Object.create(Error.prototype);Oo.prototype.constructor=Oo;Oo.prototype.toString=function(s){return this.name+": "+Vm(this,s)};var is=Oo,Zy=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Jy=["scalar","sequence","mapping"];function Xy(n){var s={};return n!==null&&Object.keys(n).forEach(function(o){n[o].forEach(function(i){s[String(i)]=o})}),s}function eL(n,s){if(s=s||{},Object.keys(s).forEach(function(o){if(Zy.indexOf(o)===-1)throw new is('Unknown option "'+o+'" is met in definition of "'+n+'" YAML type.')}),this.options=s,this.tag=n,this.kind=s.kind||null,this.resolve=s.resolve||function(){return!0},this.construct=s.construct||function(o){return o},this.instanceOf=s.instanceOf||null,this.predicate=s.predicate||null,this.represent=s.represent||null,this.representName=s.representName||null,this.defaultStyle=s.defaultStyle||null,this.multi=s.multi||!1,this.styleAliases=Xy(s.styleAliases||null),Jy.indexOf(this.kind)===-1)throw new is('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}var rn=eL;function Du(n,s){var o=[];return n[s].forEach(function(i){var a=o.length;o.forEach(function(l,r){l.tag===i.tag&&l.kind===i.kind&&l.multi===i.multi&&(a=r)}),o[a]=i}),o}function nL(){var n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},s,o;function i(a){a.multi?(n.multi[a.kind].push(a),n.multi.fallback.push(a)):n[a.kind][a.tag]=n.fallback[a.tag]=a}for(s=0,o=arguments.length;s<o;s+=1)arguments[s].forEach(i);return n}function Nl(n){return this.extend(n)}Nl.prototype.extend=function(s){var o=[],i=[];if(s instanceof rn)i.push(s);else if(Array.isArray(s))i=i.concat(s);else if(s&&(Array.isArray(s.implicit)||Array.isArray(s.explicit)))s.implicit&&(o=o.concat(s.implicit)),s.explicit&&(i=i.concat(s.explicit));else throw new is("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(l){if(!(l instanceof rn))throw new is("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new is("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new is("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(l){if(!(l instanceof rn))throw new is("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var a=Object.create(Nl.prototype);return a.implicit=(this.implicit||[]).concat(o),a.explicit=(this.explicit||[]).concat(i),a.compiledImplicit=Du(a,"implicit"),a.compiledExplicit=Du(a,"explicit"),a.compiledTypeMap=nL(a.compiledImplicit,a.compiledExplicit),a};var tL=Nl,sL=new rn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),oL=new rn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),iL=new rn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),aL=new tL({explicit:[sL,oL,iL]});function lL(n){if(n===null)return!0;var s=n.length;return s===1&&n==="~"||s===4&&(n==="null"||n==="Null"||n==="NULL")}function rL(){return null}function cL(n){return n===null}var uL=new rn("tag:yaml.org,2002:null",{kind:"scalar",resolve:lL,construct:rL,predicate:cL,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function pL(n){if(n===null)return!1;var s=n.length;return s===4&&(n==="true"||n==="True"||n==="TRUE")||s===5&&(n==="false"||n==="False"||n==="FALSE")}function dL(n){return n==="true"||n==="True"||n==="TRUE"}function mL(n){return Object.prototype.toString.call(n)==="[object Boolean]"}var fL=new rn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:pL,construct:dL,predicate:mL,represent:{lowercase:function(n){return n?"true":"false"},uppercase:function(n){return n?"TRUE":"FALSE"},camelcase:function(n){return n?"True":"False"}},defaultStyle:"lowercase"});function hL(n){return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102}function _L(n){return 48<=n&&n<=55}function gL(n){return 48<=n&&n<=57}function vL(n){if(n===null)return!1;var s=n.length,o=0,i=!1,a;if(!s)return!1;if(a=n[o],(a==="-"||a==="+")&&(a=n[++o]),a==="0"){if(o+1===s)return!0;if(a=n[++o],a==="b"){for(o++;o<s;o++)if(a=n[o],a!=="_"){if(a!=="0"&&a!=="1")return!1;i=!0}return i&&a!=="_"}if(a==="x"){for(o++;o<s;o++)if(a=n[o],a!=="_"){if(!hL(n.charCodeAt(o)))return!1;i=!0}return i&&a!=="_"}if(a==="o"){for(o++;o<s;o++)if(a=n[o],a!=="_"){if(!_L(n.charCodeAt(o)))return!1;i=!0}return i&&a!=="_"}}if(a==="_")return!1;for(;o<s;o++)if(a=n[o],a!=="_"){if(!gL(n.charCodeAt(o)))return!1;i=!0}return!(!i||a==="_")}function bL(n){var s=n,o=1,i;if(s.indexOf("_")!==-1&&(s=s.replace(/_/g,"")),i=s[0],(i==="-"||i==="+")&&(i==="-"&&(o=-1),s=s.slice(1),i=s[0]),s==="0")return 0;if(i==="0"){if(s[1]==="b")return o*parseInt(s.slice(2),2);if(s[1]==="x")return o*parseInt(s.slice(2),16);if(s[1]==="o")return o*parseInt(s.slice(2),8)}return o*parseInt(s,10)}function xL(n){return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!Tr.isNegativeZero(n)}var kL=new rn("tag:yaml.org,2002:int",{kind:"scalar",resolve:vL,construct:bL,predicate:xL,represent:{binary:function(n){return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)},octal:function(n){return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)},decimal:function(n){return n.toString(10)},hexadecimal:function(n){return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),wL=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function yL(n){return!(n===null||!wL.test(n)||n[n.length-1]==="_")}function LL(n){var s,o;return s=n.replace(/_/g,"").toLowerCase(),o=s[0]==="-"?-1:1,"+-".indexOf(s[0])>=0&&(s=s.slice(1)),s===".inf"?o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:s===".nan"?NaN:o*parseFloat(s,10)}var IL=/^[-+]?[0-9]+e/;function $L(n,s){var o;if(isNaN(n))switch(s){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===n)switch(s){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===n)switch(s){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Tr.isNegativeZero(n))return"-0.0";return o=n.toString(10),IL.test(o)?o.replace("e",".e"):o}function CL(n){return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||Tr.isNegativeZero(n))}var EL=new rn("tag:yaml.org,2002:float",{kind:"scalar",resolve:yL,construct:LL,predicate:CL,represent:$L,defaultStyle:"lowercase"}),SL=aL.extend({implicit:[uL,fL,kL,EL]}),RL=SL,Gm=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Ym=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function zL(n){return n===null?!1:Gm.exec(n)!==null||Ym.exec(n)!==null}function TL(n){var s,o,i,a,l,r,c,u=0,p=null,d,m,f;if(s=Gm.exec(n),s===null&&(s=Ym.exec(n)),s===null)throw new Error("Date resolve error");if(o=+s[1],i=+s[2]-1,a=+s[3],!s[4])return new Date(Date.UTC(o,i,a));if(l=+s[4],r=+s[5],c=+s[6],s[7]){for(u=s[7].slice(0,3);u.length<3;)u+="0";u=+u}return s[9]&&(d=+s[10],m=+(s[11]||0),p=(d*60+m)*6e4,s[9]==="-"&&(p=-p)),f=new Date(Date.UTC(o,i,a,l,r,c,u)),p&&f.setTime(f.getTime()-p),f}function ML(n){return n.toISOString()}var AL=new rn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:zL,construct:TL,instanceOf:Date,represent:ML});function OL(n){return n==="<<"||n===null}var PL=new rn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:OL}),Mr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function DL(n){if(n===null)return!1;var s,o,i=0,a=n.length,l=Mr;for(o=0;o<a;o++)if(s=l.indexOf(n.charAt(o)),!(s>64)){if(s<0)return!1;i+=6}return i%8===0}function jL(n){var s,o,i=n.replace(/[\r\n=]/g,""),a=i.length,l=Mr,r=0,c=[];for(s=0;s<a;s++)s%4===0&&s&&(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)),r=r<<6|l.indexOf(i.charAt(s));return o=a%4*6,o===0?(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)):o===18?(c.push(r>>10&255),c.push(r>>2&255)):o===12&&c.push(r>>4&255),new Uint8Array(c)}function NL(n){var s="",o=0,i,a,l=n.length,r=Mr;for(i=0;i<l;i++)i%3===0&&i&&(s+=r[o>>18&63],s+=r[o>>12&63],s+=r[o>>6&63],s+=r[o&63]),o=(o<<8)+n[i];return a=l%3,a===0?(s+=r[o>>18&63],s+=r[o>>12&63],s+=r[o>>6&63],s+=r[o&63]):a===2?(s+=r[o>>10&63],s+=r[o>>4&63],s+=r[o<<2&63],s+=r[64]):a===1&&(s+=r[o>>2&63],s+=r[o<<4&63],s+=r[64],s+=r[64]),s}function FL(n){return Object.prototype.toString.call(n)==="[object Uint8Array]"}var HL=new rn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:DL,construct:jL,predicate:FL,represent:NL}),KL=Object.prototype.hasOwnProperty,WL=Object.prototype.toString;function BL(n){if(n===null)return!0;var s=[],o,i,a,l,r,c=n;for(o=0,i=c.length;o<i;o+=1){if(a=c[o],r=!1,WL.call(a)!=="[object Object]")return!1;for(l in a)if(KL.call(a,l))if(!r)r=!0;else return!1;if(!r)return!1;if(s.indexOf(l)===-1)s.push(l);else return!1}return!0}function qL(n){return n!==null?n:[]}var UL=new rn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:BL,construct:qL}),VL=Object.prototype.toString;function GL(n){if(n===null)return!0;var s,o,i,a,l,r=n;for(l=new Array(r.length),s=0,o=r.length;s<o;s+=1){if(i=r[s],VL.call(i)!=="[object Object]"||(a=Object.keys(i),a.length!==1))return!1;l[s]=[a[0],i[a[0]]]}return!0}function YL(n){if(n===null)return[];var s,o,i,a,l,r=n;for(l=new Array(r.length),s=0,o=r.length;s<o;s+=1)i=r[s],a=Object.keys(i),l[s]=[a[0],i[a[0]]];return l}var QL=new rn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:GL,construct:YL}),ZL=Object.prototype.hasOwnProperty;function JL(n){if(n===null)return!0;var s,o=n;for(s in o)if(ZL.call(o,s)&&o[s]!==null)return!1;return!0}function XL(n){return n!==null?n:{}}var eI=new rn("tag:yaml.org,2002:set",{kind:"mapping",resolve:JL,construct:XL});RL.extend({implicit:[AL,PL],explicit:[HL,UL,QL,eI]});function ju(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"":n===95?" ":n===76?"\u2028":n===80?"\u2029":""}var nI=new Array(256),tI=new Array(256);for(var Es=0;Es<256;Es++)nI[Es]=ju(Es)?1:0,tI[Es]=ju(Es);function sI(n){return Array.from(new Set(n))}function Nu(...n){let s,o,i;n.length===1?(s=0,i=1,[o]=n):[s,o,i=1]=n;const a=[];let l=s;for(;l<o;)a.push(l),l+=i||1;return a}function Qm(n,s){if(!s||s==="all"||s==="*")return Nu(1,n+1);const o=[];for(const i of s.split(/[,;]/g))if(!i.includes("-"))o.push(+i);else{const[a,l]=i.split("-",2);o.push(...Nu(+a,l?+l+1:n+1))}return sI(o).filter(i=>i<=n).sort((i,a)=>i-a)}function Zm(n){const s=H(()=>n.value.path),o=H(()=>Ye.length-1),i=H(()=>parseInt(s.value.split(/\//g).slice(-1)[0])||1),a=H(()=>ma(i.value)),l=H(()=>Ye.find(f=>f.path===`${i.value}`)),r=H(()=>{var f,h,_;return(_=(h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:_.id}),c=H(()=>{var f,h;return((h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.layout)||(i.value===1?"cover":"default")}),u=H(()=>Ye.find(f=>f.path===`${Math.min(Ye.length,i.value+1)}`)),p=H(()=>Ye.filter(f=>{var h,_;return(_=(h=f.meta)==null?void 0:h.slide)==null?void 0:_.title}).reduce((f,h)=>(Or(f,h),f),[])),d=H(()=>Pr(p.value,l.value)),m=H(()=>Dr(d.value));return{route:n,path:s,total:o,currentPage:i,currentPath:a,currentRoute:l,currentSlideId:r,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:d,tree:m,downloadPDF:Hl,next:Dt,nextSlide:Po,openInEditor:EP,prev:jt,prevSlide:Do}}function Jm(n,s,o){const i=J(0);an(()=>{wn.afterEach(async()=>{await an(),i.value+=1})});const a=H(()=>{var u,p;return i.value,((p=(u=s.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),l=H(()=>{var u,p;return+(((p=(u=s.value)==null?void 0:u.meta)==null?void 0:p.clicks)??a.value.length)}),r=H(()=>o.value<Ye.length-1||n.value<l.value),c=H(()=>o.value>1||n.value>0);return{clicks:n,clicksElements:a,clicksTotal:l,hasNext:r,hasPrev:c}}const oI=["id"],iI=Me({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(n,{emit:s}){const o=n,i=Ze(o,"clicksElements",s),a=H(()=>({height:`${wr}px`,width:`${At}px`})),l=at();Ot(()=>Promise.resolve().then(()=>Lk),void 0).then(p=>l.value=p.default);const r=H(()=>o.clicks),c=Jm(r,o.nav.currentRoute,o.nav.currentPage),u=H(()=>`${o.route.path.toString().padStart(3,"0")}-${(r.value+1).toString().padStart(2,"0")}`);return En(E,Be({nav:{...o.nav,...c},configs:Re,themeConfigs:H(()=>Re.themeConfig)})),(p,d)=>{var m;return b(),ae("div",{id:u.value,class:"print-slide-container",style:tn(a.value)},[R(D(Bm)),R(D(Rr),{is:(m=p.route)==null?void 0:m.component,"clicks-elements":D(i),"onUpdate:clicksElements":d[0]||(d[0]=f=>Te(i)?i.value=f:null),clicks:r.value,"clicks-disabled":!1,class:qe(D(Sr)(p.route)),route:p.route},null,8,["is","clicks-elements","clicks","class","route"]),l.value?(b(),C(D(l),{key:0,page:+p.route.path},null,8,["page"])):we("v-if",!0),R(D(Wm))],12,oI)}}}),Fu=S(iI,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),aI=Me({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(n){var l;const s=n;I(E);const o=J(((l=s.route.meta)==null?void 0:l.__clicksElements)||[]),i=H(()=>s.route),a=Zm(i);return(r,c)=>(b(),ae(ze,null,[R(Fu,{"clicks-elements":o.value,"onUpdate:clicksElements":c[0]||(c[0]=u=>o.value=u),clicks:0,nav:D(a),route:i.value},null,8,["clicks-elements","nav","route"]),D(bo)?we("v-if",!0):(b(!0),ae(ze,{key:0},Fs(o.value.length,u=>(b(),C(Fu,{key:u,clicks:u,nav:D(a),route:i.value},null,8,["clicks","nav","route"]))),128))],64))}}),lI=S(aI,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlide.vue"]]),rI={id:"print-content"},cI=Me({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(n){const s=n;I(E);const o=H(()=>s.width),i=H(()=>s.width/Mt),a=H(()=>o.value/i.value),l=H(()=>a.value<Mt?o.value/At:i.value*Mt/At);let r=Ye.slice(0,-1);Hn.value.query.range&&(r=Qm(r.length,Hn.value.query.range).map(p=>r[p-1]));const c=H(()=>({"select-none":!Re.selectable,"slidev-code-line-numbers":Re.lineNumbers}));return En(qd,l),(u,p)=>(b(),ae("div",{id:"print-container",class:qe(c.value)},[e("div",rI,[(b(!0),ae(ze,null,Fs(D(r),d=>(b(),C(lI,{key:d.path,route:d},null,8,["route"]))),128))]),Fn(u.$slots,"controls")],2))}});const uI=S(cI,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintContainer.vue"]]),pI=Me({__name:"Print",setup(n){return I(E),ks(()=>{js?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,o)=>(b(),ae(ze,null,[D(js)?(b(),C(qm,{key:0})):we("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:tn(D(yr))},[R(uI,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:D(_s).width.value},null,8,["style","width"])],4)],64))}});const dI=S(pI,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Print.vue"]]);const mI={class:"slidev-layout end"},fI={__name:"end",setup(n){return I(E),(s,o)=>(b(),ae("div",mI,[Fn(s.$slots,"default",{},()=>[t("END")],!0)]))}},hI=S(fI,[["__scopeId","data-v-e532b98d"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/end.vue"]]);function Hu(n){return n.startsWith("/")?"/3/linux_cli/"+n.slice(1):n}function _I(n,s=!1){const o=n&&["#","rgb","hsl"].some(a=>n.indexOf(a)===0),i={background:o?n:void 0,color:n&&!o?"white":void 0,backgroundImage:o?void 0:n?s?`linear-gradient(#0005, #0008), url(${Hu(n)})`:`url("${Hu(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return i.background||delete i.background,i}const gI={class:"my-auto w-full"},vI=Me({__name:"cover",props:{background:{default:""}},setup(n){const s=n;I(E);const o=H(()=>_I(s.background,!0));return(i,a)=>(b(),ae("div",{class:"slidev-layout cover",style:tn(o.value)},[e("div",gI,[Fn(i.$slots,"default")])],4))}}),bI=S(vI,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/theme-default/layouts/cover.vue"]]),xI=e("h1",null,"SISTEMI & RETI 3",-1),kI=e("p",null,"Linux CLI",-1),wI={class:"pt-12"},yI={class:"px-2 py-1"},LI={__name:"1",setup(n){const s={theme:"default",background:"/cover.png",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"RETI 3",as:"2024/2025",version:"1.2.4"};return I(E),(o,i)=>{const a=Km;return b(),C(bI,M(z(s)),{default:v(()=>[we(" https://www.linuxjournal.com/content/linux-command-line-interface-introduction-guide#firstlook "),xI,kI,e("div",wI,[e("span",yI,[t(" Premi spazio o "),R(a,{class:"inline"}),t(" per la prossima slide ")])])]),_:1},16)}}},II=S(LI,[["__file","/@slidev/slides/1.md"]]),$I="/3/linux_cli/assets/cli_00-1fd55adb.png",CI={class:"slidev-layout default"},EI={__name:"default",setup(n){return I(E),(s,o)=>(b(),ae("div",CI,[Fn(s.$slots,"default")]))}},A=S(EI,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/default.vue"]]),SI=e("h1",null,"Linux CLI",-1),RI=e("img",{src:$I,width:"750",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),zI={__name:"2",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[SI,RI]),_:1},16))}},TI=S(zI,[["__file","/@slidev/slides/2.md"]]),MI="/3/linux_cli/assets/c_01-ec6830b4.jpg",AI=e("h1",null,"Linux CLI",-1),OI=e("img",{src:MI,width:"650",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),PI={__name:"3",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[AI,OI]),_:1},16))}},DI=S(PI,[["__file","/@slidev/slides/3.md"]]),jI="/3/linux_cli/assets/c_02-25fc3292.jpg",NI=e("h1",null,"Linux CLI",-1),FI=e("img",{src:jI,width:"600",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),HI={__name:"4",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[NI,FI]),_:1},16))}},KI=S(HI,[["__file","/@slidev/slides/4.md"]]),WI="/3/linux_cli/assets/c_03-2292d779.jpg",BI=e("h1",null,"Linux CLI",-1),qI=e("img",{src:WI,width:"750",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),UI={__name:"5",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[BI,qI]),_:1},16))}},VI=S(UI,[["__file","/@slidev/slides/5.md"]]),GI=e("h1",null,"Linux CLI",-1),YI=e("p",null,"Esercitarsi con Linux e Materiale Aggiuntivo",-1),QI=e("ul",null,[e("li",null,[e("a",{href:"https://pwn.college/linux-luminarium/",target:"_blank",rel:"noopener"},"PWN College - Linux Luminarium")]),e("li",null,[e("a",{href:"/support/3/linux_cli/The_Complete_Linux_Manual.pdf",target:"_blank",rel:"noopener"},"The_Complete_Linux_Manual")]),e("li",null,[e("a",{href:"/support/3/linux_cli/How_Linux_Works.epub",target:"_blank",rel:"noopener"},"How_Linux_Works")]),e("li",null,[e("a",{href:"/support/3/linux_cli/Learning_Modern_Linux.epub",target:"_blank",rel:"noopener"},"Learning_Modern_Linux")]),e("li",null,[e("a",{href:"/support/3/linux_cli/linux_commands.pdf",target:"_blank",rel:"noopener"},"Linux CLI Commands")]),e("li",null,[e("a",{href:"/support/3/linux_cli/introduction-to-bash-scripting-light.pdf",target:"_blank",rel:"noopener"},"Introduction to Bash")]),e("li",null,[e("a",{href:"https://linuxjourney.com",target:"_blank",rel:"noopener"},"Linux Journey")]),e("li",null,[e("a",{href:"https://linuxsurvival.com",target:"_blank",rel:"noopener"},"Linux Survival")]),e("li",null,[e("a",{href:"https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html",target:"_blank",rel:"noopener"},"Linux Interactive Game")]),e("li",null,[e("a",{href:"https://web.archive.org/web/20130926213426/http://nixsrv.com/llthw",target:"_blank",rel:"noopener"},"llthw")]),e("li",null,[e("a",{href:"https://www.codecademy.com/learn/introduction-to-linux-installation",target:"_blank",rel:"noopener"},"introduction-to-linux-installation")]),e("li",null,[e("a",{href:"https://www.codecademy.com/learn/intro-to-the-command-line",target:"_blank",rel:"noopener"},"intro-to-the-command-line")]),e("li",null,[e("a",{href:"https://www.codecademy.com/learn/learn-the-command-line-viewing-and-changing-the-file-system",target:"_blank",rel:"noopener"},"learn-the-command-line")])],-1),ZI={__name:"6",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[GI,YI,QI]),_:1},16))}},JI=S(ZI,[["__file","/@slidev/slides/6.md"]]),XI=e("h1",null,"Linux CLI",-1),e$=e("p",null,"Esercitarsi con Linux e Materiale Aggiuntivo",-1),n$=e("ul",null,[e("li",null,[e("a",{href:"https://www.codecademy.com/learn/learn-the-command-line-redirecting-input-and-output",target:"_blank",rel:"noopener"},"learn-the-command-line-redirecting-input-and-output")]),e("li",null,[e("a",{href:"https://www.codecademy.com/learn/introduction-to-linux-users-and-permissions",target:"_blank",rel:"noopener"},"introduction-to-linux-users-and-permissions")]),e("li",null,[e("a",{href:"https://www.codecademy.com/learn/introduction-to-linux-bash-scripting",target:"_blank",rel:"noopener"},"introduction-to-linux-bash-scripting")]),e("li",null,[e("a",{href:"https://linux-training.be/linuxfun.pdf?ref=itsfoss.com",target:"_blank",rel:"noopener"},"Linux Fundamentals")]),e("li",null,[e("a",{href:"https://linuxnewbieguide.org/wp-content/uploads/2016/07/The-Ultimate-Linux-Newbie-Guide-eBook-Edition-January-2017.pdf",target:"_blank",rel:"noopener"},"Ultimate Linux Beginner Guide")]),e("li",null,[e("a",{href:"https://www.netacad.com/courses/os-it/ndg-linux-unhatched?ref=itsfoss.com",target:"_blank",rel:"noopener"},"Cisco Linux From Scratch")]),e("li",null,[e("a",{href:"https://www.netacad.com/courses/os-it/ndg-linux-essentials",target:"_blank",rel:"noopener"},"Cisco NDG Linux Essentials")]),e("li",null,[e("a",{href:"https://www.netacad.com/courses/os-it/ndg-linux-I",target:"_blank",rel:"noopener"},"Cisco NDG Linux 1")]),e("li",null,[e("a",{href:"https://www.netacad.com/courses/os-it/ndg-linux-II",target:"_blank",rel:"noopener"},"Cisco NDG Linux 2")]),e("li",null,[e("a",{href:"https://sourceforge.net/projects/linuxcommand/files/AWTLCL/21.10/AWTLCL-21.10.pdf/download",target:"_blank",rel:"noopener"},"The Linux Command Line")]),e("li",null,[e("a",{href:"https://linuxcommand.org/lc3_learning_the_shell.php",target:"_blank",rel:"noopener"},"Learning The Shell")]),e("li",null,[e("a",{href:"https://linuxcommand.org/lc3_man_page_index.php#builtins",target:"_blank",rel:"noopener"},"Bash builtins")]),e("li",null,[e("a",{href:"https://linuxcommand.org/lc3_man_page_index.php#file",target:"_blank",rel:"noopener"},"File utilities")])],-1),t$={__name:"7",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[XI,e$,n$]),_:1},16))}},s$=S(t$,[["__file","/@slidev/slides/7.md"]]),o$=e("h1",null,"Linux CLI",-1),i$=e("p",null,"Esercitarsi con Linux e Materiale Aggiuntivo",-1),a$=e("ul",null,[e("li",null,[e("a",{href:"https://linuxcommand.org/lc3_man_page_index.php#text",target:"_blank",rel:"noopener"},"Text utilities")]),e("li",null,[e("a",{href:"https://linuxcommand.org/lc3_man_page_index.php#shell",target:"_blank",rel:"noopener"},"Shell utilities")]),e("li",null,[e("a",{href:"https://linuxcommand.org/lc3_man_page_index.php#other",target:"_blank",rel:"noopener"},"Misc commands")]),e("li",null,[e("a",{href:"https://tldp.org/LDP/intro-linux/intro-linux.pdf?ref=itsfoss.com",target:"_blank",rel:"noopener"},"Intro to Linux")]),e("li",null,[e("a",{href:"https://www.linuxtrainingacademy.com/itsfoss-ll5d/",target:"_blank",rel:"noopener"},"Learn Linux in 5 Days")]),e("li",null,[e("a",{href:"/support/3/linux_cli/",target:"_blank",rel:"noopener"},"Linux Basics for Hacker")]),e("li",null,[e("a",{href:"/support/3/linux_cli/Linux_Command_Line.epub",target:"_blank",rel:"noopener"},"Linux_Command_Line")]),e("li",null,[e("a",{href:"/support/3/linux_cli/Linux_Basics_Hackers.epub",target:"_blank",rel:"noopener"},"Linux_Basics_Hackers")]),e("li",null,[e("a",{href:"/support/3/linux_cli/Essential_Linux_Commands.epub",target:"_blank",rel:"noopener"},"Essential_Linux_Commands")])],-1),l$={__name:"8",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[o$,i$,a$]),_:1},16))}},r$=S(l$,[["__file","/@slidev/slides/8.md"]]),c$="/3/linux_cli/assets/cli_23-2923768e.png",u$=e("h1",null,"Linux CLI",-1),p$=e("p",null,"Esercitarsi con Linux giocando a Bandit",-1),d$=e("p",null,[e("a",{href:"https://www.youtube.com/playlist?list=PLhruyobnXYz9XE9nXpgyUuaNaJzucdvwE",target:"_blank"},[e("img",{src:c$,width:"950",style:{margin:"auto",position:"relative",left:"0px",top:"20px"}})])],-1),m$={__name:"9",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[u$,p$,d$]),_:1},16))}},f$=S(m$,[["__file","/@slidev/slides/9.md"]]),h$=e("h1",null,"Linux CLI",-1),_$=e("p",null,"Esercitarsi con Linux giocando a Bandit",-1),g$=e("div",{style:{border:"0px solid black",width:"33%",position:"relative",top:"0px",left:"0px"}},[e("ul",null,[e("li",null,[e("a",{href:"https://youtu.be/DMG3A9f1EfE",target:"_blank",rel:"noopener"},"Intro")]),e("li",null,[e("a",{href:"https://youtu.be/qY2W6ZiYB-o",target:"_blank",rel:"noopener"},"Livello 00")]),e("li",null,[e("a",{href:"https://youtu.be/sPk5g25Uimo",target:"_blank",rel:"noopener"},"Livello 01")]),e("li",null,[e("a",{href:"https://youtu.be/vuzsPh4wIVo",target:"_blank",rel:"noopener"},"Livello 02")]),e("li",null,[e("a",{href:"https://youtu.be/ygYIDn2Fo3Y",target:"_blank",rel:"noopener"},"Livello 03")]),e("li",null,[e("a",{href:"https://youtu.be/0FAEBDzefgY",target:"_blank",rel:"noopener"},"Livello 04")]),e("li",null,[e("a",{href:"https://youtu.be/Wm2J21CXVnM",target:"_blank",rel:"noopener"},"Livello 05")]),e("li",null,[e("a",{href:"https://youtu.be/iGPhRS6of88",target:"_blank",rel:"noopener"},"Livello 06")]),e("li",null,[e("a",{href:"https://youtu.be/Ce1swn03lsg",target:"_blank",rel:"noopener"},"Livello 07")]),e("li",null,[e("a",{href:"https://youtu.be/3b7h2BacgDg",target:"_blank",rel:"noopener"},"Livello 08")]),e("li",null,[e("a",{href:"https://youtu.be/KkMH017YUHU",target:"_blank",rel:"noopener"},"Livello 09")]),e("li",null,[e("a",{href:"https://youtu.be/T2j9bAJihyE",target:"_blank",rel:"noopener"},"Livello 10")])])],-1),v$=e("div",{style:{border:"0px solid black",width:"33%",position:"relative",top:"-382px",left:"300px"}},[e("ul",null,[e("li",null,[e("a",{href:"https://youtu.be/jGDuTP5q0dk",target:"_blank",rel:"noopener"},"Livello 11")]),e("li",null,[e("a",{href:"https://youtu.be/p-lOinMmFZs",target:"_blank",rel:"noopener"},"Livello 12")]),e("li",null,[e("a",{href:"https://youtu.be/7bl99RA8QMM",target:"_blank",rel:"noopener"},"Livello 13")]),e("li",null,[e("a",{href:"https://youtu.be/rGcG0f5TVcc",target:"_blank",rel:"noopener"},"Livello 14")]),e("li",null,[e("a",{href:"https://youtu.be/MwosasHuQL8",target:"_blank",rel:"noopener"},"Livello 15")]),e("li",null,[e("a",{href:"https://youtu.be/2oRHnQYlvFY",target:"_blank",rel:"noopener"},"Livello 16")]),e("li",null,[e("a",{href:"https://youtu.be/OOV1yaFDoCg",target:"_blank",rel:"noopener"},"Livello 17")]),e("li",null,[e("a",{href:"https://youtu.be/qjOXW1uu9II",target:"_blank",rel:"noopener"},"Livello 18")]),e("li",null,[e("a",{href:"https://youtu.be/QuJVj7Rid9g",target:"_blank",rel:"noopener"},"Livello 19")]),e("li",null,[e("a",{href:"https://youtu.be/DfNtoKDPWDg",target:"_blank",rel:"noopener"},"Livello 20")]),e("li",null,[e("a",{href:"https://youtu.be/XqpeqxM06e0",target:"_blank",rel:"noopener"},"Livello 21")]),e("li",null,[e("a",{href:"https://youtu.be/h8-u-Om5XeE",target:"_blank",rel:"noopener"},"Livello 22")])])],-1),b$=e("div",{style:{border:"0px solid black",width:"33%",position:"relative",top:"-765px",left:"600px"}},[e("ul",null,[e("li",null,[e("a",{href:"https://youtu.be/ozOIZz-SQuo",target:"_blank",rel:"noopener"},"Livello 23")]),e("li",null,[e("a",{href:"https://youtu.be/gbc9wYRv7p8",target:"_blank",rel:"noopener"},"Livello 24")]),e("li",null,[e("a",{href:"https://youtu.be/R2yCHJuMixs",target:"_blank",rel:"noopener"},"Livello 25")]),e("li",null,[e("a",{href:"https://youtu.be/Fjw_JaLMYss",target:"_blank",rel:"noopener"},"Livello 26")]),e("li",null,[e("a",{href:"https://youtu.be/CHic_Ks-Smk",target:"_blank",rel:"noopener"},"Livello 27")]),e("li",null,[e("a",{href:"https://youtu.be/0sZeXEwx-Cc",target:"_blank",rel:"noopener"},"Livello 28")]),e("li",null,[e("a",{href:"https://youtu.be/9jjzf7ZRlfQ",target:"_blank",rel:"noopener"},"Livello 29")]),e("li",null,[e("a",{href:"https://youtu.be/W0q55XAw0Vs",target:"_blank",rel:"noopener"},"Livello 30")]),e("li",null,[e("a",{href:"https://youtu.be/afayTF3L8mM",target:"_blank",rel:"noopener"},"Livello 31")]),e("li",null,[e("a",{href:"https://youtu.be/tUPJRqLys0Y",target:"_blank",rel:"noopener"},"Livello 32")]),e("li",null,[e("a",{href:"https://youtu.be/a1hDMXQIWTY",target:"_blank",rel:"noopener"},"Livello 33")])])],-1),x$={__name:"10",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[h$,_$,g$,v$,b$]),_:1},16))}},k$=S(x$,[["__file","/@slidev/slides/10.md"]]),w$={class:"cover"},y$=Me({__name:"Cover",props:{bg:{default:"yellow"},fg:{default:"black"},fs:{default:"80px"}},setup(n,{emit:s}){const o=n;Cd(r=>({"759f654d-fs":D(l),"759f654d-bgcol":D(i),"759f654d-fgcol":D(a)})),I(E);const i=Ze(o,"bg",s),a=Ze(o,"fg",s),l=Ze(o,"fs",s);return(r,c)=>(b(),ae("div",w$,[Fn(r.$slots,"default")]))}});const ct=S(y$,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/components/Cover.vue"]]),L$=e("p",null," ",-1),I$={__name:"11",setup(n){const s={};return I(E),(o,i)=>{const a=ct;return b(),C(A,M(z(s)),{default:v(()=>[L$,R(a,{fs:"100px"},{default:v(()=>[t(" Intro ")]),_:1})]),_:1},16)}}},$$=S(I$,[["__file","/@slidev/slides/11.md"]]),C$=e("h1",null,"Linux CLI",-1),E$=e("p",null,"Introduzione",-1),S$=e("ul",null,[e("li",null,"Unix e Linux hanno una lunga tradizione nel fornire degli ambienti grafici per le proprie versioni o distribuzioni."),e("li",null,"Oggi ci sono decine di ambienti desktop diversi per Linux, al contrario di 1 solo per Windows e MAC"),e("li",null,"Questo è legato a motivi storici e legato al concetto che ogni utente può scegliere veramente l’ambiente che preferisce ed è maggiormente congeniale per lui"),e("li",null,[t("Alcuni tra i più popolari ambienti desktop sono "),e("ul",null,[e("li",null,"Gnome"),e("li",null,"KDE"),e("li",null,"XFCE"),e("li",null,"LXQt"),e("li",null,"Cinnamon"),e("li",null,"Mate"),e("li",null,"Unit")])])],-1),R$={__name:"12",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[C$,E$,S$]),_:1},16))}},z$=S(R$,[["__file","/@slidev/slides/12.md"]]),T$={class:"banner"},M$=Me({__name:"Banner",props:{bg:{default:"green"},fg:{default:"yellow"},padding:{default:"10px"},mt:{default:"0px"},mb:{default:"0px"},ml:{default:"0px"},mr:{default:"0px"}},setup(n,{emit:s}){const o=n;Cd(p=>({"76049b2e-bgcol":D(i),"76049b2e-fgcol":D(a),"76049b2e-padding":D(l),"76049b2e-marginTop":D(r),"76049b2e-marginBottom":D(c),"76049b2e-marginLeft":p.marginLeft,"76049b2e-marginRight":D(u)})),I(E);const i=Ze(o,"bg",s),a=Ze(o,"fg",s),l=Ze(o,"padding",s),r=Ze(o,"mt",s),c=Ze(o,"mb",s),u=Ze(o,"mr",s);return(p,d)=>(b(),ae("div",T$,[Fn(p.$slots,"default")]))}});const Ar=S(M$,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/components/Banner.vue"]]),A$=e("h1",null,"Linux CLI",-1),O$=e("p",null,"Esercitazioni",-1),P$=e("ul",null,[e("li",null,[t("Per svolgere le esercitazioni seguenti in modo sicuro e in modo riproducibile (tutti gli studenti hanno lo stesso ambiente) utilizziamo una tecnologia chiamta "),e("code",null,"Docker"),t(" (la vedremo in dettaglio in 5)")]),e("li",null,'Quindi le esercitazioni non le svogeremo direttamente sul PC, ma in un ambiente "virtuale" protetto e sicuro'),e("li",null,'In altre parole potremo sperimentare senza problemi e senza timore di "rompere" il PC'),e("li",null,'Qualsiasi cosa avviene nell’ambiente "virtuale" (container) NON ha impatto sul PC in uso')],-1),D$={__name:"13",setup(n){const s={};return I(E),(o,i)=>{const a=zn("center"),l=Ar;return b(),C(A,M(z(s)),{default:v(()=>[A$,O$,P$,R(l,{mt:"30px",padding:"30px"},{default:v(()=>[R(a,null,{default:v(()=>[t(" SPERIMENTATE CON TRANQUILLITA' ")]),_:1})]),_:1})]),_:1},16)}}},j$=S(D$,[["__file","/@slidev/slides/13.md"]]),N$={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},F$=e("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),H$=[F$];function K$(n,s){return b(),ae("svg",N$,H$)}const W$={name:"ph-clipboard",render:K$},B$={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},q$=e("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),U$=[q$];function V$(n,s){return b(),ae("svg",B$,U$)}const G$={name:"ph-check-circle",render:V$},Y$=["title"],Q$=Me({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(n){const s=n;I(E);const o=I(fo),i=I(ts),a=I(ho);function l(m=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",_=h.length;for(let w=0;w<m;w++)f.push(h.charAt(Math.floor(Math.random()*_)));return f.join("")}const r=J(),c=Ln();kt(()=>{const m=s.at==null?i==null?void 0:i.value.length:s.at,f=H(()=>a!=null&&a.value?s.ranges.length-1:Math.min(Math.max(0,((o==null?void 0:o.value)||0)-(m||0)),s.ranges.length-1)),h=H(()=>s.ranges[f.value]||"");if(s.ranges.length>=2&&!(a!=null&&a.value)){const _=l(),w=f0(s.ranges.length-1).map(y=>_+y);i!=null&&i.value&&(i.value.push(...w),qo(()=>w.forEach(y=>bl(i.value,y)),c))}ks(()=>{if(!r.value)return;const w=r.value.querySelector(".shiki-dark")?Array.from(r.value.querySelectorAll(".shiki")):[r.value];for(const y of w){const L=Array.from(y.querySelectorAll(".line")),$=Qm(L.length,h.value);if(L.forEach((x,P)=>{const T=$.includes(P+1);x.classList.toggle(Jt,!0),x.classList.toggle("highlighted",T),x.classList.toggle("dishonored",!T)}),s.maxHeight){const x=Array.from(y.querySelectorAll(".line.highlighted"));x.reduce((T,j)=>j.offsetHeight+T,0)>r.value.offsetHeight?x[0].scrollIntoView({behavior:"smooth",block:"start"}):x.length>0&&x[Math.round((x.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:p}=fv();function d(){var f,h;const m=(h=(f=r.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;m&&p(m)}return(m,f)=>{const h=G$,_=W$;return b(),ae("div",{ref_key:"el",ref:r,class:"slidev-code-wrapper relative group",style:tn({"max-height":s.maxHeight,"overflow-y":s.maxHeight?"scroll":void 0})},[Fn(m.$slots,"default"),D(Re).codeCopy?(b(),ae("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:D(u)?"Copied":"Copy",onClick:f[0]||(f[0]=w=>d())},[D(u)?(b(),C(h,{key:0,class:"p-2 w-8 h-8"})):(b(),C(_,{key:1,class:"p-2 w-8 h-8"}))],8,Y$)):we("v-if",!0)],4)}}}),ee=S(Q$,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),Z$=e("h1",null,"Linux CLI",-1),J$=e("p",null,"Esercitazioni",-1),X$=e("ul",null,[e("li",null,"Per eseguire ed entrare nell’ambiente virtuale eseguite il seguente comando")],-1),e3=e("br",null,null,-1),n3=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"docker"),t(" run "),e("span",{class:"token parameter variable"},"-ti"),t(),e("span",{class:"token parameter variable"},"--rm"),t(" profmancusoa/linux-cli:latest")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("Unable to "),e("span",{class:"token function"},"find"),t(" image "),e("span",{class:"token string"},"'profmancusoa/linux-cli:latest'"),t(" locally")]),t(`
`),e("span",{class:"line"},"latest: Pulling from profmancusoa/linux-cli"),t(`
`),e("span",{class:"line"},"203e9cf21bd2: Pulling fs layer "),t(`
`),e("span",{class:"line"},"5c69d8c91484: Pulling fs layer "),t(`
`),e("span",{class:"line"},"d7c0c274ef0a: Pulling fs layer "),t(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},".."),t(".")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},".."),t(".")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("antonio"),e("span",{class:"token comment"},"#")])])],-1),t3={__name:"14",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[Z$,J$,X$,e3,R(a,G({},{ranges:[""]}),{default:v(()=>[n3]),_:1},16)]),_:1},16)}}},s3=S(t3,[["__file","/@slidev/slides/14.md"]]),o3=e("h1",null,"Linux CLI",-1),i3=e("p",null,"Esercitazione cli_01",-1),a3=e("ul",null,[e("li",null,"Svolgere la seguente esercitazione (Quiz inclusi)")],-1),l3=e("br",null,null,-1),r3=e("p",null,[e("a",{href:"https://linuxjourney.com/lesson/linux-history",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/linux-history")],-1),c3=e("br",null,null,-1),u3=e("ul",null,[e("li",null,"Domande agli studenti sul contenuto dell’esercitazione")],-1),p3={__name:"15",setup(n){const s={};return I(E),(o,i)=>{const a=zn("center");return b(),C(A,M(z(s)),{default:v(()=>[o3,i3,a3,l3,R(a,null,{default:v(()=>[r3]),_:1}),c3,u3]),_:1},16)}}},d3=S(p3,[["__file","/@slidev/slides/15.md"]]),m3="/3/linux_cli/assets/cli_21-ee261d4c.png",f3=e("h1",null,"Linux CLI",-1),h3=e("p",null,"Esercitazioni",-1),_3=e("ul",null,[e("li",null,[t("Per esercitarci usiamo anche una piattaforma didattica online che si chiama "),e("a",{href:"https://pwn.college",target:"_blank",rel:"noopener"},"PWN COLLEGE")])],-1),g3=e("img",{src:m3,width:"550",style:{margin:"auto",position:"relative",left:"0px",top:"20px"}},null,-1),v3={__name:"16",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[f3,h3,_3,g3]),_:1},16))}},b3=S(v3,[["__file","/@slidev/slides/16.md"]]),x3=e("h1",null,"Linux CLI",-1),k3=e("p",null,"Esercitazioni",-1),w3=e("ul",null,[e("li",null,"PWN COLLEGE è una piattaforma dedicata all’apprendimento e alla sperimentazione"),e("li",null,[t("Contiene un vasto curriculum su tutti i principali temi riguardanti la "),e("strong",null,"cyber security")]),e("li",null,"Linux ovviamente è un argomento fondamentale per affrontare anche i primi esercizi"),e("li",null,"Noi useremo principalmente la sezione dedicata all’apprendimento dei rudimenti della CLI di Linux")],-1),y3=e("br",null,null,-1),L3={__name:"17",setup(n){const s={};return I(E),(o,i)=>{const a=Ar;return b(),C(A,M(z(s)),{default:v(()=>[x3,k3,w3,R(a,{mt:"30px",padding:"30px"},{default:v(()=>[t(" Invito TUTTI gli studenti a sperimentare ed apprendere tramite il materiale fornito e tramite PWN COLLEGE."),y3,t(" Anche se all'inizio può risultare ostico, una volta entrati nella mentalità corretta sarà un modo divertente di apprendere e mettere a frutto le proprie capacità ")]),_:1})]),_:1},16)}}},I3=S(L3,[["__file","/@slidev/slides/17.md"]]),$3=e("h1",null,"Linux CLI",-1),C3=e("p",null,"Esercitazione cli_02",-1),E3=e("ul",null,[e("li",null,"Utilizzando l’email istituzionale creare un account su PWN COLLEGE"),e("li",null,"Consegnare su github uno screenshot che fa vedere al docente il tuo user name appena creato su PWN COLLEGE"),e("li",null,[t("Il file si deve chiamare "),e("em",null,"|congome|_pwncollege_account.(png|jpg)")])],-1),S3={__name:"18",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[$3,C3,E3]),_:1},16))}},R3=S(S3,[["__file","/@slidev/slides/18.md"]]),z3="/3/linux_cli/assets/cli_22-627ef7bb.png",T3=e("h1",null,"Linux CLI",-1),M3=e("p",null,"Esercitazione cli_03",-1),A3=e("ul",null,[e("li",null,[t("Svolgere il dojo "),e("a",{href:"https://pwn.college/welcome/",target:"_blank",rel:"noopener"},"Getting Started")]),e("li",null,[t("Leggere e visualizzare le due unità "),e("code",null,"Lectures and Reading")]),e("li",null,[t("Completare con successo tutte le 10 "),e("code",null,"Challenges")]),e("li",null,[t("Domande del docente sui temi trattati e sulle sezioni "),e("em",null,"Lectures and Reading")]),e("li",null,[t("Consegnare su github lo screenshot che dimostra il superamento delle 10 challenges con il seguente nome "),e("em",null,"|cognome|_dojo_03a.(png|jpg)")])],-1),O3=e("img",{src:z3,width:"450",style:{margin:"auto",position:"relative",left:"200px",top:"-20px"}},null,-1),P3={__name:"19",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[T3,M3,A3,O3]),_:1},16))}},D3=S(P3,[["__file","/@slidev/slides/19.md"]]),j3=e("h1",null,"Linux CLI",-1),N3=e("p",null,"Introduzione",-1),F3=e("ul",null,[e("li",null,"Gli ambienti desktop sono molto evoluti e permettono all’utente di svolgere qualsiasi funzione necessaria durante l’utilizzo convenzionale del PC con Linux, esattamente come avviene per un utente Windows o Mac"),e("li",null,"Oggi un utente Desktop Linux non sente la mancanza di nessuno strumento disponibile su Windows o Mac"),e("li",null,[t("Tuttavia per quanto un’ambiente possa essere evoluto, per sfruttare al meglio e al massimo le funzionalità di un sistema Linux è necessario utilizzare uno strumento imprescindibile che si chiama "),e("code",null,"CLI")])],-1),H3=e("p",null,[e("span",{class:"cli",style:{"font-size":"3rem",margin:"70px auto","text-align":"center",display:"block",width:"85%",color:"#00fe00",background:"black","line-height":"4rem",height:"4rem"}},"Command Line Interface")],-1),K3={__name:"20",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[j3,N3,F3,H3]),_:1},16))}},W3=S(K3,[["__file","/@slidev/slides/20.md"]]),B3="/3/linux_cli/assets/cli_01-79073bdb.png",q3=e("h1",null,"Linux CLI",-1),U3=e("p",null,"Introduzione",-1),V3=e("img",{src:B3,width:"750",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),G3={__name:"21",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[q3,U3,V3]),_:1},16))}},Y3=S(G3,[["__file","/@slidev/slides/21.md"]]),Q3="/3/linux_cli/assets/cli_02-be67e48e.png",Z3=e("h1",null,"Linux CLI",-1),J3=e("p",null,"Introduzione",-1),X3=e("ul",null,[e("li",null,"La Linea di Comando di Linux (Command Line Interface, CLI) è un’interfaccia testuale che consente agli utenti di comunicare direttamente con il sistema operativo Linux attraverso comandi testuali.")],-1),e4=e("img",{src:Q3,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),n4={__name:"22",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[Z3,J3,X3,e4]),_:1},16))}},t4=S(n4,[["__file","/@slidev/slides/22.md"]]),s4=e("h1",null,"Linux CLI",-1),o4=e("p",null,"Esercitazione cli_04",-1),i4=e("ul",null,[e("li",null,"Svolgere la seguente esercitazione (Quiz inclusi)")],-1),a4=e("br",null,null,-1),l4=e("p",null,[e("a",{href:"https://linuxjourney.com/lesson/kernel-overview",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/kernel-overview")],-1),r4=e("br",null,null,-1),c4=e("ul",null,[e("li",null,"Domande agli studenti sul contenuto dell’esercitazione")],-1),u4={__name:"23",setup(n){const s={};return I(E),(o,i)=>{const a=zn("center");return b(),C(A,M(z(s)),{default:v(()=>[s4,o4,i4,a4,R(a,null,{default:v(()=>[l4]),_:1}),r4,c4]),_:1},16)}}},p4=S(u4,[["__file","/@slidev/slides/23.md"]]),d4=e("h1",null,"Linux CLI",-1),m4=e("p",null,"Introduzione",-1),f4=e("ul",null,[e("li",null,"A differenza delle interfacce grafiche, che utilizzano icone e finestre, la CLI richiede l’uso di comandi testuali per eseguire operazioni sul sistema."),e("li",null,[t("La CLI di Linux offre numerosi vantaggi, tra cui: "),e("ul",null,[e("li",null,[t("il controllo più preciso e potente sul sistema ("),e("em",null,"root mode"),t(")")]),e("li",null,[t("crea i tuoi comandi per risolvere i tuoi problemi ("),e("em",null,"god mode"),t(")")]),e("li",null,[t("l’automazione delle attività ripetitive ("),e("em",null,"Productive laziness - Do it right, do it once. That’s the lazy option."),t(")")]),e("li",null,"la possibilità di lavorare in ambienti in cui le interfacce grafiche non sono disponibili (server remoti, sistemi embedded)."),e("li",null,"maggior velocità, flessibilità ed efficienza")])])],-1),h4={__name:"24",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[d4,m4,f4]),_:1},16))}},_4=S(h4,[["__file","/@slidev/slides/24.md"]]),g4=e("p",null," ",-1),v4={__name:"25",setup(n){const s={};return I(E),(o,i)=>{const a=ct;return b(),C(A,M(z(s)),{default:v(()=>[g4,R(a,{fs:"100px"},{default:v(()=>[t(" Cenni Storici ")]),_:1})]),_:1},16)}}},b4=S(v4,[["__file","/@slidev/slides/25.md"]]),x4="/3/linux_cli/assets/cli_16-36df4747.png",k4=e("h1",null,"Linux CLI",-1),w4=e("p",null,"Breve Storia",-1),y4=e("ul",null,[e("li",null,[t("La "),e("em",null,"Bourne Shell"),t(" (sh) è stata originariamente sviluppata da Stephen Bourne mentre lavorava ai Bell Labs.")]),e("li",null,"Rilasciato nel 1979 nella versione Unix versione 7 distribuita a college e università."),e("li",null,[t("La "),e("code",null,"Bourne Again Shell"),t(" ("),e("strong",null,"bash"),t(") è stata scritta come sostituto gratuito e open source della Bourne Shell.")]),e("li",null,"Data la natura aperta di Bash, nel tempo è stata adottata come shell predefinita sulla maggior parte dei sistemi Linux."),e("li",null,[t("Esistono molte altre shell (csh, ksh) ed in epoca più moderna "),e("strong",null,"zsh"),t(" e "),e("strong",null,"fish")])],-1),L4=e("img",{src:x4,width:"800",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),I4={__name:"26",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[k4,w4,y4,L4]),_:1},16))}},$4=S(I4,[["__file","/@slidev/slides/26.md"]]),C4="/3/linux_cli/assets/cli_04-092808b1.png",E4=e("h1",null,"Linux CLI",-1),S4=e("img",{src:C4,width:"700",style:{margin:"auto",position:"relative",left:"0px",top:"-10px"}},null,-1),R4={__name:"27",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[E4,S4]),_:1},16))}},z4=S(R4,[["__file","/@slidev/slides/27.md"]]),T4="/3/linux_cli/assets/cli_03-dd7d6ef3.png",M4=e("h1",null,"Linux CLI",-1),A4=e("img",{src:T4,width:"600",style:{margin:"auto",position:"relative",left:"0px",top:"-10px"}},null,-1),O4={__name:"28",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[M4,A4]),_:1},16))}},P4=S(O4,[["__file","/@slidev/slides/28.md"]]),D4=e("p",null," ",-1),j4={__name:"29",setup(n){const s={};return I(E),(o,i)=>{const a=ct;return b(),C(A,M(z(s)),{default:v(()=>[D4,R(a,{fs:"100px"},{default:v(()=>[t(" Concetti Chiave ")]),_:1})]),_:1},16)}}},N4=S(j4,[["__file","/@slidev/slides/29.md"]]),F4="/3/linux_cli/assets/cli_05-ad4cc1fd.png",H4=e("h1",null,"Linux CLI",-1),K4=e("div",{style:{width:"50%"}},[e("p",null,"Ecco alcuni concetti chiave relativi alla CLI di Linux:"),e("ul",null,[e("li",null,[e("strong",null,"Terminale"),t(": Il terminale è l’ambiente in cui vengono inseriti i comandi. E’ un’applicazione che fornisce un’interfaccia testuale per interagire con il sistema operativo. Mostra un prompt, di solito indicato dal simbolo del dollaro ($) per gli utenti normali e dal cancelletto (#) per l’utente root con privilegi amministrativi.")]),e("li",null,[e("strong",null,"Comandi"),t(": I comandi sono le istruzioni testuali che vengono inserite nel terminale per eseguire azioni specifiche. Un comando è generalmente composto da un nome di comando seguito da argomenti e opzioni. Ad esempio, il comando ls -l elenca i file e le directory con dettagli.")])])],-1),W4=e("img",{src:F4,width:"450",style:{margin:"auto",position:"relative",left:"250px",top:"-450px"}},null,-1),B4={__name:"30",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[H4,K4,W4]),_:1},16))}},q4=S(B4,[["__file","/@slidev/slides/30.md"]]),U4=e("h1",null,"Linux CLI",-1),V4=e("p",null,"File System",-1),G4=e("div",{style:{width:"50%"}},[e("p",null,[e("strong",null,"File System"),t(":")]),e("ul",null,[e("li",null,"Linux organizza file e directory in una struttura ad albero chiamata file system."),e("li",null,'Il file system di Linux segue la filosofia "tutto è un file", che significa che anche le periferiche hardware sono rappresentate come file.')]),e("p",null,[e("strong",null,"Path"),t(":")]),e("ul",null,[e("li",null,"Il percorso è la posizione di un file o di una directory all’interno del File System."),e("li",null,"Il percorso assoluto inizia dalla radice del sistema (/)"),e("li",null,"Il percorso relativo si basa sulla posizione corrente.")])],-1),Y4={style:{width:"50%",position:"relative",top:"-490px",left:"450px"}},Q4=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("❯❯❯ tree "),e("span",{class:"token parameter variable"},"-L"),t(),e("span",{class:"token number"},"1"),t(" /")]),t(`
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
`),e("span",{class:"line"},[e("span",{class:"token number"},"22"),t(" directories, "),e("span",{class:"token number"},"0"),t(" files")])])],-1),Z4={__name:"31",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[U4,V4,G4,e("div",Y4,[R(a,G({},{ranges:[""]}),{default:v(()=>[Q4]),_:1},16)])]),_:1},16)}}},J4=S(Z4,[["__file","/@slidev/slides/31.md"]]),X4=e("h1",null,"Linux CLI",-1),eC=e("p",null,"File System",-1),nC=e("p",null,[e("strong",null,"/bin"),t(": è la directory che contiene i file binari, ovvero alcune applicazioni e programmi che è possibile eseguire. Troverai il programma ls menzionato sopra in questa directory, così come altri strumenti di base per creare e rimuovere file e directory, spostarli e così via.")],-1),tC=e("p",null,[e("strong",null,"/boot"),t(": contiene i file necessari per avviare il sistema. Il boot loader, il kernel etc… "),e("mark",null,"NON TOCCARE"),t(" Modificando i file contenuti in questa directory potresti non essere in grado di riavviare correttamente Linux")],-1),sC=e("p",null,[e("strong",null,"/dev"),t(": contiene i file dei dispositivi logici e HW (terminale, console, SSD, scheda video, scheda di rete, …). Molti di questi vengono generati all’avvio o addirittura al volo. Ad esempio, se colleghi una nuova webcam o una chiavetta USB al tuo computer, una nuova voce relativa al dispositivo verrà automaticamente visualizzata qui.")],-1),oC=e("p",null,[e("strong",null,"/etc"),t(": è la directory che contiene la maggior parte, se non tutti, i file di configurazione a livello di sistema. Ad esempio, i file che contengono il nome del tuo sistema, gli utenti e le loro password, i nomi delle macchine sulla tua rete e quando e dove dovrebbero essere montate le partizioni sui tuoi dischi rigidi sono tutti qui. E’ una directory da "),e("mark",null,"MANEGGIARE CON CURA"),t(".")],-1),iC={__name:"32",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[X4,eC,nC,tC,sC,oC]),_:1},16))}},aC=S(iC,[["__file","/@slidev/slides/32.md"]]),lC=e("h1",null,"Linux CLI",-1),rC=e("p",null,"File System",-1),cC=e("p",null,[e("strong",null,"/home"),t(": contiene le directory personali degli utenti del sistema. Normalmente il nome della directory coincide con il nome dell’utente (utente "),e("em",null,"antonio"),t(", home dir: "),e("em",null,"/home/antonio"),t(")")],-1),uC=e("p",null,[e("strong",null,"/lib o /usr/lib"),t(": contiene le librerie di sistema che permettono l’esecuzione degli applicativi, della shell ed in genere di tutti i programmi che girano sul PC. In breve contengono frammenti di codice utilizzati dalle applicazioni per disegnare finestre sul desktop, controllare le periferiche o inviare file al disco rigido.")],-1),pC=e("p",null,[t("Una sotto directory importantissima è "),e("em",null,"modules"),t(" contiene gli importantissimi moduli del kernel. I moduli del kernel sono driver che fanno funzionare cose come la scheda video, la scheda audio, il WiFi, la stampante e così via.")],-1),dC=e("p",null,[e("strong",null,"/media"),t(": è dove la memoria esterna verrà montata automaticamente quando la colleghi e provi ad accedervi (pendrive, dischi USB, schede SD, ecc.)")],-1),mC=e("p",null,[e("strong",null,"/mnt"),t(": luogo dove monterai manualmente i dispositivi di archiviazione o le partizioni.")],-1),fC={__name:"33",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[lC,rC,cC,uC,pC,dC,mC]),_:1},16))}},hC=S(fC,[["__file","/@slidev/slides/33.md"]]),_C=e("h1",null,"Linux CLI",-1),gC=e("p",null,"File System",-1),vC=e("p",null,[e("strong",null,"/opt"),t(": contiene tradizionalmente il software opzionale, non di sistema, spesso quello installato dall’utente. Le applicazioni finiranno nella directory /opt/bin e le librerie nella directory /opt/lib.")],-1),bC=e("p",null,"Un’altra directory in cui finiscono applicazioni opzionali e librerie è /usr/local. Quando il software viene installato qui, ci saranno anche le directory /usr/local/bin e /usr/local/lib. Ciò che determina quale software va dove è il modo in cui gli sviluppatori hanno configurato i file che controllano il processo di compilazione e installazione.",-1),xC=e("p",null,[e("strong",null,"/proc"),t(": come /dev, è una directory virtuale. Contiene informazioni sul tuo computer, come informazioni sulla CPU, sul kernel su cui è in esecuzione il tuo sistema Linux, sui processi che stanno girando, sulla rete, … Come con /dev, i file e le directory vengono generati all’avvio del computer o al volo, mentre il sistema è in esecuzione e le cose cambiano.")],-1),kC=e("p",null,[e("strong",null,"/root"),t(": è la directory home del "),e("strong",null,"superutente"),t(),e("mark",null,"root"),t(' (noto anche come "Amministratore") del sistema. È separato dal resto delle directory home degli utenti in quanto non è un utente normale.')],-1),wC={__name:"34",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[_C,gC,vC,bC,xC,kC]),_:1},16))}},yC=S(wC,[["__file","/@slidev/slides/34.md"]]),LC=e("h1",null,"Linux CLI",-1),IC=e("p",null,"File System",-1),$C=e("p",null,[e("strong",null,"/run"),t(": è una directory utilizzata dai processi di sistema per archiviare dati temporanei utili all’esecuzione. Questa è un’altra di quelle cartelle da "),e("mark",null,"NON TOCCARE"),t(".")],-1),CC=e("p",null,[e("strong",null,"/sbin o /usr/bin"),t(": è simile a /bin, ma contiene applicazioni di cui avrà bisogno solo il superutente (da qui la "),e("strong",null,"s"),t(" iniziale). Pertanto le applicazioni qui contenute possono essere eseguite solo da root o dagli utenti a cui viene concesso un permesso temporaneo. Come puoi immaginare, alcune di queste istruzioni sono letali se le usi in modo improprio, quindi "),e("mark",null,"MANEGGIALE CON CURA"),t(".")],-1),EC=e("p",null,[e("strong",null,"/srv"),t(": la directory contiene dati per i server. Oggi tendenzialmente vuota.")],-1),SC=e("p",null,[e("strong",null,"/sys"),t(": è un’altra directory virtuale come /proc e /dev e contiene anche informazioni dai dispositivi collegati al tuo computer.")],-1),RC=e("p",null,[t("In alcuni casi puoi anche manipolare questi dispositivi. Posso, ad esempio, cambiare la luminosità dello schermo del mio portatile modificando il valore memorizzato in /sys/devices/pci0000:00/0000:00:02.0/drm/card0/card0-eDP-1/intel_backlight.Anche per questa directory è consigliato di "),e("mark",null,"NON TOCCARE"),t(" finché non sei sicuro di sapere esattamente cosa stai facendo.")],-1),zC={__name:"35",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[LC,IC,$C,CC,EC,SC,RC]),_:1},16))}},TC=S(zC,[["__file","/@slidev/slides/35.md"]]),MC=e("h1",null,"Linux CLI",-1),AC=e("p",null,"File System",-1),OC=e("p",null,[e("strong",null,"/tmp"),t(": contiene file temporanei, solitamente inseriti lì dalle applicazioni in esecuzione. I file e le directory spesso contengono dati di cui un’applicazione non ha bisogno in questo momento, ma che potrebbe aver bisogno in seguito. Puoi anche usare /tmp per archiviare i tuoi file temporanei: /tmp è una delle poche directory appese / con cui puoi effettivamente interagire senza diventare superutente.")],-1),PC=e("p",null,[e("strong",null,"/usr"),t(": conteneva le directory utente quando /home non esisteva. Al giorno d’oggi, /usr contiene un miscuglio di directory che a loro volta contengono applicazioni, librerie, documentazione, sfondi, icone e un lungo elenco di altre cose che devono essere condivise da applicazioni e servizi.")],-1),DC=e("p",null,[e("strong",null,"/var"),t(": è stato originariamente dato questo nome perché il suo contenuto era considerato variabile, nel senso che cambiava frequentemente. Oggi è un termine un po’ improprio perché ci sono molte altre directory che contengono dati che cambiano frequentemente, soprattutto le directory virtuali che abbiamo visto sopra. Comunque sia, /var contiene cose come i log di sistema e delle applicazioni, lo spool della stampante, ed altri tipi di dati. Alcuni web server impostano la document root di default in /var/www")],-1),jC={__name:"36",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[MC,AC,OC,PC,DC]),_:1},16))}},NC=S(jC,[["__file","/@slidev/slides/36.md"]]),FC="/3/linux_cli/assets/cli_06-72f0f737.png",HC=e("h1",null,"Linux CLI",-1),KC=e("p",null,"File System",-1),WC=e("div",{style:{width:"50%"}},[e("p",null,[t("Il percorso "),e("code",null,"ASSOLUTO"),t(" del file "),e("em",null,"README.md"),t(" è:")]),e("p",null,[e("code",null,"/home/antonio/SARP/README.md")]),e("ul",null,[e("li",null,[e("strong",null,"/"),t(" ("),e("em",null,"root directory, radice dell’albero del filesystem"),t(")")]),e("li",null,[e("strong",null,"home"),t(": sotto directory di /")]),e("li",null,[e("strong",null,"antonio"),t(": sotto directory di home")]),e("li",null,[e("strong",null,"SARP"),t(": sotto directory di antonio")]),e("li",null,[e("strong",null,"README.md"),t(": file di testo ("),e("em",null,"foglia dell’albero"),t(")")])])],-1),BC=e("img",{src:FC,width:"450",style:{margin:"auto",position:"relative",left:"250px",top:"-350px"}},null,-1),qC={__name:"37",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[HC,KC,WC,BC]),_:1},16))}},UC=S(qC,[["__file","/@slidev/slides/37.md"]]),VC=e("h1",null,"Linux CLI",-1),GC=e("p",null,"File System",-1),YC=e("p",null,[t("In ogni directory ci sono due directory speciali "),e("code",null,"."),t(" e "),e("code",null,"..")],-1),QC=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("❯❯❯ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t("                           ")]),t(`
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
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio "),e("span",{class:"token number"},"222693"),t(" ago "),e("span",{class:"token number"},"29"),t(),e("span",{class:"token number"},"10"),t(":24 cover.png")])])],-1),ZC={__name:"38",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[VC,GC,YC,R(a,G({},{ranges:[""]}),{default:v(()=>[QC]),_:1},16)]),_:1},16)}}},JC=S(ZC,[["__file","/@slidev/slides/38.md"]]),XC="/3/linux_cli/assets/cli_07-8bb6e8e1.png",e6=e("h1",null,"Linux CLI",-1),n6=e("p",null,"File System",-1),t6=e("div",{style:{width:"50%"}},[e("p",null,[t("Il percorso "),e("code",null,"RELATIVO"),t(" alla home del file "),e("em",null,"README.md"),t(" è:")]),e("p",null,[e("code",null,"./SARP/README.md"),t(" o "),e("code",null,"SARP/README.md")]),e("ul",null,[e("li",null,[e("strong",null,"."),t(": directory corrente (antonio)")]),e("li",null,[e("strong",null,"SARP"),t(": sotto directory di antonio")]),e("li",null,[e("strong",null,"README.md"),t(": file di testo ("),e("em",null,"foglia dell’albero"),t(")")])])],-1),s6=e("img",{src:XC,width:"450",style:{margin:"auto",position:"relative",left:"250px",top:"-370px"}},null,-1),o6={__name:"39",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[e6,n6,t6,s6]),_:1},16))}},i6=S(o6,[["__file","/@slidev/slides/39.md"]]),a6=e("h1",null,"Linux CLI",-1),l6=e("p",null,"Esercitazione cli_05",-1),r6=e("ul",null,[e("li",null,"Svolgere la seguente esercitazione (Quiz inclusi)")],-1),c6=e("br",null,null,-1),u6=e("p",null,[e("a",{href:"https://linuxjourney.com/lesson/filesystem-hierarchy",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/filesystem-hierarchy")],-1),p6=e("br",null,null,-1),d6=e("ul",null,[e("li",null,"Svolgere i punti dal 1 al 6 e il punto 9"),e("li",null,"Domande agli studenti sul contenuto dell’esercitazione")],-1),m6={__name:"40",setup(n){const s={};return I(E),(o,i)=>{const a=zn("center");return b(),C(A,M(z(s)),{default:v(()=>[a6,l6,r6,c6,R(a,null,{default:v(()=>[u6]),_:1}),p6,d6]),_:1},16)}}},f6=S(m6,[["__file","/@slidev/slides/40.md"]]),h6=e("h1",null,"Linux CLI",-1),_6=e("p",null,"Esercitazione cli_06",-1),g6=e("ul",null,[e("li",null,[t("Svolgere i seguenti moduli del dojo "),e("a",{href:"https://pwn.college/linux-luminarium/",target:"_blank",rel:"noopener"},"Linux Luminarium"),e("ul",null,[e("li",null,[e("a",{href:"https://pwn.college/linux-luminarium/hello/",target:"_blank",rel:"noopener"},"Hello Hackers")]),e("li",null,[e("a",{href:"https://pwn.college/linux-luminarium/paths/",target:"_blank",rel:"noopener"},"Pondering Paths")]),e("li",null,[e("a",{href:"https://pwn.college/linux-luminarium/path/",target:"_blank",rel:"noopener"},"Pondering PATH")])])]),e("li",null,[t("Leggere e visualizzare le due unità "),e("code",null,"Lectures and Reading")]),e("li",null,[t("Completare con successo tutte le 15 "),e("code",null,"Challenges")]),e("li",null,[t("Domande del docente sui temi trattati e sulle sezioni "),e("em",null,"Lectures and Reading")]),e("li",null,[t("Consegnare su github 3 screenshots che dimostrano il superamento delle 15 challenges con i seguenti nomi: "),e("ul",null,[e("li",null,[e("em",null,"|cognome|_dojo_linux_06a.(png|jpg)")]),e("li",null,[e("em",null,"|cognome|_dojo_linux_06b.(png|jpg)")]),e("li",null,[e("em",null,"|cognome|_dojo_linux_06c.(png|jpg)")])])])],-1),v6={__name:"41",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[h6,_6,g6]),_:1},16))}},b6=S(v6,[["__file","/@slidev/slides/41.md"]]),x6="/3/linux_cli/assets/cli_08-9461a39d.png",k6=e("h1",null,"Linux CLI",-1),w6=e("p",null," ",-1),y6=e("p",null,"Ecco alcuni concetti chiave relativi alla CLI di Linux:",-1),L6=e("ul",null,[e("li",null,[e("strong",null,"Utenti"),t(": Linux utilizza un sistema di autorizzazioni basato su "),e("code",null,"utenti"),t(" e "),e("code",null,"gruppi"),t(" univoci per controllare l’accesso ai file e alle risorse del sistema (ricorda "),e("em",null,"everything is a file"),t("). "),e("ul",null,[e("li",null,[t("L’utente "),e("strong",null,"root"),t(" ha privilegi amministrativi completi ("),e("em",null,"god"),t("), mentre gli utenti normali hanno "),e("strong",null,"accesso limitato"),t(".")]),e("li",null,"Ogni utente appartiene ad uno o più gruppi")])])],-1),I6=e("img",{src:x6,width:"500",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),$6={__name:"42",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[k6,w6,y6,L6,I6]),_:1},16))}},C6=S($6,[["__file","/@slidev/slides/42.md"]]),E6="/3/linux_cli/assets/cli_09-f59b3cee.png",S6=e("h1",null,"Linux CLI",-1),R6=e("ul",null,[e("li",null,[e("strong",null,"Permessi"),t(": Ogni gruppo ed ogni utente ha una serie di permessi su ogni risorsa (file). Con questo livello di granularità è possibile creare policy dei permessi molto dettagliate e garantire la sicurezza del sistema operativo ("),e("em",null,"es: non voglio che l’utente Jon possa leggere i miei file"),t(")")])],-1),z6=e("img",{src:E6,width:"950",style:{margin:"auto",position:"relative",left:"0px",top:"10px"}},null,-1),T6={__name:"43",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[S6,R6,z6]),_:1},16))}},M6=S(T6,[["__file","/@slidev/slides/43.md"]]),A6="/3/linux_cli/assets/cli_10-6d8791bc.png",O6=e("h1",null,"Linux CLI",-1),P6=e("img",{src:A6,width:"950",style:{margin:"auto",position:"relative",left:"0px",top:"80px"}},null,-1),D6={__name:"44",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[O6,P6]),_:1},16))}},j6=S(D6,[["__file","/@slidev/slides/44.md"]]),N6="/3/linux_cli/assets/c_04-0db3cc85.jpg",F6=e("h1",null,"Linux CLI",-1),H6=e("img",{src:N6,width:"450",style:{margin:"auto",position:"relative",left:"0px",top:"-50px"}},null,-1),K6={__name:"45",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[F6,H6]),_:1},16))}},W6=S(K6,[["__file","/@slidev/slides/45.md"]]),B6="/3/linux_cli/assets/cli_11-d5d854a8.png",q6=e("h1",null,"Linux CLI",-1),U6=e("img",{src:B6,width:"950",style:{margin:"auto",position:"relative",left:"0px",top:"50px"}},null,-1),V6={__name:"46",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[q6,U6]),_:1},16))}},G6=S(V6,[["__file","/@slidev/slides/46.md"]]),Y6=e("h1",null,"Linux CLI",-1),Q6=e("p",null,"Esercitazione cli_07",-1),Z6=e("ul",null,[e("li",null,"Svolgere la seguente esercitazione (Quiz inclusi)")],-1),J6=e("br",null,null,-1),X6=e("p",null,[e("a",{href:"https://linuxjourney.com/lesson/users-and-groups",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/users-and-groups")],-1),e5=e("br",null,null,-1),n5=e("ul",null,[e("li",null,"Domande agli studenti sul contenuto dell’esercitazione")],-1),t5={__name:"47",setup(n){const s={};return I(E),(o,i)=>{const a=zn("center");return b(),C(A,M(z(s)),{default:v(()=>[Y6,Q6,Z6,J6,R(a,null,{default:v(()=>[X6]),_:1}),e5,n5]),_:1},16)}}},s5=S(t5,[["__file","/@slidev/slides/47.md"]]),o5=e("h1",null,"Linux CLI",-1),i5=e("p",null,"Esercitazione cli_08",-1),a5=e("ul",null,[e("li",null,"Svolgere la seguente esercitazione (Quiz inclusi)")],-1),l5=e("br",null,null,-1),r5=e("p",null,[e("a",{href:"https://linuxjourney.com/lesson/file-permissions",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/file-permissions")],-1),c5=e("br",null,null,-1),u5=e("ul",null,[e("li",null,"Svolgere i primi 3 punti"),e("li",null,"Domande agli studenti sul contenuto dell’esercitazione")],-1),p5={__name:"48",setup(n){const s={};return I(E),(o,i)=>{const a=zn("center");return b(),C(A,M(z(s)),{default:v(()=>[o5,i5,a5,l5,R(a,null,{default:v(()=>[r5]),_:1}),c5,u5]),_:1},16)}}},d5=S(p5,[["__file","/@slidev/slides/48.md"]]),m5=e("h1",null,"Linux CLI",-1),f5=e("p",null," ",-1),h5=e("p",null,"Ecco alcuni concetti chiave relativi alla CLI di Linux:",-1),_5=e("p",null,[e("strong",null,"Completamento del Tab"),t(": Puoi premere il tasto Tab per completare automaticamente nomi di file, directory e comandi. Questa funzionalità aiuta a risparmiare tempo e riduce gli errori di battitura.")],-1),g5=e("p",null,[t("In shell moderne come "),e("em",null,"zsh"),t(" e "),e("em",null,"fish"),t(" il tab può anche completare i comandi e il manuale di sistema")],-1),v5={__name:"49",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[m5,f5,h5,_5,g5]),_:1},16))}},b5=S(v5,[["__file","/@slidev/slides/49.md"]]),x5="/3/linux_cli/assets/cli_12-d3515f38.gif",k5=e("h1",null,"Linux CLI",-1),w5=e("img",{src:x5,width:"700",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),y5={__name:"50",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[k5,w5]),_:1},16))}},L5=S(y5,[["__file","/@slidev/slides/50.md"]]),I5=e("h1",null,"Linux CLI",-1),$5=e("p",null," ",-1),C5=e("p",null,"Ecco alcuni concetti chiave relativi alla CLI di Linux:",-1),E5=e("p",null,[e("strong",null,"Redirezione"),t(": Puoi redirigere l’output di un comando su file utilizzando i simboli > o >>")],-1),S5=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"echo"),t(),e("span",{class:"token string"},'"ciao io sono Linux"')]),t(`
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
`),e("span",{class:"line"},"ed io sono Babbo Natale")])],-1),R5={__name:"51",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[I5,$5,C5,E5,R(a,G({},{ranges:[""]}),{default:v(()=>[S5]),_:1},16)]),_:1},16)}}},z5=S(R5,[["__file","/@slidev/slides/51.md"]]),T5=e("p",null," ",-1),M5={__name:"52",setup(n){const s={};return I(E),(o,i)=>{const a=ct;return b(),C(A,M(z(s)),{default:v(()=>[T5,R(a,{fs:"100px"},{default:v(()=>[t(" La Filosofia Unix ")]),_:1})]),_:1},16)}}},A5=S(M5,[["__file","/@slidev/slides/52.md"]]),O5="/3/linux_cli/assets/cli_12-63718bf4.png",P5=e("h1",null,"Linux CLI",-1),D5=e("img",{src:O5,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"100px"}},null,-1),j5={__name:"53",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[P5,D5]),_:1},16))}},N5=S(j5,[["__file","/@slidev/slides/53.md"]]),F5="/3/linux_cli/assets/cli_13-758ca9e1.png",H5=e("h1",null,"Linux CLI",-1),K5=e("p",null,"Filosofia Linux",-1),W5=e("p",null,[e("a",{href:"http://www.catb.org/esr/writings/taoup/html/ch01s06.html",target:"_blank",rel:"noopener"},"La filosofia di Unix"),t(" (in inglese: Unix philosophy) è una metodologia di sviluppo del software proposta nel 1969 da Ken Thompson e adottata dagli sviluppatori del sistema operativo Unix e Linux")],-1),B5=e("br",null,null,-1),q5=e("img",{src:F5,width:"250",style:{margin:"auto",position:"relative",left:"0px",top:"10px"}},null,-1),U5={__name:"54",setup(n){const s={};return I(E),(o,i)=>{const a=Ar;return b(),C(A,M(z(s)),{default:v(()=>[H5,K5,W5,B5,R(a,{padding:"30px"},{default:v(()=>[t(" Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams, because that is a universal interface. (Doug McIlroy) ")]),_:1}),q5]),_:1},16)}}},V5=S(U5,[["__file","/@slidev/slides/54.md"]]),G5=e("p",null," ",-1),Y5={__name:"55",setup(n){const s={};return I(E),(o,i)=>{const a=ct;return b(),C(A,M(z(s)),{default:v(()=>[G5,R(a,{fs:"100px"},{default:v(()=>[t(" Le Pipe ")]),_:1})]),_:1},16)}}},Q5=S(Y5,[["__file","/@slidev/slides/55.md"]]),Z5=e("h1",null,"Linux CLI",-1),J5=e("p",null," ",-1),X5=e("p",null,[e("strong",null,"Pipe"),t(": (Doug McIlroy) La pipe "),e("code",null,"|"),t(" permette di concatenare più comandi shell insieme per creare un nuovo comando che risolve un problema specifico. Il concetto è che l’output di un programma viene utilizzato come input di un altro comando. Questo concetto è un meccanismo "),e("strong",null,"POTENTISSIMO"),t(" che rende la CLI di Unix/Linux infinitamente potente e flessibile")],-1),e9=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file.txt")]),t(`
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
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")])])],-1),n9={__name:"56",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[Z5,J5,X5,R(a,G({},{ranges:[""]}),{default:v(()=>[e9]),_:1},16)]),_:1},16)}}},t9=S(n9,[["__file","/@slidev/slides/56.md"]]),s9="/3/linux_cli/assets/cli_14-68d0e0fd.png",o9=e("h1",null,"Linux CLI",-1),i9=e("p",null," ",-1),a9=e("p",null,[e("strong",null,"Domanda"),t(": Qual’è il comando che mi permette di ottenere una lista di numeri univoci ordinati in senso crescente partendo da file.txt? "),e("strong",null,"Risposta"),t(": NON ESISTE")],-1),l9=e("p",null,"Ma niente paura, possiamo creare noi stessi questo comando a partire da comandi esistenti e quindi risolvere il problema. Una volta appreso questo concetto, si dimostrerà un meccanismo incredibilmente potente",-1),r9=e("img",{src:s9,width:"850",style:{margin:"auto",position:"relative",left:"0px",top:"10px"}},null,-1),c9={__name:"57",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[o9,i9,a9,l9,r9]),_:1},16))}},u9=S(c9,[["__file","/@slidev/slides/57.md"]]),p9="/3/linux_cli/assets/cli_15-17e5f5b0.png",d9=e("h1",null,"Linux CLI",-1),m9=e("p",null," ",-1),f9=e("ul",null,[e("li",null,"Proviamo ad implementare la pipeline descritta prima con comandi linux"),e("li",null,[t("La prima cosa dobbiamo leggere il file, quindi usiamo il comando "),e("code",null,"cat"),t(" che prende in input il nome del file e genera in output la lettura del file")]),e("li",null,[t("Questo output (lista di numeri non ordinati e duplicati) viene preso in input dal comando "),e("code",null,"sort"),t(" che in output produce l’input ma ordinato")]),e("li",null,[t("A questo punto avremo una lista di numeri ordinati ma ancora duplicati, quindi forniamo questa lista in input al comando "),e("code",null,"uniq"),t(" che in output rimuove tutti i numeri duplicati")]),e("li",null,"In questo modo all’output della pipeline avremo una lista di numeri ordinati ed univoci, che è esattamente la soluzione al problema posto")],-1),h9=e("img",{src:p9,width:"500",style:{margin:"auto",position:"relative",left:"100px",top:"-40px"}},null,-1),_9={__name:"58",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[d9,m9,f9,h9]),_:1},16))}},g9=S(_9,[["__file","/@slidev/slides/58.md"]]),v9=e("h1",null,"Linux CLI",-1),b9=e("p",null," ",-1),x9=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file.txt  "),e("span",{class:"token comment"},"# prende in input il file e in output lo stampa")]),t(`
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
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")])])],-1),k9={__name:"59",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[v9,b9,R(a,G({},{ranges:[""]}),{default:v(()=>[x9]),_:1},16)]),_:1},16)}}},w9=S(k9,[["__file","/@slidev/slides/59.md"]]),y9=e("h1",null,"Linux CLI",-1),L9=e("p",null," ",-1),I9=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# l'output di cat viene usato come input da sort che in output stampa il file ordinato")]),t(`
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
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")])])],-1),$9={__name:"60",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[y9,L9,R(a,G({},{ranges:[""]}),{default:v(()=>[I9]),_:1},16)]),_:1},16)}}},C9=S($9,[["__file","/@slidev/slides/60.md"]]),E9=e("h1",null,"Linux CLI",-1),S9=e("p",null," ",-1),R9=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# l'output ordinato di sort viene preso in input da uniq che in output elimina le occorrenze multiple")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file.txt "),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"sort"),t(),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"uniq")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"5")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")])])],-1),z9={__name:"61",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[E9,S9,R(a,G({},{ranges:[""]}),{default:v(()=>[R9]),_:1},16)]),_:1},16)}}},T9=S(z9,[["__file","/@slidev/slides/61.md"]]),M9=e("h1",null,"Linux CLI",-1),A9=e("p",null," ",-1),O9=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# l'output della pipeline viene rediretto e quindi scritto sul file file_ord.txt")]),t(`
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
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# abbiamo così creato un nuovo comando che risolve esattamente il nostro problema")])])],-1),P9={__name:"62",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[M9,A9,R(a,G({},{ranges:[""]}),{default:v(()=>[O9]),_:1},16)]),_:1},16)}}},D9=S(P9,[["__file","/@slidev/slides/62.md"]]),j9=e("h1",null,"Linux CLI",-1),N9=e("p",null,"Esercitazione cli_09",-1),F9=e("ul",null,[e("li",null,[t("Svolgere i seguenti moduli del dojo "),e("a",{href:"https://pwn.college/linux-luminarium/",target:"_blank",rel:"noopener"},"Linux Luminarium"),e("ul",null,[e("li",null,[e("a",{href:"https://pwn.college/linux-luminarium/piping/",target:"_blank",rel:"noopener"},"Practicing Piping")])])]),e("li",null,[t("Leggere e visualizzare le due unità "),e("code",null,"Lectures and Reading")]),e("li",null,[t("Completare con successo tutte le 11 "),e("code",null,"Challenges")]),e("li",null,[t("Domande del docente sui temi trattati e sulle sezioni "),e("em",null,"Lectures and Reading")]),e("li",null,[t("Consegnare su su github uno screenshot che dimostra il superamento delle 11 challenges con il seguente nome: "),e("ul",null,[e("li",null,[e("em",null,"|cognome|_dojo_linux_09a.(png|jpg)")])])])],-1),H9={__name:"63",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[j9,N9,F9]),_:1},16))}},K9=S(H9,[["__file","/@slidev/slides/63.md"]]),W9=e("h1",null,"Linux CLI",-1),B9=e("p",null," ",-1),q9=e("ul",null,[e("li",null,[t("La CLI di Linux offre una vasta gamma di comandi per eseguire varie attività, tra cui: "),e("ul",null,[e("li",null,"la navigazione del sistema di file"),e("li",null,"la gestione dei processi"),e("li",null,"la configurazione di rete"),e("li",null,"la gestione degli utenti"),e("li",null,"…e molto altro.")])])],-1),U9=e("p",null,"Vediamo ora i principali comandi base per poter iniziare ad usare Linux in modo efficiente ed agevole dalla linea di comando",-1),V9={__name:"64",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[W9,B9,q9,U9]),_:1},16))}},G9=S(V9,[["__file","/@slidev/slides/64.md"]]),Y9=e("h1",null,"Linux CLI",-1),Q9=e("p",null,"Sintassi Generale",-1),Z9=e("ul",null,[e("li",null,"I comandi possono essere eseguiti da soli o possono accettare argomenti per alterarne il comportamento.")],-1),J9=e("p",null,"Una sintassi tipica può essere simile a questa:",-1),X9=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("comando "),e("span",{class:"token punctuation"},"["),t("-argomento"),e("span",{class:"token punctuation"},"]"),t(),e("span",{class:"token punctuation"},"["),t("--argomento-lungo"),e("span",{class:"token punctuation"},"]"),t(),e("span",{class:"token function"},"file")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-l"),t(),e("span",{class:"token parameter variable"},"-a"),t(" - h")])])],-1),eE=e("br",null,null,-1),nE=e("ul",null,[e("li",null,[e("strong",null,"ls"),t(" è il nome del comando (list)")]),e("li",null,"-l è un parametro che modifica l’output di ls in modo da visualizzare una lista di file uno per ogni riga"),e("li",null,"-a è un parametro che indica ad ls di far vedere tutti i file anche quelli nascosti (come . e …)"),e("li",null,"-h è un parametro che dice a ls di visualizzare un output facilmente leggibile da un umano(stampa la dimensione del file in un formato leggibile dall’uomo)")],-1),tE={__name:"65",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[Y9,Q9,Z9,J9,R(a,G({},{ranges:[""]}),{default:v(()=>[X9]),_:1},16),eE,nE]),_:1},16)}}},sE=S(tE,[["__file","/@slidev/slides/65.md"]]),oE=e("p",null," ",-1),iE={__name:"66",setup(n){const s={};return I(E),(o,i)=>{const a=ct;return b(),C(A,M(z(s)),{default:v(()=>[oE,R(a,{fs:"100px"},{default:v(()=>[t(" Indice dei Comandi ")]),_:1})]),_:1},16)}}},aE=S(iE,[["__file","/@slidev/slides/66.md"]]),lE="/3/linux_cli/assets/cli_17-cc02eb38.png",rE=e("h1",null,"Linux CLI",-1),cE=e("img",{src:lE,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"-20px"}},null,-1),uE={__name:"67",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[rE,cE]),_:1},16))}},pE=S(uE,[["__file","/@slidev/slides/67.md"]]),dE="/3/linux_cli/assets/cli_18-9dbf9d0f.png",mE=e("h1",null,"Linux CLI",-1),fE=e("img",{src:dE,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"-20px"}},null,-1),hE={__name:"68",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[mE,fE]),_:1},16))}},_E=S(hE,[["__file","/@slidev/slides/68.md"]]),gE="/3/linux_cli/assets/cli_19-379d852a.png",vE=e("h1",null,"Linux CLI",-1),bE=e("img",{src:gE,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),xE={__name:"69",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[vE,bE]),_:1},16))}},kE=S(xE,[["__file","/@slidev/slides/69.md"]]),wE="/3/linux_cli/assets/cli_20-d498d8d9.png",yE=e("h1",null,"Linux CLI",-1),LE=e("img",{src:wE,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),IE={__name:"70",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[yE,LE]),_:1},16))}},$E=S(IE,[["__file","/@slidev/slides/70.md"]]),CE=e("p",null," ",-1),EE={__name:"71",setup(n){const s={};return I(E),(o,i)=>{const a=ct;return b(),C(A,M(z(s)),{default:v(()=>[CE,R(a,{fs:"100px"},{default:v(()=>[t(" Comandi di uso generale ")]),_:1})]),_:1},16)}}},SE=S(EE,[["__file","/@slidev/slides/71.md"]]),RE=e("h1",null,"Linux CLI",-1),zE=e("p",null,"man - un’interfaccia ai manuali di riferimento in linea",-1),TE=e("ul",null,[e("li",null,[t("Il comando più importante di tutti è "),e("code",null,"man"),t(" che permette di accedere al manuale di sistema e di TUTTI i comandi")]),e("li",null,"E’ buona regola consultare SEMPRE il manuale per capire come funziona un comando, quali sono i suoi parametri e conoscere le particolarità del singolo comando")],-1),ME=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"man"),t(),e("span",{class:"token operator"},"<"),t("nome comando"),e("span",{class:"token operator"},">")]),t(`
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
`),e("span",{class:"line"},[t("       nor "),e("span",{class:"token parameter variable"},"--sort"),t(" is specified.")])])],-1),AE={__name:"72",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[RE,zE,TE,R(a,G({},{ranges:[""]}),{default:v(()=>[ME]),_:1},16)]),_:1},16)}}},OE=S(AE,[["__file","/@slidev/slides/72.md"]]),PE=e("h1",null,"Linux CLI",-1),DE=e("p",null,"man - un’interfaccia ai manuali di riferimento in linea",-1),jE=e("ul",null,[e("li",null,"Ecco alcuni parametri utili")],-1),NE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},"-K: cerca e visualizza i manuali compatibili con la parola chiave"),t(`
`),e("span",{class:"line"},"-k: visualizza possibili comandi compatibili con la parola chiave")])],-1),FE=e("br",null,null,-1),HE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"man"),t(),e("span",{class:"token parameter variable"},"-K"),t("  "),e("span",{class:"token string"},'"concatenate files"')]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"man"),t(),e("span",{class:"token parameter variable"},"-k"),t("  "),e("span",{class:"token string"},'"concatenate files"')]),t(`
`),e("span",{class:"line"},[e("span",{class:"token function"},"cat"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),t("              - concatenate files and print on the standard output")])])],-1),KE={__name:"73",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[PE,DE,jE,R(a,G({},{ranges:[""]}),{default:v(()=>[NE]),_:1},16),FE,R(a,G({},{ranges:[""]}),{default:v(()=>[HE]),_:1},16)]),_:1},16)}}},WE=S(KE,[["__file","/@slidev/slides/73.md"]]),BE=e("h1",null,"Linux CLI",-1),qE=e("p",null,"info - read Info documents",-1),UE=e("ul",null,[e("li",null,[t("Un’altro comando utilissimo per reperire informazione è "),e("code",null,"info"),t(".")]),e("li",null,"Si usa esattamente come man")],-1),VE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ info "),e("span",{class:"token operator"},"<"),t("nome comando"),e("span",{class:"token operator"},">")]),t(`
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
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"if"),t(" it had been invoked with a single argument of ‘.’.")])])],-1),GE={__name:"74",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[BE,qE,UE,R(a,G({},{ranges:[""]}),{default:v(()=>[VE]),_:1},16)]),_:1},16)}}},YE=S(GE,[["__file","/@slidev/slides/74.md"]]),QE=e("h1",null,"Linux CLI",-1),ZE=e("p",null,"apropos - ricerca nei nomi e nelle descrizioni delle pagine di manuale",-1),JE=e("ul",null,[e("li",null,"Effettua una ricerca all’interno dei manuali. Molto utile quando non sappiamo esattamente il nome di un comando ma ne conosciamo il suo contesto.")],-1),XE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"apropos"),t(),e("span",{class:"token operator"},"<"),t("parole chiave"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"apropos"),t(),e("span",{class:"token string"},'"concatenate files"')]),t(`
`),e("span",{class:"line"},[e("span",{class:"token function"},"cat"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),t("              - concatenate files and print on the standard output")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"apropos"),t(),e("span",{class:"token string"},'"remove files"')]),t(`
`),e("span",{class:"line"},[t("git-rm "),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),t("           - Remove files from the working tree and from the index")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token function"},"rm"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),t("               - remove files or directories")])])],-1),eS=e("p",null,"Se apropos non trova nessun suggerimento potrebbe essere utile eseguire il seguente comando",-1),nS=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sudo"),t(" mandb "),e("span",{class:"token parameter variable"},"-c")])])],-1),tS=e("p",null,"In questo modo si ricrea il DB per apropos",-1),sS={__name:"75",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[QE,ZE,JE,R(a,G({},{ranges:[""]}),{default:v(()=>[XE]),_:1},16),eS,R(a,G({},{ranges:[""]}),{default:v(()=>[nS]),_:1},16),tS]),_:1},16)}}},oS=S(sS,[["__file","/@slidev/slides/75.md"]]),iS=e("h1",null,"Linux CLI",-1),aS=e("p",null,"clear - clear the terminal screen",-1),lS=e("ul",null,[e("li",null,"Alle volte è utile svuotare e cancellare la finestra di terminale"),e("li",null,"Ciò si può ottenere con il comando clear")],-1),rS=e("br",null,null,-1),cS=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"clear")])])],-1),uS=e("br",null,null,-1),pS=e("p",null,[t("Si può anche utilizzare uno shortcut da tastiera, che è "),e("code",null,"CTRL + L")],-1),dS={__name:"76",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[iS,aS,lS,rS,cS,uS,pS]),_:1},16))}},mS=S(dS,[["__file","/@slidev/slides/76.md"]]),fS=e("h1",null,"Linux CLI",-1),hS=e("p",null,"reset - terminal initialization",-1),_S=e("ul",null,[e("li",null,"In alcuni scenari clear può non essere efficace, quindi per resettare un terminale al suo stato iniziale possiamo usare il comando reset")],-1),gS=e("br",null,null,-1),vS=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},"$ reset")])],-1),bS={__name:"77",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[fS,hS,_S,gS,R(a,G({},{ranges:[""]}),{default:v(()=>[vS]),_:1},16)]),_:1},16)}}},xS=S(bS,[["__file","/@slidev/slides/77.md"]]),kS=e("h1",null,"Linux CLI",-1),wS=e("p",null,"Esercitazione cli_10",-1),yS=e("ul",null,[e("li",null,[t("Svolgere i seguenti moduli del dojo "),e("a",{href:"https://pwn.college/linux-luminarium/",target:"_blank",rel:"noopener"},"Linux Luminarium"),e("ul",null,[e("li",null,[e("a",{href:"https://pwn.college/linux-luminarium/commands/",target:"_blank",rel:"noopener"},"Comprehending Commands")]),e("li",null,[e("a",{href:"https://pwn.college/linux-luminarium/man/",target:"_blank",rel:"noopener"},"Digesting Documentation")])])]),e("li",null,[t("Leggere e visualizzare le due unità "),e("code",null,"Lectures and Reading")]),e("li",null,[t("Completare con successo tutte le 19 "),e("code",null,"Challenges")]),e("li",null,[t("Domande del docente sui temi trattati e sulle sezioni "),e("em",null,"Lectures and Reading")]),e("li",null,[t("Consegnare su github 2 screenshots che dimostrano il superamento delle 19 challenges con i seguenti nomi: "),e("ul",null,[e("li",null,[e("em",null,"|cognome|_dojo_linux_10a.(png|jpg)")]),e("li",null,[e("em",null,"|cognome|_dojo_linux_10b.(png|jpg)")])])])],-1),LS={__name:"78",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[kS,wS,yS]),_:1},16))}},IS=S(LS,[["__file","/@slidev/slides/78.md"]]),$S=e("p",null," ",-1),CS={__name:"79",setup(n){const s={};return I(E),(o,i)=>{const a=ct;return b(),C(A,M(z(s)),{default:v(()=>[$S,R(a,{fs:"100px"},{default:v(()=>[t(" Filesystem ")]),_:1})]),_:1},16)}}},ES=S(CS,[["__file","/@slidev/slides/79.md"]]),SS=e("h1",null,"Linux CLI",-1),RS=e("p",null,"pwd - output the current working directory",-1),zS=e("ul",null,[e("li",null,[t("Per conosce l’attuale posizione nel filesystem, in altre parole per sapere in quale directory ci troviamo basta eseguire il comando "),e("strong",null,"pwd")])],-1),TS=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"pwd")]),t(`
`),e("span",{class:"line"},"/home/antonio/tmp/SARP"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"pwd")]),t(`
`),e("span",{class:"line"},"/media/antonio/NAS")])],-1),MS={__name:"80",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[SS,RS,zS,R(a,G({},{ranges:[""]}),{default:v(()=>[TS]),_:1},16)]),_:1},16)}}},AS=S(MS,[["__file","/@slidev/slides/80.md"]]),OS=e("h1",null,"Linux CLI",-1),PS=e("p",null,"cd - change directory",-1),DS=e("ul",null,[e("li",null,"Permette di cambiare directory e quindi di spostarsi da una directory all’altra")],-1),jS=e("br",null,null,-1),NS=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"cd"),t(),e("span",{class:"token operator"},"<"),t("percorso assoluto o relativo della directory destinazione"),e("span",{class:"token operator"},">")]),t(`
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
`),e("span",{class:"line"},"/home/antonio/tmp/SARP")])],-1),FS={__name:"81",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[OS,PS,DS,jS,R(a,G({},{ranges:[""]}),{default:v(()=>[NS]),_:1},16)]),_:1},16)}}},HS=S(FS,[["__file","/@slidev/slides/81.md"]]),KS=e("h1",null,"Linux CLI",-1),WS=e("p",null,"cd - change directory",-1),BS=e("br",null,null,-1),qS=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"cd"),t(),e("span",{class:"token comment"},"# torna alla HOME directory")]),t(`
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
`),e("span",{class:"line"},"/usr/bin")])],-1),US={__name:"82",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[KS,WS,BS,R(a,G({},{ranges:[""]}),{default:v(()=>[qS]),_:1},16)]),_:1},16)}}},VS=S(US,[["__file","/@slidev/slides/82.md"]]),GS=e("h1",null,"Linux CLI",-1),YS=e("p",null,"ls - list directory contents",-1),QS=e("ul",null,[e("li",null,"Il comando ls (list) permette di vedere (listare) il contenuto della directory corrente o di una directory specifica")],-1),ZS=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token operator"},"<"),t("file"),e("span",{class:"token operator"},">"),t(" o "),e("span",{class:"token operator"},"<"),t("directory"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token comment"},"#list della directory corrente")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"151.101"),t(".242.137.00443-192.168   CMakeTools            index.html.5       recently-used.xbel")]),t(`
`),e("span",{class:"line"},[t(),e("span",{class:"token number"},"192.168"),t(".001.077.37480-151.101  Desktop               keyrings           regole01.jpg")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'2023-07-28 18-52-21.mkv'"),t("       desktop-directories   linked_list,h      report.html")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'2023-07-28 18-55-11.mkv'"),t("       Documents             linked_list.h      report.xml")]),t(`
`),e("span",{class:"line"}," Android                        Downloads             LocalSend-1.deb    scripts"),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'Android Open Source Project'"),t("   espedito.keys.asc     mime               static.key")]),t(`
`),e("span",{class:"line"}," android-studio                 espedito.pub.asc      mimeapps.list      TBR.pdf"),t(`
`),e("span",{class:"line"}," AndroidStudioProjects          evolution             msgFilterRules.dat Templates")])],-1),JS={__name:"83",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[GS,YS,QS,R(a,G({},{ranges:[""]}),{default:v(()=>[ZS]),_:1},16)]),_:1},16)}}},XS=S(JS,[["__file","/@slidev/slides/83.md"]]),eR=e("h1",null,"Linux CLI",-1),nR=e("p",null,"ls - list directory contents",-1),tR=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(" /usr/bin/ "),e("span",{class:"token comment"},"# lista il contenuto della directory /usr/bin")]),t(`
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
`),e("span",{class:"line"}," AndroidStudioProjects          evolution             msgFilterRules.dat Templates")])],-1),sR={__name:"84",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[eR,nR,R(a,G({},{ranges:[""]}),{default:v(()=>[tR]),_:1},16)]),_:1},16)}}},oR=S(sR,[["__file","/@slidev/slides/84.md"]]),iR=e("h1",null,"Linux CLI",-1),aR=e("p",null,"ls - list directory contents",-1),lR=e("ul",null,[e("li",null,"ls possiede 55 parametri e quindi è un comando molto complesso"),e("li",null,"tuttavia nella maggioranza dei casi ci servono solo 2 o 3 parametri"),e("li",null,"in queste situazioni l’uso del manuale è fondamentale")],-1),rR=e("p",null,"Ecco alcuni parametri utili",-1),cR=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("-1: lista il contenuto dei "),e("span",{class:"token function"},"file"),t(),e("span",{class:"token function"},"su"),t(" una singola colonna")]),t(`
`),e("span",{class:"line"},[t("-l: long list "),e("span",{class:"token function"},"format")]),t(`
`),e("span",{class:"line"},[t("-a: visualizza tutti i "),e("span",{class:"token function"},"file"),t(" anche quelli nascosti come "),e("span",{class:"token builtin class-name"},"."),t(" e "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},"-F: appende un indicatore per ogni entry indicandone il tipo"),t(`
`),e("span",{class:"line"},[t("-h: visualizza le dimensioni dei "),e("span",{class:"token function"},"file"),t(),e("span",{class:"token keyword"},"in"),t(" un formato utile per gli umani")]),t(`
`),e("span",{class:"line"},[t("-S: ordina per dimensione del "),e("span",{class:"token function"},"file"),t(),e("span",{class:"token keyword"},"in"),t(" ordine decrescente")]),t(`
`),e("span",{class:"line"},"-r: inverte l'ordine di visualizzazione")])],-1),uR={__name:"85",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[iR,aR,lR,rR,R(a,G({},{ranges:[""]}),{default:v(()=>[cR]),_:1},16)]),_:1},16)}}},pR=S(uR,[["__file","/@slidev/slides/85.md"]]),dR=e("h1",null,"Linux CLI",-1),mR=e("p",null,"ls - list directory contents",-1),fR=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-lah")]),t(`
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
`),e("span",{class:"line"},[t("-rwxr-xr-x   "),e("span",{class:"token number"},"1"),t(" antonio antonio  "),e("span",{class:"token number"},"351"),t(" ago "),e("span",{class:"token number"},"12"),t("  "),e("span",{class:"token number"},"2022"),t("  appimagekit-shotcut.desktop")])])],-1),hR={__name:"86",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[dR,mR,R(a,G({},{ranges:[""]}),{default:v(()=>[fR]),_:1},16)]),_:1},16)}}},_R=S(hR,[["__file","/@slidev/slides/86.md"]]),gR=e("h1",null,"Linux CLI",-1),vR=e("p",null,"ls - list directory contents",-1),bR=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-lahFS")]),t(`
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
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio  50K ago "),e("span",{class:"token number"},"29"),t(),e("span",{class:"token number"},"10"),t(":15  .zcompdump")])])],-1),xR={__name:"87",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[gR,vR,R(a,G({},{ranges:[""]}),{default:v(()=>[bR]),_:1},16)]),_:1},16)}}},kR=S(xR,[["__file","/@slidev/slides/87.md"]]),wR=e("h1",null,"Linux CLI",-1),yR=e("p",null,"alias",-1),LR=e("ul",null,[e("li",null,[t("Alle volte ricordarsi comandi lunghi come "),e("code",null,"ls -lahFSr"),t(" può essere poco conveniente")]),e("li",null,[t("Allora la shell ci viene in aiuto con il concetto di "),e("code",null,"alias")]),e("li",null,[t("Gli "),e("code",null,"alias"),t(" non è un comando, ma una funzionalità della shell")]),e("li",null,[t("Gli "),e("code",null,"alias"),t(" consentono di sostituire una stringa con una parola quando viene utilizzata come prima parola di un comando semplice")])],-1),IR=e("p",null,"Quindi ogni utente può creare tutti gli alias che desidera per rendersi la vita più semplice.",-1),$R=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"alias"),t(),e("span",{class:"token operator"},"<"),t("nome alias"),e("span",{class:"token operator"},">="),e("span",{class:"token operator"},"<"),t("comando"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"alias"),t(),e("span",{class:"token assign-left variable"},"lo"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'ls -lahFSr'")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"alias"),t(),e("span",{class:"token assign-left variable"},"l1"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'ls -1'")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token builtin class-name"},"alias"),t(),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"grep"),t(),e("span",{class:"token parameter variable"},"-E"),t(),e("span",{class:"token string"},"'^l1|^lo'")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token assign-left variable"},"l1"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'ls -1'")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token assign-left variable"},"lo"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'ls -lahFSr'")])])],-1),CR={__name:"88",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[wR,yR,LR,IR,R(a,G({},{ranges:[""]}),{default:v(()=>[$R]),_:1},16)]),_:1},16)}}},ER=S(CR,[["__file","/@slidev/slides/88.md"]]),SR=e("h1",null,"Linux CLI",-1),RR=e("p",null,"alias",-1),zR=e("ul",null,[e("li",null,"Quindi ora abbiamo due nuovi comandi (o alias) chiamati lo e l1 che possiamo usare esattamente come ogni altro comando linux")],-1),TR=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$  lo ----"),e("span",{class:"token operator"},">"),t(" equivale a "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-lahFSr")]),t(`
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
`),e("span",{class:"line"},"antonio")])],-1),MR={__name:"89",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[SR,RR,zR,R(a,G({},{ranges:[""]}),{default:v(()=>[TR]),_:1},16)]),_:1},16)}}},AR=S(MR,[["__file","/@slidev/slides/89.md"]]),OR=e("h1",null,"Linux CLI",-1),PR=e("p",null,"File Timestamps",-1),DR=e("ul",null,[e("li",null,"Ogni file e directory una serie di timestamp che ci indicano esattamente quando sono avvenute particolari operazioni sul file stesso"),e("li",null,[t("Nello specifico i 4 principali timestamp sono: "),e("ul",null,[e("li",null,[e("strong",null,"Accesso"),t(": indica l’ultima volta che è stato effettuato l’accesso al file")]),e("li",null,[e("strong",null,"Modifica"),t(": indica l’ultima volta che è stato modificato il contenuto del file")]),e("li",null,[e("strong",null,"Cambio"),t(": indica l’ultima volta che è stato effettuato un cambio ai metadata del file")]),e("li",null,[e("strong",null,"Creazione"),t(": indica quando il file è stato creato e rimane costante")])])])],-1),jR={__name:"90",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[OR,PR,DR]),_:1},16))}},NR=S(jR,[["__file","/@slidev/slides/90.md"]]),FR=e("h1",null,"Linux CLI",-1),HR=e("p",null,"stat - visualizza i timestamp di un file",-1),KR=e("ul",null,[e("li",null,[t("Per visualizzare le informazioni relative ad un file o directory, quali dimensione e timestamp si utilizza il comando "),e("strong",null,"stat")])],-1),WR=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"stat"),t(),e("span",{class:"token operator"},"<"),t("file/dir name"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{class:"token variable"},"$stat"),t(" README.md                                                     main")]),t(`
`),e("span",{class:"line"},"  File: README.md"),t(`
`),e("span",{class:"line"},[t("  Dim.: "),e("span",{class:"token number"},"1164"),t("      	Blocchi: "),e("span",{class:"token number"},"8"),t("          Blocco di IO: "),e("span",{class:"token number"},"4096"),t("   "),e("span",{class:"token function"},"file"),t(" regolare")]),t(`
`),e("span",{class:"line"},[t("Device: 10305h/66309d	Inode: "),e("span",{class:"token number"},"11665449"),t("    Coll.: "),e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[t("Accesso: "),e("span",{class:"token punctuation"},"("),t("0664/-rw-rw-r--"),e("span",{class:"token punctuation"},")"),t("  Uid: "),e("span",{class:"token punctuation"},"("),t(),e("span",{class:"token number"},"1000"),t("/ antonio"),e("span",{class:"token punctuation"},")"),t("   Gid: "),e("span",{class:"token punctuation"},"("),t(),e("span",{class:"token number"},"1000"),t("/ antonio"),e("span",{class:"token punctuation"},")")]),t(`
`),e("span",{class:"line"},[t("Accesso  "),e("span",{class:"token builtin class-name"},":"),t(),e("span",{class:"token number"},"2022"),t("-08-27 "),e("span",{class:"token number"},"11"),t(":11:42.197271632 +0200")]),t(`
`),e("span",{class:"line"},[t("Modifica "),e("span",{class:"token builtin class-name"},":"),t(),e("span",{class:"token number"},"2022"),t("-08-27 "),e("span",{class:"token number"},"11"),t(":11:42.197271632 +0200")]),t(`
`),e("span",{class:"line"},[t("Cambio   "),e("span",{class:"token builtin class-name"},":"),t(),e("span",{class:"token number"},"2022"),t("-08-27 "),e("span",{class:"token number"},"11"),t(":11:42.197271632 +0200")]),t(`
`),e("span",{class:"line"},[t("Creazione: "),e("span",{class:"token number"},"2022"),t("-08-27 "),e("span",{class:"token number"},"11"),t(":11:42.197271632 +0200")])])],-1),BR={__name:"91",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[FR,HR,KR,R(a,G({},{ranges:[""]}),{default:v(()=>[WR]),_:1},16)]),_:1},16)}}},qR=S(BR,[["__file","/@slidev/slides/91.md"]]),UR=e("h1",null,"Linux CLI",-1),VR=e("p",null,"stat - visualizza i timestamp di un file",-1),GR=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"stat"),t(" code                                                          main")]),t(`
`),e("span",{class:"line"},"  File: code"),t(`
`),e("span",{class:"line"},[t("  Dim.: "),e("span",{class:"token number"},"4096"),t("      	Blocchi: "),e("span",{class:"token number"},"8"),t("          Blocco di IO: "),e("span",{class:"token number"},"4096"),t("   directory")]),t(`
`),e("span",{class:"line"},[t("Device: 10305h/66309d	Inode: "),e("span",{class:"token number"},"16777517"),t("    Coll.: "),e("span",{class:"token number"},"5")]),t(`
`),e("span",{class:"line"},[t("Accesso: "),e("span",{class:"token punctuation"},"("),t("0775/drwxrwxr-x"),e("span",{class:"token punctuation"},")"),t("  Uid: "),e("span",{class:"token punctuation"},"("),t(),e("span",{class:"token number"},"1000"),t("/ antonio"),e("span",{class:"token punctuation"},")"),t("   Gid: "),e("span",{class:"token punctuation"},"("),t(),e("span",{class:"token number"},"1000"),t("/ antonio"),e("span",{class:"token punctuation"},")")]),t(`
`),e("span",{class:"line"},[t("Accesso  "),e("span",{class:"token builtin class-name"},":"),t(),e("span",{class:"token number"},"2023"),t("-07-09 "),e("span",{class:"token number"},"10"),t(":18:25.132871216 +0200")]),t(`
`),e("span",{class:"line"},[t("Modifica "),e("span",{class:"token builtin class-name"},":"),t(),e("span",{class:"token number"},"2023"),t("-07-16 "),e("span",{class:"token number"},"17"),t(":41:17.282502735 +0200")]),t(`
`),e("span",{class:"line"},[t("Cambio   "),e("span",{class:"token builtin class-name"},":"),t(),e("span",{class:"token number"},"2023"),t("-07-16 "),e("span",{class:"token number"},"17"),t(":41:17.282502735 +0200")]),t(`
`),e("span",{class:"line"},[t("Creazione: "),e("span",{class:"token number"},"2023"),t("-07-09 "),e("span",{class:"token number"},"10"),t(":18:25.132871216 +0200")])])],-1),YR={__name:"92",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[UR,VR,R(a,G({},{ranges:[""]}),{default:v(()=>[GR]),_:1},16)]),_:1},16)}}},QR=S(YR,[["__file","/@slidev/slides/92.md"]]),ZR=e("h1",null,"Linux CLI",-1),JR=e("p",null,"cp - copiare file e directory",-1),XR=e("ul",null,[e("li",null,[t("Spesso è molto utile "),e("strong",null,"copiare"),t(" un file o un’intera directory all’interno del filesystem")])],-1),ez=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cp"),t(),e("span",{class:"token operator"},"<"),t(" - parametri opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("file sorgente"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("file destinazione"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cp"),t(),e("span",{class:"token operator"},"<"),t(" - parametri opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("file sorgente"),e("span",{class:"token operator"},">"),e("span",{class:"token punctuation"},".."),t("."),e("span",{class:"token operator"},"<"),t("file sorgente"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("directory destinazione"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cp"),t(),e("span",{class:"token operator"},"<"),t(" - parametri opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("directory sorgente"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("directory destinazione"),e("span",{class:"token operator"},">")])])],-1),nz=e("br",null,null,-1),tz=e("ul",null,[e("li",null,"cp ha 24 parametri e i più utili sono:")],-1),sz=e("br",null,null,-1),oz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},"- r: copia ricorsivamente un albero di directory e il suo contenuto"),t(`
`),e("span",{class:"line"},"- v: verbose permette di vedere lo stato della copia"),t(`
`),e("span",{class:"line"},[t("- a: copia "),e("span",{class:"token keyword"},"in"),t(" modalità archivio preservando ownership, timestamps, mode")]),t(`
`),e("span",{class:"line"},[t("- i: copia "),e("span",{class:"token keyword"},"in"),t(" modalità interattiva "),e("span",{class:"token punctuation"},"("),t("chiede conferma "),e("span",{class:"token keyword"},"in"),t(" caso di overwrite"),e("span",{class:"token punctuation"},")")]),t(`
`),e("span",{class:"line"},[t("- f: forza la copia anche "),e("span",{class:"token keyword"},"in"),t(" caso di overwrite")])])],-1),iz={__name:"93",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[ZR,JR,XR,R(a,G({},{ranges:[""]}),{default:v(()=>[ez]),_:1},16),nz,tz,sz,R(a,G({},{ranges:[""]}),{default:v(()=>[oz]),_:1},16)]),_:1},16)}}},az=S(iz,[["__file","/@slidev/slides/93.md"]]),lz=e("h1",null,"Linux CLI",-1),rz=e("p",null,"cp - copiare file e directory",-1),cz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t()]),t(`
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
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 file2")])])],-1),uz={__name:"94",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[lz,rz,R(a,G({},{ranges:[""]}),{default:v(()=>[cz]),_:1},16)]),_:1},16)}}},pz=S(uz,[["__file","/@slidev/slides/94.md"]]),dz=e("h1",null,"Linux CLI",-1),mz=e("p",null,"cp - copiare file e directory",-1),fz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" DIR1")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":30 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"3"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cp"),t(" file1 DIR1 "),e("span",{class:"token comment"},"# crea una copia di file1 nella directory DIR1 con nome file1")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" DIR1")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":33 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"3"),t(" antonio antonio "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":33 file1")])])],-1),hz={__name:"95",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[dz,mz,R(a,G({},{ranges:[""]}),{default:v(()=>[fz]),_:1},16)]),_:1},16)}}},_z=S(hz,[["__file","/@slidev/slides/95.md"]]),gz=e("h1",null,"Linux CLI",-1),vz=e("p",null,"cp - copiare file e directory",-1),bz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" DIR1")]),t(`
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
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":34 fileDIR1")])])],-1),xz={__name:"96",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[gz,vz,R(a,G({},{ranges:[""]}),{default:v(()=>[bz]),_:1},16)]),_:1},16)}}},kz=S(xz,[["__file","/@slidev/slides/96.md"]]),wz=e("h1",null,"Linux CLI",-1),yz=e("p",null,"cp - copiare file e directory",-1),Lz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
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
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 file2")])])],-1),Iz={__name:"97",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[wz,yz,Lz]),_:1},16))}},$z=S(Iz,[["__file","/@slidev/slides/97.md"]]),Cz=e("h1",null,"Linux CLI",-1),Ez=e("p",null,"cp - copiare file e directory",-1),Sz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"touch"),t(" file3 file4")]),t(`
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
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":35 fileDIR1")])])],-1),Rz={__name:"98",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[Cz,Ez,R(a,G({},{ranges:[""]}),{default:v(()=>[Sz]),_:1},16)]),_:1},16)}}},zz=S(Rz,[["__file","/@slidev/slides/98.md"]]),Tz=e("h1",null,"Linux CLI",-1),Mz=e("p",null,"cp - copiare file e directory",-1),Az=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cp"),t(),e("span",{class:"token parameter variable"},"-vi"),t(" file3 file4 DIR2")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("cp: sovrascrivere "),e("span",{class:"token string"},"'DIR2/file3'"),t("? y")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'file3'"),t(" -"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token string"},"'DIR2/file3'")]),t(`
`),e("span",{class:"line"},[t("cp: sovrascrivere "),e("span",{class:"token string"},"'DIR2/file4'"),t("? y")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token string"},"'file4'"),t(" -"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token string"},"'DIR2/file4'")])])],-1),Oz={__name:"99",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[Tz,Mz,R(a,G({},{ranges:[""]}),{default:v(()=>[Az]),_:1},16)]),_:1},16)}}},Pz=S(Oz,[["__file","/@slidev/slides/99.md"]]),Dz=e("h1",null,"Linux CLI",-1),jz=e("p",null,"mv - muove o rinomina file",-1),Nz=e("ul",null,[e("li",null,[t("Il comando "),e("strong",null,"mv"),t(" è utilizzato per spostare un file o una directory da una directory ad un altra nel filesystem")]),e("li",null,"Il comando è anche utilizzato per rinominare un file nel caso la directory sorgente e destinazione siano le stesse")],-1),Fz=e("br",null,null,-1),Hz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mv"),t(),e("span",{class:"token operator"},"<"),t("source file"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("destination dir"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token comment"},"# muove un file dalla directory corrente ad un'altra directory")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# sposta il file in una directory diversa e lo rinomina")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mv"),t(),e("span",{class:"token operator"},"<"),t("source file"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("destination dir/destination file"),e("span",{class:"token operator"},">"),t()]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mv"),t(),e("span",{class:"token operator"},"<"),t("source dir"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("destination dir"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token comment"},"# sposta o rinomina una directory")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mv"),t(),e("span",{class:"token operator"},"<"),t("source file"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("destination file"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token comment"},"# rinomina un file nella stessa directory")])])],-1),Kz={__name:"100",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[Dz,jz,Nz,Fz,R(a,G({},{ranges:[""]}),{default:v(()=>[Hz]),_:1},16)]),_:1},16)}}},Wz=S(Kz,[["__file","/@slidev/slides/100.md"]]),Bz=e("h1",null,"Linux CLI",-1),qz=e("p",null,"mv - muove o rinomina file",-1),Uz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" DIR1/")]),t(`
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
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":34 fileDIR1")])])],-1),Vz={__name:"101",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[Bz,qz,R(a,G({},{ranges:[""]}),{default:v(()=>[Uz]),_:1},16)]),_:1},16)}}},Gz=S(Vz,[["__file","/@slidev/slides/101.md"]]),Yz=e("h1",null,"Linux CLI",-1),Qz=e("p",null,"mv - muove o rinomina file",-1),Zz=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token variable"},"$ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" DIR1/")]),t(`
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
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":34 fileDIR1")])])],-1),Jz={__name:"102",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[Yz,Qz,R(a,G({},{ranges:[""]}),{default:v(()=>[Zz]),_:1},16)]),_:1},16)}}},Xz=S(Jz,[["__file","/@slidev/slides/102.md"]]),eT=e("h1",null,"Linux CLI",-1),nT=e("p",null,"mv - muove o rinomina file",-1),tT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
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
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 file2")])])],-1),sT={__name:"103",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[eT,nT,R(a,G({},{ranges:[""]}),{default:v(()=>[tT]),_:1},16)]),_:1},16)}}},oT=S(sT,[["__file","/@slidev/slides/103.md"]]),iT=e("h1",null,"Linux CLI",-1),aT=e("p",null,"mv - muove o rinomina file",-1),lT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
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
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 fileAAA2")])])],-1),rT={__name:"104",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[iT,aT,R(a,G({},{ranges:[""]}),{default:v(()=>[lT]),_:1},16)]),_:1},16)}}},cT=S(rT,[["__file","/@slidev/slides/104.md"]]),uT=e("h1",null,"Linux CLI",-1),pT=e("p",null,"mv - muove o rinomina file",-1),dT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token variable"},"$ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
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
`),e("span",{class:"line"},[t("-rw-rw-r--  "),e("span",{class:"token number"},"1"),t(" antonio antonio     "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31  fileAAA2")])])],-1),mT={__name:"105",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[uT,pT,R(a,G({},{ranges:[""]}),{default:v(()=>[dT]),_:1},16)]),_:1},16)}}},fT=S(mT,[["__file","/@slidev/slides/105.md"]]),hT=e("h1",null,"Linux CLI",-1),_T=e("p",null,"rm - rimuove file o directory",-1),gT=e("ul",null,[e("li",null,[t("Per cancellare un file in modo permanente (non c’è il cestino nella CLI) si utilizza il comando "),e("strong",null,"rm (remove)")])],-1),vT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"rm"),t(),e("span",{class:"token operator"},"<"),t("- parametri opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("file o directory"),e("span",{class:"token operator"},">")]),t(`
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
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 fileAAA2")])])],-1),bT={__name:"106",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[hT,_T,gT,R(a,G({},{ranges:[""]}),{default:v(()=>[vT]),_:1},16)]),_:1},16)}}},xT=S(bT,[["__file","/@slidev/slides/106.md"]]),kT=e("h1",null,"Linux CLI",-1),wT=e("p",null,"rm - rimuove file o directory",-1),yT=e("ul",null,[e("li",null,"I parametri più utilizzati sono:")],-1),LT=e("br",null,null,-1),IT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},"-i: interactive chiede conferma prima di rimuovere"),t(`
`),e("span",{class:"line"},"-d: rimuove una directory vuota"),t(`
`),e("span",{class:"line"},"-r: rimuove ricorsivamente il contenuto nelle sotto directory"),t(`
`),e("span",{class:"line"},[t("-f: forza il comando anche "),e("span",{class:"token keyword"},"in"),t(" caso di directory non vuote")])])],-1),$T=e("br",null,null,-1),CT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"rm"),t(),e("span",{class:"token parameter variable"},"-i"),t(" fileAAA2 ")]),t(`
`),e("span",{class:"line"},[t("rm: rimuovere "),e("span",{class:"token function"},"file"),t(" regolare "),e("span",{class:"token string"},"'fileAAA2'"),t("? y")])])],-1),ET={__name:"107",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[kT,wT,yT,LT,R(a,G({},{ranges:[""]}),{default:v(()=>[IT]),_:1},16),$T,R(a,G({},{ranges:[""]}),{default:v(()=>[CT]),_:1},16)]),_:1},16)}}},ST=S(ET,[["__file","/@slidev/slides/107.md"]]),RT=e("h1",null,"Linux CLI",-1),zT=e("p",null,"rm - rimuove file o directory",-1),TT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t(" DIR3")]),t(`
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
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"5"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":31 fileAAA2")])])],-1),MT={__name:"108",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[RT,zT,R(a,G({},{ranges:[""]}),{default:v(()=>[TT]),_:1},16)]),_:1},16)}}},AT=S(MT,[["__file","/@slidev/slides/108.md"]]),OT=e("h1",null,"Linux CLI",-1),PT=e("p",null,"rm - rimuove file o directory",-1),DT=e("ul",null,[e("li",null,"Per rimuovere una directory e tutto il suo contenuto senza priam svuotarla possiamo fare così")],-1),jT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"rm"),t(),e("span",{class:"token parameter variable"},"-dr"),t(" DIR3")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},"oppure"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"rm"),t(),e("span",{class:"token parameter variable"},"-rf"),t(" DIR3")])])],-1),NT=e("br",null,null,-1),FT=e("ul",null,[e("li",null,"Entrambi i comandi hanno lo stesso effetto ma il secondo è più comune tra gli amministratori di sistemi Linux")],-1),HT={__name:"109",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[OT,PT,DT,R(a,G({},{ranges:[""]}),{default:v(()=>[jT]),_:1},16),NT,FT]),_:1},16)}}},KT=S(HT,[["__file","/@slidev/slides/109.md"]]),WT=e("h1",null,"Linux CLI",-1),BT=e("p",null,"Esercitazione cli_11",-1),qT=e("ul",null,[e("li",null,[t("Svolgere i seguenti moduli del dojo "),e("a",{href:"https://pwn.college/linux-luminarium/",target:"_blank",rel:"noopener"},"Linux Luminarium"),e("ul",null,[e("li",null,[e("a",{href:"https://pwn.college/linux-luminarium/globbing/",target:"_blank",rel:"noopener"},"File Globbing")]),e("li",null,[e("a",{href:"https://pwn.college/linux-luminarium/variables/",target:"_blank",rel:"noopener"},"Shell Variables")])])]),e("li",null,[t("Leggere e visualizzare le due unità "),e("code",null,"Lectures and Reading")]),e("li",null,[t("Completare con successo tutte le 14 "),e("code",null,"Challenges")]),e("li",null,[t("Domande del docente sui temi trattati e sulle sezioni "),e("em",null,"Lecturesd and Reading")]),e("li",null,[t("Consegnare su su github 2 screenshots che dimostrano il superamento delle 14 challenges con i seguenti nomi: "),e("ul",null,[e("li",null,[e("em",null,"|cognome|_dojo_linux_11a.(png|jpg)")]),e("li",null,[e("em",null,"|cognome|_dojo_linux_11b.(png|jpg)")])])])],-1),UT={__name:"110",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[WT,BT,qT]),_:1},16))}},VT=S(UT,[["__file","/@slidev/slides/110.md"]]),GT=e("h1",null,"Linux CLI",-1),YT=e("p",null,"more - visualizzazione file paginata",-1),QT=e("ul",null,[e("li",null,"more permette di leggere un file di testo una pagina alla volta")],-1),ZT=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"more"),t(),e("span",{class:"token operator"},"<"),t("nome file"),e("span",{class:"token operator"},">")])])],-1),JT=e("br",null,null,-1),XT=e("ul",null,[e("li",null,"Se il file è più corto di una pagina di video viene visualizzato e more esce"),e("li",null,"Se il file è più lungo e rivhiede più paginate del video per essere visualizzato, more entra in modalità comando"),e("li",null,"more accetta i seguenti comandi principali:")],-1),e8=e("br",null,null,-1),n8=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token operator"},"<"),t("spaca"),e("span",{class:"token operator"},">"),t(": avanza alla prossima pagina del testo")]),t(`
`),e("span",{class:"line"},"b: torna indietro alla pagina precedente"),t(`
`),e("span",{class:"line"},[t("/"),e("span",{class:"token operator"},"<"),t("pattern"),e("span",{class:"token operator"},">"),t(": effettua una ricerca del pattern all'interno del "),e("span",{class:"token function"},"file")]),t(`
`),e("span",{class:"line"},[t("n: salta alla prossima occorrenza di "),e("span",{class:"token operator"},"<"),t("pattern"),e("span",{class:"token operator"},">"),t(" se presente")]),t(`
`),e("span",{class:"line"},"q: esce dalla visualizzazione")])],-1),t8={__name:"111",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[GT,YT,QT,R(a,G({},{ranges:[""]}),{default:v(()=>[ZT]),_:1},16),JT,XT,e8,R(a,G({},{ranges:[""]}),{default:v(()=>[n8]),_:1},16)]),_:1},16)}}},s8=S(t8,[["__file","/@slidev/slides/111.md"]]),o8=e("h1",null,"Linux CLI",-1),i8=e("p",null,"less - visualizzazione file avanzata",-1),a8=e("ul",null,[e("li",null,"less è molto simile a more ed ha lo stesso scopo che è quello di visualizzare un file multipagina"),e("li",null,"less ha alcune funzione più sofisticate di more, ma nell’uso comune sono sostanzialmente uguali")],-1),l8=e("br",null,null,-1),r8=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"less"),t(),e("span",{class:"token operator"},"<"),t("nome file"),e("span",{class:"token operator"},">")])])],-1),c8=e("br",null,null,-1),u8=e("ul",null,[e("li",null,[e("p",null,"i comandi accettati sono gli stessi di more")]),e("li",null,[e("p",null,[t("Spesso "),e("strong",null,"more"),t(" e "),e("strong",null,"less"),t(" sono utilizzati come filtri finali di una pipeline di comandi")])])],-1),p8=e("br",null,null,-1),d8=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file_grande "),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"sort"),t(),e("span",{class:"token parameter variable"},"-r"),t(),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"less")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},"oppure"),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ $ "),e("span",{class:"token function"},"cat"),t(" file_grande "),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"sort"),t(),e("span",{class:"token parameter variable"},"-r"),t(),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"more")])])],-1),m8={__name:"112",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[o8,i8,a8,l8,R(a,G({},{ranges:[""]}),{default:v(()=>[r8]),_:1},16),c8,u8,p8,R(a,G({},{ranges:[""]}),{default:v(()=>[d8]),_:1},16)]),_:1},16)}}},f8=S(m8,[["__file","/@slidev/slides/112.md"]]),h8=e("h1",null,"Linux CLI",-1),_8=e("p",null,"cat - concatenazione file",-1),g8=e("ul",null,[e("li",null,[e("strong",null,"cat"),t(" concatena uno o più file e lo visualizza sullo standard output")]),e("li",null,"quindi usando cat con un solo file ha l’effetto di visualizzare il file sullo schermo")],-1),v8=e("br",null,null,-1),b8=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t("  "),e("span",{class:"token operator"},"<"),t("nome file"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token punctuation"},"["),e("span",{class:"token operator"},"<"),t("nome file"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("nome file"),e("span",{class:"token operator"},">"),e("span",{class:"token punctuation"},"]")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t("     ")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"4"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"14"),t(":54 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"225"),t(" antonio antonio "),e("span",{class:"token number"},"241664"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"14"),t(":47 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"2"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"7"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"14"),t(":54 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"7"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"14"),t(":54 file2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"7"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"14"),t(":54 file3")])])],-1),x8={__name:"113",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[h8,_8,g8,v8,R(a,G({},{ranges:[""]}),{default:v(()=>[b8]),_:1},16)]),_:1},16)}}},k8=S(x8,[["__file","/@slidev/slides/113.md"]]),w8=e("h1",null,"Linux CLI",-1),y8=e("p",null,"cat - concatenazione file",-1),L8=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token variable"},"$cat"),t(" file1               ")]),t(`
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
`),e("span",{class:"line"},"linea3")])],-1),I8={__name:"114",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[w8,y8,R(a,G({},{ranges:[""]}),{default:v(()=>[L8]),_:1},16)]),_:1},16)}}},$8=S(I8,[["__file","/@slidev/slides/114.md"]]),C8=e("h1",null,"Linux CLI",-1),E8=e("p",null,"head - visualizzare la parte iniziale di un file",-1),S8=e("ul",null,[e("li",null,"Visualizza la prima parte di un file di solito specificata in bytes o linee")],-1),R8=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"head"),t(),e("span",{class:"token operator"},"<"),t(" - parametri opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("file"),e("span",{class:"token operator"},">")]),t(`
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
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"2")])])],-1),z8={__name:"115",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[C8,E8,S8,R(a,G({},{ranges:[""]}),{default:v(()=>[R8]),_:1},16)]),_:1},16)}}},T8=S(z8,[["__file","/@slidev/slides/115.md"]]),M8=e("h1",null,"Linux CLI",-1),A8=e("p",null,"tail - visualizzare la parte finale di un file",-1),O8=e("ul",null,[e("li",null,"In maniera esattamente analoga ad head, visualizza la parte finale di un file in linee o bytes")],-1),P8=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token variable"},"$tail"),t(" file1                                  ")]),t(`
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
`),e("span",{class:"line"},[t("linea "),e("span",{class:"token number"},"1000")])])],-1),D8={__name:"116",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[M8,A8,O8,R(a,G({},{ranges:[""]}),{default:v(()=>[P8]),_:1},16)]),_:1},16)}}},j8=S(D8,[["__file","/@slidev/slides/116.md"]]),N8=e("h1",null,"Linux CLI",-1),F8=e("p",null,"tail - visualizzare la parte finale di un file",-1),H8=e("ul",null,[e("li",null,[t("Un parametro molto usate per tail è "),e("code",null,"-f"),t(" che permette di continuare a leggere un file per scritture successive")]),e("li",null,'Utilizzato prevalentemente per l’analisi di file di log in cui un processo "appende" nuovi dati al fondo del file')],-1),K8=e("p",null,"Aprire due shelle 1 e 2",-1),W8=e("p",null,"shell 1:",-1),B8=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"touch"),t(" file1")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"tail"),t(),e("span",{class:"token parameter variable"},"-f"),t(" file1")])])],-1),q8=e("p",null,"shell 2:",-1),U8=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token builtin class-name"},"echo"),t(" ciao "),e("span",{class:"token operator"},">"),t(" file1")])])],-1),V8={__name:"117",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[N8,F8,H8,K8,W8,R(a,G({},{ranges:[""]}),{default:v(()=>[B8]),_:1},16),q8,R(a,G({},{ranges:[""]}),{default:v(()=>[U8]),_:1},16)]),_:1},16)}}},G8=S(V8,[["__file","/@slidev/slides/117.md"]]),Y8=e("h1",null,"Linux CLI",-1),Q8=e("p",null,"Esercitazione cli_12",-1),Z8=e("ul",null,[e("li",null,"Svolgere la seguente esercitazione (Quinz inclusi)")],-1),J8=e("br",null,null,-1),X8=e("p",null,[t("["),e("a",{href:"https://linuxjourney.com/lesson/the-shell",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/the-shell"),t("]"),e("a",{href:"https://linuxjourney.com/lesson/the-shell",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/the-shell"),t(")")],-1),eM=e("br",null,null,-1),nM=e("ul",null,[e("li",null,"Domande agli studenti sul contenuto dell’esercitazione")],-1),tM={__name:"118",setup(n){const s={};return I(E),(o,i)=>{const a=zn("center");return b(),C(A,M(z(s)),{default:v(()=>[Y8,Q8,Z8,J8,R(a,null,{default:v(()=>[X8]),_:1}),eM,nM]),_:1},16)}}},sM=S(tM,[["__file","/@slidev/slides/118.md"]]),oM=e("h1",null,"Linux CLI",-1),iM=e("p",null,"sort - ordinare le linee di un file di testo",-1),aM=e("ul",null,[e("li",null,"Ordina un file di testo")],-1),lM=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sort"),t(),e("span",{class:"token operator"},"<"),t(" - parametri opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("file"),e("span",{class:"token operator"},">")]),t(`
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
`),e("span",{class:"line"},[e("span",{class:"token number"},"9")])])],-1),rM={__name:"119",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[oM,iM,aM,R(a,G({},{ranges:[""]}),{default:v(()=>[lM]),_:1},16)]),_:1},16)}}},cM=S(rM,[["__file","/@slidev/slides/119.md"]]),uM=e("h1",null,"Linux CLI",-1),pM=e("p",null,"sort - ordinare le linee di un file di testo",-1),dM=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sort"),t(),e("span",{class:"token parameter variable"},"-g"),t(" file1 "),e("span",{class:"token comment"},"# usa ordine numerico")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"5")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"8")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"9")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"10")])])],-1),mM={__name:"120",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[uM,pM,R(a,G({},{ranges:[""]}),{default:v(()=>[dM]),_:1},16)]),_:1},16)}}},fM=S(mM,[["__file","/@slidev/slides/120.md"]]),hM=e("h1",null,"Linux CLI",-1),_M=e("p",null,"sort - ordinare le linee di un file di testo",-1),gM=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sort"),t(),e("span",{class:"token parameter variable"},"-rg"),t(" file1 "),e("span",{class:"token comment"},"# usa ordine numerico inverso (reverse)")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"10")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"9")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"8")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"5")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")])])],-1),vM=e("br",null,null,-1),bM=e("ul",null,[e("li",null,[t("Sort ha 20 parametri opzionali inclusi "),e("strong",null,"g"),t(" e "),e("strong",null,"r")]),e("li",null,"Consultare il manuale per eventuali necessità")],-1),xM={__name:"121",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[hM,_M,R(a,G({},{ranges:[""]}),{default:v(()=>[gM]),_:1},16),vM,bM]),_:1},16)}}},kM=S(xM,[["__file","/@slidev/slides/121.md"]]),wM=e("h1",null,"Linux CLI",-1),yM=e("p",null,"uniq - rimuovere le linee occorrenti di un file",-1),LM=e("ul",null,[e("li",null,"Uniq permette di identificare le occorrenze uguali di linee di testo in un file"),e("li",null,"Permette di riportare o di eliminare tali occorrenze")],-1),IM=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file1 ")]),t(`
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
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")])])],-1),$M={__name:"122",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[wM,yM,LM,R(a,G({},{ranges:[""]}),{default:v(()=>[IM]),_:1},16)]),_:1},16)}}},CM=S($M,[["__file","/@slidev/slides/122.md"]]),EM=e("h1",null,"Linux CLI",-1),SM=e("p",null,"uniq - rimuovere le linee occorrenti di un file",-1),RM=e("ul",null,[e("li",null,"uniq deve lavorare su un file ordinato")],-1),zM=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file1 "),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"sort"),t(),e("span",{class:"token parameter variable"},"-g"),t(),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"uniq")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"5")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"8")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"9")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"10")])])],-1),TM=e("br",null,null,-1),MM=e("ul",null,[e("li",null,[e("strong",null,"uniq"),t(" ha rimosso le occorrenze e ora tutti i numeri compaio una sola volta")])],-1),AM={__name:"123",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[EM,SM,RM,R(a,G({},{ranges:[""]}),{default:v(()=>[zM]),_:1},16),TM,MM]),_:1},16)}}},OM=S(AM,[["__file","/@slidev/slides/123.md"]]),PM=e("h1",null,"Linux CLI",-1),DM=e("p",null,"uniq - rimuovere le linee occorrenti di un file",-1),jM=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token variable"},"$cat"),t(" file1 "),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"sort"),t(),e("span",{class:"token parameter variable"},"-g"),t(),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"uniq"),t(),e("span",{class:"token parameter variable"},"-d")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"3")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"6")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"7")])])],-1),NM=e("br",null,null,-1),FM=e("ul",null,[e("li",null,[e("strong",null,"uniq"),t(" ha mantenuto solo le occorrenze doppie e rimosso quelle singole")])],-1),HM={__name:"124",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[PM,DM,R(a,G({},{ranges:[""]}),{default:v(()=>[jM]),_:1},16),NM,FM]),_:1},16)}}},KM=S(HM,[["__file","/@slidev/slides/124.md"]]),WM=e("h1",null,"Linux CLI",-1),BM=e("p",null,"wc - contare caratteri, parole e linee di un file",-1),qM=e("ul",null,[e("li",null,"Spesso è utile contare quanti caratteri, parole o linee sono presenti in un file di testo"),e("li",null,[e("strong",null,"wc"),t(" assolve esattamente a questo compito")])],-1),UM=e("br",null,null,-1),VM=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"wc"),t(),e("span",{class:"token operator"},"<"),t(" - parametri opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("file"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},"-c: conta i bytes o caratteri"),t(`
`),e("span",{class:"line"},"-w: conta le parole"),t(`
`),e("span",{class:"line"},"-l: conta le linee "),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"cat"),t(" file1                    ")]),t(`
`),e("span",{class:"line"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "),t(`
`),e("span",{class:"line"},[t("Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of "),e("span",{class:"token builtin class-name"},"type"),t(" and scrambled it to "),e("span",{class:"token function"},"make"),t(" a "),e("span",{class:"token builtin class-name"},"type"),t(" specimen book. ")]),t(`
`),e("span",{class:"line"},"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "),t(`
`),e("span",{class:"line"},[t("It was popularised "),e("span",{class:"token keyword"},"in"),t(" the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and "),e("span",{class:"token function"},"more"),t(" recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")])])],-1),GM={__name:"125",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[WM,BM,qM,UM,R(a,G({},{ranges:[""]}),{default:v(()=>[VM]),_:1},16)]),_:1},16)}}},YM=S(GM,[["__file","/@slidev/slides/125.md"]]),QM=e("h1",null,"Linux CLI",-1),ZM=e("p",null,"wc - contare caratteri, parole e linee di un file",-1),JM=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"wc"),t(),e("span",{class:"token parameter variable"},"-c"),t(" file1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"579"),t(" file1")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"wc"),t(),e("span",{class:"token parameter variable"},"-w"),t(" file1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"91"),t(" file1")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"wc"),t(),e("span",{class:"token parameter variable"},"-l"),t(" file1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"5"),t(" file1")])])],-1),XM=e("br",null,null,-1),eA=e("ul",null,[e("li",null,"Spesso usato come parte finale di una pipeline di comandi")],-1),nA={__name:"126",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[QM,ZM,R(a,G({},{ranges:[""]}),{default:v(()=>[JM]),_:1},16),XM,eA]),_:1},16)}}},tA=S(nA,[["__file","/@slidev/slides/126.md"]]),sA=e("h1",null,"Linux CLI",-1),oA=e("p",null,"touch - creare un file vuoto",-1),iA=e("ul",null,[e("li",null,[t("Per creare velocemente un file vuoto è possibile usare il comando "),e("strong",null,"touch")])],-1),aA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"touch"),t(),e("span",{class:"token operator"},"<"),t("nome file"),e("span",{class:"token operator"},">")]),t(`
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
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":22 file4")])])],-1),lA={__name:"127",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[sA,oA,iA,R(a,G({},{ranges:[""]}),{default:v(()=>[aA]),_:1},16)]),_:1},16)}}},rA=S(lA,[["__file","/@slidev/slides/127.md"]]),cA=e("h1",null,"Linux CLI",-1),uA=e("p",null,"mkdir - creare una directory",-1),pA=e("ul",null,[e("li",null,[t("Per creare una nuova directory o albero di directory si usa il comando "),e("strong",null,"mkdir")])],-1),dA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"mkdir"),t(),e("span",{class:"token operator"},"<"),t("directory"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token comment"},"# crea una nuova directory")]),t(`
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
`),e("span",{class:"line"},[e("span",{class:"token number"},"2"),t(" directories, "),e("span",{class:"token number"},"0"),t(" files")])])],-1),mA={__name:"128",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[cA,uA,pA,R(a,G({},{ranges:[""]}),{default:v(()=>[dA]),_:1},16)]),_:1},16)}}},fA=S(mA,[["__file","/@slidev/slides/128.md"]]),hA=e("h1",null,"Linux CLI",-1),_A=e("p",null,"du - calcola lo spazio disco occupato da una directory",-1),gA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"du")]),t(`
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
`),e("span",{class:"line"},[t("52K	"),e("span",{class:"token builtin class-name"},".")])])],-1),vA={__name:"129",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[hA,_A,R(a,G({},{ranges:[""]}),{default:v(()=>[gA]),_:1},16)]),_:1},16)}}},bA=S(vA,[["__file","/@slidev/slides/129.md"]]),xA=e("h1",null,"Linux CLI",-1),kA=e("p",null,"df - visualizza lo spazio disponibile su un filesystem",-1),wA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"df"),t("   ")]),t(`
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
`),e("span",{class:"line"},[t("/dev/nvme0n1p5  740G  469G    239G  "),e("span",{class:"token number"},"67"),t("% /home")])])],-1),yA={__name:"130",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[xA,kA,R(a,G({},{ranges:[""]}),{default:v(()=>[wA]),_:1},16)]),_:1},16)}}},LA=S(yA,[["__file","/@slidev/slides/130.md"]]),IA=e("h1",null,"Linux CLI",-1),$A=e("p",null,"find - search for files in a directory hierarchy",-1),CA=e("ul",null,[e("li",null,"Spesso quando navighiamo nel filesystem abbiamo la necessità di cercare dei file"),e("li",null,[e("code",null,"find"),t(" è un comando potentissimo che permette di fare ricerche nel filesystem molto sofisticate")]),e("li",null,[e("strong",null,"find"),t(" ha 71 parametri, ma non abbiamo bisogno di conoscerli tutti. CI ricordiamo i principali e quando ci serve qualcosa di particolare consultiamo il manuale")])],-1),EA=e("br",null,null,-1),SA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token operator"},"<"),t("directory iniziale"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t(" - parametri opzionali"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# partendo dalla directory corrente scandisce tutti i file e sottodirectory alla ricerca ")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# di ogni file che fa match con pillole*.png")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token builtin class-name"},"."),t(),e("span",{class:"token parameter variable"},"-name"),t(),e("span",{class:"token string"},"'pillole*.png'"),t("  --"),e("span",{class:"token operator"},">"),t(" il carattere * rappresenta uno o più caratteri")]),t(`
`),e("span",{class:"line"}," "),t(`
`),e("span",{class:"line"},"./Downloads/pillole-di-css.png"),t(`
`),e("span",{class:"line"},"./Downloads/img/pillole.png"),t(`
`),e("span",{class:"line"},"./Downloads/pillole-css.png"),t(`
`),e("span",{class:"line"},"./tmp/profmancusoa.github.io/pillole-css.png")])],-1),RA={__name:"131",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[IA,$A,CA,EA,R(a,G({},{ranges:[""]}),{default:v(()=>[SA]),_:1},16)]),_:1},16)}}},zA=S(RA,[["__file","/@slidev/slides/131.md"]]),TA=e("h1",null,"Linux CLI",-1),MA=e("p",null,"find - search for files in a directory hierarchy",-1),AA=e("p",null,"Vediamo alcuni parametri utili",-1),OA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("-type: specifica il tipo di "),e("span",{class:"token function"},"file"),t(" da ricercare "),e("span",{class:"token punctuation"},"("),t("f file, d directory, "),e("span",{class:"token punctuation"},".."),t("."),e("span",{class:"token punctuation"},")")]),t(`
`),e("span",{class:"line"},[t("-user: specifica l'owner del "),e("span",{class:"token function"},"file"),t(),e("span",{class:"token punctuation"},"("),t("nome utente o "),e("span",{class:"token function"},"id"),e("span",{class:"token punctuation"},")")]),t(`
`),e("span",{class:"line"},[t("-atime: cerca un "),e("span",{class:"token function"},"file"),t(" che a cui è stato fatto accesso -n, n o +n giorni fà")]),t(`
`),e("span",{class:"line"},[t("-mtime: cerca un "),e("span",{class:"token function"},"file"),t(" o directory che è stata modificato -n, n o +n giorni fà")]),t(`
`),e("span",{class:"line"},[t("-size: cerca "),e("span",{class:"token function"},"file"),t(" di dimensione -n, n o +n unità di spazio "),e("span",{class:"token punctuation"},"("),t("b,c,k,M,G"),e("span",{class:"token punctuation"},")")]),t(`
`),e("span",{class:"line"},[t("-exec: esegue un comando per ogni "),e("span",{class:"token function"},"file"),t(" selezionato")])])],-1),PA=e("br",null,null,-1),DA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token builtin class-name"},"."),t(),e("span",{class:"token parameter variable"},"-type"),t(" d "),e("span",{class:"token comment"},"# cerca tutte le sottodirectory a partire dalla directory corrente")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token builtin class-name"},"."),t(),e("span",{class:"token parameter variable"},"-type"),t(" f  "),e("span",{class:"token parameter variable"},"-user"),t(" root "),e("span",{class:"token comment"},"# cerca tutti i file di proprietà root")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token builtin class-name"},"."),t(),e("span",{class:"token parameter variable"},"-mtime"),t(),e("span",{class:"token parameter variable"},"-2"),t(),e("span",{class:"token comment"},"# cerca tutti i file che sono stati modificati meno di 2 giorni fà")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token builtin class-name"},"."),t(),e("span",{class:"token parameter variable"},"-mtime"),t(),e("span",{class:"token number"},"2"),t(),e("span",{class:"token comment"},"# cerca tutti i file che sono stati modificati esattamente 2 giorni fà")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token builtin class-name"},"."),t(),e("span",{class:"token parameter variable"},"-mtime"),t(" +2 "),e("span",{class:"token comment"},"# cerca tutti i file che sono stati modificati più di 2 giorni fà")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token builtin class-name"},"."),t(),e("span",{class:"token parameter variable"},"-size"),t(" 512c "),e("span",{class:"token comment"},"# cerca tutti i file di 512 byte")]),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"find"),t(),e("span",{class:"token builtin class-name"},"."),t(),e("span",{class:"token parameter variable"},"-size"),t(" +100M "),e("span",{class:"token parameter variable"},"-exec"),t(),e("span",{class:"token function"},"rm"),t(),e("span",{class:"token punctuation"},"{"),e("span",{class:"token punctuation"},"}"),t(),e("span",{class:"token punctuation"},"\\"),e("span",{class:"token punctuation"},";"),t(),e("span",{class:"token comment"},"# rimuove tutti i file più grandi di 100MByte")])])],-1),jA={__name:"132",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[TA,MA,AA,R(a,G({},{ranges:[""]}),{default:v(()=>[OA]),_:1},16),PA,R(a,G({},{ranges:[""]}),{default:v(()=>[DA]),_:1},16)]),_:1},16)}}},NA=S(jA,[["__file","/@slidev/slides/132.md"]]),FA=e("h1",null,"Linux CLI",-1),HA=e("p",null,"watch - eseguire un programma periodicamente (monitoring)",-1),KA=e("ul",null,[e("li",null,[t("Il comando "),e("strong",null,"watch"),t(" permette di eseguire un comando periodicamente e di visualizzare il suo output sullo schermo")]),e("li",null,[t("Quindi "),e("strong",null,"watch"),t(" è molto comodo per monitorare un’attività di sistema di cui vogliamo osservare il progresso nel tempo")])],-1),WA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"watch"),t(),e("span",{class:"token operator"},"<"),t(),e("span",{class:"token parameter variable"},"-parametri"),t(" opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("comando"),e("span",{class:"token operator"},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"watch"),t(),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("Every "),e("span",{class:"token number"},"2"),t(",0s: "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t("                            ")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"6"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"225"),t(" antonio antonio "),e("span",{class:"token number"},"241664"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":13 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"3"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 DIR4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"579"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":21 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"9"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":04 file2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":22 file4")])])],-1),BA=e("br",null,null,-1),qA=e("ul",null,[e("li",null,[t("Esegue ogni 2 secondi il comando "),e("code",null,"ls -la")])],-1),UA={__name:"133",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[FA,HA,KA,R(a,G({},{ranges:[""]}),{default:v(()=>[WA]),_:1},16),BA,qA]),_:1},16)}}},VA=S(UA,[["__file","/@slidev/slides/133.md"]]),GA=e("h1",null,"Linux CLI",-1),YA=e("p",null,"watch - eseguire un programma periodicamente (monitoring)",-1),QA=e("ul",null,[e("li",null,"I parametri più importanti sono")],-1),ZA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},"-d: evidenzia le differenze tra un periodo di osservazione e il successivo"),t(`
`),e("span",{class:"line"},[t("-n: specifica l'intervallo di osservazione "),e("span",{class:"token keyword"},"in"),t(" secondi")])])],-1),JA=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"watch"),t(),e("span",{class:"token parameter variable"},"-d"),t(),e("span",{class:"token parameter variable"},"-n1"),t(),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("very "),e("span",{class:"token number"},"1"),t(",0s: "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la"),t("                            ")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"6"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 "),e("span",{class:"token builtin class-name"},".")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"225"),t(" antonio antonio "),e("span",{class:"token number"},"241664"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":13 "),e("span",{class:"token punctuation"},"..")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x   "),e("span",{class:"token number"},"3"),t(" antonio antonio   "),e("span",{class:"token number"},"4096"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 DIR4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"579"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":21 file1")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"9"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":04 file2")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":22 file4")])])],-1),XA=e("br",null,null,-1),e7=e("ul",null,[e("li",null,"Visualizza ogni secondo l’output di ls -la evidenziandone le differenze"),e("li",null,"Watch è il tool perfetto per il monitoring di sistema")],-1),n7={__name:"134",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[GA,YA,QA,R(a,G({},{ranges:[""]}),{default:v(()=>[ZA]),_:1},16),R(a,G({},{ranges:[""]}),{default:v(()=>[JA]),_:1},16),XA,e7]),_:1},16)}}},t7=S(n7,[["__file","/@slidev/slides/134.md"]]),s7=e("h1",null,"Linux CLI",-1),o7=e("p",null,"chown - cambiare proprietario di un file",-1),i7=e("ul",null,[e("li",null,[e("strong",null,"chown"),t(" permette di cambiare l’owner o proprietario di un file")]),e("li",null,"Nello specifico permette di cambiare l’utente e/o il gruppo di appartenenza di un file")],-1),a7=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"chown"),t(),e("span",{class:"token operator"},"<"),t(),e("span",{class:"token parameter variable"},"-parametri"),t(" opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token punctuation"},"["),t("Utente"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"["),t(":Gruppo"),e("span",{class:"token punctuation"},"]"),t(),e("span",{class:"token operator"},"<"),t("file"),e("span",{class:"token operator"},">")]),t(`
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
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" root    antonio    "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"16"),t(),e("span",{class:"token number"},"19"),t(":16 file5")])])],-1),l7={__name:"135",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[s7,o7,i7,R(a,G({},{ranges:[""]}),{default:v(()=>[a7]),_:1},16)]),_:1},16)}}},r7=S(l7,[["__file","/@slidev/slides/135.md"]]),c7=e("h1",null,"Linux CLI",-1),u7=e("p",null,"chown - cambiare proprietario di un file",-1),p7=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sudo"),t(),e("span",{class:"token function"},"chown"),t(" root:backup file5 "),e("span",{class:"token comment"},"# cambia il gruppo di appartenenza del file")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"3"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 DIR4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" antonio antonio    "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":22 file4")]),t(`
`),e("span",{class:"line"},[t("-rw-rw-r-- "),e("span",{class:"token number"},"1"),t(" root    backup     "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"16"),t(),e("span",{class:"token number"},"19"),t(":16 file5")])])],-1),d7=e("br",null,null,-1),m7=e("ul",null,[e("li",null,[e("strong",null,"-R"),t(" è il parametro più importante che cambia l’ownership ricorsivamente di tutti i file e directory")])],-1),f7=e("br",null,null,-1),h7=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"chown"),t(),e("span",{class:"token parameter variable"},"-R"),t(" antonio:backup DIR4")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t(" $ "),e("span",{class:"token function"},"ls"),t(),e("span",{class:"token parameter variable"},"-la")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"11"),t(),e("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"2"),t(" antonio antonio "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 DIR3")]),t(`
`),e("span",{class:"line"},[t("drwxrwxr-x "),e("span",{class:"token number"},"3"),t(" antonio backup  "),e("span",{class:"token number"},"4"),t(",0K "),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":24 DIR4")])])],-1),_7={__name:"136",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[c7,u7,R(a,G({},{ranges:[""]}),{default:v(()=>[p7]),_:1},16),d7,m7,f7,R(a,G({},{ranges:[""]}),{default:v(()=>[h7]),_:1},16)]),_:1},16)}}},g7=S(_7,[["__file","/@slidev/slides/136.md"]]),v7=e("h1",null,"Linux CLI",-1),b7=e("p",null,"chmod - cambiare permessi di un file",-1),x7=e("ul",null,[e("li",null,[t("Il comando "),e("strong",null,"chmod"),t(" permette di cambiare i permessi di un file di cui si è proprietari")])],-1),k7=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"chmod"),t(),e("span",{class:"token operator"},"<"),t(),e("span",{class:"token parameter variable"},"-parametri"),t(" opzionali"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("octal mode"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token operator"},"<"),t("file"),e("span",{class:"token operator"},">")]),t(`
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
`),e("span",{class:"line"},[t("-rw-rw-r--   "),e("span",{class:"token number"},"1"),t(" antonio antonio      "),e("span",{class:"token number"},"9"),t(),e("span",{class:"token builtin class-name"},"set"),t(),e("span",{class:"token number"},"12"),t(),e("span",{class:"token number"},"15"),t(":04 file2")])])],-1),w7={__name:"137",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[v7,b7,x7,R(a,G({},{ranges:[""]}),{default:v(()=>[k7]),_:1},16)]),_:1},16)}}},y7=S(w7,[["__file","/@slidev/slides/137.md"]]),L7=e("h1",null,"Linux CLI",-1),I7=e("p",null,"Esercitazione cli_13",-1),$7=e("ul",null,[e("li",null,[t("Svolgere i seguenti moduli del dojo "),e("a",{href:"https://pwn.college/linux-luminarium/",target:"_blank",rel:"noopener"},"Linux Luminarium"),e("ul",null,[e("li",null,[e("a",{href:"https://pwn.college/linux-luminarium/permissions/",target:"_blank",rel:"noopener"},"Perciving Permissions")])])]),e("li",null,[t("Leggere e visualizzare le due unità "),e("code",null,"Lectures and Reading")]),e("li",null,[t("Completare con successo tutte le 8 "),e("code",null,"Challenges")]),e("li",null,[t("Domande del docente sui temi trattati e sulle sezioni "),e("em",null,"Lecturesd and Reading")]),e("li",null,[t("Consegnare su su github 1 screenshots che dimostrano il superamento delle 8 challenges con i seguenti nomi: "),e("ul",null,[e("li",null,[e("em",null,"|cognome|_dojo_linux_13a.(png|jpg)")])])])],-1),C7={__name:"138",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[L7,I7,$7]),_:1},16))}},E7=S(C7,[["__file","/@slidev/slides/138.md"]]),S7=e("h1",null,"Linux CLI",-1),R7=e("p",null,"Esercitazione cli_14",-1),z7=e("ul",null,[e("li",null,"Svolgere la seguente esercitazione (Quinz inclusi)")],-1),T7=e("br",null,null,-1),M7=e("p",null,[e("a",{href:"https://linuxjourney.com/lesson/stdout-standard-out-redirect",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/stdout-standard-out-redirect")],-1),A7=e("br",null,null,-1),O7=e("ul",null,[e("li",null,"Domande agli studenti sul contenuto dell’esercitazione")],-1),P7={__name:"139",setup(n){const s={};return I(E),(o,i)=>{const a=zn("center");return b(),C(A,M(z(s)),{default:v(()=>[S7,R7,z7,T7,R(a,null,{default:v(()=>[M7]),_:1}),A7,O7]),_:1},16)}}},D7=S(P7,[["__file","/@slidev/slides/139.md"]]),j7=e("h1",null,"Linux CLI",-1),N7=e("p",null,"Esercitazione cli_15",-1),F7=e("ul",null,[e("li",null,"Svolgere la seguente esercitazione (Quinz inclusi)")],-1),H7=e("br",null,null,-1),K7=e("p",null,[e("a",{href:"https://linuxjourney.com/lesson/regular-expressions-regex",target:"_blank",rel:"noopener"},"https://linuxjourney.com/lesson/regular-expressions-regex")],-1),W7=e("br",null,null,-1),B7=e("ul",null,[e("li",null,"Svolgere i punti dal 2 al 8 inclusi"),e("li",null,"Domande agli studenti sul contenuto dell’esercitazione")],-1),q7={__name:"140",setup(n){const s={};return I(E),(o,i)=>{const a=zn("center");return b(),C(A,M(z(s)),{default:v(()=>[j7,N7,F7,H7,R(a,null,{default:v(()=>[K7]),_:1}),W7,B7]),_:1},16)}}},U7=S(q7,[["__file","/@slidev/slides/140.md"]]),V7=e("p",null," ",-1),G7={__name:"141",setup(n){const s={};return I(E),(o,i)=>{const a=ct;return b(),C(A,M(z(s)),{default:v(()=>[V7,R(a,{fs:"100px"},{default:v(()=>[t(" Gestione dei processi ")]),_:1})]),_:1},16)}}},Y7=S(G7,[["__file","/@slidev/slides/141.md"]]),Q7=e("h1",null,"Linux CLI",-1),Z7=e("p",null,"ps - visualizza i processi di sistema",-1),J7=e("ul",null,[e("li",null,[t("Il comando "),e("strong",null,"ps"),t(" visualizza una snapshot dei processi in esecuzione sul sistema")]),e("li",null,"Ha 32 parametri opzionali ma i più comuni sono")],-1),X7=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("-a: visualizza tutti i processi "),e("span",{class:"token keyword"},"in"),t(" esecuzione")]),t(`
`),e("span",{class:"line"},"-u: visualizza il nome del proprietario dei processi"),t(`
`),e("span",{class:"line"},"-x: visualizza anche i processi root")])],-1),eO=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"ps"),t(" aux o "),e("span",{class:"token function"},"ps"),t(),e("span",{class:"token parameter variable"},"-aux")]),t(`
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
`),e("span",{class:"line"},[t("antonio     "),e("span",{class:"token number"},"3340"),t("  "),e("span",{class:"token number"},"0.0"),t("  "),e("span",{class:"token number"},"0.0"),t(),e("span",{class:"token number"},"250744"),t("  "),e("span",{class:"token number"},"8516"),t(" ?        SNsl set14   "),e("span",{class:"token number"},"0"),t(":00 /usr/libexec/gvfsd")])])],-1),nO={__name:"142",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[Q7,Z7,J7,R(a,G({},{ranges:[""]}),{default:v(()=>[X7]),_:1},16),R(a,G({},{ranges:[""]}),{default:v(()=>[eO]),_:1},16)]),_:1},16)}}},tO=S(nO,[["__file","/@slidev/slides/142.md"]]),sO=e("h1",null,"Linux CLI",-1),oO=e("p",null,"top - monitor dei processi",-1),iO=e("ul",null,[e("li",null,[t("Il comando "),e("strong",null,"top"),t(" permette di monitorare in realtime lo stato dei processi e del sistema")])],-1),aO=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"top"),t(" o "),e("span",{class:"token function"},"top"),t(),e("span",{class:"token parameter variable"},"-d1"),t(),e("span",{class:"token punctuation"},"("),t("-d imposta la frequenza di aggiornamento "),e("span",{class:"token keyword"},"in"),t(" secondi"),e("span",{class:"token punctuation"},")")]),t(`
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
`),e("span",{class:"line"},[t("      "),e("span",{class:"token number"},"3"),t(" root       "),e("span",{class:"token number"},"0"),t(),e("span",{class:"token parameter variable"},"-20"),t("       "),e("span",{class:"token number"},"0"),t("      "),e("span",{class:"token number"},"0"),t("      "),e("span",{class:"token number"},"0"),t(" I   "),e("span",{class:"token number"},"0,0"),t("   "),e("span",{class:"token number"},"0,0"),t("   "),e("span",{class:"token number"},"0"),t(":00.00 rcu_gp")])])],-1),lO={__name:"143",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[sO,oO,iO,R(a,G({},{ranges:[""]}),{default:v(()=>[aO]),_:1},16)]),_:1},16)}}},rO=S(lO,[["__file","/@slidev/slides/143.md"]]),cO=e("h1",null,"Linux CLI",-1),uO=e("p",null,"kill - inviare un segnale ad un processo (uccidere un processo)",-1),pO=e("ul",null,[e("li",null,[t("Il comando "),e("strong",null,"kill"),t(" server per inviare un segnale ad un processo")]),e("li",null,[t("Il segnale più comune è quello nominato "),e("strong",null,"SIGKILL"),t(" che termina e uccide un process")])],-1),dO=e("br",null,null,-1),mO=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"kill"),t(),e("span",{class:"token parameter variable"},"-9"),t(),e("span",{class:"token operator"},"<"),t("process id"),e("span",{class:"token operator"},">"),t("  "),e("span",{class:"token comment"},"# uccide il processo identificato da id")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"kill"),t(),e("span",{class:"token parameter variable"},"-9"),t(),e("span",{class:"token number"},"132480")])])],-1),fO={__name:"144",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[cO,uO,pO,dO,R(a,G({},{ranges:[""]}),{default:v(()=>[mO]),_:1},16)]),_:1},16)}}},hO=S(fO,[["__file","/@slidev/slides/144.md"]]),_O=e("h1",null,"Linux CLI",-1),gO=e("p",null,"free - visualizzare la memoria disponibile",-1),vO=e("ul",null,[e("li",null,"Visualizza lo stato della memoria RAM indicando la capacità occupata e quella disponibile")],-1),bO=e("br",null,null,-1),xO=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"free"),t(),e("span",{class:"token parameter variable"},"-h")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},"               buff/cache condivisi gratuiti totali utilizzati disponibili"),t(`
`),e("span",{class:"line"},[t("Mem:            15Gi       "),e("span",{class:"token number"},"3"),t(",1Gi       "),e("span",{class:"token number"},"1"),t(",9Gi       "),e("span",{class:"token number"},"4"),t(",2Gi        10Gi       "),e("span",{class:"token number"},"7"),t(",0Gi")]),t(`
`),e("span",{class:"line"},[t("Swap:           15Gi       "),e("span",{class:"token number"},"0"),t(",0Ki        15Gi")])])],-1),kO={__name:"145",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[_O,gO,vO,bO,R(a,G({},{ranges:[""]}),{default:v(()=>[xO]),_:1},16)]),_:1},16)}}},wO=S(kO,[["__file","/@slidev/slides/145.md"]]),yO=e("h1",null,"Linux CLI",-1),LO=e("p",null,"Esercitazione cli_16",-1),IO=e("ul",null,[e("li",null,[t("Svolgere i seguenti moduli del dojo "),e("a",{href:"https://pwn.college/linux-luminarium/",target:"_blank",rel:"noopener"},"Linux Luminarium"),e("ul",null,[e("li",null,[e("a",{href:"https://pwn.college/linux-luminarium/processes/",target:"_blank",rel:"noopener"},"Processes and Jobs")])])]),e("li",null,[t("Leggere e visualizzare le due unità "),e("code",null,"Lectures and Reading")]),e("li",null,[t("Completare con successo tutte le 9 "),e("code",null,"Challenges")]),e("li",null,[t("Domande del docente sui temi trattati e sulle sezioni "),e("em",null,"Lecturesd and Reading")]),e("li",null,[t("Consegnare su su github 1 screenshots che dimostrano il superamento delle 9 challenges con i seguenti nomi: "),e("ul",null,[e("li",null,[e("em",null,"|cognome|_dojo_linux_16a.(png|jpg)")])])])],-1),$O={__name:"146",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[yO,LO,IO]),_:1},16))}},CO=S($O,[["__file","/@slidev/slides/146.md"]]),EO=e("p",null," ",-1),SO={__name:"147",setup(n){const s={};return I(E),(o,i)=>{const a=ct;return b(),C(A,M(z(s)),{default:v(()=>[EO,R(a,{fs:"100px"},{default:v(()=>[t(" Comandi di sistema ")]),_:1})]),_:1},16)}}},RO=S(SO,[["__file","/@slidev/slides/147.md"]]),zO=e("h1",null,"Linux CLI",-1),TO=e("p",null,"sudo - eseguire un comando come un’altro utente",-1),MO=e("ul",null,[e("li",null,"In alcuni casi è necessario eseguire un comando con i privilegi di root"),e("li",null,"Tuttavia in un sistema, a meno che noi siamo root, non conosciamo la password"),e("li",null,"Pertanto l’amministratore può decidere di fornirci i permessi per eseguire alcuni o tutti i comandi come root"),e("li",null,[t("Per far ciò si usa il comando "),e("strong",null,"sudo")])],-1),AO=e("br",null,null,-1),OO=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sudo"),t(),e("span",{class:"token operator"},"<"),t("comando"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token comment"},"# esegue comando come root")]),t(`
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
`),e("span",{class:"line"},[t("-rw-------  "),e("span",{class:"token number"},"1"),t(" root root    "),e("span",{class:"token number"},"48"),t(" ago "),e("span",{class:"token number"},"10"),t(),e("span",{class:"token number"},"17"),t(":18 .lesshst")])])],-1),PO={__name:"148",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[zO,TO,MO,AO,R(a,G({},{ranges:[""]}),{default:v(()=>[OO]),_:1},16)]),_:1},16)}}},DO=S(PO,[["__file","/@slidev/slides/148.md"]]),jO=e("h1",null,"Linux CLI",-1),NO=e("p",null,"Il packet manager APT",-1),FO=e("ul",null,[e("li",null,[e("p",null,"Fin dagli albori, ogni distribuzione di linux fornisce un packet manager più o meno sofisticato")]),e("li",null,[e("p",null,"Windows non ha mai fornito un packet manager (esiste qualche scimmiottamento in tempi recenti)")]),e("li",null,[e("p",null,[t("Le distribuzioni derivate da Debiam incorporano tutte il packet manager "),e("code",null,"APT")])]),e("li",null,[e("p",null,[e("strong",null,"APT"),t(" permette con estrema semplicità, e gestendo le dipendenze per noi,di")]),e("ul",null,[e("li",null,"cercare"),e("li",null,"installare"),e("li",null,"rimuovere")])]),e("li",null,[e("p",null,"ogni tipo di software che vogliamo usare su linux")])],-1),HO={__name:"149",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[jO,NO,FO]),_:1},16))}},KO=S(HO,[["__file","/@slidev/slides/149.md"]]),WO=e("h1",null,"Linux CLI",-1),BO=e("p",null,"apt search - ricerchiamo un programma da installare",-1),qO=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"apt"),t(" search "),e("span",{class:"token operator"},"<"),t("stringa"),e("span",{class:"token operator"},">"),t(),e("span",{class:"token comment"},"# cerca nel repository tutti i software e paccketti che includono stringa")]),t(`
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
`),e("span",{class:"line"},[t("  port per Python "),e("span",{class:"token number"},"3"),t(" della specifica FIGlet")])])],-1),UO={__name:"150",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[WO,BO,R(a,G({},{ranges:[""]}),{default:v(()=>[qO]),_:1},16)]),_:1},16)}}},VO=S(UO,[["__file","/@slidev/slides/150.md"]]),GO=e("h1",null,"Linux CLI",-1),YO=e("p",null,"apt install - installare un software",-1),QO=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sudo"),t(),e("span",{class:"token function"},"apt"),t(),e("span",{class:"token function"},"install"),t(" figlet "),e("span",{class:"token comment"},"# installa il paccketto figlet")]),t(`
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
`),e("span",{class:"line"},[t("Elaborazione dei trigger per man-db "),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"2.10"),t(".2-1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},".."),t(".")])])],-1),ZO={__name:"151",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[GO,YO,R(a,G({},{ranges:[""]}),{default:v(()=>[QO]),_:1},16)]),_:1},16)}}},JO=S(ZO,[["__file","/@slidev/slides/151.md"]]),XO=e("h1",null,"Linux CLI",-1),eP=e("p",null,"apt remove - disinstallare un software",-1),nP=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[t("$ "),e("span",{class:"token function"},"sudo"),t(),e("span",{class:"token function"},"apt"),t(" remove figlet "),e("span",{class:"token comment"},"# rimuove il paccketto figlet")]),t(`
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
`),e("span",{class:"line"},[t("Elaborazione dei trigger per man-db "),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"2.10"),t(".2-1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},".."),t(".")])])],-1),tP={__name:"152",setup(n){const s={};return I(E),(o,i)=>{const a=ee;return b(),C(A,M(z(s)),{default:v(()=>[XO,eP,R(a,G({},{ranges:[""]}),{default:v(()=>[nP]),_:1},16)]),_:1},16)}}},sP=S(tP,[["__file","/@slidev/slides/152.md"]]),oP=e("h1",null,"Linux CLI",-1),iP=e("p",null,"Esercitazione cli_17",-1),aP=e("ul",null,[e("li",null,[t("Svolgere i seguenti moduli del dojo "),e("a",{href:"https://pwn.college/linux-luminarium/",target:"_blank",rel:"noopener"},"Linux Luminarium"),e("ul",null,[e("li",null,[e("a",{href:"https://pwn.college/linux-luminarium/users/",target:"_blank",rel:"noopener"},"Untangling Users")]),e("li",null,[e("a",{href:"https://pwn.college/linux-luminarium/chaining/",target:"_blank",rel:"noopener"},"Chaining Commands")])])]),e("li",null,[t("Leggere e visualizzare le due unità "),e("code",null,"Lectures and Reading")]),e("li",null,[t("Completare con successo tutte le 8 "),e("code",null,"Challenges")]),e("li",null,[t("Domande del docente sui temi trattati e sulle sezioni "),e("em",null,"Lecturesd and Reading")]),e("li",null,[t("Consegnare su su github 2 screenshots che dimostrano il superamento delle 8 challenges con i seguenti nomi: "),e("ul",null,[e("li",null,[e("em",null,"|cognome|_dojo_linux_17a.(png|jpg)")]),e("li",null,[e("em",null,"|cognome|_dojo_linux_17b.(png|jpg)")])])])],-1),lP={__name:"153",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[oP,iP,aP]),_:1},16))}},rP=S(lP,[["__file","/@slidev/slides/153.md"]]),cP="/3/linux_cli/assets/hh01-23d0a28c.webp",uP=e("img",{src:cP,style:{position:"relative",top:"-20px"}},null,-1),pP={__name:"154",setup(n){const s={};return I(E),(o,i)=>(b(),C(A,M(z(s)),{default:v(()=>[uP]),_:1},16))}},dP=S(pP,[["__file","/@slidev/slides/154.md"]]),mP=[{path:"1",name:"page-1",component:II,meta:{theme:"default",background:"/cover.png",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"RETI 3",as:"2024/2025",version:"1.2.4",title:"SISTEMI & RETI 3",slide:{raw:`---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://source.unsplash.com/collection/94734566/1920x1080
background: /cover.png
class: "text-center"
# https://sli.dev/custom/highlighters.html
# show line numbers in code blocks
lineNumbers: false
aspectRatio: "16_/9"
routerMode: "hash"
materia: RETI 3
as: 2024/2025
version: "1.2.4"
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
</div>`,frontmatter:{theme:"default",background:"/cover.png",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"RETI 3",as:"2024/2025",version:"1.2.4",title:"SISTEMI & RETI 3"},index:0,start:0,end:29,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:TI,meta:{slide:{raw:`
# Linux CLI 

<img src="/media/cli_00.png" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 

<img src="/media/cli_00.png" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:1,start:30,end:36,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:DI,meta:{slide:{raw:`
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

<img src="/media/c_03.jpg" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:4,start:49,end:54,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:JI,meta:{slide:{raw:`
# Linux CLI

Esercitarsi con Linux e Materiale Aggiuntivo

- [PWN College - Linux Luminarium](https://pwn.college/linux-luminarium/)
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
`,title:"Linux CLI",level:1,content:`# Linux CLI

Esercitarsi con Linux e Materiale Aggiuntivo

- [PWN College - Linux Luminarium](https://pwn.college/linux-luminarium/)
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
- [learn-the-command-line](https://www.codecademy.com/learn/learn-the-command-line-viewing-and-changing-the-file-system)`,frontmatter:{},index:5,start:55,end:74,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:s$,meta:{slide:{raw:`
# Linux CLI

Esercitarsi con Linux e Materiale Aggiuntivo

- [learn-the-command-line-redirecting-input-and-output](https://www.codecademy.com/learn/learn-the-command-line-redirecting-input-and-output)
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

- [learn-the-command-line-redirecting-input-and-output](https://www.codecademy.com/learn/learn-the-command-line-redirecting-input-and-output)
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
- [File utilities](https://linuxcommand.org/lc3_man_page_index.php#file)`,frontmatter:{},index:6,start:75,end:94,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:r$,meta:{slide:{raw:`
# Linux CLI

Esercitarsi con Linux e Materiale Aggiuntivo

- [Text utilities](https://linuxcommand.org/lc3_man_page_index.php#text)
- [Shell utilities](https://linuxcommand.org/lc3_man_page_index.php#shell)
- [Misc commands](https://linuxcommand.org/lc3_man_page_index.php#other)
- [Intro to Linux](https://tldp.org/LDP/intro-linux/intro-linux.pdf?ref=itsfoss.com)
- [Learn Linux in 5 Days](https://www.linuxtrainingacademy.com/itsfoss-ll5d/)
- [Linux Basics for Hacker](/support/3/linux_cli/)
- [Linux_Command_Line](/support/3/linux_cli/Linux_Command_Line.epub)
- [Linux_Basics_Hackers](/support/3/linux_cli/Linux_Basics_Hackers.epub)
- [Essential_Linux_Commands](/support/3/linux_cli/Essential_Linux_Commands.epub)
`,title:"Linux CLI",level:1,content:`# Linux CLI

Esercitarsi con Linux e Materiale Aggiuntivo

- [Text utilities](https://linuxcommand.org/lc3_man_page_index.php#text)
- [Shell utilities](https://linuxcommand.org/lc3_man_page_index.php#shell)
- [Misc commands](https://linuxcommand.org/lc3_man_page_index.php#other)
- [Intro to Linux](https://tldp.org/LDP/intro-linux/intro-linux.pdf?ref=itsfoss.com)
- [Learn Linux in 5 Days](https://www.linuxtrainingacademy.com/itsfoss-ll5d/)
- [Linux Basics for Hacker](/support/3/linux_cli/)
- [Linux_Command_Line](/support/3/linux_cli/Linux_Command_Line.epub)
- [Linux_Basics_Hackers](/support/3/linux_cli/Linux_Basics_Hackers.epub)
- [Essential_Linux_Commands](/support/3/linux_cli/Essential_Linux_Commands.epub)`,frontmatter:{},index:7,start:95,end:110,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:f$,meta:{slide:{raw:`
# Linux CLI

Esercitarsi con Linux giocando a Bandit


<a href="https://www.youtube.com/playlist?list=PLhruyobnXYz9XE9nXpgyUuaNaJzucdvwE" target="_blank"><img src="/media/cli_23.png" width="950" style="margin:auto;position:relative; left: 0px; top: 20px;"></a>
`,title:"Linux CLI",level:1,content:`# Linux CLI

Esercitarsi con Linux giocando a Bandit


<a href="https://www.youtube.com/playlist?list=PLhruyobnXYz9XE9nXpgyUuaNaJzucdvwE" target="_blank"><img src="/media/cli_23.png" width="950" style="margin:auto;position:relative; left: 0px; top: 20px;"></a>`,frontmatter:{},index:8,start:111,end:119,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:k$,meta:{slide:{raw:`
# Linux CLI

Esercitarsi con Linux giocando a Bandit

<div style="border: 0px solid black;width:33%;position:relative; top: 0px; left:0px;">

- [Intro](https://youtu.be/DMG3A9f1EfE)
- [Livello 00](https://youtu.be/qY2W6ZiYB-o)
- [Livello 01](https://youtu.be/sPk5g25Uimo)
- [Livello 02](https://youtu.be/vuzsPh4wIVo)
- [Livello 03](https://youtu.be/ygYIDn2Fo3Y)
- [Livello 04](https://youtu.be/0FAEBDzefgY)
- [Livello 05](https://youtu.be/Wm2J21CXVnM)
- [Livello 06](https://youtu.be/iGPhRS6of88)
- [Livello 07](https://youtu.be/Ce1swn03lsg)
- [Livello 08](https://youtu.be/3b7h2BacgDg)
- [Livello 09](https://youtu.be/KkMH017YUHU)
- [Livello 10](https://youtu.be/T2j9bAJihyE)

</div>

<div style="border: 0px solid black;width:33%;position:relative; top: -382px; left: 300px;">

- [Livello 11](https://youtu.be/jGDuTP5q0dk)
- [Livello 12](https://youtu.be/p-lOinMmFZs)
- [Livello 13](https://youtu.be/7bl99RA8QMM)
- [Livello 14](https://youtu.be/rGcG0f5TVcc)
- [Livello 15](https://youtu.be/MwosasHuQL8)
- [Livello 16](https://youtu.be/2oRHnQYlvFY)
- [Livello 17](https://youtu.be/OOV1yaFDoCg)
- [Livello 18](https://youtu.be/qjOXW1uu9II)
- [Livello 19](https://youtu.be/QuJVj7Rid9g)
- [Livello 20](https://youtu.be/DfNtoKDPWDg)
- [Livello 21](https://youtu.be/XqpeqxM06e0)
- [Livello 22](https://youtu.be/h8-u-Om5XeE)

</div>

<div style="border: 0px solid black;width:33%;position:relative; top: -765px; left: 600px;">

- [Livello 23](https://youtu.be/ozOIZz-SQuo)
- [Livello 24](https://youtu.be/gbc9wYRv7p8)
- [Livello 25](https://youtu.be/R2yCHJuMixs)
- [Livello 26](https://youtu.be/Fjw_JaLMYss)
- [Livello 27](https://youtu.be/CHic_Ks-Smk)
- [Livello 28](https://youtu.be/0sZeXEwx-Cc)
- [Livello 29](https://youtu.be/9jjzf7ZRlfQ)
- [Livello 30](https://youtu.be/W0q55XAw0Vs)
- [Livello 31](https://youtu.be/afayTF3L8mM)
- [Livello 32](https://youtu.be/tUPJRqLys0Y)
- [Livello 33](https://youtu.be/a1hDMXQIWTY)

</div>

`,title:"Linux CLI",level:1,content:`# Linux CLI

Esercitarsi con Linux giocando a Bandit

<div style="border: 0px solid black;width:33%;position:relative; top: 0px; left:0px;">

- [Intro](https://youtu.be/DMG3A9f1EfE)
- [Livello 00](https://youtu.be/qY2W6ZiYB-o)
- [Livello 01](https://youtu.be/sPk5g25Uimo)
- [Livello 02](https://youtu.be/vuzsPh4wIVo)
- [Livello 03](https://youtu.be/ygYIDn2Fo3Y)
- [Livello 04](https://youtu.be/0FAEBDzefgY)
- [Livello 05](https://youtu.be/Wm2J21CXVnM)
- [Livello 06](https://youtu.be/iGPhRS6of88)
- [Livello 07](https://youtu.be/Ce1swn03lsg)
- [Livello 08](https://youtu.be/3b7h2BacgDg)
- [Livello 09](https://youtu.be/KkMH017YUHU)
- [Livello 10](https://youtu.be/T2j9bAJihyE)

</div>

<div style="border: 0px solid black;width:33%;position:relative; top: -382px; left: 300px;">

- [Livello 11](https://youtu.be/jGDuTP5q0dk)
- [Livello 12](https://youtu.be/p-lOinMmFZs)
- [Livello 13](https://youtu.be/7bl99RA8QMM)
- [Livello 14](https://youtu.be/rGcG0f5TVcc)
- [Livello 15](https://youtu.be/MwosasHuQL8)
- [Livello 16](https://youtu.be/2oRHnQYlvFY)
- [Livello 17](https://youtu.be/OOV1yaFDoCg)
- [Livello 18](https://youtu.be/qjOXW1uu9II)
- [Livello 19](https://youtu.be/QuJVj7Rid9g)
- [Livello 20](https://youtu.be/DfNtoKDPWDg)
- [Livello 21](https://youtu.be/XqpeqxM06e0)
- [Livello 22](https://youtu.be/h8-u-Om5XeE)

</div>

<div style="border: 0px solid black;width:33%;position:relative; top: -765px; left: 600px;">

- [Livello 23](https://youtu.be/ozOIZz-SQuo)
- [Livello 24](https://youtu.be/gbc9wYRv7p8)
- [Livello 25](https://youtu.be/R2yCHJuMixs)
- [Livello 26](https://youtu.be/Fjw_JaLMYss)
- [Livello 27](https://youtu.be/CHic_Ks-Smk)
- [Livello 28](https://youtu.be/0sZeXEwx-Cc)
- [Livello 29](https://youtu.be/9jjzf7ZRlfQ)
- [Livello 30](https://youtu.be/W0q55XAw0Vs)
- [Livello 31](https://youtu.be/afayTF3L8mM)
- [Livello 32](https://youtu.be/tUPJRqLys0Y)
- [Livello 33](https://youtu.be/a1hDMXQIWTY)

</div>`,frontmatter:{},index:9,start:120,end:176,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:$$,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Intro
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
Intro
</Cover>`,frontmatter:{},index:10,start:177,end:184,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:z$,meta:{slide:{raw:`
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
  - Unit`,frontmatter:{},index:11,start:185,end:202,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:j$,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazioni

- Per svolgere le esercitazioni seguenti in modo sicuro e in modo riproducibile (tutti gli studenti hanno lo stesso ambiente) utilizziamo una tecnologia chiamta \`Docker\` (la vedremo in dettaglio in 5)
- Quindi le esercitazioni non le svogeremo direttamente sul PC, ma in un ambiente "virtuale" protetto e sicuro
- In altre parole potremo sperimentare senza problemi e senza timore di "rompere" il PC
- Qualsiasi cosa avviene nell'ambiente "virtuale" (container) NON ha impatto sul PC in uso

<Banner mt=30px padding=30px>
<center>
SPERIMENTATE CON TRANQUILLITA'
</center>
</Banner>
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazioni

- Per svolgere le esercitazioni seguenti in modo sicuro e in modo riproducibile (tutti gli studenti hanno lo stesso ambiente) utilizziamo una tecnologia chiamta \`Docker\` (la vedremo in dettaglio in 5)
- Quindi le esercitazioni non le svogeremo direttamente sul PC, ma in un ambiente "virtuale" protetto e sicuro
- In altre parole potremo sperimentare senza problemi e senza timore di "rompere" il PC
- Qualsiasi cosa avviene nell'ambiente "virtuale" (container) NON ha impatto sul PC in uso

<Banner mt=30px padding=30px>
<center>
SPERIMENTATE CON TRANQUILLITA'
</center>
</Banner>`,frontmatter:{},index:12,start:203,end:219,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:s3,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazioni

- Per eseguire ed entrare nell'ambiente virtuale eseguite il seguente comando

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

- Per eseguire ed entrare nell'ambiente virtuale eseguite il seguente comando

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
\`\`\``,frontmatter:{},index:13,start:220,end:243,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:d3,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_01

- Svolgere la seguente esercitazione (Quiz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/linux-history](https://linuxjourney.com/lesson/linux-history)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_01

- Svolgere la seguente esercitazione (Quiz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/linux-history](https://linuxjourney.com/lesson/linux-history)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione`,frontmatter:{},index:14,start:244,end:261,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:b3,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazioni

- Per esercitarci usiamo anche una piattaforma didattica online che si chiama [PWN COLLEGE](https://pwn.college)

<img src="/media/cli_21.png" width="550" style="margin:auto;position:relative; left: 0px; top: 20px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazioni

- Per esercitarci usiamo anche una piattaforma didattica online che si chiama [PWN COLLEGE](https://pwn.college)

<img src="/media/cli_21.png" width="550" style="margin:auto;position:relative; left: 0px; top: 20px;">`,frontmatter:{},index:15,start:262,end:272,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:I3,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazioni

- PWN COLLEGE è una piattaforma dedicata all'apprendimento e alla sperimentazione
- Contiene un vasto curriculum su tutti i principali temi riguardanti la **cyber security**
- Linux ovviamente è un argomento fondamentale per affrontare anche i primi esercizi
- Noi useremo principalmente la sezione dedicata all'apprendimento dei rudimenti della CLI di Linux

<Banner mt=30px padding=30px>
Invito TUTTI gli studenti a sperimentare ed apprendere tramite il materiale fornito e tramite PWN COLLEGE.<br>
Anche se all'inizio può risultare ostico, una volta entrati nella mentalità corretta sarà un modo divertente di apprendere e mettere a frutto le proprie capacità
</Banner>
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazioni

- PWN COLLEGE è una piattaforma dedicata all'apprendimento e alla sperimentazione
- Contiene un vasto curriculum su tutti i principali temi riguardanti la **cyber security**
- Linux ovviamente è un argomento fondamentale per affrontare anche i primi esercizi
- Noi useremo principalmente la sezione dedicata all'apprendimento dei rudimenti della CLI di Linux

<Banner mt=30px padding=30px>
Invito TUTTI gli studenti a sperimentare ed apprendere tramite il materiale fornito e tramite PWN COLLEGE.<br>
Anche se all'inizio può risultare ostico, una volta entrati nella mentalità corretta sarà un modo divertente di apprendere e mettere a frutto le proprie capacità
</Banner>`,frontmatter:{},index:16,start:273,end:288,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:R3,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_02

- Utilizzando l'email istituzionale creare un account su PWN COLLEGE
- Consegnare su github uno screenshot che fa vedere al docente il tuo user name appena creato su PWN COLLEGE
- Il file si deve chiamare *|congome|_pwncollege_account.(png|jpg)*
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_02

- Utilizzando l'email istituzionale creare un account su PWN COLLEGE
- Consegnare su github uno screenshot che fa vedere al docente il tuo user name appena creato su PWN COLLEGE
- Il file si deve chiamare *|congome|_pwncollege_account.(png|jpg)*`,frontmatter:{},index:17,start:289,end:298,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:D3,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_03

- Svolgere il dojo [Getting Started](https://pwn.college/welcome/)
- Leggere e visualizzare le due unità \`Lectures and Reading\`
- Completare con successo tutte le 10 \`Challenges\`
- Domande del docente sui temi trattati e sulle sezioni *Lectures and Reading*
- Consegnare su github lo screenshot che dimostra il superamento delle 10 challenges con il seguente nome *|cognome|_dojo_03a.(png|jpg)*

<img src="/media/cli_22.png" width="450" style="margin:auto;position:relative; left: 200px; top: -20px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_03

- Svolgere il dojo [Getting Started](https://pwn.college/welcome/)
- Leggere e visualizzare le due unità \`Lectures and Reading\`
- Completare con successo tutte le 10 \`Challenges\`
- Domande del docente sui temi trattati e sulle sezioni *Lectures and Reading*
- Consegnare su github lo screenshot che dimostra il superamento delle 10 challenges con il seguente nome *|cognome|_dojo_03a.(png|jpg)*

<img src="/media/cli_22.png" width="450" style="margin:auto;position:relative; left: 200px; top: -20px;">`,frontmatter:{},index:18,start:299,end:313,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:W3,meta:{slide:{raw:`
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

<span class="cli" style="font-size:3rem; margin:70px auto; text-align: center; display:block; width:85%;color: #00fe00; background: black; line-height: 4rem; height: 4rem;">Command Line Interface</span>`,frontmatter:{},index:19,start:314,end:326,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Y3,meta:{slide:{raw:`
# Linux CLI 
 
Introduzione

<img src="/media/cli_01.png" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Introduzione

<img src="/media/cli_01.png" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:20,start:327,end:335,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:t4,meta:{slide:{raw:`
# Linux CLI 
 
Introduzione

- La Linea di Comando di Linux (Command Line Interface, CLI) è un'interfaccia testuale che consente agli utenti di comunicare direttamente con il sistema operativo Linux attraverso comandi testuali. 

<img src="/media/cli_02.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Introduzione

- La Linea di Comando di Linux (Command Line Interface, CLI) è un'interfaccia testuale che consente agli utenti di comunicare direttamente con il sistema operativo Linux attraverso comandi testuali. 

<img src="/media/cli_02.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:21,start:336,end:345,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:p4,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_04

- Svolgere la seguente esercitazione (Quiz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/kernel-overview](https://linuxjourney.com/lesson/kernel-overview)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione


`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_04

- Svolgere la seguente esercitazione (Quiz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/kernel-overview](https://linuxjourney.com/lesson/kernel-overview)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione`,frontmatter:{},index:22,start:346,end:365,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:_4,meta:{slide:{raw:`
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
  - maggior velocità, flessibilità ed efficienza`,frontmatter:{},index:23,start:366,end:379,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:b4,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Cenni Storici
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Cenni Storici
</Cover>`,frontmatter:{},index:24,start:380,end:388,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:$4,meta:{slide:{raw:`
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


<img src="/media/cli_16.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:25,start:389,end:404,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:z4,meta:{slide:{raw:`
# Linux CLI 
 

<img src="/media/cli_04.png" width="700" style="margin:auto;position:relative; left: 0px; top: -10px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 

<img src="/media/cli_04.png" width="700" style="margin:auto;position:relative; left: 0px; top: -10px;">`,frontmatter:{},index:26,start:405,end:411,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:P4,meta:{slide:{raw:`
# Linux CLI 
 
<img src="/media/cli_03.png" width="600" style="margin:auto;position:relative; left: 0px; top: -10px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
<img src="/media/cli_03.png" width="600" style="margin:auto;position:relative; left: 0px; top: -10px;">`,frontmatter:{},index:27,start:412,end:417,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:N4,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Concetti Chiave
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Concetti Chiave
</Cover>`,frontmatter:{},index:28,start:418,end:426,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:q4,meta:{slide:{raw:`
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

<img src="/media/cli_05.png" width="450" style="margin:auto;position:relative; left: 250px; top: -450px;">`,frontmatter:{},index:29,start:427,end:442,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:J4,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:30,start:443,end:493,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:aC,meta:{slide:{raw:`
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

**/etc**: è la directory che contiene la maggior parte, se non tutti, i file di configurazione a livello di sistema. Ad esempio, i file che contengono il nome del tuo sistema, gli utenti e le loro password, i nomi delle macchine sulla tua rete e quando e dove dovrebbero essere montate le partizioni sui tuoi dischi rigidi sono tutti qui. E' una directory da <mark>MANEGGIARE CON CURA</mark>.`,frontmatter:{},index:31,start:494,end:507,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:hC,meta:{slide:{raw:`
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

**/mnt**: luogo dove monterai manualmente i dispositivi di archiviazione o le partizioni.`,frontmatter:{},index:32,start:508,end:524,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:yC,meta:{slide:{raw:`
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

**/root**: è la directory home del **superutente** <mark>root</mark> (noto anche come "Amministratore") del sistema. È separato dal resto delle directory home degli utenti in quanto non è un utente normale.`,frontmatter:{},index:33,start:525,end:538,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:TC,meta:{slide:{raw:`
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

In alcuni casi puoi anche manipolare questi dispositivi. Posso, ad esempio, cambiare la luminosità dello schermo del mio portatile modificando il valore memorizzato in /sys/devices/pci0000:00/0000:00:02.0/drm/card0/card0-eDP-1/intel_backlight.Anche per questa directory è consigliato di <mark>NON TOCCARE</mark> finché non sei sicuro di sapere esattamente cosa stai facendo.`,frontmatter:{},index:34,start:539,end:554,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:NC,meta:{slide:{raw:`
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
Comunque sia, /var contiene cose come i log di sistema e delle applicazioni, lo spool della stampante, ed altri tipi di dati. Alcuni web server impostano la document root di default in /var/www`,frontmatter:{},index:35,start:555,end:568,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:UC,meta:{slide:{raw:`
# Linux CLI 
 
File System

<div style="width:50%">

Il percorso \`ASSOLUTO\` del file *README.md* è:

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

Il percorso \`ASSOLUTO\` del file *README.md* è:

\`/home/antonio/SARP/README.md\`

- **/** (*root directory, radice dell'albero del filesystem*)
- **home**: sotto directory di /
- **antonio**: sotto directory di home
-  **SARP**: sotto directory di antonio
-  **README.md**: file di testo (*foglia dell'albero*)
</div>

<img src="/media/cli_06.png" width="450" style="margin:auto;position:relative; left: 250px; top: -350px;">`,frontmatter:{},index:36,start:569,end:589,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:JC,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:37,start:590,end:617,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:i6,meta:{slide:{raw:`
# Linux CLI 
 
File System

<div style="width:50%">

Il percorso \`RELATIVO\` alla home del file *README.md* è:

\`./SARP/README.md\` o \`SARP/README.md\`

- **.**: directory corrente (antonio)
-  **SARP**: sotto directory di antonio
-  **README.md**: file di testo (*foglia dell'albero*)
</div>

<img src="/media/cli_07.png" width="450" style="margin:auto;position:relative; left: 250px; top: -370px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
File System

<div style="width:50%">

Il percorso \`RELATIVO\` alla home del file *README.md* è:

\`./SARP/README.md\` o \`SARP/README.md\`

- **.**: directory corrente (antonio)
-  **SARP**: sotto directory di antonio
-  **README.md**: file di testo (*foglia dell'albero*)
</div>

<img src="/media/cli_07.png" width="450" style="margin:auto;position:relative; left: 250px; top: -370px;">`,frontmatter:{},index:38,start:618,end:636,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:f6,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_05

- Svolgere la seguente esercitazione (Quiz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/filesystem-hierarchy](https://linuxjourney.com/lesson/filesystem-hierarchy)

</center>
<br>

- Svolgere i punti dal 1 al 6 e il punto 9
- Domande agli studenti sul contenuto dell'esercitazione
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_05

- Svolgere la seguente esercitazione (Quiz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/filesystem-hierarchy](https://linuxjourney.com/lesson/filesystem-hierarchy)

</center>
<br>

- Svolgere i punti dal 1 al 6 e il punto 9
- Domande agli studenti sul contenuto dell'esercitazione`,frontmatter:{},index:39,start:637,end:655,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:b6,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_06

- Svolgere i seguenti moduli del dojo [Linux Luminarium](https://pwn.college/linux-luminarium/)
  - [Hello Hackers](https://pwn.college/linux-luminarium/hello/)
  - [Pondering Paths](https://pwn.college/linux-luminarium/paths/)
  - [Pondering PATH](https://pwn.college/linux-luminarium/path/) 
- Leggere e visualizzare le due unità \`Lectures and Reading\`
- Completare con successo tutte le 15 \`Challenges\`
- Domande del docente sui temi trattati e sulle sezioni *Lectures and Reading*
- Consegnare su github 3 screenshots che dimostrano il superamento delle 15 challenges con i seguenti nomi:
  - *|cognome|_dojo_linux_06a.(png|jpg)*
  - *|cognome|_dojo_linux_06b.(png|jpg)*
  - *|cognome|_dojo_linux_06c.(png|jpg)*


`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_06

- Svolgere i seguenti moduli del dojo [Linux Luminarium](https://pwn.college/linux-luminarium/)
  - [Hello Hackers](https://pwn.college/linux-luminarium/hello/)
  - [Pondering Paths](https://pwn.college/linux-luminarium/paths/)
  - [Pondering PATH](https://pwn.college/linux-luminarium/path/) 
- Leggere e visualizzare le due unità \`Lectures and Reading\`
- Completare con successo tutte le 15 \`Challenges\`
- Domande del docente sui temi trattati e sulle sezioni *Lectures and Reading*
- Consegnare su github 3 screenshots che dimostrano il superamento delle 15 challenges con i seguenti nomi:
  - *|cognome|_dojo_linux_06a.(png|jpg)*
  - *|cognome|_dojo_linux_06b.(png|jpg)*
  - *|cognome|_dojo_linux_06c.(png|jpg)*`,frontmatter:{},index:40,start:656,end:675,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:C6,meta:{slide:{raw:`
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

<img src="/media/cli_08.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:41,start:676,end:689,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:M6,meta:{slide:{raw:`
# Linux CLI 

- **Permessi**: Ogni gruppo ed ogni utente ha una serie di permessi su ogni risorsa (file). Con questo livello di granularità è possibile creare policy dei permessi molto dettagliate e garantire la sicurezza del sistema operativo (*es: non voglio che l'utente Jon possa leggere i miei file*)

<img src="/media/cli_09.png" width="950" style="margin:auto;position:relative; left: 0px; top: 10px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 

- **Permessi**: Ogni gruppo ed ogni utente ha una serie di permessi su ogni risorsa (file). Con questo livello di granularità è possibile creare policy dei permessi molto dettagliate e garantire la sicurezza del sistema operativo (*es: non voglio che l'utente Jon possa leggere i miei file*)

<img src="/media/cli_09.png" width="950" style="margin:auto;position:relative; left: 0px; top: 10px;">`,frontmatter:{},index:42,start:690,end:698,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:j6,meta:{slide:{raw:`
# Linux CLI 

<img src="/media/cli_10.png" width="950" style="margin:auto;position:relative; left: 0px; top: 80px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 

<img src="/media/cli_10.png" width="950" style="margin:auto;position:relative; left: 0px; top: 80px;">`,frontmatter:{},index:43,start:699,end:705,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:W6,meta:{slide:{raw:`
# Linux CLI 

<img src="/media/c_04.jpg" width="450" style="margin:auto;position:relative; left: 0px; top: -50px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 

<img src="/media/c_04.jpg" width="450" style="margin:auto;position:relative; left: 0px; top: -50px;">`,frontmatter:{},index:44,start:706,end:712,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:G6,meta:{slide:{raw:`
# Linux CLI 

<img src="/media/cli_11.png" width="950" style="margin:auto;position:relative; left: 0px; top: 50px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 

<img src="/media/cli_11.png" width="950" style="margin:auto;position:relative; left: 0px; top: 50px;">`,frontmatter:{},index:45,start:713,end:718,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:s5,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_07

- Svolgere la seguente esercitazione (Quiz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/users-and-groups](https://linuxjourney.com/lesson/users-and-groups)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_07

- Svolgere la seguente esercitazione (Quiz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/users-and-groups](https://linuxjourney.com/lesson/users-and-groups)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione`,frontmatter:{},index:46,start:719,end:737,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:d5,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_08

- Svolgere la seguente esercitazione (Quiz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/file-permissions](https://linuxjourney.com/lesson/file-permissions)

</center>
<br>

- Svolgere i primi 3 punti
- Domande agli studenti sul contenuto dell'esercitazione

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_08

- Svolgere la seguente esercitazione (Quiz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/file-permissions](https://linuxjourney.com/lesson/file-permissions)

</center>
<br>

- Svolgere i primi 3 punti
- Domande agli studenti sul contenuto dell'esercitazione`,frontmatter:{},index:47,start:738,end:757,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:b5,meta:{slide:{raw:`
# Linux CLI 

&nbsp;
 
Ecco alcuni concetti chiave relativi alla CLI di Linux:

**Completamento del Tab**: Puoi premere il tasto Tab per completare automaticamente nomi di file, directory e comandi. Questa funzionalità aiuta a risparmiare tempo e riduce gli errori di battitura.

In shell moderne come *zsh* e *fish* il tab può anche completare i comandi e il manuale di sistema

`,title:"Linux CLI",level:1,content:`# Linux CLI 

&nbsp;
 
Ecco alcuni concetti chiave relativi alla CLI di Linux:

**Completamento del Tab**: Puoi premere il tasto Tab per completare automaticamente nomi di file, directory e comandi. Questa funzionalità aiuta a risparmiare tempo e riduce gli errori di battitura.

In shell moderne come *zsh* e *fish* il tab può anche completare i comandi e il manuale di sistema`,frontmatter:{},index:48,start:758,end:770,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:L5,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_12.gif" width="700" style="margin:auto;position:relative; left: 0px; top: 0px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_12.gif" width="700" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:49,start:771,end:778,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:z5,meta:{slide:{raw:`
# Linux CLI 

&nbsp;
 
Ecco alcuni concetti chiave relativi alla CLI di Linux:

**Redirezione**: Puoi redirigere l'output di un comando su file utilizzando i simboli > o >> 

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

**Redirezione**: Puoi redirigere l'output di un comando su file utilizzando i simboli > o >> 

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
\`\`\``,frontmatter:{},index:50,start:779,end:807,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:A5,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
La Filosofia Unix
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
La Filosofia Unix
</Cover>`,frontmatter:{},index:51,start:808,end:815,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:N5,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_12.png" width="900" style="margin:auto;position:relative; left: 0px; top: 100px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_12.png" width="900" style="margin:auto;position:relative; left: 0px; top: 100px;">`,frontmatter:{},index:52,start:816,end:823,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:V5,meta:{slide:{raw:`
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

<img src="/media/cli_13.png" width="250" style="margin:auto;position:relative; left: 0px; top: 10px;">`,frontmatter:{},index:53,start:824,end:839,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:Q5,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Le Pipe
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Le Pipe
</Cover>`,frontmatter:{},index:54,start:840,end:848,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:t9,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:55,start:849,end:874,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:u9,meta:{slide:{raw:`
# Linux CLI 

&nbsp;

**Domanda**: Qual'è il comando che mi permette di ottenere una lista di numeri univoci ordinati in senso crescente partendo da file.txt?
**Risposta**: NON ESISTE

Ma niente paura, possiamo creare noi stessi questo comando a partire da comandi esistenti e quindi risolvere il problema. Una volta appreso questo concetto, si dimostrerà un meccanismo incredibilmente potente

<img src="/media/cli_14.png" width="850" style="margin:auto;position:relative; left: 0px; top: 10px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 

&nbsp;

**Domanda**: Qual'è il comando che mi permette di ottenere una lista di numeri univoci ordinati in senso crescente partendo da file.txt?
**Risposta**: NON ESISTE

Ma niente paura, possiamo creare noi stessi questo comando a partire da comandi esistenti e quindi risolvere il problema. Una volta appreso questo concetto, si dimostrerà un meccanismo incredibilmente potente

<img src="/media/cli_14.png" width="850" style="margin:auto;position:relative; left: 0px; top: 10px;">`,frontmatter:{},index:56,start:875,end:888,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:g9,meta:{slide:{raw:`
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


<img src="/media/cli_15.png" width="500" style="margin:auto;position:relative; left: 100px; top: -40px;">`,frontmatter:{},index:57,start:889,end:904,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:w9,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:58,start:905,end:927,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:C9,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:59,start:928,end:951,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:T9,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:60,start:952,end:970,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:D9,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:61,start:971,end:995,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:K9,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_09

- Svolgere i seguenti moduli del dojo [Linux Luminarium](https://pwn.college/linux-luminarium/)
  - [Practicing Piping](https://pwn.college/linux-luminarium/piping/)
- Leggere e visualizzare le due unità \`Lectures and Reading\`
- Completare con successo tutte le 11 \`Challenges\`
- Domande del docente sui temi trattati e sulle sezioni *Lectures and Reading*
- Consegnare su su github uno screenshot che dimostra il superamento delle 11 challenges con il seguente nome:
  - *|cognome|_dojo_linux_09a.(png|jpg)*
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_09

- Svolgere i seguenti moduli del dojo [Linux Luminarium](https://pwn.college/linux-luminarium/)
  - [Practicing Piping](https://pwn.college/linux-luminarium/piping/)
- Leggere e visualizzare le due unità \`Lectures and Reading\`
- Completare con successo tutte le 11 \`Challenges\`
- Domande del docente sui temi trattati e sulle sezioni *Lectures and Reading*
- Consegnare su su github uno screenshot che dimostra il superamento delle 11 challenges con il seguente nome:
  - *|cognome|_dojo_linux_09a.(png|jpg)*`,frontmatter:{},index:62,start:996,end:1009,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:G9,meta:{slide:{raw:`
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

Vediamo ora i principali comandi base per poter iniziare ad usare Linux in modo efficiente ed agevole dalla linea di comando`,frontmatter:{},index:63,start:1010,end:1025,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:sE,meta:{slide:{raw:`
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
- -h è un parametro che dice a ls di visualizzare un output facilmente leggibile da un umano(stampa la dimensione del file in un formato leggibile dall'uomo)`,frontmatter:{},index:64,start:1026,end:1048,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:aE,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Indice dei Comandi
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Indice dei Comandi
</Cover>`,frontmatter:{},index:65,start:1049,end:1057,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:pE,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_17.png" width="900" style="margin:auto;position:relative; left: 0px; top: -20px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_17.png" width="900" style="margin:auto;position:relative; left: 0px; top: -20px;">`,frontmatter:{},index:66,start:1058,end:1064,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:_E,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_18.png" width="900" style="margin:auto;position:relative; left: 0px; top: -20px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_18.png" width="900" style="margin:auto;position:relative; left: 0px; top: -20px;">`,frontmatter:{},index:67,start:1065,end:1071,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:kE,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_19.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_19.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:68,start:1072,end:1079,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:$E,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_20.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_20.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:69,start:1080,end:1087,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:SE,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Comandi di uso generale
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Comandi di uso generale
</Cover>`,frontmatter:{},index:70,start:1088,end:1096,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:OE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:71,start:1097,end:1121,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:WE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:72,start:1122,end:1143,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:YE,meta:{slide:{raw:`
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

\`\`\``,frontmatter:{},index:73,start:1144,end:1171,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:oS,meta:{slide:{raw:`
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

In questo modo si ricrea il DB per apropos`,frontmatter:{},index:74,start:1172,end:1198,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:mS,meta:{slide:{raw:`
# Linux CLI 
 
clear - clear the terminal screen

- Alle volte è utile svuotare e cancellare la finestra di terminale
- Ciò si può ottenere con il comando clear

<br>

 \`\`\`bash
 $ clear
 \`\`\`
<br>

Si può anche utilizzare uno shortcut da tastiera, che è \`CTRL + L\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
clear - clear the terminal screen

- Alle volte è utile svuotare e cancellare la finestra di terminale
- Ciò si può ottenere con il comando clear

<br>

 \`\`\`bash
 $ clear
 \`\`\`
<br>

Si può anche utilizzare uno shortcut da tastiera, che è \`CTRL + L\``,frontmatter:{},index:75,start:1199,end:1216,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:xS,meta:{slide:{raw:`
# Linux CLI 
 
reset - terminal initialization

- In alcuni scenari clear può non essere efficace, quindi per resettare un terminale al suo stato iniziale possiamo usare il comando reset

<br>

\`\`\`bash
$ reset
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
reset - terminal initialization

- In alcuni scenari clear può non essere efficace, quindi per resettare un terminale al suo stato iniziale possiamo usare il comando reset

<br>

\`\`\`bash
$ reset
\`\`\``,frontmatter:{},index:76,start:1217,end:1230,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:IS,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_10

- Svolgere i seguenti moduli del dojo [Linux Luminarium](https://pwn.college/linux-luminarium/)
  - [Comprehending Commands](https://pwn.college/linux-luminarium/commands/)
  - [Digesting Documentation](https://pwn.college/linux-luminarium/man/)
- Leggere e visualizzare le due unità \`Lectures and Reading\`
- Completare con successo tutte le 19 \`Challenges\`
- Domande del docente sui temi trattati e sulle sezioni *Lectures and Reading*
- Consegnare su github 2 screenshots che dimostrano il superamento delle 19 challenges con i seguenti nomi:
  - *|cognome|_dojo_linux_10a.(png|jpg)*
  - *|cognome|_dojo_linux_10b.(png|jpg)*

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_10

- Svolgere i seguenti moduli del dojo [Linux Luminarium](https://pwn.college/linux-luminarium/)
  - [Comprehending Commands](https://pwn.college/linux-luminarium/commands/)
  - [Digesting Documentation](https://pwn.college/linux-luminarium/man/)
- Leggere e visualizzare le due unità \`Lectures and Reading\`
- Completare con successo tutte le 19 \`Challenges\`
- Domande del docente sui temi trattati e sulle sezioni *Lectures and Reading*
- Consegnare su github 2 screenshots che dimostrano il superamento delle 19 challenges con i seguenti nomi:
  - *|cognome|_dojo_linux_10a.(png|jpg)*
  - *|cognome|_dojo_linux_10b.(png|jpg)*`,frontmatter:{},index:77,start:1231,end:1247,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:ES,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Filesystem
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Filesystem
</Cover>`,frontmatter:{},index:78,start:1248,end:1256,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:AS,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:79,start:1257,end:1273,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:HS,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:80,start:1274,end:1301,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:VS,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:81,start:1302,end:1326,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:XS,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:82,start:1327,end:1348,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:oR,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:83,start:1349,end:1376,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:pR,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:84,start:1377,end:1398,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:_R,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:85,start:1399,end:1426,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:kR,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:86,start:1427,end:1454,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:ER,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:87,start:1455,end:1477,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",name:"page-89",component:AR,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:88,start:1478,end:1502,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:88,no:89},__clicksElements:[],__preloaded:!1}},{path:"90",name:"page-90",component:NR,meta:{slide:{raw:`
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
  - **Creazione**: indica quando il file è stato creato e rimane costante`,frontmatter:{},index:89,start:1503,end:1516,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",name:"page-91",component:qR,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:90,start:1517,end:1538,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:90,no:91},__clicksElements:[],__preloaded:!1}},{path:"92",name:"page-92",component:QR,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:91,start:1539,end:1556,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:91,no:92},__clicksElements:[],__preloaded:!1}},{path:"93",name:"page-93",component:az,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:92,start:1557,end:1584,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:92,no:93},__clicksElements:[],__preloaded:!1}},{path:"94",name:"page-94",component:pz,meta:{slide:{raw:`
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

\`\`\``,frontmatter:{},index:93,start:1585,end:1606,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:93,no:94},__clicksElements:[],__preloaded:!1}},{path:"95",name:"page-95",component:_z,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:94,start:1607,end:1624,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:94,no:95},__clicksElements:[],__preloaded:!1}},{path:"96",name:"page-96",component:kz,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:95,start:1625,end:1645,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:95,no:96},__clicksElements:[],__preloaded:!1}},{path:"97",name:"page-97",component:$z,meta:{slide:{raw:`
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

\`\`\``,frontmatter:{},index:96,start:1646,end:1674,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:96,no:97},__clicksElements:[],__preloaded:!1}},{path:"98",name:"page-98",component:zz,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:97,start:1675,end:1696,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:97,no:98},__clicksElements:[],__preloaded:!1}},{path:"99",name:"page-99",component:Pz,meta:{slide:{raw:`
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

\`\`\``,frontmatter:{},index:98,start:1697,end:1712,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:98,no:99},__clicksElements:[],__preloaded:!1}},{path:"100",name:"page-100",component:Wz,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:99,start:1713,end:1731,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:99,no:100},__clicksElements:[],__preloaded:!1}},{path:"101",name:"page-101",component:Gz,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:100,start:1732,end:1754,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:100,no:101},__clicksElements:[],__preloaded:!1}},{path:"102",name:"page-102",component:Xz,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:101,start:1755,end:1780,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:101,no:102},__clicksElements:[],__preloaded:!1}},{path:"103",name:"page-103",component:oT,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:102,start:1781,end:1806,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:102,no:103},__clicksElements:[],__preloaded:!1}},{path:"104",name:"page-104",component:cT,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:103,start:1807,end:1832,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:103,no:104},__clicksElements:[],__preloaded:!1}},{path:"105",name:"page-105",component:fT,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:104,start:1833,end:1858,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:104,no:105},__clicksElements:[],__preloaded:!1}},{path:"106",name:"page-106",component:xT,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:105,start:1859,end:1882,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:105,no:106},__clicksElements:[],__preloaded:!1}},{path:"107",name:"page-107",component:ST,meta:{slide:{raw:`
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

\`\`\``,frontmatter:{},index:106,start:1883,end:1906,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:106,no:107},__clicksElements:[],__preloaded:!1}},{path:"108",name:"page-108",component:AT,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:107,start:1907,end:1934,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:107,no:108},__clicksElements:[],__preloaded:!1}},{path:"109",name:"page-109",component:KT,meta:{slide:{raw:`
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

- Entrambi i comandi hanno lo stesso effetto ma il secondo è più comune tra gli amministratori di sistemi Linux`,frontmatter:{},index:108,start:1935,end:1954,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:108,no:109},__clicksElements:[],__preloaded:!1}},{path:"110",name:"page-110",component:VT,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_11

- Svolgere i seguenti moduli del dojo [Linux Luminarium](https://pwn.college/linux-luminarium/)
  - [File Globbing](https://pwn.college/linux-luminarium/globbing/)
  - [Shell Variables](https://pwn.college/linux-luminarium/variables/)
- Leggere e visualizzare le due unità \`Lectures and Reading\`
- Completare con successo tutte le 14 \`Challenges\`
- Domande del docente sui temi trattati e sulle sezioni *Lecturesd and Reading*
- Consegnare su su github 2 screenshots che dimostrano il superamento delle 14 challenges con i seguenti nomi:
  - *|cognome|_dojo_linux_11a.(png|jpg)*
  - *|cognome|_dojo_linux_11b.(png|jpg)*


`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_11

- Svolgere i seguenti moduli del dojo [Linux Luminarium](https://pwn.college/linux-luminarium/)
  - [File Globbing](https://pwn.college/linux-luminarium/globbing/)
  - [Shell Variables](https://pwn.college/linux-luminarium/variables/)
- Leggere e visualizzare le due unità \`Lectures and Reading\`
- Completare con successo tutte le 14 \`Challenges\`
- Domande del docente sui temi trattati e sulle sezioni *Lecturesd and Reading*
- Consegnare su su github 2 screenshots che dimostrano il superamento delle 14 challenges con i seguenti nomi:
  - *|cognome|_dojo_linux_11a.(png|jpg)*
  - *|cognome|_dojo_linux_11b.(png|jpg)*`,frontmatter:{},index:109,start:1955,end:1972,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:109,no:110},__clicksElements:[],__preloaded:!1}},{path:"111",name:"page-111",component:s8,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:110,start:1973,end:2e3,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:110,no:111},__clicksElements:[],__preloaded:!1}},{path:"112",name:"page-112",component:f8,meta:{slide:{raw:`
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
 
\`\`\``,frontmatter:{},index:111,start:2001,end:2032,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:111,no:112},__clicksElements:[],__preloaded:!1}},{path:"113",name:"page-113",component:k8,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:112,start:2033,end:2057,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:112,no:113},__clicksElements:[],__preloaded:!1}},{path:"114",name:"page-114",component:$8,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:113,start:2058,end:2085,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:113,no:114},__clicksElements:[],__preloaded:!1}},{path:"115",name:"page-115",component:T8,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:114,start:2086,end:2113,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:114,no:115},__clicksElements:[],__preloaded:!1}},{path:"116",name:"page-116",component:j8,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:115,start:2114,end:2140,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:115,no:116},__clicksElements:[],__preloaded:!1}},{path:"117",name:"page-117",component:G8,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:116,start:2141,end:2162,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:116,no:117},__clicksElements:[],__preloaded:!1}},{path:"118",name:"page-118",component:sM,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_12

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/the-shell]https://linuxjourney.com/lesson/the-shell)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_12

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/the-shell]https://linuxjourney.com/lesson/the-shell)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione`,frontmatter:{},index:117,start:2163,end:2180,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:117,no:118},__clicksElements:[],__preloaded:!1}},{path:"119",name:"page-119",component:cM,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:118,start:2181,end:2204,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:118,no:119},__clicksElements:[],__preloaded:!1}},{path:"120",name:"page-120",component:fM,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:119,start:2205,end:2225,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:119,no:120},__clicksElements:[],__preloaded:!1}},{path:"121",name:"page-121",component:kM,meta:{slide:{raw:`
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
- Consultare il manuale per eventuali necessità`,frontmatter:{},index:120,start:2226,end:2251,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:120,no:121},__clicksElements:[],__preloaded:!1}},{path:"122",name:"page-122",component:CM,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:121,start:2252,end:2280,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:121,no:122},__clicksElements:[],__preloaded:!1}},{path:"123",name:"page-123",component:OM,meta:{slide:{raw:`
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

- **uniq** ha rimosso le occorrenze e ora tutti i numeri compaio una sola volta`,frontmatter:{},index:122,start:2281,end:2306,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:122,no:123},__clicksElements:[],__preloaded:!1}},{path:"124",name:"page-124",component:KM,meta:{slide:{raw:`
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

- **uniq** ha mantenuto solo le occorrenze doppie e rimosso quelle singole`,frontmatter:{},index:123,start:2307,end:2326,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:123,no:124},__clicksElements:[],__preloaded:!1}},{path:"125",name:"page-125",component:YM,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:124,start:2327,end:2351,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:124,no:125},__clicksElements:[],__preloaded:!1}},{path:"126",name:"page-126",component:tA,meta:{slide:{raw:`
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

- Spesso usato come parte finale di una pipeline di comandi`,frontmatter:{},index:125,start:2352,end:2372,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:125,no:126},__clicksElements:[],__preloaded:!1}},{path:"127",name:"page-127",component:rA,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:126,start:2373,end:2394,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:126,no:127},__clicksElements:[],__preloaded:!1}},{path:"128",name:"page-128",component:fA,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:127,start:2395,end:2423,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:127,no:128},__clicksElements:[],__preloaded:!1}},{path:"129",name:"page-129",component:bA,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:128,start:2424,end:2448,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:128,no:129},__clicksElements:[],__preloaded:!1}},{path:"130",name:"page-130",component:LA,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:129,start:2449,end:2476,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:129,no:130},__clicksElements:[],__preloaded:!1}},{path:"131",name:"page-131",component:zA,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:130,start:2477,end:2500,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:130,no:131},__clicksElements:[],__preloaded:!1}},{path:"132",name:"page-132",component:NA,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:131,start:2501,end:2529,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:131,no:132},__clicksElements:[],__preloaded:!1}},{path:"133",name:"page-133",component:VA,meta:{slide:{raw:`
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

- Esegue ogni 2 secondi il comando \`ls -la\``,frontmatter:{},index:132,start:2530,end:2555,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:132,no:133},__clicksElements:[],__preloaded:!1}},{path:"134",name:"page-134",component:t7,meta:{slide:{raw:`
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
- Watch è il tool perfetto per il monitoring di sistema`,frontmatter:{},index:133,start:2556,end:2583,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:133,no:134},__clicksElements:[],__preloaded:!1}},{path:"135",name:"page-135",component:r7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:134,start:2584,end:2608,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:134,no:135},__clicksElements:[],__preloaded:!1}},{path:"136",name:"page-136",component:g7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:135,start:2609,end:2640,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:135,no:136},__clicksElements:[],__preloaded:!1}},{path:"137",name:"page-137",component:y7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:136,start:2641,end:2668,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:136,no:137},__clicksElements:[],__preloaded:!1}},{path:"138",name:"page-138",component:E7,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_13

- Svolgere i seguenti moduli del dojo [Linux Luminarium](https://pwn.college/linux-luminarium/)
  - [Perciving Permissions](https://pwn.college/linux-luminarium/permissions/)
- Leggere e visualizzare le due unità \`Lectures and Reading\`
- Completare con successo tutte le 8 \`Challenges\`
- Domande del docente sui temi trattati e sulle sezioni *Lecturesd and Reading*
- Consegnare su su github 1 screenshots che dimostrano il superamento delle 8 challenges con i seguenti nomi:
  - *|cognome|_dojo_linux_13a.(png|jpg)*

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_13

- Svolgere i seguenti moduli del dojo [Linux Luminarium](https://pwn.college/linux-luminarium/)
  - [Perciving Permissions](https://pwn.college/linux-luminarium/permissions/)
- Leggere e visualizzare le due unità \`Lectures and Reading\`
- Completare con successo tutte le 8 \`Challenges\`
- Domande del docente sui temi trattati e sulle sezioni *Lecturesd and Reading*
- Consegnare su su github 1 screenshots che dimostrano il superamento delle 8 challenges con i seguenti nomi:
  - *|cognome|_dojo_linux_13a.(png|jpg)*`,frontmatter:{},index:137,start:2669,end:2683,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:137,no:138},__clicksElements:[],__preloaded:!1}},{path:"139",name:"page-139",component:D7,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_14

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/stdout-standard-out-redirect](https://linuxjourney.com/lesson/stdout-standard-out-redirect)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_14

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/stdout-standard-out-redirect](https://linuxjourney.com/lesson/stdout-standard-out-redirect)

</center>
<br>

- Domande agli studenti sul contenuto dell'esercitazione`,frontmatter:{},index:138,start:2684,end:2702,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:138,no:139},__clicksElements:[],__preloaded:!1}},{path:"140",name:"page-140",component:U7,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_15

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/regular-expressions-regex](https://linuxjourney.com/lesson/regular-expressions-regex)

</center>
<br>

- Svolgere i punti dal 2 al 8 inclusi
- Domande agli studenti sul contenuto dell'esercitazione

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_15

- Svolgere la seguente esercitazione (Quinz inclusi) 

<br>
<center>

[https://linuxjourney.com/lesson/regular-expressions-regex](https://linuxjourney.com/lesson/regular-expressions-regex)

</center>
<br>

- Svolgere i punti dal 2 al 8 inclusi
- Domande agli studenti sul contenuto dell'esercitazione`,frontmatter:{},index:139,start:2703,end:2722,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:139,no:140},__clicksElements:[],__preloaded:!1}},{path:"141",name:"page-141",component:Y7,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Gestione dei processi
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
Gestione dei processi
</Cover>`,frontmatter:{},index:140,start:2723,end:2730,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:140,no:141},__clicksElements:[],__preloaded:!1}},{path:"142",name:"page-142",component:tO,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:141,start:2731,end:2760,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:141,no:142},__clicksElements:[],__preloaded:!1}},{path:"143",name:"page-143",component:rO,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:142,start:2761,end:2789,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:142,no:143},__clicksElements:[],__preloaded:!1}},{path:"144",name:"page-144",component:hO,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:143,start:2790,end:2806,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:143,no:144},__clicksElements:[],__preloaded:!1}},{path:"145",name:"page-145",component:wO,meta:{slide:{raw:`
# Linux CLI 
 
free - visualizzare la memoria disponibile

- Visualizza lo stato della memoria RAM indicando la capacità occupata e quella disponibile

<br>

\`\`\`bash
$ free -h

               buff/cache condivisi gratuiti totali utilizzati disponibili
Mem:            15Gi       3,1Gi       1,9Gi       4,2Gi        10Gi       7,0Gi
Swap:           15Gi       0,0Ki        15Gi
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
free - visualizzare la memoria disponibile

- Visualizza lo stato della memoria RAM indicando la capacità occupata e quella disponibile

<br>

\`\`\`bash
$ free -h

               buff/cache condivisi gratuiti totali utilizzati disponibili
Mem:            15Gi       3,1Gi       1,9Gi       4,2Gi        10Gi       7,0Gi
Swap:           15Gi       0,0Ki        15Gi
\`\`\``,frontmatter:{},index:144,start:2807,end:2824,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:144,no:145},__clicksElements:[],__preloaded:!1}},{path:"146",name:"page-146",component:CO,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_16

- Svolgere i seguenti moduli del dojo [Linux Luminarium](https://pwn.college/linux-luminarium/)
  - [Processes and Jobs](https://pwn.college/linux-luminarium/processes/)
- Leggere e visualizzare le due unità \`Lectures and Reading\`
- Completare con successo tutte le 9 \`Challenges\`
- Domande del docente sui temi trattati e sulle sezioni *Lecturesd and Reading*
- Consegnare su su github 1 screenshots che dimostrano il superamento delle 9 challenges con i seguenti nomi:
  - *|cognome|_dojo_linux_16a.(png|jpg)*


`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_16

- Svolgere i seguenti moduli del dojo [Linux Luminarium](https://pwn.college/linux-luminarium/)
  - [Processes and Jobs](https://pwn.college/linux-luminarium/processes/)
- Leggere e visualizzare le due unità \`Lectures and Reading\`
- Completare con successo tutte le 9 \`Challenges\`
- Domande del docente sui temi trattati e sulle sezioni *Lecturesd and Reading*
- Consegnare su su github 1 screenshots che dimostrano il superamento delle 9 challenges con i seguenti nomi:
  - *|cognome|_dojo_linux_16a.(png|jpg)*`,frontmatter:{},index:145,start:2825,end:2840,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:145,no:146},__clicksElements:[],__preloaded:!1}},{path:"147",name:"page-147",component:RO,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Comandi di sistema
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
Comandi di sistema
</Cover>`,frontmatter:{},index:146,start:2841,end:2848,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:146,no:147},__clicksElements:[],__preloaded:!1}},{path:"148",name:"page-148",component:DO,meta:{slide:{raw:`
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

\`\`\``,frontmatter:{},index:147,start:2849,end:2877,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:147,no:148},__clicksElements:[],__preloaded:!1}},{path:"149",name:"page-149",component:KO,meta:{slide:{raw:`
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

- ogni tipo di software che vogliamo usare su linux`,frontmatter:{},index:148,start:2878,end:2894,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:148,no:149},__clicksElements:[],__preloaded:!1}},{path:"150",name:"page-150",component:VO,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:149,start:2895,end:2922,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:149,no:150},__clicksElements:[],__preloaded:!1}},{path:"151",name:"page-151",component:JO,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:150,start:2923,end:2950,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:150,no:151},__clicksElements:[],__preloaded:!1}},{path:"152",name:"page-152",component:sP,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:151,start:2951,end:2973,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:151,no:152},__clicksElements:[],__preloaded:!1}},{path:"153",name:"page-153",component:rP,meta:{slide:{raw:`
# Linux CLI 
 
Esercitazione cli_17

- Svolgere i seguenti moduli del dojo [Linux Luminarium](https://pwn.college/linux-luminarium/)
  - [Untangling Users](https://pwn.college/linux-luminarium/users/)
  - [Chaining Commands](https://pwn.college/linux-luminarium/chaining/)
- Leggere e visualizzare le due unità \`Lectures and Reading\`
- Completare con successo tutte le 8 \`Challenges\`
- Domande del docente sui temi trattati e sulle sezioni *Lecturesd and Reading*
- Consegnare su su github 2 screenshots che dimostrano il superamento delle 8 challenges con i seguenti nomi:
  - *|cognome|_dojo_linux_17a.(png|jpg)*
  - *|cognome|_dojo_linux_17b.(png|jpg)*
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Esercitazione cli_17

- Svolgere i seguenti moduli del dojo [Linux Luminarium](https://pwn.college/linux-luminarium/)
  - [Untangling Users](https://pwn.college/linux-luminarium/users/)
  - [Chaining Commands](https://pwn.college/linux-luminarium/chaining/)
- Leggere e visualizzare le due unità \`Lectures and Reading\`
- Completare con successo tutte le 8 \`Challenges\`
- Domande del docente sui temi trattati e sulle sezioni *Lecturesd and Reading*
- Consegnare su su github 2 screenshots che dimostrano il superamento delle 8 challenges con i seguenti nomi:
  - *|cognome|_dojo_linux_17a.(png|jpg)*
  - *|cognome|_dojo_linux_17b.(png|jpg)*`,frontmatter:{},index:152,start:2974,end:2989,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:152,no:153},__clicksElements:[],__preloaded:!1}},{path:"154",name:"page-154",component:dP,meta:{slide:{raw:`
<img src="/media/hh01.webp" style="position:relative;top:-20px;">
`,content:'<img src="/media/hh01.webp" style="position:relative;top:-20px;">',frontmatter:{},index:153,start:2990,end:2993,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:153,no:154},__clicksElements:[],__preloaded:!1}},{path:"155",component:hI,meta:{layout:"end"}}],Ye=mP,co=[{name:"play",path:"/",component:Ny,children:[...Ye]},{name:"print",path:"/print",component:dI},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let n=function(s){if(!ro.remote||ro.remote===s.query.password)return!0;if(ro.remote&&s.query.password===void 0){const o=prompt("Enter password");if(ro.remote===o)return!0}return s.params.no?{path:`/${s.params.no}`}:{path:""}};co.push({path:"/presenter/print",component:()=>Ot(()=>import("./PresenterPrint-f6881105.js"),["assets/PresenterPrint-f6881105.js","assets/NoteDisplay-09bf45e3.js"])}),co.push({name:"notes",path:"/notes",component:()=>Ot(()=>import("./NotesView-54c9e10f.js"),["assets/NotesView-54c9e10f.js","assets/NoteDisplay-09bf45e3.js"]),beforeEnter:n}),co.push({name:"presenter",path:"/presenter/:no",component:()=>Ot(()=>import("./Presenter-2bb30d24.js"),["assets/Presenter-2bb30d24.js","assets/NoteDisplay-09bf45e3.js","assets/DrawingControls-2cc76a23.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:n}),co.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const wn=wx({history:kb("/3/linux_cli/"),routes:co});function fP(n,s,{mode:o="replace"}={}){return H({get(){const i=wn.currentRoute.value.query[n];return i==null?s??null:Array.isArray(i)?i.filter(Boolean):i},set(i){an(()=>{wn[D(o)]({query:{...wn.currentRoute.value.query,[n]:i}})})}})}const Xm=J(0);an(()=>{wn.afterEach(async()=>{await an(),Xm.value+=1})});const ef=J(0),Hn=H(()=>wn.currentRoute.value),js=H(()=>Hn.value.query.print!==void 0),hP=H(()=>Hn.value.query.print==="clicks"),ft=H(()=>Hn.value.query.embedded!==void 0),bn=H(()=>Hn.value.path.startsWith("/presenter")),_P=H(()=>Hn.value.path.startsWith("/notes")),bo=H(()=>js.value&&!hP.value),Fl=H(()=>Hn.value.query.password),gP=H(()=>!bn.value&&(!Re.remote||Fl.value===Re.remote)),Ku=fP("clicks","0"),vP=H(()=>Ye.length-1),bP=H(()=>Hn.value.path),Ue=H(()=>parseInt(bP.value.split(/\//g).slice(-1)[0])||1);H(()=>ma(Ue.value));const mn=H(()=>Ye.find(n=>n.path===`${Ue.value}`));H(()=>{var n,s,o;return(o=(s=(n=mn.value)==null?void 0:n.meta)==null?void 0:s.slide)==null?void 0:o.id});H(()=>{var n,s;return((s=(n=mn.value)==null?void 0:n.meta)==null?void 0:s.layout)||(Ue.value===1?"cover":"default")});const Na=H(()=>Ye.find(n=>n.path===`${Math.min(Ye.length,Ue.value+1)}`)),xP=H(()=>Ye.find(n=>n.path===`${Math.max(1,Ue.value-1)}`)),kP=H(()=>{var n,s;return Xm.value,((s=(n=mn.value)==null?void 0:n.meta)==null?void 0:s.__clicksElements)||[]}),jn=H({get(){if(bo.value)return 99999;let n=+(Ku.value||0);return isNaN(n)&&(n=0),n},set(n){Ku.value=n.toString()}}),Ui=H(()=>{var n,s;return+(((s=(n=mn.value)==null?void 0:n.meta)==null?void 0:s.clicks)??kP.value.length)}),wP=H(()=>Ue.value<Ye.length-1||jn.value<Ui.value),yP=H(()=>Ue.value>1||jn.value>0),LP=H(()=>Ye.filter(n=>{var s,o;return(o=(s=n.meta)==null?void 0:s.slide)==null?void 0:o.title}).reduce((n,s)=>(Or(n,s),n),[])),IP=H(()=>Pr(LP.value,mn.value));H(()=>Dr(IP.value));const $P=H(()=>zP(ef.value,mn.value,xP.value));be(mn,(n,s)=>{ef.value=Number(n==null?void 0:n.path)-Number(s==null?void 0:s.path)});function Dt(){Ui.value<=jn.value?Po():jn.value+=1}async function jt(){jn.value<=0?await Do():jn.value-=1}function ma(n){return bn.value?`/presenter/${n}`:`/${n}`}function Po(){const n=Math.min(Ye.length,Ue.value+1);return Ns(n)}async function Do(n=!0){const s=Math.max(1,Ue.value-1);await Ns(s),n&&Ui.value&&wn.replace({query:{...Hn.value.query,clicks:Ui.value}})}function Ns(n,s){return wn.push({path:ma(n),query:{...Hn.value.query,clicks:s}})}function CP(n){const s=J(0),{direction:o,distanceX:i,distanceY:a}=Wv(n,{onSwipeStart(l){l.pointerType==="touch"&&(Mo.value||(s.value=kl()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!s.value||Mo.value)return;const r=Math.abs(i.value),c=Math.abs(a.value);r/window.innerWidth>.3||r>100?o.value==="left"?Dt():jt():(c/window.innerHeight>.4||c>200)&&(o.value==="down"?Do():Po())}})}async function Hl(){const{saveAs:n}=await Ot(()=>import("./FileSaver.min-23a5d44b.js").then(s=>s.F),[]);n(typeof Re.download=="string"?Re.download:Re.exportFilename?`${Re.exportFilename}.pdf`:"/3/linux_cli/slidev-exported.pdf",`${Re.title}.pdf`)}async function EP(n){var s,o;if(n==null){const i=(o=(s=mn.value)==null?void 0:s.meta)==null?void 0:o.slide;if(!(i!=null&&i.filepath))return!1;n=`${i.filepath}:${i.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(n)}`),!0}function Or(n,s,o=1){var a,l,r,c,u;const i=(l=(a=s.meta)==null?void 0:a.slide)==null?void 0:l.level;i&&i>o&&n.length>0?Or(n[n.length-1].children,s,o+1):n.push({children:[],level:o,path:s.path,hideInToc:!!((r=s.meta)!=null&&r.hideInToc),title:(u=(c=s.meta)==null?void 0:c.slide)==null?void 0:u.title})}function Pr(n,s,o=!1,i){return n.map(a=>{const l={...a,active:a.path===(s==null?void 0:s.path),hasActiveParent:o};return l.children.length>0&&(l.children=Pr(l.children,s,l.active||l.hasActiveParent,l)),i&&(l.active||l.activeParent)&&(i.activeParent=!0),l})}function Dr(n,s=1){return n.filter(o=>!o.hideInToc).map(o=>({...o,children:Dr(o.children,s+1)}))}const SP={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function RP(n,s=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let o=n.name.includes("|")?n.name:SP[n.name]||n.name;if(o.includes("|")){const[i,a]=o.split("|").map(l=>l.trim());o=s?a:i}if(o)return{...n,name:o}}function zP(n,s,o){var a,l;let i=n>0?(a=o==null?void 0:o.meta)==null?void 0:a.transition:(l=s==null?void 0:s.meta)==null?void 0:l.transition;return i||(i=Re.transition),RP(i,n<0)}function TP(){const n=Re.titleTemplate.replace("%s",Re.title||"Slidev");Bd({title:n,htmlAttrs:Re.htmlAttrs}),b0(`${n} - shared`),y0(`${n} - drawings`);const s=`${location.origin}_${m0()}`;function o(){_P.value||!bn.value&&!d0.includes(location.host.split(":")[0])||(bn.value?(Qs("page",+Ue.value),Qs("clicks",jn.value)):(Qs("viewerPage",+Ue.value),Qs("viewerClicks",jn.value)),Qs("lastUpdate",{id:s,type:bn.value?"presenter":"viewer",time:new Date().getTime()}))}wn.afterEach(o),be(jn,o),x0(i=>{var l;wn.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((l=i.lastUpdate)==null?void 0:l.type)==="presenter"&&(+i.page!=+Ue.value||+jn.value!=+i.clicks)&&wn.replace({path:ma(i.page),query:{...wn.currentRoute.value.query,clicks:i.clicks||0}})})}const MP=Me({__name:"App",setup(n){return I(E),TP(),(s,o)=>{const i=zn("RouterView"),a=zn("StarportCarrier");return b(),ae(ze,null,[R(i),R(a)],64)}}}),AP=S(MP,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/App.vue"]]);function Fa(n){return n!==null&&typeof n=="object"}function Kl(n,s,o=".",i){if(!Fa(s))return Kl(n,{},o,i);const a=Object.assign({},s);for(const l in n){if(l==="__proto__"||l==="constructor")continue;const r=n[l];r!=null&&(i&&i(a,l,r,o)||(Array.isArray(r)&&Array.isArray(a[l])?a[l]=[...r,...a[l]]:Fa(r)&&Fa(a[l])?a[l]=Kl(r,a[l],(o?`${o}.`:"")+l.toString(),i):a[l]=r))}return a}function OP(n){return(...s)=>s.reduce((o,i)=>Kl(o,i,"",n),{})}const PP=OP(),nf=1/60*1e3,DP=typeof performance<"u"?()=>performance.now():()=>Date.now(),tf=typeof window<"u"?n=>window.requestAnimationFrame(n):n=>setTimeout(()=>n(DP()),nf);function jP(n){let s=[],o=[],i=0,a=!1,l=!1;const r=new WeakSet,c={schedule:(u,p=!1,d=!1)=>{const m=d&&a,f=m?s:o;return p&&r.add(u),f.indexOf(u)===-1&&(f.push(u),m&&a&&(i=s.length)),u},cancel:u=>{const p=o.indexOf(u);p!==-1&&o.splice(p,1),r.delete(u)},process:u=>{if(a){l=!0;return}if(a=!0,[s,o]=[o,s],o.length=0,i=s.length,i)for(let p=0;p<i;p++){const d=s[p];d(u),r.has(d)&&(c.schedule(d),n())}a=!1,l&&(l=!1,c.process(u))}};return c}const NP=40;let Wl=!0,jo=!1,Bl=!1;const Os={delta:0,timestamp:0},Go=["read","update","preRender","render","postRender"],fa=Go.reduce((n,s)=>(n[s]=jP(()=>jo=!0),n),{}),ql=Go.reduce((n,s)=>{const o=fa[s];return n[s]=(i,a=!1,l=!1)=>(jo||KP(),o.schedule(i,a,l)),n},{}),FP=Go.reduce((n,s)=>(n[s]=fa[s].cancel,n),{});Go.reduce((n,s)=>(n[s]=()=>fa[s].process(Os),n),{});const HP=n=>fa[n].process(Os),sf=n=>{jo=!1,Os.delta=Wl?nf:Math.max(Math.min(n-Os.timestamp,NP),1),Os.timestamp=n,Bl=!0,Go.forEach(HP),Bl=!1,jo&&(Wl=!1,tf(sf))},KP=()=>{jo=!0,Wl=!0,Bl||tf(sf)},of=()=>Os;function af(n,s){var o={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&s.indexOf(i)<0&&(o[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(n);a<i.length;a++)s.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(n,i[a])&&(o[i[a]]=n[i[a]]);return o}var jr=function(){},No=function(){};jr=function(n,s){!n&&typeof console<"u"&&console.warn(s)},No=function(n,s){if(!n)throw new Error(s)};const Ul=(n,s,o)=>Math.min(Math.max(o,n),s),Ha=.001,WP=.01,Wu=10,BP=.05,qP=1;function UP({duration:n=800,bounce:s=.25,velocity:o=0,mass:i=1}){let a,l;jr(n<=Wu*1e3,"Spring duration must be 10 seconds or less");let r=1-s;r=Ul(BP,qP,r),n=Ul(WP,Wu,n/1e3),r<1?(a=p=>{const d=p*r,m=d*n,f=d-o,h=Vl(p,r),_=Math.exp(-m);return Ha-f/h*_},l=p=>{const m=p*r*n,f=m*o+o,h=Math.pow(r,2)*Math.pow(p,2)*n,_=Math.exp(-m),w=Vl(Math.pow(p,2),r);return(-a(p)+Ha>0?-1:1)*((f-h)*_)/w}):(a=p=>{const d=Math.exp(-p*n),m=(p-o)*n+1;return-Ha+d*m},l=p=>{const d=Math.exp(-p*n),m=(o-p)*(n*n);return d*m});const c=5/n,u=GP(a,l,c);if(n=n*1e3,isNaN(u))return{stiffness:100,damping:10,duration:n};{const p=Math.pow(u,2)*i;return{stiffness:p,damping:r*2*Math.sqrt(i*p),duration:n}}}const VP=12;function GP(n,s,o){let i=o;for(let a=1;a<VP;a++)i=i-n(i)/s(i);return i}function Vl(n,s){return n*Math.sqrt(1-s*s)}const YP=["duration","bounce"],QP=["stiffness","damping","mass"];function Bu(n,s){return s.some(o=>n[o]!==void 0)}function ZP(n){let s=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!Bu(n,QP)&&Bu(n,YP)){const o=UP(n);s=Object.assign(Object.assign(Object.assign({},s),o),{velocity:0,mass:1}),s.isResolvedFromDuration=!0}return s}function Nr(n){var{from:s=0,to:o=1,restSpeed:i=2,restDelta:a}=n,l=af(n,["from","to","restSpeed","restDelta"]);const r={done:!1,value:s};let{stiffness:c,damping:u,mass:p,velocity:d,duration:m,isResolvedFromDuration:f}=ZP(l),h=qu,_=qu;function w(){const y=d?-(d/1e3):0,L=o-s,$=u/(2*Math.sqrt(c*p)),x=Math.sqrt(c/p)/1e3;if(a===void 0&&(a=Math.min(Math.abs(o-s)/100,.4)),$<1){const P=Vl(x,$);h=T=>{const j=Math.exp(-$*x*T);return o-j*((y+$*x*L)/P*Math.sin(P*T)+L*Math.cos(P*T))},_=T=>{const j=Math.exp(-$*x*T);return $*x*j*(Math.sin(P*T)*(y+$*x*L)/P+L*Math.cos(P*T))-j*(Math.cos(P*T)*(y+$*x*L)-P*L*Math.sin(P*T))}}else if($===1)h=P=>o-Math.exp(-x*P)*(L+(y+x*L)*P);else{const P=x*Math.sqrt($*$-1);h=T=>{const j=Math.exp(-$*x*T),B=Math.min(P*T,300);return o-j*((y+$*x*L)*Math.sinh(B)+P*L*Math.cosh(B))/P}}}return w(),{next:y=>{const L=h(y);if(f)r.done=y>=m;else{const $=_(y)*1e3,x=Math.abs($)<=i,P=Math.abs(o-L)<=a;r.done=x&&P}return r.value=r.done?o:L,r},flipTarget:()=>{d=-d,[s,o]=[o,s],w()}}}Nr.needsInterpolation=(n,s)=>typeof n=="string"||typeof s=="string";const qu=n=>0,lf=(n,s,o)=>{const i=s-n;return i===0?1:(o-n)/i},Fr=(n,s,o)=>-o*n+o*s+n,rf=(n,s)=>o=>Math.max(Math.min(o,s),n),xo=n=>n%1?Number(n.toFixed(5)):n,Fo=/(-)?([\d]*\.?[\d])+/g,Gl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,JP=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Yo(n){return typeof n=="string"}const Qo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ko=Object.assign(Object.assign({},Qo),{transform:rf(0,1)}),fi=Object.assign(Object.assign({},Qo),{default:1}),Hr=n=>({test:s=>Yo(s)&&s.endsWith(n)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${n}`}),Yt=Hr("deg"),wo=Hr("%"),ke=Hr("px"),Uu=Object.assign(Object.assign({},wo),{parse:n=>wo.parse(n)/100,transform:n=>wo.transform(n*100)}),Kr=(n,s)=>o=>!!(Yo(o)&&JP.test(o)&&o.startsWith(n)||s&&Object.prototype.hasOwnProperty.call(o,s)),cf=(n,s,o)=>i=>{if(!Yo(i))return i;const[a,l,r,c]=i.match(Fo);return{[n]:parseFloat(a),[s]:parseFloat(l),[o]:parseFloat(r),alpha:c!==void 0?parseFloat(c):1}},rs={test:Kr("hsl","hue"),parse:cf("hue","saturation","lightness"),transform:({hue:n,saturation:s,lightness:o,alpha:i=1})=>"hsla("+Math.round(n)+", "+wo.transform(xo(s))+", "+wo.transform(xo(o))+", "+xo(ko.transform(i))+")"},XP=rf(0,255),Ka=Object.assign(Object.assign({},Qo),{transform:n=>Math.round(XP(n))}),Rt={test:Kr("rgb","red"),parse:cf("red","green","blue"),transform:({red:n,green:s,blue:o,alpha:i=1})=>"rgba("+Ka.transform(n)+", "+Ka.transform(s)+", "+Ka.transform(o)+", "+xo(ko.transform(i))+")"};function eD(n){let s="",o="",i="",a="";return n.length>5?(s=n.substr(1,2),o=n.substr(3,2),i=n.substr(5,2),a=n.substr(7,2)):(s=n.substr(1,1),o=n.substr(2,1),i=n.substr(3,1),a=n.substr(4,1),s+=s,o+=o,i+=i,a+=a),{red:parseInt(s,16),green:parseInt(o,16),blue:parseInt(i,16),alpha:a?parseInt(a,16)/255:1}}const Yl={test:Kr("#"),parse:eD,transform:Rt.transform},vn={test:n=>Rt.test(n)||Yl.test(n)||rs.test(n),parse:n=>Rt.test(n)?Rt.parse(n):rs.test(n)?rs.parse(n):Yl.parse(n),transform:n=>Yo(n)?n:n.hasOwnProperty("red")?Rt.transform(n):rs.transform(n)},uf="${c}",pf="${n}";function nD(n){var s,o,i,a;return isNaN(n)&&Yo(n)&&((o=(s=n.match(Fo))===null||s===void 0?void 0:s.length)!==null&&o!==void 0?o:0)+((a=(i=n.match(Gl))===null||i===void 0?void 0:i.length)!==null&&a!==void 0?a:0)>0}function df(n){typeof n=="number"&&(n=`${n}`);const s=[];let o=0;const i=n.match(Gl);i&&(o=i.length,n=n.replace(Gl,uf),s.push(...i.map(vn.parse)));const a=n.match(Fo);return a&&(n=n.replace(Fo,pf),s.push(...a.map(Qo.parse))),{values:s,numColors:o,tokenised:n}}function mf(n){return df(n).values}function ff(n){const{values:s,numColors:o,tokenised:i}=df(n),a=s.length;return l=>{let r=i;for(let c=0;c<a;c++)r=r.replace(c<o?uf:pf,c<o?vn.transform(l[c]):xo(l[c]));return r}}const tD=n=>typeof n=="number"?0:n;function sD(n){const s=mf(n);return ff(n)(s.map(tD))}const Zo={test:nD,parse:mf,createTransformer:ff,getAnimatableNone:sD},oD=new Set(["brightness","contrast","saturate","opacity"]);function iD(n){let[s,o]=n.slice(0,-1).split("(");if(s==="drop-shadow")return n;const[i]=o.match(Fo)||[];if(!i)return n;const a=o.replace(i,"");let l=oD.has(s)?1:0;return i!==o&&(l*=100),s+"("+l+a+")"}const aD=/([a-z-]*)\(.*?\)/g,Ql=Object.assign(Object.assign({},Zo),{getAnimatableNone:n=>{const s=n.match(aD);return s?s.map(iD).join(" "):n}});function Wa(n,s,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(s-n)*6*o:o<1/2?s:o<2/3?n+(s-n)*(2/3-o)*6:n}function Vu({hue:n,saturation:s,lightness:o,alpha:i}){n/=360,s/=100,o/=100;let a=0,l=0,r=0;if(!s)a=l=r=o;else{const c=o<.5?o*(1+s):o+s-o*s,u=2*o-c;a=Wa(u,c,n+1/3),l=Wa(u,c,n),r=Wa(u,c,n-1/3)}return{red:Math.round(a*255),green:Math.round(l*255),blue:Math.round(r*255),alpha:i}}const lD=(n,s,o)=>{const i=n*n,a=s*s;return Math.sqrt(Math.max(0,o*(a-i)+i))},rD=[Yl,Rt,rs],Gu=n=>rD.find(s=>s.test(n)),Yu=n=>`'${n}' is not an animatable color. Use the equivalent color code instead.`,hf=(n,s)=>{let o=Gu(n),i=Gu(s);No(!!o,Yu(n)),No(!!i,Yu(s));let a=o.parse(n),l=i.parse(s);o===rs&&(a=Vu(a),o=Rt),i===rs&&(l=Vu(l),i=Rt);const r=Object.assign({},a);return c=>{for(const u in r)u!=="alpha"&&(r[u]=lD(a[u],l[u],c));return r.alpha=Fr(a.alpha,l.alpha,c),o.transform(r)}},cD=n=>typeof n=="number",uD=(n,s)=>o=>s(n(o)),_f=(...n)=>n.reduce(uD);function gf(n,s){return cD(n)?o=>Fr(n,s,o):vn.test(n)?hf(n,s):bf(n,s)}const vf=(n,s)=>{const o=[...n],i=o.length,a=n.map((l,r)=>gf(l,s[r]));return l=>{for(let r=0;r<i;r++)o[r]=a[r](l);return o}},pD=(n,s)=>{const o=Object.assign(Object.assign({},n),s),i={};for(const a in o)n[a]!==void 0&&s[a]!==void 0&&(i[a]=gf(n[a],s[a]));return a=>{for(const l in i)o[l]=i[l](a);return o}};function Qu(n){const s=Zo.parse(n),o=s.length;let i=0,a=0,l=0;for(let r=0;r<o;r++)i||typeof s[r]=="number"?i++:s[r].hue!==void 0?l++:a++;return{parsed:s,numNumbers:i,numRGB:a,numHSL:l}}const bf=(n,s)=>{const o=Zo.createTransformer(s),i=Qu(n),a=Qu(s);return i.numHSL===a.numHSL&&i.numRGB===a.numRGB&&i.numNumbers>=a.numNumbers?_f(vf(i.parsed,a.parsed),o):(jr(!0,`Complex values '${n}' and '${s}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),r=>`${r>0?s:n}`)},dD=(n,s)=>o=>Fr(n,s,o);function mD(n){if(typeof n=="number")return dD;if(typeof n=="string")return vn.test(n)?hf:bf;if(Array.isArray(n))return vf;if(typeof n=="object")return pD}function fD(n,s,o){const i=[],a=o||mD(n[0]),l=n.length-1;for(let r=0;r<l;r++){let c=a(n[r],n[r+1]);if(s){const u=Array.isArray(s)?s[r]:s;c=_f(u,c)}i.push(c)}return i}function hD([n,s],[o]){return i=>o(lf(n,s,i))}function _D(n,s){const o=n.length,i=o-1;return a=>{let l=0,r=!1;if(a<=n[0]?r=!0:a>=n[i]&&(l=i-1,r=!0),!r){let u=1;for(;u<o&&!(n[u]>a||u===i);u++);l=u-1}const c=lf(n[l],n[l+1],a);return s[l](c)}}function xf(n,s,{clamp:o=!0,ease:i,mixer:a}={}){const l=n.length;No(l===s.length,"Both input and output ranges must be the same length"),No(!i||!Array.isArray(i)||i.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),n[0]>n[l-1]&&(n=[].concat(n),s=[].concat(s),n.reverse(),s.reverse());const r=fD(s,i,a),c=l===2?hD(n,r):_D(n,r);return o?u=>c(Ul(n[0],n[l-1],u)):c}const ha=n=>s=>1-n(1-s),Wr=n=>s=>s<=.5?n(2*s)/2:(2-n(2*(1-s)))/2,gD=n=>s=>Math.pow(s,n),kf=n=>s=>s*s*((n+1)*s-n),vD=n=>{const s=kf(n);return o=>(o*=2)<1?.5*s(o):.5*(2-Math.pow(2,-10*(o-1)))},wf=1.525,bD=4/11,xD=8/11,kD=9/10,yf=n=>n,Br=gD(2),wD=ha(Br),Lf=Wr(Br),If=n=>1-Math.sin(Math.acos(n)),$f=ha(If),yD=Wr($f),qr=kf(wf),LD=ha(qr),ID=Wr(qr),$D=vD(wf),CD=4356/361,ED=35442/1805,SD=16061/1805,Vi=n=>{if(n===1||n===0)return n;const s=n*n;return n<bD?7.5625*s:n<xD?9.075*s-9.9*n+3.4:n<kD?CD*s-ED*n+SD:10.8*n*n-20.52*n+10.72},RD=ha(Vi),zD=n=>n<.5?.5*(1-Vi(1-n*2)):.5*Vi(n*2-1)+.5;function TD(n,s){return n.map(()=>s||Lf).splice(0,n.length-1)}function MD(n){const s=n.length;return n.map((o,i)=>i!==0?i/(s-1):0)}function AD(n,s){return n.map(o=>o*s)}function yi({from:n=0,to:s=1,ease:o,offset:i,duration:a=300}){const l={done:!1,value:n},r=Array.isArray(s)?s:[n,s],c=AD(i&&i.length===r.length?i:MD(r),a);function u(){return xf(c,r,{ease:Array.isArray(o)?o:TD(r,o)})}let p=u();return{next:d=>(l.value=p(d),l.done=d>=a,l),flipTarget:()=>{r.reverse(),p=u()}}}function OD({velocity:n=0,from:s=0,power:o=.8,timeConstant:i=350,restDelta:a=.5,modifyTarget:l}){const r={done:!1,value:s};let c=o*n;const u=s+c,p=l===void 0?u:l(u);return p!==u&&(c=p-s),{next:d=>{const m=-c*Math.exp(-d/i);return r.done=!(m>a||m<-a),r.value=r.done?p:p+m,r},flipTarget:()=>{}}}const Zu={keyframes:yi,spring:Nr,decay:OD};function PD(n){if(Array.isArray(n.to))return yi;if(Zu[n.type])return Zu[n.type];const s=new Set(Object.keys(n));return s.has("ease")||s.has("duration")&&!s.has("dampingRatio")?yi:s.has("dampingRatio")||s.has("stiffness")||s.has("mass")||s.has("damping")||s.has("restSpeed")||s.has("restDelta")?Nr:yi}function Cf(n,s,o=0){return n-s-o}function DD(n,s,o=0,i=!0){return i?Cf(s+-n,s,o):s-(n-s)+o}function jD(n,s,o,i){return i?n>=s+o:n<=-o}const ND=n=>{const s=({delta:o})=>n(o);return{start:()=>ql.update(s,!0),stop:()=>FP.update(s)}};function Ef(n){var s,o,{from:i,autoplay:a=!0,driver:l=ND,elapsed:r=0,repeat:c=0,repeatType:u="loop",repeatDelay:p=0,onPlay:d,onStop:m,onComplete:f,onRepeat:h,onUpdate:_}=n,w=af(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:y}=w,L,$=0,x=w.duration,P,T=!1,j=!0,B;const F=PD(w);!((o=(s=F).needsInterpolation)===null||o===void 0)&&o.call(s,i,y)&&(B=xf([0,100],[i,y],{clamp:!1}),i=0,y=100);const V=F(Object.assign(Object.assign({},w),{from:i,to:y}));function le(){$++,u==="reverse"?(j=$%2===0,r=DD(r,x,p,j)):(r=Cf(r,x,p),u==="mirror"&&V.flipTarget()),T=!1,h&&h()}function me(){L.stop(),f&&f()}function X(xe){if(j||(xe=-xe),r+=xe,!T){const ye=V.next(Math.max(0,r));P=ye.value,B&&(P=B(P)),T=j?ye.done:r<=0}_==null||_(P),T&&($===0&&(x??(x=r)),$<c?jD(r,x,p,j)&&le():me())}function ve(){d==null||d(),L=l(X),L.start()}return a&&ve(),{stop:()=>{m==null||m(),L.stop()}}}function Sf(n,s){return s?n*(1e3/s):0}function FD({from:n=0,velocity:s=0,min:o,max:i,power:a=.8,timeConstant:l=750,bounceStiffness:r=500,bounceDamping:c=10,restDelta:u=1,modifyTarget:p,driver:d,onUpdate:m,onComplete:f,onStop:h}){let _;function w(x){return o!==void 0&&x<o||i!==void 0&&x>i}function y(x){return o===void 0?i:i===void 0||Math.abs(o-x)<Math.abs(i-x)?o:i}function L(x){_==null||_.stop(),_=Ef(Object.assign(Object.assign({},x),{driver:d,onUpdate:P=>{var T;m==null||m(P),(T=x.onUpdate)===null||T===void 0||T.call(x,P)},onComplete:f,onStop:h}))}function $(x){L(Object.assign({type:"spring",stiffness:r,damping:c,restDelta:u},x))}if(w(n))$({from:n,velocity:s,to:y(n)});else{let x=a*s+n;typeof p<"u"&&(x=p(x));const P=y(x),T=P===o?-1:1;let j,B;const F=V=>{j=B,B=V,s=Sf(V-j,of().delta),(T===1&&V>P||T===-1&&V<P)&&$({from:V,to:P,velocity:s})};L({type:"decay",from:n,velocity:s,timeConstant:l,power:a,restDelta:u,modifyTarget:p,onUpdate:w(x)?F:void 0})}return{stop:()=>_==null?void 0:_.stop()}}const Rf=(n,s)=>1-3*s+3*n,zf=(n,s)=>3*s-6*n,Tf=n=>3*n,Gi=(n,s,o)=>((Rf(s,o)*n+zf(s,o))*n+Tf(s))*n,Mf=(n,s,o)=>3*Rf(s,o)*n*n+2*zf(s,o)*n+Tf(s),HD=1e-7,KD=10;function WD(n,s,o,i,a){let l,r,c=0;do r=s+(o-s)/2,l=Gi(r,i,a)-n,l>0?o=r:s=r;while(Math.abs(l)>HD&&++c<KD);return r}const BD=8,qD=.001;function UD(n,s,o,i){for(let a=0;a<BD;++a){const l=Mf(s,o,i);if(l===0)return s;const r=Gi(s,o,i)-n;s-=r/l}return s}const Li=11,hi=1/(Li-1);function VD(n,s,o,i){if(n===s&&o===i)return yf;const a=new Float32Array(Li);for(let r=0;r<Li;++r)a[r]=Gi(r*hi,n,o);function l(r){let c=0,u=1;const p=Li-1;for(;u!==p&&a[u]<=r;++u)c+=hi;--u;const d=(r-a[u])/(a[u+1]-a[u]),m=c+d*hi,f=Mf(m,n,o);return f>=qD?UD(r,m,n,o):f===0?m:WD(r,c,c+hi,n,o)}return r=>r===0||r===1?r:Gi(l(r),s,i)}const Ba={};class GD{constructor(){this.subscriptions=new Set}add(s){return this.subscriptions.add(s),()=>this.subscriptions.delete(s)}notify(s,o,i){if(this.subscriptions.size)for(const a of this.subscriptions)a(s,o,i)}clear(){this.subscriptions.clear()}}function Ju(n){return!isNaN(parseFloat(n))}class YD{constructor(s){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new GD,this.canTrackVelocity=!1,this.updateAndNotify=o=>{this.prev=this.current,this.current=o;const{delta:i,timestamp:a}=of();this.lastUpdated!==a&&(this.timeDelta=i,this.lastUpdated=a),ql.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>ql.postRender(this.velocityCheck),this.velocityCheck=({timestamp:o})=>{this.canTrackVelocity||(this.canTrackVelocity=Ju(this.current)),o!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=s,this.canTrackVelocity=Ju(this.current)}onChange(s){return this.updateSubscribers.add(s)}clearListeners(){this.updateSubscribers.clear()}set(s){this.updateAndNotify(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Sf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(s){return this.stop(),new Promise(o=>{const{stop:i}=s(o);this.stopAnimation=i}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function QD(n){return new YD(n)}const{isArray:ZD}=Array;function JD(){const n=J({}),s=i=>{const a=l=>{n.value[l]&&(n.value[l].stop(),n.value[l].destroy(),delete n.value[l])};i?ZD(i)?i.forEach(a):a(i):Object.keys(n.value).forEach(a)},o=(i,a,l)=>{if(n.value[i])return n.value[i];const r=QD(a);return r.onChange(c=>l[i]=c),n.value[i]=r,r};return q0(s),{motionValues:n,get:o,stop:s}}function XD(n){return Array.isArray(n)}function Qt(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function qa(n){return{type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function ej(n){return{type:"spring",stiffness:550,damping:n===0?100:30,restDelta:.01,restSpeed:10}}function Ua(){return{type:"keyframes",ease:"linear",duration:300}}function nj(n){return{type:"keyframes",duration:800,values:n}}const Xu={default:ej,x:Qt,y:Qt,z:Qt,rotate:Qt,rotateX:Qt,rotateY:Qt,rotateZ:Qt,scaleX:qa,scaleY:qa,scale:qa,backgroundColor:Ua,color:Ua,opacity:Ua};function Af(n,s){let o;return XD(s)?o=nj:o=Xu[n]||Xu.default,{to:s,...o(s)}}const ep={...Qo,transform:Math.round},Of={color:vn,backgroundColor:vn,outlineColor:vn,fill:vn,stroke:vn,borderColor:vn,borderTopColor:vn,borderRightColor:vn,borderBottomColor:vn,borderLeftColor:vn,borderWidth:ke,borderTopWidth:ke,borderRightWidth:ke,borderBottomWidth:ke,borderLeftWidth:ke,borderRadius:ke,radius:ke,borderTopLeftRadius:ke,borderTopRightRadius:ke,borderBottomRightRadius:ke,borderBottomLeftRadius:ke,width:ke,maxWidth:ke,height:ke,maxHeight:ke,size:ke,top:ke,right:ke,bottom:ke,left:ke,padding:ke,paddingTop:ke,paddingRight:ke,paddingBottom:ke,paddingLeft:ke,margin:ke,marginTop:ke,marginRight:ke,marginBottom:ke,marginLeft:ke,rotate:Yt,rotateX:Yt,rotateY:Yt,rotateZ:Yt,scale:fi,scaleX:fi,scaleY:fi,scaleZ:fi,skew:Yt,skewX:Yt,skewY:Yt,distance:ke,translateX:ke,translateY:ke,translateZ:ke,x:ke,y:ke,z:ke,perspective:ke,transformPerspective:ke,opacity:ko,originX:Uu,originY:Uu,originZ:ke,zIndex:ep,filter:Ql,WebkitFilter:Ql,fillOpacity:ko,strokeOpacity:ko,numOctaves:ep},Ur=n=>Of[n];function Pf(n,s){return s&&typeof n=="number"&&s.transform?s.transform(n):n}function tj(n,s){let o=Ur(n);return o!==Ql&&(o=Zo),o.getAnimatableNone?o.getAnimatableNone(s):void 0}const sj={linear:yf,easeIn:Br,easeInOut:Lf,easeOut:wD,circIn:If,circInOut:yD,circOut:$f,backIn:qr,backInOut:ID,backOut:LD,anticipate:$D,bounceIn:RD,bounceInOut:zD,bounceOut:Vi};function np(n){if(Array.isArray(n)){const[s,o,i,a]=n;return VD(s,o,i,a)}else if(typeof n=="string")return sj[n];return n}function oj(n){return Array.isArray(n)&&typeof n[0]!="number"}function tp(n,s){return n==="zIndex"?!1:!!(typeof s=="number"||Array.isArray(s)||typeof s=="string"&&Zo.test(s)&&!s.startsWith("url("))}function ij(n){return Array.isArray(n.to)&&n.to[0]===null&&(n.to=[...n.to],n.to[0]=n.from),n}function aj({ease:n,times:s,delay:o,...i}){const a={...i};return s&&(a.offset=s),n&&(a.ease=oj(n)?n.map(np):np(n)),o&&(a.elapsed=-o),a}function lj(n,s,o){return Array.isArray(s.to)&&(n.duration||(n.duration=800)),ij(s),rj(n)||(n={...n,...Af(o,s.to)}),{...s,...aj(n)}}function rj({delay:n,repeat:s,repeatType:o,repeatDelay:i,from:a,...l}){return!!Object.keys(l).length}function cj(n,s){return n[s]||n.default||n}function uj(n,s,o,i,a){const l=cj(i,n);let r=l.from===null||l.from===void 0?s.get():l.from;const c=tp(n,o);r==="none"&&c&&typeof o=="string"&&(r=tj(n,o));const u=tp(n,r);function p(m){const f={from:r,to:o,velocity:i.velocity?i.velocity:s.getVelocity(),onUpdate:h=>s.set(h)};return l.type==="inertia"||l.type==="decay"?FD({...f,...l}):Ef({...lj(l,f,n),onUpdate:h=>{f.onUpdate(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{i.onComplete&&i.onComplete(),a&&a(),m&&m()}})}function d(m){return s.set(o),i.onComplete&&i.onComplete(),a&&a(),m&&m(),{stop:()=>{}}}return!u||!c||l.type===!1?d:p}function pj(){const{motionValues:n,stop:s,get:o}=JD();return{motionValues:n,stop:s,push:(a,l,r,c={},u)=>{const p=r[a],d=o(a,p,r);if(c&&c.immediate){d.set(l);return}const m=uj(a,d,l,c,u);d.start(m)}}}function dj(n,s={},{motionValues:o,push:i,stop:a}=pj()){const l=D(s),r=J(!1);be(o,m=>{r.value=Object.values(m).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const c=m=>{if(!l||!l[m])throw new Error(`The variant ${m} does not exist.`);return l[m]},u=m=>(typeof m=="string"&&(m=c(m)),Promise.all(Object.entries(m).map(([f,h])=>{if(f!=="transition")return new Promise(_=>i(f,h,n,m.transition||Af(f,m[f]),_))}).filter(Boolean)));return{isAnimating:r,apply:u,set:m=>{const f=xl(m)?m:c(m);Object.entries(f).forEach(([h,_])=>{h!=="transition"&&i(h,_,n,{immediate:!0})})},leave:async m=>{let f;if(l&&(l.leave&&(f=l.leave),!l.leave&&l.initial&&(f=l.initial)),!f){m();return}await u(f),m()},stop:a}}const Vr=typeof window<"u",mj=()=>Vr&&window.onpointerdown===null,fj=()=>Vr&&window.ontouchstart===null,hj=()=>Vr&&window.onmousedown===null;function _j({target:n,state:s,variants:o,apply:i}){const a=D(o),l=J(!1),r=J(!1),c=J(!1),u=H(()=>{let d=[];return a&&(a.hovered&&(d=[...d,...Object.keys(a.hovered)]),a.tapped&&(d=[...d,...Object.keys(a.tapped)]),a.focused&&(d=[...d,...Object.keys(a.focused)])),d}),p=H(()=>{const d={};Object.assign(d,s.value),l.value&&a.hovered&&Object.assign(d,a.hovered),r.value&&a.tapped&&Object.assign(d,a.tapped),c.value&&a.focused&&Object.assign(d,a.focused);for(const m in d)u.value.includes(m)||delete d[m];return d});a.hovered&&(Le(n,"mouseenter",()=>l.value=!0),Le(n,"mouseleave",()=>{l.value=!1,r.value=!1}),Le(n,"mouseout",()=>{l.value=!1,r.value=!1})),a.tapped&&(hj()&&(Le(n,"mousedown",()=>r.value=!0),Le(n,"mouseup",()=>r.value=!1)),mj()&&(Le(n,"pointerdown",()=>r.value=!0),Le(n,"pointerup",()=>r.value=!1)),fj()&&(Le(n,"touchstart",()=>r.value=!0),Le(n,"touchend",()=>r.value=!1))),a.focused&&(Le(n,"focus",()=>c.value=!0),Le(n,"blur",()=>c.value=!1)),be(p,i)}function gj({set:n,target:s,variants:o,variant:i}){const a=D(o);be(()=>s,()=>{a&&(a.initial&&n("initial"),a.enter&&(i.value="enter"))},{immediate:!0,flush:"pre"})}function vj({state:n,apply:s}){be(n,o=>{o&&s(o)},{immediate:!0})}function bj({target:n,variants:s,variant:o}){const i=D(s);i&&(i.visible||i.visibleOnce)&&jv(n,([{isIntersecting:a}])=>{i.visible?a?o.value="visible":o.value="initial":i.visibleOnce&&(a&&o.value!=="visibleOnce"?o.value="visibleOnce":o.value||(o.value="initial"))})}function xj(n,s={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){s.lifeCycleHooks&&gj(n),s.syncVariants&&vj(n),s.visibilityHooks&&bj(n),s.eventListeners&&_j(n)}function Df(n={}){const s=Be({...n}),o=J({});return be(s,()=>{const i={};for(const[a,l]of Object.entries(s)){const r=Ur(a),c=Pf(l,r);i[a]=c}o.value=i},{immediate:!0,deep:!0}),{state:s,style:o}}function Gr(n,s){be(()=>ln(n),o=>{o&&s(o)},{immediate:!0})}const kj={x:"translateX",y:"translateY",z:"translateZ"};function jf(n={},s=!0){const o=Be({...n}),i=J("");return be(o,a=>{let l="",r=!1;if(s&&(a.x||a.y||a.z)){const c=[a.x||0,a.y||0,a.z||0].map(ke.transform).join(",");l+=`translate3d(${c}) `,r=!0}for(const[c,u]of Object.entries(a)){if(s&&(c==="x"||c==="y"||c==="z"))continue;const p=Ur(c),d=Pf(u,p);l+=`${kj[c]||c}(${d}) `}s&&!r&&(l+="translateZ(0px) "),i.value=l.trim()},{immediate:!0,deep:!0}),{state:o,transform:i}}const wj=["","X","Y","Z"],yj=["perspective","translate","scale","rotate","skew"],Nf=["transformPerspective","x","y","z"];yj.forEach(n=>{wj.forEach(s=>{const o=n+s;Nf.push(o)})});const Lj=new Set(Nf);function Yr(n){return Lj.has(n)}const Ij=new Set(["originX","originY","originZ"]);function Ff(n){return Ij.has(n)}function $j(n){const s={},o={};return Object.entries(n).forEach(([i,a])=>{Yr(i)||Ff(i)?s[i]=a:o[i]=a}),{transform:s,style:o}}function Hf(n){const{transform:s,style:o}=$j(n),{transform:i}=jf(s),{style:a}=Df(o);return i.value&&(a.value.transform=i.value),a.value}function Cj(n,s){let o,i;const{state:a,style:l}=Df();return Gr(n,r=>{i=r;for(const c of Object.keys(Of))r.style[c]===null||r.style[c]===""||Yr(c)||Ff(c)||(a[c]=r.style[c]);o&&Object.entries(o).forEach(([c,u])=>r.style[c]=u),s&&s(a)}),be(l,r=>{if(!i){o=r;return}for(const c in r)i.style[c]=r[c]},{immediate:!0}),{style:a}}function Ej(n){const s=n.trim().split(/\) |\)/);if(s.length===1)return{};const o=i=>i.endsWith("px")||i.endsWith("deg")?parseFloat(i):isNaN(Number(i))?Number(i):i;return s.reduce((i,a)=>{if(!a)return i;const[l,r]=a.split("("),u=r.split(",").map(d=>o(d.endsWith(")")?d.replace(")",""):d.trim())),p=u.length===1?u[0]:u;return{...i,[l]:p}},{})}function Sj(n,s){Object.entries(Ej(s)).forEach(([o,i])=>{const a=["x","y","z"];if(o==="translate3d"){if(i===0){a.forEach(l=>n[l]=0);return}i.forEach((l,r)=>n[a[r]]=l);return}if(i=parseFloat(i),o==="translateX"){n.x=i;return}if(o==="translateY"){n.y=i;return}if(o==="translateZ"){n.z=i;return}n[o]=i})}function Rj(n,s){let o,i;const{state:a,transform:l}=jf();return Gr(n,r=>{i=r,r.style.transform&&Sj(a,r.style.transform),o&&(r.style.transform=o),s&&s(a)}),be(l,r=>{if(!i){o=r;return}i.style.transform=r},{immediate:!0}),{transform:a}}function zj(n,s){const o=Be({}),i=r=>Object.entries(r).forEach(([c,u])=>o[c]=u),{style:a}=Cj(n,i),{transform:l}=Rj(n,i);return be(o,r=>{Object.entries(r).forEach(([c,u])=>{const p=Yr(c)?l:a;p[c]&&p[c]===u||(p[c]=u)})},{immediate:!0,deep:!0}),Gr(n,()=>s&&i(s)),{motionProperties:o,style:a,transform:l}}function Tj(n={}){const s=D(n),o=J();return{state:H(()=>{if(o.value)return s[o.value]}),variant:o}}function Kf(n,s={},o){const{motionProperties:i}=zj(n),{variant:a,state:l}=Tj(s),r=dj(i,s),c={target:n,variant:a,variants:s,state:l,motionProperties:i,...r};return xj(c,o),c}const Mj=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function Aj(n,s){const o=n.props?n.props:n.data&&n.data.attrs?n.data.attrs:{};o&&(o.variants&&xl(o.variants)&&(s.value={...s.value,...o.variants}),Mj.forEach(i=>{if(i==="delay"){if(o&&o[i]&&typeof o[i]=="number"){const a=o[i];s&&s.value&&(s.value.enter&&(s.value.enter.transition||(s.value.enter.transition={}),s.value.enter.transition={delay:a,...s.value.enter.transition}),s.value.visible&&(s.value.visible.transition||(s.value.visible.transition={}),s.value.visible.transition={delay:a,...s.value.visible.transition}),s.value.visibleOnce&&(s.value.visibleOnce.transition||(s.value.visibleOnce.transition={}),s.value.visibleOnce.transition={delay:a,...s.value.visibleOnce.transition}))}return}i==="visible-once"&&(i="visibleOnce"),o&&o[i]&&xl(o[i])&&(s.value[i]=o[i])}))}function Va(n){return{created:(o,i,a)=>{const l=i.value&&typeof i.value=="string"?i.value:a.key;l&&Ba[l]&&Ba[l].stop();const r=J(n||{});typeof i.value=="object"&&(r.value=i.value),Aj(a,r);const c=Kf(o,r);o.motionInstance=c,l&&(Ba[l]=c)},getSSRProps(o,i){let{initial:a}=o.value||i&&(i==null?void 0:i.props)||{};a=D(a);const l=PP((n==null?void 0:n.initial)||{},a||{});return!l||Object.keys(l).length===0?void 0:{style:Hf(l)}}}}const Oj={initial:{opacity:0},enter:{opacity:1}},Pj={initial:{opacity:0},visible:{opacity:1}},Dj={initial:{opacity:0},visibleOnce:{opacity:1}},jj={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},Nj={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},Fj={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Hj={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Kj={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Wj={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Bj={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},qj={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Uj={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Vj={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Gj={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Yj={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Qj={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Zj={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Jj={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Xj={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},eN={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},nN={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},tN={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},sN={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},oN={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},iN={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},aN={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},lN={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},rN={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},cN={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},uN={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Zl={__proto__:null,fade:Oj,fadeVisible:Pj,fadeVisibleOnce:Dj,pop:jj,popVisible:Nj,popVisibleOnce:Fj,rollBottom:Qj,rollLeft:Hj,rollRight:Bj,rollTop:Vj,rollVisibleBottom:Zj,rollVisibleLeft:Kj,rollVisibleOnceBottom:Jj,rollVisibleOnceLeft:Wj,rollVisibleOnceRight:Uj,rollVisibleOnceTop:Yj,rollVisibleRight:qj,rollVisibleTop:Gj,slideBottom:rN,slideLeft:Xj,slideRight:tN,slideTop:iN,slideVisibleBottom:cN,slideVisibleLeft:eN,slideVisibleOnceBottom:uN,slideVisibleOnceLeft:nN,slideVisibleOnceRight:oN,slideVisibleOnceTop:lN,slideVisibleRight:sN,slideVisibleTop:aN},pN=Me({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(n){var c;const s=K1(),o=Be({});if(!n.is&&!s.default)return()=>yn("div",{});const i=H(()=>{let u;return n.preset&&(u=Zl[n.preset]),u}),a=H(()=>({initial:n.initial,enter:n.enter,leave:n.leave,visible:n.visible,visibleOnce:n.visibleOnce,hovered:n.hovered,tapped:n.tapped,focused:n.focused})),l=H(()=>{const u={...a.value,...i.value||{},...n.variants||{}};return n.delay&&(u.enter.transition={...u.enter.transition},u.enter.transition.delay=parseInt(n.delay)),u}),r=H(()=>{if(!n.is)return;let u=n.is;return typeof r.value=="string"&&!kp(u)&&(u=zn(u)),u});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||process!=null&&process.dev){const u=p=>{var d;(d=p.variants)!=null&&d.initial&&p.set("initial"),setTimeout(()=>{var m,f,h;(m=p.variants)!=null&&m.enter&&p.apply("enter"),(f=p.variants)!=null&&f.visible&&p.apply("visible"),(h=p.variants)!=null&&h.visibleOnce&&p.apply("visibleOnce")},10)};ra(()=>Object.entries(o).forEach(([p,d])=>u(d)))}return{slots:s,component:r,motionConfig:l,instances:o}},render({slots:n,motionConfig:s,instances:o,component:i}){var c;const a=Hf(s.initial||{}),l=(u,p)=>(u.props||(u.props={}),u.props.style=a,u.props.onVnodeMounted=({el:d})=>{const m=Kf(d,s);o[p]=m},u);if(i){const u=yn(i,void 0,n);return l(u,0),u}return(((c=n.default)==null?void 0:c.call(n))||[]).map((u,p)=>l(u,p))}});function dN(n){const s="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",o="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",i=new RegExp(s.split("").join("|"),"g");return n.toString().replace(/[A-Z]/g,a=>`-${a}`).toLowerCase().replace(/\s+/g,"-").replace(i,a=>o.charAt(s.indexOf(a))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const mN={install(n,s){if(n.directive("motion",Va()),n.component("Motion",pN),!s||s&&!s.excludePresets)for(const o in Zl){const i=Zl[o];n.directive(`motion-${dN(o)}`,Va(i))}if(s&&s.directives)for(const o in s.directives){const i=s.directives[o];i.initial,n.directive(`motion-${o}`,Va(i))}}};var sp;const yo=typeof window<"u",fN=Object.prototype.toString,hN=n=>fN.call(n)==="[object Object]";yo&&((sp=window==null?void 0:window.navigator)!=null&&sp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function _N(n){return sr()?(Ip(n),!0):!1}function gN(n){var s;const o=D(n);return(s=o==null?void 0:o.$el)!=null?s:o}const vN=yo?window:void 0,op=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ip="__vueuse_ssr_handlers__";op[ip]=op[ip]||{};function bN(n,s={}){const{immediate:o=!0,window:i=vN}=s,a=J(!1);let l=null;function r(){!a.value||!i||(n(),l=i.requestAnimationFrame(r))}function c(){!a.value&&i&&(a.value=!0,r())}function u(){a.value=!1,l!=null&&i&&(i.cancelAnimationFrame(l),l=null)}return o&&c(),_N(u),{isActive:a,pause:u,resume:c}}var ap;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(ap||(ap={}));const _a="vue-starport-injection",Wf="vue-starport-options",xN={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Bf={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var kN=Object.defineProperty,Yi=Object.getOwnPropertySymbols,qf=Object.prototype.hasOwnProperty,Uf=Object.prototype.propertyIsEnumerable,lp=(n,s,o)=>s in n?kN(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,wN=(n,s)=>{for(var o in s||(s={}))qf.call(s,o)&&lp(n,o,s[o]);if(Yi)for(var o of Yi(s))Uf.call(s,o)&&lp(n,o,s[o]);return n},rp=(n,s)=>{var o={};for(var i in n)qf.call(n,i)&&s.indexOf(i)<0&&(o[i]=n[i]);if(n!=null&&Yi)for(var i of Yi(n))s.indexOf(i)<0&&Uf.call(n,i)&&(o[i]=n[i]);return o};const yN=Me({name:"StarportProxy",props:wN({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Bf),setup(n,s){const o=I(_a),i=H(()=>o.getInstance(n.port,n.component)),a=J(),l=i.value.generateId(),r=J(!1);return i.value.isVisible||(i.value.land(),r.value=!0),kt(async()=>{if(i.value.el){console.error(`[Vue Starport] Multiple proxies of "${i.value.componentName}" with port "${n.port}" detected. The later one will be ignored.`);return}if(i.value.el=a.value,await an(),r.value=!0,i.value.rect.update(),i.value.rect.width===0||i.value.rect.height===0){const c=i.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${i.value.componentName}" (port "${n.port}") has no ${c} on initial render, have you set the size for it?`),console.warn("element:",i.value.el),console.warn("rect:",i.value.rect)}}),Bo(async()=>{i.value.rect.update(),i.value.liftOff(),i.value.el=void 0,r.value=!1,!i.value.options.keepAlive&&(await an(),await an(),!i.value.el&&o.dispose(i.value.port))}),be(()=>n,async()=>{i.value.props&&await an();const c=n,{props:u}=c,p=rp(c,["props"]);i.value.props=u||{},i.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const c=n,{initialProps:u,mountedProps:p}=c,d=rp(c,["initialProps","mountedProps"]),m=G(d,(r.value?p:u)||{});return yn("div",G(m,{id:l,ref:a,"data-starport-proxy":i.value.componentId,"data-starport-landed":i.value.isLanded?"true":void 0,"data-starport-floating":i.value.isLanded?void 0:"true"}),s.slots.default?yn(s.slots.default):void 0)}}});var LN=Object.defineProperty,IN=Object.defineProperties,$N=Object.getOwnPropertyDescriptors,cp=Object.getOwnPropertySymbols,CN=Object.prototype.hasOwnProperty,EN=Object.prototype.propertyIsEnumerable,up=(n,s,o)=>s in n?LN(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,SN=(n,s)=>{for(var o in s||(s={}))CN.call(s,o)&&up(n,o,s[o]);if(cp)for(var o of cp(s))EN.call(s,o)&&up(n,o,s[o]);return n},RN=(n,s)=>IN(n,$N(s));const zN=Me({name:"Starport",inheritAttrs:!0,props:Bf,setup(n,s){const o=J(!1);return kt(()=>{if(o.value=!0,!I(_a))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var r,c;const i=(c=(r=s.slots).default)==null?void 0:c.call(r);if(!i)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(i.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${i.length}`);const a=i[0];let l=a.type;return(!hN(l)||Ht(l))&&(l={render(){return i}}),yn(yN,RN(SN({},n),{key:n.port,component:na(l),props:a.props}))}}});function TN(n){const s=Be({height:0,width:0,left:0,top:0,update:i,listen:l,pause:r,margin:"0px",padding:"0px"}),o=yo?document.documentElement||document.body:void 0;function i(){if(!yo)return;const c=gN(n);if(!c)return;const{height:u,width:p,left:d,top:m}=c.getBoundingClientRect(),f=window.getComputedStyle(c),h=f.margin,_=f.padding;Object.assign(s,{height:u,width:p,left:d,top:o.scrollTop+m,margin:h,padding:_})}const a=bN(i,{immediate:!1});function l(){yo&&(i(),a.resume())}function r(){a.pause()}return s}let MN=(n,s=21)=>(o=s)=>{let i="",a=o;for(;a--;)i+=n[Math.random()*n.length|0];return i};const pp=MN("abcdefghijklmnopqrstuvwxyz",5);function dp(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function AN(n){var s;return n.name||((s=n.__file)==null?void 0:s.split(/[\/\\.]/).slice(-2)[0])||""}var ON=Object.defineProperty,mp=Object.getOwnPropertySymbols,PN=Object.prototype.hasOwnProperty,DN=Object.prototype.propertyIsEnumerable,fp=(n,s,o)=>s in n?ON(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,Ga=(n,s)=>{for(var o in s||(s={}))PN.call(s,o)&&fp(n,o,s[o]);if(mp)for(var o of mp(s))DN.call(s,o)&&fp(n,o,s[o]);return n};function jN(n,s,o={}){const i=AN(s),a=dp(i)||pp(),l=J(),r=J(null),c=J(!1),u=J(!1),p=uh(!0),d=J({}),m=H(()=>Ga(Ga(Ga({},xN),o),d.value)),f=J(0);let h;p.run(()=>{h=TN(l),be(l,async L=>{L&&(u.value=!0),await an(),l.value||(u.value=!1)})});const _=dp(n);function w(){return`starport-${a}-${_}-${pp()}`}const y=w();return Be({el:l,id:y,port:n,props:r,rect:h,scope:p,isLanded:c,isVisible:u,options:m,liftOffTime:f,component:s,componentName:i,componentId:a,generateId:w,setLocalOptions(L={}){d.value=JSON.parse(JSON.stringify(L))},elRef(){return l},liftOff(){c.value&&(c.value=!1,f.value=Date.now(),h.listen())},land(){c.value||(c.value=!0,h.pause())}})}function NN(n){const s=Be(new Map);function o(a,l){let r=s.get(a);return r||(r=jN(a,l,n),s.set(a,r)),r.component=l,r}function i(a){var l;(l=s.get(a))==null||l.scope.stop(),s.delete(a)}return{portMap:s,dispose:i,getInstance:o}}var FN=Object.defineProperty,HN=Object.defineProperties,KN=Object.getOwnPropertyDescriptors,hp=Object.getOwnPropertySymbols,WN=Object.prototype.hasOwnProperty,BN=Object.prototype.propertyIsEnumerable,_p=(n,s,o)=>s in n?FN(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,qN=(n,s)=>{for(var o in s||(s={}))WN.call(s,o)&&_p(n,o,s[o]);if(hp)for(var o of hp(s))BN.call(s,o)&&_p(n,o,s[o]);return n},UN=(n,s)=>HN(n,KN(s));const VN=Me({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(n){const s=I(_a);if(!s)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const o=H(()=>s.getInstance(n.port,n.component)),i=H(()=>{var r;return((r=o.value.el)==null?void 0:r.id)||o.value.id}),a=H(()=>{const r=Date.now()-o.value.liftOffTime,c=Math.max(0,o.value.options.duration-r),u=o.value.rect,p={position:"absolute",left:0,top:0,width:`${u.width}px`,height:`${u.height}px`,margin:u.margin,padding:u.padding,transform:`translate3d(${u.left}px,${u.top}px,0px)`};return!o.value.isVisible||!o.value.el?UN(qN({},p),{zIndex:-1,display:"none"}):(o.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:o.value.options.easing}),p)}),l={onTransitionend(r){o.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${o.value.componentName}" is too short (${r.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${o.value.options.duration/1e3}s).`)}};return()=>{const r=!!(o.value.isLanded&&o.value.el);return yn("div",{style:a.value,"data-starport-craft":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true",onTransitionend:o.value.land},yn(__,{to:r?`#${i.value}`:"body",disabled:!r},yn(o.value.component,G(l,o.value.props))))}}}),GN=Me({name:"StarportCarrier",setup(n,{slots:s}){const o=NN(I(Wf,{}));return Ln().appContext.app.provide(_a,o),()=>{var a;return[(a=s.default)==null?void 0:a.call(s),Array.from(o.portMap.entries()).map(([l,{component:r}])=>yn(VN,{key:l,port:l,component:r}))]}}});function YN(n={}){return{install(s){s.provide(Wf,n),s.component("Starport",zN),s.component("StarportCarrier",GN)}}}function QN(n){function s(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}s(),window.addEventListener("resize",s),n.app.use(mN),n.app.use(YN({keepAlive:!0}))}function In(n,s,o){var i;return((i=n.instance)==null?void 0:i.$).provides[s]??o}function ZN(){return{install(n){n.directive("click",{name:"v-click",mounted(s,o){var d,m,f,h,_,w;if(bo.value||(d=In(o,ho))!=null&&d.value)return;const i=In(o,ts),a=In(o,fo),l=In(o,vl),r=o.modifiers.hide!==!1&&o.modifiers.hide!=null,c=o.modifiers.fade!==!1&&o.modifiers.fade!=null,u=((m=i==null?void 0:i.value)==null?void 0:m.length)||0,p=c?p0:Ea;if(i&&!((f=i==null?void 0:i.value)!=null&&f.includes(s))&&i.value.push(s),o.value==null&&(o.value=(h=i==null?void 0:i.value)==null?void 0:h.length),typeof o.value=="string"&&(o.value.startsWith("+")||o.value.startsWith("-"))&&(o.value=(((_=i==null?void 0:i.value)==null?void 0:_.length)||0)+Number(o.value)),!(l!=null&&l.value.has(o.value)))l==null||l.value.set(o.value,[s]);else if(!((w=l==null?void 0:l.value.get(o.value))!=null&&w.includes(s))){const y=(l==null?void 0:l.value.get(o.value))||[];l==null||l.value.set(o.value,[s].concat(y))}s==null||s.classList.toggle(Jt,!0),a&&be(a,()=>{const y=(a==null?void 0:a.value)??0,L=o.value!=null?y>=o.value:y>u;s.classList.contains(Sa)||s.classList.toggle(p,!L),r!==!1&&r!==void 0&&s.classList.toggle(p,L),s.classList.toggle(Ys,!1);const $=l==null?void 0:l.value.get(y);$==null||$.forEach((x,P)=>{x.classList.toggle(ri,!1),P===$.length-1?x.classList.toggle(Ys,!0):x.classList.toggle(ri,!0)}),s.classList.contains(Ys)||s.classList.toggle(ri,L)},{immediate:!0})},unmounted(s,o){s==null||s.classList.toggle(Jt,!1);const i=In(o,ts);i!=null&&i.value&&bl(i.value,s)}}),n.directive("after",{name:"v-after",mounted(s,o){var c,u,p;if(bo.value||(c=In(o,ho))!=null&&c.value)return;const i=In(o,ts),a=In(o,fo),l=In(o,vl),r=i==null?void 0:i.value.length;o.value==null&&(o.value=i==null?void 0:i.value.length),typeof o.value=="string"&&(o.value.startsWith("+")||o.value.startsWith("-"))&&(o.value=(((u=i==null?void 0:i.value)==null?void 0:u.length)||0)+Number(o.value)),l!=null&&l.value.has(o.value)?(p=l==null?void 0:l.value.get(o.value))==null||p.push(s):l==null||l.value.set(o.value,[s]),s==null||s.classList.toggle(Jt,!0),a&&be(a,()=>{const d=(a.value??0)>=(o.value??r??0);s.classList.contains(Sa)||s.classList.toggle(Ea,!d),s.classList.toggle(Ys,!1),s.classList.contains(Ys)||s.classList.toggle(ri,d)},{immediate:!0})},unmounted(s){s==null||s.classList.toggle(Jt,!0)}}),n.directive("click-hide",{name:"v-click-hide",mounted(s,o){var r,c,u;if(bo.value||(r=In(o,ho))!=null&&r.value)return;const i=In(o,ts),a=In(o,fo),l=((c=i==null?void 0:i.value)==null?void 0:c.length)||0;i&&!((u=i==null?void 0:i.value)!=null&&u.includes(s))&&i.value.push(s),s==null||s.classList.toggle(Jt,!0),a&&be(a,()=>{const p=(a==null?void 0:a.value)??0,d=o.value!=null?p>=o.value:p>l;s.classList.toggle(Ea,d),s.classList.toggle(Sa,d)},{immediate:!0})},unmounted(s,o){s==null||s.classList.toggle(Jt,!1);const i=In(o,ts);i!=null&&i.value&&bl(i.value,s)}})}}}function JN(n,s){const o=Zm(n),i=Jm(s,o.currentRoute,o.currentPage);return{nav:{...o,...i},configs:Re,themeConfigs:H(()=>Re.themeConfig)}}function XN(){return{install(n){const s=JN(Hn,jn);n.provide(E,Be(s))}}}const Ws=fg(AP);Ws.use(wn);Ws.use(r0());Ws.use(ZN());Ws.use(XN());QN({app:Ws,router:wn});Ws.mount("#app");export{Py as $,Gw as A,J as B,iF as C,mn as D,qe as E,ze as F,hk as G,CP as H,jn as I,Ui as J,wP as K,Na as L,kt as M,Be as N,sF as O,aF as P,be as Q,v as R,Rm as S,Te as T,dn as U,Ek as V,eF as W,nF as X,Mo as Y,Oa as Z,S as _,E as a,Sr as a0,Rr as a1,Ue as a2,Iy as a3,S2 as a4,tF as a5,Fn as a6,to as a7,ls as a8,tt as a9,zl as aa,tk as ab,sk as ac,ok as ad,ak as ae,sd as af,Ad as ag,lF as ah,_n as ai,mi as aj,uw as ak,qd as al,lk as am,Bo as an,Bd as b,Re as c,Me as d,Yh as e,ae as f,e as g,D as h,I as i,Ye as j,vP as k,t as l,R as m,tn as n,b as o,we as p,yr as q,Fs as r,Qn as s,xn as t,oF as u,H as v,Ra as w,C as x,wm as y,Xw as z};
