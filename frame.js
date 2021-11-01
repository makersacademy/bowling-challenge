class Frame {
  constructor() {
    this.rolls = []
  }

  addRoll = (pins) => {
    this.rolls.push(pins)
  }

  isStrike = () => {
    return this.rolls[0] === 10;
  }

  isSpare = () => {
    return (!this.isStrike() && this.frameSum() === 10);
  }

  frameSum = () => {
    return this.rolls.reduce((partial_sum, a) => partial_sum + a, 0);
  }
}

module.exports = Frame;