var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;
  return someInstance;
};

var stackMethods = {};
var storage = {};


stackMethods.push = function(value){
  storage[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function(){
  while(this.counter > 0){
    var temp = storage[this.counter-1];
    this.counter--;
    return temp;
  }
};

stackMethods.size = function(){
  return this.counter;
};



