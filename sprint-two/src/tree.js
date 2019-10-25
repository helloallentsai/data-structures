// var Tree = function(value) {
//   var newTree = {};
//   newTree.value = value;

//   // your code here
//   newTree.children = [];  // fix me
//   newTree.addChild = treeMethods.addChild;
//   newTree.contains = treeMethods.contains;
//   return newTree;
// };

// var treeMethods = {};

// treeMethods.addChild = function(value) {
//   var newNode = Tree(value);
//   this.children.push(newNode);
// };

// treeMethods.contains = function(target) {
//   if(target === this.value){
//     return true;
//   }else{
//     for(var i =0; i<this.children.length;i++){
//       if(this.children[i].contains(target)){
//         return true;
//       }
//     }
//   }
//   return false;
// };


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
  let found = false;
  let search = function(node) {
    if (node.value === target) {
      found = true;
    }
    for (let i = 0; i < node.children.length; i++) {
      search(node.children[i]);
    }
  };
  search(this);
  return found;

  // var node = this;
  // var queue = [node];

  // while (queue.length) {
  //   node = queue.shift();
  //   if (node.value === target) {
  //     return true;
  //   }
  //   if (node.children.length > 0) {
  //     for (var i = 0; i < node.children.length; i++) {
  //       queue.push(node.children[i]);
  //     }
  //   }
  // }
  // return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 addChild - O(1)
 contains - O(n)
 */
