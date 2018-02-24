'use strict;'

var BowlingGame = function() {
  this.rollArray = [];
};

BowlingGame.prototype.roll = function(pins) {
  this.rollArray.push(pins);
};

BowlingGame.prototype.score = function() {
  var result = 0;
  for (var i = 0; i < 20; i++) {
    result += this.rollArray[i];
  }
  return result;
};
