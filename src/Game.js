'use strict';

var Game;

Game = function() {
  this.stored_pins = [];
};

Game.prototype.rolls = function(pins) {
  return this.stored_pins.push(pins);
};

Game.prototype.score = function() {
  var sum = 0;
  var pins = this.stored_pins;

  for (var index = 0; index < pins.length; index++) {
    sum += pins[index];
  }
  return sum;
};
