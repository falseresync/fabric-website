function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function c(t,e,n,r,o,s,a){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=i(e,n,r,a);t.p(o,c)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function p(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function v(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function x(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?p(e):h(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function b(t){return w(t," ")}function E(t,e){e=""+e,t.data!==e&&(t.data=e)}function k(t,e,n){t.classList[n?"add":"remove"](e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let _;function A(t){_=t}function L(){if(!_)throw new Error("Function called outside component initialization");return _}const C=[],P=[],N=[],R=[],j=Promise.resolve();let O=!1;function q(t){N.push(t)}let U=!1;const I=new Set;function B(){if(!U){U=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];A(e),M(e.$$)}for(C.length=0;P.length;)P.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];I.has(e)||(I.add(e),e())}N.length=0}while(C.length);for(;R.length;)R.pop()();O=!1,U=!1,I.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const T=new Set;let V;function D(){V={r:0,c:[],p:V}}function H(){V.r||o(V.c),V=V.p}function J(t,e){t&&t.i&&(T.delete(t),t.i(e))}function F(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),V.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function G(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],i=e[s];if(i){for(const t in a)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function K(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function z(t,e){t&&t.l(e)}function W(t,e,r){const{fragment:a,on_mount:i,on_destroy:c,after_update:l}=t.$$;a&&a.m(e,r),q(()=>{const e=i.map(n).filter(s);c?c.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(q)}function X(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(C.push(t),O||(O=!0,j.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,s,a,i,c,l=[-1]){const u=_;A(e);const h=n.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(p.ctx=s?s(e,h,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&Q(e,t)),n}):[],p.update(),d=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=$(n.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();n.intro&&J(e.$$.fragment),W(e,n.target,n.anchor),B()}A(u)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const et=[];function nt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!et.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,i=t){const c=[a,i];return o.push(c),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const rt={},ot=()=>({});function st(t){let e,n,r;return{c(){e=p("path"),n=p("polyline"),r=p("line"),this.h()},l(t){e=x(t,"path",{d:!0},1),$(e).forEach(f),n=x(t,"polyline",{points:!0},1),$(n).forEach(f),r=x(t,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),$(r).forEach(f),this.h()},h(){y(e,"d","M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"),y(n,"points","15 3 21 3 21 9"),y(r,"x1","10"),y(r,"y1","14"),y(r,"x2","21"),y(r,"y2","3")},m(t,o){u(t,e,o),u(t,n,o),u(t,r,o)},d(t){t&&f(e),t&&f(n),t&&f(r)}}}function at(t){let e;return{c(){e=p("path"),this.h()},l(t){e=x(t,"path",{d:!0},1),$(e).forEach(f),this.h()},h(){y(e,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35\n        6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91\n        1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07\n        0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0\n        0 0 9 18.13V22")},m(t,n){u(t,e,n)},d(t){t&&f(e)}}}function it(e){let n,r,o,s,a;function i(t,e){return t[2]?at:st}let c=i(e),g=c(e);return{c(){n=h("a"),r=h("span"),o=d(e[1]),s=m(),a=p("svg"),g.c(),this.h()},l(t){n=x(t,"A",{href:!0,class:!0});var i=$(n);r=x(i,"SPAN",{});var c=$(r);o=w(c,e[1]),c.forEach(f),s=b(i),a=x(i,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var l=$(a);g.l(l),l.forEach(f),i.forEach(f),this.h()},h(){y(a,"xmlns","http://www.w3.org/2000/svg"),y(a,"width","24"),y(a,"height","24"),y(a,"viewBox","0 0 24 24"),y(a,"fill","none"),y(a,"stroke","currentColor"),y(a,"stroke-width","2"),y(a,"stroke-linecap","round"),y(a,"stroke-linejoin","round"),y(a,"class","svelte-12urhnv"),y(n,"href",e[0]),y(n,"class","svelte-12urhnv")},m(t,e){u(t,n,e),l(n,r),l(r,o),l(n,s),l(n,a),g.m(a,null)},p(t,[e]){2&e&&E(o,t[1]),c!==(c=i(t))&&(g.d(1),g=c(t),g&&(g.c(),g.m(a,null))),1&e&&y(n,"href",t[0])},i:t,o:t,d(t){t&&f(n),g.d()}}}function ct(t,e,n){let{href:r}=e,{text:o}=e,{github:s=!1}=e;return t.$set=t=>{"href"in t&&n(0,r=t.href),"text"in t&&n(1,o=t.text),"github"in t&&n(2,s=t.github)},[r,o,s]}class lt extends tt{constructor(t){super(),Z(this,t,ct,it,a,{href:0,text:1,github:2})}}function ut(t){const e=e=>{!t||t.contains(e.target)||e.defaultPrevented||t.dispatchEvent(new CustomEvent("clickOutside",t))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function ft(t){let e,n,r;return{c(){e=p("line"),n=p("line"),r=p("line"),this.h()},l(t){e=x(t,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),$(e).forEach(f),n=x(t,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),$(n).forEach(f),r=x(t,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),$(r).forEach(f),this.h()},h(){y(e,"x1","3"),y(e,"y1","12"),y(e,"x2","21"),y(e,"y2","12"),y(n,"x1","3"),y(n,"y1","6"),y(n,"x2","21"),y(n,"y2","6"),y(r,"x1","3"),y(r,"y1","18"),y(r,"x2","21"),y(r,"y2","18")},m(t,o){u(t,e,o),u(t,n,o),u(t,r,o)},d(t){t&&f(e),t&&f(n),t&&f(r)}}}function ht(t){let e,n;return{c(){e=p("line"),n=p("line"),this.h()},l(t){e=x(t,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),$(e).forEach(f),n=x(t,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),$(n).forEach(f),this.h()},h(){y(e,"x1","18"),y(e,"y1","6"),y(e,"x2","6"),y(e,"y2","18"),y(n,"x1","6"),y(n,"y1","6"),y(n,"x2","18"),y(n,"y2","18")},m(t,r){u(t,e,r),u(t,n,r)},d(t){t&&f(e),t&&f(n)}}}function pt(e){let n,r,a,i,c,g,E,S,_,A,L,C,P,N,R,j,O,q,U,I,B,M,T,V,D,H;function G(t,e){return t[1]?ht:ft}let K=G(e),Q=K(e);const Z=new lt({props:{href:"https://wiki.fabricmc.net",text:"wiki"}});return{c(){n=h("nav"),r=h("div"),a=h("a"),i=h("img"),E=m(),S=h("button"),_=p("svg"),Q.c(),A=m(),L=h("ul"),C=h("li"),P=h("a"),N=d("install"),j=m(),O=h("li"),q=h("a"),U=d("community"),B=m(),M=h("li"),Y(Z.$$.fragment),this.h()},l(t){n=x(t,"NAV",{class:!0});var e=$(n);r=x(e,"DIV",{class:!0});var o=$(r);a=x(o,"A",{"aria-current":!0,href:!0,class:!0});var s=$(a);i=x(s,"IMG",{alt:!0,src:!0,class:!0}),s.forEach(f),E=b(o),S=x(o,"BUTTON",{class:!0});var c=$(S);_=x(c,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var l=$(_);Q.l(l),l.forEach(f),c.forEach(f),o.forEach(f),A=b(e),L=x(e,"UL",{class:!0});var u=$(L);C=x(u,"LI",{class:!0});var h=$(C);P=x(h,"A",{"aria-current":!0,href:!0,class:!0});var p=$(P);N=w(p,"install"),p.forEach(f),h.forEach(f),j=b(u),O=x(u,"LI",{class:!0});var d=$(O);q=x(d,"A",{"aria-current":!0,href:!0,class:!0});var m=$(q);U=w(m,"community"),m.forEach(f),d.forEach(f),B=b(u),M=x(u,"LI",{class:!0});var g=$(M);z(Z.$$.fragment,g),g.forEach(f),u.forEach(f),e.forEach(f),this.h()},h(){y(i,"alt","Fabric logo"),i.src!==(c="logo-full.png")&&y(i,"src","logo-full.png"),y(i,"class","svelte-8it94p"),y(a,"aria-current",g=void 0===e[0]?"page":void 0),y(a,"href","/"),y(a,"class","svelte-8it94p"),y(_,"xmlns","http://www.w3.org/2000/svg"),y(_,"width","24"),y(_,"height","24"),y(_,"viewBox","0 0 24 24"),y(_,"fill","none"),y(_,"stroke","currentColor"),y(_,"stroke-width","2"),y(_,"stroke-linecap","round"),y(_,"stroke-linejoin","round"),y(S,"class","svelte-8it94p"),y(r,"class","svelte-8it94p"),y(P,"aria-current",R="install"===e[0]?"page":void 0),y(P,"href","install"),y(P,"class","svelte-8it94p"),y(C,"class","svelte-8it94p"),y(q,"aria-current",I="community"===e[0]?"page":void 0),y(q,"href","community"),y(q,"class","svelte-8it94p"),y(O,"class","svelte-8it94p"),y(M,"class","svelte-8it94p"),y(L,"class","svelte-8it94p"),k(L,"open",e[1]),y(n,"class","svelte-8it94p")},m(o,c){var f;u(o,n,c),l(n,r),l(r,a),l(a,i),l(r,E),l(r,S),l(S,_),Q.m(_,null),l(n,A),l(n,L),l(L,C),l(C,P),l(P,N),l(L,j),l(L,O),l(O,q),l(q,U),l(L,B),l(L,M),W(Z,M,null),V=!0,D||(H=[v(S,"click",e[4]),(f=T=ut.call(null,n),f&&s(f.destroy)?f.destroy:t),v(n,"clickOutside",e[5])],D=!0)},p(t,[e]){(!V||1&e&&g!==(g=void 0===t[0]?"page":void 0))&&y(a,"aria-current",g),K!==(K=G(t))&&(Q.d(1),Q=K(t),Q&&(Q.c(),Q.m(_,null))),(!V||1&e&&R!==(R="install"===t[0]?"page":void 0))&&y(P,"aria-current",R),(!V||1&e&&I!==(I="community"===t[0]?"page":void 0))&&y(q,"aria-current",I),2&e&&k(L,"open",t[1])},i(t){V||(J(Z.$$.fragment,t),V=!0)},o(t){F(Z.$$.fragment,t),V=!1},d(t){t&&f(n),Q.d(),X(Z),D=!1,o(H)}}}function dt(t,e,n){let{segment:r}=e;const{page:o}=le();let s,a=!1;o.subscribe(({path:t})=>{void 0!==s&&s==t||(s=t,n(1,a=!1))});return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r,a,s,o,t=>n(1,a=!a),t=>n(1,a=!1)]}class mt extends tt{constructor(t){super(),Z(this,t,dt,pt,a,{segment:0})}}function gt(t){let e,n,r,o,s,a,g,v,E,k,S,_,A,L,C,P,N,R,j,O,q,U,I;const B=new mt({props:{segment:t[0]}}),M=t[2].default,T=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(M,t,t[1],null);return{c(){e=h("main"),Y(B.$$.fragment),n=m(),T&&T.c(),r=m(),o=h("footer"),s=h("p"),a=h("a"),g=h("img"),E=m(),k=h("br"),S=d("\n      The contents of this website, unless otherwise indicated, are licensed\n      under a\n      "),_=h("a"),A=h("span"),L=d("Creative Commons Attribution-NonCommercial-ShareAlike 4.0\n          International License"),C=m(),P=p("svg"),N=p("path"),R=p("polyline"),j=p("line"),O=m(),q=h("p"),U=d("Not an official Minecraft product. Not approved by or associated with Mojang."),this.h()},l(t){e=x(t,"MAIN",{class:!0});var i=$(e);z(B.$$.fragment,i),n=b(i),T&&T.l(i),r=b(i),o=x(i,"FOOTER",{class:!0});var c=$(o);s=x(c,"P",{});var l=$(s);a=x(l,"A",{rel:!0,href:!0});var u=$(a);g=x(u,"IMG",{alt:!0,style:!0,src:!0}),u.forEach(f),E=b(l),k=x(l,"BR",{}),S=w(l,"\n      The contents of this website, unless otherwise indicated, are licensed\n      under a\n      "),_=x(l,"A",{rel:!0,href:!0});var h=$(_);A=x(h,"SPAN",{});var p=$(A);L=w(p,"Creative Commons Attribution-NonCommercial-ShareAlike 4.0\n          International License"),p.forEach(f),C=b(h),P=x(h,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var d=$(P);N=x(d,"path",{d:!0},1),$(N).forEach(f),R=x(d,"polyline",{points:!0},1),$(R).forEach(f),j=x(d,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),$(j).forEach(f),d.forEach(f),h.forEach(f),l.forEach(f),O=b(c),q=x(c,"P",{id:!0,class:!0});var m=$(q);U=w(m,"Not an official Minecraft product. Not approved by or associated with Mojang."),m.forEach(f),c.forEach(f),i.forEach(f),this.h()},h(){var t,n,r;y(g,"alt","Creative Commons License"),t="border-width",n="0",g.style.setProperty(t,n,r?"important":""),g.src!==(v="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png")&&y(g,"src","https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"),y(a,"rel","license"),y(a,"href","http://creativecommons.org/licenses/by-nc-sa/4.0/"),y(N,"d","M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"),y(R,"points","15 3 21 3 21 9"),y(j,"x1","10"),y(j,"y1","14"),y(j,"x2","21"),y(j,"y2","3"),y(P,"xmlns","http://www.w3.org/2000/svg"),y(P,"width","12"),y(P,"height","12"),y(P,"viewBox","0 0 24 24"),y(P,"fill","none"),y(P,"stroke","currentColor"),y(P,"stroke-width","2"),y(P,"stroke-linecap","round"),y(P,"stroke-linejoin","round"),y(_,"rel","license"),y(_,"href","http://creativecommons.org/licenses/by-nc-sa/4.0/"),y(q,"id","mojang-disclaimer"),y(q,"class","svelte-mswguu"),y(o,"class","svelte-mswguu"),y(e,"class","svelte-mswguu")},m(t,i){u(t,e,i),W(B,e,null),l(e,n),T&&T.m(e,null),l(e,r),l(e,o),l(o,s),l(s,a),l(a,g),l(s,E),l(s,k),l(s,S),l(s,_),l(_,A),l(A,L),l(_,C),l(_,P),l(P,N),l(P,R),l(P,j),l(o,O),l(o,q),l(q,U),I=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),B.$set(n),T&&T.p&&2&e&&c(T,M,t,t[1],e,null,null)},i(t){I||(J(B.$$.fragment,t),J(T,t),I=!0)},o(t){F(B.$$.fragment,t),F(T,t),I=!1},d(t){t&&f(e),X(B),T&&T.d(t)}}}function vt(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class yt extends tt{constructor(t){super(),Z(this,t,vt,gt,a,{segment:0})}}function $t(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=d(r)},l(t){e=x(t,"PRE",{});var o=$(e);n=w(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&f(e)}}}function xt(e){let n,r,o,s,a,i,c,p,v,k=e[1].message+"";document.title=n=e[0];let _=e[2]&&e[1].stack&&$t(e);return{c(){r=m(),o=h("h1"),s=d(e[0]),a=m(),i=h("p"),c=d(k),p=m(),_&&_.c(),v=g(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=b(t),o=x(t,"H1",{class:!0});var n=$(o);s=w(n,e[0]),n.forEach(f),a=b(t),i=x(t,"P",{class:!0});var l=$(i);c=w(l,k),l.forEach(f),p=b(t),_&&_.l(t),v=g(),this.h()},h(){y(o,"class","svelte-8od9u6"),y(i,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,a,e),u(t,i,e),l(i,c),u(t,p,e),_&&_.m(t,e),u(t,v,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(s,t[0]),2&e&&k!==(k=t[1].message+"")&&E(c,k),t[2]&&t[1].stack?_?_.p(t,e):(_=$t(t),_.c(),_.m(v.parentNode,v)):_&&(_.d(1),_=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(a),t&&f(i),t&&f(p),_&&_.d(t),t&&f(v)}}}function wt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class bt extends tt{constructor(t){super(),Z(this,t,wt,xt,a,{status:0,error:1})}}function Et(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var i=new s(a());return{c(){i&&Y(i.$$.fragment),n=g()},l(t){i&&z(i.$$.fragment,t),n=g()},m(t,e){i&&W(i,t,e),u(t,n,e),r=!0},p(t,e){const r=16&e?G(o,[K(t[4].props)]):{};if(s!==(s=t[4].component)){if(i){D();const t=i;F(t.$$.fragment,1,0,()=>{X(t,1)}),H()}s?(Y((i=new s(a())).$$.fragment),J(i.$$.fragment,1),W(i,n.parentNode,n)):i=null}else s&&i.$set(r)},i(t){r||(i&&J(i.$$.fragment,t),r=!0)},o(t){i&&F(i.$$.fragment,t),r=!1},d(t){t&&f(n),i&&X(i,t)}}}function kt(t){let e;const n=new bt({props:{error:t[0],status:t[1]}});return{c(){Y(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,r){W(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){F(n.$$.fragment,t),e=!1},d(t){X(n,t)}}}function St(t){let e,n,r,o;const s=[kt,Et],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),u(t,r,n),o=!0},p(t,o){let c=e;e=i(t),e===c?a[e].p(t,o):(D(),F(a[c],1,1,()=>{a[c]=null}),H(),n=a[e],n||(n=a[e]=s[e](t),n.c()),J(n,1),n.m(r.parentNode,r))},i(t){o||(J(n),o=!0)},o(t){F(n),o=!1},d(t){a[e].d(t),t&&f(r)}}}function _t(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[St]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new yt({props:o});return{c(){Y(s.$$.fragment)},l(t){z(s.$$.fragment,t)},m(t,e){W(s,t,e),n=!0},p(t,[e]){const n=12&e?G(r,[4&e&&{segment:t[2][0]},8&e&&K(t[3].props)]):{};147&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(J(s.$$.fragment,t),n=!0)},o(t){F(s.$$.fragment,t),n=!1},d(t){X(s,t)}}}function At(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,f,h;return u=l,L().$$.after_update.push(u),f=rt,h=r,L().$$.context.set(f,h),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,i,c,r,l]}class Lt extends tt{constructor(t){super(),Z(this,t,At,_t,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Ct=[],Pt=[{js:()=>import("./index.4ef8efa7.js"),css:[]},{js:()=>import("./community.bf9457d5.js"),css:[]},{js:()=>import("./install.ffcc3862.js"),css:[]}],Nt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/community\/?$/,parts:[{i:1}]},{pattern:/^\/install\/?$/,parts:[{i:2}]}];const Rt="undefined"!=typeof __SAPPER__&&__SAPPER__;let jt,Ot,qt,Ut=!1,It=[],Bt="{}";const Mt={page:function(t){const e=nt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:nt(null),session:nt(Rt&&Rt.session)};let Tt,Vt;Mt.session.subscribe(async t=>{if(Tt=t,!Ut)return;Vt=!0;const e=zt(new URL(location.href)),n=Ot={},{redirect:r,props:o,branch:s}=await Zt(e);n===Ot&&await Qt(r,s,o,e.page)});let Dt,Ht=null;let Jt,Ft=1;const Gt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Kt={};function Yt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function zt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Rt.baseUrl))return null;let e=t.pathname.slice(Rt.baseUrl.length);if(""===e&&(e="/"),!Ct.some(t=>t.test(e)))for(let n=0;n<Nt.length;n+=1){const r=Nt[n],o=r.pattern.exec(e);if(o){const n=Yt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:i}}}}function Wt(){return{x:pageXOffset,y:pageYOffset}}async function Xt(t,e,n,r){if(e)Jt=e;else{const t=Wt();Kt[Jt]=t,e=Jt=++Ft,Kt[Jt]=n?t:{x:0,y:0}}Jt=e,jt&&Mt.preloading.set(!0);const o=Ht&&Ht.href===t.href?Ht.promise:Zt(t);Ht=null;const s=Ot={},{redirect:a,props:i,branch:c}=await o;if(s===Ot&&(await Qt(a,c,i,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Kt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Kt[Jt]=t,t&&scrollTo(t.x,t.y)}}async function Qt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=zt(new URL(t,document.baseURI));return n?(Gt[e.replaceState?"replaceState":"pushState"]({id:Jt},"",t),Xt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Mt.page.set(r),Mt.preloading.set(!1),jt)jt.$set(n);else{n.stores={page:{subscribe:Mt.page.subscribe},preloading:{subscribe:Mt.preloading.subscribe},session:Mt.session},n.level0={props:await qt},n.notify=Mt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)ee(t.nextSibling);ee(t),ee(e)}jt=new Lt({target:Dt,props:n,hydrate:!0})}It=e,Bt=JSON.stringify(r.query),Ut=!0,Vt=!1}async function Zt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let i;qt||(qt=Rt.preloaded[0]||ot.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Tt));let c=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=await Promise.all(e.parts.map(async(e,i)=>{const f=r[i];if(function(t,e,n,r){if(r!==Bt)return!0;const o=It[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(i,f,l,o)&&(u=!0),s.segments[c]=r[i+1],!e)return{segment:f};const h=c++;if(!Vt&&!u&&It[i]&&It[i].part===e.i)return It[i];u=!1;const{default:p,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(te);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Pt[e.i]);let m;return m=Ut||!Rt.preloaded[i+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Tt):{}:Rt.preloaded[i+1],s["level"+h]={component:p,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,i=[]}return{redirect:o,props:s,branch:i}}function te(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function ee(t){t.parentNode.removeChild(t)}function ne(t){const e=zt(new URL(t,document.baseURI));if(e)return Ht&&t===Ht.href||function(t,e){Ht={href:t,promise:e}}(t,Zt(e)),Ht.promise}let re;function oe(t){clearTimeout(re),re=setTimeout(()=>{se(t)},20)}function se(t){const e=ie(t.target);e&&"prefetch"===e.rel&&ne(e.href)}function ae(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ie(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=zt(o);if(s){Xt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Gt.pushState({id:Jt},"",o.href)}}function ie(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ce(t){if(Kt[Jt]=Wt(),t.state){const e=zt(new URL(location.href));e?Xt(e,t.state.id):location.href=location.href}else Ft=Ft+1,function(t){Jt=t}(Ft),Gt.replaceState({id:Jt},"",location.href)}const le=()=>{return t=rt,L().$$.context.get(t);var t};var ue;ue={target:document.querySelector("#sapper")},"scrollRestoration"in Gt&&(Gt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Gt.scrollRestoration="auto"}),addEventListener("load",()=>{Gt.scrollRestoration="manual"}),function(t){Dt=t}(ue.target),addEventListener("click",ae),addEventListener("popstate",ce),addEventListener("touchstart",se),addEventListener("mousemove",oe),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Gt.replaceState({id:Ft},"",e);const n=new URL(location.href);if(Rt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:i}=Rt;qt||(qt=s&&s[0]),Qt(null,[],{error:i,status:a,session:o,level0:{props:qt},level1:{props:{status:a,error:i},component:bt},segments:s},{host:e,path:n,query:Yt(r),params:{}})}();const r=zt(n);return r?Xt(r,Ft,!0,t):void 0});export{lt as E,tt as S,m as a,p as b,Y as c,f as d,h as e,b as f,x as g,$ as h,Z as i,w as j,z as k,y as l,u as m,l as n,W as o,t as p,S as q,J as r,a as s,d as t,F as u,X as v};
