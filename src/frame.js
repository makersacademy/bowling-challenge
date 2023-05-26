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


  add(acc, a) {
    return acc + a;
  }
}

module.exports = Frame;