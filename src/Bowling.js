'use strict';

var Bowling = function () {
  this.scores = [];
};

Bowling.prototype.rolls = function(roll) {
  this.scores.push(roll);
};

Bowling.prototype.score = function() {
  var sum = 0;
  var rollCount = 0;

  for (var i = 0; i < 10; i++) {
    if (this.scores[rollCount] + this.scores[rollCount + 1] === 10) {
      sum += this.scores[rollCount] + this.rolls[rollCount + 1] + this.rolls[rollCount + 2];
    } else {
    sum += this.scores[rollCount] + this.scores[rollCount + 1];
  }
  rollCount += 2;
}
  return sum;
};
