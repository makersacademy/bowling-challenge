'use strict'

var Frame = function(){
  this.rollCount = 0;
  this.score = 0;
  this.MAXSCORE = 10;
  this.result = [];
}

Frame.prototype.roll = function(){
  if (this.rollCount >= 2) throw ('Only two rolls allowed!');
  if (this.rollCount === 0) {
    this.score = Math.floor(Math.random() * (this.MAXSCORE)+1);
  } else {
    this.score = Math.floor(Math.random() * (this.MAXSCORE - this.score)+1);
  };
  this.rollCount ++;
  this.result.push(this.score);
}
