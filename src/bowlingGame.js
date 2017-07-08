function BowlingGame() {
  this.frameIndex = 1;
  this.frames = [];
  this.frames.push(0);
};

BowlingGame.prototype.newFrame = function () {
  frame = {
    ball1: 0,
    ball2: 0,
    numberOfRolls: 0,
    score: 0
  };
  this.frames.push(frame);
};

BowlingGame.prototype.roll = function (pins) {
  if (this.frames[this.frameIndex].numberOfRolls === 1) {
    this.frames[this.frameIndex].ball2 = pins;
    this._calculateFrameScore();
  } else {
    this.frames[this.frameIndex].ball1 = pins;
  }
  this.frames[this.frameIndex].numberOfRolls++;
};

BowlingGame.prototype._calculateFrameScore = function () {
  this.frames[this.frameIndex].score = this.frames[this.frameIndex].ball1 + this.frames[this.frameIndex].ball2
  this.newFrame();
  this.frameIndex++;
};
