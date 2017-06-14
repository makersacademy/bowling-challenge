'use strict';

var Game;

Game = function() {
  this.stored_pins = [];
};

Game.prototype.rolls = function(pins) {
  if (this.stored_pins) 
  if (pins == 10) {
    this.strikeMessage();
    return this.stored_pins.push(pins, 0);
  } else {
    return this.stored_pins.push(pins);
  }
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
      pinsAfterStrike = (storedPins[index + 2] + storedPins[index + 3]) * 2;
    }
  });
  return pinsAfterStrike + 10;
};


Game.prototype.strikeMessage = function() {
  return "Congratulations you got a strike! Move on to the next frame";
};
