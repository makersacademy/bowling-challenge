'use strict';

function Frame() {
  this._pins = 10
  this._rolls = 0
  this._rollOnePoints = 0
  this._rollTwoPoints = 0
  this._bonusPoints = 0
}

Frame.prototype.roll = function() {
  var hit = this._hit()
  this._rolls === 0 ? this._rollOnePoints = hit : this._rollTwoPoints = hit
  this._pins -= hit
  this._rolls +=1
}

Frame.prototype.points = function() {
  return this._rollOnePoints + this._rollTwoPoints + this._bonusPoints
}


Frame.prototype.spareBonus = function() {
  return this._rollOnePoints
}

Frame.prototype.addBonus = function(points) {
  this._bonusPoints += points
}

Frame.prototype.bonusFeature = function() {
  if(this._rollOnePoints === 10) {
    return 'strike'
  } else if (this._rollTwoPoints + this._rollOnePoints === 10) {
    return 'spare'
  }
}

Frame.prototype.isFinished = function() {
  if(this.bonusFeature() === 'strike' || this._rolls === 2) {
    return true
  } else {
    return false
  }
}

Frame.prototype._hit = function() {
  return Math.floor(Math.random() * (this._pins + 1))
}
