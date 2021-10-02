'use strict';

class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

      if (this.rolls[rollIndex] === 10) {
        score += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
        rollIndex++;
        continue;
      } else if (frameScore === 10) {
        score += 10 + this.rolls[rollIndex + 2];
      } else {
        score += frameScore;
      }
      rollIndex += 2;
    }
    return score;
  }
}
