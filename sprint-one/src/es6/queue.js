class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.next = 0;
    this.key = 0;
  }

  enqueue(value) {
    this[this.key] = value;
    this.key++;
    this.count++;
  }

  dequeue() {
    let dequeue = this[this.next];
    this.next++;
    this.count--;
    return dequeue;
  }

  size() {
    if (this.count < 0) {
      this.count = 0;
    }
    return this.count;
  }
}
