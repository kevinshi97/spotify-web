import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Text} from 'recharts';
import React, {Component} from 'react';
import { IChartAreaProps, IChartAreaState } from '../library/interfaces/IApp';

import './ChartArea.css';

export class ChartArea extends Component<IChartAreaProps, IChartAreaState> {
  constructor(props: IChartAreaProps) {
    super(props);
    this.state = {
      audio_features: this.props.audio_features,
      track: this.props.track,
    }
  }
  render() {
    return (
      <div className="container">
        <div className="chart-container">
          <ResponsiveContainer>
            <RadarChart data={this.state.data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="feature" />
              <PolarRadiusAxis angle={18} domain={[0, 1]} tick={false}/>
              <Radar name={this.props.track ? this.props.track.name : ''}
                dataKey="A" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              {/* <Legend /> */}
              <Text scaleToFit={true}/>
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className='song-container'>
          <img src={this.state.image} className="album-logo" alt="logo" />
          <a href={this.state.url} target="_blank" rel="noopener noreferrer">{this.state.name}</a>        
        </div>
      </div>
    )
  }

  componentDidMount() {}

  componentDidUpdate(prevProps: IChartAreaProps, prevState: IChartAreaState) {
    if (this.props.track && this.props.track !== prevProps.track) {
      if (this.props.track.external_urls && this.props.track.name) {
        this.setState({ name: this.props.track.name, url: this.props.track.external_urls.spotify || '#' });
      }
      if (this.props.track.album.images) {
        this.setState({ image: this.props.track.album.images[0].url });
      }
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
      { "feature": "valence", "A": this.props.audio_features?.valence, "fullMark": 1 },
      { "feature": "danceability", "A": this.props.audio_features?.danceability, "fullMark": 1 },
      { "feature": "energy", "A": this.props.audio_features?.danceability, "fullMark": 1 },
      { "feature": "acousticness", "A": this.props.audio_features?.acousticness, "fullMark": 1 },
      { "feature": "tempo", "A": tempo/250, "fullMark": 1 },
    ];
    this.setState({ data: data }, () => {
      console.log(this.state.data);
      console.log(data);
    });
  }


}

/**
 * Rating = 60 + (0.00165 * BPM – 120)^2 + (4.376 * Major) + 0.78 * nChords – (Major * nChords)
 */