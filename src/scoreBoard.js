'use strict';

function Scoreboard() {
  this.scores = [];
  this.totalScores = [];
  this.totalCalculated = 0;
  this.MAXIMUM = 10;
}

  Scoreboard.prototype.scoreFirstRoll = function(score1) {
      this.scores.push(score1)
      return score1
  };

  Scoreboard.prototype.scoreSecondRoll = function(score2){
    this.scores.push(score2)
    return score2
  };

  Scoreboard.prototype.scoreThirdRoll = function(score3) {
    this.scores.push(score3)
    return score3
  };

  Scoreboard.prototype.bonusPoints = function(){
    var index = this.scores.length
      if (this._isMultiStrike()) {
        return this._multiStrike();
    } else if (this._isStrike()) {
        return this._aStrike();
    } else {
        return this.calculateScores();
    }
  };

  Scoreboard.prototype.calculateScores = function(){
    var index = this.scores.length;
    var currentScore = this.scores[index-4] + this.scores[index-3];
      if (currentScore === this.MAXIMUM  && this.scores[index-4] !==this.MAXIMUM ) {
        this._spare();
    } else if (!this._isSpare()) {
        var currentScore1 = this.scores[index-2] + this.scores[index-1];
        this.totalScores.push(currentScore1);
        this.scores.splice(0,2)
        return currentScore1;
    }
  };

  Scoreboard.prototype.calculatedTotal= function(){
    this.totalCalculated = this.totalScores.reduce(function(a,b){return a+b },0)
      if (this.totalCalculated === 300) {
        return this._perfectGame();
    } else if (this.totalCalculated === 0) {
        return this._gutterGame();
    } else {
        return this.totalCalculated;
    }
  };

  Scoreboard.prototype._aStrike = function(){
    var index = this.scores.length;
    if (index >= 4) {
      var currentScore1 = this.scores[index-4] + this.scores[index-2] + this.scores[index-1]
      this.totalScores.push(currentScore1);
      this.scores.splice(0,2)
      this.bonusPoints()
      return currentScore1;
    }
  };

  Scoreboard.prototype._multiStrike = function(){
        var index = this.scores.length;
      if (index >= 6) {
        var currentScore2 = this.scores[index-6] + this.scores[index-4] + this.scores[index-2]
        this.totalScores.push(currentScore2);
        if (this.scores[index-2] === this.MAXIMUM ) {
          this.scores.splice(0,2)
          this.bonusPoints();
        } else {
          this.scores.splice(0,2)
          this.bonusPoints();
        }
        return currentScore2;
      }

  };

  Scoreboard.prototype._spare = function() {
    var index = this.scores.length;
    if (index >= 3) {
      var currentScore3 = this.scores[index-4] + this.scores[index-3] + this.scores[index-2];
      this.totalScores.push(currentScore3);
      this.scores.splice(0,2)
      this.bonusPoints();
      return currentScore3;
    }
  };

  Scoreboard.prototype._isMultiStrike = function() {
    var index = this.scores.length
    return this.scores[index-6] === this.MAXIMUM && this.scores[index-4] ===this.MAXIMUM
  };

  Scoreboard.prototype._isStrike = function() {
    var index = this.scores.length
    return this.scores[index-4] === this.MAXIMUM  && this.scores[index-2] !== this.MAXIMUM
  };

  Scoreboard.prototype._isSpare = function(){
    var index = this.scores.length
    return this.scores[index-2] + this.scores[index-1] ===this.MAXIMUM
  };



  Scoreboard.prototype._perfectGame = function(){
    return "Perfect Game!"
  };

  Scoreboard.prototype._gutterGame = function(){
    return "Gutter Game!"
  };
