'use strict';

function Game() {
  this.frames = this._createFrames();
  this.currentFrameIndex = 0;
  // this.currentFrame = this.frames[this.currentFrameIndex];
}

Game.prototype.roll = function(pins) {
  if (this.currentFrameIndex != 10) {
    var currentFrame = this.frames[this.currentFrameIndex];
    this.addBonusPoints(pins);
    currentFrame.addToFrame(pins);
    if (currentFrame.isOver()) {
      this.currentFrameIndex ++;
    }
  } else {
    this.addBonusPoints(pins);
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

Game.prototype.addBonusPoints = function(pins) {
  this.frames.forEach(function(frame) {
    frame.addToBonus(pins);
  })
}
