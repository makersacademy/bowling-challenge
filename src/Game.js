'use strict';

class Game {
  constructor() {
    this.frames = [];
    this.currentFrame = null;
    this.currentIndex = -1;
    this.previousFrame = null;
    this.previousIndex = null;
    this.totalScore = 0;
  }
  getFrames() {
    return this.frames;
  }
  getFrame(frame) {
    frame.index ++;
    this.currentFrame = frame;
    this.currentIndex ++;

    if (this.currentIndex !== 0) {
      this.previousFrame = this.frames[this.currentIndex - 1];
      this.previousIndex = this.frames.indexOf(this.previousFrame);
    }
    this.frames.push(frame);
    return frame;
  }
  calculateGameScore() {
    var total = 0
    this.frames.forEach((item, i) => {
      total = total + item.calculatePins();
    });
    return total;
  }

  calculateFrameScore() {
    // var total;
    // total = this.currentFrame.calculatePins() + this.calculateBonusForPreviousFrame();
    // return total;
  }
  //
  // calculateBonusForPreviousFrame() {
  //   if (this.currentIndex == 0) {
  //     return 0
  //   } else {
  //     if (this.previousFrame.hasSpare()) {
  //       return this.currentFrame.firstRoll;
  //     }
  //     if (this.previousFrame.hasStrike()) {
  //         return this.currentFrame.roll(1) + this.currentFrame.roll(2);
  //     } else {
  //     return 0;
  //   }
  //  }
  // }
}
