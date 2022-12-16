class Frame {

  constructor (roll_1, roll_2, roll_3 = 0) {
    this.frame = []
    this.roll_3 = roll_3
    this.frame.push(roll_1)
    this.frame.push(roll_2)
    if (roll_3 != 0) {
      this.frame.push(roll_3)
    }
  }

  accessFrame() {
    return this.frame
  }

  frameTotal() {
    return this.frame.reduce((a, b) => a + b, 0)
  }

  checkForSpare() {
    if (this.frame[0] < 10 && this.frame.reduce((a, b) => a + b, 0) === 10) {
      return true 
    } else {
      return false
    }
  }

  checkForStrike() {
    if (this.frame[0] === 10) {
      return true 
    } else {
      return false
    }
  }
}

module.exports = Frame;