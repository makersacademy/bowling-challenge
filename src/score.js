'use strict';

function Score(frame = new Frame) {
  this.frame = frame;
};

Score.prototype.addScore = function() {
  var totalScore = 0;
  for (var i = 0; i < this.frame.showRolls().length; i ++) {
    totalScore += this.frame.showRolls()[i];
  };
  return totalScore;
};
