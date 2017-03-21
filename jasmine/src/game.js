'use strict'

const MAX_ROLL_POINTS = 10

function Game() {
  this.runningTotal = 0
  this.frame = []
  this.allFrames = []
}

Game.prototype.enterRoll = function(rollPoints) {
  if (rollPoints > MAX_ROLL_POINTS) {
    throw new Error("You cannot exceed 10 points per roll")
  }
  if (this.frame.reduce((a, e) => a + e, 0) + rollPoints > MAX_ROLL_POINTS) {
    throw new Error("You cannot exceed 10 points per frame")
  }
  this.frame.push(rollPoints)
  this.runningTotal += rollPoints
}

Game.prototype.recordFrames = function(frame) {
  this.allFrames.push(frame)
}

// Game.prototype.checkFrame = function() {
//   if (this.frame.sum() > MAX_ROLL_POINTS) {
//     throw new Error("You cannot exceed 10 points per frame")
//   }
// }
