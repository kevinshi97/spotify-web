(this["webpackJsonpspotify-web"]=this["webpackJsonpspotify-web"]||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),c=n.n(r),i=(n(17),n(6)),s=n(7),l=n(11),p=n(10),u=n(8),d=n.n(u),m=(n(18),n(22));var h=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.tsx")," and save to reload."),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"),o.a.createElement(m.a,{variant:"primary"},"Primary")," "))}},{key:"componentDidMount",value:function(){var e=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}(16);localStorage.setItem("spotify_auth_state",e);var t="https://accounts.spotify.com/authorize?client_id=c9d669bd262842b7a7ccd54a046eceb3&redirect";t+="?response_type=token&client_id="+encodeURIComponent("c9d669bd262842b7a7ccd54a046eceb3")+"&scope="+encodeURIComponent("http://kevinshi97.github.io/spotify-web")+"&state="+encodeURIComponent(e),fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e)}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(19);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.fc12dcd3.chunk.js.map