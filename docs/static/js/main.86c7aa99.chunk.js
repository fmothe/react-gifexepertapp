(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(8),a=n.n(r),i=n(2),s=n(10),u=n(0),j=function(t){var e=t.setCategories,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],j=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),0==!a.trim().length&&(e((function(t){return[a].concat(Object(s.a)(t))})),j(""))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){j(t.target.value)}})})},o=n(11),d=(n(6),function(t){return Object(u.jsxs)("div",{className:"card  animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:t.url,alt:t.title}),Object(u.jsx)("p",{children:t.title})]})}),b=n(7),l=n.n(b),f=n(9),p=function(){var t=Object(f.a)(l.a.mark((function t(e){var n,c,r,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=5&api_key=y78nX9uJsm7XKrbg0gqyjZwFZHTIubJM"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,a=r.data,i=a.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){p(t).then((function(t){a({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,a=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),a&&Object(u.jsx)("p",{children:"loading"}),Object(u.jsx)("div",{className:"card-grid",children:Object(u.jsx)("ol",{children:r.map((function(t){return Object(u.jsx)(d,Object(o.a)({},t),t.id)}))})})]})},h=function(){var t=Object(c.useState)(["The Office"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(j,{setCategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(O,{category:t},t)}))})]})};a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))},6:function(t,e,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.86c7aa99.chunk.js.map