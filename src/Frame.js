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

  calculateScores(frames) {
    this.accumulativeScore = this.rolls.reduce((a,b) => a + b);
    if(frames.length > 1) {
      const previousFrame = frames[frames.length - 2];
      if(previousFrame._isSpareAwaitingBonus()) {
        previousFrame.accumulativeScore += this.rolls[0];
      } else if(previousFrame._isStrikeAwaitingBonus()) {
        if(this.rolls.length == 2) {
          previousFrame.accumulativeScore += this.rolls[0] + this.rolls[1];
          previousFrame._bonusGiven = true;
        }
      }
      this.accumulativeScore += previousFrame.accumulativeScore;
    }
  }

  _isOverTen(roll) {
    if(this.rolls.length == 0) {
      return roll > 10
    } else {
    return this.rolls[0] + roll > 10
    }
  }

  _isSpareAwaitingBonus() {
    if(!this._bonusGiven && this.rolls.length > 1 && this.rolls[0] + this.rolls[1] == 10) {
      this._bonusGiven = true;
      return true
    }
  }

  _isStrikeAwaitingBonus() {
    return !this._bonusGiven && this.rolls.length == 1 && this.rolls[0] == 10
  }
}
