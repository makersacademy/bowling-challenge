'use strict';

function BowlingGame(){
  this.MAXIMUM_SCORE = 300;
  this.MAX_FRAMES = 10
  this._frames = [];
}

BowlingGame.prototype.getNumOfFrames = function () {
  return this._frames.length;
};

BowlingGame.prototype.addFrame = function (frame) {
  // we can have 1, 2 throws per frame, and 3 throws if last frame and previous frame were a strike.
  if (!frame.isLastFrame) {
    this._frames.push(frame);
  }
};

BowlingGame.prototype.getFrameN = function (n) {
  // n between 0 and 9.
  if (n < this.MAX_FRAMES && (n < this.getNumOfFrames())) {
    return this._frames[n];
  }
  throw new TypeError("No such frame in this game!");
};

BowlingGame.prototype.getTotalScore = function () {
  return this._frames.reduce(function (score, frame, i, frames) {
    return (score + frame.getFrameTotalScore(frames[i + 1], frames[i + 2]));
  }, 0);
};
