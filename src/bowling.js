'use strict';

class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    if (this._isWrongNumber(pins)) {
      throw 'Can only roll values of 10 and below'
    } else {
      this.rolls.push(pins)
    }
  }

  score() {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {

    if (this._isStrike(rollIndex)) {
      score += this.strikeBonus(rollIndex);
      rollIndex++;
      continue; // The continue statement "jumps over" one iteration in the loop.
    }

    const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

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
    return pins > 10;
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

