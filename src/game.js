function Game() {
  this._frames = [];
}

Game.prototype.checkAllScores = function() {
  return this._frames;
};

Game.prototype.calculateFrameTotal = function(firstBowl, secondBowl) {
  if(this._isStrike(firstBowl, secondBowl)) {
    this._addFrameScore("X");
  } else {
    secondBowl = secondBowl || 0;
    var total = firstBowl + secondBowl;
    this._addFrameScore(total);
  }
};

Game.prototype._addFrameScore = function(numberOfBowledPins) {
  this._frames.push(numberOfBowledPins);
};

Game.prototype._isStrike = function(firstBowl, secondBowl) {
  if(firstBowl === 10 && secondBowl === undefined) {
    return true;
  } else {
    return false;
  }
};
