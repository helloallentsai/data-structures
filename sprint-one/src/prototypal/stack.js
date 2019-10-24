var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.count = 0;
  instance.key = 0;
  return instance;
};

var stackMethods = {
  push: function(value) {
    this[this.key] = value;
    this.key++;
    this.count++;
  },

  pop: function() {
    if (this.count > 0) {
      let pop = this[--this.key];
      this.count--;
      return pop;
    }
  },

  size: function() {
    return this.count < 0 ? 0 : this.count;
  }
};
