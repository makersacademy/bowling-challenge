'use strict';

var Game;

Game = function() {
  this.stored_pins = [];
};

Game.prototype.rolls = function(pins) {
  if (pins == 10) {
  this.strike();
}
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

Game.prototype.strike = function() {
  var pinsAfterStrike = 0;
  var storedPins = this.stored_pins;
  this.stored_pins.forEach(function(pin, index) {
    if(pin == 10) {
      pinsAfterStrike = (storedPins[index + 1] + storedPins[index + 2]) * 2;
    }
  });
  return pinsAfterStrike + 10;
};
