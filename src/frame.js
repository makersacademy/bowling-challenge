function FrameManager() {
  this.currentFrame = 1;
}

FrameManager.prototype.moveToNextFrame = function() {
  if(this.currentFrame > 10) {
    throw new Error("Maximum number of frames reached!")
  }
  this.currentFrame++;
}
