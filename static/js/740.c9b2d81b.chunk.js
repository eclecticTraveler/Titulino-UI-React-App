"use strict";(self.webpackChunklrn_ui_react_app=self.webpackChunklrn_ui_react_app||[]).push([[740],{8740:function(e,t,n){n.r(t);var r=n(1413),c=(n(2791),n(8300)),a=n(6106),o=n(914),i=n(7818),s=n(184),l={backgroundImage:"url(".concat("/img/others/img-17.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=(0,i.v9)((function(e){return e.theme.currentTheme}));return(0,s.jsx)("div",{className:"h-100 ".concat("light"===t?"bg-white":""),children:(0,s.jsxs)(a.Z,{justify:"center",className:"align-items-stretch h-100",children:[(0,s.jsx)(o.Z,{xs:20,sm:20,md:24,lg:16,children:(0,s.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:(0,s.jsx)(a.Z,{justify:"center",children:(0,s.jsxs)(o.Z,{xs:24,sm:24,md:20,lg:12,xl:8,children:[(0,s.jsx)("h1",{children:"Sign In"}),(0,s.jsxs)("p",{children:["Don't have an account yet? ",(0,s.jsx)("a",{href:"/auth/register-2",children:"Sign Up"})]}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(c.Z,(0,r.Z)({},e))})]})})})}),(0,s.jsx)(o.Z,{xs:0,sm:0,md:0,lg:8,children:(0,s.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:l,children:[(0,s.jsx)("div",{className:"text-right",children:(0,s.jsx)("img",{src:"/img/logo-white.png",alt:"logo"})}),(0,s.jsx)(a.Z,{justify:"center",children:(0,s.jsxs)(o.Z,{xs:0,sm:0,md:0,lg:20,children:[(0,s.jsx)("img",{className:"img-fluid mb-5",src:"/img/others/img-18.png",alt:""}),(0,s.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),(0,s.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),(0,s.jsx)("div",{className:"d-flex justify-content-end pb-4",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),(0,s.jsx)("span",{className:"mx-2 text-white",children:" | "}),(0,s.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})})]})})]})})}},8300:function(e,t,n){n(2791);var r=n(184);t.Z=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"LoginForm Default Page"}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:" INSERT HERE: "})]})}},914:function(e,t,n){var r=n(9752);t.Z=r.Z},9426:function(e,t,n){var r=(0,n(2791).createContext)({});t.Z=r},9752:function(e,t,n){var r=n(4942),c=n(7462),a=n(1002),o=n(1694),i=n.n(o),s=n(2791),l=n(1929),u=n(9426),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n};var f=["xs","sm","md","lg","xl","xxl"],p=s.forwardRef((function(e,t){var n,o=s.useContext(l.E_),p=o.getPrefixCls,m=o.direction,h=s.useContext(u.Z),x=h.gutter,v=h.wrap,g=h.supportFlexGap,Z=e.prefixCls,j=e.span,y=e.order,b=e.offset,w=e.push,N=e.pull,C=e.className,E=e.children,O=e.flex,P=e.style,k=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),S=p("col",Z),R={};f.forEach((function(t){var n,o={},i=e[t];"number"===typeof i?o.span=i:"object"===(0,a.Z)(i)&&(o=i||{}),delete k[t],R=(0,c.Z)((0,c.Z)({},R),(n={},(0,r.Z)(n,"".concat(S,"-").concat(t,"-").concat(o.span),void 0!==o.span),(0,r.Z)(n,"".concat(S,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),(0,r.Z)(n,"".concat(S,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),(0,r.Z)(n,"".concat(S,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),(0,r.Z)(n,"".concat(S,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),(0,r.Z)(n,"".concat(S,"-rtl"),"rtl"===m),n))}));var _=i()(S,(n={},(0,r.Z)(n,"".concat(S,"-").concat(j),void 0!==j),(0,r.Z)(n,"".concat(S,"-order-").concat(y),y),(0,r.Z)(n,"".concat(S,"-offset-").concat(b),b),(0,r.Z)(n,"".concat(S,"-push-").concat(w),w),(0,r.Z)(n,"".concat(S,"-pull-").concat(N),N),n),C,R),A={};if(x&&x[0]>0){var D=x[0]/2;A.paddingLeft=D,A.paddingRight=D}if(x&&x[1]>0&&!g){var I=x[1]/2;A.paddingTop=I,A.paddingBottom=I}return O&&(A.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(O),!1!==v||A.minWidth||(A.minWidth=0)),s.createElement("div",(0,c.Z)({},k,{style:(0,c.Z)((0,c.Z)({},A),P),className:_,ref:t}),E)}));t.Z=p},284:function(e,t,n){n.d(t,{Z:function(){return g}});var r,c=n(7462),a=n(4942),o=n(1002),i=n(9439),s=n(1694),l=n.n(s),u=n(2791),d=n(1929),f=n(4937),p=function(){if(!(0,f.Z)()||!window.document.documentElement)return!1;if(void 0!==r)return r;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),r=1===e.scrollHeight,document.body.removeChild(e),r},m=n(8295),h=n(9393),x=n(9426),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n};(0,h.b)("top","middle","bottom","stretch"),(0,h.b)("start","end","center","space-around","space-between","space-evenly");var g=u.forwardRef((function(e,t){var n,r=e.prefixCls,s=e.justify,f=e.align,h=e.className,g=e.style,Z=e.children,j=e.gutter,y=void 0===j?0:j,b=e.wrap,w=v(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),N=u.useContext(d.E_),C=N.getPrefixCls,E=N.direction,O=u.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),P=(0,i.Z)(O,2),k=P[0],S=P[1],R=function(){var e=u.useState(!1),t=(0,i.Z)(e,2),n=t[0],r=t[1];return u.useEffect((function(){r(p())}),[]),n}(),_=u.useRef(y);u.useEffect((function(){var e=m.ZP.subscribe((function(e){var t=_.current||0;(!Array.isArray(t)&&"object"===(0,o.Z)(t)||Array.isArray(t)&&("object"===(0,o.Z)(t[0])||"object"===(0,o.Z)(t[1])))&&S(e)}));return function(){return m.ZP.unsubscribe(e)}}),[]);var A=C("row",r),D=function(){var e=[void 0,void 0];return(Array.isArray(y)?y:[y,void 0]).forEach((function(t,n){if("object"===(0,o.Z)(t))for(var r=0;r<m.c4.length;r++){var c=m.c4[r];if(k[c]&&void 0!==t[c]){e[n]=t[c];break}}else e[n]=t})),e}(),I=l()(A,(n={},(0,a.Z)(n,"".concat(A,"-no-wrap"),!1===b),(0,a.Z)(n,"".concat(A,"-").concat(s),s),(0,a.Z)(n,"".concat(A,"-").concat(f),f),(0,a.Z)(n,"".concat(A,"-rtl"),"rtl"===E),n),h),T={},G=null!=D[0]&&D[0]>0?D[0]/-2:void 0,L=null!=D[1]&&D[1]>0?D[1]/-2:void 0;if(G&&(T.marginLeft=G,T.marginRight=G),R){var F=(0,i.Z)(D,2);T.rowGap=F[1]}else L&&(T.marginTop=L,T.marginBottom=L);var W=(0,i.Z)(D,2),B=W[0],H=W[1],q=u.useMemo((function(){return{gutter:[B,H],wrap:b,supportFlexGap:R}}),[B,H,b,R]);return u.createElement(x.Z.Provider,{value:q},u.createElement("div",(0,c.Z)({},w,{className:I,style:(0,c.Z)((0,c.Z)({},T),g),ref:t}),Z))}))},6106:function(e,t,n){var r=n(284);t.Z=r.Z}}]);
//# sourceMappingURL=740.c9b2d81b.chunk.js.map