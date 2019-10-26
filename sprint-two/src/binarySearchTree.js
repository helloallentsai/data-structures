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
      newNode.value > current.value ? current.right = newNode : current.left = newNode;
    } else {
      while (current.left !== null) {
        current = current.left;
      }
      newNode.value < current.value ? current.left = newNode : current.right = newNode;
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

  depthFirstLog(cb) {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(cb);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }
  }

  breadthFirstLog() {
    let current;
    let queue = [this];
    let result = [];

    while (queue.length) {
      current = queue.shift();
      result.push(current.value);
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    return result;
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


