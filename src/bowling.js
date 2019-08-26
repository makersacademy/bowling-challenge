"use strict";

function Bowling() {
  this.rolls = []



  Bowling.prototype.roll = function (pins) {
    this.rolls.push(pins)
  }

  Bowling.prototype.result = function () {
    let score = 0;
    let rollPosition = 0
    for (let framePosition = 0; framePosition < 10; framePosition++) {
      if (this.rolls[rollPosition] + this.rolls[rollPosition] == 10) {
        score += this.rolls[rollPosition] + this.rolls[rollPosition + 1] + this.rolls[rollPosition + 2];
      }
      else {
        score += this.rolls[rollPosition] + this.rolls[rollPosition + 1];
      }
      rollPosition += 2;
    }
    return score
  }

};

