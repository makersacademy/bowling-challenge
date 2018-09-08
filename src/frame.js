'use strict'

function Frame() {
  this.DEFAULT_PINS = 10;
  this.pins = this.DEFAULT_PINS;
};


Frame.prototype.remainingPins = function() {
  return this.pins;
};
