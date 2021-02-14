'use strict';

class Game {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  get score() {
    // keep track of score and roll index
    let score = 0;
    let rollIndex = 0;
    //for the 10 frames check if roll strike or spare or else calc score.
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

  isSpare(frameScore) {
    return frameScore === 10;
  }

  spareBonus(rollIndex) {
    return 10 + this.rolls[rollIndex + 2];
  }

  isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10
  }

  strikeBonus(rollIndex) {
    return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }
}
