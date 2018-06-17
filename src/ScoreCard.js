'use strict';

function ScoreCard(){
  this._score = 0;
  this._frameScore = 0;
};

ScoreCard.prototype.updateBowlOne = function (pinsKnockedDown) {
  this._frameScore = 0;
  this._updateScores(pinsKnockedDown);
};

ScoreCard.prototype.updateBowlTwo = function (pinsKnockedDown) {
  this._updateScores(pinsKnockedDown);
};

ScoreCard.prototype.viewScore = function () {
  return this._score;
};

ScoreCard.prototype.viewFrameScore = function () {
  return this._frameScore;
};

ScoreCard.prototype._updateScores = function (pinsKnockedDown) {
  this._score += pinsKnockedDown;
  this._frameScore += pinsKnockedDown;
};
