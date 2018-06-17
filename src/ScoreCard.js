'use strict';

function ScoreCard(){
  this._score = 0;
  this._frameScore = 0;
};

ScoreCard.prototype.updateBowlOne = function (pinsKnockedDown) {
  this._frameScore = 0;
  this._throwErrorIfRequired(pinsKnockedDown)
  this._updateScores(pinsKnockedDown);
};

ScoreCard.prototype.updateBowlTwo = function (pinsKnockedDown) {
  this._throwErrorIfRequired(pinsKnockedDown)
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

ScoreCard.prototype._throwErrorIfRequired = function (pinsKnockedDown) {
  if(pinsKnockedDown + this._frameScore > 10){
    throw new Error('Cannot knock down more than 10 pins');
  };
  if(pinsKnockedDown < 0){
    throw new Error('Cannot knock down less than 0 pins');
  };
};
