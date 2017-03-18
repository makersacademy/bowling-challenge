'use strict';

function Frame(score1, score2=0)
{
  this.score1 = score1
  this.score2 = score2
  if (this.score1 === 10) {
    this.isStrike = true;
  } else {
    this.isStrike = false;
  };
  if (this.score1 !== 10 && this.score1 + this.score2 === 10) {
    this.isSpare = true;
  } else {
    this.isSpare = false;
  };
}
