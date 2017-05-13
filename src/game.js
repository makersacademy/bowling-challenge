'use strict';

function Game() {
  this.currentFrame = new Frame(1, "")
  this.frameIDCounter = 2
  this.score = 0
  this.multiplier = ""
  this.frames = []
}

Game.prototype.addBowl = function(bowl) {
  if (bowl > 10) {
    throw new Error("You cannot bowl more than a 10")
  }
  this.currentFrame.addRoll(bowl)
  if (this.currentFrame.isFinished === true) {
    this.score += this.currentFrame.frameScore
    this.newFrame()
  }
}

Game.prototype.newFrame = function() {
  this.setMultiplier()
  this.frames.push(this.currentFrame)
  this.currentFrame = new Frame(this.frameIDCounter, this.multiplier)
  this.frameIDCounter += 1
}

Game.prototype.setMultiplier = function () {
  if (this.currentFrame.isStrike === true && this.currentFrame.isSpare === true) {
    this.multiplier = "Double"
  } else if (this.currentFrame.isSpare === true) {
    this.multiplier = "Spare"
  } else if (this.currentFrame.isStrike === true) {
      this.multiplier = "Strike"
  } else {
    this.multiplier = ""
  }
};
