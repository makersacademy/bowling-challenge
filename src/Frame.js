// 'use strict';
// 'use strict' is unnecessary inside of modules
// But needed for jQuery I believe...

function Frame() {
  this.pins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this.rollCounter = 0;
  this.rolls = [];
}

Frame.prototype.roll = function (pinsKnocked) {
  this._isRollLegit();

  this.rolls.push({ roll: parseInt(`${pinsKnocked}`) });

  return pinsKnocked;
};

Frame.prototype._isRollLegit = function () {
  this.rollCounter += 1;

  if (this.rollCounter >= 3) {
    throw 'You already rolled twice. Start next frame!';
  }
};
