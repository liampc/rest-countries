(this["webpackJsonprest-countries"]=this["webpackJsonprest-countries"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(18),r=c.n(s),i=c(8),o=c(2),l=c(13),j=c(6),d=(c(24),c(25),c(0)),u=function(e){return Object(d.jsx)("header",{className:"header to-switch",children:Object(d.jsxs)("div",{className:"header__banner container",children:[Object(d.jsx)(i.c,{to:"/",children:Object(d.jsx)("h1",{className:"header__logo",children:"Where in the world?"})}),Object(d.jsxs)("p",{className:"header__switch to-switch",onClick:e.switchToDark,children:[Object(d.jsx)("i",{}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{id:"mode",children:"Dark"})," Mode"]})]})]})})},h=c(9),b=c.n(h),O=c(12),x=(c(36),c(37),function(e){return Object(d.jsxs)("form",{className:"searchBar to-switch",children:[Object(d.jsx)("i",{children:Object(d.jsx)("ion-icon",{name:"search-outline"})}),Object(d.jsx)("input",{type:"text",onChange:e.handleChange,value:e.value,placeholder:"Search for a country..."})]})}),p=function(e){return Object(d.jsxs)("div",{className:"select",children:[Object(d.jsxs)("div",{className:"select__title to-switch",onClick:e.handleClick,children:["Filter by region ",Object(d.jsx)("i",{id:"arrow",children:Object(d.jsx)("ion-icon",{name:"chevron-down-outline"})})]}),Object(d.jsxs)("div",{className:"select__selection hide to-switch",children:[Object(d.jsx)("div",{onClick:function(t){return e.changeRegion(t)},className:"",children:"Africa"}),Object(d.jsx)("div",{onClick:function(t){return e.changeRegion(t)},children:"Americas"}),Object(d.jsx)("div",{onClick:function(t){return e.changeRegion(t)},children:"Asia"}),Object(d.jsx)("div",{onClick:function(t){return e.changeRegion(t)},children:"Europe"}),Object(d.jsx)("div",{onClick:function(t){return e.changeRegion(t)},children:"Oceania"})]})]})},m=function(e){return Object(d.jsx)("div",{className:"card to-switch",children:Object(d.jsxs)(i.c,{to:"".concat(e.name),children:[Object(d.jsx)("div",{className:"card__pic",style:{backgroundImage:"url(".concat(e.flag,")")}}),Object(d.jsxs)("div",{className:"card__info container-padding-lr",children:[Object(d.jsx)("h2",{children:Object(d.jsx)(i.c,{to:"".concat(e.name),children:e.name})}),Object(d.jsxs)("p",{children:["Population: ",Object(d.jsx)("span",{children:e.population.toLocaleString()})]}),Object(d.jsxs)("p",{children:["Region: ",Object(d.jsx)("span",{children:e.region})]}),Object(d.jsxs)("p",{children:["Capital: ",Object(d.jsx)("span",{children:e.capital})]})]})]})})},f=function(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)("europe"),i=Object(j.a)(r,2),o=i[0],l=i[1],u=Object(n.useState)(""),h=Object(j.a)(u,2),f=h[0],v=h[1],g=Object(n.useState)([]),k=Object(j.a)(g,2),_=k[0],N=k[1];Object(n.useEffect)((function(){S();var t=document.querySelectorAll(".to-switch");!0===e.darkMode?t.forEach((function(e){e.classList.add("dark")})):!1===e.darkMode&&t.forEach((function(e){e.classList.remove("dark")}))}),[a,o,f,_]);var w,S=function(){var e=Object(O.a)(b.a.mark((function e(t){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o,e.next=3,fetch("https://restcountries.eu/rest/v2/region/".concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,s(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=document.querySelector(".select__selection"),t=document.querySelector("#arrow");e.classList.contains("hide")?(e.classList.remove("hide"),t.classList.add("open")):(e.classList.add("hide"),t.classList.remove("open"))},C=function(){var e=Object(O.a)(b.a.mark((function e(t){var c,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,v(c),e.next=4,fetch("https://restcountries.eu/rest/v2/name/".concat(f));case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,N(a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(""!==f)try{w=_.map((function(e){return Object(d.jsx)(m,{name:e.name,population:e.population,region:e.region,capital:e.capital,flag:e.flag},e.alpha2Code)}))}catch(y){w="No results found"}else""===f&&(w=a.map((function(e){return Object(d.jsx)(m,{name:e.name,population:e.population,region:e.region,capital:e.capital,flag:e.flag},e.alpha2Code)})));return Object(d.jsxs)("main",{className:"main to-switch",children:[Object(d.jsxs)("nav",{className:"nav container",children:[Object(d.jsx)("div",{className:"nav__search",children:Object(d.jsx)(x,{handleChange:C,value:f})}),Object(d.jsx)("div",{className:"nav__select",children:Object(d.jsx)(p,{handleClick:L,changeRegion:function(e){var t=e.target.innerText;l(t),L()}})})]}),Object(d.jsx)("div",{className:"list container",children:w})]})},v=(c(38),function(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),o=Object(j.a)(r,2),l=o[0],u=o[1],h=Object(n.useState)([]),x=Object(j.a)(h,2),p=x[0],m=x[1],f=Object(n.useState)(""),v=Object(j.a)(f,2),g=(v[0],v[1]),k=Object(n.useState)([]),_=Object(j.a)(k,2),N=_[0],w=_[1];Object(n.useEffect)((function(){L(),console.log(e.darkMode);var t=document.querySelectorAll(".to-switch");!0===e.darkMode?t.forEach((function(e){e.classList.add("dark")})):!1===e.darkMode&&t.forEach((function(e){e.classList.remove("dark")}))}),[]);var S,L=function(){var t=Object(O.a)(b.a.mark((function t(){var c,n,a,r,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://restcountries.eu/rest/v2/name/".concat(e.match.params.id,"?fullText=true"));case 2:return c=t.sent,t.next=5,c.json();case 5:return n=t.sent,s(n[0]),u(n[0].currencies[0].name),m(n[0].languages),a="",t.prev=10,n[0].borders.forEach((function(e){a+="".concat(e,";")})),g(a),t.next=15,fetch("https://restcountries.eu/rest/v2/alpha?codes=".concat(a));case 15:return r=t.sent,t.next=18,r.json();case 18:i=t.sent,w(i),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(10),w([]);case 25:case"end":return t.stop()}}),t,null,[[10,22]])})));return function(){return t.apply(this,arguments)}}();return N.length<1?S="":N.length>1&&!0===e.darkMode?S=N.map((function(e){return Object(d.jsx)("div",{className:"detail__card to-switch dark",children:e.name},e.name)})):N.length>1&&!1===e.darkMode&&(S=N.map((function(e){return Object(d.jsx)("div",{className:"detail__card to-switch",children:e.name},e.name)}))),Object(d.jsxs)("div",{className:"page to-switch",children:[Object(d.jsx)("div",{className:"page__nav container",children:Object(d.jsx)("div",{className:"button to-switch",children:Object(d.jsxs)(i.c,{to:"/",children:[Object(d.jsx)("i",{children:Object(d.jsx)("ion-icon",{name:"arrow-back-outline"})}),"Back"]})})}),Object(d.jsx)("div",{className:"page__detail container",children:Object(d.jsxs)("div",{className:"detail",children:[Object(d.jsx)("div",{className:"detail__flag",style:{backgroundImage:"url(".concat(a.flag,")")}}),Object(d.jsxs)("div",{className:"detail__info",children:[Object(d.jsx)("h2",{children:a.name}),Object(d.jsxs)("div",{className:"detail__group",children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["Native Name: ",Object(d.jsx)("span",{children:a.nativeName})]}),Object(d.jsxs)("p",{children:["Population: ",Object(d.jsx)("span",{children:a.population?a.population.toLocaleString():""})]}),Object(d.jsxs)("p",{children:["Region: ",Object(d.jsx)("span",{children:a.region})]}),Object(d.jsxs)("p",{children:["Subregion: ",Object(d.jsx)("span",{children:a.subregion})]}),Object(d.jsxs)("p",{children:["Capital: ",Object(d.jsx)("span",{children:a.capital})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["Top Level Domain: ",Object(d.jsx)("span",{children:a.topLevelDomain})]}),Object(d.jsxs)("p",{children:["Currencies: ",Object(d.jsx)("span",{children:l})]}),Object(d.jsxs)("p",{children:["Languages:",p.map((function(e,t){return t===p.length-1?Object(d.jsxs)("span",{children:[" ",e.name]},e.name):Object(d.jsxs)("span",{children:[" ",e.name,", "]},e.name)}))]})]})]}),Object(d.jsxs)("div",{className:"detail__border",children:[Object(d.jsx)("h3",{children:"Border Countries:"}),Object(d.jsx)("div",{className:"detail__countries to-switch",children:S})]})]})]})})]})});var g=function(){var e=Object(n.useState)(),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(d.jsx)(i.b,{basename:"/",children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{switchToDark:function(){var e=document.querySelectorAll(".to-switch"),t=document.querySelector("#mode");e.forEach((function(e){e.classList.contains("dark")?(a(!1),e.classList.remove("dark"),t.innerHTML="Dark"):(a(!0),e.classList.add("dark"),t.innerHTML="Light")}))}}),Object(d.jsxs)(o.a,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",render:function(e){return Object(d.jsx)(f,Object(l.a)(Object(l.a)({},e),{},{darkMode:c}))}}),Object(d.jsx)(o.a,{path:"/:id",render:function(e){return Object(d.jsx)(v,Object(l.a)(Object(l.a)({},e),{},{darkMode:c}))}})]})]})})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.78c164b7.chunk.js.map