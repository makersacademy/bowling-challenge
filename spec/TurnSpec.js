function Turn () {
  this._throws = []
}

Turn.prototype.isAStrike = function () {
  return this._throws[0] === 10
};
