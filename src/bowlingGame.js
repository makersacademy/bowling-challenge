// src/thermostat.js
'use strict';

var BowlingGame = function () {
  this.rolls = [];
};

BowlingGame.prototype = {
  roll: function (pins) {
    this.rolls.push(pins);
  },
  score: function () {
    var results = 0;
    var rollIndex = 0;
    var game = this;

    function isSpare () {
      return (game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10);
    }
    function isStrike () {
      return (game.rolls[rollIndex] === 10);
    }
    function getStrikeScore () {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
    }
    function getSpareScore () {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
    }
    function getNormalScore () {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
    }

    for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
      if (isSpare()) {
        results += getSpareScore();
        rollIndex += 2;
      } else if (isStrike()) {
        results += getStrikeScore();
        rollIndex++;
      } else {
        results += getNormalScore();
        rollIndex += 2;
      }
    }
    return results;
  }
};
