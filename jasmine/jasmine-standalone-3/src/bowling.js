'use strict';

function Bowling() {
  this.rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.counter = 0;
};

Bowling.prototype.roll = function (pins) {
  this.rolls[this.counter] = pins;
  this.counter += 1;
  console.log(this.rolls);
};

Bowling.prototype.score = function () {
  var matchResult = 0;
  var rollsIndex = 0;

  for (var frame = 0; frame < 10; frame++) {
    if (this.rolls[rollsIndex] == 10) {
      matchResult += this.rolls[rollsIndex] + this.rolls[rollsIndex + 1] + this.rolls[rollsIndex + 2];
      rollsIndex++; // STRIKE!
    } else {
      matchResult += this.rolls[rollsIndex] + this.rolls[rollsIndex + 1];
      rollsIndex += 2; // NORMAL SCORE
    };
  };

  return matchResult;
};
