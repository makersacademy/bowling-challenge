'use strict';

class Scorecard {
  constructor () {
    this.frames = []
  }

  isComplete() {
    if(this.frames.length === 10) {
      return true;
    } else {
      return false;
    }
  }

  storeFrame(score) {
    this.frames.push(score);
  }

};
