'use strict'

function Bowling () {
  this.current_frame = []
  this.score = []
  this.isSpare = false
};

Bowling.prototype.total = function () {
  return sum(this.score.flat())
}

Bowling.prototype.roll = function (pins) {
  this.current_frame.push(pins)

  if (this.isSpare) {
    this.score.last().push(pins)
    this.isSpare = false
  }

  if (this.current_frame.length === 2) { 
    if (sum(this.current_frame) === 10) {
      this.isSpare = true
    }
    this.score.push(this.current_frame) 
    this.current_frame = []
  }
}

function sum(array) {
  return array.reduce((a, b) => a + b, 0)
}

Array.prototype.last = function () {
  return this[this.length - 1];
}
