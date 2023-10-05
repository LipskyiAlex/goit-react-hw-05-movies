"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[622],{3622:function(t,e,n){n.r(e),n.d(e,{default:function(){return I}});var r,a,c,i,o,s,u,p,l,d,f=n(5861),h=n(9439),v=n(4687),x=n.n(v),g=n(2791),m=n(3610),Z=n(168),w=n(5706),b=n(6520),y=w.Z.div(r||(r=(0,Z.Z)(["\ndisplay: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  background-color: ","; \n  color: ","; \n  width: 300px;\n  margin: 0 auto;\n  text-align: center;\n \n"])),b.Z.backgroundDark,b.Z.textLight),k=w.Z.img(a||(a=(0,Z.Z)(["\n\nwidth: 100%;\n  max-width: 300px;\n  height: auto;\n  border-radius: 10px; \n"]))),j=w.Z.h1(c||(c=(0,Z.Z)(["\n\nfont-size: 24px;\n  margin: 10px 0;\ncolor: ",";\n\n"])),b.Z.textLight),_=w.Z.p(i||(i=(0,Z.Z)(["\nmargin: 10px 0;\ncolor: ",";\n"])),b.Z.textLight),L=w.Z.p(o||(o=(0,Z.Z)(["\n\nfont-weight: bold;\n  color: ","; \n  margin-top: 10px;\n\n"])),b.Z.textLight),N=w.Z.h2(s||(s=(0,Z.Z)(["\n\ncolor: ","; \n"])),b.Z.accentRed),P=w.Z.h2(u||(u=(0,Z.Z)(["\n\ncolor: ","; \n"])),b.Z.accentRed),R=n(184),O=function(t){var e=t.posterPath,n=t.title,r=t.vote_average,a=t.overview,c=t.genreNames;return(0,R.jsxs)(y,{children:[(0,R.jsx)(k,{src:"https://image.tmdb.org/t/p/w300".concat(e),alt:n,width:"300"}),(0,R.jsx)(j,{children:n}),(0,R.jsx)("p",{children:r}),(0,R.jsx)(N,{children:"Overview"}),(0,R.jsx)(_,{children:a}),(0,R.jsx)(P,{children:"Genres"}),(0,R.jsx)(L,{children:c})]})},z=n(7689),C=n(1087),D=w.Z.h3(p||(p=(0,Z.Z)(["\n  \ntext-align:center;\npadding: 10px;\nmargin-bottom: 15px;\nfont-size:24px;\n\n"]))),U=w.Z.ul(l||(l=(0,Z.Z)(["\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; \n   margin-bottom:15px;\n"]))),F=w.Z.li(d||(d=(0,Z.Z)(["\n\nfont-size:20px;\n\n"]))),I=function(){var t,e,n=(0,z.TH)(),r=(0,z.UO)().movieId,a=(0,g.useState)([]),c=(0,h.Z)(a,2),i=c[0],o=c[1],s=null!==(t=null===(e=n.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/";(0,g.useEffect)((function(){var t=function(){var t=(0,f.Z)(x().mark((function t(){var e,n,a,c,i,s,u;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,m.Pg)(r);case 3:e=t.sent,n=e.title,a=void 0===n?"No title":n,c=e.vote_average,i=e.overview,s=e.genres,u=e.poster_path,o({title:a,vote_average:c,overview:i,genres:s,poster_path:u}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.messsage);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]);var u=i.title,p=i.vote_average,l=i.overview,d=i.genres,v=i.poster_path,Z=d?d.map((function(t){return t.name})).join(" "):"",w=v||"";return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(C.rU,{to:s,children:"Back to products"}),(0,R.jsx)(O,{posterPath:w,title:u,vote_average:p,overview:l,genreNames:Z}),(0,R.jsx)(D,{children:"Additional informations"}),(0,R.jsxs)(U,{children:[(0,R.jsx)(F,{children:(0,R.jsx)(C.OL,{to:"cast",id:r,children:"Cast"})}),(0,R.jsx)(F,{children:(0,R.jsx)(C.OL,{to:"reviews",id:r,children:"Reviews"})})]}),(0,R.jsx)(z.j3,{})]})}},3610:function(t,e,n){n.d(e,{Ku:function(){return x},Pg:function(){return h},Ph:function(){return d},fI:function(){return m},hY:function(){return p}});var r=n(5861),a=n(4687),c=n.n(a),i=n(1243),o=n(1686),s=n.n(o);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="ffd1ae05d42dfac2dc67614233fe514e";function p(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("trending/all/day?api_key=".concat(u,"&page=").concat(e));case 3:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",s().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function d(t,e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e,n){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("search/movie?api_key=".concat(u,"&query=").concat(e,"&page=").concat(n));case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",s().Notify.failure("".concat(t.t0.message,", plese contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("movie/".concat(e,"?api_key=").concat(u));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",s().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function x(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(u));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",s().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function m(t){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",s().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}},6520:function(t,e){e.Z={backgroundDark:"#141414",textLight:"#ffffff",accentRed:"#e50914",headerFooterDark:"#0d0d0d"}}}]);
//# sourceMappingURL=622.6d2796f6.chunk.js.map