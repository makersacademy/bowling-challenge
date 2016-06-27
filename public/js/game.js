'use strict';

function Game() {
  this.rounds = [new Round()];
  this.roundScores = [];
  this.roundCount = 1;
  this.ball = 1;
}

Game.prototype = {

  setNew: function()  {
    this.rounds.push(new Round());
    this.roundCount++;
  },

  addBonus: function(score)  {
    if(this.roundCount === 2) { this.rounds[0].addBonus(score) }
    else if(this.roundCount > 2)  {
      this.rounds[this.roundCount - 2].addBonus(score);
      this.rounds[this.roundCount - 3].addBonus(score);
    }
  },

  bowl: function(score) {
    if(this.isStrike(score)) { this.rounds[this.roundCount - 1].score(score) }
    else {
      this.rounds[this.roundCount - 1].score(score);
      this.ball++;
    }
    this.addBonus(score);
    this.incrementRound();
  },

  incrementRound: function()  {
    if(this.ball === 3 || this.ball === 1) {
      this.ball = 1;
      this.setNew();
    }
  },

  totalScore: function()  {
    var score = 0;
    for (var i = 0; i < this.roundCount; i++) {
      if (i > 9)  { break; }
      score += this.rounds[i].roundScore();
    }
    return score;
  },

  checkEnd: function()  {
    if (this.roundCount > 12) { return true; }
    if (this.roundCount > 10) {
      if(this.rounds[9].bonusCount === 0) { return true; }
    }
    return false;
  },

  isStrike: function(score)  {
    return (this.ball === 1 && score === 10);
  }
};
