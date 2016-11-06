function Game() {
  this.totalScore = 0;
  this.frame = new Frame();
}

Game.prototype.getTotalScore = function() {
  return this.totalScore;
};
