"use strict";

// The Frame
function Frame() {
  this.score = [0, 0];
  this.isFirstBall = true;
}

Frame.prototype.bowl = function(){
  if (this.isFirstBall) {
    this.score[0] = this.knockDownPins(10);
  } else {
    this.score[1] = this.knockDownPins(10 - this.score[0]);
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
