'use strict'

function Scorecard(){
  this._complete = false
  this.score = 0
  this._pinsDown = []
}

Scorecard.prototype.roll = function(pins) {
  this._pinsDown.push(pins)
  // return this.score += pins
}

Scorecard.prototype.total = function(){
  var i = 0
  for(var frame = 0; frame < 10; frame++) {
    if (this._pinsDown[i] + this._pinsDown[i+1] === 10) {
      this.score += 10 + this._pinsDown[i+2]
      i+=2
    } else {
      this.score += this._pinsDown[i] + this._pinsDown[i+1]
      i+=2
    }
  }
  return this.score
  // this.isComplete()
  // return this.score 
}

Scorecard.prototype.isComplete = function(){
  return this._complete = true
}