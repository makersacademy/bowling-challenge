'use strict';

function Frame() {
  this._points = 0;
  this._firstRoll = 0;
  this._secondRoll = 0;
  this._rolls = 0;
  this._bonus = 0;
  this._standingPins = 10;
}

Frame.prototype.roll = function() {
  var hit = this._hit();
  this._rolls === 0 ? this._firstRoll = hit : this._secondRoll = hit;
  this._points += hit;
  this._standingPins -= hit;
  this._rolls +=1;
}

// Using Math.random for now to simulate user input
Frame.prototype._hit = function() {
  return Math.floor(Math.random() * (this._points + 1));
}

Frame.prototype.savePoints = function() {
  return this._firstRoll + this._secondRoll + this._bonus;
}

Frame.prototype.isGutter = function() {
  return this._rolls === 2 && this._points === 0 ;   
}

Frame.prototype.isStrike = function() {
  return this._rolls === 1 && this._points === 10;
}

Frame.prototype.isSpare = function() {
  return this._rolls === 2 && this._points === 10;
}

Frame.prototype.isDone = function() {
  if (this.isStrike || this.__rolls === 2) {
    return true;
  }
  return false;
}

Frame.prototype.addBonus = function() {
  return this._bonus + this.savePoints;
}

Frame.prototype.spareBonus = function() {
  return this._firstRoll; 
}
