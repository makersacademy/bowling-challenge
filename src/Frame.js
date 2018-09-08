'use strict';

function Frame() {
  this.score = 0
  this.bowl = 0
};

Frame.prototype = {
  getScore: function() {
    return this.score;
  }, 
  roll: function(pins) {
    this.bowl ++;
    this.score += pins;
  },
  isStrike: function() {
    return this.bowl === 1 && this.score === 10;
  },
  isSpare: function() {
    return this.bowl === 2 && this.score === 10;
  },
  isGetAnotherBowl: function() {
    return this.bowl === 1 && this.score < 10;
  },
  isFinished: function() {
    return !this.isGetAnotherBowl();
  },
};
