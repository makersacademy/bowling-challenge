'use strict';

function Game() {
  this.rolls = [];
};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.score = function() {
  var res = 0;
  var rollIdx = 0;

  for (var frameIdx = 0; frameIdx < 10; frameIdx++) {
    if (this.rolls[rollIdx] + this.rolls[rollIdx + 1] === 10) {
      res += this.rolls[rollIdx] + this.rolls[rollIdx + 1] + this.rolls[rollIdx + 2];
    } else {
      res += this.rolls[rollIdx] + this.rolls[rollIdx + 1];
    }
    rollIdx += 2;
  }
  return res;
};
