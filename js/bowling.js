var Bowling = function() {
  this.currentScore = 0;
};

Bowling.prototype.roll = function(number, pins) {
  var i;
  for (i = 0; i < number; i++) {
    this.roll(pins);
  }
};