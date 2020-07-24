import React, {Component} from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  // state = {
  //   loggedIn: false,
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button variant="primary">Primary</Button>{' '}
        </header>
      </div>
    )
  }
  componentDidMount() {
    // const queryString = ;
    // console.log(queryString);
    let url_params = new URLSearchParams(window.location.search)
    let access_token: string | null = url_params.get('access_token');
    let token_type: string | null = url_params.get('token_type');
    let expires_in: string | null = url_params.get('expires_in');
    let returned_state: string | null = url_params.get('state');
    console.log(access_token, token_type, expires_in, returned_state);
    if (returned_state !== localStorage.getItem('spotify_auth_state')) {
      let client_id: string = '287daee6bafd4ce48e000a00a40d3f6f';
      // let redirect_uri = 'http://82a9546ad55f.ngrok.io';
      let redirect_uri: string = 'http://kevinshi97.github.io/spotify-web';
      let state: string = generateRandomString(16);
      localStorage.setItem('spotify_auth_state', state);
      let auth_url: string = 'https://accounts.spotify.com/authorize';
      auth_url += '?response_type=token&client_id=' + encodeURIComponent(client_id) + '&redirect_uri=' + encodeURIComponent(redirect_uri)
        + '&state=' + encodeURIComponent(state);
      window.location.href = auth_url;
    }
  }
}

function generateRandomString(length: number): string {
  let text: string = '';
  var possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i: number = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export default App;
