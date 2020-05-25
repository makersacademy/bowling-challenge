"use strict";

class Bowling {

  constructor() {
    this.score = 0;
    this.frame = 1;
    this.lastFrame = 10
    this.scoreCard = []
  }

  scoring(currentFrameScore){
    let currentFrameTotal = currentFrameScore.reduce((a,b) => a + b, 0);
    if( currentFrameTotal > 10) {
      return "invalid score";
    } else {
      this.nextFrame()
      this.scoreCard.push(currentFrameScore)
      return this.score += currentFrameTotal
    }
  }

  currentFrame() {
    return this.frame;
  }

  nextFrame() {
    if (this.frame === this.lastFrame) {
      return;
    }
    this.frame += 1;
  }


};
