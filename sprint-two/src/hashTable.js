var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k,v]]);
  } else {
    //can we use retrieve to see if that key already exists
    if (this.retrieve(k)){
      this._storage.set(index, [[k,v]]);
    } else {
      this._storage.get(index).push([k, v]);
    }
    console.log(this._storage.status());
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let arr = this._storage.get(index);
  let result;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === k) {
      result = arr[i][1];
    }
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let arr = this._storage.get(index);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === k) {
      arr.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert - O(1)
 retrieve - O(n)
 remove - O(1)
 */


