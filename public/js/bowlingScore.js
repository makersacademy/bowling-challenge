'use strict';

function BowlingScorecard() {
  this.score = 0;
  };

  BowlingScorecard.prototype.getCurrentScore = function() {
    return this.score;
  };