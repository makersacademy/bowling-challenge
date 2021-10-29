class Frame {
  constructor() {
    this.rolls = []
  }

  addRoll = (pins) => {
    return this.rolls.push(pins)
  }

}

module.exports = Frame;