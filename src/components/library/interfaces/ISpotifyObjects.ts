export interface AudioFeatures {
  duration_ms: number;
  key: number;
  mode: number;
  time_signature: number;
  acousticness: number;
  danceability: number;
  energy: number;
  instrumentalness: number;
  liveness: number;
  loudness: number;
  speechiness: number;
  valence: number;
  tempo: number;
  id: string;
  uri: string;
  track_href: string;
  analysis_url: string;
  type: string;
}

export interface Artist {
  external_urls: ExternalUrl;
  followers: Followers;
  genres?: (string)[] | null;
  href: string;
  id: string;
  images?: (Image)[] | null;
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface Track {
  album: AlbumSimple;
  artists?: (ArtistSimple)[] | null;
  available_markets?: (string)[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
export interface AlbumSimple {
  album_type: string;
  artists?: (ArtistSimple)[] | null;
  available_markets?: (string)[] | null;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images?: (Image)[] | null;
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
}
export interface ArtistSimple {
  external_urls: ExternalUrl;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalUrl {
  [key: string]: string
}

export interface Followers {
  href?: null;
  total: number;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface ExternalIds {
  isrc: string;
}