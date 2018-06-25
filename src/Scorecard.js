'use strict'

function Scorecard(){
  this._currentScore = 0;
  this._scoreCard = [];
  this._currentFrame = 1;
}

Scorecard.prototype.showScore = function(){
  return this._currentScore;
};

Scorecard.prototype.addFrameScore = function(firstBall, secondBall = 0, tenthFrameThirdBall = null){
  var thisFrameScore = firstBall + secondBall;

  this._updateFirstFrameScore(firstBall, secondBall, thisFrameScore);
  this._updateSecondFrameScore(firstBall, secondBall, thisFrameScore);
  if(this._currentFrame >= 3 && this._currentFrame < 10) {
    this._updateFrameScore(firstBall, secondBall, thisFrameScore);
  }
  this._updateTenthFrameScore(firstBall, secondBall, tenthFrameThirdBall, thisFrameScore);

  this._endFrame(firstBall, secondBall);
};

Scorecard.prototype._updateFirstFrameScore = function(firstBall, secondBall, thisFrameScore){
  if (this._currentFrame === 1) {
    if(thisFrameScore !== 10) {
      this._currentScore += thisFrameScore;
    }
  }
}

Scorecard.prototype._updateSecondFrameScore = function(firstBall, secondBall, thisFrameScore){
  if(this._currentFrame === 2) {
    if(thisFrameScore < 10){
      this._updateScoreForSecondFrameScoreUnder10(firstBall, secondBall, thisFrameScore);
    }
    if(firstBall === 10 && this._isPreviousFrameASpare()){
      this._currentScore += 10 + firstBall;
    }
    if(firstBall !== 10 && thisFrameScore === 10) {
      this._updateScoreForSecondFrameSpare(firstBall);
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
  var thisFrameIsASpare = this._isThisFrameSpare(firstBall, secondBall, thisFrameScore);
  var firstBallIsAStrike = firstBall === 10;

  if(this._currentFrame == 10) {
    if(thisFrameScore < 10){
      this._updateFrameScore(firstBall, secondBall, thisFrameScore);
    }
    if(thisFrameIsASpare) {
      this._updateScoreForTenthFrameSpare(firstBall, secondBall, tenthFrameThirdBall, thisFrameScore);
    }
    if(firstBallIsAStrike){
      this._updateScoreForTenthFrameStrike(firstBall, secondBall, tenthFrameThirdBall, thisFrameScore);
    }
  }
}

Scorecard.prototype._updateScoreForSecondFrameScoreUnder10 = function(firstBall, secondBall, thisFrameScore){
  if(this._isPreviousFrameASpare()) {
    this._currentScore += 10 + firstBall + thisFrameScore;
  }
  if(this._isPreviousFrameAStrike()) {
    this._currentScore += 10 + thisFrameScore * 2;
  }
  if(this._previousFrameScore() < 10) {
    this._currentScore += thisFrameScore;
  }
}

Scorecard.prototype._updateScoreForSecondFrameSpare = function(firstBall){
  if(this._isPreviousFrameAStrike()){
    this._currentScore += 20;
  }
  if(this._isPreviousFrameASpare()){
    this._currentScore += 10 + firstBall;
  }
}

Scorecard.prototype._updateScoreForFrameScoreUnder10 = function(firstBall, secondBall, thisFrameScore){
  if(this._previousFrameScore() < 10) {
    this._currentScore += thisFrameScore;
  }
  if(this._isPreviousFrameAStrike()) {
    if(this._frameBeforePreviousScore() < 10) {
      this._currentScore += 10 + thisFrameScore * 2;
    }
    if(this._isFrameBeforePreviousAStrike()) {
      this._currentScore += 30 + firstBall + thisFrameScore * 2;
    }
    if(this._isFrameBeforePreviousASpare()) {
      this._currentScore += 10 + thisFrameScore * 2;
    }
  }
  if(this._isPreviousFrameASpare()){
    this._currentScore += 10 + firstBall + thisFrameScore;
  }
}

Scorecard.prototype._updateScoreForFrameSpare = function(firstBall, secondBall, thisFrameScore){
  if(this._isPreviousFrameASpare()){
    this._currentScore += 10 + firstBall;
  }
  // when the previous frame is a strike
  if(this._isPreviousFrameAStrike()){
    if(this._frameBeforePreviousScore() < 10){
      this._currentScore += 20;
    }
    if(this._isFrameBeforePreviousAStrike()){
      this._currentScore += 40 + firstBall;
    }
    if(this._isFrameBeforePreviousASpare()){
      this._currentScore += 20;
    }
  }
}

Scorecard.prototype._updateScoreForFrameStrike = function(firstBall, secondBall, thisFrameScore){
  if(this._isPreviousFrameASpare()){
    this._currentScore += 20;
  }
  if(this._isPreviousFrameAStrike() && this._isFrameBeforePreviousAStrike()) {
    this._currentScore += 30;
  }
}

Scorecard.prototype._updateScoreForTenthFrameSpare = function(firstBall, secondBall, tenthFrameThirdBall, thisFrameScore){
  this._updateFrameScore(firstBall, secondBall, thisFrameScore);
  this._endFrame(firstBall, secondBall);
  this._updateFrameScore(tenthFrameThirdBall, 0, tenthFrameThirdBall);
  this._currentScore -= tenthFrameThirdBall;
}

Scorecard.prototype._updateScoreForTenthFrameStrike = function(firstBall, secondBall, tenthFrameThirdBall, thisFrameScore){
  this._updateFrameScore(firstBall, 0, firstBall);
  this._endFrame(firstBall, 0);

  if(secondBall === 10) {
    this._updateFrameScore(secondBall, 0, secondBall);
    this._endFrame(firstBall, secondBall);
    this._updateFrameScore(tenthFrameThirdBall, 0, tenthFrameThirdBall);
  }
  if(secondBall < 10) {
    var finalTotal = secondBall + tenthFrameThirdBall;
    this._updateFrameScore(secondBall, tenthFrameThirdBall, finalTotal);
    if(secondBall + tenthFrameThirdBall === 10) {
      this._currentScore += 10;
    }
    if(this._isFrameBeforePreviousAStrike()) {
      this._currentScore -= finalTotal
    }
  }
}

Scorecard.prototype._endFrame = function(firstBall, secondBall){
  this._currentFrame += 1;
  this._scoreCard.push([firstBall, secondBall]);
}

Scorecard.prototype._isThisFrameSpare = function(firstBall, secondBall, thisFrameScore) {
  return firstBall !== 10 && thisFrameScore === 10;
}

Scorecard.prototype._previousFrameScore = function() {
  return this._scoreCard[this._scoreCard.length - 1][0] +
    this._scoreCard[this._scoreCard.length - 1][1];
}

Scorecard.prototype._frameBeforePreviousScore = function() {
  return this._scoreCard[this._scoreCard.length - 2][0] +
    this._scoreCard[this._scoreCard.length - 2][1];
}

Scorecard.prototype._isPreviousFrameASpare = function(){
  return this._scoreCard[this._scoreCard.length - 1][0] !== 10 &&
    this._previousFrameScore() === 10;
}

Scorecard.prototype._isFrameBeforePreviousASpare = function(){
  return this._scoreCard[this._scoreCard.length - 2][0] !== 10 &&
    this._frameBeforePreviousScore() === 10;
}

Scorecard.prototype._isPreviousFrameAStrike = function(){
  return this._scoreCard[this._scoreCard.length - 1][0] === 10;
}

Scorecard.prototype._isFrameBeforePreviousAStrike = function(){
  return this._scoreCard[this._scoreCard.length - 2][0] === 10;
}

Scorecard.prototype._addSpareWithBonus = function(thisFrameScore){
  this._currentScore += 10 + thisFrameScore;
}
