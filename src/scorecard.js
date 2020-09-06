'use strict';

class Scorecard  {

  constructor() {
    this.frames = [new Frame()];
  }

  lastFrameIndex() {
    return this.frames.length-1;
  }

  play(score) {
    if(this.frames[lastFrameIndex()].isComplete() === true)  {
      this.frames.push(new Frame());
    }
    this.frames[lastFrameIndex()].bowl(score);
  }
}
