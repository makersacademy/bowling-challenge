'use strict';

function Frame() {
  this.bowls = [];
  this.bowlIndex = 1;
  this.finalFrame = 0;
};

Frame.prototype.bowl = function (pins) {
  this.bowls.push(pins);
  this.bowlIndex++;
};

Frame.prototype.isStrike = function () {
  return(this.bowls[0] === 10);
};

Frame.prototype.isSpare = function () {
  return(this.normalFrameScore() === 10);
};

Frame.prototype.FrameScore = function () {
  if (!this.isStrike()) {
    return this.normalFrameScore();
  } else {
    return 10;
  };
};

Frame.prototype.finalFrameScore = function () {
  if (this.isStrike() || this.isSpare()) {
    return(this.normalFrameScore() + this.bowls[2]);
  } else {
    return this.normalFrameScore();
  }
};

Frame.prototype.normalFrameScore = function () {
  return this.bowls[0] + this.bowls[1];
};
