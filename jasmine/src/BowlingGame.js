"use strict"

class BowlingGame {
  constructor(rolls) {
  this.rolls = [];
}
}

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function() {
  var result = 0;
  var rollIndex = 0;
  var game = this;

  for (var i = 0; i < 10; i++) {
    if (isStrike()) {
      result += strikeScore();
      rollIndex++;
    } else {
      result += regularScore();
      rollIndex += 2;
    }
  };
  return result;

function isStrike() {
  return game.rolls[rollIndex] === 10;
}

function regularScore() {
  return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
}

function strikeScore() {
  return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
}
}
