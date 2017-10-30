'use strict';

function BowlingGame() {
  this._frameNumber = 1
  this._frameScore = 0
  this._totalScore = 0
  this._rollNumber = 1
  this.rolls = []
}

BowlingGame.prototype.nextRound = function() {
  if(this._frameNumber >= 11) throw Error("Game Over!")
  this._frameNumber += 1;
  this._rollNumber = 1;
};

BowlingGame.prototype.nextRoll = function() {
  if(this._rollNumber >= 3) throw Error("Max rolls reached")
  this._rollNumber += 1;
}

BowlingGame.prototype.firstRoll = function(score) {
  if (score === 10 && this._frameNumber === 10) {
    this._frameNumber
  } else if (score === 10) {
    this._frameNumber += 1
  }
  this._frameScore += score
  this.rolls.push(score);
  this.nextRoll()
};

BowlingGame.prototype.secondRoll = function(score) {
  if (score === 10 && this._frameNumber === 10) {
    this._frameNumber -=1
    this.nextRoll()
  } else if (score !== 10 && this._frameNumber === 10) {
    this.isOver();
  }
  this.rolls.push(score);
  this._frameScore += score
  this._totalScore += this._frameScore
  this._frameScore = 0
  this.nextRound();
};

BowlingGame.prototype.thirdRoll = function(score) {
  this.isOver();
};

BowlingGame.prototype.isOver = function() {
    return true
};

// BowlingGame.prototype.calculateBonus = function() {
//   if this.firstRoll(10) {
//     this._totalScore =
//   }
// }
