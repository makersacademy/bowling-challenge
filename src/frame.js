'use strict';

function Frame() {
  this.rolls = [];
}

Frame.prototype.recordRoll = function(numberOfPins) {
  if (this.rolls.length >= 2) {
    throw "Limit of two rolls per frame";
  } else if (numberOfPins > 10) {
    throw "Maximum of 10 pins per roll";
  } else if (this.rolls[0] + numberOfPins > 10) {
    throw "Limit of 10 pins knocked down per frame";
  } else {
    this.rolls.push(numberOfPins);
  }
  return numberOfPins;
};
