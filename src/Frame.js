class Frame {
  constructor(frame, currentTotal = 0) {
    this.frame = frame
    this.firstRoll = null
    this.secondRoll = null
    this.frameScore = 0
    this.strike = false
    this.spare = false
    this.total = currentTotal
    if (frame === 10) {
      this.thirdRoll = null
    }
  }

  enterRoll(score) {
    this._assignScore(score)
    this._updateFrameScore()
    return score
  }

  isComplete() {
    if (this.strike) return true

    return this.firstRoll !== null && this.secondRoll !== null
  }

  updateCurrentTotal() {
    if (this.frame === 10 && this.thirdRoll !== null) {
      this.total += this.thirdRoll
      return this.total
    }

    if (this.secondRoll === null ) {
      this.total += this.firstRoll
    } else {
      this.total += this.secondRoll
    }
    return this.total
  }

  isFirstRollComplete() {
    if (this.secondRoll === null && this.firstRoll !== null) return true;

    return false
  }

  _assignScore(score) {
    if (this.frame === 10 && this.secondRoll !== null) {
      this.thirdRoll = score
    }

    if (this.firstRoll === null) {
      if (score === 10) { this.strike = true}
      this.firstRoll = score
    } else {
      if (this.frameScore + score === 10) { this.spare = true}
      this.secondRoll = score
    }
  }

  _updateFrameScore() {
    this.frameScore = this.firstRoll + this.secondRoll
    if (this.frame === 10) {
      this.frameScore += this.thirdRoll
    }
  }
}

// module.exports = Frame;
