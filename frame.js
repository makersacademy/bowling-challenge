class Frame {
  constructor() {
    this.rolls = []
  }

  addRoll = (pins) => {
    return this.rolls.push(pins)
  }

  isStrike = () => {
    return true;
  }

}

module.exports = Frame;