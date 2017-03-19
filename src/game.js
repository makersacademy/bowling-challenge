function Game() {
  this._frames = [];
}

Game.prototype.checkAllScores = function() {
  return this._frames;
};

Game.prototype._addFrameScore = function(numberOfBowledPins) {
  this._frames.push(numberOfBowledPins);
};

Game.prototype.calculateFrameTotal = function(firstBowl, secondBowl) {
  secondBowl = secondBowl || 0;
  var total = firstBowl + secondBowl;
  this._addFrameScore(total);
};
