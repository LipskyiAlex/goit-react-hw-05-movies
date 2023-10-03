"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[588],{672:function(t,n,e){e.d(n,{O:function(){return d}});var r,a,c,u=e(689),o=e(87),i=e(168),s=e(686),p=s.Z.ul(r||(r=(0,i.Z)(["\n\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-gap: 16px;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n   margin-right: auto;\n\n"]))),l=s.Z.li(a||(a=(0,i.Z)(["\n  \n color:inherit;\n\n transition: transform 0.2s ease;\n\n box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n \n :hover {\n\n    transform: scale(1.05);\n    font-weight: 500;\n\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n }\n\n"]))),f=s.Z.p(c||(c=(0,i.Z)(["\n\n max-width:200px;\n text-align:center;\n\n\n\n"]))),h=e(184),d=function(t){var n=t.movies,e=(0,u.TH)();return(0,h.jsx)(p,{children:n.map((function(t){var n=t.id,r=t.title,a=t.name,c=t.poster_path;return(0,h.jsx)(l,{children:(0,h.jsxs)(o.rU,{to:"/movies/".concat(n),state:{from:e},children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(c),alt:r||a,width:"200"}),(0,h.jsx)(f,{children:r||a})]})},n)}))})}},588:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var r,a=e(861),c=e(439),u=e(687),o=e.n(u),i=e(791),s=e(610),p=e(672),l=e(168),f=e(686).Z.h1(r||(r=(0,l.Z)(["\n   \n   text-align:center;\n   font-size:24px;\n   margin-bottom: 15px;\n\n"]))),h=e(184),d=function(t){var n=t.children;return(0,h.jsx)(f,{children:n})},m=function(){var t=(0,i.useState)([]),n=(0,c.Z)(t,2),e=n[0],r=n[1];(0,i.useEffect)((function(){return document.addEventListener("scroll",u),function(){document.removeEventListener("scroll",u)}}),[]),(0,i.useEffect)((function(){var t=function(){var t=(0,a.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.hY)(1);case 3:n=t.sent,r(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]);var u=function(t){t.target.documentElement.scrollHeight-(t.target.documentElement.scrollTop+window.innerHeight)<100&&console.log("fethc")};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{children:"Trending today"}),(0,h.jsx)(p.O,{movies:e})]})}},610:function(t,n,e){e.d(n,{Ku:function(){return x},Pg:function(){return d},Ph:function(){return f},fI:function(){return g},hY:function(){return p}});var r=e(861),a=e(687),c=e.n(a),u=e(243),o=e(919),i=e.n(o);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="ffd1ae05d42dfac2dc67614233fe514e";function p(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("trending/all/day?api_key=".concat(s,"&page=").concat(n));case 3:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",i().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(n));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",i().Notify.failure("".concat(t.t0.message,", plese contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(n,"?api_key=").concat(s));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",i().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function x(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(s));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",i().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function g(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",i().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=588.78d568c4.chunk.js.map