function Game() {
  this.completedFrames = [];
  this.score = 0;
  this.isOver = false;
}

Game.prototype.completeFrame = function() {
  this.score += this.currentFrame.score;
  this.completedFrames.push(this.currentFrame);
  if(this.completedFrames.length === 10) {
    this.isOver = true;
  }
}

Game.prototype.startNewFrame = function() {
  this.currentFrame = new Frame()
}
