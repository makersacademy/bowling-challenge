'use strict';

function Game() {
  this.rolls = [];
};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins)
};

Game.prototype.score = function() {
  var total = 0
  for (var i = 0; i < this.rolls.length; i++) {
    total += this.rolls[i]
  }
  return total
};
