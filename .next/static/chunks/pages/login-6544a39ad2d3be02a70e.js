(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{9496:function(n,e,t){"use strict";t.d(e,{Z:function(){return k}});var s=t(5861),a=t(7757),r=t.n(a),i=t(9008),c=t(1664),l=t(1163),o=t(9410),u=t.n(o),d=t(7294),h=(t(9704),t(9669)),f=t.n(h);function p(n){return v.apply(this,arguments)}function v(){return(v=(0,s.Z)(r().mark((function n(e){var t;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f().get("http://localhost:3000/api/auth/verify",{headers:{Authorization:e}}).then((function(n){return n.data})).catch((function(n){return!1}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var x=t(1955),m=t(5893);function j(){var n=(0,l.useRouter)(),e=(0,d.useState)(!1),t=e[0],a=e[1];function i(){return(i=(0,s.Z)(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),x.Z.remove("token"),x.Z.remove("user"),n.push("/");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,d.useEffect)((0,s.Z)(r().mark((function n(){var e;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e=x.Z.get("token"))){n.next=7;break}return n.t0=a,n.next=5,p(e);case 5:n.t1=n.sent,(0,n.t0)(n.t1);case 7:case"end":return n.stop()}}),n)}))),[]),(0,m.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[(0,m.jsxs)("div",{className:"container-fluid",children:[(0,m.jsx)("a",{className:"navbar-brand",href:"#",children:"Mystore"}),(0,m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:(0,m.jsxs)("ul",{class:"nav nav-pills",children:[(0,m.jsx)("li",{class:"nav-item",children:(0,m.jsx)(c.default,{href:"/",children:(0,m.jsx)("a",{className:"/"==n.pathname?"nav-link active "+u().linkactive:"nav-link","aria-current":"page",children:"Home"})})}),t?(0,m.jsx)("li",{class:"nav-item",children:(0,m.jsx)(c.default,{href:"/cart/user/"+t.id,children:(0,m.jsx)("a",{className:"/cart/user/[userid]"==n.pathname?"nav-link active "+u().linkactive:"nav-link",children:"Cart"})})}):"",(0,m.jsx)("li",{class:"nav-item",children:(0,m.jsx)(c.default,{href:"/about",children:(0,m.jsx)("a",{className:"/about"==n.pathname?"nav-link active "+u().linkactive:"nav-link",children:"About"})})})]})})]}),t?(0,m.jsx)("form",{class:"d-flex",children:(0,m.jsx)("button",{class:"btn btn-outline-success",type:"submit",onClick:function(n){return i.apply(this,arguments)},children:"Logout"})}):(0,m.jsx)(c.default,{href:"/login",children:(0,m.jsx)("a",{className:"nav-link",children:"Login"})})]})}var b=t(5988);function g(){return(0,m.jsxs)("footer",{class:"d-flex flex-wrap justify-content-between align-items-center",className:"jsx-662788771",children:[(0,m.jsx)(b.default,{id:"662788771",children:["span.jsx-662788771{font-weight :bold;}"]}),(0,m.jsx)("div",{class:"col-md-4 d-flex align-items-center",className:"jsx-662788771",children:(0,m.jsx)("span",{class:"text-muted",style:{backgroundColor:"aqua"},className:"jsx-662788771",children:"\xa9 2021 Company, Inc"})})]})}function k(n){var e=n.children;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i.default,{children:[(0,m.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU",crossorigin:"anonymous"}),(0,m.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js",integrity:"sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ",crossorigin:"anonymous"})]}),(0,m.jsx)(j,{}),(0,m.jsx)("div",{className:"container",children:e}),(0,m.jsx)(g,{})]})}},28:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return f}});var s=t(5861),a=t(7757),r=t.n(a),i=(t(9008),t(1664),t(9669)),c=t.n(i),l=t(9496),o=t(7294),u=t(1955),d=t(1163),h=t(5893);function f(){var n=(0,o.useState)(""),e=n[0],t=n[1],a=(0,o.useState)(""),i=a[0],f=a[1];function p(){return(p=(0,s.Z)(r().mark((function n(t){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),c().post("https://fullweb.herokuapp.com/api/auth",{email:e,password:i}).then((function(n){console.log(n),u.Z.set("token","Bearer "+n.data.token),u.Z.set("user",JSON.stringify(n.data.data)),d.default.push("/")})).catch((function(n){alert("Wrong email and password")}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,h.jsx)(l.Z,{children:(0,h.jsxs)("form",{class:"row g-3",children:[(0,h.jsxs)("div",{class:"col-auto",children:[(0,h.jsx)("label",{for:"staticEmail2",class:"visually-hidden",children:"Email"}),(0,h.jsx)("input",{type:"email",readonly:!0,class:"form-control",id:"staticEmail2",onChange:function(n){return t(n.target.value)}})]}),(0,h.jsxs)("div",{class:"col-auto",children:[(0,h.jsx)("label",{for:"inputPassword2",class:"visually-hidden",children:"Password"}),(0,h.jsx)("input",{type:"password",class:"form-control",id:"inputPassword2",placeholder:"Password",onChange:function(n){return f(n.target.value)}})]}),(0,h.jsx)("div",{class:"col-auto",children:(0,h.jsx)("button",{type:"submit",class:"btn btn-primary mb-3",onClick:function(n){return p.apply(this,arguments)},children:"Login"})})]})})}},4917:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(28)}])},9410:function(n){n.exports={linkactive:"header_linkactive__1nBg4"}},950:function(){},6601:function(){},9214:function(){},8623:function(){},7748:function(){},5568:function(){},6619:function(){},7108:function(){},2361:function(){},4616:function(){}},function(n){n.O(0,[774,86,888,179],(function(){return e=4917,n(n.s=e);var e}));var e=n.O();_N_E=e}]);