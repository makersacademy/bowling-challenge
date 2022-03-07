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

      if (this.rolls[rollIndex] === 10) {
        finalScore += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]
        rollIndex++
        continue;
      }

      let frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1]

      if (frameScore === 10) {
        finalScore += 10 + this.rolls[rollIndex + 2]
      } else {
        finalScore += frameScore
      }

      rollIndex += 2
    }
    return finalScore;
  }
}

module.exports = BowlingGame