'use strict'

function Scorecard(){
  this._complete = false
  this.score = 0
  this._pinsDown = []
}

Scorecard.prototype.roll = function(pins) {
  this._pinsDown = pins
}

Scorecard.prototype.total = function(){
  var i = 0
  for(var frame = 0; frame < 10; frame++) {
    if (this.isSpare(i)) {
      this.score += 10 + this._pinsDown[i+2]
      i+=2
    }  
    else if (this.isStrike(i)) {
      this.score += 10 + this._pinsDown[i+1] + this._pinsDown[i+2] 
      i++
    }
    else {
      this.score += this._pinsDown[i] + this._pinsDown[i+1]
      i+=2
    }
  }
  this.isComplete()
  return this.score
}

Scorecard.prototype.isSpare = function(i){
  return this._pinsDown[i] + this._pinsDown[i+1] === 10
}

Scorecard.prototype.isStrike = function(i){
  return this._pinsDown[i] === 10
}

Scorecard.prototype.isComplete = function(){
  return this._complete = true
}