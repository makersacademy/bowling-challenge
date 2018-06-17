'use strict';

function Bowling(){};

Bowling.prototype.bowlOne = function (scoreCard) {
  var pinsKnockedDown = this._randomNum1to10();
  scoreCard.updateBowlOne(pinsKnockedDown);
};

Bowling.prototype.bowlTwo = function (scoreCard) {
  var pinsKnockedDown = this._randomNum1to10();
  scoreCard.updateBowlTwo(pinsKnockedDown);
};

Bowling.prototype._randomNum1to10 = function () {
  return Math.floor(Math.random() * 11);
};
