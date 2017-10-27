function BowlingGame() {
  'use strict';
  this._totalScore = 0;
  this._scoreCard = [];
  this._currentFrame = 1;
}

BowlingGame.prototype.score = function() {
  return this._totalScore;
};

BowlingGame.prototype.roll = function(r1, r2 = 0) {
  if (this._currentFrame === 20) {
    throw new Error('game has finished!');
  } else {
    this._scoreCard.push({
      rollOne: r1,
      rollTwo: r2
    });
    if (this._currentFrame === 1) { // checks first roll
      this._totalScore += (r1 + r2);
      this._currentFrame += 1;
    } else if (this._scoreCard[this._currentFrame - 2].rollOne === 10) { // checks if strike
      this._totalScore += (r1 * 2 + r2 * 2);
      this._currentFrame += 1;
    } else if (this._scoreCard[this._currentFrame - 2].rollOne +
      this._scoreCard[this._currentFrame - 2].rollTwo === 10) {
      this._totalScore += (r1 * 2 + r2);
      this._currentFrame += 1;
    } else {
      this._totalScore += (r1 + r2);
      this._currentFrame += 1;
    }
  }
};
BowlingGame.prototype.showScoreCard = function() {
  return this._scoreCard;
};

// BowlingGame.prototype.bonusPoints = function() {
//   return this._scoreCard[this._currentFrame - 2].rollOne +
//     this._scoreCard[this._currentFrame - 2].rollTne;
//
// };
