"use strict";
class Scorecard {
  constructor() {
    this.frames = [];
    for (let i = 0; i < 10; i++) {
      this.frames.push(new Frame());
    }
    this.frame = 1;
    this.roll = 1;
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
    this.updateCurrentFrame();
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
    }
  }

  isGameOver() {
    return this.currentFrame() >= 11;
  }
}
