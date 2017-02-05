'use-strict';

function Scoresheet() {
  this.score = 0;
  this.frames = [];
  this.currentFrame = new Frame(this);
}

Scoresheet.prototype.addFrame = function(frame) {
  this.frames.push(frame);
}

Scoresheet.prototype.newCurrentFrame = function() {
  if (this.frames.length === 10) {
    return
  }
  this.currentFrame = new Frame(this);
}

Scoresheet.prototype.addToScore = function() {
  this.score += this.currentFrame.frameScore;
  this.addFrame(this.currentFrame)
  this.newCurrentFrame()
}
