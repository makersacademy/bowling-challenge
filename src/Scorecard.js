'use strict'

function Scorecard(){
  this._currentScore = 0;
  this._scoreCard = [];
  this._currentFrame = 0;
}

Scorecard.prototype.showScore = function(){
  return this._currentScore;
};

Scorecard.prototype.addFrameScore = function(firstBall, secondBall){
  var thisFrameScore = firstBall + secondBall;

  if(thisFrameScore !== 10) {
    this._currentScore += thisFrameScore;
  }
  if(this._currentFrame > 0 && this.previousFrameFirstPin() === 10){
    this._currentScore += 10 + thisFrameScore
  }
  // if the last frame total score was 10
  else if (this._currentFrame > 0 && this.previousFrameScore() === 10){
    this._currentScore += 10 + firstBall
  }
  this._scoreCard.push([firstBall, secondBall]);
  this._currentFrame += 1;
};

Scorecard.prototype.previousFrameScore = function() {
  return this._scoreCard[this._scoreCard.length -1][0] +
    this._scoreCard[this._scoreCard.length -1][0];
}

Scorecard.prototype.previousFrameFirstPin = function() {
  return this._scoreCard[this._scoreCard.length -1][0];
}
