var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.key = 0;
};

Stack.prototype.push = function(value) {
  this[this.key] = value;
  this.key++;
  this.count++;
};

Stack.prototype.pop = function() {
  if (this.count > 0) {
    let pop = this[--this.key];
    this.count--;
    return pop;
  }
};

Stack.prototype.size = function() {
  return this.count < 0 ? 0 : this.count;
};