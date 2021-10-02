'use strict';

class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    if (pins < 0 || pins > 10) {
      throw 'Can only roll numbers between 0 and 10';
    } else {
      this.rolls.push(pins);
    }
  }

  score() {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

      if (this.rolls[rollIndex] === 10) {
        score += this.strikeBonus(rollIndex);
        rollIndex++;
        continue;
      } else if (frameScore === 10) {
        score += this.spareBonus(rollIndex);
      } else {
        score += frameScore;
      }
      rollIndex += 2;
    }

    return score;
  }

  spareBonus(rollIndex) {
    return 10 + this.rolls[rollIndex + 2];
  }

  strikeBonus(rollIndex) {
    return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }
}
