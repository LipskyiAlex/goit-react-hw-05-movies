(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[588],{760:function(t,n,e){"use strict";e(184);n.Z=function(){}},672:function(t,n,e){"use strict";e.d(n,{Z:function(){return v}});var r,a,i,c=e(689),u=e(87),o=e(168),s=e(686),f=s.Z.ul(r||(r=(0,o.Z)(["\n\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-gap: 16px;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n   margin-right: auto;\n\n"]))),p=s.Z.li(a||(a=(0,o.Z)(["\n  \n color:inherit;\n\n transition: transform 0.2s ease;\n\n box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n \n :hover {\n\n    transform: scale(1.05);\n    font-weight: 500;\n\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n }\n\n"]))),l=s.Z.p(i||(i=(0,o.Z)(["\n\n max-width:200px;\n text-align:center;\n\n\n\n"]))),d=e(711),m=e(184),v=function(t){var n=t.movies,e=(0,c.TH)(),r=Array.from(new Set(n.map((function(t){return t.id})))).map((function(t){return n.find((function(n){return n.id===t}))}));return(0,m.jsx)(f,{children:r.map((function(t){var n=t.id,r=t.title,a=t.name,i=t.poster_path;return(0,m.jsx)(p,{children:(0,m.jsxs)(u.rU,{to:"/movies/".concat(n),state:{from:e},children:[i?(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(i),alt:r||a,width:"200"}):(0,m.jsx)(d.Z,{title:"".concat(r," poster")}),(0,m.jsx)(l,{children:r||a})]})},n)}))})}},711:function(t,n,e){"use strict";e.d(n,{Z:function(){return u}});var r,a=e(168),i=e(686).Z.div(r||(r=(0,a.Z)(["\n \nwidth:200px;\nheight: 300px;\nbackground-color: #fff;\nfont-style: italic;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\ncolor: grey;\n"]))),c=e(184),u=function(t){var n=t.title;return(0,c.jsxs)(i,{children:[n," will be added soon..."]})}},588:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return Z}});var r,a=e(433),i=e(861),c=e(439),u=e(687),o=e.n(u),s=e(791),f=e(610),p=e(672),l=e(168),d=e(686).Z.h1(r||(r=(0,l.Z)(["\n   margin-bottom: 5px;\n   text-align:center;\n   font-size:40px;\n   margin-bottom: 15px;\n\n"]))),m=e(184),v=function(t){var n=t.children;return(0,m.jsx)(d,{children:n})},h=e(881),x=e.n(h),g=e(919),y=e(454),b=e(760),Z=function(){var t=(0,s.useState)([]),n=(0,c.Z)(t,2),e=n[0],r=n[1],u=(0,s.useState)(1),l=(0,c.Z)(u,2),d=l[0],h=l[1],Z=(0,s.useState)(!0),w=(0,c.Z)(Z,2),j=w[0],k=w[1],N=(0,s.useState)(!1),T=(0,c.Z)(N,2),_=T[0],E=T[1],S=(0,s.useState)(!1),O=(0,c.Z)(S,2),$=O[0],H=O[1];return(0,s.useEffect)((function(){var t=x()((function(t){j||t.target.documentElement.scrollHeight-(t.target.documentElement.scrollTop+window.innerHeight)<200&&h((function(t){return t+1}))}),1e3);return document.addEventListener("scroll",t),function(){document.removeEventListener("scroll",t)}}),[j]),(0,s.useEffect)((function(){var t=function(){var t=(0,i.Z)(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,E(!0),k(!0),t.next=5,(0,f.hY)(n);case 5:e=t.sent,r((function(t){return[].concat((0,a.Z)(t),(0,a.Z)(e))})),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),H(!0),g.Notify.failure(t.t0.message);case 13:return t.prev=13,k(!1),E(!1),t.finish(13);case 17:case"end":return t.stop()}}),t,null,[[0,9,13,17]])})));return function(n){return t.apply(this,arguments)}}();t(d)}),[d]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{children:"Trending today"}),_&&(0,m.jsx)(y.Z,{}),$&&(0,m.jsx)(b.Z,{}),e&&e.length>0&&(0,m.jsx)(p.Z,{movies:e})]})}},610:function(t,n,e){"use strict";e.d(n,{Ku:function(){return h},Pg:function(){return m},Ph:function(){return l},fI:function(){return g},hY:function(){return f}});var r=e(861),a=e(687),i=e.n(a),c=e(243),u=e(919),o=e.n(u);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="ffd1ae05d42dfac2dc67614233fe514e";function f(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("trending/movie/day?api_key=".concat(s,"&page=").concat(n));case 3:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",o().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(n));case 3:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",o().Notify.failure("".concat(t.t0.message,", plese contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(n,"?api_key=").concat(s));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",o().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function h(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(s));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",o().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function g(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",o().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}},881:function(t,n,e){var r="Expected a function",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,o=parseInt,s="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,f="object"==typeof self&&self&&self.Object===Object&&self,p=s||f||Function("return this")(),l=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return p.Date.now()};function h(t,n,e){var a,i,c,u,o,s,f=0,p=!1,l=!1,h=!0;if("function"!=typeof t)throw new TypeError(r);function y(n){var e=a,r=i;return a=i=void 0,f=n,u=t.apply(r,e)}function b(t){return f=t,o=setTimeout(w,n),p?y(t):u}function Z(t){var e=t-s;return void 0===s||e>=n||e<0||l&&t-f>=c}function w(){var t=v();if(Z(t))return j(t);o=setTimeout(w,function(t){var e=n-(t-s);return l?m(e,c-(t-f)):e}(t))}function j(t){return o=void 0,h&&a?y(t):(a=i=void 0,u)}function k(){var t=v(),e=Z(t);if(a=arguments,i=this,s=t,e){if(void 0===o)return b(s);if(l)return o=setTimeout(w,n),y(s)}return void 0===o&&(o=setTimeout(w,n)),u}return n=g(n)||0,x(e)&&(p=!!e.leading,c=(l="maxWait"in e)?d(g(e.maxWait)||0,n):c,h="trailing"in e?!!e.trailing:h),k.cancel=function(){void 0!==o&&clearTimeout(o),f=0,a=s=i=o=void 0},k.flush=function(){return void 0===o?u:j(v())},k}function x(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(x(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=x(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var e=c.test(t);return e||u.test(t)?o(t.slice(2),e?2:8):i.test(t)?NaN:+t}t.exports=function(t,n,e){var a=!0,i=!0;if("function"!=typeof t)throw new TypeError(r);return x(e)&&(a="leading"in e?!!e.leading:a,i="trailing"in e?!!e.trailing:i),h(t,n,{leading:a,maxWait:n,trailing:i})}}}]);
//# sourceMappingURL=588.afcf9500.chunk.js.map