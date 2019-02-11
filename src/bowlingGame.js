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
    for (var i = 0; i < 20; i++) {
      results += this.rolls[i];
    }
    return results;
  }
};
