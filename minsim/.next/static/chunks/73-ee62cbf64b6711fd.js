"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73],{9086:function(n,t){t.Z={src:"/_next/static/media/search_black.97bdfd3c.png",height:64,width:64,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAARElEQVR42kXKwQnAIBAAwYm/swMbUAQLiaSM9N9DwCC+FoaFC6snoYtD4TZMGaAbaOp+wtS8CpJlWVU8AiyCELAx/f0A7YoDX689ShoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},7183:function(n,t,r){var e=r(5893),i=(r(7294),r(9738));t.Z=function(n){var t=n.title,r=n.subscriber,o=n.video,u=n.description;return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(i.rs,{children:[(0,e.jsx)("h3",{children:t}),(0,e.jsxs)(i.Lf,{children:[(0,e.jsxs)("p",{children:["\uad6c\ub3c5\uc790 ",function(){try{return r>=1e8?"".concat(r/=1e8,"\uc5b5\uba85"):r>=1e4?"".concat(r/=1e4,"\ub9cc\uba85"):r>=1e3?"".concat(r/=1e3,"\ucc9c\uba85"):"".concat(r,"\uba85")}catch(n){return}}(),"\xa0","\xa0","|","\xa0","\xa0"]}),(0,e.jsxs)("p",{children:["\ub3d9\uc601\uc0c1 ",o,"\uac1c"]}),(0,e.jsx)("br",{}),(0,e.jsx)("p",{children:function(){try{return u.length>=25?"".concat(u.substring(0,24)," ..."):u}catch(n){return}}()})]})]})})}},2426:function(n,t,r){r.d(t,{Z:function(){return B}});var e=r(5893),i=r(7294),o=r(1664),u=r.n(o),a=r(1163),c=r(7297),p=r(6829);function l(){var n=(0,c.Z)(["\n    z-index: 9999;\n    position : fixed;\n    top: 0px;\n    left: 0px;\n    padding: 0 64px 0 64px;\n    width : 100%;\n    backdrop-filter: blur(10px);\n    border-bottom: 1px solid #A6A6A6;\n    transition: ease 0.4s;\n    &--scrolled {\n    padding: 64px;\n  }\n"]);return l=function(){return n},n}function d(){var n=(0,c.Z)(["\n    display : flex;\n    list-style : none;\n    flex-direction : row;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 0;\n"]);return d=function(){return n},n}function s(){var n=(0,c.Z)(["\n    display : inline-block;\n    text-transform : uppercase;\n"]);return s=function(){return n},n}function f(){var n=(0,c.Z)(["\n    display : inline-block;\n    text-transform : uppercase;\n    visibility: hidden;\n"]);return f=function(){return n},n}var x=p.Z.nav(l()),h=p.Z.ul(d()),g=p.Z.li(s()),m=p.Z.li(f()),v=r(9086),b=r(5675),Z=r.n(b),y=r(1360),w=r.n(y);function A(){var n=(0,c.Z)(["\n  padding-bottom: 10px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(10px);\n"]);return A=function(){return n},n}function k(){var n=(0,c.Z)(["\n  position: relative;\n  \n  input {\n    position: relative;\n    background-color: #fff;\n    border-radius: 25px;\n    \n    width: 100%;\n    min-height: 48px;\n\n    "," {\n      min-width: 1080px;\n    }\n    "," {\n      min-width: 768px;\n    }\n    "," {\n      min-width: 360px;\n    }\n\n    :hover {\n      border: 4px solid #FF5349;\n    }\n\n    :focus {\n      border: 4px solid #FF5349;\n      outline: none;\n    }\n  }\n\n  button {\n    padding: 0;\n    border: none;\n    background-color: #fff;\n    position: absolute;\n    top: 8px;\n    right: 16px;\n    cursor: pointer;\n  }\n"]);return k=function(){return n},n}(0,y.getBreakPoints)();var j=p.Z.div(A()),S=p.Z.label(k(),w()(">desktop"),w()("<=desktop",">tablet"),w()("<=tablet",">phone"));var C=function(){var n=(0,i.useState)(""),t=n[0],r=n[1],o=(0,a.useRouter)(),u=function(){o.push({pathname:"/search/".concat(t)})};return(0,e.jsx)(j,{id:"navdiv",children:(0,e.jsxs)(S,{htmlFor:"search",children:[(0,e.jsx)("input",{type:"search",id:"search",name:"search",value:t,onChange:function(n){r(n.target.value)},onKeyDown:function(n){"Enter"===n.key&&u()}}),(0,e.jsx)("button",{id:"seachbutton",onClick:u,children:(0,e.jsx)(Z(),{src:v.Z,alt:"\uac80\uc0c9",width:32,height:32})})]})})},E=r(6546),U=r(9521);var B=function(){U.gsap.registerPlugin(E.ScrollTrigger),(0,i.useEffect)((function(){var n=U.gsap.from("#NavStyle",{yPercent:-100,paused:!0,duration:.2}).progress(1);E.ScrollTrigger.create({start:"top top",end:99999,onUpdate:function(t){-1===t.direction?n.play():n.reverse()}})}));var n=(0,a.useRouter)();return(0,e.jsxs)(x,{id:"NavStyle",children:[(0,e.jsxs)(h,{children:[(0,e.jsx)(m,{children:(0,e.jsx)("h3",{children:"Trend"})}),(0,e.jsx)(g,{children:(0,e.jsx)("h2",{children:(0,e.jsx)(u(),{href:"/",children:"\uc720\uc2ec"})})}),(0,e.jsx)(g,{children:(0,e.jsxs)("h3",{children:[(0,e.jsx)("div",{onClick:function(){n.push("/")}}),(0,e.jsx)(u(),{href:"/trend",children:"Trend"})]})})]}),(0,e.jsx)(C,{})]})}},8352:function(n,t,r){r.d(t,{r:function(){return i}});var e=r(4480),i=((0,e.cn)({key:"aSearchList",default:[]}),(0,e.cn)({key:"aChData",default:{id:"",banner:"",name:"",description:"",subscriber:0,video:0,thumbnail:"",time:"",view:0}}))},2151:function(n,t,r){r.d(t,{f6:function(){return d},sH:function(){return l},xv:function(){return s}});var e=r(7297),i=r(6829),o=r(1360),u=r.n(o);function a(){var n=(0,e.Z)(["\n  background-color: #31313C;\n  border-radius: 10px;\n  padding: 32px 112px 32px 112px;\n  margin: 0px 64px 32px 64px;\n\n  "," {\n    padding: 32px 112px 32px 112px;\n    margin: 0px 64px 16px 64px;\n  }\n  "," {\n    padding: 24px 64px 24px 64px;\n    margin-left: 32px;\n    margin-right: 32px;\n  }\n  "," {\n    padding: 16px;\n    margin-left: 16px;\n    margin-right: 16px;\n  }\n"]);return a=function(){return n},n}function c(){var n=(0,e.Z)(["\n  width: 100%; \n  height: 100%;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  margin: 45px 0 45px 0;\n\n  "," {\n    flex-direction: column;\n  }\n\n  :hover{\n    cursor: pointer;\n  }\n"]);return c=function(){return n},n}function p(){var n=(0,e.Z)(["\n  width: 100%; \n  height: 100%;\n\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n  align-items: center;\n\n  margin: 45px 0 45px 0;\n\n  "," {\n    flex-direction: column;\n  }\n"]);return p=function(){return n},n}(0,o.getBreakPoints)();var l=i.Z.div(a(),u()(">desktop"),u()("<=desktop",">tablet"),u()("<=tablet",">phone")),d=i.Z.div(c(),u()("<=tablet",">phone")),s=i.Z.div(p(),u()("<=tablet",">phone"))},9738:function(n,t,r){r.d(t,{Lf:function(){return h},Vk:function(){return g},jR:function(){return m},rs:function(){return f},t7:function(){return x}});var e=r(7297),i=r(6829),o=r(1360),u=r.n(o);function a(){var n=(0,e.Z)([""]);return a=function(){return n},n}function c(){var n=(0,e.Z)(["\n  display:inline-block;\n\n  "," {\n    margin-left: 64px;\n  }\n  "," {\n    margin-left: 32px;\n  }\n  "," {\n    margin-top: 16px;\n  }\n"]);return c=function(){return n},n}function p(){var n=(0,e.Z)(["\n  display:inline-block;\n  "," {\n    margin-left: 64px;\n  }\n  "," {\n    margin-left: 32px;\n  }\n  "," {\n    margin-left: 16px;\n  }\n"]);return p=function(){return n},n}function l(){var n=(0,e.Z)(["\n  margin-top: 16px;\n"]);return l=function(){return n},n}function d(){var n=(0,e.Z)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  margin-left: 16px;\n"]);return d=function(){return n},n}function s(){var n=(0,e.Z)(["\n  height: 128px;\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n\n  "," {\n    height: 128px;\n    margin-left: 32px;\n    flex-direction: column;\n  }\n  "," {\n    width: 100%;\n    height: auto;\n    margin-top: 16px;\n    flex-direction: row;\n  }\n"]);return s=function(){return n},n}(0,o.getBreakPoints)();i.Z.div(a());var f=i.Z.div(c(),u()(">desktop"),u()("<=desktop",">tablet"),u()("<=tablet",">phone")),x=i.Z.div(p(),u()(">desktop"),u()("<=desktop",">tablet"),u()("<=tablet",">phone")),h=i.Z.div(l()),g=i.Z.div(d()),m=i.Z.div(s(),u()("<=desktop",">tablet"),u()("<=tablet",">phone"))},3743:function(n,t,r){r.d(t,{Bk:function(){return m},E$:function(){return h},L7:function(){return x},U:function(){return v},UO:function(){return b},ms:function(){return g}});var e=r(7297),i=r(6829),o=r(1360),u=r.n(o);function a(){var n=(0,e.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin-top: 210px;\n  margin-bottom: 64px;\n\n  @media screen and (max-width: 768px) {\n    width: 100%;\n    margin: 0 auto;\n  }\n"]);return a=function(){return n},n}function c(){var n=(0,e.Z)(["\n  list-style-type: disc;\n  margin-block-start: 0;\n  margin-block-end: 0;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n  padding-inline-start: 0;\n"]);return c=function(){return n},n}function p(){var n=(0,e.Z)(["\n  width: 100%; \n  height: 100%;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  margin: 45px 0 45px 0;\n\n  "," {\n    flex-direction: column;\n  }\n\n  :hover{\n    cursor: pointer;\n  }\n"]);return p=function(){return n},n}function l(){var n=(0,e.Z)(["\n  margin-top: 256px;\n"]);return l=function(){return n},n}function d(){var n=(0,e.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  \n  p, h3 {\n    display:inline-block;\n  }\n  "," {\n    flex-direction: column;\n  }\n"]);return d=function(){return n},n}function s(){var n=(0,e.Z)(["\n  min-width: 160px;\n  width: 160px;\n  height: 90px;\n\n  "," {\n    min-width: 120px;\n    width: 120px;\n    height: 60px;\n  }\n\n  "," {\n    min-width: 120px;\n    width: 120px;\n    height: 60px;\n    margin-bottom: 32px;\n  }\n"]);return s=function(){return n},n}function f(){var n=(0,e.Z)(["\n  position: relative;\n\n  width: 188px;\n  height: 188px;\n  \n\n  "," {\n    width: 128px;\n    height: 128px;\n  }\n  "," {\n    margin-right: 16px;\n    width: 64px;\n    height: 64px;\n  }\n\n"]);return f=function(){return n},n}(0,o.getBreakPoints)();i.Z.div(a());var x=i.Z.ul(c()),h=i.Z.li(p(),u()("<=tablet",">phone")),g=i.Z.div(l()),m=i.Z.div(d(),u()("<=tablet",">phone")),v=i.Z.div(s(),u()("<=desktop",">tablet"),u()("<=tablet",">phone")),b=i.Z.div(f(),u()("<=desktop",">tablet"),u()("<=tablet",">phone"))},943:function(n,t,r){function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}r.d(t,{Z:function(){return e}})},3375:function(n,t,r){function e(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}r.d(t,{Z:function(){return e}})},828:function(n,t,r){r.d(t,{Z:function(){return o}});var e=r(3375);var i=r(1566);function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||(0,e.Z)(n,t)||(0,i.Z)(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(n,t,r){r.d(t,{Z:function(){return i}});var e=r(943);function i(n,t){if(n){if("string"===typeof n)return(0,e.Z)(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,e.Z)(n,t):void 0}}}}]);