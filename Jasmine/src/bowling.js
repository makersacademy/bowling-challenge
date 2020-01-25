'use strict';

function Bowling(){
  this.score = 0;
  this.game = [];

  Bowling.prototype.currentScore = function(){
    return this.score;
  }

  Bowling.prototype.currentRound = function(){
    return (this.game.length + 1);
  }

  Bowling.prototype._roundScore = function(ballOne, ballTwo){
    return ballOne + ballTwo;
  }

  Bowling.prototype.play = function(scoreOne = 0, scoreTwo = 0){
    if (this.game.length >= 10) {
      return `End of game, final score: ${this.score} points!`;
    }
    else {
      var x = (this.score += (this._roundScore(scoreOne, scoreTwo)));
      this.game.push(x);
      return x;
    }
  }
}

  
