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
    return this.rolls.reduce((sum, num) => {
      return sum += num;
    }, 0)
    return sum;
  }
}

module.exports = Frame;