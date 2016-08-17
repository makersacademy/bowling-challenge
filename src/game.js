function Game() {
  this.score = 0;
}

Game.prototype.getFrameIndex = function () {
  return this.frame.currentFrame;
};

Game.prototype.getTotalScore = function () {
  return this.score;
};

Game.prototype.begin = function() {
  this.frame = new Frame(1);
};

Game.prototype.nextFrame = function() {
  this.frame = new Frame(this.frame.currentFrame + 1);
}
