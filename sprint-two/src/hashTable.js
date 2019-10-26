var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._doubleAt = Math.floor(this._limit * (3 / 4));
  this._halfAt = Math.floor(this._limit * (1/4));
  this._entries = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    if (this.retrieve(k)) {
      this._storage.set(index, [[k, v]]);
    } else {
      this._storage.get(index).push([k, v]);
    }
  }
  //method to check size and resize accordingly
  this._entries++;
  if (this._entries >= this.doubleAt) {
    this.reSize(this._limit * 2);
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
  let removed;
  let arr = this._storage.get(index);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === k) {
      arr.splice(i, 1);
      removed = true;
    } else {
      removed = false;
      return `no value to remove at key: ${k}`;
    }
  }
  //method to check size and resize accordingly
  if (removed) {
    this._entries--;
    if (this._entries <= this.halfAt) {
      this.reSize(this._limit / 2);
    }
  }
};

HashTable.prototype.reSize = function(newSize) {
  //resize

  this._limit = newSize;
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert - O(1)
 retrieve - O(n)
 remove - O(1)
 */


