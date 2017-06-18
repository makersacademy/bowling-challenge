'use strict'

var Frame = function(){
  this.rollCount = 0;
  this.score = 0;
}

Frame.prototype.roll = function(){
  this.score = Math.floor(Math.random() * 11)
  this.rollCount ++;
}
