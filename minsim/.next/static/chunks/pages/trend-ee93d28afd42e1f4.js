(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[850],{9254:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trend",function(){return r(4129)}])},9086:function(n,t){"use strict";t.Z={src:"/_next/static/media/search_black.97bdfd3c.png",height:64,width:64,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAARElEQVR42kXKwQnAIBAAwYm/swMbUAQLiaSM9N9DwCC+FoaFC6snoYtD4TZMGaAbaOp+wtS8CpJlWVU8AiyCELAx/f0A7YoDX689ShoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},5462:function(n,t,r){"use strict";var e=r(7297),i=r(5893),o=r(6829),s=r(1360),a=r.n(s);function u(){var n=(0,e.Z)(["\n  margin: 128px 0px 64px 0;\n  display: flex;\n  flex-direction: column;\n\n  "," {\n    margin-left: 64px;\n    margin-right: 64px;\n  }\n  "," {\n    min-width: 32px;\n  }\n  "," {\n    margin-left: 16px;\n    margin-right: 16px;\n  }\n"]);return u=function(){return n},n}function c(){var n=(0,e.Z)(["\n  display: inline-block;\n  color: #FF5349;\n  margin-bottom: 32px;\n"]);return c=function(){return n},n}function d(){var n=(0,e.Z)(["\n  display: inline-block;\n  color: #fff; \n"]);return d=function(){return n},n}(0,s.getBreakPoints)();var p=o.Z.div(u(),a()(">desktop"),a()("<=desktop",">tablet"),a()("<=tablet",">phone")),l=o.Z.h2(c()),x=o.Z.h2(d());t.Z=function(n){var t=n.mainText,r=n.subText1,e=n.subText2;return(0,i.jsxs)(p,{children:[(0,i.jsx)(l,{children:t}),(0,i.jsx)(x,{children:r}),(0,i.jsx)(x,{children:e})]})}},2426:function(n,t,r){"use strict";r.d(t,{Z:function(){return E}});var e=r(5893),i=r(7294),o=r(1664),s=r.n(o),a=r(1163),u=r(7297),c=r(6829);function d(){var n=(0,u.Z)(["\n    z-index: 9999;\n    position : fixed;\n    top: 0px;\n    left: 0px;\n    padding: 0 64px 0 64px;\n    width : 100%;\n    backdrop-filter: blur(10px);\n    border-bottom: 1px solid #A6A6A6;\n    transition: ease 0.4s;\n    &--scrolled {\n    padding: 64px;\n  }\n"]);return d=function(){return n},n}function p(){var n=(0,u.Z)(["\n    display : flex;\n    list-style : none;\n    flex-direction : row;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 0;\n"]);return p=function(){return n},n}function l(){var n=(0,u.Z)(["\n    display : inline-block;\n    text-transform : uppercase;\n"]);return l=function(){return n},n}function x(){var n=(0,u.Z)(["\n    display : inline-block;\n    text-transform : uppercase;\n    visibility: hidden;\n"]);return x=function(){return n},n}var f=c.Z.nav(d()),h=c.Z.ul(p()),g=c.Z.li(l()),v=c.Z.li(x()),b=r(9086),j=r(5675),m=r.n(j),A=r(1360),Z=r.n(A);function k(){var n=(0,u.Z)(["\n  padding-bottom: 10px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(10px);\n"]);return k=function(){return n},n}function w(){var n=(0,u.Z)(["\n  position: relative;\n  \n  input {\n    position: relative;\n    background-color: #fff;\n    border-radius: 25px;\n    \n    width: 100%;\n    min-height: 48px;\n\n    "," {\n      min-width: 1080px;\n    }\n    "," {\n      min-width: 768px;\n    }\n    "," {\n      min-width: 360px;\n    }\n\n    :hover {\n      border: 4px solid #FF5349;\n    }\n\n    :focus {\n      border: 4px solid #FF5349;\n      outline: none;\n    }\n  }\n\n  button {\n    padding: 0;\n    border: none;\n    background-color: #fff;\n    position: absolute;\n    top: 8px;\n    right: 16px;\n    cursor: pointer;\n  }\n"]);return w=function(){return n},n}(0,A.getBreakPoints)();var y=c.Z.div(k()),T=c.Z.label(w(),Z()(">desktop"),Z()("<=desktop",">tablet"),Z()("<=tablet",">phone"));var _=function(){var n=(0,i.useState)(""),t=n[0],r=n[1],o=(0,a.useRouter)(),s=function(){o.push({pathname:"/search/".concat(t)})};return(0,e.jsx)(y,{id:"navdiv",children:(0,e.jsxs)(T,{htmlFor:"search",children:[(0,e.jsx)("input",{type:"search",id:"search",name:"search",value:t,onChange:function(n){r(n.target.value)},onKeyDown:function(n){"Enter"===n.key&&s()}}),(0,e.jsx)("button",{id:"seachbutton",onClick:s,children:(0,e.jsx)(m(),{src:b.Z,alt:"\uac80\uc0c9",width:32,height:32})})]})})},S=r(6546),C=r(9521);var E=function(){C.gsap.registerPlugin(S.ScrollTrigger),(0,i.useEffect)((function(){var n=C.gsap.from("#NavStyle",{yPercent:-100,paused:!0,duration:.2}).progress(1);S.ScrollTrigger.create({start:"top top",end:99999,onUpdate:function(t){-1===t.direction?n.play():n.reverse()}})}));var n=(0,a.useRouter)();return(0,e.jsxs)(f,{id:"NavStyle",children:[(0,e.jsxs)(h,{children:[(0,e.jsx)(v,{children:(0,e.jsx)("h3",{children:"Trend"})}),(0,e.jsx)(g,{children:(0,e.jsx)("h2",{children:(0,e.jsx)(s(),{href:"/",children:"\uc720\uc2ec"})})}),(0,e.jsx)(g,{children:(0,e.jsxs)("h3",{children:[(0,e.jsx)("div",{onClick:function(){n.push("/")}}),(0,e.jsx)(s(),{href:"/trend",children:"Trend"})]})})]}),(0,e.jsx)(_,{})]})}},4129:function(n,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return m},default:function(){return A}});var e=r(5893),i=r(9008),o=r.n(i),s=r(1163),a=r(5462),u=r(2426),c=r(7294),d=r(7582);function p(n){var t=(0,c.useState)(!1),r=t[0],i=t[1],o=n.props;return(0,c.useEffect)((function(){i(!0)}),[]),(0,e.jsx)(e.Fragment,{children:o?r&&(0,e.jsx)(d.ZP,{words:o,options:{fontSizes:[20,50]}}):(0,e.jsx)(e.Fragment,{})})}var l=r(7297),x=r(6829),f=r(1360),h=r.n(f);function g(){var n=(0,l.Z)(["\n margin-top : 256px;\n"]);return g=function(){return n},n}(0,f.getBreakPoints)();var v=x.Z.section(g());function b(){var n=(0,l.Z)(["\n  background-color: #31313C;\n  border-radius: 10px;\n  padding: 32px 112px 32px 112px;\n  margin: 0px 64px 32px 64px;\n\n  "," {\n    padding: 32px 112px 32px 112px;\n    margin: 0px 64px 16px 64px;\n  }\n  "," {\n    padding: 24px 64px 24px 64px;\n    margin-left: 32px;\n    margin-right: 32px;\n  }\n  "," {\n    padding: 16px;\n    margin-left: 16px;\n    margin-right: 16px;\n  }\n"]);return b=function(){return n},n}(0,f.getBreakPoints)();var j=x.Z.div(b(),h()(">desktop"),h()("<=desktop",">tablet"),h()("<=tablet",">phone")),m=!0,A=function(n){(0,s.useRouter)();return console.log(n),(0,e.jsxs)("div",{children:[(0,e.jsxs)(o(),{children:[(0,e.jsx)("title",{children:"Trend"}),(0,e.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,e.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,e.jsxs)("main",{children:[(0,e.jsx)(u.Z,{}),(0,e.jsx)(v,{children:(0,e.jsx)(a.Z,{mainText:"Trend Tag",subText1:"\uc778\uae30\ub3d9\uc601\uc0c1\uc758 \ud0dc\uadf8\uc785\ub2c8\ub2e4.",subText2:"\ud604\uc7ac \uc778\uae30\ub3d9\uc601\uc0c1\ub4e4\uc758 \ubaa8\ub4e0 \ud0dc\uadf8\ub97c \ub098\ud0c0\ub0b4\uace0 \uc788\uc2b5\ub2c8\ub2e4."})}),(0,e.jsx)(j,{children:(0,e.jsx)(p,{props:null===n||void 0===n?void 0:n.tags})}),(0,e.jsx)(v,{children:(0,e.jsx)(a.Z,{mainText:"Trend Keyword",subText1:"\uc778\uae30\ub3d9\uc601\uc0c1\uc758 \ud0a4\uc6cc\ub4dc\uc785\ub2c8\ub2e4.",subText2:"\ud604\uc7ac \uc778\uae30\ub3d9\uc601\uc0c1 \uc81c\ubaa9\uc758 \ud0a4\uc6cc\ub4dc\ub97c \ub098\ud0c0\ub0b4\uace0 \uc788\uc2b5\ub2c8\ub2e4."})}),(0,e.jsx)(j,{children:(0,e.jsx)(p,{props:null===n||void 0===n?void 0:n.keywords})})]})]})}},6439:function(){}},function(n){n.O(0,[433,918,582,774,888,179],(function(){return t=9254,n(n.s=t);var t}));var t=n.O();_N_E=t}]);