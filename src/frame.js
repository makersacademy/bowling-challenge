'use strict';

function Frame(knockedPins){
  this._rollNumber = 0;
  this._firstRoll = knockedPins;
  this._secondRoll = 0
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
