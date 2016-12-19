'use strict';

function Scoreboard() {
  this.scores = [];
  this.allScores = [];
  this.MAXSCORE = 10;
};

  Scoreboard.prototype.calculateScore = function(currentScore){
    this.allScores.push(currentScore)
    this.scores.push(currentScore.reduce(function(a,b){return a + b },0));
    return this.scores;
  };

  Scoreboard.prototype.bonusPoints = function() {
  if (this.scores[this.scores.length-2] === '0X') {
    return this.aStrike();
  } else if (this.scores[this.scores.length-2] === 10) {
    return this.spare();
  } else {
    return this.scores;
  };
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

Scoreboard.prototype.currentTotal = function() {
  this.total = this.scores.reduce(function(a,b){return a + b },0);
    if (this.total === 300) {
      return this.perfectGame();
    } else {
      return this.total;
    };
};

Scoreboard.prototype.perfectGame = function() {
  return 'Perfect Game!'
};
