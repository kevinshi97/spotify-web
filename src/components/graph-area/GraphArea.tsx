import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Graph from "react-graph-vis";
import { IGraphAreaProps, IGraphAreaState } from '../library/interfaces/IApp';
import { Network, Node, Edge, Color } from 'vis';
import { ChartArea } from '../chart-area/ChartArea';
import { Track, AudioFeatures } from '../library/interfaces/ISpotifyObjects';
import { SpotifyAdapter } from '../library/spotify-adapter';
import { dark_node_color, dark_font_color, dark_edge_color, node_color, font_color, edge_color} from '../library/colors/colors';
import './GraphArea.css';
 
// import "./styles.css";
// need to import the vis network css in order to show tooltip
// import "./network.css";


function sortWithIndeces(list_audio_features: AudioFeatures[]) {
  let to_sort: any[] = [];
  for (let i = 0; i < list_audio_features.length; i++) {
    to_sort.push([list_audio_features[i], i+1]);
  }
  to_sort.sort(function(left: [AudioFeatures, number], right: [AudioFeatures, number]) {
    return left[0].acousticness < right[0].acousticness ? -1 : 1;
  });
  console.log(to_sort);
  let indices = [];
  let test = [];
  for (let i = 0; i < to_sort.length; i++) {
      test.push(to_sort[i][0]);
      indices.push(to_sort[i][1]);
  }
  return [test, indices];
}


export class GraphArea extends Component<IGraphAreaProps, IGraphAreaState> {
  
  constructor(props: IGraphAreaProps) {
    let nodes: Node[] = [];
    let edges: Edge[] = [];
    if (props.tracks) {
      for (let i = 0; i < props.tracks.length; i++) {
        nodes.push({
          id: i + 1,
          label: props.tracks[i].name,
          title: props.tracks[i].name,
          shape: 'dot',
          color: dark_node_color,
          font: dark_font_color
        } as Node);
        if (i > 1) {
          edges.push({
            to: i,
            from: i-1,
            color: dark_edge_color
          } as Edge);
        }
      }
    }
    if (props.tracks_audio_features) {
      let res = sortWithIndeces(props.tracks_audio_features);
      console.log('something');
      console.log(res);
    }
    super(props);
    this.state = {
      dark: this.props.dark,
      // graph: { nodes: nodes, edges: edges },
      nodes: nodes,
      edges: edges,
      curr_track: this.props.curr_track,
      curr_audio_features: this.props.curr_audio_features,
      tracks: this.props.tracks,
      tracks_audio_features: this.props.tracks_audio_features
    }
  }
 
  public _updateCurrTrack(nodes: number[]) {
    console.log(nodes);
    let first: number = nodes[0] - 1
    this.setState({curr_track: this.state.tracks ? this.state.tracks[first] : this.state.curr_track})
  }

  render() {
    return (
      <div className='main-container'>
        <div className='graph-container'>
          <Graph
            graph={{nodes: this.state.nodes, edges: this.state.edges}}
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
              width: "100%",
              height: "100%"
            }}
            events={{
              selectNode: (event: any) => {
                let { nodes, edges } = event;
                this._updateCurrTrack(nodes);
              }
            }}
            getNetwork={network => {
              this.setState({ network: network })
              //  if you want access to vis.js network api you can set the state in a parent component using this property
            }}
          />
        </div>
        <ChartArea audio_features={this.state.curr_audio_features} track={this.state.curr_track} dark={this.state.dark}/>
      </div>  
    );
  }

  componentDidUpdate(prevProps: IGraphAreaProps, prevState: IGraphAreaState) {
    if (this.state.tracks && this.state.curr_track !== prevState.curr_track) {
      const adapter: SpotifyAdapter = new SpotifyAdapter(this);
      // adapter.getAudioFeature(this.state.curr_track!);
    }
    if (this.state.network) {
      if (this.state.dark !== this.props.dark) {
        let nodes = this.state.nodes;
        let edges = this.state.edges;
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].color = this.props.dark? dark_node_color: node_color;
          nodes[i].font = this.props.dark? dark_font_color: font_color;
        }
        for (let i = 0; i < edges.length; i++) {
          edges[i].color = this.props.dark? dark_edge_color: edge_color;
        }
        this.setState({ dark: this.props.dark, nodes: nodes, edges: edges }, () => {
          console.log(this.state);
          this.state.network?.setData({ nodes: this.state.nodes, edges: this.state.edges });
          this.state.network?.redraw();
        });
      }
    }
  }



}
 
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
 