'use strict'

function Scorecard(){
  this._complete = false
  this.score = 0
}

Scorecard.prototype.roll = function(pins) {
  if (pins === 0) return pins
}

Scorecard.prototype.total = function(){
  return this.score
}

Scorecard.prototype.isComplete = function(){
  return this._complete = true
}