class Frame {
  constructor () {
    this.frame = []
  }

  frameResult () {
    return this.frame
  }

  ball1 (ball) {
    this.frame[0] = ball
  }

  ball2 (ball) {
    this.frame[1] = ball
  }
  
  isStrike () {
    if (this.frame[0] === 10) return true
    return false
  }

  isSpare () {
    if (this.isStrike() === true) return false
    if (this.frame[0] + this.frame[1] === 10) return true
    return false
  }
}

module.exports = Frame
