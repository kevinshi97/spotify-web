import React, {Component} from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import * as icons from '@fortawesome/free-solid-svg-icons';


let client_id: string = '287daee6bafd4ce48e000a00a40d3f6f';
// let redirect_uri = 'http://b92a7a937600.ngrok.io';
let redirect_uri: string = 'http://kevinshi97.github.io/spotify-web';
let state: string = generateRandomString(16);
localStorage.setItem('spotify_auth_state', state);
let auth_url: string = 'https://accounts.spotify.com/authorize';
auth_url += '?response_type=token&client_id=' + encodeURIComponent(client_id) + '&redirect_uri=' + encodeURIComponent(redirect_uri)
  + '&state=' + encodeURIComponent(state);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <a href={auth_url} >
            Log In to Spotify
          </a>
          <FontAwesomeIcon icon={faCoffee} />
          <Button variant="primary">Primary</Button>{' '}
        </header>
      </div>
    )
  }
  componentDidMount() {
    let url_params = new URLSearchParams(window.location.hash.replace("#","?"))
    let access_token: string | null = url_params.get('access_token');
    let token_type: string | null = url_params.get('token_type');
    let expires_in: string | null = url_params.get('expires_in');
    let returned_state: string | null = url_params.get('state');
    // console.log(access_token, token_type, expires_in, returned_state);
    console.log('access_token: ', access_token);
    console.log('token_type: ', token_type);
    console.log('expires_in: ', expires_in);
    console.log('returned_state: ', returned_state);

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
