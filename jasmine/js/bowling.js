function BowlingGame() {
  'use strict';
  this._totalScore = 0;
  this._scoreCard = [];
  this._currentFrame = 0;
}

BowlingGame.prototype.score = function() {
  return this._totalScore;
};

BowlingGame.prototype.roll = function(r1, r2) {
  if (this._currentFrame === 20) {
    throw new Error('game has finished!');
  } else {
    this._scoreCard.push({
      rollOne: r1,
      rollTwo: r2
    });
    this._currentFrame += 1;
    this._totalScore += (r1 + r2);
  }
};

BowlingGame.prototype.showScoreCard = function() {
  return this._scoreCard;
};
