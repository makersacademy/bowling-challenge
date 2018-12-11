'use strict';

function Calculator() {
  this.currentGame = undefined
  this.totalScore = 0
  this.eachScore = []
}

Calculator.prototype.scoreGame = function() {
  this.eachScore = []
  for (var i = 0; i < 7; i++) {
    var frame = this.currentGame.frames[i]
    var nextFrame = this.currentGame.frames[i+1]
    var nexterFrame = this.currentGame.frames[i+2]
    if(frame.firstRoll === undefined) {
      return
    } else if(frame.special === 'spare') {
      if(nextFrame.firstRoll === undefined) {
        return
      } else {
        this.eachScore.push(10 + nextFrame.firstRoll)
      }
    } else {
      this.eachScore.push(frame.firstRoll + frame.secondRoll)
    }
  }
}
