'use strict';

function Calculator() {
  this.currentGame = undefined
  this.totalScore = 0
  this.eachScore = []
}

Calculator.prototype.scoreGame = function() {
  this.eachScore = []
  for(var i = 0; i < 10; i++) {
    this.eachScore.push(this.frameScore(this.currentGame.frames[i], i))
  }
}

Calculator.prototype.frameScore = function(frame, index) {
  if(index === 8) { return penultimateFrame() }
  if(index === 9) { return ultimateFrame() }
  if(frame.special === 'strike') { return strikeScore(index) }
  if(frame.special === 'spare') { return spareScore(index) }
  return (frame.firstRoll + frame.secondRoll)
}
