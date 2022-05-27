class Game {
  constructor() {
    this.rolls = [];
  }

  roll(numberOfPins) {
    this.rolls.push(numberOfPins);
  }

  calculateScore() {
    let score = 0;
    let rollNumber = 0;

    for (let frameNumber = 0; frameNumber < 12; frameNumber++) {
      let currentRoll = this.rolls[rollNumber];
      let nextRoll = this.rolls[rollNumber + 1];
      let nextAgainRoll = this.rolls[rollNumber + 2];

      if (this.isStrike(currentRoll)) {
        score += nextRoll;
        score += nextAgainRoll;
      }

      if (this.isSpare(currentRoll, nextRoll)) {
        score += nextAgainRoll;
        rollNumber += 1;
      }

      rollNumber += 1;
    }

    score += this.rolls.reduce((sum, current) => sum + current);
    return score;
  }

  isStrike(currentRoll) {
    return currentRoll === 10;
  }

  isSpare(currentRoll, nextRoll) {
    return currentRoll + nextRoll === 10;
  }
}

module.exports = Game;
