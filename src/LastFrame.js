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
