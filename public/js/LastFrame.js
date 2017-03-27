(function(exports){

'use strict';

function LastFrame() {
  this.rolls = [new Roll(), new Roll(), new Roll()];
};

LastFrame.prototype.getRolls = function () {
  return this.rolls;
};

LastFrame.prototype.play = function (pinsKnocked) {
  this._currentRoll().setPinsKnocked(pinsKnocked);
};

LastFrame.prototype.rollsLeft = function () {
  if (this.getRolls()[0].isSet() && this.getRolls()[1].isSet() && !this.isSpare() && !this.hasStrike()){
    return 0
  }
  return this.getRolls().filter(function (roll) {
    return roll.isSet() === false;
}).length
};

LastFrame.prototype._currentRoll = function () {
  var currentRoll = this.getRolls().find(function(roll){
    return roll.isSet() === false;
  });
  return currentRoll;
};

LastFrame.prototype.isSpare = function () {
  return (this.getRollScore(0)+ this.getRollScore(1) === 10)
};

LastFrame.prototype.hasStrike = function () {
  return (this.getRollScore(0) === 10)
};

LastFrame.prototype.isDone = function () {
  return (this.rollsLeft() === 0)
};

LastFrame.prototype.calculateFrameScore = function () {
  if (this.hasStrike()){
    return this.getRollScore(0)
  }
  return (this.getRollScore(0) + this.getRollScore(1))
};

LastFrame.prototype.getRollScore = function (index) {
  return this.getRolls()[index].getPinsKnocked();
};

exports.LastFrame = LastFrame;
})(this);
