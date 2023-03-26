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

    for (let frame = 0; frame < 10; frame++) {
      if (this.strike(rollIndex)) {
        if (this.rolls[rollIndex + 1] !== undefined && this.rolls[rollIndex + 2] !== undefined) {
          totalScore += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
        } else {
          break;
        }
        rollIndex += 1;
      } else if (this.spare(rollIndex)) {
        if (this.rolls[rollIndex + 2] !== undefined) {
          totalScore += 10 + this.rolls[rollIndex + 2];
        } else {
          break;
        }
        rollIndex += 2;
      } else {
        totalScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
        rollIndex += 2;
      }
    }

    return totalScore;
  }

  strike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }

  spare(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  }
}

module.exports = Game;
