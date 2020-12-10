(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{57:function(n,e,t){},95:function(n,e,t){"use strict";t.r(e);var r=t(7),c=t(0),i=t.n(c),o=t(45),a=t.n(o),s=(t(57),t(51)),j=t(22),b=t(14),d=t(23),u=t(9),l=t(10);function h(){var n=Object(u.a)(["\n  @media (max-width: 640px) {\n    display: none;\n  }\n  "]);return h=function(){return n},n}var O=Object(l.a)(d.SideNav)(h()),x=[{name:"Me",path:"/"},{name:"Projects",path:"/projects"},{name:"Work",path:"/work"},{name:"Education",path:"/education"}],p=function(){var n=Object(b.f)();return Object(r.jsx)(O,{isFixedNav:!0,expanded:!0,isChildOfHeader:!1,"aria-label":"Side navigation",children:Object(r.jsx)(d.SideNavItems,{children:x.map((function(e){return Object(r.jsx)(d.SideNavLink,{isActive:"/"===n.pathname&&"/"===e.path||n.pathname===e.path,element:j.b,to:e.path,children:e.name},e.name)}))})})},f=t(2);function m(){var n=Object(u.a)(["\n  display: flex;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  font-weight: bold;\n  align-items: center;\n  margin-top: 1rem;\n  border: 2px solid #2ecc40;\n  background-color: rgba(46, 204, 64, 0.3);\n  transition: background-color 250ms ease;\n\n  &:hover {\n    background-color: #2ecc40;\n  }\n\n  svg {\n    fill: white;\n    margin-left: 8px;\n  }\n"]);return m=function(){return n},n}function v(){var n=Object(u.a)(["\n  width: 200px;\n  margin-right: 1rem;\n  border-radius: 2px;\n"]);return v=function(){return n},n}function g(){var n=Object(u.a)(["\n  display: flex;\n\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n"]);return g=function(){return n},n}function y(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media (max-width: 640px) {\n    display: ",";\n    flex-direction: column;\n  }\n"]);return y=function(){return n},n}var w=l.a.div(y(),(function(n){return n.isHome?"flex":"none"})),k=l.a.div(g()),I=l.a.img(v()),P=l.a.a(m()),S=function(n){var e=n.user,t=Object(b.f)();return Object(r.jsxs)(w,{isHome:"/"===t.pathname,children:[Object(r.jsxs)(k,{children:[Object(r.jsx)(I,{src:e.basics.picture}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:e.basics.name}),Object(r.jsx)("h4",{children:Object(r.jsxs)("a",{href:"https://gitconnected.com/".concat(e.basics.username),target:"_blank",rel:"noreferrer noopener",children:["@",e.basics.username]})}),Object(r.jsx)("p",{children:e.basics.label}),Object(r.jsxs)("p",{children:["Coding in ",e.basics.region]}),Object(r.jsxs)("p",{children:[e.basics.yearsOfExperience," years of experience as a developer"]}),Object(r.jsx)("p",{children:e.basics.headline}),Object(r.jsxs)("p",{children:["Blog:"," ",Object(r.jsx)("a",{href:e.basics.blog,target:"_blank",rel:"noreferrer noopener",children:e.basics.blog})]})]})]}),Object(r.jsx)("div",{children:Object(r.jsxs)(P,{href:"https://gitconnected.com/".concat(e.basics.username,"/resume"),target:"_blank",rel:"noopener noreferrer",children:[Object(r.jsx)("span",{children:"View R\xe9sum\xe9"}),Object(r.jsx)(f.Eb,{})]})})]})},E=t(6),C=t(3),F=t(5),D=t(4),M=t(50),N=t.n(M);function _(){var n=Object(u.a)(["\n  width: 100%;\n  justify-content: center;\n"]);return _=function(){return n},n}function B(){var n=Object(u.a)(["\n  width: 25%;\n"]);return B=function(){return n},n}function H(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  z-index: 1;\n"]);return H=function(){return n},n}function L(){var n=Object(u.a)(["\n  height: 48px;\n"]);return L=function(){return n},n}function T(){var n=Object(u.a)(["\n  display: none;\n\n  @media (max-width: 640px) {\n    display: block;\n  }\n"]);return T=function(){return n},n}var W=l.a.div(T()),z=l.a.div(L()),A=l.a.div(H()),J=Object(l.a)(j.b)(B()),R=Object(l.a)(N.a)(_()),V=function(){return Object(r.jsxs)(W,{children:[Object(r.jsx)(z,{}),Object(r.jsxs)(A,{children:[Object(r.jsx)(J,{to:"/",children:Object(r.jsx)(R,{hasIconOnly:!0,renderIcon:E.bd,iconDescription:"Me",tooltipPosition:"bottom"})}),Object(r.jsx)(J,{to:"/projects",children:Object(r.jsx)(R,{hasIconOnly:!0,renderIcon:C.te,iconDescription:"Projects",tooltipPosition:"bottom"})}),Object(r.jsx)(J,{to:"/work",children:Object(r.jsx)(R,{hasIconOnly:!0,renderIcon:F.fe,iconDescription:"Work",tooltipPosition:"bottom"})}),Object(r.jsx)(J,{to:"/education",children:Object(r.jsx)(R,{hasIconOnly:!0,renderIcon:D.Xd,iconDescription:"Education",tooltipPosition:"bottom"})})]})]})};function X(){var n=Object(u.a)(["\n  min-height: 100vh;\n\n  @media (max-width: 640px) {\n    margin-left: 0 !important;\n  }\n  "]);return X=function(){return n},n}var q=Object(l.a)(d.Content)(X()),G=function(n){var e=n.user,t=n.children;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(V,{}),Object(r.jsx)(p,{}),Object(r.jsxs)(q,{children:[Object(r.jsx)(S,{user:e}),Object(r.jsx)("div",{children:t})]})]})},K=t(20);function Q(){var n=Object(u.a)(["\n  display: inline-block;\n  margin-right: 0.75rem;\n  margin-bottom: 0.75rem;\n  padding: 0.5rem 1rem;\n  background-color: ",";\n  color: ",";\n  border-radius: 2px;\n  font-weight: bold;\n"]);return Q=function(){return n},n}function U(){var n=Object(u.a)(["\n  white-space: pre-wrap;\n"]);return U=function(){return n},n}function Y(){var n=Object(u.a)(["\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n"]);return Y=function(){return n},n}var Z=l.a.h3(Y()),$=l.a.p(U()),nn=l.a.span(Q(),K.a[20],K.a[70]);function en(){var n=Object(u.a)(["\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n  display: inline-block;\n  font-size: 18px;\n"]);return en=function(){return n},n}var tn=l.a.li(en()),rn=function(n){var e=n.user;return Object(r.jsxs)(G,{user:e,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(Z,{children:"About Me"}),Object(r.jsx)($,{children:e.basics.summary})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Z,{children:"Skills"}),Object(r.jsx)("div",{children:e.skills.map((function(n){return Object(r.jsx)(nn,{children:n.name},n.name)}))})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Z,{children:"Profiles"}),Object(r.jsx)("ul",{children:e.basics.profiles.map((function(n,e){return Object(r.jsxs)(tn,{children:[0!==e&&" | ",Object(r.jsx)("a",{href:n.url,target:"_blank",rel:"noreferrer noopener",children:n.network})]},n.network)}))})]})]})},cn=t(38);function on(){var n=Object(u.a)(["\n  margin-top: 1.2rem;\n  "]);return on=function(){return n},n}function an(){var n=Object(u.a)(["\n  font-weight: bold;\n"]);return an=function(){return n},n}function sn(){var n=Object(u.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return sn=function(){return n},n}var jn=l.a.li(sn(),K.b),bn=l.a.h4(an()),dn=l.a.div(on()),un=function(n){var e=n.user;return Object(r.jsx)(G,{user:e,children:Object(r.jsxs)("div",{children:[Object(r.jsx)(Z,{children:"Projects"}),Object(r.jsx)("ul",{children:e.projects.map((function(n,e){return Object(r.jsxs)(jn,{children:[Object(r.jsx)(bn,{children:n.name}),Object(r.jsx)("p",{children:n.summary}),Object(r.jsx)(dn,{children:[].concat(Object(cn.a)(n.languages),Object(cn.a)(n.libraries)).map((function(n,e){return Object(r.jsx)(nn,{children:n},e)}))})]},e)}))})]})})};function ln(){var n=Object(u.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return ln=function(){return n},n}function hn(){var n=Object(u.a)(["\n  font-weight: bold;\n"]);return hn=function(){return n},n}function On(){var n=Object(u.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return On=function(){return n},n}var xn=l.a.li(On(),K.b),pn=l.a.h4(hn()),fn=l.a.p(ln()),mn=function(n){var e=n.user;return Object(r.jsx)(G,{user:e,children:Object(r.jsxs)("div",{children:[Object(r.jsx)(Z,{children:"Work"}),Object(r.jsx)("ul",{children:e.work.map((function(n,e){return Object(r.jsxs)(xn,{children:[Object(r.jsx)(pn,{children:n.position}),Object(r.jsxs)("div",{children:[Object(r.jsx)(fn,{children:n.company})," ",Object(r.jsx)("span",{children:n.location}),Object(r.jsx)("span",{children:" \u22c5 "}),Object(r.jsxs)("span",{children:[n.start.year," to ",n.end.year]})]}),Object(r.jsx)($,{children:n.summary})]},e)}))})]})})};function vn(){var n=Object(u.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return vn=function(){return n},n}function gn(){var n=Object(u.a)(["\n  font-weight: bold;\n"]);return gn=function(){return n},n}function yn(){var n=Object(u.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return yn=function(){return n},n}var wn=l.a.li(yn(),K.b),kn=l.a.h4(gn()),In=l.a.p(vn()),Pn=function(n){var e=n.user;return Object(r.jsx)(G,{user:e,children:Object(r.jsxs)("div",{children:[Object(r.jsx)(Z,{children:"Education"}),Object(r.jsx)("ul",{children:e.education.map((function(n,e){return Object(r.jsxs)(wn,{children:[Object(r.jsx)(kn,{children:n.position}),Object(r.jsxs)("div",{children:[Object(r.jsxs)(In,{children:[n.studyType,", ",n.area]})," ",Object(r.jsx)("span",{children:" \u22c5 "}),Object(r.jsxs)("span",{children:[n.start.year," to ",n.end.year]})]}),Object(r.jsx)($,{children:n.description.replace("\n\n","\n")})]},e)}))})]})})},Sn=function(n){var e=n.user;return Object(r.jsx)(j.a,{children:Object(r.jsxs)(b.c,{children:[Object(r.jsx)(b.a,{exact:!0,path:"/",children:Object(r.jsx)(rn,{user:e})}),Object(r.jsx)(b.a,{path:"/projects",children:Object(r.jsx)(un,{user:e})}),Object(r.jsx)(b.a,{path:"/work",children:Object(r.jsx)(mn,{user:e})}),Object(r.jsx)(b.a,{path:"/education",children:Object(r.jsx)(Pn,{user:e})})]})})};var En=function(){var n=Object(c.useState)(null),e=Object(s.a)(n,2),t=e[0],i=e[1];return Object(c.useEffect)((function(){fetch("https://gitconnected.com/v1/portfolio/shelby18k").then((function(n){return n.json()})).then((function(n){i(n)}))}),[]),t?Object(r.jsx)(Sn,{user:t}):Object(r.jsx)("div",{})},Cn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,96)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),i(n),o(n)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(En,{})}),document.getElementById("root")),Cn()}},[[95,1,2]]]);
//# sourceMappingURL=main.4210c236.chunk.js.map