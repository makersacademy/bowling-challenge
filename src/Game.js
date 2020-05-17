'use strict';

class Game {

  constructor() {
    this.frames = [];
  }
  getFrames() {
    return this.frames;
  }
  getFrame(frame) {
    this.frames.push(frame);
    return frame;
  }
  calculatePins() {
    var total = 0;
    if (this.isGameFinished()) {
      for (var i = 0; i < this.frames.length - 1; i++) {
        total += this.frames[i].pins();
      }
        total += this.frames[9].getRolls()[0];
    } else {
      this.frames.forEach((frame) => {
        total += frame.pins();
      });
    }
    return total;
  }
  calculateGameScore() {
    return this.calculatePins() + this.calculateBonus();
  }
  calculateBonus() {
    return (this.calculateBonusAllFramesButLast() + this.calculateBonusForLast());
  }
  calculateBonusAllFramesButLast() {
    var total = 0;

    for (var i = 0; i < this.frames.length - 1; i++) {
      var currentFrame = this.frames[i];
      var nextFrame = this.frames[i+1];

      if (currentFrame.isSpare()) {
          total += nextFrame.getRolls()[0];
      } else if (currentFrame.isStrike() && (nextFrame.isStrike())) {
        if (i === 8) {
          var lastFrameRolls = this.frames[9].getRolls();
          total += (lastFrameRolls[0] + lastFrameRolls[1]);
        } else {
          total += (10 + this.frames[i+2].getRolls()[0]);
        }
      } else if (currentFrame.isStrike() && (nextFrame.isStrike() == false)) {
        total += (nextFrame.pins());
      } else {
        total;
      }
    }
    return total;
  }
  calculateBonusForLast() {
    if (this.isGameFinished()) {
      var lastFrame = this.frames[9];

      if (lastFrame.isSpare()) {
        return lastFrame.getRolls()[2];
      } else if (lastFrame.isStrike()) {
        return lastFrame.getRolls()[1] + lastFrame.getRolls()[2];
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }
  isGameFinished() {
    return this.frames.length == 10;
  }
}
