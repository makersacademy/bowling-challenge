"use strict";

class Game {
  constructor(scorecard, frame) {
    this.scorecard = typeof scorecard !== 'undefined' ? scorecard : new Scorecard();
    this.currentFrame = typeof frame !== 'undefined' ? frame : new Frame();
    this.scorecard.newFrame(this.currentFrame)
  }

  roll(pins) {
    this.currentFrame.newRoll(pins)
    if(this.currentFrame.isLastRoll()) {
      this.currentFrame.calculateScore(this.scorecard.frames);
      this.currentFrame = new Frame();
      this.scorecard.newFrame(this.currentFrame);
    }
  }
}
