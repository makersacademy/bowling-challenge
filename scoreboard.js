class Scoreboard {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let totalScore = 0;
    let rollIndex = 0;

    for (let frame = 1; frame <= 10; frame++) {
      if (this.isStrike(rollIndex)) {
        totalScore += 10 + this.strikeBonus(rollIndex);
        rollIndex += 1;
      } else if (this.isSpare(rollIndex)) {
        totalScore += 10 + this.spareBonus(rollIndex);
        rollIndex += 2;
      } else {
        totalScore += this.frameScore(rollIndex);
        rollIndex += 2;
      }
    }
    return totalScore;
  }

  isStrike(rollIndex) {
    return parseInt(this.rolls[rollIndex]) === 10;
  }

  strikeBonus(rollIndex) {
    if (rollIndex === 18) {
      return (
        parseInt(this.rolls[rollIndex + 1]) +
        parseInt(this.rolls[rollIndex + 2])
      );
    } else {
      return (
        parseInt(this.rolls[rollIndex + 1]) +
        (parseInt(this.rolls[rollIndex + 2]) || 0)
      );
    }
  }

  isSpare(rollIndex) {
    return (
      parseInt(this.rolls[rollIndex]) + parseInt(this.rolls[rollIndex + 1]) ===
      10
    );
  }

  spareBonus(rollIndex) {
    return parseInt(this.rolls[rollIndex + 2]);
  }

  frameScore(rollIndex) {
    return (
      parseInt(this.rolls[rollIndex]) + parseInt(this.rolls[rollIndex + 1])
    );
  }

  currentScore() {
    return this.rolls.reduce((total, index) => {
      return total + index;
    }, 0);
  }
}

module.exports = Scoreboard;
