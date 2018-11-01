'use strict';

function Frame() {
  this.rolls = [];
}

Frame.prototype.recordRoll = function(numberOfPins) {
  if (this.rolls.length >= 2) {
    throw "Limit of two rolls per frame"
  };
  this.rolls.push(numberOfPins);
  return numberOfPins;
};
