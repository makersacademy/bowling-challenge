"use strict";

function Scoreboard() {
  this.scores = [];
  this.totalScores = [];
  this.totalCalculated = 0;
};

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
    var scoreIndex = this.scores.length
      if (this.scores[scoreIndex-6] === 10 && this.scores[scoreIndex-4] ===10) {
        return this._multiStrike();
    } else if (this.scores[scoreIndex-4] === 10 && this.scores[scoreIndex-2] !== 10 ) {
        return this._aStrike();
    } else if (scoreIndex >= 2 && this.scores[scoreIndex-1] !== 10) {
        return this.calculateScores();
    }
  };

  Scoreboard.prototype.calculateScores = function(){
    var scoresIndex = this.scores.length;
    var currentScore = this.scores[scoresIndex-4] + this.scores[scoresIndex-3];
    if (currentScore === 10 && this.scores[scoresIndex-4] !==10) {
      this._spare();
    } else if (this.scores[scoresIndex-2] + this.scores[scoresIndex-1] ===10) {
        return "/"
    } else {
      var currentScore1 = this.scores[scoresIndex-2] + this.scores[scoresIndex-1];
      this.totalScores.push(currentScore1);
      this.scores.splice(0,2)
      return currentScore1;
    }
  };

  Scoreboard.prototype._aStrike = function(){
    var scoresIndex = this.scores.length;
    if (scoresIndex >= 4) {
      var currentScore1 = this.scores[scoresIndex-4] + this.scores[scoresIndex-2] + this.scores[scoresIndex-1]
      this.totalScores.push(currentScore1);
      this.scores.splice(0,2)
      this.bonusPoints()
      return currentScore1;
    }
  };

  Scoreboard.prototype._multiStrike = function(){
        var scoresIndex = this.scores.length;
      if (scoresIndex >= 6) {
        var currentScore2 = this.scores[scoresIndex-6] + this.scores[scoresIndex-4] + this.scores[scoresIndex-2]
        this.totalScores.push(currentScore2);
        if (this.scores[scoresIndex-2] === 10) {
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
    var scoresIndex = this.scores.length;
    if (scoresIndex >= 3) {
      var currentScore3 = this.scores[scoresIndex-4] + this.scores[scoresIndex-3] + this.scores[scoresIndex-2];
      this.totalScores.push(currentScore3);
      this.scores.splice(0,2)
      this.bonusPoints();
      return currentScore3;
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

  Scoreboard.prototype._perfectGame = function(){
    return "Perfect Game!"
  };

  Scoreboard.prototype._gutterGame = function(){
    return "Gutter Game!"
  };
