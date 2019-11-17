'use strict';

function BowlingGame() {
  this.rolls = [];
};

BowlingGame.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function () {
  var totalScore = 0;
  for (var i = 0; i < 20; i++) {
    totalScore += this.rolls[i]
  }
  return totalScore;
};
