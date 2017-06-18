'use strict';

function BowlingGame(){
  this.MAXIMUM_SCORE = 300;
  this._frames = [];
}

BowlingGame.prototype.getFramesNum = function () {
  return this._frames.length;
};

BowlingGame.prototype.addFrame = function (frame) {
  // we can have 1, 2 throws per frame, and 3 throws if last frame and previous frame was a strike.
  if (!frame.isLastFrame) {
    this._frames.push(frame);
  }
};

BowlingGame.prototype.getTotalScore = function () {
  return this._frames.reduce(function (score, frame, i, frames) {
    return (score + frame.getFrameTotalScore(frames[i + 1], frames[i + 2]));
  }, 0);
};
