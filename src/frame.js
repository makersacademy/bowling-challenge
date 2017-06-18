'use strict'

var Frame = function(){
  this.rollCount = 0;
  this.score = 0;
}

Frame.prototype.roll = function(){
  if (this.rollCount > 2) throw ('Only two rolls allowed!');
  this.score = Math.floor(Math.random() * 11);
  this.rollCount ++;
}
