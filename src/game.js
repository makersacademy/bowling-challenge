function Game() {
  this.totalScore = 0
  this.frame = 0
  this.frameScore = []
}

Game.prototype.getTotalScore = function() {
  return this.totalScore;
};

Game.prototype.bowl = function(pins) {
  this.frameScore += pins
};
