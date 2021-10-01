'use strict';

// eslint-disable-next-line no-unused-vars
class Bowling {
  constructor() {
    this.rolls = new Array(21).fill(null);
    this.index = 0;
  }

  roll(pins) {
    if (this._isWrongNumber(pins)) {
      throw 'Can only roll positive values of 10 and below';
    } else {
      this.rolls[this.index] = parseInt(pins);
      this.index++
    }
  }

  score() {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      if (this._isStrike(rollIndex)) {
        score += this.strikeBonus(rollIndex);
        rollIndex++;
        continue;
      }

      const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];
      console.log(frameScore);
      if (this._isSpare(frameScore)) {
        score += this.spareBonus(rollIndex);
      } else {
        score += frameScore;
      }
      rollIndex += 2;
    }
    return score;
  }

  _isWrongNumber(pins) {
    return pins > 10 || pins < 0;
  }

  _isSpare(frameScore) {
    return frameScore === 10;
  }

  _isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10
  }
  
  strikeBonus(rollIndex) {
    return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  spareBonus(rollIndex) {
    return 10 + this.rolls[rollIndex + 2];
  }
}
