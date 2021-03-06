import { TimeRange } from '../enums/enums';
import { Track, AudioFeatures } from './ISpotifyObjects';
import { Network, Node, Edge } from 'vis';

export interface IProps { 
  tracks?: Track[]
  tracks_audio_features?: AudioFeatures[]
  curr_track?: Track
  curr_audio_features?: AudioFeatures
}
export interface IState {
  tracks?: Track[]
  tracks_audio_features?: AudioFeatures[]
  curr_track?: Track
  curr_audio_features?: AudioFeatures
}

export interface IAppProps extends IProps{ }
export interface IAppState extends IState {
  loggedIn: boolean 
  dark: boolean
  query_top_limit: number
  query_top_offset: number
  query_top_timerange: TimeRange
}

/**
 * loggedIn: keeps track of if a user is logged in
 * dark: light or dark mode
 * query_top_limit: max query return length (between 0 and 50)
 * query_top_offset: offset num
 * query_top_timerange: short, medium, or long term 
 * tracks: the current tracks we have loaded
 * curr_track: the current track we are examining
 * curr_adio_features: the audio features for the curr_track
 */

export interface IGraphAreaProps extends IProps{ 
  dark: boolean
}
export interface IGraphAreaState extends IState {
  dark: boolean
  // graph: IGraph
  nodes: Node[]
  edges: Edge[]
  network?: Network
}

export interface IChartAreaProps {
  dark: boolean,
  audio_features?: AudioFeatures
  track?: Track
}
export interface IChartAreaState {
  dark: boolean,
  audio_features?: AudioFeatures
  track?: Track
  data?: object[]
  image?: string
  name?: string
  url?: string
}