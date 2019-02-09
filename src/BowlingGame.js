'use strict';

function BowlingGame() {
    this.frame = 0;
    this._rollNum = 1;
    this.score = 0;
  }


  BowlingGame.prototype.roll = function(score) {
    this.score += score;
    if (this._rollNum === 1){ 
      this.frame += 1
    }
    if (this._rollNum === 1){ 
      this._rollNum += 1;
    }
    else {
      this._rollNum = 1;
    }
    
};

module.exports = BowlingGame
