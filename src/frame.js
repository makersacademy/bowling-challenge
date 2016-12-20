function Frame() {
  this.currentFrame = startingFrame;
  this.maxFrames = frameMaximum;
}

Frame.prototype.moveToNextFrame = function() {
  return this.currentFrame++;
}

Frame.prototype.resetFrame = function() {
  this.currentFrame = 1;
}

const frameMaximum = 10;
const startingFrame = 1;
