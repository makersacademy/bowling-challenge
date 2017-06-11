"use strict";

function Frame() {
  this.score = 0;
  this.firstBallScore = 0;
  this.secondBallScore = 0;
  this.isFirstBall = true;
}

Frame.prototype.bowl = function(){
  if (this.isFirstBall) {
    this.firstBallScore = this.knockDownPins(10);
    this.score += this.firstBallScore;
  } else {
    this.secondBallScore = this.knockDownPins(10 - this.firstBallScore);
    this.score += this.secondBallScore;
  }
  this.secondBall();
}

Frame.prototype.secondBall = function(){
  this.isFirstBall ? (this.isFirstBall = false) : (this.isFirstBall = true)
}

Frame.prototype.knockDownPins = function(max){
  var min = Math.ceil(0);
  max = Math.floor(max + 1);
  return Math.floor(Math.random() * (max - min)) + min;
}
