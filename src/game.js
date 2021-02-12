"use strict";

const NUMBER_OF_FRAMES = 10;

class Game {

  constructor(frameClass = Frame, frameTenClass = FrameTen) {
    this._frameCounter = 0;
    this._frames = [];
    for(let i = 1; i <NUMBER_OF_FRAMES; i++) {
      this._frames.push(new frameClass());
    }
    this._frames.push(new frameTenClass());
  }

  bowl(score) {
    this.currentFrame().update(score);
    this.updatePreviousFrames(score);
    if(this.currentFrame().isFinished()) {
      this.startNextFrame();
    }
  }

  startNextFrame() {
    this._frameCounter ++;
  }

  currentFrame() {
    return this._frames[this._frameCounter];
  }

  previousFrame() {
    return this._frames[this._frameCounter - 1];
  }

  updatePreviousFrames(score) {
    if(this._frameCounter === 0 || !this.previousFrame().isSpareOrStrike()) {
      return;
    }
    else if(this.currentFrame()._rollTwo === null) {
      this.previousFrame().update(score);
    }
  }

}