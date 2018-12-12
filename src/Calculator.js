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
    return frame.firstRoll + frame.secondroll + frame.thirdRoll
  }
}

Calculator.prototype.strikeScore = function(frame, index) {

}

Calculator.prototype.spareScore = function(frame, index) {

}

Calculator.prototype.isntFrameOver = function(frame, index) {
  if(frame.firstRoll === undefined) { return true }
  if(index === 9 && frame.secondRoll === undefined) { return true }
  if(index === 9 && frame.firstRoll + frame.secondRoll >= 10 && frame.thirdRoll === undefined) { return true }
}
