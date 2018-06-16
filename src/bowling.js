'use strict';

function Bowling(){
  this._score = 0;
  this._frameScore = 0;
  this._bowl = 0;
};

Bowling.prototype.bowl = function () {
  this._resetFrameScoreIfRequired();
  this._bowl += 1;
  var pinsKnockedDown = this._randomNum1to10();
  this._updateScores(pinsKnockedDown);
};

Bowling.prototype.viewScore = function () {
  return this._score;
};

Bowling.prototype.viewFrameScore = function () {
  return this._frameScore;
};

Bowling.prototype._randomNum1to10 = function () {
  return Math.floor(Math.random() * 11);
};

Bowling.prototype._resetFrameScoreIfRequired = function () {
  if(this._bowl === 2){
    this._bowl = 0
    this._frameScore = 0
  };
};

Bowling.prototype._updateScores = function (pinsKnockedDown) {
  this._score += pinsKnockedDown;
  this._frameScore += pinsKnockedDown;
};
