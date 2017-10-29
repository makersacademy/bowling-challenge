function Game() {
  this._score = 0;
  this._frames = []
};

Game.prototype.getScore = function () {
  return this._score;
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
  this._frame.firstRoll(pins)
  this._score += pins
  if (this._frame.isFinished()) {
    this._nextFrame()
  }
}

Game.prototype._secondBowl = function (pins) {
  this._frame.secondRoll(pins)
  this._score += pins
  this._nextFrame()
}

Game.prototype._nextFrame = function () {
  this._frames.push(this._frame._pinsKnockedDown)
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

Game.prototype.isGameOver = function () {
  return this._frames.length === 10
}