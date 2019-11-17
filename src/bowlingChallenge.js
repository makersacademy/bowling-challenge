'use strict';

function BowlingGame() {
  this.rolls = [];
};

BowlingGame.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function () {
  var game = this;
  var rollIndex = 0;
  var totalScore = 0;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isSpare()) {
      totalScore += spareScore();
      rollIndex += 2;
    } else {
      totalScore += normalScore();
      rollIndex += 2;
    }
  }

  return totalScore

  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
  }
  function spareScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }
  function normalScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }
};
