'use strict';

function Frame(final_frame = false) {
  this.score = 0
  this.bowl = 0 
  this.final_frame = final_frame
  this.rolls =[]
};

Frame.prototype = {
  getScore: function() {
    return this.score;
  }, 
  roll: function(pins) {
    this.bowl ++;
    this.score += pins;
    this.setRollScore(this.bowl, pins);
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
  setRollScore: function(bowl, pins) {
    this.rolls[bowl] = pins
  },
  getRollScore: function(bowl) {
    return this.rolls[bowl]
  }

};
