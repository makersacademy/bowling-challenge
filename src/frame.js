'use strict'

var Frame = function(){
  this.rollCount = 0;
  this.score = 0;
  this.pinsRemaining = 10;
  this.result = [];
}

Frame.prototype.roll = function(){
  if (this.rollCount >= 3) throw ('Only two rolls allowed!');
  this.score = Math.floor(Math.random() * (this.pinsRemaining)+1);
  this.rollCount ++;
  this.result.push(this.score);
}
