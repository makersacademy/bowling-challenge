'use strict()';

function FrameTen(amount) {
  this._many = amount
  this._roll = 1
  this._pins = 10
  this._firstRoll = 0
  this._secondRoll = 0
}

// Randomising to simulate user input
FrameTen.prototype.hit = function() {
  return Math.floor(Math.random() * (this._pins + 1))
}

FrameTen.prototype.roll = function() {
  var hit = this.hit()
  this._pins -= hit
  if(this._pins === 0) {
    this._pins = 10
  }
  this._roll === 1 ? this._firstRoll = hit : this._secondRoll = hit
  this._many -= 1
  this._roll += 1
}

FrameTen.prototype.points = function() {
  return this._firstRoll + this._secondRoll
}

FrameTen.prototype.number = function() {
  return this._roll
}

FrameTen.prototype.pins = function() {
  return this._pins
}

FrameTen.prototype.spare = function() {
  return this._firstRoll
}

FrameTen.prototype.strike = function() {
  return this._firstRoll + this._secondRoll
}

FrameTen.prototype.done = function() {
  if(this._many === 0) {
    return true
  } else {
    return false
  }
}

FrameTen.prototype.superPlay = function() {
  return ''
}

// For interface
FrameTen.prototype.extraRolls = function() {
  return this._many
}
