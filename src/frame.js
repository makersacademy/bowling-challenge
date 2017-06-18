"use strict";

var Frame = function(rolls) {
  this.TOTAL_PINS = 10;
  this.rolls = rolls;
};


Frame.prototype.total = function(nextFrame, nextnextFrame) {
  return this._rollTotal() + this._bonus(nextFrame, nextnextFrame);
};

Frame.prototype._rollTotal = function() {
  return this.rolls.reduce(function(rollOne, rollTwo) {
    return rollOne + rollTwo;
  });
};

Frame.prototype._bonus = function(nextFrame, nextnextFrame) {
  if ( this._isNoBonus() ) {
    return 0;
  }
  if ( this._isSpare() ) {
    return nextFrame._spareBonus();
  }

};

Frame.prototype._isNoBonus = function() {
  if ( this._rollTotal() < this.TOTAL_PINS ) {
    return true;
  }
  return false;
};

Frame.prototype._isSpare = function() {
  return ( this._rollTotal() == this.TOTAL_PINS );
};

Frame.prototype._spareBonus = function() {
  return this._firstRoll();
};

Frame.prototype._firstRoll = function() {
  return this.rolls[0];
};
