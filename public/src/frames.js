function Frames(number) {
  this.frameNumber = number
  this.firstThrow = 0
  this.secondThrow = 0
  this.strike = false
  this.spare = false
}

Frames.prototype.score = function (nextFrame, secondNextframe) {
  if ((this.strike) && nextFrame.strike) {
    this.score = 20 + secondNextframe.firstThrow
  } else if (this.strike) {
    this.score = 10 + nextFrame.firstThrow + nextFrame + secondThrow
  } else if (this.spare) {
    this.score = 10 + nextFrame.firstThrow
  } else {
    this.score = this.firstThrow + this.secondThrow
  }
  return this.score
};

Frames.prototype.setStrike = function () {
  this.strike = true;
};

Frames.prototype.setSpare = function () {
  this.spare = true;
};

Frames.prototype.isStrikeOrSpare = function () {
  if (this.firstThrow == 10) {
    this.strike = true
  } else if (this.firstThrow + this.secondThrow == 10) {
    this.spare = true
  }
};
