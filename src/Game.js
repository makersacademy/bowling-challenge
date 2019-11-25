'use strict';

function Game() {
  this.rolls = [];
};

Game.prototype.roll = function (num) {
  this.rolls.push(num);
};

Game.prototype.score = function () {
  var game = this;
  var rollIndex = 0;
  var totalScore = 0;

  for (var frame = 0; frame < 10; frame++) {
    if (Strike()) {
      totalScore += strikeScore();
      rollIndex += 1;
    } else if (Spare()) {
      totalScore += spareScore();
      rollIndex += 2;
    } else {
      totalScore += normalScore();
      rollIndex += 2;
    }
  }

  return totalScore

  function Strike() {
    return game.rolls[rollIndex] == 10;
  }
  function Spare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
  }
  function strikeScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }
  function spareScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }
  function normalScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }
};
