class BowlingGame {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    return this.rolls.push(pins);
  }

  score() {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex += 1) {
      if (this.isStrike(rollIndex)) {
        score += this.strikeBonus(rollIndex);
        rollIndex += 1;
      } else {
        const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

        if (frameScore === 10) {
          score += this.spareBonus(rollIndex);
        } else {
          score += frameScore;
        }

        rollIndex += 2;
      }
      console.log(score);
    }
    return score;
  }

  private;

  isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }

  strikeBonus(rollIndex) {
    return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  spareBonus(rollIndex) {
    return 10 + this.rolls[rollIndex + 2];
  }
}

module.exports = BowlingGame;
