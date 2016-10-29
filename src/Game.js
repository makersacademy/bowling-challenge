function Game() {
  this.completedFrames = [];
  this.score = 0;
  this.currentFrame = new Frame();
}

Game.prototype.completeFrame = function() {
  this.score += this.currentFrame.score;
  this.completedFrames.push(this.currentFrame);
};
