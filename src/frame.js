'use strict';

function Frame(knockedPins){
  this._rollNumber = 0;
  this._firstRoll = knockedPins;
  this._secondRoll = 0;
  this._isStrike = false;
  this._isSpare = false;
}

Frame.prototype.getRollNumber = function () {
  return this._rollNumber;
};

Frame.prototype.getFirstRoll = function () {
  return this._firstRoll;
};

Frame.prototype.secondRoll = function (knockedPins) {
  this._secondRoll = knockedPins;
};

Frame.prototype.checkStrike = function (knockedPins) {
  if ( knockedPins === 10 ) {
    this._isStrike = true
  };

Frame.prototype.checkSpare = function (knockedPins) {
  if ( this._firstRoll + knockedPins === 10 ) {
    this._isSpare = true
  }
};

};
