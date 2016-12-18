function FrameManager(pins) {
  this.currentFrame = 1;
  this.maxFrames = 10;
}

FrameManager.prototype.moveToNextFrame = function() {
  return this.currentFrame++;
}

FrameManager.prototype.resetFrame = function() {
  this.currentFrame = 1;
}
