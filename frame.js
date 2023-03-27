class Frame {
  constructor() {
    this.rolls = [];
  }

  addRollPoints(points) {
    if (this.rolls.length <= 2) {
      this.rolls.push(points);
    } else {
      throw new Error("max rolls exceeded")
    }
  }

  totalScore() {
    return this.rolls.reduce((total, roll) => total + roll, 0)
  }

  isStrike() {
    return this.rolls[0] === 10;
  }

  isSpare() {
    return this.rolls.length === 2 && this
  }

  
  
  // isComplete() {

  // }


    
}

module.exports = Frame;

