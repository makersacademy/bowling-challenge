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
    const arr = this.framesArray().map((frame) => frame.currentScore());
    return arr.reduce(this.getSum, 0);
  }

  framesArray() {
    return this.frames;
  }

  currentFrame() {
    return this.frame;
  }

  currentRoll() {
    return this.roll;
  }

  enterRollPins(pins) {
    const currentFrame = this.currentFrame();

    this.frames[currentFrame - 1].updateRollScore(pins);

    if (currentFrame > 1 && this.currentRoll() === 1 && this.isSparePendingBonus()) {
      this.spareScoring(pins)
    }

    if (currentFrame) this.updateCurrentFrame();
    this.updateCurrentRoll();
  }

  updateCurrentRoll() {
    const currentFrame = this.currentFrame();

    this.roll = this.frames[currentFrame - 1].rolls.length + 1;
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

  isSparePendingBonus () {
   const currentFrame = this.currentFrame();

   return this.frames[currentFrame - 2].bonusStatus === 'spare'
  }

  spareScoring (pins) {
    const currentFrame = this.currentFrame();

    this.frames[currentFrame - 2].updateBonusScore(pins)
  }

  isGameOver() {
    return this.play === null;
  }
}
