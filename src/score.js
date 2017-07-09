function Score() {
  this.frames = []
  this.frameIndex = -1
}

Score.prototype.newFrame = function (frame = new Frame()) {
  this.frames.push(frame);
  this.frameIndex += 1;
};

Score.prototype.record = function ( pins ) {
  this._currentFrame().numberOfRolls += 1;
  if (this._currentFrame().numberOfRolls === 2) {
    this._currentFrame().ball2 = pins;
    this._checkSpare();
    this._calculateFrameScore();
  } else {
    this._checkStrike(pins);
    this._currentFrame().ball1 = pins;
  }
};

Score.prototype.total = function () {
  let score = 0;
  for (let i = 0; i < this.frames.length; i += 1) {
    score += this.frames[i].score;
  }
  return score;
};

Score.prototype._currentFrame = function () {
  return this.frames[this.frameIndex];
};

Score.prototype._previousFrame = function () {
  return this.frames[this.frameIndex - 1];
};

Score.prototype._wasSpare = function () {
  return this._previousFrame().spare;
};

Score.prototype._wasStrike = function () {
  return this._previousFrame().strike;
};

Score.prototype._calculateFrameScore = function () {
  let total;
  if (this._wasSpare()) {
    total = this._calcSpare();
  } else if (this._wasStrike()) {
    total = this._calcStrike();
  } else {
    total = this._calcRegular();
  }
  this._currentFrame().score = total;
  this.newFrame();
};

Score.prototype._calcRegular = function () {
  return this._currentFrame().ball1 + this._currentFrame().ball2;
};

Score.prototype._calcSpare = function () {
  return this._currentFrame().ball1 + this._currentFrame().ball2 +
  this._previousFrame().ball2;
};

Score.prototype._calcStrike = function () {
  return this._currentFrame().ball1 + this._currentFrame().ball2 +
  this._previousFrame().ball2 + this._previousFrame().ball1;
};

Score.prototype._checkSpare = function () {
  const total = this._currentFrame().ball1 + this._currentFrame().ball2;
  const rolls = this._currentFrame().numberOfRolls;
  if (total === 10 && rolls === 2) {
    this._currentFrame().spare = true;
  }
};

Score.prototype._checkStrike = function (pins) {
  if (pins === 10) {
    this._currentFrame().strike = true;
    this._currentFrame().ball1 = this._previousFrame().ball2;
    this._currentFrame().ball2 = pins;
    this._calculateFrameScore();
  }
};
