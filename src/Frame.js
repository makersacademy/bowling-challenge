'use strict';

function Frame() {
  this._points = 0
  this._pins = 10
  this._rolls = 0
}

Frame.prototype.roll = function() {
  var hit = this._hit()
  this._points += hit
  this._pins -= hit
  this._rolls +=1
}

Frame.prototype.points = function() {
  return this._points
}


Frame.prototype.isStrike = function() {
  if(this._rolls === 1 && this._points === 10) {
    return true
  }
  return false
}

Frame.prototype.isSpare = function() {
  if(this._rolls === 2 && this._points === 10) {
    return true
  }
  return false
}

Frame.prototype.isFinished = function() {
  if(this.isStrike() || this._rolls === 2) {
    return true
  }
  return false
}

Frame.prototype._hit = function() {
  return Math.floor(Math.random() * (this._pins + 1))
}
