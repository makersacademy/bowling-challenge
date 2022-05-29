class Game {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    return this.rolls.push(pins);
  }

  calculateScore() {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0 ; frameIndex < 10; frameIndex++) {

      if(this.rolls[rollIndex] === 10) {
        score += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
        rollIndex++;

      } else {
        let frameSum = this.rolls[rollIndex] + this.rolls[rollIndex + 1];
        if (frameSum === 10) {
          score += 10 + this.rolls[rollIndex + 2];
        } else {
          score += frameSum;
        }

        rollIndex += 2
      }
    }
    return score;
  }
}

module.exports = Game;
