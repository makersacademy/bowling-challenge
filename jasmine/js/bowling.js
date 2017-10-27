function BowlingGame() {
  'use strict';
  this._totalScore = 0;
  this._scoreCard = [];
}

BowlingGame.prototype.score = function() {
  return this._totalScore;
};

BowlingGame.prototype.roll = function(number) {

};

BowlingGame.prototype.showScoreCard = function() {
  return this._scoreCard;
};
