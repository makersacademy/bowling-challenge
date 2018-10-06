'use strict';

function Bowling() {
  this.rolls = [];
}

Bowling.prototype.roll = function(pins) {
  this.rolls.push(pins);
  return this.rolls;
  console.log(this.rolls);
};
