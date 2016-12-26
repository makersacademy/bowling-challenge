'use strict';

function Scoreboard() {
  this.scores = [];
  this.totalScores = [];
};

  Scoreboard.prototype.scoreFirstRoll = function(score1) {
    if (score1 === 10) {
      this.scores.push(score1)
      return 'X';
    } else {
      this.scores.push(score1)
      return score1
    };
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
      if (this.scores[scoreIndex-4] === 10) {
        console.log("strike")
        return this._multiStrike();
    } else if (this.scores[scoreIndex-3] === 10) {
        console.log("mulitstrike")
        return this._aStrike();
    } else if (scoreIndex >= 2 && this.scores[scoreIndex-1] !== 10) {
      console.log("anything")
        return this.calculateScores();
    };
  };

  Scoreboard.prototype.calculateScores = function(){
    var scoresIndex = this.scores.length;
      console.log(this.scores)
    var currentScore = this.scores[scoresIndex-2] + this.scores[scoresIndex-1];
      console.log(currentScore)
    if (currentScore === 10) {
      console.log("spare")
      this._spare();
    } else {
      this.totalScores.push(currentScore);
      return currentScore;
    };

  };

  Scoreboard.prototype._aStrike = function(){
    var scoresIndex = this.scores.length;
    if (scoresIndex > 2) {
      var currentScore1 = this.scores[scoresIndex-3] + this.scores[scoresIndex-2] + this.scores[scoresIndex-1]
      this.totalScores.push(currentScore1);
      this.calculateScores();
      return currentScore1;
    };
      };

  Scoreboard.prototype._multiStrike = function(){
        var scoresIndex = this.scores.length;
      if (scoresIndex >= 3) {
        var currentScore2 = this.scores[scoresIndex-4] + this.scores[scoresIndex-3] + this.scores[scoresIndex-2]
        this.totalScores.push(currentScore2);
        this._aStrike();
        return currentScore2;
      };

  };

  Scoreboard.prototype._spare = function() {
    var scoresIndex = this.scores.length;
    if (scoresIndex >= 2) {
      console.log("Hi Amber " + scoresIndex)
      var currentScore3 = this.scores[scoresIndex-3] + this.scores[scoresIndex-2] + this.scores[scoresIndex-1];
      console.log(currentScore3)
      this.totalScores.push(currentScore3);
      // this.calculateScores();

      return currentScore3;

    };

    // return "/"

  };
