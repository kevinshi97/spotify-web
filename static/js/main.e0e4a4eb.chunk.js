(this["webpackJsonpspotify-web"]=this["webpackJsonpspotify-web"]||[]).push([[0],{134:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},175:function(e,t,a){e.exports=a(363)},180:function(e,t,a){},181:function(e,t,a){},361:function(e,t,a){},363:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),o=a(50),r=a.n(o),i=(a(180),a(15)),c=a(16),u=a(54),l=a(53),h=a(134),p=a.n(h),d=(a(181),a(135)),m=a(147),f=function(){function e(){Object(i.a)(this,e),this.client_id="287daee6bafd4ce48e000a00a40d3f6f",this.redirect_uri="http://kevinshi97.github.io/spotify-web",this.scopes="user-top-read user-follow-read user-library-read",this.state=this.generateRandomString(16),this.auth_url="https://accounts.spotify.com/authorize?response_type=token&client_id="+encodeURIComponent(this.client_id)+"&redirect_uri="+encodeURIComponent(this.redirect_uri)+"&state="+encodeURIComponent(this.state)+"&scope="+encodeURIComponent(this.scopes),this.access_token=null,this.token_type=null,this.expires_in=null,this.returned_state=null,this.stored_state=null;var t=new URLSearchParams(window.location.hash.replace("#","?"));this.access_token=t.get("access_token"),this.token_type=t.get("token_type"),this.expires_in=t.get("expires_in"),this.returned_state=t.get("state"),this.stored_state=localStorage.getItem("spotify_auth_state")}return Object(c.a)(e,[{key:"logIn",value:function(){localStorage.setItem("spotify_auth_state",this.state),window.location.href=this.auth_url}},{key:"generateRandomString",value:function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*a.length));return t}},{key:"isLoggedIn",get:function(){return this.access_token&&this.stored_state===this.returned_state||!1}}],[{key:"Instance",get:function(){return this._instance||(this._instance=new this)}}]),e}();f._instance=void 0;var _,g=f.Instance;!function(e){e.short_term="short_term",e.medium_term="medium_term",e.long_term="long_term"}(_||(_={}));var k=function(){function e(t){Object(i.a)(this,e),this.access_token=null,this.token_type=null,this.expires_in=null,this.returned_state=null,this.stored_state=null,this.app=void 0,this.app=t,this.access_token=g.access_token,this.token_type=g.token_type,this.expires_in=g.expires_in,this.returned_state=g.returned_state,this.stored_state=g.stored_state}return Object(c.a)(e,[{key:"logIn",value:function(){g.logIn()}},{key:"getTopTracks",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_.medium_term;if(t<1||t>50||a<0||a>t)console.log("invalid params");else{var s="https://api.spotify.com/v1/me/top/tracks?&limit="+encodeURIComponent(t)+"&offset="+encodeURIComponent(a)+"&time_range="+encodeURIComponent(n),o={headers:{Authorization:"Bearer "+this.access_token},method:"GET"};fetch(s,o).then((function(e){return e.json()})).then((function(t){var a=t.items;e.app.setState({tracks:a,curr_track:a[0]||null}),console.log(e.app.state.tracks),console.log(e.app.state.curr_track)}))}}},{key:"getAudioFeature",value:function(e){var t=this,a=e.uri.split(":").pop()||"";console.log(a);var n="https://api.spotify.com/v1/audio-features/"+encodeURI(a),s={headers:{Authorization:"Bearer "+this.access_token},method:"GET"};fetch(n,s).then((function(e){return e.json()})).then((function(e){var a=e;console.log(a),t.app.setState({curr_audio_features:a})}))}},{key:"isLoggedIn",get:function(){return g.isLoggedIn}}]),e}(),v=a(18),y=(a(361),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={audio_features:n.props.audio_features,track:n.props.track},n}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"graph-container"},s.a.createElement(v.f,null,s.a.createElement(v.e,{data:this.state.data},s.a.createElement(v.b,null),s.a.createElement(v.a,{dataKey:"feature"}),s.a.createElement(v.c,{angle:18,domain:[0,1],tick:!1}),s.a.createElement(v.d,{name:this.props.track?this.props.track.name:"",dataKey:"A",stroke:"#82ca9d",fill:"#82ca9d",fillOpacity:.6}),s.a.createElement(v.g,{scaleToFit:!0})))),s.a.createElement("div",{className:"song-container"},s.a.createElement("img",{src:this.state.image,className:"album-logo",alt:"logo"}),s.a.createElement("a",{href:this.state.url,target:"_blank",rel:"noopener noreferrer"},this.state.name)))}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){this.props.track&&this.props.track!==e.track&&(this.props.track.external_urls&&this.props.track.name&&this.setState({name:this.props.track.name,url:this.props.track.external_urls.spotify||"#"}),this.props.track.album.images&&this.setState({image:this.props.track.album.images[0].url})),this.props.audio_features&&this.props.audio_features!==e.audio_features&&this.updateGraph()}},{key:"updateGraph",value:function(){var e,t,a,n,s,o,r,i=this,c=(null===(e=this.props.audio_features)||void 0===e||e.mode,null===(t=this.props.audio_features)||void 0===t||t.tempo,(null===(a=this.props.audio_features)||void 0===a?void 0:a.tempo)||0),u=[{feature:"valence",A:null===(n=this.props.audio_features)||void 0===n?void 0:n.valence,fullMark:1},{feature:"danceability",A:null===(s=this.props.audio_features)||void 0===s?void 0:s.danceability,fullMark:1},{feature:"energy",A:null===(o=this.props.audio_features)||void 0===o?void 0:o.danceability,fullMark:1},{feature:"acousticness",A:null===(r=this.props.audio_features)||void 0===r?void 0:r.acousticness,fullMark:1},{feature:"tempo",A:c/250,fullMark:1}];this.setState({data:u},(function(){console.log(i.state.data),console.log(u)}))}}]),a}(n.Component)),b=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).changeTheme=function(){n.setState({dark:!n.state.dark})},n.state={loggedIn:!1,dark:!1,query_top_limit:50,query_top_offset:0,query_top_timerange:_.short_term},n}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header ".concat(this.state.dark?"":"dark")},s.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),s.a.createElement("p",null,"Edit ",s.a.createElement("code",null,"src/App.tsx")," and save to reload."),s.a.createElement(y,{audio_features:this.state.curr_audio_features,track:this.state.curr_track}),s.a.createElement(d.a,{id:"dar-mode-btn",icon:m.a,onClick:this.changeTheme})))}},{key:"componentDidMount",value:function(){var e=new k(this);e.isLoggedIn?(this.setState({loggedIn:!0}),e.getTopTracks(this.state.query_top_limit,this.state.query_top_offset,this.state.query_top_timerange)):(console.log("not logged in"),e.logIn())}},{key:"componentDidUpdate",value:function(e,t){var a=new k(this);this.state.tracks&&this.state.curr_track!==t.curr_track&&a.getAudioFeature(this.state.curr_track)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(362);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[175,1,2]]]);
//# sourceMappingURL=main.e0e4a4eb.chunk.js.map