
var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  extend(list, DoublyLinkedMethods);
  return list;
}

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to;
}

var DoublyLinkedMethods = {};

DoublyLinkedMethods.addToTail = function(value) {
  var node = Node(value);
  if (!this.tail) {
    this.tail = node;
    this.head = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

DoublyLinkedMethods.removeTail = function() {
  if (!this.tail) {
    return 'no tail: empty list';
  }

  var node = this.tail;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  }
  return node.value;
};

DoublyLinkedMethods.addToHead = function(value) {
  var node = Node(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
};

DoublyLinkedMethods.removeHead = function() {
  if (!this.head) {
    return 'no head: empty list';
  }

  var node = this.head;
  this.head = node.next;
  if (this.head) {
    this.head.prev = null;
  }
  return node.value;
};

DoublyLinkedMethods.contains = function(target) {
  var node = this.head;
  while (node) {
    if (node.value === target) {
      return true;
    }
    node = node.next;
  }
  return false;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToHead - O(1)
 addToTail - O(1)
 removeHead - O(1)
 removeTail - O(1)
 contains - O(n)
 */
