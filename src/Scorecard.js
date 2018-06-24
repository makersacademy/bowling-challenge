'use strict'

function Scorecard(){
  this._currentScore = 0;
  this._scoreCard = [];
  this._currentFrame = 1;
}

Scorecard.prototype.showScore = function(){
  return this._currentScore;
};

Scorecard.prototype.addFrameScore = function(firstBall, secondBall, tenthFrameThirdBall = null){
  var thisFrameScore = firstBall + secondBall;

  this._calculateFirstFrameScore(firstBall, secondBall, thisFrameScore)
  this._calculateSecondFrameScore(firstBall, secondBall, thisFrameScore)
  if(this._currentFrame >= 3 && this._currentFrame < 10) {
    this._calculateThirdToNinthFrameScore(firstBall, secondBall, thisFrameScore)
  }
  this._calculateTenthFrameScore(firstBall, secondBall, tenthFrameThirdBall, thisFrameScore)

  this._scoreCard.push([firstBall, secondBall]);
  this._currentFrame += 1;
};

Scorecard.prototype._previousFrameScore = function(framesBack = 1) {
  return this._scoreCard[this._scoreCard.length - framesBack][0] +
    this._scoreCard[this._scoreCard.length - framesBack][1];
}

Scorecard.prototype._isPreviousFrameSpare = function(framesBack = 1){
  return this._scoreCard[this._scoreCard.length - framesBack][0] !== 10 &&
    this._previousFrameScore(framesBack) === 10;
}

Scorecard.prototype._isPreviousFrameStrike = function(framesBack = 1){
  return this._scoreCard[this._scoreCard.length - framesBack][0] === 10
}

Scorecard.prototype._calculateSecondFrameScore = function(firstBall, secondBall, thisFrameScore){
  if(this._currentFrame === 2) {
    // when second frame is under 10
    if(thisFrameScore < 10){
      if(this._isPreviousFrameSpare()) {
        this._currentScore += 10 + firstBall + thisFrameScore;
      }
      if(this._isPreviousFrameStrike()) {
        this._currentScore += 10 + thisFrameScore + thisFrameScore;
      }
      if(this._previousFrameScore() < 10) {
        this._currentScore += thisFrameScore;
      }
    }
    // When second frame is a strike and first frame is spare
    if(firstBall === 10 && this._isPreviousFrameSpare()){
      this._currentScore += 10 + firstBall;
    }
    // When second frame is a spare
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

Scorecard.prototype._calculateThirdToNinthFrameScore = function(firstBall, secondBall, thisFrameScore){
  // when current frame is under 10
  if(thisFrameScore < 10) {
    // when previous frame is under 10
    if(this._previousFrameScore() < 10) {
      this._currentScore += thisFrameScore;
    }
    // when previous frame is a strike
    if(this._isPreviousFrameStrike()) {
      if(this._previousFrameScore(2) < 10) {
        this._currentScore += 10 + thisFrameScore + thisFrameScore
      }
      if(this._isPreviousFrameStrike(2)) {
        this._currentScore += 10 + 10 + firstBall + 10 + thisFrameScore + thisFrameScore;
      }
      if(this._isPreviousFrameSpare(2)) {
        this._currentScore += 10 + thisFrameScore + thisFrameScore;
      }
    }
    // when previous frame is a spare
    if(this._isPreviousFrameSpare()){
      this._currentScore += 10 + firstBall + thisFrameScore;
    }
  }
  // when current frame is a spare
  if(firstBall !== 10 && thisFrameScore === 10) {
    if(this._isPreviousFrameSpare()){
      this._currentScore += 10 + firstBall;
    }
    // when the previous frame is a strike
    if(this._isPreviousFrameStrike()){
      if(this._previousFrameScore(2) < 10){
        this._currentScore += 10 + 10;
      }
      if(this._isPreviousFrameStrike(2)){
        this._currentScore += 10 + 10 + firstBall + 10 + 10;
      }
      if(this._isPreviousFrameSpare(2)){
        this._currentScore += 10 + 10;
      }
    }
  }
  // when current frame is a strike
  if(firstBall === 10){
    if(this._isPreviousFrameSpare()){
      this._currentScore += 10 + 10;
    }
    if(this._isPreviousFrameStrike() && this._isPreviousFrameStrike(2)) {
      this._currentScore += 10 + 20;
    }
  }
}

Scorecard.prototype._calculateTenthFrameScore = function(firstBall, secondBall, tenthFrameThirdBall, thisFrameScore){
  if(this._currentFrame == 10) {
    // if the 10th frame is under 10
    if(thisFrameScore < 10){
      this._calculateThirdToNinthFrameScore(firstBall, secondBall, thisFrameScore)
    }
    // if the 10th frame is a spare
    if(firstBall !== 10 && thisFrameScore === 10) {
      this._calculateThirdToNinthFrameScore(firstBall, secondBall, thisFrameScore)
      this._currentFrame += 1
      this._scoreCard.push([firstBall, secondBall]);
      this._calculateThirdToNinthFrameScore(tenthFrameThirdBall, 0, tenthFrameThirdBall)
      this._currentScore -= tenthFrameThirdBall
    }
    // if the first ball of 10th frame is a strike
    if(firstBall === 10){
      // when the second ball is a strike
      if(secondBall === 10) {
        this._calculateThirdToNinthFrameScore(firstBall, 0, firstBall)
        this._currentFrame += 1
        this._scoreCard.push([firstBall, secondBall]);
        this._calculateThirdToNinthFrameScore(secondBall, 0, secondBall)
        this._currentFrame += 1
        this._scoreCard.push([firstBall, secondBall]);
        this._calculateThirdToNinthFrameScore(tenthFrameThirdBall, 0, tenthFrameThirdBall)
        // this._currentScore -= tenthFrameThirdBall
      }
      // when the second ball is under 10
      if(secondBall < 10) {
        var finalTotal = secondBall + tenthFrameThirdBall
        this._calculateThirdToNinthFrameScore(firstBall, 0, firstBall)
        this._currentFrame += 1;
        this._scoreCard.push([firstBall, secondBall]);
        this._calculateThirdToNinthFrameScore(secondBall, tenthFrameThirdBall, finalTotal)
      }
    }
  }
}
