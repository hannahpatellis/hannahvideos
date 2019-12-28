(this.webpackJsonpvideorepo_frontend=this.webpackJsonpvideorepo_frontend||[]).push([[0],{177:function(e,a,t){e.exports=t(326)},286:function(e,a,t){e.exports=t.p+"static/media/videorepo.54959240.png"},287:function(e,a,t){"use strict";t.r(a);var n=t(96),r=t.n(n);a.default={getData:function(e){return r.a.post("/api/data",{token:e})},preformAuth:function(e){return r.a.post("/api/auth",{password:e})}}},325:function(e,a,t){},326:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(34),o=t.n(l),s=t(94),c=t(146),i=t(147),u=t(166),d=t(148),h=t(167),m=t(333),p=t(338),f=t(165),E=t(339),g=t(337),v=t(327),b=t(35),w=t(336),k=t(334),y=t(50),C=t(105),N=function(e){var a="",t="";switch(e.e.curriculum){case"FSF":a="Full-Stack Flex";break;case"FSF-FT":a="Full-Stack Flex Full-Time";break;case"ENT":a="Full-Stack Flex Other";break;case"UXUI":a="UX/UI";break;default:a="Other"}switch(e.e.host){case"panopto":t="Panopto";break;case"youtube":t="YouTube";break;default:t=""}return r.a.createElement(w.a,null,r.a.createElement(w.a.Content,null,r.a.createElement(w.a.Header,{as:"a",href:e.e.url},e.e.name),r.a.createElement(w.a.Meta,null,0===e.e.unit?r.a.createElement("span",null,r.a.createElement(b.a,{color:"purple",name:"map marker alternate"})," ",r.a.createElement("span",{className:"extra-note"},"Supplemental Video")):r.a.createElement("span",null,r.a.createElement(b.a,{color:"purple",name:"map marker alternate"})," ",r.a.createElement("span",{className:"extra-note"},"Unit ",e.e.unit,", Lesson ",e.e.lesson)),"GEN"===e.e.class?r.a.createElement("span",{className:"nopad"}):r.a.createElement("span",null,r.a.createElement(b.a,{color:"purple",name:"graduation cap"})," ",r.a.createElement("span",{className:"extra-note"},e.e.class)),"Other"===a?r.a.createElement("span",{className:"nopad"}):r.a.createElement("span",null,r.a.createElement(b.a,{color:"purple",name:"book"})," ",r.a.createElement("span",{className:"extra-note"},a)),r.a.createElement(b.a,{color:"purple",name:"calendar alternate"})," ",r.a.createElement("span",{className:"extra-note"},C(e.e.date,"YY-MM-DD").format("MMMM Do, YYYY"))),r.a.createElement(w.a.Extra,null,e.e.subcategory.map((function(e){return r.a.createElement(y.a,{key:e},e)})),function(){if(e.e.parts){var a=e.e.parts.map((function(a,t){return r.a.createElement("a",{href:e.e.parts[t],key:t},r.a.createElement(v.a,{inverted:!0,color:"blue",floated:"right",icon:!0,labelPosition:"right"},"Part ",t+2," ",r.a.createElement(b.a,{name:"right chevron"})))}));return r.a.createElement("span",null,a.reverse(),r.a.createElement("a",{href:e.e.url},r.a.createElement(v.a,{inverted:!0,color:"blue",floated:"right",icon:!0,labelPosition:"right"},"Part 1 ",""===t?"":"on ".concat(t)," ",r.a.createElement(b.a,{name:"right chevron"}))))}return r.a.createElement("a",{href:e.e.url},r.a.createElement(v.a,{inverted:!0,color:"blue",floated:"right",icon:!0,labelPosition:"right"},"Watch ",""===t?"":"on ".concat(t)," ",r.a.createElement(b.a,{name:"right chevron"})))}())))},D=t(105),F=t(286),P=t(287),x=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={repo:[],subcategories:[],lessons:[],classes:[],curricula:[],selectedSubcategory:"",selectedLesson:"",selectedClass:"",selectedCurriculum:"",currentDisplay:[],auth:!1,token:"",password:"",error:!1},t.handleChange=function(e,a){t.setState(Object(s.a)({},a.datafield,a.value))},t.handleFilter=function(){var e=t.state.selectedSubcategory,a=t.state.selectedLesson.split("."),n=t.state.selectedClass,r=t.state.selectedCurriculum,l=[];l=e?t.state.repo.filter((function(a){return a.subcategory.includes(e)})):t.state.repo,n&&(l=l.filter((function(e){return e.class===n}))),r&&(l=l.filter((function(e){return e.curriculum===r}))),a.length>1&&(l=l.filter((function(e){return e.unit===parseInt(a[0])&&e.lesson===parseInt(a[1])})));var o=t.sortByDate(l);t.setState({currentDisplay:o})},t.handleAuth=function(){P.default.preformAuth(t.state.password).then((function(e){e.data.auth?P.default.getData(e.data.token).then((function(a){var n=t.sortByDate(a.data.repo);t.setState({repo:a.data.repo,subcategories:a.data.subcategories,lessons:a.data.lessons,classes:a.data.classes,curricula:a.data.curricula,currentDisplay:n,auth:!0,token:e.data.token})})).catch((function(e){console.error(e)})):console.error(e.data)})).catch((function(e){console.error(e),t.setState({error:!0})}))},t.handlePasswordChange=function(e){t.setState(Object(s.a)({},e.target.name,e.target.value))},t.handleKeyPress=function(e){"Enter"===e.key&&t.handleAuth()},t.sortByDate=function(e){var a=e;return a.sort((function(e,a){var t=D(e.date,"YY-MM-DD").format("LL"),n=D(a.date,"YY-MM-DD").format("LL");return new Date(n)-new Date(t)})),a},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.auth?r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(p.a,null,r.a.createElement(p.a.Row,null,r.a.createElement(p.a.Column,{key:1},r.a.createElement(f.a,{src:F,size:"small",centered:!0}),r.a.createElement(E.a,{as:"h2",textAlign:"center"},r.a.createElement(E.a.Content,null,"Hannah Patellis' Instructional Video Library")),r.a.createElement("p",{className:"center-text"},"This is the private video library of web application development and UX/UI instructor Hannah Patellis.",r.a.createElement("br",null),"Videos in this library include in-class lecture recordings and supplemental videos."))),r.a.createElement("hr",null),r.a.createElement(p.a.Row,null,r.a.createElement(p.a.Column,{key:1},r.a.createElement(E.a,{as:"h4"},"Filter results"),r.a.createElement(g.a,{placeholder:"Class",search:!0,selection:!0,clearable:!0,options:this.state.classes,className:"filter-option",datafield:"selectedClass",onChange:this.handleChange}),r.a.createElement(g.a,{placeholder:"Lesson",search:!0,selection:!0,clearable:!0,options:this.state.lessons,className:"filter-option",datafield:"selectedLesson",onChange:this.handleChange}),r.a.createElement(g.a,{placeholder:"Subcategory",search:!0,selection:!0,clearable:!0,options:this.state.subcategories,className:"filter-option",datafield:"selectedSubcategory",onChange:this.handleChange}),r.a.createElement(g.a,{placeholder:"Curriculum",search:!0,selection:!0,clearable:!0,options:this.state.curricula,className:"filter-option",datafield:"selectedCurriculum",onChange:this.handleChange}),r.a.createElement(v.a,{color:"blue",floated:"right",icon:!0,labelPosition:"right",onClick:this.handleFilter},"Filter ",r.a.createElement(b.a,{name:"right chevron"})))),r.a.createElement("hr",null),r.a.createElement(p.a.Row,null,r.a.createElement(p.a.Column,{key:1},r.a.createElement(w.a.Group,{divided:!0},this.state.currentDisplay.length>0?this.state.currentDisplay.map((function(e){return r.a.createElement(N,{e:e,key:e._id})})):r.a.createElement("p",{className:"center-text"},"Nothing matching those filters was found."))))))):r.a.createElement("div",{className:"password-holder"},r.a.createElement(f.a,{src:F,size:"small",centered:!0}),this.state.error?r.a.createElement("p",{style:{color:"red"}},"Password is incorrect"):"",r.a.createElement(k.a,{className:"password-input",icon:r.a.createElement(b.a,{name:"chevron right",onClick:this.handleAuth,inverted:!0,circular:!0,link:!0}),onChange:this.handlePasswordChange,value:this.state.password,onKeyPress:this.handleKeyPress,name:"password",type:"password",placeholder:"Password"})))}}]),a}(r.a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(324),t(325);o.a.render(r.a.createElement(x,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");S?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):L(e)}))}}()}},[[177,1,2]]]);
//# sourceMappingURL=main.099c4b47.chunk.js.map