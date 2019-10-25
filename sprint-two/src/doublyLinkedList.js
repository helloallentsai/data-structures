
var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
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

  list.removeTail = function() {
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

  list.addToHead = function(value) {
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

  list.removeHead = function() {
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
