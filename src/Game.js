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

Game.prototype.strike = function() {
  // take the index to the left & to the right of the strike
  // this.stored_pins.forEach(function callback(currentValue, index, array) {
  //     //your iterator
  // }[, thisArg]);
};


//if the pins knocked down on rolls == 10 then take the 1st & 2nd index & add them together & add the bonus point
//If there is a strike on the rolls then go through the index
