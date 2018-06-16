'use strict';

function Bowling(){
  this._score = 0;
  this._frameScore = 0;
  this._bowlNum = 0;
};

Bowling.prototype.bowl = function (scoreCard) {
  var pinsKnockedDown = this._randomNum1to10();
  scoreCard.update(pinsKnockedDown);
};

Bowling.prototype._randomNum1to10 = function () {
  return Math.floor(Math.random() * 11);
};
