'use strict'

var Score = function () {
  this.scorecard = []
  this.currentScore = 0
  this.currentTurn = 0
  // far frames = new Frames
  // var frame1 = { 1: 0 2: 0 strike: false spare: false }
  // var frame1 = new Object
  // var test = '1'
};


Score.prototype.runner = function(frame, turn, score) {
  this.currentFrame = frame
  this.currentTurn = turn
  this.currentScore = score
  this.addToScorecard()
  this.isAStrike()
  const frame = new Frame()

};

Score.prototype.addToScorecard = function() {
  this.scorecard.push(this.currentScore)
};


Score.prototype.isAStrike = function() {
  if (this.currentScore === 10) {
    return true
  } else {
    return false
  }
};

Score.prototype.isAStrike = function() {

};
