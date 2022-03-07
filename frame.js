class Frame {
  constructor() {
    this.rolls = []
  }

  roll(pins) {
    this.rolls.push(pins)
  }

  getScore() {
    let sum = 0

    for (let i = 0; i < this.rolls.length; i++) {
      sum += this.rolls[i];
    }
    return sum
  }

  isStrike() {
    if (this.rolls[0] === 10){
      return true
    } else {
      return false
    }
  }

  isSpare() {
    if (this.rolls[0] + this.rolls[1] === 10){
      return true
    } else {
      return false
    }
  }

  isFrameFinished() {
    if (this.rolls.length > 1 || this.isStrike()) {
      return true 
    } else {
      return false
    }
  }

}


module.exports = Frame;