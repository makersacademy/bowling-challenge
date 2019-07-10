'use strict'

const maxScore = 10

function Scorecard(){
  this.game = new Game
  this.frameScores = []
  this.index = 0
};

Scorecard.prototype.isOver = function (){
  return this.game.framesPlayed() === 10;
};

Scorecard.prototype.ball1 = function (pins){
  this.game.ball1(pins)
};

Scorecard.prototype.ball2 = function (pins){
  this.game.ball2(pins)
  if (this.index === 9 && (this.game.pinsTotal()) % maxScore === 0) {
    return
  } else {
    this.frameScoreCalc()
  }
};

Scorecard.prototype.ball3 = function (pins){
  this.game.ball3(pins)
  this.frameScoreCalc()
};

Scorecard.prototype.frameTotal = function () {
  var reducer = (total, score) => total + score;
  return this.game.frames[this.index].reduce(reducer)
};

Scorecard.prototype.totalScore = function () {
  var reducer = (total, score) => total + score;
  return this.frameScores.reduce(reducer)
};

Scorecard.prototype.frameScoreCalc = function () {
  this.frameScores.push(this.frameTotal())
  if (this.isDoubleStrike()) {
    this.frameScores[this.index-1] += this.game.pinsTotal()
    this.frameScores[this.index-2] += maxScore
  } else if (this.isStrike()) {
    this.frameScores[this.index-1] += this.game.pinsTotal()
  } else if (this.isSpare()) {
    this.frameScores[this.index-1] += this.game.ball1Pins
  }
  this.index += 1
};

Scorecard.prototype.isStrike = function () {
  if (this.index > 0) {
    return this.game.frames[this.index-1][0] === maxScore;
  } else {
    return false
  }
};

Scorecard.prototype.isSpare = function () {
  if (this.index > 0) {
    return this.frameScores[this.index-1] === maxScore;
  } else {
    return false
  }
};

Scorecard.prototype.isDoubleStrike = function () {
  if (this.index > 1) {
    return this.game.frames[this.index-1][0] === maxScore && this.game.frames[this.index-2][0] === maxScore
  } else {
    return false
  }
};
