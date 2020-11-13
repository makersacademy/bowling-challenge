class Frame {
  constructor() {
    this.rolls = new Array();
  }

  store(int) {
    this.rolls.push(int);
  }

  total() {
    let total = this.rolls.reduce(function(a, b){
      return a + b;
    }, 0);
    
    return total;
  }
}