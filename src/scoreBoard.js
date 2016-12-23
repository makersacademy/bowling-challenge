'use strict';

function Scoreboard() {
  this.scores = [];
  this.allScores = [];
  this.currentScore = [];
  this.MAXPINS = 10;
  this.totalCurrentScore = 0;
};

  Scoreboard.prototype.scoreFirstRoll = function(score1) {
    if (score1 === 10) {
      this.scores.push('X')
      return 'X'
    } else {
      this.currentScore.push(score1)
      return score1
    };
  };

  Scoreboard.prototype.scoreSecondRoll = function(score2) {
    this.currentScore.push(score2)
    return score2;
  };

  Scoreboard.prototype.scoreThirdRoll = function(score3) {
    return score3;
  }

  Scoreboard.prototype.calculateScore = function() {
    this.totalCurrentScore = this.currentScore.reduce(function(a,b){return a + b },0);
      if (this.totalCurrentScore === 10) {
        this.scores.push('/')
    } else {
        this.scores.push(this.totalCurrentScore)
        return this.scores;
    };
  };

  Scoreboard.prototype.bonusPoints = function() {
     if (this.scores[this.scores.length-2] === 'X') {
        return this.aStrike();
    } else if ((this.scores[this.scores.length-2] === '/')) {
        return this.spare();
    } else {
        return this.scores;
    };
  };

  Scoreboard.prototype.aStrike = function(){
    var strike = this.scores.indexOf('X');
      if (this.totalCurrentScore > 0) {
      this.scores[strike] = this.MAXPINS + this.totalCurrentScore;
          return this.scores;
      } else {
        this.scores[strike] = this.MAXPINS + this.MAXPINS
        return this.scores;
      }
  };

  Scoreboard.prototype.spare = function() {
    var spare = this.scores.indexOf('/');
     if (this.scores[this.scores.length-1] === 'X') {
        this.scores[spare] = this.MAXPINS + this.MAXPINS;
   } else {
        this.scores[spare] = this.MAXPINS + this.currentScore[this.currentScore.length-2];
        return this.scores;
    };
  };

  Scoreboard.prototype.totalScore = function() {
    var total = this.scores.reduce(function(a,b){return a + b },0);
    if (total === 0){
      return this.gutterGame();
    } else if (total === 240) {
      return this.perfectGame();
    } else {
      return total;
    }
  };


  Scoreboard.prototype.perfectGame = function() {
    return 'Perfect Game!'
  };

  Scoreboard.prototype.gutterGame = function() {
    return 'Gutter Game!'
  };

  Scoreboard.prototype.refreshCurrentScores = function() {
    return this.currentScore = [];
  };
