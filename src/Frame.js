function Frame() {
  this._score = 0;
  this._pins = 10;
}

Frame.prototype.score = function() {
  return this._score;
};

Frame.prototype.pins = function () {
  return this._pins;
};
