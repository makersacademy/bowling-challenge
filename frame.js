class Frame {
  constructor(rollOne = 0, rollTwo = 0) {
    this.rollOne = rollOne
    this.rollTwo = rollTwo
  }

  firstRoll(pinfall) {
    this.rollOne = pinfall
  }

  secondRoll(pinfall) {
    this.rollTwo = pinfall
  }
}


module.exports = Frame
