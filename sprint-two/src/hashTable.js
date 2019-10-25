

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    this._storage[index] = [[k, v]];
  } else {
    this._storage[index].push([k, v]);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let arr = this._storage[index];
  var result;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === k) {
      result = arr[i][1];
    }
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let arr = this._storage[index];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === k) {
      arr.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


