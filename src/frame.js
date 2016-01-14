function Frame() {
  this._rolls = [];
  this._score = 0;
  this._bonus = null;
}

Frame.prototype.getFrameInfo = function () {
  return {rolls: this._rolls, score: this._score, bonus: this._bonus};
};
