'use strict';

function Frame() {
this.standingPins = 10
this.knockedPins = 0
}

Frame.prototype.getStandingPins = function() {
  return this.standingPins;
}

Frame.prototype.getKnockedPins = function() {
  return this.knockedPins;
}

Frame.prototype.setKnockedPins = function(number) {
  var error = "Only valid numbers: no cheating, please XD";
  if (!this.isValidNumber(number)) { throw new Error (error) }
  this.knockedPins = number;
}

Frame.prototype.isValidNumber = function(number) {
  return Number.isInteger(number) && number >= 0 && number <= 10;
}
