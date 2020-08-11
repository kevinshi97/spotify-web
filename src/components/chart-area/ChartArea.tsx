import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Text} from 'recharts';
import React, {Component} from 'react';
import { IChartAreaProps, IChartAreaState } from '../library/interfaces/IApp';
import {chart_color, dark_chart_color } from '../library/colors/colors';
import './ChartArea.css';

export class ChartArea extends Component<IChartAreaProps, IChartAreaState> {
  constructor(props: IChartAreaProps) {
    super(props);
    this.state = {
      dark: this.props.dark,
      audio_features: this.props.audio_features,
      track: this.props.track,
    }
  }
  render() {
    let color = this.state.dark ? dark_chart_color : chart_color; 
    return (
      <div className='info-container'>
        <div className='song-container'>
          <img src={this.state.image} className='album-logo' alt='logo' />
          <a className='title App-link' href={this.state.url} target='_blank' rel='noopener noreferrer'>{this.state.name}</a>        
        </div>
        <div className='chart-container'>
          <ResponsiveContainer>
            <RadarChart data={this.state.data}>
              <PolarGrid />
              <PolarAngleAxis dataKey='feature' />
              <PolarRadiusAxis angle={18} domain={[0, 1]} tick={false}/>
              <Radar name={this.props.track ? this.props.track.name : ''}
                dataKey='A' stroke={color} fill={color} fillOpacity={0.6} />
              {/* <Legend /> */}
              <Text scaleToFit={true}/>
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className='player-container'>
          <iframe id={'player'} src={this.state.track?.preview_url} allowTransparency={true} allow='encryted-media' />
        </div>
      </div>
    )
  }

  componentDidMount() {
    if (this.props.track) {
      if (this.props.track.external_urls && this.props.track.name) {
        this.setState({ name: this.props.track.name, url: this.props.track.external_urls.spotify || '#', track: this.props.track});
      }
      if (this.props.track.album.images) {
        this.setState({ image: this.props.track.album.images[0].url });
      }
    }
    if (this.props.audio_features) {
      this.updateChartArea()
    }
  }

  componentDidUpdate(prevProps: IChartAreaProps, prevState: IChartAreaState) {
    if (this.props.track && this.props.track !== prevProps.track) {
      if (this.props.track.external_urls && this.props.track.name) {
        this.setState({ name: this.props.track.name, url: this.props.track.external_urls.spotify || '#', track: this.props.track});
      }
      if (this.props.track.album.images) {
        this.setState({ image: this.props.track.album.images[0].url });
      }
    }
    if (this.props.dark && this.props.dark != prevProps.dark) {
      this.setState({ dark: this.props.dark });
    }
    if (this.props.audio_features && this.props.audio_features !== prevProps.audio_features) {
      this.updateChartArea()
    }
  }

  public updateChartArea() {
    // const major: number = this.props.audio_features?.mode || 0
    // const bpm: number = this.props.audio_features?.tempo || 0
    const tempo = this.props.audio_features?.tempo || 0
    // const nchords: number = 3 //idk how to get the chords, this was a wash :/
    // const nchords: number = this.props.audio_features?.key || 0
    // const upbeatness: number = (60 + Math.pow(0.00165 * bpm - 120, 2) + (4.376 * major) + (0.78 * nchords) - (major * nchords)) / 100
    const data = [
      { 'feature': 'valence', 'A': this.props.audio_features?.valence, 'fullMark': 1 },
      { 'feature': 'danceability', 'A': this.props.audio_features?.danceability, 'fullMark': 1 },
      { 'feature': 'energy', 'A': this.props.audio_features?.danceability, 'fullMark': 1 },
      { 'feature': 'acousticness', 'A': this.props.audio_features?.acousticness, 'fullMark': 1 },
      { 'feature': 'tempo', 'A': tempo/250, 'fullMark': 1 },
    ];
    this.setState({ data: data }, () => {
      console.log('here');
      console.log(this.state.data);
      // console.log(data);
    });
  }


}

/**
 * Rating = 60 + (0.00165 * BPM – 120)^2 + (4.376 * Major) + 0.78 * nChords – (Major * nChords)
 */