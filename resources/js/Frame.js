'use strict';

function Frame(score1, score2 = 0)
{
  this.score1 = score1
  this.score2 = score2
  if (this.score1 === 10) {
    this.isStrike = true
  } else {
    this.isStike = false
  }
};
