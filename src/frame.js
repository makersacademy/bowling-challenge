// 'use strict';

function Frame(){
  this.balls = [];
  this.completed = false;
  this.STRIKE = 10;
  this.total = 0;
}

Frame.prototype.recordScore = function(score){
  if (this.completed === false) {
    this.balls.push(score);
    this.total += score;
    if (score === this.STRIKE) { this.completed = true; }
    if (this.balls.length === 2) { this.completed = true; }
  }
  return this;
};

Frame.prototype.isComplete = function() {
  return this.completed;
};
