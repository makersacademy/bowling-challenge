function FrameSet() {
  this.number = 1;
  this.currentFrame = "frame" + this.number;
  this.previousFrame = "frame" + (this.number-1);
  this.MaxNumberFrames = 10;
}

FrameSet.prototype.nextFrame = function() {
  this.currentFrame = "frame" + (this.number + 1);
  this.number += 1;
  this.previousFrame = "frame" + (this.number - 1);
};
