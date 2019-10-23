var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
};

var storage = {};
Stack.prototype.push = function(value){
  storage[this.counter] = value;
  this.counter++;
};

Stack.prototype.pop = function(){
  while(this.counter > 0){
    var temp = storage[this.counter - 1];
    this.counter--;
    return temp;
  }
};

Stack.prototype.size = function(){
  return this.counter;
};

