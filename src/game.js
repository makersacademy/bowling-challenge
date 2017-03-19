function Game() {
  this._frames = [];
}

Game.prototype.checkAllScores = function() {
  return this._frames;
};

Game.prototype.addFrameScore = function(numberOfBowledPins) {
  this._frames.push(numberOfBowledPins);
};

Game.prototype.calculateFrameTotal = function(firstBowl, secondBowl) {
  var total = firstBowl + secondBowl;
  this.addFrameScore(total);
}
