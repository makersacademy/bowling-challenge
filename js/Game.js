"use strict";

function Game() {
  this._rolls = [];
  this._total = 0;
}

Game.prototype = {

  roll: function(pins) {
    this._rolls.push(pins);
  },

  score: function() {
    var rollIndex = 0;
    for(var frameIndex = 0; frameIndex < 10; frameIndex++) {
      if (this.isSpare(rollIndex)) {
        this._total += this.addRolls(rollIndex, 3);
      }
      else this._total += this.addRolls(rollIndex, 2);
      rollIndex += 2;
    }
    return this._total;
  },

  isSpare: function(rollIndex) {
    return this._rolls[rollIndex] + this._rolls[rollIndex + 1] === 10;
  },

  addRolls: function(rollIndex, rolls) {
    var result = 0;
    for(var i = 0; i < rolls; i++) {
      result += this._rolls[rollIndex + i];
    }
    return result;
  }

};
