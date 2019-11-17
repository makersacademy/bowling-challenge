"use strict";

function Frame(firstRoll,secondRoll){
  this._firstRoll = firstRoll;
  this._secondRoll = secondRoll;
}

Frame.prototype.getFirstRoll = function() {
  return this._firstRoll;
}


Frame.prototype.getSecondRoll = function() {
  return this._secondRoll;
}

Frame.prototype.isAStrike = function() {
  return this._firstRoll === 10
}

Frame.prototype.isASpare = function() {
  if (!this.isAStrike()) {
    return (this._firstRoll + this._secondRoll === 10)
  } else
      return false;
}

Frame.prototype.getFrameScore = function() {
  return this._firstRoll + this._secondRoll;
}
