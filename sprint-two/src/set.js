var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //if not contains, we add
  if (!this.contains(item)) {
    this._storage.push(item);
  }

};

setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) === -1) {
    return false;
  }
  return true;
};

setPrototype.remove = function(item) {
  let itemIdx = this._storage.indexOf(item);
  if(itemIdx !== -1) {
    this._storage.splice(itemIdx, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
