import React, {Component} from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

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

export default App;
