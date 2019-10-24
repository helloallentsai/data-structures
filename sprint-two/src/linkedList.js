
// var LinkedList = function() {
//   var list = {};
//   list.head = null;
//   list.tail = null;

//   list.addToTail = function(value) {
//     var newNode = Node(value);
//     if(list.head === null){
//       list.head = newNode;
//       list.tail = newNode;
//     }else{
//       list.tail.next = newNode;
//       list.tail = newNode;
//     }
//   };

//   list.removeHead = function() {
//     var temp = list.head.value;
//     list.head = list.head.next;
//     return temp;
//   };

//   list.contains = function(target) {
//     var result = list.head;
//     while(result){
//       if(result.value === target){
//         return true;
//       }
//       result = result.next;
//     }
//     return false;
//   };

//   return list;
// };

// var Node = function(value) {
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */


var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    var node = this.head;
    this.head = node.next;
    return node.value;
  };

  list.contains = function(target) {
    var node = this.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail - O(1)
 removeHead - O(1)
 contains - O(n)
 */
