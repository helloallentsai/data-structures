class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.key = 0;
  }

  push(value) {
    this[this.key] = value;
    this.key++;
    this.count++;
  }

  pop() {
    if (this.count > 0) {
      let pop = this[--this.key];
      this.count--;
      return pop;
    }
  }

  size() {
    return this.count < 0 ? 0 : this.count;
  }
}