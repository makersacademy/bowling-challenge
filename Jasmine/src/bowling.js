'use strict';

function Bowling(){
  this.score = 0

  Bowling.prototype.currentScore = function() {
    return this.score;
  }

  Bowling.prototype._roundScore = function(ballOne, ballTwo) {
    return ballOne + ballTwo;
  }

  Bowling.prototype.play = function(scoreOne = 0, scoreTwo = 0) {
    return this.score += (this._roundScore(scoreOne, scoreTwo))
  }
}