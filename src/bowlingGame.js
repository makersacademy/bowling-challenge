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
    for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
      if
      (this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10) {
        results += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
      } else {
        results += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
      }
      rollIndex += 2;
    }
    return results;
  }
};
