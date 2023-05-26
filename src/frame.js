class Frame {
  
  constructor(rolls) {
    this.rolls = rolls
  }

  frameScore() {
    let sum = 0
    this.rolls.forEach((a) => {
      sum += a;
    })
    return sum
  }

  spare() {
    return this.frameScore() === 10 && this.rolls.length === 2;
  }

  strike() {
    return this.rolls[0] == 10 && this.rolls.length === 1;
  }
}

module.exports = Frame;