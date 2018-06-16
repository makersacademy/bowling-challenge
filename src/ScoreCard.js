'use strict';

function ScoreCard(){
  this._score = 0;
  this._frameScore = 0;
  this._bowlNum = 0;
};

ScoreCard.prototype.update = function (pinsKnockedDown) {
  this._resetFrameScoreIfRequired();
  this._bowlNum += 1;
  this._score += pinsKnockedDown;
  this._frameScore += pinsKnockedDown;
};

ScoreCard.prototype.viewScore = function () {
  return this._score;
};

ScoreCard.prototype.viewFrameScore = function () {
  return this._frameScore;
};

ScoreCard.prototype._resetFrameScoreIfRequired = function () {
  if(this._bowlNum === 2){
    this._bowlNum = 0
    this._frameScore = 0
  };
};

ScoreCard.prototype._updateScores = function (pinsKnockedDown) {
  this._score += pinsKnockedDown;
  this._frameScore += pinsKnockedDown;
};
