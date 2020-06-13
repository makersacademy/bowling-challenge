'use strict';

class Game {
  constructor() {
    this.frames = [];
    this.currentFrame = null;
    this.currentIndex = 0;
    this.totalScore = 0;
  }
  getFrames() {
    return this.frames;
  }
  getFrame(frame) {
    this.currentFrame = frame;
    this.currentIndex = this.currentFrame.getIndex();
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
    var nextIndex = currentIndex + 1
    if (frame.hasSpare()) {
      return this.frames[nextIndex].firstRoll;
    } else if (frame.hasStrike()) {
      if (this.frames[nextIndex].hasStrike()) {
        return 10;
      } else {
        return this.frames[nextIndex].firstRoll + this.frames[nextIndex].secondRoll;
      }
    } else {
      return 0;
    }
  }
  calculateFrameScore(frame) {
    var total = 0;
    var currentIndex = this.frames.indexOf(frame);
    var nextIndex = currentIndex + 1
    if (this.frames[currentIndex + 2] &&
        this.frames[nextIndex] &&
        this.frames[currentIndex].hasStrike() &&
        this.frames[nextIndex].hasStrike() ) {
      total = frame.calculatePins() + this.calculateBonus(frame) + this.frames[currentIndex + 2].firstRoll;
    } else {
      total = frame.calculatePins() + this.calculateBonus(frame);
    }
    return frame.score = total;
  }
  calculateBonusForLast() {
    if (this.frames[8].hasStrike() && this.frames[9].hasStrike()) {
      console.log(this.frames[9].secondRoll)
      return this.frames[9].secondRoll;
    } else {
      return 0;
    }
  }
}
