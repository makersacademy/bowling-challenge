'use strict';

function BowlingScorecard(){
  this.SCORE = 0
  this.FRAMES = []
}

BowlingScorecard.prototype.returnscore = function(){
  return this.SCORE
}

BowlingScorecard.prototype.returnframes = function(){
  return this.FRAMES
}

BowlingScorecard.prototype.addframe = function(frame){
  if (this.FRAMES.length < 10) {
    this.FRAMES.push(frame);
  } else {
    return "Game is over!"
  }
}
