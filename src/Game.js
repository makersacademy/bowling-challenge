"use strict";

class Game {
  constructor(scorecard, frame) {
    this.scorecard = typeof scorecard !== 'undefined' ? scorecard : new Scorecard();
    this.currentFrame = typeof frame !== 'undefined' ? frame : new Frame();
  }

  roll(pins) {
    this.currentFrame.newRoll(pins)
  }
}
