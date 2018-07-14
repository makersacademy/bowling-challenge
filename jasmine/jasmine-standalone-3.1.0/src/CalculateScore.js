'use strict';

function CalculateScore() {
  this.score = [];
}

CalculateScore.prototype.calculateScore = function(pins) {
   this.score.push(pins);
};

CalculateScore.prototype.getScore = function() {
  var sum = 0;
  for (var i = this.score.length; !!i--;) {
  sum += this.score[i];
  }
  return sum;
};
