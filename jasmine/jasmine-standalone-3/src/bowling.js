'use strict';

function Bowling() {
  this.rolls = [];
};

Bowling.prototype.roll = function(pins) {
  this.rolls.push(pins);
  return this.rolls;
  console.log(this.rolls);
};

Bowling.prototype.score = function () {
  var matchResult = 0;
  var rollsIndex = 0;

  for (var rollsIndex = 0; rollsIndex < 20; rollsIndex++) {
      matchResult += this.rolls[rollsIndex];
  };

  return matchResult;

};
