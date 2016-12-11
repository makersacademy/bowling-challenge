'use strict';

function BowlingGame() {
  this.framesInPlay = [];
  // this.frameIndex = 0
  this.totalScore = 0;
}

BowlingGame.prototype.roll = function(knockedPins) {
  if (this.framesInPlay.length === 0) {
    var frame = new Frame(knockedPins);
    this.framesInPlay.push(frame);
    frame.rollNumber += 1;
    frame.checkStrike(knockedPins);
  } else if (this._isTenthFrame()) {
    var frame = this._currentFrame();
    return frame.tenthFrame(knockedPins);
  } else if (this._currentFrame().rollNumber === 1) {
    var frame = this._currentFrame();
    frame.rollNumber += 1;
    frame.rollTwo = knockedPins;
    frame.checkSpare(knockedPins);
  } else {
    var frame = new Frame(knockedPins);
    this.framesInPlay.push(frame);
    frame.rollNumber += 1;
    frame.checkStrike(knockedPins);
  };
};

BowlingGame.prototype._currentFrame = function() {
  return this.framesInPlay.slice(-1)[0]
};

BowlingGame.prototype._isNextFrameTen = function() {
  return this.framesInPlay.length === 9 && this.framesInPlay.slice(-1)[0].rollNumber === 2
};

BowlingGame.prototype._isTenthFrame = function() {
  return this.framesInPlay.length === 10
};
