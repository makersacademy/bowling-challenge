'use strict;'

var BowlingGame = function() {
  this.rollArray = [];
};

BowlingGame.prototype.roll = function(pins) {
  this.rollArray.push(pins);
};

BowlingGame.prototype.score = function() {
  var result = 0;
  var rollIndex = 0;
  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (this.rollArray[rollIndex] + this.rollArray[rollIndex + 1] == 10) {
      result += this.rollArray[rollIndex] + this.rollArray[rollIndex + 1] + this.rollArray[rollIndex + 2];
    } else {
    result += this.rollArray[rollIndex] + this.rollArray[rollIndex + 1];
    }
    rollIndex += 2;
  }
  return result;
};
