var Bowling = function () {
  this.score = 0;
  this.frameNumber = 1;
};

Bowling.prototype.roll = function(pins) {
  this.score += pins;
};

Bowling.prototype.frameNumber = function(roll) {
  this.frameNumber += 1;
  // if 
};
