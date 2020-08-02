import { TimeRange } from '../enums/enums';

export interface IAppProps { }
export interface IAppState {
  loggedIn?: boolean
  dark?: boolean
  query_top_limit: number
  query_top_offset: number
  query_top_timerange: TimeRange
  data?: any
}