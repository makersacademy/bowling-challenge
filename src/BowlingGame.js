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
    var turn = 0;
    
    for (var frameNum = 1; frameNum <= 10; frameNum ++) {
      if (this.rolls[turn] == 10){
        this.score += (this.rolls[turn] + this.rolls[turn + 1] + this.rolls[turn + 2])
        turn += 1;
      }
      else {
        this.score += this.rolls[turn] + this.rolls[turn + 1];
        turn += 2;
      }
    }
  }

module.exports = BowlingGame
