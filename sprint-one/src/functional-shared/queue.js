var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let storage = {};
  storage.count = 0;
  storage.next = 0;
  storage.key = 0;
  _.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.key] = value;
  this.count++;
  this.key++;
};

queueMethods.dequeue = function() {
  if (this.count > 0) {
    let dequeue = this[this.next];
    this.count--;
    this.next++;
    return dequeue;
  }
};

queueMethods.size = function() {
  if (this.count < 0) {
    this.count = 0;
  }
  return this.count;
};