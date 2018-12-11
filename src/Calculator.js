'use strict';

function Calculator() {
  this.currentGame = undefined
  this.totalScore = 0
  this.eachScore = []
}

Calculator.prototype.scoreGame = function() {
  this.eachScore = []
  for (var i = 0; i < 8; i++) {
    var frame = this.currentGame.frames[i]
    var nextFrame = this.currentGame.frames[i+1]
    var nexterFrame = this.currentGame.frames[i+2]
    if(frame.firstRoll === undefined) {
      return
    } else if(frame.special !== 'strike' && frame.secondRoll === undefined) {
      return
    }
    if(frame.special === 'strike') {
      if(nextFrame.special === 'strike') {
        if(nexterFrame.firstRoll === undefined) {
          return
        } else {
          this.eachScore.push(20 + nexterFrame.firstRoll)
        }
      } else if(nextFrame.secondRoll === undefined) {
        return
      } else {
        this.eachScore.push(10 + nextFrame.firstRoll + nextFrame.secondRoll)
      }
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

  if(this.currentGame.frames[8].special === 'strike') {
    if(this.currentGame.frames[9].firstRoll === 10) {
      if(this.currentGame.frames[9].secondRoll !== undefined)
    }
  }
}
