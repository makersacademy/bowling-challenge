"use strict";

class Frame {
  constructor() {
    this.rolls = [];
    this.bonusScore = 0
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
    if(this.rollArray().reduce((a, b) => a + b, 0) === 10) {
      this.bonusStatus = 'spare'
    };
  }

  updateBonusScore(pins) {
    this.bonusScore += pins
  }
}
