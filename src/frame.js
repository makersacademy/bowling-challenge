'use strict'

function Frame(roll) {
  this.firstRoll = roll;
  this.secondRoll = 0;
  this.complete = this.result() === 'strike' ? true : false;
}

Frame.prototype.addRoll = function (roll) {
  this.secondRoll = roll;
  this._setFrameToComplete();
};

Frame.prototype.result = function () {
  if (this.firstRoll === 10) {
    return "strike";
  } else if (this.score() === 10) {
    return "spare";
  }
};

Frame.prototype.score = function () {
  return this.firstRoll + this.secondRoll;
};

Frame.prototype._setFrameToComplete = function () {
  this.complete = true;
};
