'use strict';

function Game() {
  this.frames = this._createFrames();
  this.currentFrameIndex = 0;
}

Game.prototype.roll = function(pins) {
  var currentFrame = this.frames[this.currentFrameIndex];
  
  currentFrame.addToFrame(pins);
}

Game.prototype.calculateScore = function() {
  return 0;
}

Game.prototype._createFrames = function() {
  var frames = [];
  for (var i=0; i<10; i++) {
    frames.push(new Frame());
  }
  return frames;
}
