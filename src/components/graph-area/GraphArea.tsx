import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Graph from "react-graph-vis";
import { IGraphAreaProps, IGraphAreaState } from '../library/interfaces/IApp';
 
// import "./styles.css";
// need to import the vis network css in order to show tooltip
// import "./network.css";
 
export class GraphArea extends Component<IGraphAreaProps, IGraphAreaState> {
  
  constructor(props: IGraphAreaProps) {
    super(props);
    this.state = {
      graph: {
        nodes: [
          { id: 1, label: "Node 1", title: "node 1 tootip text" },
          { id: 2, label: "Node 2", title: "node 2 tootip text" },
          { id: 3, label: "Node 3", title: "node 3 tootip text" },
          { id: 4, label: "Node 4", title: "node 4 tootip text" },
          { id: 5, label: "Node 5", title: "node 5 tootip text" }
        ],
        edges: [
          { from: 1, to: 2 },
          { from: 1, to: 3 },
          { from: 2, to: 4 },
          { from: 2, to: 5 }
        ]
      },
      options: {
        layout: {
          hierarchical: true
        },
        edges: {
          color: "#000000"
        },
        height: "500px"
      },
      events: {
        select: function(event: any) {
          var { nodes, edges } = event;
        }
      }
    }
  }
 
  render() {
    return (
      <Graph
        graph={this.state.graph}
        options={this.state.options}
        events={this.state.events}
        getNetwork={network => {
          //  if you want access to vis.js network api you can set the state in a parent component using this property
        }}
      />
    );
  }

}
 
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
 