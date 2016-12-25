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
    };
  };

  Scoreboard.prototype.scoreSecondRoll = function(score2){
    this.scores.push(score2)
  };

  Scoreboard.prototype.scoreThirdRoll = function(score3) {
    this.scores.push(score3)
  };

  Scoreboard.prototype.bonusPoints = function(){
    if (this.scores[this.scores.length-3] === 10) {
      return this.aStrike();
    } else if (this.scores[this.scores.length] >= 2) {
      return this.calculateScores();
    };
  };

  Scoreboard.prototype.calculateScores = function(){
    var currentScore = this.scores[this.scores.length-1] + this.scores[this.scores.length-2];
    this.totalScores.push(currentScore);
    return currentScore;
  };

  Scoreboard.prototype.aStrike = function(){
    if (this.scores.length === 3) {
      var currentScore1 = this.scores[this.scores.length-3] + this.scores[this.scores.length-2] + this.scores[this.scores.length-1];
      this.totalScores.push(currentScore1);
      this.calculateScores();
      return currentScore1;
    };
  };
