'use strict';

function Frame(knockedPins){
  this._rollNumber = 0;
  this._firstRoll = knockedPins;
}

Frame.prototype.getRollNumber = function () {
  return this._rollNumber;
};

Frame.prototype.getFirstRoll = function () {
  return this._firstRoll;
};
