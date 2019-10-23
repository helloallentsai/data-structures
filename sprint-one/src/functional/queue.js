var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let size = 0;
  let key = 0;
  let next = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
    size++;
  };

  someInstance.dequeue = function() {
    let dequeue = storage[next];
    next++;
    size--;
    return dequeue;
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
    }
    return size;
  };

  return someInstance;
};
