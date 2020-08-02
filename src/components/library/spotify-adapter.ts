import {Component} from 'react';

import { Passport } from './authenticator';
import { IAppProps, IAppState } from './interfaces/app-interfaces';
import { TimeRange } from './enums/enums';

export class SpotifyAdapter {
  public access_token: string | null = null;
  public token_type: string | null = null;
  public expires_in: string | null = null;
  public returned_state: string | null = null;
  public stored_state: string | null = null;
  private app: Component<IAppProps, IAppState>;

  constructor(app: Component<IAppProps, IAppState>) {
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

  public getTopArtists(limit: number = 20, offset: number = 0, time_range: TimeRange = TimeRange.medium_term): void {
    this.SpotifyTopRequest('https://api.spotify.com/v1/me/top/artists?', limit, offset, time_range);
  }

  public getTopTracks(limit: number = 20, offset: number = 0, time_range: TimeRange = TimeRange.medium_term): void {
    this.SpotifyTopRequest('https://api.spotify.com/v1/me/top/tracks?', limit, offset, time_range);    
  }

  private SpotifyTopRequest(url: string, limit: number = 20, offset: number = 0, time_range: TimeRange): void {
    if (limit < 1 || limit > 50 || offset < 0 || offset > limit) {
      console.log('invalid params');
    } else {
      let new_url = url + '&limit=' + encodeURIComponent(limit) + '&offset=' + encodeURIComponent(offset) + '&time_range='
        + encodeURIComponent(time_range);
      let params: RequestInit = {
        headers: {'Authorization': 'Bearer ' + this.access_token} as HeadersInit, 
        method: 'GET',
      };
      fetch(new_url, params)
        .then(res => res.json())
        .then((data) => {
          this.app.setState({ data: data });
          console.log(data);
          console.log(this.app.state); 
      })
    }
  }

}