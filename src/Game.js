var Game = function() {
  this.score = 0;
  this.completedFrames = [];
};

Game.prototype.calculateScore = function(frameTotal) {
  this.score += frameTotal;
};

Game.prototype.roll = function(pins) {
  this.pins += pins;
};
