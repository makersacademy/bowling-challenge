'use strict';

class Scorecard  {

  constructor() {
    this.frames = [new Frame()];
  }

  play(score) {
    if(this.lastFrame().isComplete() === true)  {
      this.addNewFrame();
    }
    this.lastFrame().bowl(score);
  }

  lastFrame() {
    return this.frames[this.frames.length-1];
  }

  getScore() {
    var score = 0
    for(var i=0; i<this.frames.length; i++) {
      score += this.frames[i].getScore();
    }
    return score;
  }

  addNewFrame() {
    if(this.frames.length === 9) {
      this.frames.push(new FinalFrame());
    } else {
      this.frames.push(new Frame());
    }
  }
}
