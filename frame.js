class Frame {
  constructor(rollOne = 0, rollTwo = 0, frameTotal = 0) {
    this.rollOne = rollOne;
    this.rollTwo = rollTwo;
    this.frameTotal = frameTotal;
  }

  firstRoll(pinfall) {
    this.rollOne = pinfall
  }

  secondRoll(pinfall) {
    this.rollTwo = pinfall
    this.endOfRound()
  }

  endOfRound() {
    this.frameTotal = this.rollOne + this.rollTwo;
  }
}


module.exports = Frame
