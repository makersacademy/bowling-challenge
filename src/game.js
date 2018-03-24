'use strict';

function Game() {
  this.rolls = [];
};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.score = function() {
  var res = 0;
  for (var i = 0; i < 20; i++) {
    res += this.rolls[i];
  }
  return res;
};
