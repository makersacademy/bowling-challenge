'use strict';

function LastFrame() {
  this.rolls = [new Roll(), new Roll(), new Roll()];
};

LastFrame.prototype.getRolls = function () {
  return this.rolls;
};
