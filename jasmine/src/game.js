'use strict'

const MAX_ROLL_POINTS = 10

function Game() {
  this.frame = []
  this.allFrames = []
}

Game.prototype.enterRoll = function(rollPoints) {
  if (rollPoints > MAX_ROLL_POINTS) {
    throw new Error("You cannot exceed 10 points per roll")
  }
  frameCheck()
  this.frame.push(rollPoints)
}

Game.prototype.recordFrames = function(frame) {
  this.allFrames.push(frame)
}

Game.prototype.frameCheck = function() {
  this.frame
}
