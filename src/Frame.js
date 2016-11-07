'use strict'

function Frame () {
  this.firstRollTotal = 0
  this.secondRollTotal = 0
  this.tempTotal = 0
  this.finalTotal = 0
  this.isStrike = false
  this.isSpare = false
  this.isFinished = false
};

Frame.prototype.firstRoll = function (pins) {
  this.firstRollTotal = pins
  this.tempTotal = this.firstRollTotal
  if (this.tempTotal === 10) {
    this.isStrike = true
    this.isFinished = true
  }
}

Frame.prototype.secondRoll = function (pins) {
  this.secondRollTotal = pins
  this.tempTotal = this.firstRollTotal + this.secondRollTotal
  if (this.tempTotal === 10) {
    this.isSpare = true
  }
  this.isFinished = true
}
