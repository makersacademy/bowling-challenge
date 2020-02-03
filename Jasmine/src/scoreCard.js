"use strict";

function ScoreCard() {
  this.score = 0
  this.game = []
  this.frame = {
    ballOne: null,
    ballTwo: null
  }
}

ScoreCard.prototype.play = function(one = 0, two = 0) {
  var newFrame = this.frame
  newFrame.ballOne = one
  newFrame.ballTwo = two

  this.game.push(newFrame)
  this.score += this.frameScore()
}

ScoreCard.prototype.currentRound = function() {
  return this.game.length;
}

ScoreCard.prototype.frameScore = function() {
  if (this._isStrike === true) {
    return this._strikeScore;
  }
  else if (this._isSpare === true) {
    return this._spareScore;
  }
  else {
    return this.frame.ballOne + this.frame.ballTwo;
  }
}

ScoreCard.prototype.currentScore = function() {
    return this.score;
}

ScoreCard.prototype._isSpare = function() {
 this.frame.ballOne + this.frame.ballTwo === 10;
}

ScoreCard.prototype._isStrike = function() {
  this.frame.ballOne === 10;
}

ScoreCard.prototype._spareScore = function() {
  return (this.game[this.currentRound() - 1].frame.ballOne + this.game[this.currentRound() - 1].ballTwo) + this.game[this.currentRound() + 1].ballOne;
 }

ScoreCard.prototype._strikeScore = function() {
  return (this.game[this.currentRound() - 1].frame.ballOne + this.game[this.currentRound() - 1].ballTwo) + (this.game[this.currentRound() + 1].ballOne + this.game[this.currentRound() + 1].ballTwo)
}