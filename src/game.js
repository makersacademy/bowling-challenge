"use strict";

var BowlingGame = function() {
  this.rolls = [];
};

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function() {
  var result = 0;
  var rollIndex = 0;
  var game = this;

  for (var frameIndex  = 0; frameIndex < 10; frameIndex++) {
    if (isSpare()) {
      result += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    } else {
      result += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    }
    rollIndex += 2;
  }
  return result;

  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
  }
};