function Game() {
  this.totalScore = 0;
}

Game.prototype.getFrameNumber = function() {
  return this.frame.currentFrame;
};

Game.prototype.getTotalScore = function() {
  return this.totalScore;
};

Game.prototype.begin = function() {
  this.frame = new Frame(1);
};

Game.prototype.nextFrame = function() {
  this.frame = new Frame(this.frame.currentFrame + 1);
}
