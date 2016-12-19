'use strict';

function Game() {
  this.frames = this._createFrames();
  this.currentFrameIndex = 0;
}

Game.prototype.roll = function(pins) {
  var currentFrame = this.frames[this.currentFrameIndex];
  currentFrame.addToFrame(pins);
  if (currentFrame.isOver()) {
    this.currentFrameIndex ++;
  }
}

Game.prototype.calculateScore = function() {
  var total = 0;
  this.frames.forEach(function(frame) {
    total += frame.getScore();
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
