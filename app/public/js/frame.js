class Frame {
  constructor() {
    this.rolls = new Array();
    this.bonusRollsRemaining = 0;
  }

  store(int) {
    if(!this.scoreIsValid(int)) {
      throw new Error('Total score for rolled balls cannot exceed 10');
    }
    if(this.isComplete()) {
      throw new Error('All rolls and bonuses already recorded');
    }
    this.rolls.push(int);
    this.bonusRollsRemaining --
    this.setBonus()
  }

  isComplete() {
    return this.rolls.length >= 2 && this.bonusRollsRemaining <= 0;
  }

  isFull() {
    return this.rolls.length >= 2;
  }

  total() {
    let total = this.rolls.reduce(function(a, b){
      return a + b;
    }, 0);
    return total;
  }

  scoreIsValid(int) {
    
    return int <= 10 && int >= 0 && this.checkSecondRoll(int);
  }

  checkSecondRoll(int) {
    if(this.rolls.length == 1) { 
      return this.total() + int <= 10;
    };
    return true;
  }

  setBonus() {
    if(this.rolls.length == 2 && this.total() == 10) {
      this.bonusRollsRemaining = 1;
    };
  }
}