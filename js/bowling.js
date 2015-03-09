var Bowling = function() {
  this.currentScore = 0;
};

Bowling.prototype.rolls = function(number) {
  number += this.pinsHit;
};

Bowling.prototype.pinsHit = function(pins) {
  this.currentScore += pins;
};