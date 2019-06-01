function Frame() {
  this._bowls = [];
}

Frame.prototype.firstBowl = function (score) {
  this._bowls[0] = score;
  return this;
};

Frame.prototype.secondBowl = function (score) {
  this._bowls[1] = score;
  return this;
};
