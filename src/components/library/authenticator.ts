class Authenticator {
  /**
   * params to make authentication request
   */
  private static _instance: Authenticator;
  private client_id: string = '287daee6bafd4ce48e000a00a40d3f6f';
  // private redirect_uri: string = 'http://52ebb59eaef3.ngrok.io';
  private redirect_uri: string = 'http://kevinshi97.github.io/spotify-web';
  private scopes: string = 'user-top-read user-follow-read user-library-read';
  private state: string = this.generateRandomString(16);
  private auth_url: string = 'https://accounts.spotify.com/authorize?response_type=token&client_id=' + encodeURIComponent(this.client_id)
    + '&redirect_uri=' + encodeURIComponent(this.redirect_uri) + '&state=' + encodeURIComponent(this.state)
    + '&scope=' + encodeURIComponent(this.scopes);
  
  /**
   * params returned by authentication, may be used in the remaing API calls
   */
  public access_token: string | null = null;
  public token_type: string | null = null;
  public expires_in: string | null = null;
  public returned_state: string | null = null;
  public stored_state: string | null = null;
  
  private constructor() {
    let url_params = new URLSearchParams(window.location.hash.replace("#","?"))
    this.access_token = url_params.get('access_token');
    this.token_type = url_params.get('token_type');
    this.expires_in = url_params.get('expires_in');
    this.returned_state = url_params.get('state');
    this.stored_state = localStorage.getItem('spotify_auth_state')
  }

  public static get Instance(): Authenticator {
    return this._instance || (this._instance = new this()); 
  }

  public get isLoggedIn(): Boolean {
    return (this.access_token && this.stored_state == this.returned_state) || false;
  }

  public logIn(): void {
    localStorage.setItem('spotify_auth_state', this.state)
    window.location.href = this.auth_url;
  }

  private generateRandomString(length: number): string {
    let text: string = '';
    var possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i: number = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

}

export const Passport = Authenticator.Instance;