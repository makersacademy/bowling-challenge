var Game = function () {
  this.score = 0;
  this.rolls =[];
};

Game.prototype.roll = function (pins) {
  this.score += pins;
};

Game.prototype.displayScore = function () {
  return this.score;
};
