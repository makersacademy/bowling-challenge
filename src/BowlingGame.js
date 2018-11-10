'use strict';

function BowlingGame () {
  this.rolls = [];
};

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function(frame) {
  var runningTotal = 0;
  var rollIndex = 0;
  var game = this;

  for(var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrike()) {
      runningTotal += getStrikeScore();
      rollIndex++;
    } else if (isSpare()) {
      runningTotal += getSpareScore();
      rollIndex += 2;
    } else {
      runningTotal += getNormalScore();
      rollIndex += 2;
    }

  }
  return runningTotal;

  //helper methods for score function

  function isStrike() {
    return game.rolls[rollIndex] == 10;
  }

  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
  }

  function getStrikeScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function getSpareScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function getNormalScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }
};
