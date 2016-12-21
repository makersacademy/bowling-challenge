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

Game.prototype._isNormalFrame = function() {
  return this.currentFrameIndex < 10;
}

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
