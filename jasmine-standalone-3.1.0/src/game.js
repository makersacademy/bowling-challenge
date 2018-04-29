'use strict';

const GameMaximumFrames = 10;

function Game() {
  this.frames = [];
}

Game.prototype.totalScore = function() {
  return this.frames.reduce(function(score, frame) {
    return score + frame.totalScore();
  }, 0);
};

Game.prototype.roll = function(score) {
  var frame = this.currentFrame();
  var roll = new Roll(score, frame.frameNumber, (frame.rolls.length + 1));

  this._recordBonusRoll(roll);
  if (this._shouldHaveExtraRollForFrame(frame)) {
    frame.recordBonusRoll(roll);
  } else {
    frame.recordRoll(roll);
  };
  return roll;
};

Game.prototype.currentFrame = (function() {
  if(this.frames.length === 0) {
    return this._createAndSaveNewFrame();
  };

  var lastFrame = this.frames[this.frames.length - 1];
  if(this._shouldHaveExtraRollForFrame(lastFrame)) {
    return lastFrame;
  } else if(lastFrame.canRoll()) {
    return lastFrame;
  } else {
    return this._createAndSaveNewFrame();
  };
});

Game.prototype._recordBonusRoll = function(roll) {
  var i;
  for (i = 0; i < this.frames.length - 1; i++) {
    var frameMaybeAwaitingBonus = this.frames[i];
    if (frameMaybeAwaitingBonus.isAwaitingBonus()) {
      frameMaybeAwaitingBonus.recordBonusRoll(roll);
    };
  };
}

Game.prototype._shouldHaveExtraRollForFrame = function(frame) {
  return frame.frameNumber === GameMaximumFrames &&
         frame.isAwaitingBonus()
}

Game.prototype._createAndSaveNewFrame = function() {
  var frameNumber = this.frames.length + 1;
  var frame = new Frame(frameNumber);
  this.frames.push(frame);
  return frame;
}
