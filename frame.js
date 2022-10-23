class Frame {
  constructor (balls) {
    this.frame = balls
  }

  frameResult () {
    return this.frame
  }

  checkIfStrike () {
    if (this.frame[0] === 10) return true
    return false
  }

  checkIfSpare () {
    if (this.checkIfStrike() === true) return false
    if (this.frame[0] + this.frame[1] === 10) return true
    return false
  }

  frameScore () {
    return this.frame[0] + this.frame[1]
  }
}

module.exports = Frame
