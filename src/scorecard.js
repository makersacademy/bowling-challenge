'use strict';

function Scorecard(){
  this.currentRoll = 0
  this.rolls = new Array(21)
};

Scorecard.prototype.roll = function (pins) {
  this.rolls[this.currentRoll++] = pins;
};

Scorecard.prototype.score = function () {
  var gameScore = 0;
  var rollIndex = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (this.rolls[rollIndex] == 10) {
      gameScore += 10;
      gameScore += this.rolls[rollIndex + 1];
      gameScore += this.rolls[rollIndex + 2];
      rollIndex += 1;
    }
    else if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] == 10) {
      gameScore += 10 + this.rolls[rollIndex + 2];
      rollIndex += 2;
    } else { gameScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
      rollIndex += 2;
    }
  }
  return gameScore;
};
