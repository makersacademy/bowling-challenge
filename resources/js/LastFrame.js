'use strict';

function LastFrame(score1, score2, score3=0)
{
  this.score1 = score1
  this.score2 = score2
  this.score3 = score3
  if (this.score1 + this.score2 <= 10) {
    this.score3 = 0;
  }
}
