'use strict';

function BowlingScorecard() {
  this.score = 0;
  this.frameCounter = 0;
  };

  BowlingScorecard.prototype.getCurrentScore = function() {
    return this.score;
  };

  BowlingScorecard.prototype.setNewFrame = function(userInput1, userInput2) {
    if(this.frameCounter < 9) {
    this.frame = new Frame(userInput1, userInput2);
    } else { this.frame = new FinalFrame(userInput1, userInput2)
    }
    this.frameCounter += 1;
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