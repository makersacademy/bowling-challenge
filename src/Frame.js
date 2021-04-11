class Frame {
  constructor(frame) {
    this.frame = frame
    this.firstRoll = null
    this.secondRoll = null
  }

  enterRoll(score) {
    this._assignScore(score)
    return score
  }

  isComplete() {
    return this.firstRoll !== null && this.secondRoll !== null
  }

  _assignScore(score) {
    if (this.firstRoll === null) {
      this.firstRoll = score
    } else {
      this.secondRoll = score
    }
  }
}

// module.exports = Frame;
