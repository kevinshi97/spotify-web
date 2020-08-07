export interface IGraph {
  nodes: INode[],
  edges: IEdge[]
}

export interface INode {
  id: number,
  label: string,
  title: string
}

export interface IEdge {
  to: number,
  from: number
}