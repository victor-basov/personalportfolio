(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],{35:function(t,e,c){},41:function(t,e,c){},42:function(t,e,c){},43:function(t,e,c){},44:function(t,e,c){},45:function(t,e,c){},46:function(t,e,c){},47:function(t,e,c){},48:function(t,e,c){},49:function(t,e,c){"use strict";c.r(e);var i=c(0),s=c.n(i),n=c(11),o=c.n(n),a=c(8),r=(c(35),c(63)),l=c(64),j=c(65),d=c(66),m=c(68),h=c(1);function b(t){var e=t.menuOpen,c=t.setMenuOpen;return Object(h.jsx)("div",{className:"topbar "+(e&&"active"),children:Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsx)("a",{href:"#intro",className:"logo",children:"victor."}),Object(h.jsx)("div",{className:"itemContainer",children:Object(h.jsx)(m.a,{id:"button1",target:"_blank",href:"https://pdfhost.io/v/QcQwb5pZY_Victor_Basov_August_Resumedocx.pdf",size:"medium",startIcon:Object(h.jsx)(r.a,{})})}),Object(h.jsx)("div",{className:"itemContainer",children:Object(h.jsx)(m.a,{className:"button",target:"_blank",href:"mailto: vbasov10@gmail.com",size:"medium",startIcon:Object(h.jsx)(l.a,{})})}),Object(h.jsx)("div",{className:"itemContainer",children:Object(h.jsx)(m.a,{className:"button",target:"_blank",href:"https://www.linkedin.com/in/victorbasov/",size:"medium",startIcon:Object(h.jsx)(j.a,{})})}),Object(h.jsx)("div",{className:"itemContainer",children:Object(h.jsx)(m.a,{id:"button4",target:"_blank",href:"https://github.com/victor-basov",size:"medium",startIcon:Object(h.jsx)(d.a,{})})})]}),Object(h.jsx)("div",{className:"right",children:Object(h.jsxs)("div",{className:"hamburger",onClick:function(){return c(!e)},children:[Object(h.jsx)("span",{className:"line1"}),Object(h.jsx)("span",{className:"line2"}),Object(h.jsx)("span",{className:"line3"})]})})]})})}c(41);var p=c(26);function u(){var t=Object(i.useRef)();return Object(i.useEffect)((function(){Object(p.a)(t.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Photographer \ud83d\udcf7 "," Foodie \ud83c\udf63","Full-Stack Web Developer \ud83d\ude08"]})}),[]),Object(h.jsxs)("div",{className:"intro",id:"intro",children:[Object(h.jsx)("div",{className:"left",children:Object(h.jsx)("div",{className:"imgContainer",children:Object(h.jsx)("img",{src:"https://d.img.vision/victorassets/IMG_9491.jpg",alt:"victor"})})}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("h2",{children:"Hey there! I'm"}),Object(h.jsx)("h1",{children:"Victor, "}),Object(h.jsxs)("h3",{children:["a ",Object(h.jsx)("span",{ref:t})]})]}),Object(h.jsx)("a",{href:"#portfolio",children:Object(h.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/892/892498.png",alt:"arrow"})})]})]})}c(42);function O(t){var e=t.id,c=t.title,i=t.active,s=t.setSelected;return Object(h.jsx)("li",{className:i?"portfolioList active":"portfolioList",onClick:function(){return s(e)},children:c})}c(43);var g=[{id:1,title:"Dash App",img:"https://i.imgur.com/T7JP0Ox.png",githublink:"https://github.com/victor-basov/victoradmin",linktoproject:"https://victor-basov.github.io/victoradmin/"},{id:2,title:"Quiz",img:"https://www.microids.com/wp-content/uploads/2020/10/WhoWantsToBeAMillionaire_keyart.jpg",githublink:"https://github.com/victor-basov/quiz/tree/main",linktoproject:"https://victor-basov.github.io/quiz/"},{id:3,title:"The Witch ",img:"https://www.denofgeek.com/wp-content/uploads/2016/02/the_witch_ending_explained.jpg?fit=638%2C368",githublink:"https://github.com/victor-basov/horrormovie",linktoproject:"https://victor-basov.github.io/horrormovie/"},{id:4,title:"Maps App",img:"https://cdn.shopify.com/s/files/1/0101/2792/products/Under_Construction_copy_600x600_crop_center.jpg?v=1569104295",githublink:"https://github.com/victor-basov/ratemydestination",linktoproject:"https://ratemydestination.herokuapp.com/"},{id:5,title:"Blog App",img:"https://cdn.shopify.com/s/files/1/0101/2792/products/Under_Construction_copy_600x600_crop_center.jpg?v=1569104295",githublink:"",linktoproject:""},{id:6,title:"Social App",img:"https://cdn.shopify.com/s/files/1/0101/2792/products/Under_Construction_copy_600x600_crop_center.jpg?v=1569104295",githublink:"",linktoproject:""}],x=c(67);function f(){var t=Object(i.useState)("featured"),e=Object(a.a)(t,2),c=e[0],s=e[1],n=Object(i.useState)([]),o=Object(a.a)(n,2),r=o[0],l=o[1];return Object(i.useEffect)((function(){switch(c){case"featured":l(g);break;default:l(g)}}),[c]),Object(h.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(h.jsx)("h1",{children:"Portfolio"}),Object(h.jsx)("ul",{children:[{id:"featured",title:"Featured"},{}].map((function(t){return Object(h.jsx)(O,{title:t.title,active:c===t.id,setSelected:s,id:t.id,githublink:t.githublink,linktoproject:t.linktoproject})}))}),Object(h.jsx)("div",{className:"container",children:r.map((function(t){return Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("img",{src:t.img,alt:""}),Object(h.jsx)("h3",{children:t.title}),Object(h.jsx)(m.a,{id:"project1github",target:"_blank",href:t.githublink,size:"medium",startIcon:Object(h.jsx)(d.a,{})}),Object(h.jsx)(m.a,{id:"project1link",target:"_blank",href:t.linktoproject,size:"medium",startIcon:Object(h.jsx)(x.a,{})})]})}))})]})}c(44);function v(){var t=Object(i.useState)(0),e=Object(a.a)(t,2),c=e[0],s=e[1],n=[{id:"1",icon:"https://icons.veryicon.com/png/o/business/purchase-sale-and-inventory-management/coding-scheme.png",title:"Dashboard Application",desc:"This dashboard application was created using React, Material UI, Recharts, and React Router. Back end is not completed yet! ",img:"https://i.imgur.com/T7JP0Ox.png"},{id:"2",icon:"https://image.flaticon.com/icons/png/512/900/900782.png",title:"Who Wants to be a Millionaire?",desc:"This quiz application was created using React and Material-UI.",img:"https://www.microids.com/wp-content/uploads/2020/10/WhoWantsToBeAMillionaire_keyart.jpg"},{id:"3",icon:"https://image.flaticon.com/icons/png/512/757/757257.png",title:"Maps Application",desc:"This application has not been completed yet! Come back soon for more!",img:"https://cdn.shopify.com/s/files/1/0101/2792/products/Under_Construction_copy_600x600_crop_center.jpg?v=1569104295"}],o=function(t){s("left"===t?c>0?c-1:2:c<n.length-1?c+1:0)};return Object(h.jsxs)("div",{className:"works",id:"works",children:[Object(h.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*c,"vw)")},children:n.map((function(t){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("div",{className:"left",children:Object(h.jsxs)("div",{className:"leftContainer",children:[Object(h.jsx)("div",{className:"imgContainer",children:Object(h.jsx)("img",{src:t.icon,alt:""})}),Object(h.jsx)("h2",{children:t.title}),Object(h.jsx)("p",{children:t.desc})]})}),Object(h.jsx)("div",{className:"right",children:Object(h.jsx)("img",{src:t.img,alt:""})})]})})}))}),Object(h.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/892/892528.png",className:"arrow left",alt:"",onClick:function(){return o("left")}}),Object(h.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/892/892528.png",className:"arrow right",alt:"",onClick:function(){return o()}})]})}c(45);function k(){return Object(h.jsxs)("div",{className:"testimonials",id:"testimonials",children:[Object(h.jsx)("h1",{children:"Testimonials"}),Object(h.jsx)("div",{className:"container",children:[{id:1,name:"Tom",title:"The cat from Tom & Jerry",img:"https://i.pinimg.com/474x/6c/7b/a7/6c7ba77d107f66deaedb51bb7b5714a7.jpg",icon:"https://image.flaticon.com/icons/png/512/220/220375.png",desc:"When I'm not chasing that dang mouse, I'm enjoying a scrumptious souffle made by this guy."},{id:2,name:"The Pink Panther",title:"A pink, panther",img:"https://urbanmoms.ca/wp-content/uploads/2014/05/603550_10151718002252965_1269600228_n.png",icon:"https://image.flaticon.com/icons/png/512/160/160205.png",desc:"Ol' boy sure knows how to cook up a mean mushroom omelette!",featured:!0},{id:3,name:"Scooby-Doo",title:"You know him",img:"https://i2.wp.com/theorkneynews.scot/wp-content/uploads/2020/09/Scooby-Doo-Where-are-You.png?resize=574%2C430&ssl=1",icon:"https://image.flaticon.com/icons/png/512/220/220343.png",desc:"Feeds me the most Scooby Snax \ud83d\ude03"}].map((function(t){return Object(h.jsxs)("div",{className:t.featured?"card featured":"card",children:[Object(h.jsxs)("div",{className:"top",children:[Object(h.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/892/892493.png",className:"left",alt:""}),Object(h.jsx)("img",{src:t.img,className:"user",alt:""}),Object(h.jsx)("img",{src:t.icon,className:"right",alt:""})]}),Object(h.jsx)("div",{className:"center",children:t.desc}),Object(h.jsxs)("div",{className:"bottom",children:[Object(h.jsx)("h3",{children:t.name}),Object(h.jsx)("h4",{children:t.title})]})]})}))})]})}c(46);function N(){var t=Object(i.useState)(!1),e=Object(a.a)(t,2),c=e[0],s=e[1];return Object(h.jsxs)("div",{className:"contact",id:"contact",children:[Object(h.jsx)("div",{className:"left",children:Object(h.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/4850/4850955.png",alt:""})}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsx)("h2",{children:"Contact"}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s(!0)},children:[Object(h.jsx)("input",{type:"text",placeholder:"Email"}),Object(h.jsx)("textarea",{placeholder:"Message"}),Object(h.jsx)("button",{type:"submit",children:"Send"}),c&&Object(h.jsx)("span",{children:"Thanks, I'll get back to you ASAP \ud83d\ude03 "})]})]})]})}c(47),c(48);function w(t){var e=t.menuOpen,c=t.setMenuOpen;return Object(h.jsx)("div",{className:"menu "+(e&&"active"),children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{onClick:function(){return c(!1)},children:Object(h.jsx)("a",{href:"#intro",children:"Home"})}),Object(h.jsx)("li",{onClick:function(){return c(!1)},children:Object(h.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(h.jsx)("li",{onClick:function(){return c(!1)},children:Object(h.jsx)("a",{href:"#works",children:"Works"})}),Object(h.jsx)("li",{onClick:function(){return c(!1)},children:Object(h.jsx)("a",{href:"#testimonials",children:"Testimonials"})}),Object(h.jsx)("li",{onClick:function(){return c(!1)},children:Object(h.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var _=function(){var t=Object(i.useState)(!1),e=Object(a.a)(t,2),c=e[0],s=e[1];return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(b,{menuOpen:c,setMenuOpen:s}),Object(h.jsx)(w,{menuOpen:c,setMenuOpen:s}),Object(h.jsxs)("div",{className:"sections",children:[Object(h.jsx)(u,{}),Object(h.jsx)(f,{}),Object(h.jsx)(v,{}),Object(h.jsx)(k,{}),Object(h.jsx)(N,{})]})]})};o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.0b47669d.chunk.js.map