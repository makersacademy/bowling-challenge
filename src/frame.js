"use strict";

function Frame() {
  this.score = 0
  this.isFirstBall = true;
}

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

Frame.prototype.bowl = function(){
  this.score += [0,1,2,3,4,5,6,7,8,9,10].sample();
  this.secondBall();
}

Frame.prototype.secondBall = function(){
  this.isFirstBall ? (this.isFirstBall = false) : (this.isFirstBall = true)
}
