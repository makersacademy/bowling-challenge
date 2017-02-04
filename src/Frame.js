"use strict";

const TEN_PINS = 10

function Frame(rolls){
  this._frame = rolls;
}

Frame.prototype.firstRoll = function(){
  return this._frame[0];
};

Frame.prototype.secondRoll = function(){
  return this._frame[1];
};

Frame.prototype.frameTotal = function(){
  return this._frame[0] + this._frame[1];
};

Frame.prototype.isStrike = function(){
  if (this._frame[0] === TEN_PINS) { return true;
  } else {
    return false
  }
};

Frame.prototype.isSpare = function(){
  if (this.isStrike() === false && this.frameTotal() === TEN_PINS) {
    return true;
  } else {
    return false;
  }
};
