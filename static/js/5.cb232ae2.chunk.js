(this["webpackJsonpstop-time"]=this["webpackJsonpstop-time"]||[]).push([[5],{228:function(e,n,r){"use strict";r.d(n,"a",(function(){return s}));var t=r(58);function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],t=!0,s=!1,o=void 0;try{for(var c,a=e[Symbol.iterator]();!(t=(c=a.next()).done)&&(r.push(c.value),!n||r.length!==n);t=!0);}catch(i){s=!0,o=i}finally{try{t||null==a.return||a.return()}finally{if(s)throw o}}return r}}(e,n)||Object(t.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},230:function(e,n,r){"use strict";r(0);var t=r(56),s=(r(231),r(2));n.a=function(){return Object(s.jsx)("div",{className:"preloader",children:Object(s.jsx)("img",{alt:"",src:t.a})})}},231:function(e,n,r){},239:function(e,n,r){},240:function(e,n,r){"use strict";r.d(n,"a",(function(){return o}));r(0);var t=r.p+"static/media/user2.fb6002b4.png",s=r(2),o=function(e){return Object(s.jsx)("img",{alt:"",src:null!==e?e:t})}},298:function(e,n,r){},303:function(e,n,r){"use strict";r.r(n);var t=r(32),s=r(33),o=r(35),c=r(34),a=r(0),i=r.n(a),u=(r(239),r(14)),l=r(240),f=r(2),p=function(e){var n=e.user,r=e.followingInPropgress,t=e.unfollow,s=e.follow,o=e.userBackground;return Object(f.jsxs)("div",{className:"user",children:[Object(f.jsx)("div",{className:"user__background",children:Object(f.jsx)("img",{alt:"",src:o.img})}),Object(f.jsxs)("div",{className:"user__card",children:[Object(f.jsx)("div",{className:"user__ava",children:Object(f.jsx)(u.b,{to:"/profile/"+n.id,children:Object(l.a)(n.photos.small)})}),Object(f.jsxs)("div",{className:"user__items",children:[Object(f.jsxs)("div",{className:"user__item",children:[Object(f.jsx)("h3",{className:"user__name",children:n.name}),Object(f.jsx)("div",{className:"user__text",children:null!==n.status?n.status:"no status"})]}),Object(f.jsx)("div",{className:"user__btns",children:n.followed?Object(f.jsx)("button",{className:"user__btn user__btn_red",disabled:r.some((function(e){return e===n.id})),onClick:function(){t(n.id)},children:"Unfollow"}):Object(f.jsx)("button",{className:"user__btn",disabled:r.some((function(e){return e===n.id})),onClick:function(){s(n.id)},children:"Follow"})})]})]})]})},g=r(228),d=(r(298),r(27)),h=r.n(d),j=function(e){for(var n=e.totalItemsCount,r=e.pageSize,t=e.currentPage,s=e.onPageChanched,o=e.portionSize,c=void 0===o?8:o,i=Math.ceil(n/r),u=[],l=1;l<=i;l++)u.push(l);var p=Math.ceil(i/c),d=Object(a.useState)(1),j=Object(g.a)(d,2),b=j[0],m=j[1],w=(b-1)*c+1,v=b*c;return Object(f.jsxs)("ul",{className:"pagination",children:[b>1&&Object(f.jsx)("span",{onClick:function(){m(b-1)},className:"pagination__arrow pagination__arrow_1",children:Object(f.jsx)("svg",{className:"arrowIcon",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:Object(f.jsxs)("g",{fill:"none",stroke:"#4C43AA",strokeWidth:"1.5",strokeLinejoin:"round",strokeMiterlimit:"10",children:[Object(f.jsx)("circle",{className:"arrowIconCircle",cx:"16",cy:"16",r:"15.12"}),Object(f.jsx)("path",{className:"arrowIcon--arrow",d:"M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"})]})})}),u.filter((function(e){return e>=w&&e<=v})).map((function(e){return Object(f.jsxs)("li",{className:h()({pagination__item_active:t===e},"pagination__item"),onClick:function(n){s(e)},children:[" ",e]},e)})),p>b&&Object(f.jsx)("span",{onClick:function(){m(b+1)},className:"pagination__arrow",children:Object(f.jsx)("svg",{className:"arrowIcon",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:Object(f.jsxs)("g",{fill:"none",stroke:"#4C43AA",strokeWidth:"1.5",strokeLinejoin:"round",strokeMiterlimit:"10",children:[Object(f.jsx)("circle",{className:"arrowIconCircle",cx:"16",cy:"16",r:"15.12"}),Object(f.jsx)("path",{className:"arrowIcon--arrow",d:"M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"})]})})})]})},b=function(e){var n=e.usersPage,r=e.followingInPropgress,t=e.unfollow,s=e.follow,o=e.totalItemsCount,c=e.pageSize,a=e.currentPage,i=e.onPageChanched,u=e.userBackground;return Object(f.jsx)("div",{className:"users",children:Object(f.jsxs)("div",{className:"users__body",children:[n.map((function(e,n){return Object(f.jsx)(p,{user:e,followingInPropgress:r,unfollow:t,follow:s,userBackground:u[n%u.length]},e.id)})),Object(f.jsx)(j,{totalItemsCount:o,pageSize:c,currentPage:a,onPageChanched:i})]})})},m=r(16),w=r(20),v=r(230),O=r(78);function x(e,n){return e===n}function _(e,n,r){if(null===n||null===r||n.length!==r.length)return!1;for(var t=n.length,s=0;s<t;s++)if(!e(n[s],r[s]))return!1;return!0}function P(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var r=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+r+"]")}return n}var y=function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];return function(){for(var n=arguments.length,t=Array(n),s=0;s<n;s++)t[s]=arguments[s];var o=0,c=t.pop(),a=P(t),i=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(r)),u=e((function(){for(var e=[],n=a.length,r=0;r<n;r++)e.push(a[r].apply(null,arguments));return i.apply(null,e)}));return u.resultFunc=c,u.dependencies=a,u.recomputations=function(){return o},u.resetRecomputations=function(){return o=0},u}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x,r=null,t=null;return function(){return _(n,r,arguments)||(t=e.apply(null,arguments)),r=arguments,t}}));var k=y((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),C=function(e){return e.usersPage.pageSize},N=function(e){return e.usersPage.totalItemsCount},I=function(e){return e.usersPage.currentPage},S=function(e){return e.usersPage.isFetching},A=function(e){return e.usersPage.followingInPropgress},z=function(e){Object(o.a)(r,e);var n=Object(c.a)(r);function r(){var e;Object(t.a)(this,r);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(e=n.call.apply(n,[this].concat(o))).onPageChanched=function(n){var r=e.props.pageSize;e.props.setCurrentPage(n,r),e.props.getUsers(n,r)},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,r=e.pageSize;this.props.getUsers(n,r)}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"block block_m",children:[this.props.isFetching?Object(f.jsx)(v.a,{}):null,Object(f.jsx)(b,{usersPage:this.props.usersPage,totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanched:this.onPageChanched,follow:this.props.follow,unfollow:this.props.unfollow,followingInPropgress:this.props.followingInPropgress,userBackground:this.props.userBackground})]})}}]),r}(i.a.Component);n.default=Object(m.d)(Object(w.b)((function(e){return{usersPage:k(e),pageSize:C(e),totalItemsCount:N(e),currentPage:I(e),isFetching:S(e),followingInPropgress:A(e),userBackground:e.usersPage.userBackground}}),{followSuccess:O.c,unfollowSuccess:O.h,setCurrentPage:O.e,toogleFolowingProgress:O.f,getUsers:O.d,follow:O.b,unfollow:O.g}))(z)}}]);
//# sourceMappingURL=5.cb232ae2.chunk.js.map