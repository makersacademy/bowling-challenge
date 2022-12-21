class Frame {
  constructor(roll_1, roll_2 = 0) {
    this.frame = []
    this.frame.push(roll_1)
    this.frame.push(roll_2)
  }

  frame_rolls() {
    return this.frame
  }

  total_frame_points() {
    return this.frame.reduce((a, b) => a + b, 0)
  }

  spare() {
    if (this.frame[0] < 10 && (this.frame[0] + this.frame[1]) === 10) {
      this.frame.push('spare')
      return true
    } else {
      return false
    }
  }

  strike() {
    if (this.frame[0] === 10) {
      this.frame.push('strike')
      return true
    }
    else {
      return false
    }
  }
}



module.exports = Frame
