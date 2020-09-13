'use strict';

class Scorecard  {

  constructor() {
    this.frames = [new Frame()];
    this.currentFrameIndex = 0;
  }

  play(score) {
    if(this.gameOver()) {
      return;
    } else {
      this.gameSetup();
      this.currentFrame().bowl(score);
      this.addBonus(score);
    }
  }

  currentFrame() {
    return this.frames[this.currentFrameIndex];
  }

  gameOver() {
    return this.frames.length === 10 && this.currentFrame().isComplete();
  }

  gameSetup() {
    if(this.currentFrame().isComplete()) {
      this.addNewFrame();
    }
  }

  addNewFrame() {
    if(this.currentFrameIndex === 8) {
      this.frames.push(new FinalFrame());
    } else {
      this.frames.push(new Frame());
    }
    this.currentFrameIndex += 1;
  }

  getFinalScore() {
    return this.getRunningTotalUpTo(9);
  }

  getRunningTotalUpTo(lastindex) {
    var score = 0;
    for(var i=0; i<=lastindex; i++) {
      score += this.frames[i].getScore();
    }
    return score;
  }

  addBonus(score) {
    for(var i=0; i<this.currentFrameIndex; i++) {
      if(this.frames[i].isNeedingABonus()) {
        this.frames[i].updateScore(score);
      }
    }
  }
}
