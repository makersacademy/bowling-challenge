'use strict';

class Scorecard {
  constructor() {
    this.frames = [];
    this.currentFrame = [];
    this.total = 0;
  }

  getFrames() {
    return this.frames;
  }

  getCurrentFrame() {
    return this.currentFrame;
  }

  getTotal() {
    return this.total;
  }

  roll(pins) {
    // add points to current frame
    this._pushToCurrentFrame(pins)
    // if first roll and not strike, then return
    if (this._isFirstRollAndNonStrike(pins)) {
      return;
    }
    // add current frame to frames
    this._pushCurrentFrameToFrames()
    // add sum of current frame to total
    this._addSumCurrentFrameToTotal()
    // clear current frame
    this.currentFrame = []
  }

  _pushToCurrentFrame(pins) {
    this.currentFrame.push(pins)
  }

  _pushCurrentFrameToFrames() {
    this.frames.push(this.currentFrame)
  }

  _addSumCurrentFrameToTotal() {
    this.total += this._sumCurrentFrame()
  }

  _sumCurrentFrame() {
    var sum = this.currentFrame.reduce(function(total, num) {
      return total + num;
    });
    return sum
  }

  _isFirstRollAndNonStrike(pins) {
    return (this._isFirstRoll() && this._isStrike())
  }

  _isFirstRoll() {
    return this.currentFrame.length == 1
  }

  _isStrike() {
    return this._sumCurrentFrame() < 10
  }
};
