// Instantiate a new graph
var Graph = function() {
  this.adjList = new Map();
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.adjList.set(node, []);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.adjList.has(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let arr = this.adjList.get(node);
  for (let otherNode of arr) {
    this.removeEdge(node, otherNode);
  }

  if (this.contains(node)) {
    this.adjList.delete(node);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let connectedFrom = false;
  let connectedTo = false;

  let edgeFrom = this.adjList.get(fromNode);
  if (edgeFrom !== undefined) {
    for (var node of edgeFrom) {
      if (node === toNode) {
        connectedFrom = true;
      }
    }
  }

  let edgeTo = this.adjList.get(toNode);
  if (edgeTo !== undefined) {
    for (var node of edgeTo) {
      if (node === fromNode) {
        connectedTo = true;
      }
    }
  }
  return connectedFrom && connectedTo;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //we have to access the array at the key and then push the other node inside
  let edgeFrom = this.adjList.get(fromNode);
  edgeFrom.push(toNode);
  let edgeTo = this.adjList.get(toNode);
  edgeTo.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
//can use indexOf instead of for loop
  let edgeFrom = this.adjList.get(fromNode);
  let edgeFromIdx = edgeFrom.indexOf(toNode);
  if (edgeFromIdx !== -1) {
    edgeFrom.splice(edgeFromIdx, 1);
  }

  let edgeTo = this.adjList.get(fromNode);
  let edgeToIdx = edgeTo.indexOf(fromNode);
  if (edgeToIdx !== -1) {
    edgeTo.splice(edgeToIdx, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  let result = new Map();

  for (let [node, value] of this.adjList) {
    result.set(cb(node), value);
  }
  return result;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


