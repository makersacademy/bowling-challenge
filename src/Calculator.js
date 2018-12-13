'use strict';

function Calculator() {
  this.currentGame = undefined
  this.totalScore = 0
  this.eachScore = []
}

Calculator.prototype.scoreGame = function() {
  this.eachScore = []
  for(var i = 0; i < 10; i++) {
    var frame = this.currentGame.frames[i]
    if(this.isntFrameOver(frame, i)) { return }
    if(this.cantScore(frame, i)) { return }
    this.eachScore.push(this.frameScore(frame, i))
  }
}

Calculator.prototype.frameScore = function(frame, index) {
  if(index === 9) { return this.ultimateFrame(frame) }
  if(frame.special === 'strike') { return this.strikeScore(frame, index) }
  if(frame.special === 'spare') { return this.spareScore(frame, index) }
  return (frame.firstRoll + frame.secondRoll)
}

Calculator.prototype.ultimateFrame = function(frame) {
  if(frame.firstRoll + frame.secondRoll < 10) {
    return frame.firstRoll + frame.secondRoll
  } else {
    return frame.firstRoll + frame.secondRoll + frame.thirdRoll
  }
}

Calculator.prototype.strikeScore = function(frame, index) {
  var frames = this.currentGame.frames
  if(frames[index+1].special === 'strike') {
    return(20 + frames[index+2].firstRoll)
  } else {
    return(10 + frames[index+1].firstRoll + frames[index+1].secondRoll)
  }
}

Calculator.prototype.spareScore = function(frame, index) {
  return(10 + this.currentGame.frames[index+1].firstRoll)
}

Calculator.prototype.isntFrameOver = function(frame, index) {
  if(frame.isFinished === false) { return true }
  if(index === 9 && frame.secondRoll === undefined) { return true }
  if(index === 9 && frame.firstRoll + frame.secondRoll >= 10 && frame.thirdRoll === undefined) { return true }
}

Calculator.prototype.cantScore = function(frame, index) {
  var frames = this.currentGame.frames
  if(frame.special === 'spare') {
    if(frames[index+1].firstRoll === undefined) {
      return true
    } else {
      return false
    }
  } else if(frame.special === 'strike') {
    if(frames[index+1].special === 'strike') {
      if(frames[index+2].firstRoll === undefined) {
        return true
      } else {
        return false
      }
    } else if(frames[index+1].secondRoll === undefined) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
Calculator.prototype.calcTotalScore = function() {
  if(this.eachScore.length === 0) {
    return 0
  } else {
    return this.eachScore.reduce((x, y) => x + y);
  }
}
