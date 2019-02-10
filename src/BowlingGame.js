'use strict';

function BowlingGame() {
    this.rolls = [];
    this.score = 0;
  }

var scoreCard = [];

  BowlingGame.prototype.roll = function(pinsKnocked) {
    this.rolls.push(pinsKnocked);
  }


  BowlingGame.prototype.calculateScore = function() {
    var rollNum = 0;
    
    for (var frameNum = 1; frameNum <= 10; frameNum ++) {
      this.score += this.rolls[rollNum] + this.rolls[rollNum + 1];
      rollNum += 2;
    }
  }
module.exports = BowlingGame
