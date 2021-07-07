'use strict';

function Game() {
  this.rolls = [];
};

Game.prototype.roll = function(pins) {
  if (this.isGameOver()) {
    return "Game over"
  } else {
    if (pins === 10) {
      this.rolls.push(pins)
      this.rolls.push(null)
    } else {
      this.rolls.push(pins)
    }
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

Game.prototype.isGameOver = function() {
  if (this.rolls.length === 21) {
    return true
  } else if (this.rolls.length === 20) {
    if (this.rolls.slice(-1)[0] === 10 || this.rolls.slice(-1)[0] + this.rolls.slice(-2)[0] === 10) {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
};
