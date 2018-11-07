'use strict';

function BowlingScorecard() {
  this.score = 0;
  this.frame1 = new Frame;
  };

  BowlingScorecard.prototype.getCurrentScore = function() {
    return this.score;
  };



function Frame(userInput1, userInput2) {
  this.bowl1 = userInput1;
  this.bowl2 = userInput2;
};

Frame.prototype.getBowl1 = function() {
  return this.bowl1
};

Frame.prototype.getBowl2 = function() {
  return this.bowl2
};