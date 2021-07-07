'use strict';

  function Roll(score) {
    if (score < 0 || score > 10) throw "Roll score must be in the range 0-10"
    this.score = score
  }

  Roll.prototype.getRollScore = function() {
    return this.score
  }
