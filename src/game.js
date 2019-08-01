'use strict';

function Game() {
  this.throws = []
  this.throwsRemaining = 22
  this.frameRunningTotals = []
  this.totalScore = 0
  this.showTotal = 0

}

Game.prototype.throw = function (score) {

  var index = this.throws.length

  if (this.throwsRemaining === 0) {
      this.resetGame()
    }

  if (this.throwsRemaining === 2 || this.throwsRemaining === 1) {
    this.frameTenThrowTwo(score, index)
  }
  else {
    this.normalFrame(score, index)
  }
};

Game.prototype.normalFrame= function (score, index) {

  this.totalScore += score
  this.throws.push(score)

  this.addToFrameTotals(score)

  var frameIndex = this.frameRunningTotals.length

  this.checkForStrikePrevs(score, index, frameIndex)

  this.checkForStrikePrevsPrevs(score, index, frameIndex)

  this.checkForSparePrevs(score, index, frameIndex)

  if (index > 0 && this.throwsRemaining % 2 != 0 && score + this.throws[index -1] != 10) {
    this.showTotal = this.totalScore
  }

  this.reduceThrowsRemaining(score)
  index ++

};

Game.prototype.frameTenThrowTwo = function (score, index) {

  console.log("HERE")
  this.totalScore += score
  this.throws.push(score)

  this.frameRunningTotals[this.frameRunningTotals.length -1] += score

  var frameIndex = this.frameRunningTotals.length

  // If not a strike prevs or a spare remove last bonus throw
  if (this.throws[index -1] != 10 || this.throws[index -1] + score != 10) {
    this.throwsRemaining -= 1
  }

  // if prevs was strike add another throw
  if (this.throws[index -1] === 10) {
    this.throwsRemaining++
  }

  // check for PrevsPrevsStrikeAlternative
  if (this.throws[index - 2] === 10) {
    if (this.throwsRemaining % 2 === 0) {
      this.frameRunningTotals[frameIndex -2] += score;
    } else {
      this.frameRunningTotals[frameIndex -1] += score;
    }
    this.showTotal = this.totalScore
  }


  if (index > 0 && this.throwsRemaining % 2 != 0 && score + this.throws[index -1] != 10) {
    this.showTotal = this.totalScore
  }

  this.throwsRemaining -= 1
  index ++
};

Game.prototype.reduceThrowsRemaining = function (score) {
  if (score === 10) {
    this.throwsRemaining -= 2
  } else {
    this.throwsRemaining -= 1
  }
};

Game.prototype.checkForSparePrevs = function (score, index, frameIndex) {
  if (index > 1 && this.throwsRemaining % 2 === 0 &&
      this.throws[index -2] + this.throws[index -1] === 10) {
        this.totalScore += score;
        this.frameRunningTotals[frameIndex -2] += score;
        this.showTotal = this.totalScore
  }
};

Game.prototype.checkForStrikePrevs = function (score, index, frameIndex) {
  if (index > 0 && this.throws[index -1] === 10) {
    this.totalScore += score;
    this.frameRunningTotals[frameIndex -2] += score;
  }
};

Game.prototype.checkForStrikePrevsPrevs = function (score, index, frameIndex) {
  if (index > 1 && this.throws[index - 2] === 10) {
    this.totalScore += score;
    if (this.throwsRemaining % 2 === 0) {
      this.frameRunningTotals[frameIndex -3] += score;
    } else {
      this.frameRunningTotals[frameIndex -2] += score;
    }
    this.showTotal = this.totalScore
  }
};

Game.prototype.addToFrameTotals = function (score) {
  if (this.throwsRemaining % 2 === 0 ) {
    this.frameRunningTotals.push(score)
  } else {
    this.frameRunningTotals[this.frameRunningTotals.length -1] += score
  }
};

Game.prototype.resetGame = function () {
  // Maybe need to make execption to the below if statement
  // in case we are on the last frame and a strike is thrown?
    this.throws = []
    this.throwsRemaining = 20
    this.frameRunningTotals = []
    this.totalScore = 0
    this.showTotal = 0
};
