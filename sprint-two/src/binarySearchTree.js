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
    console.log(this);
  }

  contains(target) {

  }

  depthFirstLog() {

  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */


/*

       5
    2    7
     3  6

    */