function w(){}const dt=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function ht(t){return t&&typeof t=="object"&&typeof t.then=="function"}function tt(t){return t()}function Q(){return Object.create(null)}function $(t){t.forEach(tt)}function G(t){return typeof t=="function"}function Qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function Ut(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function mt(t){return Object.keys(t).length===0}function pt(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Vt(t,e,n){t.$$.on_destroy.push(pt(e,n))}function Xt(t,e,n,i){if(t){const r=et(t,e,n,i);return t[0](r)}}function et(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Yt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)c[o]=e.dirty[o]|r[o];return c}return e.dirty|r}return e.dirty}function Zt(t,e,n,i,r,c){if(r){const s=et(e,n,i,c);t.p(s,r)}}function te(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ee(t){return t==null?"":t}function ne(t){return t&&G(t.destroy)?t.destroy:w}const nt=typeof window<"u";let yt=nt?()=>window.performance.now():()=>Date.now(),I=nt?t=>requestAnimationFrame(t):w;const x=new Set;function it(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&I(it)}function gt(t){let e;return x.size===0&&I(it),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let R=!1;function bt(){R=!0}function xt(){R=!1}function wt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,d=(r>0&&e[n[r]].claim_order<=u?r+1:wt(1,r,a=>e[n[a]].claim_order,u))-1;i[l]=n[d]+1;const f=d+1;n[f]=l,r=Math.max(f,r)}const c=[],s=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);c.reverse(),s.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<s.length;l++){for(;u<c.length&&s[l].claim_order>=c[u].claim_order;)u++;const d=u<c.length?c[u]:null;t.insertBefore(s[l],d)}}function rt(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=q("style");return kt(st(t),e),e.sheet}function kt(t,e){rt(t.head||t,e)}function Et(t,e){if(R){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function At(t,e,n){t.insertBefore(e,n||null)}function Nt(t,e,n){R&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function A(t){t.parentNode.removeChild(t)}function ie(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function q(t){return document.createElement(t)}function Ct(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function re(){return J(" ")}function se(){return J("")}function U(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ce(t){return function(e){return e.preventDefault(),t.call(this,e)}}function le(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Tt(t){return Array.from(t.childNodes)}function ct(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function lt(t,e,n,i,r=!1){ct(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function St(t,e,n,i){return lt(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||c.push(o.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function oe(t,e,n){return St(t,e,n,q)}function jt(t,e){return lt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(e),!0)}function ue(t){return jt(t," ")}function V(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function ae(t,e){const n=V(t,"HTML_TAG_START",0),i=V(t,"HTML_TAG_END",n);if(n===i)return new X(void 0,e);ct(t);const r=t.splice(n,i-n+1);A(r[0]),A(r[r.length-1]);const c=r.slice(1,r.length-1);for(const s of c)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new X(c,e)}function fe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function de(t,e){t.value=e==null?"":e}function _e(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let S;function Mt(){if(S===void 0){S=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{S=!0}}return S}function he(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=q("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=Mt();let c;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=U(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=U(i.contentWindow,"resize",e)}),rt(t,i),()=>{(r||c&&i.contentWindow)&&c(),A(i)}}function me(t,e,n){t.classList[n?"add":"remove"](e)}function zt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function pe(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Dt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Ct(n.nodeName):this.e=q(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(A)}}class X extends Dt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Nt(this.t,this.n[n],e)}}const D=new Map;let H=0;function Ht(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Lt(t,e){const n={stylesheet:vt(e),rules:{}};return D.set(t,n),n}function Y(t,e,n,i,r,c,s,o=0){const l=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=l){const b=e+(n-e)*c(y);u+=y*100+`%{${s(b,1-b)}}
`}const d=u+`100% {${s(n,1-n)}}
}`,f=`__svelte_${Ht(d)}_${o}`,a=st(t),{stylesheet:_,rules:h}=D.get(a)||Lt(a,t);h[f]||(h[f]=!0,_.insertRule(`@keyframes ${f} ${d}`,_.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${i}ms linear ${r}ms 1 both`,H+=1,f}function Rt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),H-=r,H||qt())}function qt(){I(()=>{H||(D.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),D.clear())})}let N;function m(t){N=t}function v(){if(!N)throw new Error("Function called outside component initialization");return N}function ye(t){v().$$.on_mount.push(t)}function ge(t){v().$$.after_update.push(t)}function be(t){v().$$.on_destroy.push(t)}function xe(t,e){return v().$$.context.set(t,e),e}function we(t){return v().$$.context.get(t)}const E=[],Z=[],M=[],W=[],ot=Promise.resolve();let F=!1;function ut(){F||(F=!0,ot.then(K))}function $e(){return ut(),ot}function L(t){M.push(t)}function ve(t){W.push(t)}const P=new Set;let j=0;function K(){const t=N;do{for(;j<E.length;){const e=E[j];j++,m(e),Ot(e.$$)}for(m(null),E.length=0,j=0;Z.length;)Z.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];P.has(n)||(P.add(n),n())}M.length=0}while(E.length);for(;W.length;)W.pop()();F=!1,P.clear(),m(t)}function Ot(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}let k;function Pt(){return k||(k=Promise.resolve(),k.then(()=>{k=null})),k}function B(t,e,n){t.dispatchEvent(zt(`${e?"intro":"outro"}${n}`))}const z=new Set;let p;function Bt(){p={r:0,c:[],p}}function Wt(){p.r||$(p.c),p=p.p}function at(t,e){t&&t.i&&(z.delete(t),t.i(e))}function Ft(t,e,n,i){if(t&&t.o){if(z.has(t))return;z.add(t),p.c.push(()=>{z.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Gt={duration:0};function ke(t,e,n,i){let r=e(t,n),c=i?0:1,s=null,o=null,l=null;function u(){l&&Rt(t,l)}function d(a,_){const h=a.b-c;return _*=Math.abs(h),{a:c,b:a.b,d:h,duration:_,start:a.start,end:a.start+_,group:a.group}}function f(a){const{delay:_=0,duration:h=300,easing:g=dt,tick:y=w,css:b}=r||Gt,O={start:yt()+_,b:a};a||(O.group=p,p.r+=1),s||o?o=O:(b&&(u(),l=Y(t,c,a,h,_,g,b)),a&&y(0,1),s=d(O,h),L(()=>B(t,a,"start")),gt(C=>{if(o&&C>o.start&&(s=d(o,h),o=null,B(t,s.b,"start"),b&&(u(),l=Y(t,c,s.b,s.duration,0,g,r.css))),s){if(C>=s.end)y(c=s.b,1-c),B(t,s.b,"end"),o||(s.b?u():--s.group.r||$(s.group.c)),s=null;else if(C>=s.start){const ft=C-s.start;c=s.a+s.d*g(ft/s.duration),y(c,1-c)}}return!!(s||o)}))}return{run(a){G(r)?Pt().then(()=>{r=r(),f(a)}):f(a)},end(){u(),s=o=null}}}function Ee(t,e){const n=e.token={};function i(r,c,s,o){if(e.token!==n)return;e.resolved=o;let l=e.ctx;s!==void 0&&(l=l.slice(),l[s]=o);const u=r&&(e.current=r)(l);let d=!1;e.block&&(e.blocks?e.blocks.forEach((f,a)=>{a!==c&&f&&(Bt(),Ft(f,1,1,()=>{e.blocks[a]===f&&(e.blocks[a]=null)}),Wt())}):e.block.d(1),u.c(),at(u,1),u.m(e.mount(),e.anchor),d=!0),e.block=u,e.blocks&&(e.blocks[c]=u),d&&K()}if(ht(t)){const r=v();if(t.then(c=>{m(r),i(e.then,1,e.value,c),m(null)},c=>{if(m(r),i(e.catch,2,e.error,c),m(null),!e.hasCatch)throw c}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Ae(t,e,n){const i=e.slice(),{resolved:r}=t;t.current===t.then&&(i[t.value]=r),t.current===t.catch&&(i[t.error]=r),t.block.p(i,n)}function Ne(t,e){const n={},i={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],o=e[c];if(o){for(const l in s)l in o||(i[l]=1);for(const l in o)r[l]||(n[l]=o[l],r[l]=1);t[c]=o}else for(const l in s)r[l]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Ce(t){return typeof t=="object"&&t!==null?t:{}}function Te(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Se(t){t&&t.c()}function je(t,e){t&&t.l(e)}function It(t,e,n,i){const{fragment:r,on_mount:c,on_destroy:s,after_update:o}=t.$$;r&&r.m(e,n),i||L(()=>{const l=c.map(tt).filter(G);s?s.push(...l):$(l),t.$$.on_mount=[]}),o.forEach(L)}function Jt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Kt(t,e){t.$$.dirty[0]===-1&&(E.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Me(t,e,n,i,r,c,s,o=[-1]){const l=N;m(t);const u=t.$$={fragment:null,ctx:null,props:c,update:w,not_equal:r,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Q(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(f,a,..._)=>{const h=_.length?_[0]:a;return u.ctx&&r(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),d&&Kt(t,f)),a}):[],u.update(),d=!0,$(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){bt();const f=Tt(e.target);u.fragment&&u.fragment.l(f),f.forEach(A)}else u.fragment&&u.fragment.c();e.intro&&at(t.$$.fragment),It(t,e.target,e.anchor,e.customElement),xt(),K()}m(l)}class ze{$destroy(){Jt(this,1),this.$destroy=w}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ee as $,Ce as A,Jt as B,_t as C,$e as D,w as E,Xt as F,pe as G,Ut as H,Et as I,Zt as J,te as K,Yt as L,be as M,dt as N,Vt as O,Z as P,we as Q,yt as R,ze as S,gt as T,L as U,he as V,ie as W,me as X,ee as Y,U as Z,$ as _,re as a,Ae as a0,de as a1,ce as a2,G as a3,X as a4,ae as a5,Te as a6,ve as a7,ne as a8,ke as a9,Nt as b,ue as c,Wt as d,se as e,at as f,Bt as g,A as h,Me as i,xe as j,ge as k,q as l,oe as m,Tt as n,ye as o,le as p,_e as q,J as r,Qt as s,Ft as t,jt as u,fe as v,Se as w,je as x,It as y,Ne as z};
