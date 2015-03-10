var Bowling = function() {
  this.currentScore = 0;
  this.firstRoll = 0;
  this.secondRoll = 0;
};

Bowling.prototype.pinsHit = function(pins) {
  this.currentScore += pins;
};