function Game() {
  this._score = 0;
  this._frames = []
};

Game.prototype.getScore = function () {
  return this._score;
}

Game.prototype.bowl = function (pins) {
  if (!this._frame) {
    this._firstBowl(pins)
  } else if (this._frame) {
    this._secondBowl(pins)
  }
}

Game.prototype._firstBowl = function (pins) {
  this._frame = new Frame
  this._frame.firstRoll(pins)
  this._score += pins
}

Game.prototype._secondBowl = function (pins) {
  this._frame.secondRoll(pins)
  this._frame = null
  this._score += pins
  this._frames.push(this._frame)
}