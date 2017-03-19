function Game() {
  this._frames = [];
}

Game.prototype.checkAllScores = function() {
  return this._frames;
}

Game.prototype.roll = function(numberOfBowledPins) {
  this._frames.push(numberOfBowledPins);
}
