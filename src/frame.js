'use strict';

function Frame(){
  this.rolls = [];
  this.totalPins = 10;
}

Frame.prototype.roll = function(noOfPins) {
  if(this.rolls.length >= 2){
    throw new Error('Exceeded maximum rolls');
  } else if(this.rolls.length === 1)
    if (this.getPins() + noOfPins > 10) {
      throw new Error('Exceeded maximum pins');
  };
  this.rolls.push(noOfPins);
};

Frame.prototype.getRolls = function() {
  return this.rolls;
};

Frame.prototype.getPins = function() {
  return this.getRolls().reduce((previousValue,currentValue) => previousValue + currentValue);
};

Frame.prototype.isStrike = function() {
  return this.rolls[0] === this.totalPins;
};

Frame.prototype.isSpare = function() {
  return (this.rolls[0] != this.totalPins) && (this.getPins() === this.totalPins);
};
