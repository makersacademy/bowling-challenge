class Frame {
  constructor() {
    this.rolls = []
  }

  addRoll = (pins) => {
    return this.rolls.push(pins)
  }

  isStrike = () => {
    return this.rolls[0] === 10;
  }

  isSpare = () => {
    return (this.frameSum() === 10 && !this.isStrike());
  }

  frameSum = () => {
    return this.rolls.reduce((partial_sum, a) => partial_sum + a, 0);
  }
}

module.exports = Frame;