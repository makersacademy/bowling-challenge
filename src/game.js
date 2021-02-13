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
    this._currentFrame().update(score);
    this.updatePreviousFrames(score);
    if(this._currentFrame().isFinished()) {
      this.startNextFrame();
    }
  }

  startNextFrame() {
    this._frameCounter ++;
  }

  _currentFrame() {
    return this._frames[this._frameCounter];
  }

  _previousFrame() {
    return this._frames[this._frameCounter - 1];
  }

  _frameBeforeLast() {
    return this._frames[this._frameCounter - 2];
  }

  updatePreviousFrames(score) {
    if(this._frameCounter === 0 || !this._previousFrame().isSpareOrStrike()) {
      return;
    }
    if(this._currentFrame()._rollTwo === null) {
      this._previousFrame().update(score);
      this.updateFrameBeforeLast(score);
    }
    else if(this._previousFrame().isStrike()) {
      this._previousFrame().update(score);
    }
  }

  updateFrameBeforeLast(score) {
    if(this._previousFrame().isStrike() && this._frameCounter > 1 && this._frameBeforeLast().isStrike()) {
      this._frameBeforeLast().update(score);
    }
  }

}