'use strict'

function Scorecard(){
  this._currentScore = 0;
}

Scorecard.prototype.showScore = function(){
  return this._currentScore;
};

Scorecard.prototype.addFrameScore = function(firstBall, secondBall){
  this._currentScore += firstBall + secondBall;
};
