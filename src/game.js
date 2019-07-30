'use strict';

function Game() {
  this.throws = []
  this.throwsRemaining = 20
  this.index = 0
  this.frameRunningTotals = []
  this.totalScore = 0
  this.showTotal = 0

}

Game.prototype.throw = function (score) {

  if (this.throwsRemaining === 0) {
    this.throws = []
    this.throwsRemaining = 20
    this.index = 0
    this.frameRunningTotals = []
    this.totalScore = 0
    this.showTotal = 0
  }

  this.totalScore += score
  this.throws.push(score)

  if (this.throwsRemaining % 2 === 0 ) {
    this.frameRunningTotals.push(score)
  } else {
    this.frameRunningTotals[this.index -1] += score
  }

  // CHECKING FOR STRIKE ON LAST THROW...
  if (this.index > 0 && this.throws[this.index -1] === 10) {
    this.totalScore += score;
    this.frameRunningTotals[this.index -1] += score;

    // CHECKING FOR STRIKE ON LAST, LAST THROW
    if (this.index > 1 && this.throws[this.index - 2 === 10]) {
      this.totalScore += score;
      this.frameRunningTotals[this.index -2] += score;
    }

  // CHECKING FOR SPARE ON LAST FRAME
  }
  if (this.index > 1 && this.throwsRemaining % 2 === 0 &&
      this.throws[this.index -2] + this.throws[this.index -1] === 10) {
        totalScore += score;
        this.frameRunningTotals[this.index -1] += score;
        this.showTotal = this.totalScore
  }

  this.total += score;

  if (this.index > 0 && this.throwsRemaining % 2 != 0 && score + this.throws[this.index -1] != 10) {
    this.showTotal = this.totalScore
  }
  this.index += 1

  if (score === 10) {
    this.throwsRemaining -= 2
  } else {
    this.throwsRemaining -= 1
  }
};
