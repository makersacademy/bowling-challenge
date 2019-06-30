"use strict";

function Scorecard() {
  this.score = 0;
  this.frame = 1;
}

Scorecard.prototype.sumPointsPerFrame = function(pinfallOne, pinfallTwo) {
  if (pinfallOne == 10) {
    this.score += pinfallOne;
  } else {
    var scoreFrame = pinfallOne + pinfallTwo
    this.score += scoreFrame
  }
  this.frame++
};