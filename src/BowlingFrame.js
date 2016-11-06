'use strict';

function BowlingFrame(){

  this.first_ball = 0;
  this.second_ball = 0;

  this.current_ball = 'first';

  this.frame_score = 0;

  this.isStrike = false;
  this.isSpare = false;
  this.isFinished = false;
}

BowlingFrame.prototype.addScore = function(points){
  if (this.current_ball === 'first') {
    this.checkForStrike(points);
  }  else {
    this.isFinished = true;
    this.checkForSpare(points);
  };
};

BowlingFrame.prototype.checkForStrike = function(points){
  if(points === 10) {
    this.first_ball = 'X';
    this.isStrike = true;
    this.isFinished = true;
  } else {
    this.first_ball = points;
    this.current_ball = 'second';
  };
};

BowlingFrame.prototype.checkForSpare = function(points){
  if(this.first_ball + points === 10) {
    this.isSpare = true;
    this.second_ball = '/';
  } else {
    this.second_ball = points;
  };
}
