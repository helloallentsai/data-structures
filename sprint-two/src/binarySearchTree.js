class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let newNode = new BinarySearchTree(value);
    let current = this;

    if (newNode.value > current.value) {
      while (current.right !== null) {
        current = current.right;
      }
      if (newNode.value > current.value) {
        current.right = newNode;
      } else {
        current.left = newNode;
      }
    } else {
      while (current.left !== null) {
        current = current.left;
      }
      if (newNode.value < current.value) {
        current.left = newNode;
      } else {
        current.right = newNode;
      }
    }
  }

  contains(target) {
    let current;
    let queue = [this];

    while (queue.length) {
      current = queue.shift();
      if (current.value === target) {
        return true;
      } else {
        if (current.right !== null) {
          queue.push(current.right);
        }
        if (current.left !== null) {
          queue.push(current.left);
        }
      }
    }
    return false;
  }

  depthFirstLog() {
  }
}
/*
       5
    2    7
  1  3  4  8

    */

/*
 * Complexity: What is the time complexity of the above functions?
 */


