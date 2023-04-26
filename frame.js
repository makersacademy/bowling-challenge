class Frame {
  constructor (round, frame) {
    this.round = round;
    this.frame = frame
    this.isStrike = this.getStrike()
    this.isSpare = this.getSpare()
    this.isValid = this.checkValid()
  }

  getIndex () {
    return this.round - 1;
  }

  getFrame () {
    return this.frame
  }

  checkValid () {
    if (this.getTotal() < 11) {
      return true
    } else {
      return false
    }
  }

  getValid () {
    return this.isValid
  }

  getTotal () {
    let frameTotal = 0
    this.frame.forEach(obj => {
      frameTotal += obj
    })
    return frameTotal
  }

  getStrike () {
    if (this.frame[0] === 10) {
      return true
    } else {
      return false
    }
  }

  getSpare () {
    if (this.getTotal() === 10 && this.getStrike() === false) {
      this.isSpare = true
    } else {
      this.isSpare = false
    }

    return this.isSpare
  }
}

module.exports = Frame
