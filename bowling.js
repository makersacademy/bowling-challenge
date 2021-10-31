class Bowling {
  constructor() {
    this.rolls = [];
  }
  roll(pins) {
    this.rolls.push(pins);
  }

  get score() {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      if (this.isStrike(rollIndex)) {
        score += this.strikeBonus(rollIndex);
        rollIndex++;
        continue;
      }
      const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

      if (this.isSpare(frameScore)) {
        score += this.spareBonus(rollIndex);
      } else {
        score += frameScore;
      }

      rollIndex += 2;
    }

    return score;
  }
  isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }
  strikeBonus(rollIndex) {
    return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  isSpare(frameScore) {
    return frameScore === 10;
  }

  spareBonus(rollIndex) {
    return 10 + this.rolls[rollIndex + 2];
  }
}

module.exports = Bowling;