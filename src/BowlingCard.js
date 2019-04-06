"use strict"

function Scorecard () {
  this.total = 0;
};

// this represents the score on each roll of the ball.
Scorecard.prototype.roll = function() {
 return 0
};

// this represent whether game is over. 
Scorecard.prototype.isComplete = function() {
  return true
};

Scorecard.prototype.frame = function() {
  return [2]
};