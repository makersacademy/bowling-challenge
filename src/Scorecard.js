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
  if(firstBall !== 10) {
    this._currentScore += firstBall + secondBall;
  }
  if(this._currentFrame > 0 && this._scoreCard[this._scoreCard.length -1][0] === 10){
    console.log("scorecard = ", this._scoreCard[this._scoreCard.length -1])
    this._currentScore += (10 + firstBall + secondBall)
  }
  this._scoreCard.push([firstBall, secondBall]);
  this._currentFrame += 1;
};
