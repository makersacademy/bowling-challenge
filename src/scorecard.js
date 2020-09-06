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

  addNewFrame() {
    if(this.frames.length === 9) {
      this.frames.push(new FinalFrame());
    } else {
      this.frames.push(new Frame());
    }
  }

  getScore() {
    var score = 0
    var lastindex = this.frames.length-1;
    for(var i=0; i<lastindex; i++) {
      this.addBonus(i);
      score += this.frames[i].getScore();
    }
    score += this.frames[lastindex].getScore();
    return score;
  }

  addBonus(index) {
    var frame = this.frames[index];
    if(frame.isNeedingABonus()) {
      frame.updateScore(this.bonusAmount(index));
    }
  }

  bonusAmount(index) {
    var frame = this.frames[index];
    var nextFrame = this.frames[index+1];
    var thirdFrame = this.frames[index+2];
    if(frame.isASpare()) {
      return nextFrame.firstBowl();
    } else if(index !== 8 && frame.isAStrike() && nextFrame.isAStrike()) {
      return nextFrame.firstBowl() + thirdFrame.firstBowl();
    } else {
      return nextFrame.firstBowl() + nextFrame.secondBowl();
    }
  }
}
