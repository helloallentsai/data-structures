var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  let storage = {};
  let key = 0;
  let count = 0;

  // Implement the methods below

  someInstance.push = value => {
    storage[key] = value;
    key++;
    count++;
  };

  someInstance.pop = () => {
    let pop = storage[--key];
    count--;
    return pop;
  };

  someInstance.size = () => {
    return count < 0 ? 0 : count;
  };
  return someInstance;
};
