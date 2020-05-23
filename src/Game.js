'use strict';

class Game {
  constructor() {
    this.frames = [];
    this.currentFrame = null;
    this.currentIndex = null;
    this.previousFrame = null;
    this.previousIndex = null;
  }
  getFrames() {
    return this.frames;
  }
  getFrame(frame) {
    frame.index ++;
    this.currentFrame = frame;
    this.currentIndex = this.currentFrame.getIndex();

    if (this.currentIndex !== 0) {
      this.previousFrame = this.frames[this.currentIndex - 1];
      this.previousIndex = this.frames.indexOf(this.previousFrame);
    }
    this.frames.push(frame);
    return frame;
  }
  calculateGameScore() {
    var total = 0
    console.log(this.currentFrame)
    console.log(this.currentFrame.calculatePins());
    this.frames.forEach((item, i) => {
      total = total + item.calculatePins();
    });
    return total + this.calculateBonusForPreviousFrame();
  }
  calculateBonusForPreviousFrame() {
    if (this.currentIndex == 0) {
      return 0
    } else {
      if (this.previousFrame.hasSpare()) {
        return this.currentFrame.roll(1);
      }
      if (this.previousFrame.hasStrike()) {
          return this.currentFrame.roll(1) + this.currentFrame.roll(2);
      } else {
      return 0;
    }
   }
  }
}
