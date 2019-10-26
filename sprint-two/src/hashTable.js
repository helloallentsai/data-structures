var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._doubleAt = Math.floor(this._limit * (3 / 4));
  this._halfAt = Math.floor(this._limit * (1 / 4));
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
  //check size and resize accordingly
  this._entries++;
  if (this._entries === this._doubleAt) {
    this.resize(this._limit * 2);
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
  //check size and resize accordingly
  if (removed) {
    this._entries--;
    if (this._entries === this._halfAt) {
      this.resize(this._limit / 2);
    }
  }
};

HashTable.prototype.resize = function(newSize) {
  let newStorage = LimitedArray(newSize);
  let currentStorage = this._storage.status();

  for (let i = 0; i < currentStorage.length; i++) {
    let bucket = this._storage.get(i);
    if (bucket !== undefined) {
      for (let i = 0; i < bucket.length; i++) {
        for (let tuple of bucket) {
          let key = tuple[0];
          let val = tuple[1];
          let newIdx = getIndexBelowMaxForKey(key, newSize);
          newStorage.set(newIdx, [[key, val]]);
        }
      }
    }
  }
  this._limit = newSize;
  this._storage = newStorage;
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert - O(1)
 retrieve - O(n)
 remove - O(1)
 */


