function Game() {
  this._frames = [];
  this._MAXFRAMES = 10;
}

Game.prototype.checkAllScores = function() {
  return this._frames;
};

Game.prototype.calculateFrameTotal = function(firstBowl, secondBowl) {
  this._checkIfGameOver();
  if(this._isStrike(firstBowl, secondBowl)) {
    this._addFrameScore("X");
  } else {
    secondBowl = secondBowl || 0;
    this._addFrameScore(firstBowl + secondBowl);
  }
};

Game.prototype._addFrameScore = function(numberOfBowledPins) {
  this._frames.push(numberOfBowledPins);
};

Game.prototype._checkIfGameOver = function() {
  if(this.checkAllScores().length === this._MAXFRAMES) {
    throw new Error("Game over!");
  }
};

Game.prototype._isStrike = function(firstBowl, secondBowl) {
  return (firstBowl === 10 && secondBowl === undefined) ? true : false
};

Game.prototype._isSpare = function(firstBowl, secondBowl) {
  return (firstBowl + secondBowl === 10) ? true : false
};
