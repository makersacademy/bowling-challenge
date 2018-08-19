'use strict';

function Frame(name) {
  this._frameNumber = name
  this._pins = 10
  this._roll = 1
  this._firstRoll = 0
  this._secondRoll = 0
  this._bonusPoints = 0
}

Frame.prototype.hit = function() {
  return Math.floor(Math.random() * (this._pins + 1))
}

Frame.prototype.roll = function() {
  var hit = this.hit()
  this._roll === 1 ? this._firstRoll = hit : this._secondRoll = hit
  this._pins -= hit
  this._roll +=1
}

Frame.prototype.whichFrame = function() {
  return this._frameNumber;
}

Frame.prototype.currentRoll = function() {
  return this._roll
}

Frame.prototype.points = function() {
  return this._firstRoll + this._secondRoll + this._bonusPoints
}

Frame.prototype.pins = function() {
  return this._pins
}

Frame.prototype.spare = function() {
  return this._firstRoll
}

Frame.prototype.strike = function() {
  return this._firstRoll + this._secondRoll
}

Frame.prototype.superPlay = function() {
  if(this._firstRoll === 10) {
    return 'strike'
  } 
  else if (this._firstRoll + this._secondRoll === 10) {
    return 'spare'
  } 
  else {
    return ''
  }
}

Frame.prototype.bonus = function(points) {
  this._bonusPoints += points
}

Frame.prototype.done = function() {
  if(this.superPlay() === 'strike' || this._roll === 3) {
    return true
  } 
  else {
    return false
  }
}
