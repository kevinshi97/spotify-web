import {Component} from 'react';

import { Passport } from './authenticator';
import { IProps, IState} from './interfaces/IApp';
import { TimeRange } from './enums/enums';
import { Artist } from './interfaces/IArtist';
import { Track, AudioFeatures } from './interfaces/ISpotifyObjects';

export class SpotifyAdapter {
  public access_token: string | null = null;
  public token_type: string | null = null;
  public expires_in: string | null = null;
  public returned_state: string | null = null;
  public stored_state: string | null = null;
  private app: Component<IProps, IState>;

  constructor(app: Component<IProps, IState>) {
    this.app = app;
    this.access_token = Passport.access_token;
    this.token_type = Passport.token_type;
    this.expires_in = Passport.expires_in;
    this.returned_state = Passport.returned_state;
    this.stored_state = Passport.stored_state;
  }

  public get isLoggedIn(): Boolean {
    return Passport.isLoggedIn;
  }
  public logIn(): void {
    Passport.logIn();
  }

  public getTopTracks(limit: number = 20, offset: number = 0, time_range: TimeRange = TimeRange.medium_term): void {
    if (limit < 1 || limit > 50 || offset < 0 || offset > limit) {
      console.log('invalid params');
    } else {
      const url = 'https://api.spotify.com/v1/me/top/tracks?&limit=' + encodeURIComponent(limit) + '&offset=' + encodeURIComponent(offset) + '&time_range='
        + encodeURIComponent(time_range);
      const params: RequestInit = {
        headers: {'Authorization': 'Bearer ' + this.access_token} as HeadersInit, 
        method: 'GET',
      }
      fetch(url, params)
        .then(res => res.json())
        .then((data) => {
          const tracks = data.items as Track[]
          this.app.setState({ tracks: tracks, curr_track: tracks[0] || null})
          console.log(this.app.state.tracks);
          console.log(this.app.state.curr_track);
      })
    }
  }

  public getAudioFeature(curr_track: Track): void {
    const id: string = curr_track.uri.split(':').pop() || '';
    console.log(id);
    const url = 'https://api.spotify.com/v1/audio-features/'+encodeURI(id);
    const params: RequestInit = {
      headers: {'Authorization': 'Bearer ' + this.access_token} as HeadersInit, 
      method: 'GET',
    }
    fetch(url, params)
      .then(res => res.json())
      .then((data) => {
        const audio_features = data as AudioFeatures
        console.log(audio_features);
        this.app.setState({ curr_audio_features: audio_features });
        // console.log(this.app.state.curr_audio_features);
    })
  }
}