import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Graph from "react-graph-vis";
import { IGraphAreaProps, IGraphAreaState } from '../library/interfaces/IApp';
import { IGraph, INode, IEdge } from '../library/interfaces/IGraph';
import { ChartArea } from '../chart-area/ChartArea';
import { Track, AudioFeatures } from '../library/interfaces/ISpotifyObjects';
import { SpotifyAdapter } from '../library/spotify-adapter';
 
// import "./styles.css";
// need to import the vis network css in order to show tooltip
// import "./network.css";
 
export class GraphArea extends Component<IGraphAreaProps, IGraphAreaState> {
  
  constructor(props: IGraphAreaProps) {
    let nodes: INode[] = [];
    let edges: IEdge[] = [];
    if (props.tracks) {
      for (let i = 0; i < props.tracks.length; i++) {
        nodes.push({ id: i + 1, label: props.tracks[i].name, title: props.tracks[i].name } as INode);
        if (i > 1) {
          edges.push({ to: i - 1, from: i } as IEdge);
        }
      }
    }
    super(props);
    this.state = {
      tracks: this.props.tracks,
      curr_track: this.props.curr_track,
      curr_audio_features: this.props.curr_audio_features,
      graph: { nodes: nodes, edges: edges }
    }
  }
 
  public _updateCurrTrack(nodes: number[]) {
    console.log(nodes);
    let first: number = nodes[0] - 1
    this.setState({curr_track: this.state.tracks ? this.state.tracks[first] : this.state.curr_track})
  }

  render() {
    return (
      <div>
        <Graph
          graph={this.state.graph}
          options={{
            layout: {
              improvedLayout: true,
              hierarchical: false
            },
            edges: {
              color: "#000000"
            },
            interaction: {
              zoomView: true
            },
            height: "500px"
          }}
          events={{
            // selectNode: function(event: any) {
            //   let { nodes, edges } = event;
            //   console.log(nodes);
            //   this.
            // }
            selectNode: (event: any) => {
              let { nodes, edges } = event;
              this._updateCurrTrack(nodes);
            }
          }}
          getNetwork={network => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
          }}
        />
        <ChartArea audio_features={this.state.curr_audio_features} track={this.state.curr_track}/>
      </div>  
    );
  }

  componentDidUpdate(prevProps: IGraphAreaProps, prevState: IGraphAreaState) {
    const adapter: SpotifyAdapter = new SpotifyAdapter(this);
    if (this.state.tracks && this.state.curr_track !== prevState.curr_track) {
      adapter.getAudioFeature(this.state.curr_track!);
    }
  }

}
 
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
 