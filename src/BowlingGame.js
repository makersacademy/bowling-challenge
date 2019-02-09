'use strict';

function BowlingGame() {
    this.frame = 0;
    this._rollNum = 0;
    this.score = 0;
    this.isInPlay = false
  }


  BowlingGame.prototype.roll = function(score) {
    if (this.frame < 10){
      this.isInPlay = true
    }
    else {
      this.isInPlay = false
    }

    this.score += score;

    if (this._rollNum < 2){ 
      this._rollNum += 1;
    }
    else {
      this._rollNum = 1;
    }
    if (this._rollNum === 1 && this.isInPlay){ 
      this.frame += 1
    }
    
};

module.exports = BowlingGame
