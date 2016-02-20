'use strict;'

function Frame() {
  this.rolls = [];
  this.MAX_ROLLS = 2;
}

Frame.prototype.addRoll = function (pins) {
  if(this.rolls.length < this.MAX_ROLLS) {
    this.rolls.push(pins);
  }
  else {
    throw new Error("Rolls exceeded");
  }
};
