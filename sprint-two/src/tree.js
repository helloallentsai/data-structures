var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let child = Node(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  // console.log(this.children[0].value); yields 5
  var search = function(node) {
    if (node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].value === target) {
          return true;
        }
      }
    }
    return false;
  };
  return search(this);
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.children = [];
  extend(node, treeMethods);
  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
