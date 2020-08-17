import React, {Component} from 'react';
import logo from '../../images/logo.svg';
import './App.css';
// import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
// import { access } from 'fs';
// import * as icons from '@fortawesome/free-solid-svg-icons';
import {IAppProps, IAppState} from '../library/interfaces/IApp'
import { SpotifyAdapter } from '../library/spotify-adapter';
import { TimeRange } from '../library/enums/enums';
import { GraphArea } from '../graph-area/GraphArea';

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      loggedIn: false,
      dark: true,
      query_top_limit: 50,
      query_top_offset: 0,
      query_top_timerange: TimeRange.short_term,
      // tracks: [],
      // curr_track: null,
      // curr_audio_features: null
    };
  }

  changeTheme = () => {
    this.setState({ dark: !this.state.dark });
  }

  render() {
    let appGraphArea;
    if (this.state.tracks && this.state.curr_audio_features) {
      appGraphArea = <GraphArea
        dark={this.state.dark}
        curr_track={this.state.curr_track}
        curr_audio_features={this.state.curr_audio_features}
        tracks={this.state.tracks}
        tracks_audio_features={this.state.tracks_audio_features }/>
    } else {
      appGraphArea = <div />
    }
    return (
      <div className="App">
        <div className={`App-main ${this.state.dark ? 'dark' : ''}`}>
          <FontAwesomeIcon id="dar-mode-btn" icon={faAdjust} onClick={this.changeTheme} />
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p> */}
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
          {/* <GraphArea tracks={this.state.tracks}/> */}
          {appGraphArea }
          {/* <GraphArea
            dark={this.state.dark}
            curr_track={this.state.curr_track}
            curr_audio_features={this.state.curr_audio_features}
            tracks={this.state.tracks}/> */}
        </div>
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
      adapter.getTopTracks(this.state.query_top_limit, this.state.query_top_offset, this.state.query_top_timerange);

    } else {
      console.log('not logged in');
      adapter.logIn();
    }
  }
  componentDidUpdate(prevProps: IAppProps, prevState: IAppState) {
    const adapter: SpotifyAdapter = new SpotifyAdapter(this);
    if (this.state.tracks && this.state.curr_track !== prevState.curr_track) {
      // adapter.getAudioFeature(this.state.curr_track!);
      adapter.getTopAudioFeatures();
    }
  }
}

export default App;
