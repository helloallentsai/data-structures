var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.count = 0;
  newQueue.next = 0;
  newQueue.key = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.key] = value;
  this.key++;
  this.count++;
};

queueMethods.dequeue = function() {
  let dequeue = this[this.next];
  this.next++;
  this.count--;
  return dequeue;
};

queueMethods.size = function() {
  if (this.count < 0) {
    this.count = 0;
  }
  return this.count;
};
