'use strict';

function BowlingScorecard() {
  this.score = 0;
  this.frame1 = new Frame;
  };

  BowlingScorecard.prototype.getCurrentScore = function() {
    return this.score;
  };



function Frame(userInput1 = 1, userInput2 = 1) {
  this.bowl1 = userInput1;
  this.bowl2 = userInput2;
};

Frame.prototype.setBowl1Score = function() {
  if (this.bowl1 === 10) {
    return 'X';
  } else {
  return this.bowl1;
  }
};

Frame.prototype.setBowl2Score = function() {
  if (this.bowl1 < 10 && this.bowl1 + this.bowl2 === 10) {
    return '/';
  } 
  if (this.bowl1 < 10) {
    return this.bowl2;
  }
};