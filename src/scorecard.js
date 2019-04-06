'use strict'

function Scorecard(){
  this._complete = false
  this.score = 0
}

Scorecard.prototype.roll = function(pins) {
  return this.score += pins
}

Scorecard.prototype.total = function(){
  this.isComplete()
  return this.score
}

Scorecard.prototype.isComplete = function(){
  return this._complete = true
}