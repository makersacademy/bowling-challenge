var Bowling = function () {
  this.score = 0;
  this.frameNumber = 1;
};

Bowling.prototype.roll = function(pins) {
  this.score += pins;
  this.frameNumber += 1;
};
