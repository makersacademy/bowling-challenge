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
  if (this.isSpare()) {
    this.frameScores[this.index-1] += this.game.frames[this.index][0] }
  this.index += 1
};

Scorecard.prototype.isSpare = function () {
  return this.previousFrame() === 10;
};

Scorecard.prototype.previousFrame = function () {
  if (this.index > 0) {
    return this.frameScores[this.index-1]
  } else {
    return 0
  }
};
