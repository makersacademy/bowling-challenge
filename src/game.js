var Game = function(){
    this.totalScore = 0;
};

Game.prototype.getTotalScore = function () {
  return this.totalScore;
};

Game.prototype.updateTotalScore = function (frameScore) {
  this.totalScore += frameScore
};
