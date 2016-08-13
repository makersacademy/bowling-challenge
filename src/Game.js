function Game() {

}

Game.prototype.getFrameNumber = function() {
  return this.frame.currentFrame;
};

Game.prototype.getTotalScore = function() {
  return this.score.total;
};

Game.prototype.begin = function() {
  this.frame = new Frame(1);
  this.score = new Score();
};

Game.prototype.nextFrame = function() {
  this.frame = new Frame(this.frame.currentFrame + 1);
}
