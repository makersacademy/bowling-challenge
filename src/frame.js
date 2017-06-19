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
  if ( this._isStrike() ) {

    return nextFrame._strikeBonus(nextnextFrame);
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

Frame.prototype._isStrike = function() {
  return ( this._firstRoll() == this.TOTAL_PINS );
};

Frame.prototype._spareBonus = function() {
  return this._firstRoll();
};

Frame.prototype._strikeBonus = function(nextFrame) {
  if ( this._isStrike() ) {
    return this._rollTotal() + nextFrame._doubleStrikeBonus();
  }
  return this._rollTotal();
};

Frame.prototype._doubleStrikeBonus = function() {
  return this._rollTotal()
};



// Frame.prototype._strikeBonus = function(next_frame) {
//   if (this._isStrike() && next_frame !== undefined) {
//     return this._rollTotal() + next_frame._firstRoll();
//   }
//
//   return this._firstRoll() + this.rolls[1];
// };

Frame.prototype._firstRoll = function() {
  return this.rolls[0];
};
