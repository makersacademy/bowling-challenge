class BowlingGame {
  constructor() {
    this.rolls = []
  }
  roll(pins) {
    this.rolls.push(pins)
  }
  score() {
    let finalScore = 0
    let rollIndex = 0

    for(let j = 0; j < 10; j++) {
      let frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1]

      finalScore += frameScore
      rollIndex += 2
    }
    return finalScore;
  }
}

module.exports = BowlingGame