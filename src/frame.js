'use strict';

function Frame(){
  this.rolls = []
}

Frame.prototype.roll = function(noOfPins) {
  this.rolls.push(noOfPins);
};

Frame.prototype.getRolls = function() {
  return this.rolls;
};
