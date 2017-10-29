function Game() {
  this._score = 0;
  this._frames = []
};

Game.prototype.getScore = function () {
  this.addBonus()
  for (var frameIndex = 0; frameIndex < this._frames.length; frameIndex++) {
    this._score += this._frames[frameIndex].getScore()
  }
  return this._score
}

Game.prototype.bowl = function (pins) {
  if (this.isGameOver()) throw new Error('You\'re out of you\'re element Donny, no bowls left!')
  if (this._newFrameNeeded()) {
    this._firstBowl(pins)
  } else {
    this._secondBowl(pins)
  }
}

Game.prototype._firstBowl = function (pins) {
  this._frame = new Frame
  this._currentFrame = this._frame
  this._frame.firstRoll(pins)
  this._frames.push(this._frame)
}

Game.prototype._secondBowl = function (pins) {
  this._frame.secondRoll(pins)
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

Game.prototype.addBonus = function () {
  for (var frameIndex = 0; frameIndex < this._frames.length; frameIndex++) {
    if (this._frames[frameIndex].isAStrike()) {
      this._frames[frameIndex].frameBonus(this._frames[frameIndex+1].firstRollScore() + this._frames[frameIndex+1].secondRollScore())
    }
    if (this._frames[frameIndex].isASpare()) {
      console.log('spare')
      this._frames[frameIndex].frameBonus(this._frames[frameIndex+1].firstRollScore())
    } else {
      console.log('no bonus')
    }
  }
}

Game.prototype.isGameOver = function () {
  return this._frames.length === 10 && this._currentFrame.isFinished()
}