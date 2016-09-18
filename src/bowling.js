'use strict';

var BowlingScorer = function() {
  this.rolls = [];
};

BowlingScorer.prototype.roll = function(points) {
  this.rolls.push(points);
};

BowlingScorer.prototype.score = function() {
  var result = 0;
  var frameIndex = 0;
  var game = this;

  for (var i = 0; i < 10; i++) {
    if (isStrike()) {
      result += getStrikeScore();
      frameIndex += 1;
    } else if (isSpare()) {
      result += getSpareScore();
      frameIndex += 2;
    } else {
      result += getNormalScore();
      frameIndex += 2;
    }
  }

  return result;

  function isStrike() {
    return game.rolls[frameIndex] === 10;
  }

  function isSpare() {
    return game.rolls[frameIndex] + game.rolls[frameIndex + 1] === 10;
  }

  function getStrikeScore() {
    return game.rolls[frameIndex] + game.rolls[frameIndex + 1] + game.rolls[frameIndex + 2];
  }

  function getSpareScore() {
    return game.rolls[frameIndex] + game.rolls[frameIndex + 1] + game.rolls[frameIndex + 2];
  }

  function getNormalScore() {
    return game.rolls[frameIndex] + game.rolls[frameIndex + 1];
  }

};
