'use strict';

class Scorecard  {

  constructor() {
    this.frames = [new Frame()];
  }

  play(score) {
    if(this.frames[this.frames.length-1].isComplete() === true)  {
      this.addNewFrame();
    }
    this.frames[this.frames.length-1].bowl(score);
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
