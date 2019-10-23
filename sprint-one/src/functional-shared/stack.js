var Stack = function() {
  var someInstance = {};
  someInstance.counter = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};
var storage = {};

stackMethods.push = function(val) {
  storage[this.counter] = val;
  this.counter++;
};


stackMethods.pop = function(){
  while(this.counter > 0){
    var temp = storage[this.counter-1];
    this.counter--;
    return temp;
  }
};

stackMethods.size = function() {
  return this.counter;
};



