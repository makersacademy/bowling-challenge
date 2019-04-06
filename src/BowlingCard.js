"use strict"

// the master class
function Scorecard () {
  this.total = 0;
  this.frame = 1;
  this.turn = 1;
};

// this represents the score on each roll of the ball.
Scorecard.prototype.roll = function() {
  if (this.turn === 1) {
    this.turn = 2
  } else { 
    this.turn = 1
    this.frame += 1
  }
};

// this represent whether game is over. 
Scorecard.prototype.isComplete = function() {
  return true
};
