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
    if (this.frame == 10) {
      this.isComplete = true
    } else {
      this.frame += 1
    }
  } else { 
    this.turn = 1
  }
};

// this represent whether game is over. 
Scorecard.prototype.isComplete = function() {
  if (this.frame = 11) {
    return true
  } else {
    return false
  }
};
