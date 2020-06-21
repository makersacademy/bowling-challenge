'use strict';

class Scorecard {
  constructor () {
    this.frames = [];
  }

  isComplete() {
    if(this.frames.length === 10) {
      return true;
    } else {
      return false;
    }
  }

  storeFrame(frame = new Frame) {
    this.frames.push(frame);
  }

  isPreviousFrameAStrike(frame) {
    if (this.frames.indexOf(frame) > 0) {
      var i = this.frames.indexOf(frame);
      var isAStrike = this.frames[i - 1].isStrike;
      return isAStrike;
    } else {
      return false;
    }
  }

};
