'use strict';

function Scoreboard() {
  this.scores = [];
  this.totalScores = [];
};

  Scoreboard.prototype.scoreFirstRoll = function(score1) {
    if (score1 === 10) {
      this.scores.push(score1)
      return 'X';
    };
    this.scores.push(score1)
  };

  Scoreboard.prototype.scoreSecondRoll = function(score2){
    this.scores.push(score2)
  };

  Scoreboard.prototype.scoreThirdRoll = function(score3) {
    this.scores.push(score3)
  };

  Scoreboard.prototype.calculateScores = function(){
    var currentScore = this.scores[this.scores.length-1] + this.scores[this.scores.length-2];
    this.totalScores.push(currentScore);
    return currentScore;
  };

  
