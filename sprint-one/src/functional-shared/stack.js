var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let storage = {};
  storage.key = 0;
  storage.count = 0;
  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.key] = value;
  this.key++;
  this.count++;
};

stackMethods.pop = function() {
  if (this.key > 0) {
    let pop = this[--this.key];
    this.count--;
    return pop;
  }
};

stackMethods.size = function() {
  return this.count < 0 ? 0 : this.count;
};

