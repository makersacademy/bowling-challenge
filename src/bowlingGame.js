function BowlingGame() {
  this.frameIndex = 1;
  this.frames = [];
};

BowlingGame.prototype._newFrame = function () {
  frame = {
    ball1: 0,
    ball2: 0,
    numberOfRolls: 0,
    score: 0,
    spare: false
  };
  this.frames.push(frame);
};

BowlingGame.prototype._wasSpare = function () {
  return this.frames[this.frameIndex - 1].spare
};

BowlingGame.prototype._calculateFrameScore = function () {
  if (this._wasSpare()) {
    total = this.frames[this.frameIndex].ball1 +
    this.frames[this.frameIndex].ball2 +
    this.frames[this.frameIndex - 1].ball2
  } else {
    total = this.frames[this.frameIndex].ball1 +
    this.frames[this.frameIndex].ball2
  }
  this.frames[this.frameIndex].score = total
  this._newFrame();
  this.frameIndex++;
};

BowlingGame.prototype._checkSpare = function () {
  total = this.frames[this.frameIndex].ball1 + this.frames[this.frameIndex].ball2
  rolls = this.frames[this.frameIndex].numberOfRolls
  if (total === 10 && rolls === 2) {
    this.frames[this.frameIndex].spare = true
  }
};

BowlingGame.prototype.startGame = function () {
  this.frames.push(0);
  this._newFrame();
};

BowlingGame.prototype.roll = function (pins) {
  this.frames[this.frameIndex].numberOfRolls++;
  if (this.frames[this.frameIndex].numberOfRolls === 2) {
    this.frames[this.frameIndex].ball2 = pins;
    this._checkSpare();
    this._calculateFrameScore();
  } else {
    this.frames[this.frameIndex].ball1 = pins;
  }
};
