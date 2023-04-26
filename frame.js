class Frame {
  constructor (frame) {
    this.frame = frame
    this.isStrike = false
    this.isSpare = false
    this.isValid = this.checkValid()
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
      this.isStrike = true
    } else {
      this.isStrike = false
    }
    return this.isStrike
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
