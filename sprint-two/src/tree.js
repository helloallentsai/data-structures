var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
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
  let child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var node = this;
  var queue = [node];

  while (queue.length) {
    node = queue.shift();
    if (node.value === target) {
      return true;
    }
    if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 addChild - O(1)
 contains - O(n)
 */
