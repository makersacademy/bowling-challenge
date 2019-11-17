"use strict";

function Frame(firstRoll,secondRoll,thirdRoll){
  this._firstRoll = firstRoll;
  this._secondRoll = secondRoll;
  thirdRoll === undefined ? this._thirdRoll = 0 : this.thirdRoll = thirdRoll;
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
  return this._firstRoll + this._secondRoll + this._thirdRoll;
}
