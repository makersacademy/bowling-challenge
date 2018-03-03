function Frame() {
  this.bowls = [];
  this.bowlIndex = 1;
  this.finalFrame = false;
  this.MAX_PINS = 10;
}

Frame.prototype.bowl = function (pins) {
  this.bowls.push(pins);
  this.bowlIndex++;
};

Frame.prototype.isStrike = function () {
  return (this.bowls[0] === this.MAX_PINS);
};

Frame.prototype.isSpare = function () {
  return (this.normalFrameScore() === this.MAX_PINS);
};

Frame.prototype.FrameScore = function () {
  if (!this.isStrike()) {
    return this.normalFrameScore();
  }
  return this.MAX_PINS;
};

Frame.prototype.finalFrameScore = function () {
  if (this.isStrike() || this.isSpare()) {
    return (this.normalFrameScore() + this.bowls[2]);
  }
  return this.normalFrameScore();
};

Frame.prototype.normalFrameScore = function () {
  return this.bowls[0] + this.bowls[1];
};
