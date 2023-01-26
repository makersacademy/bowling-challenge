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

      if(this.isAStrike(rollIndex)) {
        score += this.strikeBonus(rollIndex);
        rollIndex++;

      } else {
        let frameSum = this.frameScore(rollIndex);
        if (this.isASpare(frameSum)) {
          score += this.spareBonus(rollIndex)
        } else {
          score += frameSum;
        }

        rollIndex += 2
      }
    }
    return score;
  }

  frameScore(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }
  
  isASpare(frameSum) {
    return frameSum === 10;
  }

  spareBonus(rollIndex) {
    return 10 + this.rolls[rollIndex + 2];
  }

  isAStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }

  strikeBonus(rollIndex) {
    return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }
}

module.exports = Game;
