class Frame {
  constructor(rollOne = 0) {
    this.rollOne = rollOne
  }

  firstRoll(pinfall) {
    this.rollOne = pinfall
  }

}


module.exports = Frame
