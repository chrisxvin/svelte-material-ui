var a=Object.defineProperty,t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,r=(a,r)=>{for(var i in r||(r={}))e.call(r,i)&&o(a,i,r[i]);if(t)for(var i of t(r))n.call(r,i)&&o(a,i,r[i]);return a};import{S as i,i as s,s as c,j as l,l as d,m as p,o as u,f as b,p as f,q as m,r as g,u as $,v as _,w as y,x as h,d as v,a4 as O,a5 as j,D as L,y as x,ad as C,B as k,ab as w,H as I,ah as S,L as M,M as A,N as B,O as E}from"./vendor-3cdf5abd.js";import{c as U,f as P,d as D}from"./useActions-9d7b74f2.js";import{R as N,B as R,A as T}from"./Ripple-2556c299.js";function q(a){let t;const e=a[28].default,n=M(e,a,a[32],null);return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,e){n&&n.m(a,e),t=!0},p(a,o){n&&n.p&&(!t||2&o[1])&&A(n,e,a,a[32],t?E(e,a[32],o,null):B(a[32]),null)},i(a){t||(h(n,a),t=!0)},o(a){$(n,a),t=!1},d(a){n&&n.d(a)}}}function H(a){let t,e,n;const o=[{use:[[N,{ripple:a[4],unbounded:!0,color:a[5],disabled:!!a[25].disabled,addClass:a[22],removeClass:a[23],addStyle:a[24]}],a[18],...a[1]]},{class:U(r({[a[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!a[19](a[0])&&a[0],"mdc-card__action":"card:action"===a[20],"mdc-card__action--icon":"card:action"===a[20],"mdc-top-app-bar__navigation-icon":"top-app-bar:navigation"===a[20],"mdc-top-app-bar__action-item":"top-app-bar:action"===a[20],"mdc-snackbar__dismiss":"snackbar:actions"===a[20],"mdc-data-table__pagination-button":"data-table:pagination"===a[20],"mdc-data-table__sort-icon-button":"data-table:sortable-header-cell"===a[20],"mdc-dialog__close":"dialog:header"===a[20]&&"close"===a[9]},a[14]))},{style:Object.entries(a[15]).map(z).concat([a[3]]).join(" ")},{"aria-pressed":a[19](a[0])?null:a[0]?"true":"false"},{"aria-label":a[0]?a[6]:a[7]},{"data-aria-label-on":a[6]},{"data-aria-label-off":a[7]},{"aria-describedby":a[21]},{href:a[8]},a[17],a[16],a[25]];var i=a[10];function s(a){let t={$$slots:{default:[q]},$$scope:{ctx:a}};for(let e=0;e<o.length;e+=1)t=k(t,o[e]);return{props:t}}return i&&(t=new i(s(a)),a[29](t),t.$on("click",a[30]),t.$on("click",a[31])),{c(){t&&l(t.$$.fragment),e=d()},l(a){t&&p(t.$$.fragment,a),e=d()},m(a,o){t&&u(t,a,o),b(a,e,o),n=!0},p(a,n){const c=67093503&n[0]?f(o,[63176754&n[0]&&{use:[[N,{ripple:a[4],unbounded:!0,color:a[5],disabled:!!a[25].disabled,addClass:a[22],removeClass:a[23],addStyle:a[24]}],a[18],...a[1]]},1589765&n[0]&&{class:U(r({[a[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!a[19](a[0])&&a[0],"mdc-card__action":"card:action"===a[20],"mdc-card__action--icon":"card:action"===a[20],"mdc-top-app-bar__navigation-icon":"top-app-bar:navigation"===a[20],"mdc-top-app-bar__action-item":"top-app-bar:action"===a[20],"mdc-snackbar__dismiss":"snackbar:actions"===a[20],"mdc-data-table__pagination-button":"data-table:pagination"===a[20],"mdc-data-table__sort-icon-button":"data-table:sortable-header-cell"===a[20],"mdc-dialog__close":"dialog:header"===a[20]&&"close"===a[9]},a[14]))},32776&n[0]&&{style:Object.entries(a[15]).map(z).concat([a[3]]).join(" ")},524289&n[0]&&{"aria-pressed":a[19](a[0])?null:a[0]?"true":"false"},193&n[0]&&{"aria-label":a[0]?a[6]:a[7]},64&n[0]&&{"data-aria-label-on":a[6]},128&n[0]&&{"data-aria-label-off":a[7]},2097152&n[0]&&{"aria-describedby":a[21]},256&n[0]&&{href:a[8]},131072&n[0]&&m(a[17]),65536&n[0]&&m(a[16]),33554432&n[0]&&m(a[25])]):{};if(2&n[1]&&(c.$$scope={dirty:n,ctx:a}),i!==(i=a[10])){if(t){g();const a=t;$(a.$$.fragment,1,0,(()=>{_(a,1)})),y()}i?(t=new i(s(a)),a[29](t),t.$on("click",a[30]),t.$on("click",a[31]),l(t.$$.fragment),h(t.$$.fragment,1),u(t,e.parentNode,e)):t=null}else i&&t.$set(c)},i(a){n||(t&&h(t.$$.fragment,a),n=!0)},o(a){t&&$(t.$$.fragment,a),n=!1},d(n){a[29](null),n&&v(e),t&&_(t,n)}}}const z=([a,t])=>`${a}: ${t};`;function F(a,t,e){let n;const o=["use","class","style","ripple","color","toggle","pressed","ariaLabelOn","ariaLabelOff","href","action","component","getElement"];let r=O(t,o),{$$slots:i={},$$scope:s}=t;const c=P(j());let l=()=>{};function d(a){return a===l}let p,u,{use:b=[]}=t,{class:f=""}=t,{style:m=""}=t,{ripple:g=!0}=t,{color:$}=t,{toggle:_=!1}=t,{pressed:y=l}=t,{ariaLabelOn:h}=t,{ariaLabelOff:v}=t,{href:M}=t,{action:A}=t,B={},E={},U={},N=L("SMUI:icon-button:context"),q=L("SMUI:icon-button:aria-describedby"),{component:H=(null==M?R:T)}=t;x("SMUI:icon:context","icon-button");let z=null;function F(a){return a in B?B[a]:V().classList.contains(a)}function G(a){B[a]||e(14,B[a]=!0,B)}function J(a){a in B&&!B[a]||e(14,B[a]=!1,B)}function K(a){var t;return a in U?null!==(t=U[a])&&void 0!==t?t:null:V().getAttribute(a)}function Q(a,t){U[a]!==t&&e(16,U[a]=t,U)}function V(){return p.getElement()}C((()=>{u&&u.destroy()}));return a.$$set=a=>{t=k(k({},t),w(a)),e(25,r=O(t,o)),"use"in a&&e(1,b=a.use),"class"in a&&e(2,f=a.class),"style"in a&&e(3,m=a.style),"ripple"in a&&e(4,g=a.ripple),"color"in a&&e(5,$=a.color),"toggle"in a&&e(26,_=a.toggle),"pressed"in a&&e(0,y=a.pressed),"ariaLabelOn"in a&&e(6,h=a.ariaLabelOn),"ariaLabelOff"in a&&e(7,v=a.ariaLabelOff),"href"in a&&e(8,M=a.href),"action"in a&&e(9,A=a.action),"component"in a&&e(10,H=a.component),"$$scope"in a&&e(32,s=a.$$scope)},a.$$.update=()=>{512&a.$$.dirty[0]&&e(17,n=(()=>{if("data-table:pagination"!==N)return"dialog:header"===N?{"data-mdc-dialog-action":A}:{action:A};switch(A){case"first-page":return{"data-first-page":"true"};case"prev-page":return{"data-prev-page":"true"};case"next-page":return{"data-next-page":"true"};case"last-page":return{"data-last-page":"true"};default:return{"data-action":"true"}}})()),201338880&a.$$.dirty[0]&&p&&V()&&_!==z&&(_&&!u?(e(13,u=new S({addClass:G,hasClass:F,notifyChange:a=>{!function(a){e(0,y=a.isOn)}(a),D(V(),"MDCIconButtonToggle:change",a)},removeClass:J,getAttr:K,setAttr:Q})),u.init()):!_&&u&&(u.destroy(),e(13,u=void 0),e(14,B={}),e(16,U={})),e(27,z=_)),8193&a.$$.dirty[0]&&u&&!d(y)&&u.isOn()!==y&&u.toggle(y)},[y,b,f,m,g,$,h,v,M,A,H,V,p,u,B,E,U,n,c,d,N,q,G,J,function(a,t){E[a]!=t&&(""===t||null==t?(delete E[a],e(15,E)):e(15,E[a]=t,E))},r,_,z,i,function(a){I[a?"unshift":"push"]((()=>{p=a,e(12,p)}))},()=>u&&u.handleClick(),()=>"top-app-bar:navigation"===N&&D(V(),"SMUITopAppBarIconButton:nav"),s]}class G extends i{constructor(a){super(),s(this,a,F,H,c,{use:1,class:2,style:3,ripple:4,color:5,toggle:26,pressed:0,ariaLabelOn:6,ariaLabelOff:7,href:8,action:9,component:10,getElement:11},null,[-1,-1])}get getElement(){return this.$$.ctx[11]}}export{G as I};
