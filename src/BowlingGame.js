'use strict';

function BowlingGame() {
    this.rolls = [];
    this.score = 0;
    this.turn = 0;
  }

var scoreCard = [];

  BowlingGame.prototype.roll = function(pinsKnocked) {
    this.rolls.push(pinsKnocked);
  }


  BowlingGame.prototype.calculateScore = function() {
    
    for (var frameNum = 1; frameNum <= 10; frameNum ++) {
      if (this.rolls[this.turn] === 10){
        this.score += (this.rolls[this.turn] + this.rolls[this.turn + 1] + this.rolls[this.turn + 2])
        this.turn += 1;
      }
      else {
        this.score += this.rolls[this.turn] + this.rolls[this.turn + 1];
        this.turn += 2;
      }
    }
  }

module.exports = BowlingGame
