var e=Object.defineProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,t=(s,r,a)=>r in s?e(s,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[r]=a,n=(e,n)=>{for(var l in n||(n={}))r.call(n,l)&&t(e,l,n[l]);if(s)for(var l of s(n))a.call(n,l)&&t(e,l,n[l]);return e};import{S as l,i,s as o,B as c,e as d,k as u,c as f,a as p,d as m,n as b,b as g,a0 as y,f as v,J as h,a1 as $,E as _,p as j,a2 as E,T as O,a3 as w,a4 as D,a5 as I,D as S,F as P,A as x,a$ as B,ab as A,al as V,H as C}from"./vendor-3cdf5abd.js";import{c as L,u as R,f as z}from"./useActions-9d7b74f2.js";function M(e){let s,r,a,t,l,i,o,D,I,S,P,x,B,A,V,C,z,M,W,k,F,H=[{class:A=L(n({[e[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":e[3],"mdc-linear-progress--closed":e[4],"mdc-data-table__linear-progress":"data-table"===e[14]},e[8]))},{style:V=Object.entries(e[10]).map(U).concat([e[2]]).join(" ")},{role:"progressbar"},{"aria-valuemin":C=0},{"aria-valuemax":z=1},{"aria-valuenow":M=e[3]?void 0:e[5]},e[9],e[16]],J={};for(let n=0;n<H.length;n+=1)J=c(J,H[n]);return{c(){s=d("div"),r=d("div"),a=d("div"),l=u(),i=d("div"),o=u(),D=d("div"),I=d("span"),P=u(),x=d("div"),B=d("span"),this.h()},l(e){s=f(e,"DIV",{class:!0,style:!0,role:!0,"aria-valuemin":!0,"aria-valuemax":!0,"aria-valuenow":!0});var t=p(s);r=f(t,"DIV",{class:!0});var n=p(r);a=f(n,"DIV",{class:!0,style:!0}),p(a).forEach(m),l=b(n),i=f(n,"DIV",{class:!0}),p(i).forEach(m),n.forEach(m),o=b(t),D=f(t,"DIV",{class:!0,style:!0});var c=p(D);I=f(c,"SPAN",{class:!0}),p(I).forEach(m),c.forEach(m),P=b(t),x=f(t,"DIV",{class:!0});var d=p(x);B=f(d,"SPAN",{class:!0}),p(B).forEach(m),d.forEach(m),t.forEach(m),this.h()},h(){g(a,"class","mdc-linear-progress__buffer-bar"),g(a,"style",t=Object.entries(e[11]).map(N).join(" ")),g(i,"class","mdc-linear-progress__buffer-dots"),g(r,"class","mdc-linear-progress__buffer"),g(I,"class","mdc-linear-progress__bar-inner"),g(D,"class","mdc-linear-progress__bar mdc-linear-progress__primary-bar"),g(D,"style",S=Object.entries(e[12]).map(T).join(" ")),g(B,"class","mdc-linear-progress__bar-inner"),g(x,"class","mdc-linear-progress__bar mdc-linear-progress__secondary-bar"),y(s,J)},m(t,n){v(t,s,n),h(s,r),h(r,a),h(r,l),h(r,i),h(s,o),h(s,D),h(D,I),h(s,P),h(s,x),h(x,B),e[19](s),k||(F=[$(W=R.call(null,s,e[0])),$(e[13].call(null,s)),_(s,"transitionend",e[20])],k=!0)},p(e,[r]){2048&r&&t!==(t=Object.entries(e[11]).map(N).join(" "))&&g(a,"style",t),4096&r&&S!==(S=Object.entries(e[12]).map(T).join(" "))&&g(D,"style",S),y(s,J=j(H,[282&r&&A!==(A=L(n({[e[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":e[3],"mdc-linear-progress--closed":e[4],"mdc-data-table__linear-progress":"data-table"===e[14]},e[8])))&&{class:A},1028&r&&V!==(V=Object.entries(e[10]).map(U).concat([e[2]]).join(" "))&&{style:V},{role:"progressbar"},{"aria-valuemin":0},{"aria-valuemax":1},40&r&&M!==(M=e[3]?void 0:e[5])&&{"aria-valuenow":M},512&r&&e[9],65536&r&&e[16]])),W&&E(W.update)&&1&r&&W.update.call(null,e[0])},i:O,o:O,d(r){r&&m(s),e[19](null),k=!1,w(F)}}}const N=([e,s])=>`${e}: ${s};`,T=([e,s])=>`${e}: ${s};`,U=([e,s])=>`${e}: ${s};`;function W(e,s,r){const a=["use","class","style","indeterminate","closed","progress","buffer","getElement"];let t,n=D(s,a);const l=z(I());let i,o,{use:d=[]}=s,{class:u=""}=s,{style:f=""}=s,{indeterminate:p=!1}=s,{closed:m=!1}=s,{progress:b=0}=s,{buffer:g}=s,y={},v={},h={},$={},_={},j=S("SMUI:linear-progress:context"),E=S("SMUI:linear-progress:closed");function O(e){return e in y?y[e]:W().classList.contains(e)}function w(e){y[e]||r(8,y[e]=!0,y)}function L(e){e in y&&!y[e]||r(8,y[e]=!1,y)}function R(e,s){v[e]!==s&&r(9,v[e]=s,v)}function M(e){e in v&&null==v[e]||r(9,v[e]=void 0,v)}function N(e,s){h[e]!=s&&(""===s||null==s?(delete h[e],r(10,h)):r(10,h[e]=s,h))}function T(e,s){$[e]!=s&&(""===s||null==s?(delete $[e],r(11,$)):r(11,$[e]=s,$))}function U(e,s){_[e]!=s&&(""===s||null==s?(delete _[e],r(12,_)):r(12,_[e]=s,_))}function W(){return i}P(e,E,(e=>r(21,t=e))),x((()=>(r(6,o=new B({addClass:w,forceLayout:()=>{W().getBoundingClientRect()},setBufferBarStyle:T,setPrimaryBarStyle:U,hasClass:O,removeAttribute:M,removeClass:L,setAttribute:R,setStyle:N,attachResizeObserver:e=>{const s=window.ResizeObserver;if(s){const r=new s(e);return r.observe(W()),r}return null},getWidth:()=>W().offsetWidth})),o.init(),()=>{o.destroy()})));return e.$$set=e=>{s=c(c({},s),A(e)),r(16,n=D(s,a)),"use"in e&&r(0,d=e.use),"class"in e&&r(1,u=e.class),"style"in e&&r(2,f=e.style),"indeterminate"in e&&r(3,p=e.indeterminate),"closed"in e&&r(4,m=e.closed),"progress"in e&&r(5,b=e.progress),"buffer"in e&&r(17,g=e.buffer)},e.$$.update=()=>{16&e.$$.dirty&&E&&V(E,t=m,t),72&e.$$.dirty&&o&&o.isDeterminate()!==!p&&o.setDeterminate(!p),96&e.$$.dirty&&o&&o.getProgress()!==b&&o.setProgress(b),131136&e.$$.dirty&&o&&(null==g?o.setBuffer(1):o.setBuffer(g)),80&e.$$.dirty&&o&&(m?o.close():o.open())},[d,u,f,p,m,b,o,i,y,v,h,$,_,l,j,E,n,g,W,function(e){C[e?"unshift":"push"]((()=>{i=e,r(7,i)}))},()=>o&&o.handleTransitionEnd()]}class k extends l{constructor(e){super(),i(this,e,W,M,o,{use:0,class:1,style:2,indeterminate:3,closed:4,progress:5,buffer:17,getElement:18})}get getElement(){return this.$$.ctx[18]}}export{k as L};
