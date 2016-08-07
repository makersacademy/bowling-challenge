'use strict';

var BowlingScorer = function() {
  this.rolls = [];
};

BowlingScorer.prototype.roll = function(points) {
  this.rolls.push(points);
};

BowlingScorer.prototype.score = function() {
  var result = 0;
  var rollIndex = 0;
  var game = this;

  for (var i = 0; i < 10; i++) {
    if (isStrike()) {
      result += getStrikeScore();
      rollIndex += 1;
    } else if (isSpare()) {
      result += getSpareScore();
      rollIndex += 2;
    } else {
      result += getNormalScore();
      rollIndex += 2;
    }
  }

  return result;

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
