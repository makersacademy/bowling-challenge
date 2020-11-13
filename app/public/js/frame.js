class Frame {
  constructor() {
    this.rolls = new Array();
  }

  store(int) {
    if(this.rolls.length >= 2) {
      throw new Error('Two rolls already recorded');
    }
    this.rolls.push(int);
  }

  total() {
    let total = this.rolls.reduce(function(a, b){
      return a + b;
    }, 0);
    
    return total;
  }
}