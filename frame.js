class Frame {
  constructor(firstRoll, secondRoll) {
    this.firstRoll = firstRoll
    this.secondRoll = secondRoll
  }

  checkStrike() {
    return this.firstRoll === 10
  }

  checkSpare() {
    return this.firstRoll + this.secondRoll === 10 && this.firstRoll !== 10
  }

  firstRoll() {
    return this.firstRoll
  }

  secondRoll() {
    return this.secondRoll
  }
}

module.exports = Frame