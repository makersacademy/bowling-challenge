'use strict'

function Scorecard(){
  this._currentScore = 0;
  this._scoreCard = [];
  this._currentFrame = 1;
}

Scorecard.prototype.showScore = function(){
  return this._currentScore;
};

Scorecard.prototype.bowl = function(firstBall, secondBall, tenthFrameThirdBall = null){
  var thisFrameScore = firstBall + secondBall;

  this._updateFirstFrameScore(firstBall, secondBall, thisFrameScore)
  this._updateSecondFrameScore(firstBall, secondBall, thisFrameScore)
  if(this._currentFrame >= 3 && this._currentFrame < 10) {
    this._updateFrameScore(firstBall, secondBall, thisFrameScore)
  }
  this._updateTenthFrameScore(firstBall, secondBall, tenthFrameThirdBall, thisFrameScore)

  this._endFrame(firstBall, secondBall);
};

Scorecard.prototype._updateFirstFrameScore = function(firstBall, secondBall, thisFrameScore){
  if (this._currentFrame === 1) {
    if(thisFrameScore !== 10) {
      this._addCurrentFrameScore(thisFrameScore);
    }
  }
}

Scorecard.prototype._updateSecondFrameScore = function(firstBall, secondBall, thisFrameScore){
  if(this._currentFrame === 2) {
    if(thisFrameScore < 10){
      this._updateScoreForSecondFrameScoreUnder10(firstBall, secondBall, thisFrameScore)
    }
    if(firstBall === 10 && this._isPreviousFrameSpare()){
      this._currentScore += 10 + firstBall;
    }
    if(firstBall !== 10 && thisFrameScore === 10) {
      this._updateScoreForSecondFrameSpare(firstBall)
    }
  }
}


Scorecard.prototype._updateFrameScore = function(firstBall, secondBall, thisFrameScore){
  if(thisFrameScore < 10) {
    this._updateScoreForFrameScoreUnder10(firstBall, secondBall, thisFrameScore);
  }
  if(firstBall !== 10 && thisFrameScore === 10) {
    this._updateScoreForFrameSpare(firstBall, secondBall, thisFrameScore);
  }
  if(firstBall === 10){
    this._updateScoreForFrameStrike(firstBall, secondBall, thisFrameScore);
  }
}

Scorecard.prototype._updateTenthFrameScore = function(firstBall, secondBall, tenthFrameThirdBall, thisFrameScore){
  if(this._currentFrame == 10) {
    // if the 10th frame is under 10
    if(thisFrameScore < 10){
      this._updateFrameScore(firstBall, secondBall, thisFrameScore)
    }
    // if the 10th frame is a spare
    if(this._isThisFrameSpare(firstBall, secondBall, thisFrameScore)) {
      this._updateFrameScore(firstBall, secondBall, thisFrameScore)
      this._endFrame(firstBall, secondBall);
      this._updateFrameScore(tenthFrameThirdBall, 0, tenthFrameThirdBall)
      this._currentScore -= tenthFrameThirdBall
    }
    // if the first ball of 10th frame is a strike
    if(firstBall === 10){
      this._updateFrameScore(firstBall, 0, firstBall)
      // when the second ball is a strike
      if(secondBall === 10) {
        this._endFrame(firstBall, secondBall);
        this._updateFrameScore(secondBall, 0, secondBall)
        this._endFrame(firstBall, secondBall);
        this._updateFrameScore(tenthFrameThirdBall, 0, tenthFrameThirdBall)
      }
      // when the second ball is under 10
      if(secondBall < 10) {
        var finalTotal = secondBall + tenthFrameThirdBall
        this._endFrame(firstBall, secondBall);
        this._updateFrameScore(secondBall, tenthFrameThirdBall, finalTotal)
      }
    }
  }
}

Scorecard.prototype._updateScoreForSecondFrameScoreUnder10 = function(firstBall, secondBall, thisFrameScore){
  if(this._isPreviousFrameSpare()) {
    this._currentScore += 10 + firstBall + thisFrameScore;
  }
  if(this._isPreviousFrameStrike()) {
    this._currentScore += 10 + thisFrameScore * 2;
  }
  if(this._previousFrameScore() < 10) {
    this._addCurrentFrameScore(thisFrameScore);
  }
}

Scorecard.prototype._updateScoreForSecondFrameSpare = function(firstBall){
  if(this._isPreviousFrameStrike()){
    this._currentScore += 20;
  }
  if(this._isPreviousFrameSpare()){
    this._currentScore += 10 + firstBall;
  }
}

Scorecard.prototype._updateScoreForFrameScoreUnder10 = function(firstBall, secondBall, thisFrameScore){
  if(this._previousFrameScore() < 10) {
    this._addCurrentFrameScore(thisFrameScore);
  }
  // when previous frame is a strike
  if(this._isPreviousFrameStrike()) {
    if(this._previousFrameScore(2) < 10) {
      // HEREEEE
      this._currentScore += 10 + thisFrameScore * 2;
    }
    if(this._isPreviousFrameStrike(2)) {
      this._currentScore += 30 + firstBall + thisFrameScore * 2;
    }
    if(this._isPreviousFrameSpare(2)) {
      this._currentScore += 10 + thisFrameScore * 2;
    }
  }
  // when previous frame is a spare
  if(this._isPreviousFrameSpare()){
    this._currentScore += 10 + firstBall + thisFrameScore;
  }
}

Scorecard.prototype._updateScoreForFrameSpare = function(firstBall, secondBall, thisFrameScore){
  if(this._isPreviousFrameSpare()){
    this._currentScore += 10 + firstBall;
  }
  // when the previous frame is a strike
  if(this._isPreviousFrameStrike()){
    if(this._previousFrameScore(2) < 10){
      this._currentScore += 20;
    }
    if(this._isPreviousFrameStrike(2)){
      this._currentScore += 40 + firstBall;
    }
    if(this._isPreviousFrameSpare(2)){
      this._currentScore += 20;
    }
  }
}

Scorecard.prototype._updateScoreForFrameStrike = function(firstBall, secondBall, thisFrameScore){
  if(this._isPreviousFrameSpare()){
    this._currentScore += 20;
  }
  if(this._isPreviousFrameStrike() && this._isPreviousFrameStrike(2)) {
    this._currentScore += 30;
  }
}


Scorecard.prototype._endFrame = function(firstBall, secondBall){
  this._currentFrame += 1;
  this._scoreCard.push([firstBall, secondBall]);
}

Scorecard.prototype._isThisFrameSpare = function(firstBall, secondBall, thisFrameScore) {
  return firstBall !== 10 && thisFrameScore === 10;
}

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

Scorecard.prototype._addCurrentFrameScore = function(thisFrameScore){
  this._currentScore += thisFrameScore;
}

Scorecard.prototype._addSpareWithBonus = function(thisFrameScore){
  this._currentScore += 10 + thisFrameScore;
}
