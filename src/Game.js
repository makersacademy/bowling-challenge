'use strict';

var Game;

Game = function() {
  this.stored_pins = [];
};

Game.prototype.rolls_current_pins = function(pins) {
  return this.stored_pins.push(pins);
};

Game.prototype.score = function() {
  return this.stored_pins.reduce((total, roll) => total + roll);
};
