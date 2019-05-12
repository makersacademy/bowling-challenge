'use strict'

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
    this.frameScores[this.index-1] += this.game.ball1Pins + this.game.ball2Pins
    this.frameScores[this.index-2] += 10
  } else if (this.isStrike()) {
    this.frameScores[this.index-1] += this.game.ball1Pins + this.game.ball2Pins
  } else if (this.isSpare()) {
    this.frameScores[this.index-1] += this.game.ball1Pins
  }
  this.index += 1
};

Scorecard.prototype.isStrike = function () {
  if (this.index > 0) {
    return this.game.frames[this.index-1].includes(10)
  } else {
    return false
  }
};

Scorecard.prototype.isSpare = function () {
  if (this.index > 0) {
    return this.frameScores[this.index-1]  === 10;
  } else {
    return false
  }
};

Scorecard.prototype.isDoubleStrike = function () {
  if (this.index > 1) {
    return this.game.frames[this.index-1].includes(10) && this.game.frames[this.index-2].includes(10)
  } else {
    return false
  }
};
