'use strict';

function Game() {
  this.frames = this._createFrames();
  this.currentFrameIndex = 0;
}

Game.prototype.roll = function(pins) {
  this._addBonusPoints(pins);
  if (this._isNormalFrame()) {
    var currentFrame = this.frames[this.currentFrameIndex];
    currentFrame.addToFrame(pins);
    if (currentFrame.isOver()) {
      this.currentFrameIndex ++;
    }
  }
}

Game.prototype.calculateScore = function() {
  var total = 0;
  this.frames.forEach(function(frame) {
    total += frame.getTotalScore();
  })
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

Game.prototype._isNormalFrame = function() {
  return this.currentFrameIndex < 10;
}

Game.prototype._rollNumber = function() {
  var currentFrame = this.frames[this.currentFrameIndex];
  return currentFrame.rollNumber();
}
