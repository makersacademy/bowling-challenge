function Frame() {
  this._rolls = [];
  this._score = 0;
  this._bonus = null;
}

Frame.prototype.getFrameInfo = function () {
  return {rolls: this._rolls, score: this._score, bonus: this._bonus};
};

Frame.prototype.roll = function (pinsKnocked) {
  if (this._rolls.length === 0) {
    this._storeRoll(pinsKnocked);
    if (pinsKnocked === 10) {
      this._bonus = 'strike';
    }
  } else {
    this._storeRoll(pinsKnocked);
    this._isSpare();
  }
};

Frame.prototype.setDefaultValues = function () {
  this._rolls = [];
  this._score = 0;
  this._bonus = null;
};

Frame.prototype._storeRoll = function (pinsKnocked) {
  this._rolls.push(pinsKnocked);
  this._score += pinsKnocked;
};

Frame.prototype._isSpare = function () {
  if (this._score === 10 && this._rolls[0] < 10) {
    this._bonus = 'spare';
  }
};
