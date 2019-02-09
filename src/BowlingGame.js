'use strict';

function BowlingGame() {
    this.frame = 0;
    this._rollNum = 0;
    this.score = 0;
    this.isInPlay = false
  }


  BowlingGame.prototype.roll = function(score) {
    this.checkFramesToStartOrEndGame();
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

  BowlingGame.prototype.checkFramesToStartOrEndGame = function() {
    this.frame < 10 ? this.startGame() : this.endGame()
  }
 
  BowlingGame.prototype.startGame = function() {
    this.isInPlay = true
  }
  BowlingGame.prototype.endGame = function() {
    this.isInPlay = false
  }



module.exports = BowlingGame
