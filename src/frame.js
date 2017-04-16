'use strict';

function Frame(knockedPins){
  this._rollNumber = 1;
  this._score = 0;
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

Frame.prototype.getSecondRoll = function () {
  return this._secondRoll;
};

Frame.prototype.playSecondRoll = function (knockedPins) {
  this._secondRoll = knockedPins;
};

Frame.prototype.checkStrike = function (knockedPins) {
  if ( knockedPins === 10 ) {
    this._isStrike = true;
    this._rollNumber += 1;
  } else if ( knockedPins > 10) {
    throw TypeError("Cheater. Too many pins.")
  };
};

Frame.prototype.checkSpare = function (knockedPins) {
  if ( this._firstRoll + knockedPins === 10 ) {
    this._isSpare = true
  } else if ( this._firstRoll + knockedPins > 10 ) {
    throw TypeError("Cheater. Too many pins.")
  };
};
