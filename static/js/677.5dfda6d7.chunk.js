"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[677],{672:function(t,n,e){e.d(n,{Z:function(){return m}});var r,a,c,u=e(689),i=e(87),o=e(168),s=e(686),p=s.Z.ul(r||(r=(0,o.Z)(["\n\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-gap: 16px;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n   margin-right: auto;\n\n"]))),f=s.Z.li(a||(a=(0,o.Z)(["\n  \n color:inherit;\n\n transition: transform 0.2s ease;\n\n box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n \n :hover {\n\n    transform: scale(1.05);\n    font-weight: 500;\n\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n }\n\n"]))),l=s.Z.p(c||(c=(0,o.Z)(["\n\n max-width:200px;\n text-align:center;\n\n\n\n"]))),h=e(711),d=e(184),m=function(t){var n=t.movies,e=(0,u.TH)(),r=Array.from(new Set(n.map((function(t){return t.id})))).map((function(t){return n.find((function(n){return n.id===t}))}));return(0,d.jsx)(p,{children:r.map((function(t){var n=t.id,r=t.title,a=t.name,c=t.poster_path;return(0,d.jsx)(f,{children:(0,d.jsxs)(i.rU,{to:"/movies/".concat(n),state:{from:e},children:[c?(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(c),alt:r||a,width:"200"}):(0,d.jsx)(h.Z,{title:"".concat(r," poster")}),(0,d.jsx)(l,{children:r||a})]})},n)}))})}},711:function(t,n,e){e.d(n,{Z:function(){return i}});var r,a=e(168),c=e(686).Z.div(r||(r=(0,a.Z)(["\n \nwidth:200px;\nheight: 300px;\nbackground-color: #fff;\nfont-style: italic;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\ncolor: grey;\n"]))),u=e(184),i=function(t){var n=t.title;return(0,u.jsxs)(c,{children:[n," will be added soon..."]})}},677:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(861),a=e(439),c=e(687),u=e.n(c),i=e(791),o=e(919),s=e(610),p=e(672),f=e(184),l=function(t){var n=t.setSearchParams,e=(0,i.useState)(""),c=(0,a.Z)(e,2),s=c[0],p=c[1],l=function(){var t=(0,r.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),""!==s.trim()){t.next=3;break}return t.abrupt("return",o.Notify.failure("query can't be empty"));case 3:n({query:s});case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,f.jsxs)("form",{onSubmit:l,children:[(0,f.jsx)("input",{value:s,autoFocus:!0,onChange:function(t){return function(t){p(t.target.value)}(t)},name:"text"}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})},h=e(87),d=function(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],d=(0,h.lr)(),m=(0,a.Z)(d,2),x=m[0],v=m[1];return(0,i.useEffect)((function(){var t=x.get("query");if(t){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Ph)(t);case 3:0===(e=n.sent).length&&o.Notify.failure("We've found nothig by this query"),c(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}}),[x]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{setSearchParams:v}),e&&e.length>0&&(0,f.jsx)(p.Z,{movies:e})]})}},610:function(t,n,e){e.d(n,{Ku:function(){return x},Pg:function(){return d},Ph:function(){return l},fI:function(){return g},hY:function(){return p}});var r=e(861),a=e(687),c=e.n(a),u=e(243),i=e(919),o=e.n(i);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="ffd1ae05d42dfac2dc67614233fe514e";function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("trending/movie/day?api_key=".concat(s,"&page=").concat(n));case 3:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",o().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(n));case 3:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",o().Notify.failure("".concat(t.t0.message,", plese contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(n,"?api_key=").concat(s));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",o().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function x(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(s));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",o().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function g(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",o().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=677.5dfda6d7.chunk.js.map