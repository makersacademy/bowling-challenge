// 'use strict';

function Frame(){
  this.balls = [];
  this.completed = false;
  this.STRIKE = 10;
  this.total = 0;
}

Frame.prototype.recordScore = function(score, lastRound = false){

  if (this.completed === false) {
    this.balls.push(score);
    this.total += score;
    if (score === this.STRIKE && lastRound !== true) { this.completed = true; }
    if (this.balls.length === 2){
      if (lastRound === false) {
        this.completed = true;
      }
      else if (this.balls[0] + this.balls[1] < 10) {
         this.completed = true;
      }
    }
    if (this.balls.length === 3){
      this.completed = true;
    }
  }
  return this;
};

Frame.prototype.isComplete = function() {
  return this.completed;
};
