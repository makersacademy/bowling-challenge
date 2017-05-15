"use strict";

function Game() {
  this.rolls = [];
  this.total = 0;
}

Game.prototype = {

  roll: function(pins) {
    this.rolls.push(pins);
  },

  score: function() {
    var rollIndex = 0;

    for(var frameIndex = 0; frameIndex < 10; frameIndex++) {
      if (this.isStrike(rollIndex)) {
          this.total += this.addRolls(rollIndex, 3);
          rollIndex += 1;
      } else if (this.isSpare(rollIndex)) {
          this.total += this.addRolls(rollIndex, 3);
          rollIndex += 2;

      } else {
          this.total += this.addRolls(rollIndex, 2);
          rollIndex += 2;
        }
      }
    return this.total;
  },

  isSpare: function(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  },

  isStrike: function(rollIndex) {
    return this.rolls[rollIndex] === 10;
  },

  addRolls: function(rollIndex, rolls) {
    var result = 0;
    for(var i = 0; i < rolls; i++) {
      result += this.rolls[rollIndex + i];
    }
    return result;
  }

};
