function Game() {
  this.currentFrame = 1;
};

Game.prototype.totalScore = 0;

Game.prototype.updateTotalScore = function(score) {
  this.totalScore += score;
  this.currentFrame ++;
};
