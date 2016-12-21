'use strict';

function Scoreboard() {
  this.scores = [];
  this.allScores = [];
  this.MAXSCORE = 10;
};

  Scoreboard.prototype.scoreFirstRoll = function(score1) {
    return score1
  };

  Scoreboard.prototype.scoreSecondRoll = function(score2) {
    return score2;
  };

  Scoreboard.prototype.scoreThirdRoll = function(score3) {
    return score3;
  }

  Scoreboard.prototype.calculateScore = function(currentScore){
    this.allScores.push(currentScore)
    this.scores.push(currentScore.reduce(function(a,b){return a + b },0));
    return this.scores;
  };

  Scoreboard.prototype.currentTotal = function() {
    this.bonusPoints();
    var total = this.scores.reduce(function(a,b){return a + b },0);
      if (total === '2200X') {
        return this.perfectGame();
      } else if (total === 0) {
        return this.gutterGame();
      } else {
        return total;
      };
  };

  Scoreboard.prototype.increaseFrame = function() {
    this.frameCount = this.allScores.length;
    return this.frameCount
  };

  Scoreboard.prototype.bonusPoints = function() {
    if (this.scores[this.scores.length-2] === '0X' && this.scores[this.scores.length-1] === '0X'){
      return this.multiStrike();
  } else if (this.scores[this.scores.length-2] === '0X') {
      return this.aStrike();
  }  else if (this.scores[this.scores.length-2] === 10 && this.scores[this.scores.length-1] === '0X' ) {
        return this.strikeSpare();
  } else if (this.scores[this.scores.length-2] === 10) {
      return this.spare();
  } else {
      return this.scores;
  };
  };

  Scoreboard.prototype.multiStrike = function(){
    var strike = this.scores.indexOf('0X');
      if (~strike) {
        this.scores[strike] = this.MAXSCORE + this.MAXSCORE;
        return this.scores;
      }
    };

  Scoreboard.prototype.aStrike = function(){
    var strike = this.scores.indexOf('0X');
      if (~strike) {
        this.scores[strike] = this.MAXSCORE + this.scores.slice(-1)[0];
        return this.scores;
      }
    };

  Scoreboard.prototype.spare = function(currentScore) {
    var spare = this.scores.indexOf(10);
      if (~spare) {
        this.scores[spare] = this.MAXSCORE + this.allScores[this.allScores.length-1][0];
        return this.scores;
      }
  };

  Scoreboard.prototype.strikeSpare = function(currentScore) {
    var spare = this.scores.indexOf(10);
      if (~spare) {
        this.scores[spare] = this.MAXSCORE + this.MAXSCORE;
        return this.scores;
      }
  };

  Scoreboard.prototype.perfectGame = function() {
    return 'Perfect Game!'
  };

  Scoreboard.prototype.gutterGame = function() {
    return 'Gutter Game!'
  };
