function Frame() {
  this._rolls = [];
}

Frame.prototype.roll = function(value) {
 this._rolls.push(value);
};

Frame.prototype.calculateFrameScore = function () {
  return this._rolls.reduce(function(score1, score2) {
    return score1 + score2;
  }, 0);
};
