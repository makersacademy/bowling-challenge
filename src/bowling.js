"use strict";

function Bowling() {
  this.rolls = []



  Bowling.prototype.roll = function (pins) {
    this.rolls.push(pins)
  }

  Bowling.prototype.result = function () {
    let score = 0;
    let rollPosition = 0;
    let currentGame = this;

    for (let framePosition = 0; framePosition < 10; framePosition++) {
      if (isStrike()) {
        score += strikeResult()
        rollPosition++;
      }
      else if (isSpare()) {
        score += spareResult()
        rollPosition += 2;

      } else {
        score += regularResult()
        rollPosition += 2;
      }
    }
    return score


    function isStrike() {
      return currentGame.rolls[rollPosition] == 10
    }
    function isSpare() {
      return currentGame.rolls[rollPosition] + currentGame.rolls[rollPosition + 1] == 10
    }
    function spareResult() {
      return currentGame.rolls[rollPosition] + currentGame.rolls[rollPosition + 1] + currentGame.rolls[rollPosition + 2];
    }
    function strikeResult() {
      return currentGame.rolls[rollPosition] + currentGame.rolls[rollPosition + 1] + currentGame.rolls[rollPosition + 2];
    }

    function regularResult() {
      return currentGame.rolls[rollPosition] + currentGame.rolls[rollPosition + 1];
    }
  }



};