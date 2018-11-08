'use strict';

function BowlingScorecard() {
  this.score = 0;
  this.frameCounter = 0;
  };

  BowlingScorecard.prototype.getCurrentScore = function() {
    return this.score;
  };

  BowlingScorecard.prototype.setNewFrame = function(userInput1, userInput2, userInput3) {
    if (this.frameCounter < 9) {
      this.frame = new Frame(userInput1, userInput2);
      this.frameCounter ++;
    } 
    if (this.frameCounter === 9) {
      this.frame = new FinalFrame(userInput1, userInput2, userInput3)
      this.frameCounter ++;
    }
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

function FinalFrame(userInput1 = 1, userInput2 = 1, userInput3 = 1) {
  this.bowl1 = userInput1;
  this.bowl2 = userInput2;
  this.bowl3 = userInput3;
};

FinalFrame.prototype.setBowl1Score = function() {
  if (this.bowl1 === 10) {
    return 'X';
  } else {
  return this.bowl1;
  }
};

FinalFrame.prototype.setBowl2Score = function() {
  if (this.bowl1 < 10 && this.bowl1 + this.bowl2 === 10) {
    return '/';
  } 
  if (this.bowl1 < 10) {
    return this.bowl2;
  }
  if (this.bowl1 = 10 && this.bowl2 === 10) {
    return 'X'
  }
};

FinalFrame.prototype.setBowl3Score = function() {
  if (this.bowl1 === 10 && this.bowl2 === 10 && this.bowl3 === 10) {
    return 'X'
  }
  if (this.bowl1 === 10 && this.bowl2 === 10 && this.bowl3 < 10) {
    return this.bowl3
  }
  if (this.bowl1 < 10 && this.bowl3 === 10) {
    return 'X';
  }
  if (this.bowl1 + this.bowl2 === 10 && this.bowl3 < 10) {
    return this.bowl3;
  }
};