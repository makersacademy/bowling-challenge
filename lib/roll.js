'use strict';

function Roll() {
  this.PINS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}


Roll.prototype.new = function() {
  return this.PINS[Math.floor(Math.random() * this.PINS.length)];
};

module.exports = Roll;


