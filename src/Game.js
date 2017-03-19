var Game = function() {
  this.score = 0;
  this.completedFrames = [];
};

Game.prototype.roll = function(pins) {
  this.score += pins;
};
