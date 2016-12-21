'use strict';

function Game() {
  this.frames = this._createFrames();
  this.currentFrameIndex = 0;
}

Game.prototype.roll = function(pins) {
  this._addBonusPoints(pins);
  var currentFrame = this.frames[this.currentFrameIndex];

  if (!this.frames[9].isStrike() && !this.frames[9].isSpare()) {
    currentFrame.addToFrame(pins);
  }

  if (currentFrame.isOver() && !this._isTenthFrame()) {
    this.currentFrameIndex ++;

  }
}

Game.prototype.calculateScore = function(scoreUpTo=10) {
  var total = 0;
  for (var frameIndex = 0; frameIndex < scoreUpTo; frameIndex++) {
    var frame = this.frames[frameIndex];
    total += frame.getTotalScore();
  }
  return total;
}

Game.prototype._createFrames = function() {
  var frames = [];
  for (var i=0; i<10; i++) {
    frames.push(new Frame());
  }
  return frames;
}

Game.prototype._addBonusPoints = function(pins) {
  this.frames.forEach(function(frame) {
    frame.addToBonus(pins);
  })
}

// Game.prototype._isNormalFrame = function() {
//   return this.currentFrameIndex < 10;
// }

Game.prototype._rollNumber = function() {
  var currentFrame = this.frames[this.currentFrameIndex];
  return currentFrame.rollNumber();
}

Game.prototype.getRoll = function(frameNumber,rollNumber) {
  var frame = this.frames[frameNumber-1];
  return frame.scoreCard[rollNumber-1];
}

Game.prototype.getFrameScore = function(frameNumber) {
  var frame = this.frames[frameNumber - 1];
  return frame.getTotalScore();
}

Game.prototype._isTenthFrame = function() {
  return this.currentFrameIndex === 9;
}

Game.prototype.getFinalBonus = function(roll) {
  var frame = this.frames[9];
  if (roll === 2) {
    if (frame.isStrike()) {
      return frame.getBonusPoints(0);
    } else {
      return frame.scoreCard[1];
    }
  } else {
    if (frame.isStrike()) {
      return frame.getBonusPoints(1);
    } else {
      return frame.getBonusPoints(0);
    }
  }
}
