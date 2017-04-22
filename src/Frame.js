'use strict';

function Frame(num) {
  this._number = num
  this._pins = 10
  this._roll = 1
  this._rollOnePoints = 0
  this._rollTwoPoints = 0
  this._bonusPoints = 0
}

Frame.prototype.roll = function() {
  var hit = this._hit()
  this._roll === 1 ? this._rollOnePoints = hit : this._rollTwoPoints = hit
  this._pins -= hit
  this._roll +=1
}

Frame.prototype.number = function() {
  return this._number;
}

Frame.prototype.currentRoll = function() {
  return this._roll
}

Frame.prototype.points = function() {
  return this._rollOnePoints + this._rollTwoPoints + this._bonusPoints
}

Frame.prototype.pins = function() {
  return this._pins
}


Frame.prototype.spareBonus = function() {
  return this._rollOnePoints
}

Frame.prototype.strikeBonus = function() {
  return this._rollOnePoints + this._rollTwoPoints
}

Frame.prototype.addBonus = function(points) {
  this._bonusPoints += points
}

Frame.prototype.bonusFeature = function() {
  if(this._rollOnePoints === 10) {
    return 'strike'
  } else if (this._rollTwoPoints + this._rollOnePoints === 10) {
    return 'spare'
  } else {
    return ''
  }
}

Frame.prototype.isFinished = function() {
  if(this.bonusFeature() === 'strike' || this._roll === 3) {
    return true
  } else {
    return false
  }
}

Frame.prototype._hit = function() {
  return 10
  // return Math.floor(Math.random() * (this._pins + 1))
}
