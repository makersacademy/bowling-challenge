'use strict'

var Frame = function(){
  this.rollCount = 0;
  this.score = 0;
  this.MAXSCORE = 10;
  this.result = [];
  this.frameScore = 0;
}

Frame.prototype.roll = function(){
  if (this.rollCount === 0) {
    this.score = Math.floor(Math.random() * (this.MAXSCORE)+1);
  } else {
    this.score = Math.floor(Math.random() * (this.MAXSCORE - this.score)+1);
  };
  this.rollCount ++;
  this.frameStatus();
  this.result.push(this.score);
}

Frame.prototype.getFrameResult = function(){
  this.roll();
  this.roll();
  return this.frameScore.push(this.frameResult(this.result));
}

Frame.prototype.frameStatus = function(){
  if (this.rollCount === 1 && this.score === 10) {
    return ('Strike!');
  } else if (this.rollCount === 2 && this.score === 10) {
    return ('Spare!');
  } else if (this.rollCount >= 3) {
    throw ('Only two rolls allowed!');}
}

Frame.prototype.lastFrame = function(){
  this.getFrameResult();
  if (this.result == 10) {
    this.score += Math.floor(Math.random() * (this.MAXSCORE)+1);
  }
  this.result.push(this.score);
  this.rollCount ++;
}
