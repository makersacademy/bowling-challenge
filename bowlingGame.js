class BowlingGame{
  constructor() {
    this.rolls = []
  } 

  roll(pins) {
    this.rolls.push(pins)
  }
  score() {
    let result = 0
    for  (let i = 0; i < 20; i++) {
      result += this.rolls[i]
    }
    return result;
  }

}

module.exports = BowlingGame