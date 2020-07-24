import React, {Component} from 'react';
import logo from '../../images/logo.svg';

class App extends Component {
  render() {
    return (
      <div></div>
    )
  }
  componentDidMount() {
    let client_id: string = '287daee6bafd4ce48e000a00a40d3f6f';
    let redirect_uri = 'http://3ee1c651ba0b.ngrok.io/web';
    // let redirect_uri: string = 'http://kevinshi97.github.io/spotify-web/web';
    let state: string = generateRandomString(16);
    localStorage.setItem('spotify_auth_state', state);
    let auth_url: string = 'https://accounts.spotify.com/authorize';
    auth_url += '?response_type=token&client_id=' + encodeURIComponent(client_id) + '&redirect_uri=' + encodeURIComponent(redirect_uri)
      + '&state=' + encodeURIComponent(state);
    window.location.href = auth_url;
  }
}

export default App;

function generateRandomString(length: number): string {
  let text: string = '';
  var possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i: number = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};