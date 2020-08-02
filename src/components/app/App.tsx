import React, {Component} from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faAdjust, faBatteryQuarter } from '@fortawesome/free-solid-svg-icons'
import { access } from 'fs';
// import * as icons from '@fortawesome/free-solid-svg-icons';
import {IAppProps, IAppState} from '../library/interfaces/app-interfaces'
import { SpotifyAdapter } from '../library/spotify-adapter';
import { TimeRange } from '../library/enums/enums';

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      loggedIn: false,
      dark: false,
      query_top_limit: 50,
      query_top_offset: 0,
      query_top_timerange: TimeRange.medium_term
    };
  }

  changeTheme = () => {
    this.setState({ dark: !this.state.dark });
    console.log(this.state);
  }


  render() {
    return (
      <div className="App">
        <header className={`App-header ${ this.state.dark? '' : 'dark'}`}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          {/* <a href={auth_url} style={this.state.loggedIn? {pointerEvents: 'none'} : {pointerEvents: 'auto'}}>
            {this.state.loggedIn? 'Signed In' : 'Sign In'} <FontAwesomeIcon icon={faSignInAlt} />
          </a> */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          {/* <Button variant="primary" onClick={this.changeTheme}><FontAwesomeIcon icon={faAdjust} /></Button>{' '} */}
          <FontAwesomeIcon icon={faAdjust} onClick={this.changeTheme}/>
        </header>
      </div>
    )
  }
  componentDidMount() {
    const adapter: SpotifyAdapter = new SpotifyAdapter(this);
    if (adapter.isLoggedIn) {
      this.setState({ loggedIn: true });
      // console.log('logged in');
      // console.log('access_token: ', adapter.access_token);
      // console.log('token_type: ', adapter.token_type);
      // console.log('expires_in: ', adapter.expires_in);
      // console.log('returned_state: ', adapter.returned_state);
      // console.log('local_state: ', adapter.stored_state);
      adapter.getTopArtists(this.state.query_top_limit, this.state.query_top_offset, this.state.query_top_timerange);
      adapter.getTopTracks(this.state.query_top_limit, this.state.query_top_offset, this.state.query_top_timerange);

    } else {
      console.log('not logged in');
      adapter.logIn();
    }
  }
}

export default App;
