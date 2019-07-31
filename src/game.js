'use strict';

function Game() {
  this.throws = []
  this.throwsRemaining = 20
  this.frameRunningTotals = []
  this.totalScore = 0
  this.showTotal = 0

}

Game.prototype.throw = function (score) {

  var index = this.throws.length

  score = score || 0
  // Maybe need to make execption to the below if statement
  // in case we are on the last frame and a strike is thrown?
  if (this.throwsRemaining === 0) {
    this.throws = []
    this.throwsRemaining = 20
    this.frameRunningTotals = []
    this.totalScore = 0
    this.showTotal = 0
  }


  this.totalScore += score
  this.throws.push(score)

  if (this.throwsRemaining % 2 === 0 ) {
    this.frameRunningTotals.push(score)
  } else {
    this.frameRunningTotals[this.frameRunningTotals.length -1] += score
  }

  // CHECKING FOR STRIKE ON LAST THROW...
  if (index > 0 && this.throws[index -1] === 10) {
    this.totalScore += score;
    this.frameRunningTotals[this.frameRunningTotals.length -2] += score;
  }
  // CHECKING FOR STRIKE ON LAST, LAST THROW...
  if (index > 1 && this.throws[index - 2] === 10) {
    console.log("WE ARE HERE")
    this.totalScore += score;
    this.frameRunningTotals[this.frameRunningTotals.length -2] += score;
  }
    // CHECKING FOR SPARE ON LAST FRAME
  if (index > 1 && this.throwsRemaining % 2 === 0 &&
      this.throws[index -2] + this.throws[index -1] === 10) {
        this.totalScore += score;
        this.frameRunningTotals[this.frameRunningTotals.length -2] += score;
        this.showTotal = this.totalScore
  }

  if (index > 0 && this.throwsRemaining % 2 != 0 && score + this.throws[index -1] != 10) {
    this.showTotal = this.totalScore
  }

  if (score === 10) {
    this.throwsRemaining -= 2
  } else {
    this.throwsRemaining -= 1
  }
  index ++
};
