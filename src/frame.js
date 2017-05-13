'use strict';

function Frame(id, multiplier = "") {
  this.id = id
  this.rolls = []
  this.isFinished = false
  this.frameScore = 0
  this.isSpare = false
  this.isStrike = false
  this.frameMultiplier = multiplier
}

Frame.prototype.addRoll = function(roll) {
  if (this.rolls.length === 0 && roll === 10) {
    this.rolls.push(roll)
    this.strikeScoring()
  } else {
    this.rolls.push(roll)
    this.changeFrameScore()
  }
  this.isStrike = true
  this.checkIfFinished()
}

Frame.prototype.checkIfFinished = function() {
  var rollTotal = (this.rolls[0] + this.rolls[1])
  if (rollTotal === 10 && this.id !== 10) {
    this.isFinished = true
    this.checkForSpare()
  }
  if (this.rolls.length === 2 && this.id !== 10) {
    this.isFinished = true
    this.checkForSpare()
  }
  if (this.id === 10 && rollTotal < 10) {
    this.isFinished = true
    this.checkForSpare()
  }
  if (this.rolls.length === 3 && this.id === 10){
    this.isFinished = true
  }
}

Frame.prototype.changeFrameScore = function () {
  if (this.frameMultiplier === "Strike") {
    this.frameScore += this.rolls[0] * 2
    this.frameScore += this.rolls[1] * 2
  } else if (this.frameMultiplier === "Double") {
    this.frameScore += this.rolls[0] * 3
    this.frameScore += this.rolls[1] * 2
  }
  this.frameScore += this.rolls[this.rolls.length-1]
};

Frame.prototype.checkForSpare = function () {
  var rollTotal = (this.rolls[0] + this.rolls[1])
  if (rollTotal === 10) {
    this.isSpare = true
  }
};

Frame.prototype.strikeScoring = function () {
  if (this.id !== 10) {
    this.rolls.push(0)
  }
  if (this.frameMultiplier === "Strike") {
    this.frameScore += 20
    this.isSpare = true
  } else if (this.frameMultiplier === "Double") {
    this.frameScore += 30
    this.isSpare = true
  } else if (this.frameMultiplier === "Spare") {
    this.frameScore += 20
  } else {
    this.frameScore += 10
  }
};
