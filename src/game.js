function Game() {
  this._score = 0;
  this._frames = []
};

Game.prototype.getScore = function () {
  for (var frameIndex = 0; frameIndex < this._frames.length; frameIndex++) {
    this.addBonus(frameIndex)
    this.addBonusFrameNine(frameIndex)
    this._score += this._frames[frameIndex].getScore()
  }
  return this._score
}

Game.prototype.bowl = function (pins) {
  if (this.isGameOver()) throw new Error('You\'re out of you\'re element Donny, no bowls left!')
  if (this._newFrameNeeded()) {
    this._firstBowl(pins)
  } else if (this._currentFrame._bonusRollActivated) {
    this._bonusBowl(pins)
  } else {
    this._secondBowl(pins)
  }
}

Game.prototype._firstBowl = function (pins) {
  if (this.isFinalFrame()) {
    this._frame = new FinalFrame
  } else {
    this._frame = new Frame
  }
  this._currentFrame = this._frame
  this._frame.firstRoll(pins)
  this._frames.push(this._frame)
}

Game.prototype._secondBowl = function (pins) {
  this._frame.secondRoll(pins)
}

Game.prototype._bonusBowl = function (pins) {
  this._frame.bonusRoll(pins)
}

Game.prototype._newFrameNeeded = function () {
  if (!this._frame) {
    return true;
  } else if (this._frame.isFinished()) {
    return true;
  } else {
    return false;
  }
}

Game.prototype.addBonus = function (frameIndex) {
  if (frameIndex < this._frames.length - 2) {
    if (this._frames[frameIndex].isAStrike()) {
      this._frames[frameIndex].frameBonus(this.strikeBonus(frameIndex))
    }
    if (this._frames[frameIndex].isASpare()) {
      this._frames[frameIndex].frameBonus(this.spareBonus(frameIndex))
    }
  }
}

Game.prototype.addBonusFrameNine = function (frameIndex) {
  if (frameIndex === this._frames.length - 2) {
    if (this._frames[frameIndex].isAStrike()) {
      this._frames[frameIndex].frameBonus(this.strikeBonus(frameIndex))
    }
    if (this._frames[frameIndex].isASpare()) {
      this._frames[frameIndex].frameBonus(this.spareBonus(frameIndex))
    }
  }
}

Game.prototype.isGameOver = function () {
  return this._frames.length === 10 && this._currentFrame.isFinished()
}

Game.prototype.strikeBonus = function (frameIndex) {
  if (this._frames[frameIndex+1].isAStrike() && frameIndex < 8) {
    return this._frames[frameIndex + 1].firstRollScore() + this._frames[frameIndex + 2].firstRollScore()
  }
  return this._frames[frameIndex + 1].firstRollScore() + this._frames[frameIndex + 1].secondRollScore()
}

Game.prototype.spareBonus = function (frameIndex) {
  return this._frames[frameIndex + 1].firstRollScore()
}

Game.prototype.isFinalFrame = function () {
  return this._frames.length === 9
}