var Bowling = function () {
  this.score = 0;
};

Bowling.prototype.roll = function(pins) {
  this.score += pins;
};
