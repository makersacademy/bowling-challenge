'use strict';

function Scoreboard() {
  this.scores = [];
  this.MAXSCORE = 10;
};

  Scoreboard.prototype.calculateScore = function(currentScore){
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
