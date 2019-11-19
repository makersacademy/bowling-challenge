'use strict';

function Calculator() { 
  this.total = 0
};

Calculator.prototype.totalRollScore = function(scorecard) {
  for (var i = 0; i < scorecard.frames.length; i++) { 
    this.total += scorecard.frames[i].roll1
    this.total += scorecard.frames[i].roll2
  }  
  return this.total
};

Calculator.prototype.addUpSpare = function(currentFrame, nextFrame) {
  
};

Calculator.prototype.addUpStrike = function() {
  
};