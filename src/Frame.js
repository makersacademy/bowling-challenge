"use strict";

class Frame {
  constructor() {
    this.rolls = [];
  }

  newRoll(roll) {
    if(this._isOverTen(roll)) throw new Error("Cannot enter more than 10 in a single frame.");
    this.rolls.push(roll);
  }

  isLastRoll() {
    return this.rolls.length > 1 || this.rolls[0] == 10;
  }

  calculateScore(frames) {
    this.accumulativeScore = this.rolls.reduce((a,b) => a + b);
    if(frames.length > 1) {
      this.accumulativeScore += frames[frames.length - 2].accumulativeScore;
    }
  }

  _isOverTen(roll) {
    if(this.rolls.length == 0) {
      return roll > 10
    } else {
    return this.rolls[0] + roll > 10
    }
  }
}
