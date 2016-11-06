var Frame = function (game) {
  this.score = 0;
  this.bonusScore = 0;
  this.firstRoll = 0;
  this.secondRoll = 0;
  this.game = game;
}

Frame.prototype.rollOne = function (pins) {
  this.firstRoll = pins;
};

Frame.prototype.rollTwo = function (pins) {
  if (this._isSecondRollNeeded()) {
    this.secondRoll = pins;
  } else {
    throw "A strike was thrown on the first ball of the frame, score not recorded."
  }
};

Frame.prototype.rollThree = function (pins) {
  this.thirdRoll = pins;
};

Frame.prototype.bonusScoreCalculation = function () {
  if (this._currentFrame()._isSpare() && this._isNotLastFrame()) {
    this._spareScoreBonus()
  };
  if (this._currentFrame()._isDoubleStrike() && this._isNotLastFrame()) {
    this._doubleStrikeBonus();
  } else {
    this._strikeBonus();
  };
};

Frame.prototype._isStrike = function () {
  return (this.firstRoll === 10 && this._isNotLastFrame());
};

Frame.prototype._isNotStrike = function () {
  return this.firstRoll < 10;
};

Frame.prototype._isSecondRollNeeded = function () {
  return ((this._isNotStrike() && this._isNotLastFrame()) || this._isLastFrame());
};

Frame.prototype._isThridRollNeeded = function () {
  return ((this._isStrike() || this._isSpare()) && this._isLastFrame());
};

Frame.prototype._isSpare = function () {
  return (this._isNotStrike() && (this.firstRoll + this.secondRoll === 10));
};

Frame.prototype._isNotLastFrame = function () {
  return this.number < 10;
};

Frame.prototype._isLastFrame = function () {
  return this.number === 10;
};

Frame.prototype._allFrames = function () {
  return this.game.frames;
};

Frame.prototype._currentFrame = function () {
  return this._allFrames()[this._allFrames().indexOf(this)];
};

Frame.prototype._nextFrame = function () {
  return this._allFrames()[this._allFrames().indexOf(this) + 1];
};

Frame.prototype._twoFramesAlong = function () {
  return this._allFrames()[this._allFrames().indexOf(this) + 2];
};

Frame.prototype._spareScoreBonus = function () {
  if (this._currentFrame()._isSpare()) {
    this._currentFrame().bonusScore = this._nextFrame().firstRoll;
  };
};

Frame.prototype._strikeBonus = function () {
  if (this._currentFrame()._isStrike()) {
    this._currentFrame().bonusScore = this._nextFrame().firstRoll + this._nextFrame().secondRoll;
  };
};

Frame.prototype._isDoubleStrike = function () {
  return (this._currentFrame()._isStrike() && this._nextFrame()._isStrike());
};

Frame.prototype._doubleStrikeBonus = function () {
  if (this._currentFrame()._isDoubleStrike()) {
    this._currentFrame().bonusScore = this._nextFrame().firstRoll + this._twoFramesAlong().firstRoll;
  };
};

Frame.prototype._setFrameScore = function () {
  if (this._isNotLastFrame()) {
    this.score = (this.firstRoll + this.secondRoll);
  } else {
    this.score = (this.firstRoll + this.secondRoll + this.thirdRoll)
  }
};

Frame.prototype._frameScore = function () {
  return this.score
};
