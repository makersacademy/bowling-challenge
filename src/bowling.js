'use strict';

function Bowling(){};

Bowling.prototype.bowlOne = function (scoreCard) {
  var pinsKnockedDown = this._randomNumBowlOne();
  scoreCard.updateBowlOne(pinsKnockedDown);
};

Bowling.prototype.bowlTwo = function (scoreCard) {
  var pinsKnockedDown = this._randomNumBowlTwo(scoreCard.viewFrameScore);
  scoreCard.updateBowlTwo(pinsKnockedDown);
};

Bowling.prototype._randomNumBowlOne = function () {
  return Math.floor(Math.random() * 11);
};

Bowling.prototype._randomNumBowlTwo = function (frameScore) {
  var num
  num = 11 - frameScore
  return Math.floor(Math.random() * num);
};
