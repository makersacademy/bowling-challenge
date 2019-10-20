var Game = function() {
  this.score = 0
  this.frame = 1
};

Game.prototype.roll = function(pins) {
  this.score += pins
};
