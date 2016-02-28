'use strict';

LastFrame.prototype = new Frame();
LastFrame.prototype.constructor = LastFrame;

function LastFrame() {
  this._rolls = [];
  this.remainingPins = 10;
}

LastFrame.prototype.roll = function (pins) {
  Frame.prototype.roll.call(this, pins);
  if (this.remainingPins === 0) {
    this.remainingPins = 10;
  }
};

LastFrame.prototype.isComplete = function () {
  var maxRolls = this.isAStrike() || this.isASpare() ? 3 : 2;
  return this._rolls.length >= maxRolls;
};
