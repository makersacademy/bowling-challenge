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
  if (!this.isSpare() && !this.hasStrike()){
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
  return (this.getRolls()[0].getPinsKnocked()+ this.getRolls()[1].getPinsKnocked() === 10)
};

LastFrame.prototype.hasStrike = function () {
  return (this.getRolls()[0].getPinsKnocked() === 10)
};

LastFrame.prototype.isDone = function () {
  return (this.rollsLeft() === 0)
};

LastFrame.prototype.calculateFrameScore = function () {
  return this.getRolls().reduce(function(acc, roll){
    return acc + roll.getPinsKnocked();
  }, 0);
};

exports.LastFrame = LastFrame;
})(this);
