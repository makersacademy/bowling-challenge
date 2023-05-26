class Frame {
  
  constructor(rolls) {
    this.rolls = rolls;
  }

  frameScore() {
    if (this.spare() || this.strike()) {
      return null;
    } else {
      return this.pinsDown();
    }
  }

  spare() {
    return this.pinsDown() === 10 && this.rolls.length === 2;
  }

  strike() {
    return this.pinsDown() === 10 && this.rolls.length === 1;
  }

  pinsDown() {
    let sum = 0;
    this.rolls.forEach((a) => {
      sum += a;
    })
    return sum;
  }
}

module.exports = Frame;