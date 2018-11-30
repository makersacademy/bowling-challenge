'use strict';

  function Scorecard() {
    this.STARTING_SCORE = 0;
    this.score = this.STARTING_SCORE;
  }

  Scorecard.prototype.getCurrentScore = function() {
    return this.score;
  };
