class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
  }



  push(value){
    this[this.counter] = value;
    this.counter++;
  }

  pop (){
    while(this.counter > 0){
      var temp = this[this.counter-1];
      this.counter--;
      return temp;
    }
  }

  size(){
    return this.counter;
  }

}