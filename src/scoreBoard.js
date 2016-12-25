'use strict';

function Scoreboard() {
  this.scores = [];
  this.totalScores = [];
};

  Scoreboard.prototype.scoreFirstRoll = function(score1) {
    this.scores.push(score1)
  };
