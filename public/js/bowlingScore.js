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

Frame.prototype.getBowl1 = function() {
  return this.bowl1;
};

Frame.prototype.getBowl2 = function() {
  return this.bowl2;
};

Frame.prototype.setBowl1FinalScore = function() {
  if (this.getBowl1() === 10) {
    return 'X';
  } else {
  return this.getBowl1();
  }
};

Frame.prototype.setBowl2FinalScore = function() {
  if (this.getBowl1() < 10 && this.getBowl1() + this.getBowl2() === 10) {
    return '/';
  } 
  if (this.getBowl1() < 10) {
    return this.bowl2;
  }
};