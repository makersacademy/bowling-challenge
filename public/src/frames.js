function Frames(number) {
  this.firstThrow = 0
  this.secondThrow = 0
  this.strike = false
  this.spare = false
  this.score = 0
}

Frames.prototype.scoreFrame = function (nextFrame, secondNextFrame) {
  if ((this.strike || this.spare) && nextFrame == null) {
    return 0
  }
  if (this.strike && secondNextFrame == null) {
    return 0
  }
  console.log(nextFrame);
  console.log(secondNextFrame);
  if (this.strike && nextFrame.strike && secondNextFrame.strike) {
    this.score = 30
  } else if (this.strike && nextFrame.strike) {
    this.score = 20 + secondNextFrame.firstThrow
  } else if (this.strike) {
    this.score = 10 + nextFrame.firstThrow + nextFrame.secondThrow
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
