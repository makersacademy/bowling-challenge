function Game() {
  this.gameTotal = 0;
  this.complete = false;
};

Game.prototype.recordBall = function(score){
  return this.gameTotal += score;
};

Game.prototype.isComplete = function() {
  return this.complete;
};
