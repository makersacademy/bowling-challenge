'use strict';

function Round() {
  this.totalScore = 0;
  this.scores = [];
  this.bonusCount = 0;
}

Round.prototype = {
  score: function(score)  {
    if(score === 10 && this.scores.length === 0)  {
      this.bonusCount = 2;
      this.scores.push(score);
      this.totalScore += score;
    }
    else if(this.scores.length === 1 && (this.scores[0]+score === 10))  {
      this.bonusCount = 1;
      this.scores.push(score);
      this.totalScore += score;
    }
    else {
      this.scores.push(score);
      this.totalScore += score;
    }
  },

  addBonus: function(score) {
    if(this.bonusCount > 0) {
      this.totalScore += score;
      this.bonusCount--;
    }
  },

  roundScore: function()  {
    if(this.bonusCount > 0) {
      return 0;
    }
    else if (this.scores.length === 1 && (this.scores[0] < 10)) {
      return 0;
    }
    return this.totalScore;
  }
};
