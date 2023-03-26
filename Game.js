class Game {
  constructor(pins) {
    this.rolls = [];
  }

  roll(pins) {
  this.rolls.push(pins);
  }

  score() {
    let totalScore = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];
      totalScore += frameScore;
      rollIndex += 2;
    }

    return totalScore;
  }
}

module.exports = Game;
