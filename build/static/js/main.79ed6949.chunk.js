(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),o=n(35),s=n.n(o),i=n(11),l=n(3),u=n(2),j=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){null!==localStorage.getItem("token")&&r(!0)}),[]),Object(a.jsxs)("nav",{children:[Object(a.jsx)("h1",{children:"Minesweeper"}),Object(a.jsx)("ul",{children:!0===n?Object(a.jsxs)(c.Fragment,{children:[" ",Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/game",children:"Games"})}),Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/logout",children:"Logout"})})]}):Object(a.jsxs)(c.Fragment,{children:[" ",Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/login",children:"Login"})}),Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/signup",children:"Signup"})})]})})]})},d=n(6),b=n.n(d),p=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(""),s=Object(u.a)(o,2),i=s[0],l=s[1],j=Object(c.useState)(!1),d=Object(u.a)(j,2),p=d[0],h=d[1],m=Object(c.useState)(!0),O=Object(u.a)(m,2),f=O[0],g=O[1];Object(c.useEffect)((function(){null!==localStorage.getItem("token")?window.location.replace("http://localhost:3000/game"):g(!1)}),[]);return Object(a.jsxs)("div",{children:[!1===f&&Object(a.jsx)("h1",{children:"Login"}),!0===p&&Object(a.jsx)("h2",{children:"Cannot log in with provided credentials"}),!1===f&&Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={email:n,password:i};b()({method:"post",url:"http://djminesbackend.respuestadigital.com.ar/api/v1/users/auth/login/",headers:{"Content-Type":"application/json"},data:JSON.stringify(t)}).then((function(e){return e.data})).then((function(e){e.key?(localStorage.clear(),localStorage.setItem("token",e.key),window.location.replace("http://localhost:3000/game")):(r(""),l(""),localStorage.clear(),h(!0))}))},children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email address:"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{name:"email",type:"email",value:n,required:!0,onChange:function(e){return r(e.target.value)}})," ",Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"password",children:"Password:"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{name:"password",type:"password",value:i,required:!0,onChange:function(e){return l(e.target.value)}})," ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit",value:"Login"})]})]})},h=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(""),s=Object(u.a)(o,2),i=s[0],l=s[1],j=Object(c.useState)(""),d=Object(u.a)(j,2),p=d[0],h=d[1],m=Object(c.useState)(!1),O=Object(u.a)(m,2),f=O[0],g=O[1],x=Object(c.useState)(!0),v=Object(u.a)(x,2),w=v[0],S=v[1];Object(c.useEffect)((function(){null!==localStorage.getItem("token")?window.location.replace("http://localhost:3000/game"):S(!1)}),[]);return Object(a.jsxs)("div",{children:[!1===w&&Object(a.jsx)("h1",{children:"Signup"}),!0===f&&Object(a.jsx)("h2",{children:"Cannot signup with provided credentials"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={email:n,password1:i,password2:p};b()({method:"post",url:"http://djminesbackend.respuestadigital.com.ar/api/v1/users/auth/register/",headers:{"Content-Type":"application/json"},data:JSON.stringify(t)}).then((function(e){return e.data})).then((function(e){e.key?(localStorage.clear(),localStorage.setItem("token",e.key),window.location.replace("http://localhost:3000/game")):(r(""),l(""),h(""),localStorage.clear(),g(!0))}))},children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email address:"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{name:"email",type:"email",value:n,onChange:function(e){return r(e.target.value)},required:!0})," ",Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"password1",children:"Password:"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{name:"password1",type:"password",value:i,onChange:function(e){return l(e.target.value)},required:!0})," ",Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"password2",children:"Confirm password:"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{name:"password2",type:"password",value:p,onChange:function(e){return h(e.target.value)},required:!0})," ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit",value:"Signup"})]})]})},m=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){null==localStorage.getItem("token")?window.location.replace("http://localhost:3000/login"):r(!1)}),[]);return Object(a.jsx)("div",{children:!1===n&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Are you sure you want to logout?"}),Object(a.jsx)("input",{type:"button",value:"Logout",onClick:function(e){e.preventDefault(),b()({method:"post",url:"http://djminesbackend.respuestadigital.com.ar/api/v1/users/auth/logout/",headers:{Authorization:"Token ".concat(localStorage.getItem("token")),"Content-Type":"application/json"}}).then((function(e){return e.data})).then((function(e){localStorage.clear(),window.location.replace("http://localhost:3000/login")}));b.a.interceptors.response.use((function(e){return e}),(function(e){return function(e){return 401===e.response.status&&(localStorage.clear(),window.location.replace("http://localhost:3000/login")),Promise.reject(e)}(e)}))}})]})})},O=n(5),f=n.n(O),g=n(12),x=function(e){return b()({method:"delete",url:"http://djminesbackend.respuestadigital.com.ar/api/v1/users/games/".concat(e),headers:{Authorization:"Token ".concat(localStorage.getItem("token")),"Content-Type":"application/json"}})},v=function(e){return b()({method:"post",url:"http://djminesbackend.respuestadigital.com.ar/api/v1/users/games/",headers:{Authorization:"Token ".concat(localStorage.getItem("token")),"Content-Type":"application/json"},data:JSON.stringify({useremail:e.useremail,rows:e.rows,columns:e.columns,mines:e.mines})}).then((function(e){return e.data}))},w=function(e,t,n){var a=JSON.stringify(n);return console.log(a),b()({method:"put",url:"http://djminesbackend.respuestadigital.com.ar/api/v1/users/games/".concat(e,"/"),headers:{Authorization:"Token ".concat(localStorage.getItem("token")),"Content-Type":"application/json"},data:JSON.stringify({state:t,state_board:a})}).then((function(e){return e.data}))},S=function(e){return function(){return e.apply(void 0,arguments).catch((function(e){console.error(e)}))}},y=n(17),k=function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),r=n[0],o=n[1],s=Object(c.useState)(!0),l=Object(u.a)(s,2),j=l[0],d=l[1];Object(c.useEffect)((function(){S(function(){var e=Object(g.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()({method:"get",url:"http://djminesbackend.respuestadigital.com.ar/api/v1/users/games/",headers:{Authorization:"Token ".concat(localStorage.getItem("token")),"Content-Type":"application/json"}}).then((function(e){return e.data}));case 2:t=e.sent,o(t),d(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())}),[e.propForceUpdate]),console.log(r),console.log(e.propForceUpdate);return Object(a.jsx)("div",{children:!1===j&&r&&Object(a.jsx)(a.Fragment,{children:r.map((function(t,n){return Object(a.jsxs)("div",{children:[Object(a.jsx)(i.b,{to:"/board/".concat(t.id),children:"".concat((c=t.state,"NOT_STARTED"===c?"Play game ":"STARTED"===c?"Resume game ":"LOST"===c?"View lost game ":"WON"===c?"View won game ":"Game in invalid state")," #").concat(t.id," ")}),"Created on:".concat(t.start_str_ser,". With ").concat(t.rows," rows, ").concat(t.columns," columns, and ").concat(t.mines," mines"),Object(a.jsx)("button",{onClick:function(){return n=t.id,void S(function(){var t=Object(g.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(n);case 2:t.sent,alert("Game deleted"),e.onGameListChange();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()());var n},children:Object(a.jsx)(y.c,{className:"has-text-primary"})})]},t.id);var c}))})})},C=n(18),T=n(24),F=function(e){var t=Object(c.useState)({rows:2,columns:2,mines:2}),n=Object(u.a)(t,2),r=n[0],o=n[1],s=function(e){var t=Object(T.a)(Object(T.a)({},r),{},Object(C.a)({},e.target.id,e.target.value));o(t)},i=function(){var t={useremail:e.userEmail,rows:r.rows,columns:r.columns,mines:r.mines};S(function(){var e=Object(g.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:n=e.sent,console.log("----------------"),console.log(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"Customize your next match!"}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r.mines>r.columns*r.rows-1?alert("You have selected too many mines (".concat(r.mines,") for a board of ").concat(r.rows," X ").concat(r.columns," cells")):(i(),e.onGameListChange(),alert("Game created!!"))},children:[Object(a.jsx)("label",{htmlFor:"rows",children:"Rows"}),Object(a.jsxs)("select",{id:"rows",value:r.rows,onChange:s,children:[Object(a.jsx)("option",{children:"2"}),Object(a.jsx)("option",{children:"3"}),Object(a.jsx)("option",{children:"4"}),Object(a.jsx)("option",{children:"5"}),Object(a.jsx)("option",{children:"6"}),Object(a.jsx)("option",{children:"7"}),Object(a.jsx)("option",{children:"8"}),Object(a.jsx)("option",{children:"9"})]}),Object(a.jsx)("label",{htmlFor:"columns",children:"Columns"}),Object(a.jsxs)("select",{id:"columns",value:r.columns,onChange:s,children:[Object(a.jsx)("option",{children:"2"}),Object(a.jsx)("option",{children:"3"}),Object(a.jsx)("option",{children:"4"}),Object(a.jsx)("option",{children:"5"}),Object(a.jsx)("option",{children:"6"}),Object(a.jsx)("option",{children:"7"}),Object(a.jsx)("option",{children:"8"}),Object(a.jsx)("option",{children:"9"})]}),Object(a.jsx)("label",{htmlFor:"mines",children:"Mines"}),Object(a.jsxs)("select",{id:"mines",value:r.mines,onChange:s,children:[Object(a.jsx)("option",{children:"2"}),Object(a.jsx)("option",{children:"3"}),Object(a.jsx)("option",{children:"4"}),Object(a.jsx)("option",{children:"5"}),Object(a.jsx)("option",{children:"6"}),Object(a.jsx)("option",{children:"7"}),Object(a.jsx)("option",{children:"8"}),Object(a.jsx)("option",{children:"9"})]}),Object(a.jsx)("button",{children:"Create new game"})]})]})},N=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(!0),s=Object(u.a)(o,2),i=s[0],l=s[1],j=Object(c.useState)(0),d=Object(u.a)(j,2),p=d[0],h=d[1];Object(c.useEffect)((function(){null===localStorage.getItem("token")?window.location.replace("http://localhost:3000/login"):S(function(){var e=Object(g.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()({method:"get",url:"http://djminesbackend.respuestadigital.com.ar/api/v1/users/auth/user/",headers:{Authorization:"Token ".concat(localStorage.getItem("token")),"Content-Type":"application/json"}}).then((function(e){return e.data}));case 2:t=e.sent,r(t.email),l(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())}),[]);var m=function(){h(p+1)};return Object(a.jsx)("div",{children:!1===i&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Games"}),Object(a.jsx)(F,{userEmail:n,onGameListChange:function(){return m()}}),Object(a.jsxs)("h2",{children:["Hello ",n,"! your games:"]}),Object(a.jsx)(k,{propForceUpdate:p,onGameListChange:function(){return m()}})]})})},M=n(36),E=function(e){var t="cell"+(e.cellData.isRevealed?"":" hidden")+(e.cellData.isMine?" is-mine":"")+(e.cellData.isFlagged?" is-flag":"");return Object(a.jsx)("div",{className:t,onClick:e.onClick,onContextMenu:e.contextMenu,children:e.cellData.isRevealed?e.cellData.isMine?Object(a.jsx)(y.a,{className:"has-text-primary"}):0===e.cellData.nearbyMines?null:e.cellData.nearbyMines:e.cellData.isFlagged?Object(a.jsx)(y.b,{className:"has-text-primary"}):null})},D=M.a.div.withConfig({displayName:"Board__StyledGame",componentId:"sc-1u8e7q5-0"})(["max-width:","px;display:flex;flex-direction:column;margin:0 auto;"],(function(e){return 40*e.columns})),R=function(){var e=Object(l.f)().id,t=Object(c.useState)({}),n=Object(u.a)(t,2),r=n[0],o=n[1],s=Object(c.useState)({}),i=Object(u.a)(s,2),j=i[0],d=i[1],p=Object(c.useState)(!0),h=Object(u.a)(p,2),m=h[0],O=h[1],x=Object(c.useState)(0),v=Object(u.a)(x,2),y=v[0],k=v[1];Object(c.useEffect)((function(){S(function(){var t=Object(g.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a=e,b()({method:"get",url:"http://djminesbackend.respuestadigital.com.ar/api/v1/users/games/".concat(a),headers:{Authorization:"Token ".concat(localStorage.getItem("token")),"Content-Type":"application/json"}}).then((function(e){return e.data}));case 2:n=t.sent,o(n);case 4:case"end":return t.stop()}var a}),t)})));return function(){return t.apply(this,arguments)}}()())}),[e]),Object(c.useEffect)((function(){if("NOT_STARTED"===r.state){var e={won:!1,lost:!1,board:function(e,t,n){for(var a=new Array(e),c=0;c<e;c++){a[c]=new Array(t);for(var r=0;r<t;r++)a[c][r]={childen_key:"(".concat(c,":").concat(r,")"),row:c,column:r,isMine:!1,nearbyMines:0,isRevealed:!1,isEmpty:!1,isFlagged:!1}}return function(e,t,n){for(var a=e,c=0;c<t;c++)for(var r=0;r<n;r++)if(!0!==e[c][r].isMine){var o=R(c,r,t,n,e).reduce((function(e,t){return t.isMine?e+1:e}),0);0===o&&(a[c][r].isEmpty=!0),a[c][r].nearbyMines=o}return a}(a=F(a,e,t,n),e,t)}(r.rows,r.columns,r.mines)};d(e)}else if("STARTED"===r.state){var t={won:!1,lost:!1,board:JSON.parse(r.state_board)};d(t)}else if("WON"===r.state){var n={won:!0,lost:!1,board:JSON.parse(r.state_board)};d(n)}else if("LOST"===r.state){var a={won:!1,lost:!0,board:JSON.parse(r.state_board)};d(a)}O(!1)}),[r]);var C,T,F=function(e,t,n,a){for(var c,r,o=0;o<a;)c=Math.floor(Math.random()*t),r=Math.floor(Math.random()*n),e[c][r].isMine||(e[c][r].isMine=!0,o++);return e},N=function(){console.log("revealBoard");var e=j;e.board.map((function(e){e.map((function(e){e.isRevealed=!0}))})),k(y+1),d(e)},M=function e(t,n,a,c,r){return R(t,n,a,c,r).map((function(t){t.isRevealed||!t.isEmpty&&t.isMine||(r[t.row][t.column].isRevealed=!0,r[t.row][t.column].isFlagged=!1,t.isEmpty&&e(t.row,t.column,a,c,r))})),r},R=function(e,t,n,a,c){var r=[];return e>0&&r.push(c[e-1][t]),e<n-1&&r.push(c[e+1][t]),t>0&&r.push(c[e][t-1]),t<a-1&&r.push(c[e][t+1]),e>0&&t>0&&r.push(c[e-1][t-1]),e>0&&t<a-1&&r.push(c[e-1][t+1]),e<n-1&&t>0&&r.push(c[e+1][t-1]),e<n-1&&t<a-1&&r.push(c[e+1][t+1]),r},A=function(e){var t=[];return e.map((function(e){e.map((function(e){e.isRevealed||t.push(e)}))})),t},I=function(e,t){var n=r.rows,a=r.columns,c=r.mines,o=!1,s=!1;if(j.board[e][t].isRevealed)return null;j.board[e][t].isMine&&(N(),alert("Game over"),s=!0);var i,l=j;l.board[e][t].isFlagged=!1,l.board[e][t].isRevealed=!0,l.board[e][t].isEmpty&&(l.board=M(e,t,n,a,l.board)),i=l.board,A(i).reduce((function(e,t){return t.isRevealed?e:e+1}),0)===c&&(o=!0,N(),alert("You Win")),l.won=o,l.lost=s,d(l),G(),k(y+1)},L=function(e,t,n){e.preventDefault(),console.log("handleContextMenu");var a,c=r.mines,o=j,s=!1;if(o.board[t][n].isRevealed)return null;if(o.board[t][n].isFlagged?o.board[t][n].isFlagged=!1:o.board[t][n].isFlagged=!0,a=o.board,A(a).reduce((function(e,t){return t.isFlagged?e+1:e}),0)===c){var i=A(o.board).map((function(e){if(e.isMine)return e})),l=A(o.board).map((function(e){if(e.isFlagged)return e}));(s=JSON.stringify(i)===JSON.stringify(l))&&(N(),alert("You win"))}o.won=s,d(o),G(),k(y+1)},G=function(){var e="";e=j.won?"WON":j.lost?"LOST":"STARTED",S(function(){var t=Object(g.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(r.id,e,j.board);case 2:n=t.sent,console.log(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()())};return Object(a.jsx)("div",{children:!1===m&&Object(a.jsx)(a.Fragment,{children:j&&Object(a.jsx)(D,{columns:r.columns,children:Object(a.jsxs)("div",{className:"board",children:[Object(a.jsxs)("div",{className:"game-info",children:[Object(a.jsxs)("span",{className:"info",children:["Game #",r.id," mines: ",r.mines]}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{className:"info",children:j.won?"You Win!":""}),Object(a.jsx)("span",{className:"info",children:j.lost?"You Lose!":""})]}),j&&j.board&&(C=j.board,r.rows,T=y,console.log("drawboard (".concat(T,")")),console.log(C),C.map((function(e){return e.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsx)(E,{cellData:e,revealed:e.isRevealed,onClick:function(){return I(e.row,e.column)},contextMenu:function(t){return L(t,e.row,e.column)}})},"".concat(e.childen_key))}))})))]})})})})},A=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(i.a,{children:[Object(a.jsx)(j,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/login",exact:!0,children:Object(a.jsx)(p,{})}),Object(a.jsx)(l.a,{path:"/signup",exact:!0,children:Object(a.jsx)(h,{})}),Object(a.jsx)(l.a,{path:"/logout",exact:!0,children:Object(a.jsx)(m,{})}),Object(a.jsx)(l.a,{path:"/game",exact:!0,children:Object(a.jsx)(N,{})}),Object(a.jsx)(l.a,{path:"/board/:id",children:Object(a.jsx)(R,{})})]})]})})};n(69);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.79ed6949.chunk.js.map