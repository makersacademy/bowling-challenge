"use strict";

const NUMBER_OF_FRAMES = 10;
const MAX_SCORE = 10;
const MIN_SCORE = 0;

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
    if(score > MAX_SCORE || score < MIN_SCORE) {
      throw new Error('Score must be between ' + MIN_SCORE + ' and ' + MAX_SCORE + '!');
    }
    this._currentFrame().update(score);
    this._updatePreviousFrames(score);
    if(this._currentFrame().isFinished()) {
      this._startNextFrame();
    }
  }

  _startNextFrame() {
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

  _updatePreviousFrames(score) {
    if(this._frameCounter === 0 || !this._previousFrame().isSpareOrStrike()) {
      return;
    }
    if(this._currentFrame()._rollTwo === null) {
      this._previousFrame().update(score);
      this._updateFrameBeforeLast(score);
    }
    else if(this._previousFrame().isStrike() && this._currentFrame()._rollThree === null) {
      this._previousFrame().update(score);
    }
  }

  _updateFrameBeforeLast(score) {
    if(this._previousFrame().isStrike() && this._frameCounter > 1 && this._frameBeforeLast().isStrike()) {
      this._frameBeforeLast().update(score);
    }
  }

}