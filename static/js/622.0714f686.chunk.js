"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[622],{622:function(t,e,n){n.r(e),n.d(e,{default:function(){return L}});var r,a,c,i,o,s,u,p,l=n(861),f=n(439),d=n(687),h=n.n(d),v=n(791),m=n(610),x=n(168),g=n(686),w=g.Z.div(r||(r=(0,x.Z)(["\ndisplay: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; \n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  background-color: #fff;\n  margin-bottom: 20px;\n  width: 300px;\n  margin: 0 auto; \n"]))),Z=g.Z.img(a||(a=(0,x.Z)(["\n\nwidth: 100%;\n  max-width: 300px;\n  height: auto;\n  border-radius: 10px;\n"]))),b=g.Z.h1(c||(c=(0,x.Z)(["\n\nfont-size: 1.5rem;\nmargin: 10px 0;\n\n"]))),y=g.Z.p(i||(i=(0,x.Z)(["\nmargin: 10px 0;\n\n"]))),j=g.Z.p(o||(o=(0,x.Z)(["\n\nfont-weight: bold;\n  color: #3498db; \n  margin-top: 10px;\n\n"]))),k=n(184),_=function(t){var e=t.posterPath,n=t.title,r=t.vote_average,a=t.overview,c=t.genreNames;return(0,k.jsxs)(w,{children:[(0,k.jsx)(Z,{src:"https://image.tmdb.org/t/p/w300".concat(e),alt:n,width:"300"}),(0,k.jsx)(b,{children:n}),(0,k.jsx)("p",{children:r}),(0,k.jsx)("h2",{children:"Overview"}),(0,k.jsx)(y,{children:a}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)(j,{children:c})]})},N=n(689),P=n(87),O=g.Z.h3(s||(s=(0,x.Z)(["\n  \ntext-align:center;\npadding: 10px;\nmargin-bottom: 15px;\nfont-size:24px;\n\n"]))),z=g.Z.ul(u||(u=(0,x.Z)(["\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; \n   margin-bottom:15px;\n"]))),C=g.Z.li(p||(p=(0,x.Z)(["\n\nfont-size:20px;\n\n"]))),L=function(){var t,e,n=(0,N.TH)(),r=(0,N.UO)().movieId,a=(0,v.useState)([]),c=(0,f.Z)(a,2),i=c[0],o=c[1],s=null!==(t=null===(e=n.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/";(0,v.useEffect)((function(){var t=function(){var t=(0,l.Z)(h().mark((function t(){var e,n,a,c,i,s,u;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,m.Pg)(r);case 3:e=t.sent,n=e.title,a=void 0===n?"No title":n,c=e.vote_average,i=e.overview,s=e.genres,u=e.poster_path,o({title:a,vote_average:c,overview:i,genres:s,poster_path:u}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.messsage);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]);var u=i.title,p=i.vote_average,d=i.overview,x=i.genres,g=i.poster_path,w=x?x.map((function(t){return t.name})).join(" "):"",Z=g||"";return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(P.rU,{to:s,children:"Back to products"}),(0,k.jsx)(_,{posterPath:Z,title:u,vote_average:p,overview:d,genreNames:w}),(0,k.jsx)(O,{children:"Additional informations"}),(0,k.jsxs)(z,{children:[(0,k.jsx)(C,{children:(0,k.jsx)(P.OL,{to:"/movies/".concat(r,"/cast"),id:r,children:"Cast"})}),(0,k.jsx)(C,{children:(0,k.jsx)(P.OL,{to:"/movies/".concat(r,"/reviews"),id:r,children:"Reviews"})})]}),(0,k.jsx)(N.j3,{})]})}},610:function(t,e,n){n.d(e,{Ku:function(){return m},Pg:function(){return h},Ph:function(){return f},fI:function(){return g},hY:function(){return p}});var r=n(861),a=n(687),c=n.n(a),i=n(243),o=n(919),s=n.n(o);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="ffd1ae05d42dfac2dc67614233fe514e";function p(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("trending/all/day?api_key=".concat(u,"&page=").concat(e));case 3:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",s().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("search/movie?api_key=".concat(u,"&query=").concat(e));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",s().Notify.failure("".concat(t.t0.message,", plese contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("movie/".concat(e,"?api_key=").concat(u));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",s().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(u));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",s().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function g(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",s().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=622.0714f686.chunk.js.map