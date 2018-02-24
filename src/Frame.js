'use strict';

function Frame() {
  this.bowls = [];
  this.bowlIndex = 1;
  MAX_PINS = 10;
};

Frame.prototype.bowl = function (pins) {
  this.bowls.push(pins);
  this.bowlIndex++;
};

Frame.prototype.isStrike = function () {
  return(this.bowls[0] === MAX_PINS);
};

Frame.prototype.isSpare = function () {
  return(this.bowls[0] + this.bowls[1] === MAX_PINS);
};
