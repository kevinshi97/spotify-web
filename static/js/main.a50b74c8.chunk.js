(this["webpackJsonpspotify-web"]=this["webpackJsonpspotify-web"]||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},23:function(e,t,n){e.exports=n(36)},28:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),c=n.n(r),i=(n(28),n(8)),l=n(9),s=n(11),p=n(10),u=n(19),m=n.n(u),d=(n(29),n(38)),h=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.tsx")," and save to reload."),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"),o.a.createElement(d.a,{variant:"primary"},"Primary")," "))}},{key:"componentDidMount",value:function(){var e=new URLSearchParams(window.location.hash.replace("#","?")),t=e.get("access_token"),n=e.get("token_type"),a=e.get("expires_in"),o=e.get("state");console.log("access_token: ",t),console.log("token_type: ",n),console.log("expires_in: ",a),console.log("returned_state: ",o)}}]),n}(a.Component),f=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null)}},{key:"componentDidMount",value:function(){var e=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}(16);localStorage.setItem("spotify_auth_state",e);var t="https://accounts.spotify.com/authorize";t+="?response_type=token&client_id="+encodeURIComponent("287daee6bafd4ce48e000a00a40d3f6f")+"&redirect_uri="+encodeURIComponent("http://kevinshi97.github.io/spotify-web/web")+"&state="+encodeURIComponent(e),window.location.href=t}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(30);var g=n(21),v=n(2);function b(){return o.a.createElement(g.a,null,o.a.createElement(v.a,{path:"/",exact:!0,component:f}),o.a.createElement(v.a,{path:"/web",component:h}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.a50b74c8.chunk.js.map