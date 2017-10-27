function BowlingGame() {
  'use strict';
  this._totalScore = 0;
  this._scoreCard = [];
}

BowlingGame.prototype.score = function() {
  return this._totalScore;
};

BowlingGame.prototype.roll = function(r1, r2) {
  this._scoreCard.push({
    rollOne: r1,
    rollTwo: r2
  });
};

BowlingGame.prototype.showScoreCard = function() {
  return this._scoreCard;
};
