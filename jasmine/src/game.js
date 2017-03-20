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
  if (this.frame.sum() + rollPoints > MAX_ROLL_POINTS) {
    throw new Error("You cannot exceed 10 points per frame")
  }
  this.frame.push(rollPoints)
}

Game.prototype.recordFrames = function(frame) {
  this.allFrames.push(frame)
}

// Game.prototype.checkFrame = function() {
//   if (this.frame.sum() > MAX_ROLL_POINTS) {
//     throw new Error("You cannot exceed 10 points per frame")
//   }
// }

Array.prototype.sum = function() {
  var a = this[0]
  for (var i = 1; i < this.length; i++) {
    a = a + this[i]
  }
  console.log(a)
  return a
}
