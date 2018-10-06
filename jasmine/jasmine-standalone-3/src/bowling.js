'use strict';

function Bowling() {
  this.score = 0;
  this.rolls = [];
}

Bowling.prototype.roll = function(pins) {
  this.rolls.push(pins);
  return this.rolls;
  console.log(this.rolls);
};

Bowling.prototype.getSum = function() {
  return this.rolls.reduce();
  // return getSum();
};
