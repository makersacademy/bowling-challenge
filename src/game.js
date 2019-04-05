function Game() {
  this.gameTotal = 0;
};

Game.prototype.recordBall = function(score){
  return this.gameTotal += score;
};
