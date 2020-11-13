class Frame {
  constructor() {
    this.rolls = new Array();
  }

  store(int) {
    if(!this.scoreIsValid(int)) {
      throw new Error('Total score for rolled balls cannot exceed 10');
    }
    
    if(this.isComplete()) {
      throw new Error('Two rolls already recorded');
    }
    this.rolls.push(int);
  }

  isComplete() {
    return this.rolls.length >= 2 
  }

  total() {
    let total = this.rolls.reduce(function(a, b){
      return a + b;
    }, 0);
    
    return total;
  }

  scoreIsValid(int) {
    return int <= 10 && int >= 0 && this.total() + int <= 10
  }
}