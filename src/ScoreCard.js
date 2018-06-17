'use strict';

function ScoreCard(){
  this._score = 0;
  this._frameScore = [];
  this._lastFrameScore = [];
  this._bonusScore = 0;
};

ScoreCard.prototype.updateBowlOne = function (pinsKnockedDown) {
  this._resetBonusAndFrameScoreToZero();
  this._throwErrorIfRequired(pinsKnockedDown);
  this._updateScores(pinsKnockedDown);
  this._addStrikeBonus(pinsKnockedDown);
};

ScoreCard.prototype.updateBowlTwo = function (pinsKnockedDown) {
  this._throwErrorIfRequired(pinsKnockedDown);
  this._updateScores(pinsKnockedDown);
  this._addStrikeBonus(pinsKnockedDown);
};

ScoreCard.prototype.viewScore = function () {
  return this._score;
};

ScoreCard.prototype.viewFrameScore = function () {
  return this._frameScore;
};

ScoreCard.prototype._updateScores = function (pinsKnockedDown) {
  this._score += pinsKnockedDown;
  this._frameScore.push(pinsKnockedDown);
};

ScoreCard.prototype._throwErrorIfRequired = function (pinsKnockedDown) {
  var firstBowl = this._frameScore[0];
  if(firstBowl === undefined){
    firstBowl = 0;
  };
  if(pinsKnockedDown + firstBowl > 10){
    throw new Error('Cannot knock down more than 10 pins');
  };
  if(pinsKnockedDown < 0){
    throw new Error('Cannot knock down less than 0 pins');
  };
};

ScoreCard.prototype._addStrikeBonus = function (pinsKnockedDown) {
  var isSpare;
  isSpare = this._lastFrameScore[0] + this._lastFrameScore[1] === 10
  if(this._lastFrameScore[0] === 10){
    this._bonusScore += pinsKnockedDown;
  } else if(isSpare){
    if(this._frameScore.length === 1){
      this._bonusScore += pinsKnockedDown;
    };
  };

  if(this._frameScore.length === 2){
    this._score += this._bonusScore;
  };
};

ScoreCard.prototype._resetBonusAndFrameScoreToZero = function () {
  this._bonusScore = 0;
  this._lastFrameScore = this._frameScore
  this._frameScore = [];
};
