"use strict";
class Scorecard {
  constructor() {
    this.frames = [];
    for (let i = 0; i < 10; i++) {
      this.frames.push(new Frame());
    }
    this.frame = 1;
    this.roll = 1;
    this.play = true;
  }

  getSum(total, num) {
    return total + Math.round(num);
  }

  currentScore() {
    const arr = this.frames.map((frame) => frame.currentScore());
    return arr.reduce(this.getSum, 0);
  }

  currentFrame() {
    return this.frame;
  }

  currentRoll() {
    return this.roll;
  }

  _currentFrame() {
    return this.frames[this.frame - 1];
  }
  _previousFrame() {
    return this.frames[this.frame - 2];
  }

  enterRollPins(pins) {
    this._currentFrame().updateRollScore(pins);

    if (
      this.frame > 1 &&
      this.currentRoll() === 1 &&
      this.isSparePendingBonus()
    ) {
      this.spareScoring(pins);
    }

    this.updateCurrentFrame();
    this.updateCurrentRoll();
  }

  updateCurrentRoll() {
    this.roll = this._currentFrame().rolls.length + 1;
  }

  updateCurrentFrame() {
    const currentRoll = this.currentRoll();
    if (currentRoll > 1) {
      this.frame += 1;
      if (this.frame > 10) {
        this.play = null;
        this.frame = 10;
      }
    }
  }

  isSparePendingBonus() {
    return this._previousFrame().bonusStatus === "spare";
  }

  spareScoring(pins) {
    this._previousFrame().updateBonusScore(pins);
  }

  isGameOver() {
    return this.play === null;
  }
}
