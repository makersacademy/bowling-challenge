'use strict'

function Scorecard(){
  this._currentScore = 0;
  this._scoreCard = [];
  this._currentFrame = 1;
}

Scorecard.prototype.showScore = function(){
  return this._currentScore;
};

Scorecard.prototype.addFrameScore = function(firstBall, secondBall){
  var thisFrameScore = firstBall + secondBall;

  this._calculateFirstFrameScore(firstBall, secondBall, thisFrameScore)
  this._calculateSecondFrameScore(firstBall, secondBall, thisFrameScore)

  this._scoreCard.push([firstBall, secondBall]);
  this._currentFrame += 1;
};



Scorecard.prototype.previousFrameScore = function() {
  return this._scoreCard[this._scoreCard.length -1][0] +
    this._scoreCard[this._scoreCard.length -1][1];
}

Scorecard.prototype.previousFrameFirstPin = function() {
  return this._scoreCard[this._scoreCard.length -1][0];
}

Scorecard.prototype._isPreviousFrameSpare = function(){
  return this._scoreCard[this._scoreCard.length -1][0] !== 10 &&
    this.previousFrameScore() === 10;
}

Scorecard.prototype._isPreviousFrameStrike = function(){
  return this._scoreCard[this._scoreCard.length -1][0] === 10
}

Scorecard.prototype._calculateSecondFrameScore = function(firstBall, secondBall, thisFrameScore){
  if(this._currentFrame === 2) {
    if(thisFrameScore < 10){
      if(this._isPreviousFrameSpare()) {
        this._currentScore += 10 + firstBall + thisFrameScore;
      }
      if(this._isPreviousFrameStrike()) {
        this._currentScore += 10 + thisFrameScore + thisFrameScore;
      }
      if(this.previousFrameScore() < 10) {
        this._currentScore += thisFrameScore;
      }
    }
    // If second frame is a strike and first frame is spare
    if(firstBall === 10 && this._isPreviousFrameSpare()){
      this._currentScore += 10 + firstBall;
    }
    // if 2nd frame is a spare
    if(firstBall !== 10 && thisFrameScore === 10) {
      if(this._isPreviousFrameStrike()){
        this._currentScore += 20;
      }
      if(this._isPreviousFrameSpare()){
        this._currentScore += 10 + firstBall;
      }
    }
  }
}

Scorecard.prototype._calculateFirstFrameScore = function(firstBall, secondBall, thisFrameScore){
  if (this._currentFrame === 1) {
    if(thisFrameScore !== 10) {
      this._currentScore += thisFrameScore;
    }
  }
}
