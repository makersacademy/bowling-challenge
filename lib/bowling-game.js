
class BowlingGame {

  constructor() {
    this.rolls = []
  }
  
  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let runningScore = 0
    for (let i = 0; i < 20; i++) {
      runningScore += this.rolls[i];
    }
    return runningScore
  }
}

module.exports = BowlingGame;