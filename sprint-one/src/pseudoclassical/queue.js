var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.next = 0;
  this.key = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.key] = value;
  this.key++;
  this.count++;
};

Queue.prototype.dequeue = function() {
  let dequeue = this[this.next];
  this.next++;
  this.count--;
  return dequeue;
};

Queue.prototype.size = function() {
  if (this.count < 0) {
    this.count = 0;
  }
  return this.count;
};




