(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),s=n(10),r=n.n(s),u=(n(18),n(19),n.p+"static/media/bomb.aef667a1.svg"),o=n(3),l=n(2),d=n(11),f=n(12),j=n(4),b=10;function O(){return function(e){for(var t,n,c=e.length;0!==c;)n=Math.floor(Math.random()*c),t=e[c-=1],e[c]=e[n],e[n]=t;return e}(Object(j.a)(Array(9)).map((function(){return Object(j.a)(Array(8)).map((function(){return Math.random()>.7&&b>0?(b--,1):0}))})))}var m=new(function(){function e(){var t=this;Object(d.a)(this,e),this.fieldState=O(),this.gameState="NEW_GAME",this.openedCells=new Map,this.minesCount=t.fieldState.reduce((function(e,t){return t.forEach((function(t){return 1===t?e+=1:null})),e}),0),Object(l.d)(this)}return Object(f.a)(e,[{key:"setOpenedCells",value:function(e,t){this.openedCells.set(e,t),62===this.openedCells.size&&0===this.minesCount&&this.setGameState("GAME_WON")}},{key:"setNumOfMines",value:function(e){this.minesCount+=e}},{key:"checkMine",value:function(e,t){return 1===this.fieldState[e][t]}},{key:"setGameState",value:function(e){this.gameState=e}},{key:"setUpGameBoard",value:function(){b=10,this.openedCells.clear(),this.fieldState=O(),this.setGameState("GAME_RESET"),this.minesCount=this.numOfMines}},{key:"numOfMines",get:function(){return this.fieldState.reduce((function(e,t){return t.forEach((function(t){return 1===t?e+=1:null})),e}),0)}},{key:"currentStatus",get:function(){return this.gameState}}]),e}()),v=n.p+"static/media/smiley1.f638023b.svg",h=n.p+"static/media/smiley.d9b690fe.svg",S=n.p+"static/media/smiley3.53fbd8b7.svg",E=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){Object(l.b)((function(){switch(m.currentStatus){case"IN_PROGRESS":i(h);break;case"GAME_OVER":i(S);break;case"NEW_GAME":case"GAME_RESET":i(v)}}))}),[]),Object(c.jsx)("div",{className:"reset-btn",children:Object(c.jsx)("button",{className:"reset-btn",children:Object(c.jsx)("img",{style:{maxWidth:"100%",cursor:"pointer"},src:n,alt:"my image",onClick:function(){return m.setUpGameBoard()}})})})},p=n(23),M=Object(p.a)((function(){return Object(c.jsx)("div",{className:"flag-counter",children:Object(c.jsxs)("button",{children:["\ud83d\udca3",m.minesCount]})})})),N=Object(p.a)((function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){var e=0;Object(l.b)((function(){switch(m.currentStatus){case"IN_PROGRESS":e=window.setInterval((function(){return i((function(e){return e+1}))}),1e3);break;case"GAME_OVER":window.clearInterval(e);break;case"GAME_RESET":window.clearInterval(e),i(0);break;case"GAME_WON":console.log("WON!")}return function(){window.clearInterval(e)}}))}),[]),Object(c.jsx)("div",{className:"timer",children:n>59?"".concat(Math.floor(n/60),":").concat(n%60<10?"0"+n%60:n%60):n<10?"0:0"+n:"0:"+n})})),x=function(){return Object(c.jsxs)("div",{className:"control-panel",children:[Object(c.jsxs)("div",{className:"name_logo",children:[Object(c.jsx)("span",{className:"logo-span",children:"Minesweeper"})," ",Object(c.jsx)("img",{src:u,className:"App-logo",alt:"logo"})]}),Object(c.jsxs)("div",{className:"props",children:[Object(c.jsx)(M,{}),Object(c.jsx)(E,{}),Object(c.jsx)(N,{})]})]})},G=n(22),g=function(e,t){var n,c,a,i,s,r,u,o,l,d,f,j,b,O,v,h,S=0;return t+1<=7&&1===(null===(n=m.fieldState)||void 0===n||null===(c=n[e])||void 0===c?void 0:c[t+1])&&(S+=1),t-1>=0&&1===(null===(a=m.fieldState)||void 0===a||null===(i=a[e])||void 0===i?void 0:i[t-1])&&(S+=1),e+1<=8&&1===(null===(s=m.fieldState)||void 0===s||null===(r=s[e+1])||void 0===r?void 0:r[t])&&(S+=1),e-1>=0&&1===(null===(u=m.fieldState)||void 0===u||null===(o=u[e-1])||void 0===o?void 0:o[t])&&(S+=1),e+1<=8&&t+1<=7&&1===(null===(l=m.fieldState)||void 0===l||null===(d=l[e+1])||void 0===d?void 0:d[t+1])&&(S+=1),e+1<=8&&t-1>=0&&1===(null===(f=m.fieldState)||void 0===f||null===(j=f[e+1])||void 0===j?void 0:j[t-1])&&(S+=1),e-1>=0&&t+1<=7&&1===(null===(b=m.fieldState)||void 0===b||null===(O=b[e-1])||void 0===O?void 0:O[t+1])&&(S+=1),e-1>=0&&t-1>=0&&1===(null===(v=m.fieldState)||void 0===v||null===(h=v[e-1])||void 0===h?void 0:h[t-1])&&(S+=1),S},k=function e(t,n){if(!m.openedCells.has(Number("".concat(t).concat(n)))){var c=g(t,n);c>0?m.setOpenedCells(Number("".concat(t).concat(n)),c):(0===c&&m.setOpenedCells(Number("".concat(t).concat(n)),c),n+1<=7&&e(t,n+1),n-1>=0&&e(t,n-1),t+1<=8&&e(t+1,n),t-1>=0&&e(t-1,n),t+1<=8&&n+1<=7&&e(t+1,n+1),t+1<=8&&n-1>=0&&e(t+1,n-1),t-1>=0&&n+1<=7&&e(t-1,n+1),t-1>=0&&n-1>=0&&e(t-1,n-1))}},A=Object(p.a)((function(e){var t=e.dataCellId,n=e.first,i=e.second,s=Object(G.a)((function(){return{mine:m.checkMine(n,i)}})),r=Object(a.useState)(null),u=Object(o.a)(r,2),d=u[0],f=u[1],j=Object(a.useState)(""),b=Object(o.a)(j,2),O=b[0],v=b[1],h=Object(a.useState)((function(){return g(n,i)})),S=Object(o.a)(h,2),E=S[0],p=S[1];return Object(a.useEffect)((function(){Object(l.b)((function(){"GAME_RESET"===m.currentStatus&&(s.mine=m.checkMine(n,i),p(g(n,i)),f(null),v(""))}))}),[]),Object(a.useEffect)((function(){Object(l.f)((function(){return m.openedCells.get(t)}),(function(e){void 0!==e&&(f("opened"),0!==e&&v(e))}))}),[]),Object(a.useEffect)((function(){Object(l.f)((function(){return m.currentStatus}),(function(e){"GAME_OVER"===e&&s.mine&&f("fired")}))}),[]),Object(c.jsx)("div",{className:"cell"+(d?" "+d:""),"data-cell-id":t,onClick:function(){if(!d&&"GAME_OVER"!==m.currentStatus){if(!s.mine||"NEW_GAME"!==m.currentStatus&&"GAME_RESET"!==m.currentStatus||m.setUpGameBoard(),s.mine&&"IN_PROGRESS"===m.currentStatus)return f("fired"),void m.setGameState("GAME_OVER");m.setGameState("IN_PROGRESS"),f("opened"),v(E>0?E:""),0!==E&&m.setOpenedCells(Number("".concat(n).concat(i)),E),0===E&&k(n,i)}},onContextMenu:function(e){"marked"!==d&&null!==d||"GAME_OVER"===m.currentStatus||(e.preventDefault(),"marked"===d&&(f(null),m.setNumOfMines(1)),"marked"!==d&&0!==m.minesCount&&(f("marked"),m.setNumOfMines(-1)))},children:O&&O})})),C=n(7),_=function(e){var t=e.dataId,n=Object(j.a)(Array(8)).map((function(e,n){return Object(c.jsx)(A,{dataCellId:Number("".concat(t).concat(n)),first:t,second:n},Object(C.a)())}));return Object(c.jsx)(c.Fragment,{children:n})},R=Object(p.a)((function(){var e=Object(j.a)(Array(9)).map((function(e,t){return Object(c.jsx)(_,{dataId:t},Object(C.a)())}));return Object(c.jsx)("div",{className:"field",children:e})})),w=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("header",{className:"App-header",children:Object(c.jsxs)("div",{className:"game",children:[Object(c.jsx)(x,{}),Object(c.jsx)(R,{})]})})})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root"))}},[[21,1,2]]]);