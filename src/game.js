'use strict';

function Game() {
  this.rolls = [];
};

Game.prototype.roll = function(pins) {
  if (pins === 10) {
    this.rolls.push(pins)
    this.rolls.push(null)
  } else {
    this.rolls.push(pins)
  }
};

Game.prototype.score = function() {
  var total = 0;
  var rollNumber = 0;

  for (var i = 0; i < 10; i++) {
    if (this.rolls[rollNumber] === 10) {
      if (this.rolls[rollNumber + 2] === 10) {
        total += this.rolls[rollNumber] + this.rolls[rollNumber + 2] + this.rolls[rollNumber + 4]
      } else {
        total += this.rolls[rollNumber] + this.rolls[rollNumber + 2] + this.rolls[rollNumber + 3]
      }
    } else if (this.rolls[rollNumber] + this.rolls[rollNumber + 1] === 10) {
      total += this.rolls[rollNumber] + this.rolls[rollNumber + 1] + this.rolls[rollNumber + 2]
    } else {
      total += this.rolls[rollNumber] + this.rolls[rollNumber + 1]
    }
    rollNumber += 2;
  }
  return total
};
