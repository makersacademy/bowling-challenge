'use strict';

class Game {
  constructor() {
    this.frames = [];
    this.currentFrame = null;
    this.currentIndex = 0;
    this.previousFrame = null;
    this.previousIndex = null;
    this.nextFrame = this.frames[this.currentIndex];
    this.totalScore = 0;
  }
  getFrames() {
    return this.frames;
  }
  getFrame(frame) {
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
    this.frames.forEach((item, i) => {
      total = total + item.score;
    });
    return total;
  }

  calculateBonus(frame) {
    var currentIndex = this.frames.indexOf(frame);
    if (frame.hasSpare()) {
      return this.frames[currentIndex + 1].firstRoll;
    } else if (frame.hasStrike()) {
      if (this.frames[this.currentIndex].hasStrike()) {
        return 10;
      } else {
        return this.frames[currentIndex + 1].firstRoll + this.frames[currentIndex + 1].secondRoll;
      }
    } else {
      return 0;
    }
  }

  calculateFrameScore(frame) {
    var total = 0;
    var currentIndex = this.frames.indexOf(frame);
    if (this.frames[currentIndex + 2] &&
        this.frames[currentIndex + 1] &&
        this.frames[currentIndex].hasStrike() &&
        this.frames[currentIndex + 1].hasStrike() ) {
      total = frame.calculatePins() + this.calculateBonus(frame) + this.frames[currentIndex + 2].firstRoll;
    } else {
        total = frame.calculatePins() + this.calculateBonus(frame);
    }
    return frame.score = total;
  }

  calculateBonusForLast() {
    if (this.frames[8].hasStrike()) {
      return this.frames[9].firstRoll;
    } else {
      return 0;
    }
  }
}
