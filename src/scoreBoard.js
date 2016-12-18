'use strict';

function Scoreboard() {
  this.scores = [];
};

  Scoreboard.prototype.calculateScore = function(currentScore){
    this.scores.push(currentScore.reduce(function(a,b){return a + b },0));
    return this.scores;
  };

  
