function Frame() {
  this._totalPoints = 0;
  this._ballOne = 0;
}

Frame.prototype.showTotalPoints = function () {
  return this._totalPoints;
};
