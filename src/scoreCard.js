'use strict';

class Scorecard  {
  constructor() {
    this.frames = [new Frame()];
  }

  play(score) {
    if(this.frames[this.frames.length-1].isComplete() === true)  {
      this.frames.push(new Frame());
    }
    this.frames[this.frames.length-1].bowl(score);
  }

  getScore() {
    let score = 0
    for(let i = 0; i < this.frames.length; i++) {
      score += this.frames[i].getScore();
    }
    return score;
  }
}