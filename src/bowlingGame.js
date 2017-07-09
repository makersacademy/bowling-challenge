function BowlingGame() {
  this.frameIndex = 0;
  this.frames = [];
}

BowlingGame.prototype.startGame = function () {
  for (let i = 0; i < 2; i += 1) {
    this._newFrame();
  }
  this.frameIndex = 1;
};

BowlingGame.prototype.roll = function (pins) {
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

BowlingGame.prototype.score = function () {
  let score = 0;
  for (let i = 0; i < this.frames.length; i += 1) {
    score += this.frames[i].score;
  }
  return score;
};

BowlingGame.prototype._newFrame = function (frame = new Frame()) {
  this.frames.push(frame);
  this.frameIndex += 1;
};

BowlingGame.prototype._currentFrame = function () {
  return this.frames[this.frameIndex];
};

BowlingGame.prototype._previousFrame = function () {
  return this.frames[this.frameIndex - 1];
};

BowlingGame.prototype._wasSpare = function () {
  return this._previousFrame().spare;
};

BowlingGame.prototype._wasStrike = function () {
  return this._previousFrame().strike;
};

BowlingGame.prototype._calcSpare = function () {
  return this._currentFrame().ball1 + this._currentFrame().ball2 +
  this._previousFrame().ball2;
};

BowlingGame.prototype._calcStrike = function () {
  return this._currentFrame().ball1 + this._currentFrame().ball2 +
  this._previousFrame().ball2 + this._previousFrame().ball1;
};

BowlingGame.prototype._calcRegular = function () {
  return this._currentFrame().ball1 + this._currentFrame().ball2;
};

BowlingGame.prototype._calculateFrameScore = function () {
  let total;
  if (this._wasSpare()) {
    total = this._calcSpare();
  } else if (this._wasStrike()) {
    total = this._calcStrike();
  } else {
    total = this._calcRegular();
  }
  this._currentFrame().score = total;
  this._newFrame();
};

BowlingGame.prototype._checkSpare = function () {
  const total = this._currentFrame().ball1 + this._currentFrame().ball2;
  const rolls = this._currentFrame().numberOfRolls;
  if (total === 10 && rolls === 2) {
    this._currentFrame().spare = true;
  }
};

BowlingGame.prototype._checkStrike = function (pins) {
  if (pins === 10) {
    this._currentFrame().strike = true;
    this._currentFrame().ball1 = this._previousFrame().ball2;
    this._currentFrame().ball2 = pins;
    this._calculateFrameScore();
  }
};
