export interface Artist {
  items?: (Item)[] | null;
  next: string;
  previous?: null;
  total: number;
  limit: number;
  href: string;
}
export interface Item {
  external_urls: ExternalUrl;
  Follower: Follower;
  genres?: (string)[] | null;
  href: string;
  id: string;
  images?: (Image)[] | null;
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
export interface ExternalUrl {
  spotify: string;
}
export interface Follower {
  href?: null;
  total: number;
}
export interface Image {
  height: number;
  url: string;
  width: number;
}
