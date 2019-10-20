var Game = function() {
  this.score = 0
};

Game.prototype.getCurrentScore = function() {
  return this.score;
};

Game.prototype.roll = function(pins) {
  this.score += pins
};

Game.prototype.turn = function(turn, pins) {
  Game.prototype.roll(pins)
};
