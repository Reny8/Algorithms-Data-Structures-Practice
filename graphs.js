//EDGE LIST
const edgeGraph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// ADJACENT LIST
// showing connections of each node in the graph
const adjacentGraph = [[2], [2, 3], [0, 1, 3], [1, 2]];

// ADJACENT MATRIX]
// first index is connected with the values 1 index positions
const adjacentMatrixGraph = [
  { 0: [0, 0, 1, 0] },
  { 1: [0, 0, 1, 1] },
  { 2: [1, 1, 0, 1] },
  { 3: [0, 1, 1, 0] },
];

//GRAPH IMPLEMENTATION
class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {}
  addEdge(node1, node2) {
    //undirected Graph
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}
