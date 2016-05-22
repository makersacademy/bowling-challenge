'use strict'

function Game() {
  this._frames = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]}
  this._frameNumber = 1
  this._frameRollNumber = 0
  this._rollNumber = 0
  this._rolls = []
}

Game.prototype.bowl = function(roll = new Roll()) {
  this.updateRollInfo(roll)
  this._frames[this._frameNumber].push(roll)
  if(this._frameNumber === 10) {
    if(this._frameRollNumber === 3) { this.updateFrameInfo() }
  }
  else {
    if(this._frameRollNumber === 2 || roll.score() === 10) { this.updateFrameInfo() }
  }
}

Game.prototype.rollNumberScore = function(number) {
  return this._rolls[number-1]
}

Game.prototype.frame = function(frameNumber) {
  return this._frames[frameNumber]
}

Game.prototype.frameScore = function(frameNumber) {
  var frameScore = 0
  var rollNum = this._frames[frameNumber][0].rollNumber()
  if(this._frames[frameNumber][0].score() === 10) {
    if(this.rollNumberScore(rollNum+1) === undefined) { return 10 }
    frameScore = 10 + this.rollNumberScore(rollNum+1) + this.rollNumberScore(rollNum+2)
    return frameScore
  }

  this._frames[frameNumber].forEach(function (roll) {
    frameScore += roll.score()
  })

  if(frameScore === 10) {
    if(this.rollNumberScore(rollNum+2) === undefined) { return 10 }
    frameScore += this.rollNumberScore(rollNum+2)
    return frameScore
  }
  return frameScore
}

// Game.prototype.totalScore = function() {
//   var totalScore = 0
//   for (var i = 1; i = this._frameNumber; i++) {
//    var currentFrameScore = this.frameScore(i)
//   totalScore += currentFrameScore
//   }
//   return totalScore
// }





Game.prototype.updateFrameInfo = function() {
  this._frameNumber ++
  this._frameRollNumber = 0
}

Game.prototype.updateRollInfo = function(roll) {
  this._frameRollNumber ++
  this._rollNumber ++
  this._rolls.push(roll.score())
  roll.setRollNumber(this._rollNumber)
}

// Game.prototype.strikeCheck = function(frameNumber, rollNum, frameScore) {
//   if(this._frames[frameNumber][0].score() === 10) {
//     if(this.rollNumberScore(rollNum+1) === undefined) { return 10 }
//     frameScore = 10 + this.rollNumberScore(rollNum+1) + this.rollNumberScore(rollNum+2)
//     return frameScore
//   }
// }

// Game.prototype.spareCheck = function() {
//   if(frameScore === 10) {
//     if(this.rollNumberScore(rollNum+2) === undefined) { return 10 }
//     frameScore += this.rollNumberScore(rollNum+2)
//     return frameScore
//   }
// }