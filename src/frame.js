"use strict";

class Frame {
  constructor() {
    this.rolls = [];
    this.bonusScore =0;
    this.bonusStatus = null
  }

  rollArray() {
    return this.rolls;
  }

  currentScore() {
    return (this.rolls.reduce((a, b) => a + b, 0)) + this.bonusScore;
  }

  updateRollScore(pins) {
    this.rolls.push(pins);
    this.updateBonusStatus()
  }

  updateBonusStatus() {
    if(this.rolls[0] === 10) {
      this.bonusStatus = 'strike'
    }

    else if (this.rolls.reduce((a, b) => a + b, 0) === 10) {
      this.bonusStatus = 'spare'
    }
  }

  isSpare() {
    return this.bonusStatus === 'spare';
  }

  isStrike() {
    return this.bonusStatus === 'strike';
  }

  updateBonusScore(pins) {
    this.bonusScore += pins
  }
}
