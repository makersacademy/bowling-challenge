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
    if (this.frames.length === 10) {
      for (var i = 0; i < this.frames.length - 1; i++) {
        total = total + this.frames[i].pins();
      }
      if (typeof this.frames[9] !== 'undefined') {
        total = total + this.frames[9].getRolls()[0];
      }
    } else {
      this.frames.forEach((item, i) => {
        total = total + item.pins();
      });
    }
    return total;
  }
  calculateGameScore() {
    if (this.frames.length == 1) {
      return this.calculatePins();
    }
    return this.calculatePins() + this.calculateBonus();
  }
  calculateBonus() {
    return (this.calculateAllFramesButLast() + this.calculateBonusForLast());
  }
  calculateAllFramesButLast() {
    var total = 0;
    for (var i = 0; i < this.frames.length - 1; i++) {
      if (this.frames[i].isSpare()) {
          total = total + this.frames[i+1].getRolls()[0];
      } else if (this.frames[i].isStrike() && (this.frames[i+1].isStrike())) {
        if (i === 8) {
          total = total + (this.frames[9].getRolls()[0] + this.frames[9].getRolls()[1]);
        } else {
          total = total + (10 + this.frames[i+2].getRolls()[0]);
        }
      } else if (this.frames[i].isStrike() && (this.frames[i+1].isStrike() == false)) {
        total = total + (this.frames[i+1].pins());
      } else {
        total;
      }
    }
    return total;
  }
  calculateBonusForLast() {
    if (typeof this.frames[9] !== 'undefined') {
      if (this.frames[9].isSpare()) {
        return this.frames[9].getRolls()[2];
      } else if (this.frames[9].isStrike()) {
        return this.frames[9].getRolls()[1] + this.frames[9].getRolls()[2];
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }
}
