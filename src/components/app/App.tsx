import React, {Component} from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
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
    let client_id: string = 'c9d669bd262842b7a7ccd54a046eceb3';
    let redirect_uri: string = 'http://kevinshi97.github.io/spotify-web';
    let state: string = generateRandomString(16);
    localStorage.setItem('spotify_auth_state', state);
    let auth_url: string = 'https://accounts.spotify.com/authorize?client_id=c9d669bd262842b7a7ccd54a046eceb3&redirect';
    auth_url += '?response_type=token' + '&client_id=' + encodeURIComponent(client_id) + '&scope=' + encodeURIComponent(redirect_uri)
      + '&state=' + encodeURIComponent(state);


    fetch(auth_url)
      .then(res => res.json())
      .then((result) => {
        console.log(result);
      });
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
