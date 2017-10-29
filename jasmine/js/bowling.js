function BowlingGame() {
  // 'use strict';
  this._totalScore = 0;
  this._scoreCard = [];
  this._currentFrame = 1;
}

BowlingGame.prototype.score = function() {
  return this._totalScore;
};

BowlingGame.prototype.roll = function(r1, r2 = 0) {
  if (this._currentFrame === 10) {
    throw new Error('game has finished!');
  } else {
    this._scoreCard.push({ // into method
      rollOne: r1,
      rollTwo: r2,
      score: (r1 + r2)
    });
    this._totalScore += (r1 + r2); // into method
    this._currentFrame += 1; // into method
    this.addStrikeBonus();
    this.updateTotalScore();
  }
};
BowlingGame.prototype.showScoreCard = function() {
  return this._scoreCard;
};

BowlingGame.prototype.showFrame = function(frame) {
  // var f = frame - 1;
  return this._scoreCard[frame - 1];
};

BowlingGame.prototype.addStrikeBonus = function() {
  if (this._currentFrame > 2) {
    if (this.showFrame(this._currentFrame - 2).rollOne === 10) {
      this.showFrame(this._currentFrame - 2).score +=
        (this.showFrame(this._currentFrame - 1).rollOne +
          this.showFrame(this._currentFrame - 1).rollTwo);
    }
  }
};

// this needs to iterate through the next rolls and add together the rolls
// > 0 and then stop after adding two

// BowlingGame.prototype.addSpareBonus = function() {
//   this.showFrame(this._currentFrame - 2).score +=
//     this.showFrame(this._currentFrame - 1).rollOne;
// };
// this needs to iterate through the next rolls and add together the rolls
// > 0 and then stop after adding 1


BowlingGame.prototype.updateTotalScore = function() {
  this._totalScore = 0;
  totalScore = this._totalScore;
  this._scoreCard.forEach(function(frame) {
    totalScore += frame.score;
  });
  this._totalScore = totalScore;
};







// BowlingGame.prototype.bonusPoints = function() {
//   return this._scoreCard[this._currentFrame - 2].rollOne +
//     this._scoreCard[this._currentFrame - 2].rollTne;
//
// };
