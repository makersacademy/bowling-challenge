"use strict"

function Scorecard () {
};

// this represents the score on each roll of the ball.
Scorecard.prototype.roll = function() {
 return 0
};

// this represents the score.
Scorecard.prototype.total = function() {
  return 0
};

// this represent whether game is over. 
Scorecard.prototype.isComplete = function() {
  return true
};