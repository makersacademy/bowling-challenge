'use strict';

function BowlingScore() {
  this.score = 0;
  this.frame1 = new Frame(1);
};

  BowlingScore.prototype.getCurrentScore = function() {
    return this.score;
  };

  BowlingScore.prototype.getFrame = function() {
    return this.frame;
  };



function Frame(num) {
  this.frameNum = num;
  this.roll1 = new Roll;
  if (this.roll1.getRollScore() < 10) {
    this.roll2 = new Roll
  } 
  if (num === 10 && this.roll1.getRollScore() + this.roll2.getRollScore > 9) {
    this.roll3 = new Roll
  }
};

  Frame.prototype.getFrameNum = function() {
    return this.frameNum;
  };



function Roll(user_input = 0) {
  this.rollScore = user_input;
};

  Roll.prototype.getRollScore = function() {
      return this.rollScore;
  };